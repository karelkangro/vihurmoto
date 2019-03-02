import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const FeatureGrid = ({ gridItems }) => (
  <FeaturesGrid>
    {gridItems.map(item => (
      <div key={item.text}>
        <PreviewCompatibleImage imageInfo={item} />
        <p>{item.text}</p>
      </div>
    ))}
  </FeaturesGrid>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
