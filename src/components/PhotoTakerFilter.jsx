import React from 'react';
import { Select } from 'antd';
import { useSelect } from '../hooks/useSelect';

const photoTakerOptions = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
];


const PhotoTakerFilter = () => {
  const { handleChange, handleSearch } = useSelect();

  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Photo Takers"
      style={{ width: 180 }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={photoTakerOptions}
    />
  );
};

export default PhotoTakerFilter;