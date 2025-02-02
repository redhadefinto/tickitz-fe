import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllMovies = (limit, sort, page, search, controller) => {
	const url = `${baseUrl}/movies?limit=${limit}&sort=${sort}&page=${page}&search=${search}`;
	const config = { signal: controller.signal };
	return axios.get(url, config);
};

export const getSingleMovie = (id, controller) => {
	const url = `${baseUrl}/movies/${id}`
	const config = { signal: controller.signal };
	return axios.get(url, config);
}

export const getAllShow = (city_name, movie_id, controller) => {
	const url = `${baseUrl}/show?city_name=${city_name}&movie_id=${movie_id}`;
	const config = { signal: controller.signal };
	return axios.get(url, config);
}