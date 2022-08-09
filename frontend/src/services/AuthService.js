import axios from 'axios';

export const verifyToken = () => {  

  const accessToken = $cookies.get('access_token');
  console.log("file: AuthService.js ~ line 17 ~ verifyToken ~ accessToken", accessToken)
    
  if (accessToken) { 
    return axios.post('http://localhost:8000/api/token/verify/', {
      token: accessToken
    }).then(function (response) {
      return {
        message: 'You are login now', status: true, response: response
      }
    }).catch(function (error) {
      // refreshToken();
      return {
        message: 'Verify token Error', status: false, response: error
      }
    }) 
  } else {
    return {
      message: 'Access Token not defined', status: false, response: response
    }
  }
}

export function refreshToken() {  

  const refreshToken = localStorage.getItem('refresh_token');
  console.log("file: AuthService.js ~ line 41 ~ refreshToken ~ refreshToken", refreshToken)

  if (refreshToken) { 
    return axios.post('http://localhost:8000/api/token/refresh/', {
      refresh: refreshToken
    }).then(function (response) {
      return {
        message: 'You are login now', status: true, response: response
      }
    }).catch(function (error) {
      // return _this.refreshTokens(refreshToken);
    }) 
  } else {
    
  }
}

export function register() {
// axios.post(`http://localhost:8000/api/token/`, body, config).then(data => {
//     console.log("🚀 ~ file: Login.vue ~ line 121 ~ axios.post ~ data", data)
//     try {
//       localStorage.setItem('accessToken', data.data.access)
//       localStorage.setItem('refreshToken', data.data.refresh)
//     } catch(e) {

//     }
//   });
}

export const login = async(user, password) => {
  const body = JSON.stringify(user, password);
  const config = {
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': '8Fz6HbID7yTfhiBd4EtMVaYixoMOVbVd6gnmi2LFoPTDDpIerycdJc7F07sMncYV',
      // 'Authorization': 'Token o3byMw11upDVuq3KWcoAurw3AGy2Dq7SyhpmIqYimlaVpyQ6YDr7VMgFzQJTIcs9'
    }
  };
  try {
    const response = await axios.post(`http://localhost:8000/api/token/`, body, config);
    localStorage.setItem('refresh_token', response.data.data.refresh)
    return {
      message: 'You are login now', status: true, response: response
    }
  } catch (e) { }
}

export function logout() {
// axios.post(`http://localhost:8000/api/token/`, body, config).then(data => {
//     console.log("🚀 ~ file: Login.vue ~ line 121 ~ axios.post ~ data", data)
//     try {
//       localStorage.setItem('accessToken', data.data.access)
//       localStorage.setItem('refreshToken', data.data.refresh)
//     } catch(e) {

//     }
//   });
}