// async function myFunc() {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('Hello'), 1000);
// 	});

// 	const error = true;

// 	if (!error) {
// 		const res = await promise;
// 		return res;
// 	} else {
// 		await Promise.reject(new Error('Something went wrong'));
// 	}
// }

// myFunc()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));

async function getUsers() {
	// __Await the response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

	// __Only proceed once resolved
	const data = await response.json();

	// __Only proceed once the 2nd promise is reseloved
	return data;
}

getUsers().then(users => console.log(users));
