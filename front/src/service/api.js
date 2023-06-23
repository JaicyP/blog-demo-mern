import axios from 'axios';

const URL = 'http://localhost:8000';


export const addUser = async (data) => {
  try{
    return await axios.post(`${URL}/add`, data)
  }catch(error){
      console.log('Error while calling add blog api',error);
  }

}

export const getBlogs = async () => {
  try{
    return await axios.get(`${URL}/all`)
  }catch(error){
      console.log('Error while calling get blogs api',error);
  }

}


export const getBlog = async (id) => {
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(error){
      console.log('Error while calling get blog api',error);
  }

}

export const editUser = async (user,id) => {
  try{
    return await axios.put(`${URL}/${id}`,user)
  }catch(error){
      console.log('Error while calling add blog api',error);
  }

}

export const deleteBlog = async (id) => {
  try{
    return await axios.delete(`${URL}/${id}`)
  }catch(error){
      console.log('Error while calling delete blog api',error);
  }

}

