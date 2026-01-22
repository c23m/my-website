function randomNumber(N, M) {//include N , not include M
    if (!M) {
        M = N
        N = 0
    }
    return Math.floor(Math.random() * (M - N) + N)
}

function randomSelect(arr) {
    return arr[randomNumber(arr.length)]
}

const arrLetter = ['a', 'b', 'c', 'd']
const arrTh = document.querySelectorAll("th")
for (let k in arrTh) {
    arrTh[k].innerHTML = randomSelect(arrLetter)

}



const alertButton = document.querySelector("#alert")
alertButton.addEventListener('click', () => {
    const uname = document.querySelector("#uname")
    alert(uname.value)
    const h1 = document.querySelector("h1")
    h1.innerText = a
    document.querySelector("#test_h5").innerHTML = randomNumber(20)
    document.querySelector(`.unlist li:nth-child(${randomNumber(4)})`).innerText = randomSelect(arrLetter)
})

