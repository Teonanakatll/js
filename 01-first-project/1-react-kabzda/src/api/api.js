import axios from "axios"


const instanse = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "a516101b-e1b3-4a70-ac19-24fc882a73c9"
	}
});

export const usersAPI = {
	getUsers: async (currentPage = 1, pageSize = 10) => {
		const response = await instanse.get(`users/?page=${currentPage}&count=${pageSize}`)
		return response.data
	},
	getProfile: async (userId = 2) => {
		const response = await instanse.get(`profile/${userId}`)
		return response.data
	},
	follow: async (userId) => {
		const response = await instanse.post(`follow/${userId}`)
		return response.data
	},
	unFollow: async (userId) => {
		const response = await instanse.delete(`follow/${userId}`)
		return response.data
	},
}

export const authAPI = {
	auth: async () => {
		const response = await instanse.get(`auth/me`)
		return response.data
	},
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
	return axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${pageSize}`,
		{ withCredentials: true }
	).then(response => response.data)
}
