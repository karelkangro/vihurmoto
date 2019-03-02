import React from 'react'
import PropTypes from 'prop-types'
import { KoolitusedTemplate } from '../../templates/koolitused'

const KoolitusedPreview = ({ entry, widgetFor }) => (
  <KoolitusedTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

KoolitusedPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default KoolitusedPreview
