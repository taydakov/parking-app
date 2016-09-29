export function showSuccessDialog() {
	let containerEl = document.getElementById("dialogs-container")
	containerEl.classList.remove("closed")
	containerEl.classList.add("open")
}

export function hideSuccessDialog() {
	let containerEl = document.getElementById("dialogs-container")
	containerEl.classList.remove("open")
	containerEl.classList.add("closed")
}

export function showErrorDialog () {
	// TODO: implement error message
}

document.getElementById("dialogs-container").onclick = () => {
	hideSuccessDialog();
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