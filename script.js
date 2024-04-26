// For nav animation
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

//For dropdown
if (document.getElementById("category-select")) {
    let dropdown = document.getElementById("category-select");
    let droplist = document.getElementById("dropdown-menu");
    let portContains = document.getElementsByClassName("port-contain");
    dropdown.addEventListener("show.bs.dropdown", function () {
        droplist.classList.add("transition-down");
    })
    dropdown.addEventListener("hide.bs.dropdown", function () {
        droplist.classList.remove("transition-down");
    })

    let droplink = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < droplink.length; i++) {
        const e = droplink[i];
        e.addEventListener("click", function () {
            let page = e.dataset.page;
            switch (page) {
                case "textiles":
                    for (let i = 0; i < portContains.length; i++) {
                        const e = portContains[i];
                        if (e.id === page) {
                            e.style.display = "block";
                        } else {
                            e.style.display = "none";
                        }
                    }
                    break;

                case "collage":
                    for (let i = 0; i < portContains.length; i++) {
                        const e = portContains[i];
                        if (e.id === page) {
                            e.style.display = "block";
                        } else {
                            e.style.display = "none";
                        }
                    }
                    break;

                default:
                    for (let i = 0; i < portContains.length; i++) {
                        const e = portContains[i];
                        if (e.id === portSelected) {
                            e.style.display = "block";
                        } else {
                            e.style.display = "none";
                        }
                    }
                    break;
            }
        })
    }
}

