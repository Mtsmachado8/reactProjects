import axios from 'axios';

const KEY = 'AIzaSyALV8HCi6VfSiGQF11n6pNPcDkSmYh9zBk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
