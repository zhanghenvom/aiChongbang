import axios from 'axios'

export const getStores = async (curPage,eachPage,type,value) => {
  let res = await axios({
    method: "get",
    url: "/ip/store/store",
    params: {
      curPage,eachPage,
      type,value
    }
  });
  return res.data
}
export const AddStore = async (form) => {
  let res = await axios({
    method: "POST",
    url: "/ip/store/create",
    data: {form}
  });
  return res.data
}

export const getStore = async (_id) => {
  let res = await axios({
    method: "get",
    url: `/ip/store/${_id}`,
    params: {
      _id
    }
  });
  return res.data
}

export const updateStore = async (form) => {
  let res = await axios({
      method: "patch",
      url: `/ip/store/${form._id}`,
      data:{
        form
      }
  });
  return res.data
}