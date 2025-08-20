import axios from 'axios'
const host="https://todo-app-backend-153a.onrender.com"

async function callCreateApi(apipath, body) {
  try {
    const response = await axios.post(host + apipath, body);
    console.log(`callCreateApi response ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    alert(`api call got failed, error: ${error}`);
    return null;
  }
}

async function callAllApi(apipath){
  try {
    const response = await axios.get(host + apipath);
    console.log(`callApi response ${JSON.stringify(response.data)}`);
    return response.data;   
  } catch(error) {
    alert(`callApi call got failed, error ${error}`);
    return [];
  }
}

/* 
async function callApi(apipath,params){
return await axios.get(host+apipath,{'params':params})
.then(response =>{
  console.log(`callCreateApi response ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    alert(`api call got failed, error: ${error}`);
}
*/

async function callUpdateApi(apipath, params, body) {
  return await axios.patch(host + apipath, body, { params: params })
    .then(response => {
      console.log(`callUpdateApi response ${JSON.stringify(response.data)}`);
      return response.data;
    })
    .catch(error => {
      alert(`api call got failed, error: ${error}`);
      return null;
    });
}

async function callDeleteApi(apipath, params) {
  return await axios.delete(host + apipath, { params: params })
    .then(response => {
      console.log(`callDeleteApi response ${JSON.stringify(response.data)}`);
      return response.data;
    })
    .catch(error => {
      alert(`callDeleteApi call got failed, error: ${error}`);
      return null;
    });
}




export {callCreateApi,callAllApi,callUpdateApi,callDeleteApi}