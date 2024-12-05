import {createDescriptionsPhoto} from './data.js';
import {renderGallery} from './gallery.js';

const pictures = createDescriptionsPhoto();
renderGallery(pictures);
