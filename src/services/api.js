import axios from "axios";

const BASE_URL = process.env.REACT_APP_API

function getBids(id, progress) {
	return axios.get(`${BASE_URL}/bids/${progress}/${id}`)
}

export const api = {
	getBids
}