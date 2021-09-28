import axios from 'axios';

export default axios.create({
    baseURL : 'https://ghost-blog.ipxp.in/ghost/api/v3/content'
})