/*let theme = document.querySelector(".themes")

Array.from(theme.children).forEach(theme => {
    theme.addEventListener("click", e=>{
        let color = e.target.dataset.color
        document.body.className = color
    })
})*/



let themes = document.querySelector(".themes")
let selection = document.querySelector("#selection")

let themeselection = localStorage.getItem("theme") ? localStorage.getItem("theme") : "yellow"
   selection.textContent = themeselection
   document.body.className = themeselection

Array.from(themes.children).forEach(theme => {
	theme.addEventListener("click", e => {
		let color = e.target.dataset.color
		document.body.className = color
		selection.textContent = color
        localStorage.setItem("theme",color)
	})
})
Alert