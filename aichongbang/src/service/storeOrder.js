import axios from "axios";

//获取门店订单
export const getStoreOrder = async (current, pageSize) => {
    // console.log(current, pageSize,11111);
    let res = await axios({
      method: "get",
      url: "/ip/storeOrder/storeOrder",
      params: { current, pageSize }
    });
    // console.log(res.data,"serve");
    return res.data;
  };
  //增加门店订单
export const addStoreOrder = async ( orderName,storeName,totalAmountOfOrder,
score,orderContent,EvaluationOfNature,appraiser,orderImage) => {
    // console.log({orderName,storeName,totalAmountOfOrder,
    //     score,orderContent,EvaluationOfNature,appraiser,orderImage});
    let res = await axios({
      method: "post",
      url: "/ip/storeOrder/addStoreOrder",
      data: {orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage
      }
    });
    // console.log(res,11111111);
    return res.data;
  };
  //删除门店商品
export const removeStoreOrder = async id => {
  // console.log("vue", id);

  let res = await axios({
    method: "delete",
    url: "/ip/storeOrder/" + id
  });
  return res.data;
};
//通过id获取
export const getStoreOrderById =async (id)=>{   
  // console.log(id);
  let res = await axios({
      method:"get",
      url:"/ip/storeOrder/"+id,
  })
  // console.log("res",res);
  return res.data
}
//修改门店商品
export const upDateStoreOrder=async ({orderName,storeName,totalAmountOfOrder,
score,orderContent,EvaluationOfNature,appraiser,orderImage,_id})=>{
// console.log({orderName,storeName,totalAmountOfOrder,
//   score,orderContent,EvaluationOfNature,appraiser,orderImage,_id},"sadasdasdsdasdasd");
let res = await axios({
  method:"post",
  url:"/ip/storeOrder/upDateStoreOrder",
  data:{orderName,storeName,totalAmountOfOrder,
    score,orderContent,EvaluationOfNature,appraiser,orderImage,_id}
})
// console.log(res);
return res.data
}