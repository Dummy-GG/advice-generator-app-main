const id = document.querySelector("#advice-id")
const advice = document.querySelector("#advice")

function fetchData() {
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then((data) => {
    id.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
})
}
fetchData()
