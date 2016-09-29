function loadPage(href)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

/**
 * This function is called by Google Maps to initialize it
 */
window.initMap = function () {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.7911578, lng: -122.2483725},
		scrollwheel: false,
		zoom: 15
	});

	var contentString = loadPage('marker-template.html');

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker1 = new google.maps.Marker({
		position: {lat: 37.791, lng: -122.2483725},
		title:"Hello World!"
	});
	var marker2 = new google.maps.Marker({
		position: {lat: 37.792, lng: -122.2483725},
		title:"Hello World!!"
	});
	var marker3 = new google.maps.Marker({
		position: {lat: 37.793, lng: -122.2483725},
		title:"Hello World!!!"
	});

	marker1.addListener('click', function() {
		infowindow.open(map, marker1);
	});

	marker1.setMap(map);
	marker2.setMap(map);
	marker3.setMap(map);
};

document.getElementById("open-sidebar-menu-button").onclick = function () {
	var sidebarMenuEl = document.getElementById("sidebar-menu");
	sidebarMenuEl.classList.remove("closed");
	sidebarMenuEl.classList.add("open");
};
document.getElementById("sidebar-remaining").onclick = function () {
	var sidebarMenuEl = document.getElementById("sidebar-menu");
	sidebarMenuEl.classList.remove("open");
	sidebarMenuEl.classList.add("closed");
};
var isSearchBoxOpen = false;
document.getElementById("search-icon").onclick = function () {
	var searchBoxEl = document.getElementById("search-box");
	if (isSearchBoxOpen) {
		searchBoxEl.classList.remove("open");
		searchBoxEl.classList.add("closed");
		isSearchBoxOpen = false;
	} else {
		searchBoxEl.classList.remove("closed");
		searchBoxEl.classList.add("open");
		isSearchBoxOpen = true;
	}
}