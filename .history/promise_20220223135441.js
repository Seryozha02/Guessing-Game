const value = document.getElementById("value");
const button = document.getElementById("button");
const p1Text = document.querySelector(".p1");
let p2Text = document.querySelector(".p2");
const sum = document.querySelector(".sum");
let showText = document.getElementById("show-text");
let totalCount = 0;

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}
function guess(random, inputValue) {
    return new Promise(function(resolve, reject) {
        let count = 0;
        if (inputValue === random) {
            count = 2;
            resolve(count);
        } else if (Math.abs(inputValue - random) === 1) {
            count = 1;
            resolve(count);
        } else {
            count = 0;
            reject(count);
        }
    })
};
button.addEventListener("click", function() {
    let random = randomNum(6);   
    if (Number(value.value) > 6 || Number(value.value) < 1) {
        showText.innerText = "";
        alert("enter chisht number, 1-6")
    } else {
        inputValue = Number(value.value);
        p1Text.innerText = "random number: " + random;
    }
    guess(random, inputValue).then(function(result) {
        totalCount += result;
        p2Text.innerText = `count number: ${result}`;
        sum.innerText = `total: ${totalCount}`;
    }).catch(function(param) {
        if (param !== 0) {
            totalCount += param;
        } else {
            totalCount = 0;
        }
        p2Text.innerText = `count number: ${param}`;
        sum.innerText = `total: ${totalCount}`;
    })

})