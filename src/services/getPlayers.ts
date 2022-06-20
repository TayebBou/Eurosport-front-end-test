import axios from "axios"
import { API_URL, PLAYERS_QUERY } from "../config/constants"

export const getPlayers = () => {
    return axios.post(API_URL, {
        query: PLAYERS_QUERY
    })
}