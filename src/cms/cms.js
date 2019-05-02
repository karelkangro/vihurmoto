import CMS from 'netlify-cms'
import KoolitusedPreview from './preview-templates/KoolitusedPreview'
import GaraazPagePreview from './preview-templates/GaraazPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TrainingPagePreview from './preview-templates/TrainingPagePreview'
import TrackdayPagePreview from './preview-templates/TrackdayPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('garaaz', GaraazPagePreview)
CMS.registerPreviewTemplate('koolitused', KoolitusedPreview)
CMS.registerPreviewTemplate('trackday', TrackdayPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('treeningud', TrainingPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
