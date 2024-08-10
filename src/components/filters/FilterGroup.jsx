import React from 'react';
import { Select, Col, Row } from 'antd';
import { useSelect } from '../../hooks/useSelect';
import { sortOptions, categoryOptions, photoTakerOptions, reactionOptions } from '../../constants/options';

const Sort = () => {
  const { handleChange } = useSelect();
  return (
    <Select
      placeholder="Select Sorting"
      defaultValue="uploadTime"
      style={{ width: '100%' }}
      onChange={handleChange}
      options={sortOptions}
    />
  );
};

const CategoryFilter = () => {
  const { handleChange, handleSearch } = useSelect();
  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Categories"
      style={{ width: '100%' }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={categoryOptions}
    />
  );
};

const PhotoTakerFilter = () => {
  const { handleChange, handleSearch } = useSelect();
  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Photo Takers"
      style={{ width: '100%' }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={photoTakerOptions}
    />
  );
};

const YourReactionFilter = () => {
  const { handleChange, handleSearch } = useSelect();
  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select Your Reactions"
      style={{ width: '100%' }}
      optionFilterProp="label"
      onChange={handleChange}
      onSearch={handleSearch}
      options={reactionOptions}
    />
  );
};

const FilterGroup = () => (
  <div className="filter-group">
    <Row gutter={16}>
      <Col xs={24} sm={12} md={6} lg={6}>
        Sort By <br /><Sort />
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
        Category Filter <br /><CategoryFilter />
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
        Photo Taker Filter <br /><PhotoTakerFilter />
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
        Your Reaction Filter <br /><YourReactionFilter />
      </Col>
    </Row>
  </div>
);

export default FilterGroup;
