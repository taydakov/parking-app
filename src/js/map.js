import * as api from "./api"
import * as ui from "./ui_interactions"
import markerContent from "html!../markerContent.tpl"

const defaultLocation = {lat: 37.783014, lng: -122.4027028}
const defaultReservationDuration = 30 // minutes

let map // Reference to the Google Maps instance on the page

function refreshMap() {
	api.retrieveParking(defaultLocation, data => {
		const isAvailable = location => (new Date(location.reserved_until) < new Date())
		const locations = data.filter(isAvailable).map(location => (
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
			const content = markerContent
				.replace("{{id}}", location.id)
				.replace("{{name}}", location.name)
				.replace("{{address}}", "Loading address...")
				.replace("{{spots_number}}", "Unknown")
				.replace("{{cost}}", location.cost)
				.replace("{{distance}}", "Calculating...")
			const marker = new google.maps.Marker(location)
			const infowindow = new google.maps.InfoWindow({content})
			marker.setMap(map)
			marker.addListener('click', function() {
				infowindow.open(map, marker)
			})
		})
	}, err => {
		ui.openErrorDialog()
	})
}

refreshMap()

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

/**
 * This function is called onclick on Pay and Reserve button that is on a map marker
 */
window.onMapMarkerPayReserveClick = element => {
	let locationId = element.dataset.locationId
	let duration = defaultReservationDuration
	let oldLabel = element.innerHTML
	element.innerHTML = "Processing..."
	api.reserveParking(locationId, duration, data => {
		ui.openSuccessDialog()
	}, err => {
		ui.openErrorDialog()
	}, () => {
		element.innerHTML = oldLabel
		refreshMap()
	})
}