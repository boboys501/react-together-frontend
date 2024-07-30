import React from 'react';
import { Select } from 'antd';
import { useSelect } from '../hooks/useSelect';

const sortOptions = [
  { value: 'uploadTime', label: '上傳時間' },
  { value: 'shootTime', label: '拍攝時間' },
];


const Sort = () => {
  const { handleChange } = useSelect();

  return (
    <Select
      placeholder="Select Sorting"
      defaultValue="uploadTime"
      style={{ width: 180 }}
      onChange={handleChange}
      options={sortOptions}
    />
  );
};

export default Sort;