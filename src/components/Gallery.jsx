import { useState, useEffect } from 'react';
import { Pagination, Modal } from 'antd';
import PhotoItem from './PhotoItem';
import ReactionButtons from './ReactionButtons';
import { fetchWithAuth } from '../services/api';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const photosPerPage = 100;

  useEffect(() => {
    fetchPhotosData(currentPage);
  }, [currentPage]);

  const fetchPhotosData = async (page) => {
    try {
      const data = await fetchWithAuth(`/photos/?page=${page}&limit=${photosPerPage}`);
      const { total, data: photosData } = data;

      const updatedPhotos = photosData.map(photo => ({
        id: photo.id,
        src: photo.flickrPhotoSizes.find(size => size.label === 'Medium').source,
        fullSizeSrc: photo.flickrPhotoSizes.find(size => size.label === 'Original').source,
        alt: photo.fileName,
        likes: 0,
        dislikes: 0,
        userLiked: false,
        userDisliked: false
      }));
      
      setPhotos(updatedPhotos);
      setTotalPhotos(total); 
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLike = (id) => {
    setPhotos(prevPhotos => {
      const updatedPhotos = prevPhotos.map(photo => {
        if (photo.id === id) {
          return {
            ...photo,
            likes: photo.userLiked ? photo.likes - 1 : photo.likes + 1,
            userLiked: !photo.userLiked,
            dislikes: photo.userDisliked ? photo.dislikes - 1 : photo.dislikes,
            userDisliked: false
          };
        }
        return photo;
      });

      setCurrentPhoto(updatedPhotos.find(photo => photo.id === id));

      return updatedPhotos;
    });
  };

  const handleDislike = (id) => {
    setPhotos(prevPhotos => {
      const updatedPhotos = prevPhotos.map(photo => {
        if (photo.id === id) {
          return {
            ...photo,
            dislikes: photo.userDisliked ? photo.dislikes - 1 : photo.dislikes + 1,
            userDisliked: !photo.userDisliked,
            likes: photo.userLiked ? photo.likes - 1 : photo.likes,
            userLiked: false
          };
        }
        return photo;
      });

      setCurrentPhoto(updatedPhotos.find(photo => photo.id === id));

      return updatedPhotos;
    });
  };

  const handleZoom = (photo) => {
    setZoomedImage(photo.fullSizeSrc);
    setCurrentPhoto(photo);
  };

  return (
    <div className="gallery">
      <div className="photo-grid">
        {photos.map(photo => (
          <PhotoItem 
            key={photo.id} 
            photo={photo} 
            onLike={handleLike}
            onDislike={handleDislike}
            onZoom={() => handleZoom(photo)}
          />
        ))}
      </div>
      <Pagination
        current={currentPage}
        total={totalPhotos}
        pageSize={photosPerPage}
        onChange={handlePageChange}
        showSizeChanger={false}
        showQuickJumper
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
      <Modal
        open={zoomedImage !== null}
        onCancel={() => {
          setZoomedImage(null);
          setCurrentPhoto(null);
        }}
        footer={
          currentPhoto ? (
            <ReactionButtons 
              photo={currentPhoto} 
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ) : null
        }
        width={800}
      >
        <div className="modal-image-container">
          <img src={zoomedImage} alt="Zoomed" className="modal-image" />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
