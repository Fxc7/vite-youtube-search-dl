import './public/css/style.css';
import { resultContent, eventContent, footerCounter } from './lib/main.js';

const container = document.querySelector('#app');

container.innerHTML = `
  <img class="logo" src="/images/logo.png" alt="youtube downloader" />
  <h1>Youtube Downloader</h1>
  <div class="button-container">
    <input type="text" class="input-url" placeholder="input searching..."></input>
    <button class="button submit-download"><i class="hidden fa fa-spinner fa-spin"></i> Submit</button>
  </div>
  <div class="results hidden">
  </div>
  <p class="read-the-docs"></p>
`;

const inputUrl = document.querySelector('.input-url');
const button = document.querySelector('.submit-download');
const loader = document.querySelector('i');

button.addEventListener('click', async (event) => {
  loader.classList.remove('hidden');
  const results = await eventContent(event, inputUrl);
  resultContent(document.querySelector('.results'), results.data);
});

inputUrl.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    loader.classList.remove('hidden');
    const results = await eventContent(event, inputUrl);
    resultContent(document.querySelector('.results'), results.data);
  }
});

footerCounter(document.querySelector('.read-the-docs'));