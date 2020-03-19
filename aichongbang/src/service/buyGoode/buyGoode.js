import Axios from 'axios'

export const buy = async (paramter) => {
    let res = await Axios({
        method: "post",
        url: "/ip/buyGoode/buy",
        data: {
            paramter
        }
    })
    return res.data
}
