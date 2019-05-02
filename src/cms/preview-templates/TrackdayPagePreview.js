import React from 'react'
import PropTypes from 'prop-types'
import { TrackdayPageTemplate } from '../../templates/trackday'

const TrackdayPagePreview = ({ entry, widgetFor }) => (
  <TrackdayPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TrackdayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TrackdayPagePreview
