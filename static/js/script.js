let pictIndex = 0
const imgurl = ["/static/images/sunny.png", "/static/images/dark.png", "/static/images/dessert.png", "/static/images/color.png"]
const bigScreen = document.querySelector(".bigscreen img")
const lb = document.querySelector("#lButton")
const rb = document.querySelector("#rButton")

function indexAdd() {
    pictIndex = ++pictIndex === imgurl.length ? 0 : pictIndex
    bigScreen.src = imgurl[pictIndex]
}
lb.addEventListener("click", () => { // Reduce index until 0;
    if (pictIndex > 0) {
        pictIndex--
    }
    bigScreen.src = imgurl[pictIndex]
})

rb.addEventListener("click", indexAdd)

setInterval(indexAdd, 3000)
