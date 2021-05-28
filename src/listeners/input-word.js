import { handleInputWord } from '../handlers/input-word.js';

document
  .getElementById('input-form')
  .addEventListener('click', handleInputWord);

document
  .getElementById('input-form')
  .addEventListener('submit', handleInputWord);
