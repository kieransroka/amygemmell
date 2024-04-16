let links = document.getElementsByClassName("nav-link");
let activePage = [];

function activeRemove(e) {
    if (e.classList.contains("active-link")) {
        e.classList.remove("active-link");
    }
}

for (let i = 0; i < links.length; i++) {
    const e = links[i];
    if (e.classList.contains("active-link")) {
        activePage.push(e);
    }
    e.addEventListener("mouseover", function () {
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            activeRemove(link);
        }
    });
    e.addEventListener("mouseout", function () {
        activePage[0].classList.add("active-link");
    })
}