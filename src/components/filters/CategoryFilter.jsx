import React from 'react';
import { Select } from 'antd';
import { useSelect } from '../../hooks/useSelect';

const categoryOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
];


const CategoryFilter = () => {
  const { handleChange, handleSearch } = useSelect();

  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Categories"
      style={{ width: 180 }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={categoryOptions}
    />
  );
};

export default CategoryFilter;