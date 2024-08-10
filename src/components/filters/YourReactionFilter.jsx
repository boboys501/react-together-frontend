import React from 'react';
import { Select } from 'antd';
import { useSelect } from '../../hooks/useSelect';

const reactionOptions = [
  { value: 'Liked', label: 'Liked' },
  { value: 'Disliked', label: 'Disliked' },
  { value: 'None', label: 'None' },
];



const YourReactionFilter = () => {
  const { handleChange, handleSearch } = useSelect();

  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Your Reactions"
      style={{ width: 180 }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={reactionOptions}
    />
  );
};

export default YourReactionFilter;