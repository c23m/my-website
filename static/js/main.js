

let pictIndex = 0
const colors = ["linear-gradient(to right bottom, #33e, #3ee)", "linear-gradient(to right bottom, #e33, #e3e)", "linear-gradient(to right bottom, #3e3, #ee3)"]
const header = document.querySelector("header")
const lb = document.querySelector("#lButton")
const rb = document.querySelector("#rButton")

function indexAdd() {
    pictIndex = ++pictIndex === colors.length ? 0 : pictIndex
    header.style.background = colors[pictIndex]
}
lb.addEventListener("click", () => { // Reduce index until 0;
    if (pictIndex > 0) {
        pictIndex--
    }
    header.style.background = colors[pictIndex]
})

rb.addEventListener("click", indexAdd)

// const id = setInterval(indexAdd, 3000)
