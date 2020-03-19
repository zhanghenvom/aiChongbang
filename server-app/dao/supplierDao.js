var mongoose = require("mongoose");
const addSupplier = async (newSupplier) => {
    return await mongoose.model('suppliers').create(newSupplier);
   
   }
const getSupplier = async (userId) => {
    let data= await mongoose.model('suppliers').find({userId});
    return data;
   
   }
const updateSupplier = async (_id,date) => {
    await mongoose.model('suppliers').updateOne(
        {
            _id
        },
        date
    )
    return await mongoose.model("suppliers").find({ _id })
   }
module.exports={addSupplier,getSupplier,updateSupplier}