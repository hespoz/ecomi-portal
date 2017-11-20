import axios from 'axios';

const api = {
    register : function(payload) {
        return axios.post(`http://localhost:3000/api/register`, payload);
    }
}

export default api;