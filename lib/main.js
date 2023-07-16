'use strict';

import axios from 'axios';
import moment from 'moment-timezone';

const apikey = 'APIKEY';

export function resultContent(element, content) {
  element.classList.remove('hidden');
  if (content.status) {
    element.innerHTML = `
    <img class="logo logo-thumbnail" src="${content.result.thumbnail}" alt=""/>
    <p class="read-the-title">${content.result.title}</p>
    <p class="read-the-views">${content.result.views_count}</p>
    <button class="audio"><a target="_blank" href="${content.result.audio_url}">Download MP3</a></button>
    <button class="video"><a target="_blank" href="${content.result.video_url}">Download MP4</a></button>
  `;
    document.querySelector('i').classList.add('hidden');
    return;
  } else {
    element.innerHTML = `<p class="error">Video not matched...</p>`;
    document.querySelector('i').classList.add('hidden');
    return;
  }
}

export async function eventContent(event, input) {
  event.preventDefault();
  const text = input.value;
  const response = await axios.get(`https://api-fxc7.cloud.okteto.net/api/download/play-youtube?query=${text}&apikey=${apikey}`);
  return response;
}

export function footerCounter(element) {
  const year = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('YYYY');
  element.innerHTML = `&copy; ${year} Farhannnn, Inc.`;
  return;
}