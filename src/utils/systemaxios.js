import axios from "axios";
import config from "../utils/config";

const baseClient = axios.create({
    baseURL: config.appApiHost,
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-Requested-With": 'XMLHttpRequest'
    }
})

const appAxiosclient = axios.create({
    baseURL: config.appApiHost+'/api',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-Requested-With": 'XMLHttpRequest',
        "Authorization": 'Bearer '+config.apiToken
    }
})

export {
    baseClient,
    appAxiosclient
}