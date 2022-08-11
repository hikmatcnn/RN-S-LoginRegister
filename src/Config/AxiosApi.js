import axios from 'axios'
import { Config } from '.'

export default axios.create({
    baseURL:`${Config.API_URL}`
})
