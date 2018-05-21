import axios from 'axios';

const domain = 'https://flashcube-back-end.herokuapp.com'

export function getUserById (userId) {

    console.log(userId)

    console.log(`${domain}/api/users/${userId}`)

    return axios
        .get(`${domain}/api/users/${userId}`, )
        .then(res => {
            console.log(res);
            return res.data.result.records;
        })
        .catch(console.log);

}

export function getAllTopics () {

    return axios
        .get(`${domain}/api/topics`, )
        .then(res => {
            return res.data.result.records;
        })
        .catch(console.log);

}

export function getAllTerms () {

    return axios
        .get(`${domain}/api/terms`, )
        .then(res => {
            return res.data.result.records;
        })
        .catch(console.log);

}