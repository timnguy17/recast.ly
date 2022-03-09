import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  // TODO

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { q: query},
    contentType: 'application/json',
    // success: callback(),
    success: function (items) {
      callback(items);
    },
    error: errorCB || function(error) {
      console.error('searchYoutube: Failed to fetch data', error);
    }
  });
};

export default searchYouTube;
