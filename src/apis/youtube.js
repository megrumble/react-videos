import axios from 'axios';

const KEY = 'AIzaSyBtbMBJwq1Ax3xF0J0UIYhgiYcfyAxA3d8';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});