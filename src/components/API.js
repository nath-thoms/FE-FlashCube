import axios from 'axios';

const domain = 'https://flashcube-back-end.herokuapp.com'

export function getUserById (userId) {

    return axios
        .get(`${domain}/api/users/${userId}`, )
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(console.log);

}