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