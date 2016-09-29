import request from "superagent";
import markerContent from "html!../markerContent.tpl";

const listUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?lat={{lat}}&lng={{lng}}";
const reserveUrl = "http://ridecellparking.herokuapp.com/api/v1/parkinglocations/{{id}}/reserve/";
const defaultLocation = {lat: 37.783014, lng: -122.4027028}

let map;

function loadPage(href)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

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
			// let spots = res.body.map(spot => (
			// 	{
			// 		position: {
			// 			lat: Number(spot.lat),
			// 			lng: Number(spot.lng)
			// 		},
			// 		title: `Spot #${spot.id}`
			// 	}
			// ))
			// console.log("Markers = ", spots)
			// spots.forEach(spot => {
			// 	let marker = new google.maps.Marker(spot)
			// 	marker.setMap(map)
			// })
		})
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
			.replace("{{name}}", location.name)
			.replace("{{address}}", "Loading address...")
			.replace("{{spots_number}}", "Unknown")
			.replace("{{cost}}", location.cost)
			.replace("{{distance}}", "Calculating...")
		let marker = new google.maps.Marker(location)
		let infowindow = new google.maps.InfoWindow({content})
		marker.setMap(map)
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	})
});

/**
 * This function is called by Google Maps to initialize it
 */
window.initMap = function () {
	map = new google.maps.Map(document.getElementById('map'), {
		center: defaultLocation,
		scrollwheel: false,
		zoom: 15
	});

	// var contentString = loadPage('marker-template.html');

	// var infowindow = new google.maps.InfoWindow({
	// 	content: contentString
	// });

	// var marker1 = new google.maps.Marker({
	// 	position: {lat: 37.791, lng: -122.2483725},
	// 	title:"Hello World!"
	// });
	// var marker2 = new google.maps.Marker({
	// 	position: {lat: 37.792, lng: -122.2483725},
	// 	title:"Hello World!!"
	// });
	// var marker3 = new google.maps.Marker({
	// 	position: {lat: 37.793, lng: -122.2483725},
	// 	title:"Hello World!!!"
	// });

	// marker1.addListener('click', function() {
	// 	infowindow.open(map, marker1);
	// });

	// marker1.setMap(map);
	// marker2.setMap(map);
	// marker3.setMap(map);
};