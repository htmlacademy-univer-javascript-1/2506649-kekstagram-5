import {createDescriptionsPhoto} from './data.js';
import {renderGallery} from './gallery.js';
import './image-upload-form.js';

const pictures = createDescriptionsPhoto();
renderGallery(pictures);
