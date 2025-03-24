import axios from "axios"


const instanse = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "a516101b-e1b3-4a70-ac19-24fc882a73c9" // free
	}
});

export const usersAPI = {
	getUsers: async (currentPage = 1, pageSize = 10) => {
		const response = await instanse.get(`users/?page=${currentPage}&count=${pageSize}`)
		return response.data
	},
	getProfile: async (userId = 32231) => {
		console.warn('Obsole method. Please use profileAPI object');
		return profileAPI.getProfile(userId);
		// const response = await instanse.get(`profile/${userId}`)
		// return response.data
	},
	follow: async (userId) => {
		const response = await instanse.post(`follow/${userId}`);
		return response.data;
	},
	unFollow: async (userId) => {
		const response = await instanse.delete(`follow/${userId}`);
		return response.data;
	},
}

export const profileAPI = {
	getProfile: async (userId = 32231) => {
		const response = await instanse.get(`profile/${userId}`);
		return response.data;
	},
	getStatus: async (userId = 32231) => {
		const response = await instanse.get(`profile/status/${userId}`);
		return response.data;
	},
	updateStatus: async (status) => {
		const respose = await instanse.put(`profile/status`, { status: status });
		return respose.data;
	}
}

export const loginAPI = {
	login: async (email, password, rememberMe = false) => {
		const response = await instanse.post(`auth/login`, {
			email: email,
			password: password,
			rememberMe: rememberMe,
		})
		return response.data
	},
	logOut: async () => {
		const response = await instanse.delete(`auth/login`)
		return response.data
	},
}

// export const logOutAPI = {
// 	logOut: async () => {
// 		const response = await instanse.delete(`auth/login`)
// 		return response.data
// 	},
// }

export const authAPI = {
	auth: async () => {
		const response = await instanse.get(`auth/me`)
		return response.data
	},
}


