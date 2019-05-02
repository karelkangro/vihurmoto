import React from 'react'
import PropTypes from 'prop-types'
import { TrainingPageTemplate } from '../../templates/treeningud'

const TrainingPagePreview = ({ entry, widgetFor }) => (
  <TrainingPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TrainingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TrainingPagePreview
