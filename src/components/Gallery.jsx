import React, { useState, useEffect } from 'react';
import { Pagination, Modal } from 'antd';
import PhotoItem from './PhotoItem';
import { Button } from 'antd';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const photosPerPage = 20;

  useEffect(() => {
    fetchPhotos(currentPage);
  }, [currentPage]);

  const fetchPhotos = async (page) => {
    try {
      // 模擬 API 調用
      const mockPhotos = Array(20).fill().map((_, i) => ({
        id: i + 1 + (page - 1) * 20,
        src: 'src/testImage/DSCF7162.JPG',
        alt: `照片${i + 1 + (page - 1) * 20}`,
        likes: 0,
        dislikes: 0,
        userLiked: false,
        userDisliked: false
      }));
      setPhotos(mockPhotos);
      setTotalPhotos(100); // 假設總共有 100 張照片
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLike = (id) => {
    setPhotos(photos.map(photo => {
      if (photo.id === id) {
        if (photo.userLiked) {
          // 如果已經點讚，則取消點讚
          return { ...photo, likes: photo.likes - 1, userLiked: false };
        } else {
          // 如果還沒點讚，則添加點讚
          // 如果之前點dislike了，則同時取消點dislike
          return { 
            ...photo, 
            likes: photo.likes + 1, 
            userLiked: true,
            dislikes: photo.userDisliked ? photo.dislikes - 1 : photo.dislikes,
            userDisliked: false
          };
        }
      }
      return photo;
    }));
  };

  const handleDislike = (id) => {
    setPhotos(photos.map(photo => {
      if (photo.id === id) {
        if (photo.userDisliked) {
          // 如果已經點dislike，則取消點dislike
          return { ...photo, dislikes: photo.dislikes - 1, userDisliked: false };
        } else {
          // 如果還沒點dislike，則添加點dislike
          // 如果之前點讚了，則同時取消點讚
          return { 
            ...photo, 
            dislikes: photo.dislikes + 1, 
            userDisliked: true,
            likes: photo.userLiked ? photo.likes - 1 : photo.likes,
            userLiked: false
          };
        }
      }
      return photo;
    }));
  };

  const handleZoom = (src) => {
    setZoomedImage(src);
  };

  return (
    <div className="gallery">
      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoItem 
            key={photo.id} 
            photo={photo} 
            onLike={handleLike}
            onDislike={handleDislike}
            onZoom={handleZoom}
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
        onCancel={() => setZoomedImage(null)}
        footer={[
          <Button key="1">1</Button>,
          <Button key="2">2</Button>
        ]}
        width={800}
      >
        <img src={zoomedImage} alt="Zoomed" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

export default Gallery;