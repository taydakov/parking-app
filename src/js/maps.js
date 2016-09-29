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

console.log('template = ', markerContent);

function retrieveParking(lat, lng) {
	let url = listUrl
		.replace("{{lat}}", lat)
		.replace("{{lng}}", lng);

	request
		.get(url)
		.end((err, res) => {
			let spots = res.body.map(spot => (
				{
					position: {
						lat: Number(spot.lat),
						lng: Number(spot.lng)
					},
					title: `Spot #${spot.id}`
				}
			))
			console.log("Markers = ", spots)
			spots.forEach(spot => {
				let marker = new google.maps.Marker(spot)
				marker.setMap(map)
			})
		})
}

retrieveParking(defaultLocation.lat, defaultLocation.lng);

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