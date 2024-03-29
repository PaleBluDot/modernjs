/**
 * @EasyHTTP Library
 * *Library for making HTTP request
 *
 * @Version 3.0.0
 * @Author Pavel Sanchez
 * @license MIT
 *
 * **/

class EasyHTTP {
	// __Make HTTP GET request
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}

	// __Make HTTP POST request
	async post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const resData = await response.json();
		return resData;
	}

	// __Make HTTP PUT request
	async put(url, data) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const resData = await response.json();
		return resData;
	}

	// __Make HTTP DELETE request
	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});
		const resData = await 'Resouce Deleted...';
		return resData;
	}
}
