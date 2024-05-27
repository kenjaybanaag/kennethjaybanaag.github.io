const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
    let likeCounts = parseInt(count1.value) + 1
    count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", countLike1)

const btnDislike1 = document.getElementById("btnDislike1")
const countDislike1 = document.getElementById("countDislike1")

function countDisLike() {
    let disLike = parseInt(countDislike1.value) + 1
    countDislike1.textContent = disLike.toString()
}
btnDislike1.addEventListener("click", countDisLike)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
    let likeCounts = parseInt(count2.value) + 1
    count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", countLike2)

const btnDislike2 = document.getElementById("btnDislike2")
const countDislike2 = document.getElementById("countDislike2")

function countDisLikes() {
    let disLikes = parseInt(countDislike2.value) + 1
    countDislike2.textContent = disLikes.toString()
}

btnDislike2.addEventListener("click", countDisLikes)
