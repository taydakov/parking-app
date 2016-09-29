import request from "superagent"

const listUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?lat={{lat}}&lng={{lng}}";
const reserveUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/{{id}}/reserve/";

export function retrieveParking({lat, lng}, success, fail, finish) {
	const url = listUrl
		.replace("{{lat}}", lat)
		.replace("{{lng}}", lng)

	request
		.get(url)
		.end((err, res) => {
			if (!err && res) {
				success && success(res.body)
			} else {
				fail && fail(err, res)
			}
			finish && finish()
		})
}

export function reserveParking(id, duration, success, fail, finish) {
	const url = reserveUrl
		.replace("{{id}}", id)

	request
		.post(url)
		.send({minutes: duration})
		.end((err, res) => {
			if (!err && res) {
				success && success(res.body)
			} else {
				fail && fail(err, res)
			}
			finish && finish()
		})
}