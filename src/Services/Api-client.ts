import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '876ce2c04c5145e8882aca6df2c33a05'
    }
})