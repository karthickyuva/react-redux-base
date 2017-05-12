import axios from "axios";

export const apiClient = axios.create({
	baseURL: "http://jsonplaceholder.typicode.com",
	timeout: 10000, /* Some of the actions take multiple API calls. Example Loxa Script can take upto 3 API calls */
	headers: {
		"Content-Type": "application/json",
		common: {
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	}
});
