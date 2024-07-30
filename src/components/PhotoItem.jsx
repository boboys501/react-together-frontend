import React from 'react';
import { Button } from 'antd';
import './PhotoItem.css';

const PhotoItem = ({ photo, onLike, onDislike, onZoom }) => {
  return (
    <div className="photo-item">
      <img src={photo.src} alt={photo.alt} />
      <div className="button-group">
      <Button 
          icon='🤔'
          onClick={() => onDislike(photo.id)}
          style={{ backgroundColor: photo.userDisliked ? '#fff1f0' : '#FFFFFF' }}
        >
          {photo.dislikes}
        </Button>
        <Button 
          icon='😍'
          onClick={() => onLike(photo.id)}
          style={{ backgroundColor: photo.userLiked ? '#e6f7ff' : '#FFFFFF' }}
        >
          {photo.likes}
        </Button>
      </div>
      <Button 
        className="zoom-button"
        icon='🔍'
        onClick={() => onZoom(photo.src)}
      />
    </div>
  );
};

export default PhotoItem;