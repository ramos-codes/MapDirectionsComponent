import axios from 'axios';

const directions = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/directions/json?',
    params: {

        origin: '2 muroc lake dr apt 222 Novato Ca',
        destination: 'San Francisco',
        key: 'AIzaSyB6IC2IrL6pzAYlb2xfsT6gR22wCWDt0Tw'
    }
});


const stepsData = () => {
    directions.get()
    .then(res => console.log(res))
};

export default stepsData;