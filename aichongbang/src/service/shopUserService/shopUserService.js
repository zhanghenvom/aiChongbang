import Axios from 'axios'

export const reg = async (parameter) => {
    const { storeName,
        licenseNumber,
        licenseImage,
        licenseSite,
        locate,
        city,
        legalerson,
        tel,
        headImage,
        feature,
        vipGrade,
        brokerage,
        clerkType,
        status,
        admin
     } = parameter;
   
        

    let res = await Axios({
        method: "post",
        url: "/ip/shopUser/reg",
        data: {
            storeName,
            licenseNumber,
            licenseImage,
            licenseSite,
            locate,
            city,
            legalerson,
            tel,
            headImage,
            feature,
            vipGrade,
            brokerage,
            clerkType,
            status,
            admin
        }
    })    
    return res.data
}


export const get = async () => {
    let res = await Axios({
        method: "get",
        url: "/ip/buyGoode/get"
    })    
    // console.log(res)
    return res.data
}

