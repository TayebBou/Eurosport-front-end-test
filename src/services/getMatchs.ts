import axios from "axios"
import { API_URL, MATCHS_QUERY } from "../config/constants"

export const getMatchs = () => {
    return axios.post(API_URL, {
        query: MATCHS_QUERY
    })
}