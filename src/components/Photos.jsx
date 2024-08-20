import { Layout } from 'antd';
import Gallery from './Gallery';
import FilterGroup from './filters/FilterGroup';

const { Content } = Layout;

const Photos = () => {
  return (
    <Content style={{ padding: '10px 48px' }}>
      <FilterGroup />
      <div style={{
        background: '#fff',
        margin: '20px 0 0 0',
        height: '100%',
        padding: 24,
        borderRadius: 8,
      }}>
        <Gallery />
      </div>
    </Content>
  );
};

export default Photos;
