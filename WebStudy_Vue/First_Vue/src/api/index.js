import axios from "../utils/request"
import path from "./path"

const api = {
    // 隐私政策地址
    getYinsi(){
        return axios.get(path.baseUrl + path.yinsi)
    }
}

export default api