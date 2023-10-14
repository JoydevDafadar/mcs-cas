import axios from 'axios';

export function fetchAllCa (){

    return new Promise(async (resolve) => {
        const {data} = await axios.get('http://localhost:8080/CA');
        // console.log(res);
        resolve({data});
    })

}