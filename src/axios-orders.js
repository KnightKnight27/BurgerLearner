import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-burger-da887-default-rtdb.firebaseio.com/'}
);
export default instance;