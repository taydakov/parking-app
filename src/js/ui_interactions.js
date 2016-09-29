function switchOpenClass(element) {
	element.classList.remove("closed")
	element.classList.add("open")
}
function switchClosedClass(element) {
	element.classList.remove("open")
	element.classList.add("closed")
}

function hideDialogs() {
	let successEl = document.getElementById("success-dialog")
	let errorEl = document.getElementById("error-dialog")
	switchClosedClass(successEl)
	switchClosedClass(errorEl)
}

export function openSuccessDialog() {
	hideDialogs()
	let successEl = document.getElementById("success-dialog")
	switchOpenClass(successEl)
	let containerEl = document.getElementById("dialogs-container")
	switchOpenClass(containerEl)
}

export function closeSuccessDialog() {
	let containerEl = document.getElementById("dialogs-container")
	switchClosedClass(containerEl)
}

export function openErrorDialog() {
	hideDialogs()
	let errorEl = document.getElementById("error-dialog")
	switchOpenClass(errorEl)
	let containerEl = document.getElementById("dialogs-container")
	switchOpenClass(containerEl)
}

export function closeErrorDialog() {
	let containerEl = document.getElementById("dialogs-container")
	switchClosedClass(containerEl)
}

document.getElementById("dialogs-container").onclick = () => {
	closeSuccessDialog();
	closeErrorDialog();
}

window.openSuccessDialog = openSuccessDialog
window.closeSuccessDialog = closeSuccessDialog
window.openErrorDialog = openErrorDialog
window.closeErrorDialog = closeErrorDialog

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