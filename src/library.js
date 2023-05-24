import * as renderingFromStorage from './js/render-storage';
import * as openModal from './js/open-close-modal';
import { getLibStateLocalStorage } from './js/set-get-local-storage';

renderingFromStorage.setLibrary(getLibStateLocalStorage());

