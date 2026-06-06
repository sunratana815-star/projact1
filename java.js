const body = document.getElementById("body");
const btn = document.getElementById("btn");

let darkMode = false;

btn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        body.setAttribute("data-bs-theme", "light");
        btn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    } else {
        body.setAttribute("data-bs-theme", "dark");
        btn.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    }
});