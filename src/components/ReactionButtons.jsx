import React from 'react';
import { Button } from 'antd';

const ReactionButtons = ({ photo, onLike, onDislike }) => {
  return (
    <div className="reaction-button">
      <div className="button-group">
        <Button 
          icon="🤔" // 使用圖標組件
          onClick={() => onDislike(photo.id)}
          style={{ backgroundColor: photo.userDisliked ? '#fff1f0' : '#FFFFFF' }}
        >
          {photo.dislikes}
        </Button>
        <Button 
          icon="😍" // 使用圖標組件
          onClick={() => onLike(photo.id)}
          style={{ backgroundColor: photo.userLiked ? '#e6f7ff' : '#FFFFFF' }}
        >
          {photo.likes}
        </Button>
      </div>
    </div>
  );
};

export default ReactionButtons;