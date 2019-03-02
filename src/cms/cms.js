import CMS from 'netlify-cms'
import KoolitusedPreview from './preview-templates/KoolitusedPreview'
import GaraazPagePreview from './preview-templates/GaraazPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('garaaz', GaraazPagePreview)
CMS.registerPreviewTemplate('koolitused', KoolitusedPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
