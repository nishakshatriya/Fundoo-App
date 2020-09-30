import Axios from "axios";

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

export const  resetWithEmailId = (user, callback)=>{
  return  Axios.post(
      `${baseUrl}/user/reset`,
      user
    )
      .then((response) => {
        callback(response.data.message);
      })
      .catch((error) => {
        callback(error.response.data.error.message);
      });
  }

 export const createUserAccount =  (user,callback) => {
   return Axios.post(
      `${baseUrl}user/userSignUp`,
      user
    )
      .then((response) => {
        callback(response.data.data.message);
      })
      .catch((error) => {
        // handle error
        callback(error.response.data.error.message);
      });
  }

export const  loginWithCredentials = async (user,callback) => {
  return await Axios.post(
      `${baseUrl}user/login`,
      user
    )
      .then((response) => {
        callback("Login Successful");
      })
      .catch((error) => {
        callback("login Failed");
      });
  }

 export const resetWithToken = (user, token, callback) => {
   return Axios.post(
      `${baseUrl}/user/reset-password?access_token=` +
        token,
      user,{header:{
        'content-type':'application/json'
      }}
    )
      .then((response) => {
        let messageSnackbar =
          response.status === 204 ? "Password successfully reset!" : "Cannot Reset!";
        callback(messageSnackbar);
      })
      .catch((error) => {
        callback(error.response.data.error.message);
      });
  }


