import request from "superagent";
import markerContent from "html!../markerContent.tpl";

const listUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?lat={{lat}}&lng={{lng}}";
const reserveUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/{{id}}/reserve/";
const defaultLocation = {lat: 37.783014, lng: -122.4027028}

let map;

function retrieveParking({lat, lng}, callback) {
	let url = listUrl
		.replace("{{lat}}", lat)
		.replace("{{lng}}", lng);

	request
		.get(url)
		.end((err, res) => {
			if (!err && res) {
				callback(res.body)
			}
		})
}

function reserveParking(id, callback) {
	console.log("Reserving spot #" + id)
}

retrieveParking(defaultLocation, data => {
	let locations = data.map(location => (
		{
			position: {
				lat: Number(location.lat),
				lng: Number(location.lng)
			},
			id: location.id,
			name: location.name,
			title: location.name,
			cost: location.cost_per_minute,
			maxTime: location.max_reserve_time_mins,
			minTime: location.min_reserve_time_mins
		}
	))
	locations.forEach(location => {
		let content = markerContent
			.replace("{{id}}", location.id)
			.replace("{{name}}", location.name)
			.replace("{{address}}", "Loading address...")
			.replace("{{spots_number}}", "Unknown")
			.replace("{{cost}}", location.cost)
			.replace("{{distance}}", "Calculating...")
		let marker = new google.maps.Marker(location)
		let infowindow = new google.maps.InfoWindow({content})
		marker.setMap(map)
		marker.addListener('click', function() {
			infowindow.open(map, marker)
		})
	})
})

window.onMapMarkerPayReserveClick = element => {
	reserveParking(element.dataset.locationId, () => {

	})
}

/**
 * This function is called by Google Maps SDK for initialization
 */
window.initMap = () => {
	map = new google.maps.Map(document.getElementById('map'), {
		center: defaultLocation,
		scrollwheel: false,
		zoom: 16
	})
}