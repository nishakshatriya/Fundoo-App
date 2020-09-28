import Axios from 'axios'

class callServices {

    loginWithCredentials(userCredentials,callback) {
        Axios.post(
          "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
          userCredentials
        )
          .then((response) => {
            callback(response.data.message);
          })
          .catch((error) => {
            callback(error.response.data.error.message);
          });
      }
}

export default callServices