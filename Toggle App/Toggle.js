let data = document.getElementById("data");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    if (data.innerHTML === "OFF") {
        data.innerHTML = "ON";
    } else {
        data.innerHTML = "OFF";
    }
});