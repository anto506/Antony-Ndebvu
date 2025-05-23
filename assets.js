document.addEventListener("DOMContentLoaded", function () {

    const changeBgButton = document.createElement("button");
    changeBgButton.innerText = "Change Background Color";
    changeBgButton.className = "btn btn-primary mt-3";
    document.body.appendChild(changeBgButton);

    changeBgButton.addEventListener("click", function () {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const colors = ["#ff7e5f", "#feb47b", "#6a11cb", "#2575fc", "#009688"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});