export function showSuccessDialog() {
	
}

export function showErrorDialog() {
	
}

document.getElementById("open-sidebar-menu-button").onclick = () => {
	var sidebarMenuEl = document.getElementById("sidebar-menu")
	sidebarMenuEl.classList.remove("closed")
	sidebarMenuEl.classList.add("open")
}
document.getElementById("sidebar-remaining").onclick = () => {
	var sidebarMenuEl = document.getElementById("sidebar-menu")
	sidebarMenuEl.classList.remove("open")
	sidebarMenuEl.classList.add("closed")
}
let isSearchBoxOpen = false
document.getElementById("search-icon").onclick = () => {
	var searchBoxEl = document.getElementById("search-box");
	if (isSearchBoxOpen) {
		searchBoxEl.classList.remove("open")
		searchBoxEl.classList.add("closed")
		isSearchBoxOpen = false
	} else {
		searchBoxEl.classList.remove("closed")
		searchBoxEl.classList.add("open")
		isSearchBoxOpen = true
	}
}