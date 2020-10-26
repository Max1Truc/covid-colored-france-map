fetch("/data.json").then((response) => response.json()).then((data) => {
    for (subdata of data) {
        if (subdata["labelKey"] == "keyfigure.tauxoccupation") {
            let lastupdateelement = document.getElementById("lastupdate");
            lastupdateelement.innerText = "Last update: " + (
                new Date(subdata["lastUpdate"] * 1000)
            ).toLocaleString();
            for (dpt of subdata["valuesDepartments"]) {
                let el = document.getElementById("dpt" + dpt["dptNb"]);
                if (el) {
                    if (dpt["color"] == "rouge") {
                        el.style.fill = "#F33";
                    } else if (dpt["color"] == "orange") {
                        el.style.fill = "orange";
                    } else if (dpt["color"] == "vert") {
                        el.style.fill = "lightgreen";
                    }
                } else {
                    console.log("Department not shown: " + "dpt" + dpt["dptNb"]);
                }
            }
            break;
        }
    }
});
