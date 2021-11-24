import axios from 'axios';
const baseUrl = 'http://mobileappdbapi-env.eba-srvjzqzd.eu-west-1.elasticbeanstalk.com:5000/';


const login = (username, idNumber) => {
  return axios.post(`${baseUrl}users/signin/auth`, {
    username,
    idNumber
  })
    .then(res => {
        return res.data;
        })
    .catch(function (error) {
        alert(error);
    })
}

const signup = (firstName,LastName,gender, password, email,idNumber) => {
  return axios.post(`${baseUrl}users/signup`, {
    firstName,
    LastName,
    gender,
    password,
    email,
    idNumber
  })
  .then(res => {
    return res.data
  })
  .catch( function (error){
    alert(error);

  })
}



export default {login, signup}