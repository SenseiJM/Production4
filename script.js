const start = function() {
    let redRubberButton = document.querySelector("#get-red-rubbers");
    let blackRubberButton = document.querySelector("#get-black-rubbers");
    let racketButton = document.querySelector("#get-rackets");

    let redRubbersDisplayed = false;
    let blackRubbersDisplayed = false;
    let racketsDisplayed = false;
    let redRubbersExist = false;
    let blackRubbersExist = false;
    let racketsExist = false;

    let redRubberTable = document.querySelector("#red-rubber-table-body");
    let blackRubberTable = document.querySelector("#black-rubber-table-body");
    let racketsTable = document.querySelector("#rackets-table-body");

    redRubberButton.addEventListener('click', function(e) {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./ressources/InventaireRaquettesClub.json", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if ((xhr.readyState === 4) && (redRubbersExist == false)){
                let response = JSON.parse(xhr.responseText);
                
                //console.log(response);

                
                let redRubberTitleRow = document.createElement("tr");
                let redRubberBrand = document.createElement("th");
                let redRubberModel = document.createElement("th");
                let redRubberThickness = document.createElement("th");
                let redRubberIsAuthorised = document.createElement("th");

                redRubberBrand.innerHTML = "Marque";
                redRubberModel.innerHTML = "Modèle";
                redRubberThickness.innerHTML = "Épaisseur";
                redRubberIsAuthorised.innerHTML = "Est Autorisé";

                redRubberTitleRow.appendChild(redRubberBrand);
                redRubberTitleRow.appendChild(redRubberModel);
                redRubberTitleRow.appendChild(redRubberThickness);
                redRubberTitleRow.appendChild(redRubberIsAuthorised);
                redRubberTable.appendChild(redRubberTitleRow);

                for (let i = 0; i < response.length; i++) {
                    if (response[i].Color == "Red") {
                        let newRedRubberEntry = document.createElement("tr");
                        let newRedRubberBrand = document.createElement("td");
                        let newRedRubberModel = document.createElement("td");
                        let newRedRubberThickness = document.createElement("td");
                        let newRedRubberLegality = document.createElement("td");

                        newRedRubberBrand.innerHTML = response[i].Brand;
                        newRedRubberModel.innerHTML = response[i].Model;
                        newRedRubberThickness.innerHTML = response[i].Thickness;
                        newRedRubberLegality.innerHTML = response[i].Authorised;

                        if (response[i].Authorised == "No") {
                            newRedRubberLegality.style.backgroundColor = "#FF7F7F";
                        }

                        newRedRubberEntry.appendChild(newRedRubberBrand);
                        newRedRubberEntry.appendChild(newRedRubberModel);
                        newRedRubberEntry.appendChild(newRedRubberThickness);
                        newRedRubberEntry.appendChild(newRedRubberLegality);
                        redRubberTable.appendChild(newRedRubberEntry);
                    }
                }
                redRubbersDisplayed = true;
                redRubbersExist = true;
                hideColor("Black");
                hideRackets();
                blackRubbersDisplayed = false;
                redRubberTable.style.display = "table-row-group";
            } else {
                redRubbersDisplayed = true;
                hideColor("Black");
                hideRackets();
                blackRubbersDisplayed = false;
                racketsDisplayed = false;
                redRubberTable.style.display = "table-row-group";
            }
        }
    });

    blackRubberButton.addEventListener('click', function(e) {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./ressources/InventaireRaquettesClub.json", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if ((xhr.readyState === 4) && (blackRubbersExist == false)){
                let response = JSON.parse(xhr.responseText);
                
                //console.log(response);

                
                let blackRubberTitleRow = document.createElement("tr");
                let blackRubberBrand = document.createElement("th");
                let blackRubberModel = document.createElement("th");
                let blackRubberThickness = document.createElement("th");
                let blackRubberIsAuthorised = document.createElement("th");

                blackRubberBrand.innerHTML = "Marque";
                blackRubberModel.innerHTML = "Modèle";
                blackRubberThickness.innerHTML = "Épaisseur";
                blackRubberIsAuthorised.innerHTML = "Est Autorisé";

                blackRubberTitleRow.appendChild(blackRubberBrand);
                blackRubberTitleRow.appendChild(blackRubberModel);
                blackRubberTitleRow.appendChild(blackRubberThickness);
                blackRubberTitleRow.appendChild(blackRubberIsAuthorised);
                blackRubberTable.appendChild(blackRubberTitleRow);

                for (let i = 0; i < response.length; i++) {
                    if (response[i].Color == "Black") {
                        let newBlackRubberEntry = document.createElement("tr");
                        let newBlackRubberBrand = document.createElement("td");
                        let newBlackRubberModel = document.createElement("td");
                        let newBlackRubberThickness = document.createElement("td");
                        let newBlackRubberLegality = document.createElement("td");

                        newBlackRubberBrand.innerHTML = response[i].Brand;
                        newBlackRubberModel.innerHTML = response[i].Model;
                        newBlackRubberThickness.innerHTML = response[i].Thickness;
                        newBlackRubberLegality.innerHTML = response[i].Authorised;

                        if (response[i].Authorised == "No") {
                            newBlackRubberLegality.style.backgroundColor = "#FF7F7F";
                        }

                        newBlackRubberEntry.appendChild(newBlackRubberBrand);
                        newBlackRubberEntry.appendChild(newBlackRubberModel);
                        newBlackRubberEntry.appendChild(newBlackRubberThickness);
                        newBlackRubberEntry.appendChild(newBlackRubberLegality);
                        blackRubberTable.appendChild(newBlackRubberEntry);
                    }
                }

                blackRubbersDisplayed = true;
                blackRubbersExist = true;
                hideColor("Red");
                hideRackets();
                redRubbersDisplayed = false;
                racketsDisplayed = false;
                blackRubberTable.style.display = "table-row-group";
            } else {
                blackRubbersDisplayed = true;
                hideColor("Red");
                hideRackets();
                redRubbersDisplayed = false;
                racketsDisplayed = false;
                blackRubberTable.style.display = "table-row-group";
            }
        }
    });

    racketButton.addEventListener('click', function(e) {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./ressources/RaquettesMontees.json", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if ((xhr.readyState === 4) && (racketsExist == false)){
                let response = JSON.parse(xhr.responseText);
                
                let racketTitleRow = document.createElement("tr");
                let racketBrand = document.createElement("th");
                let racketModel = document.createElement("th");
                let racketID = document.createElement("th");
                let racketRedRubber = document.createElement("th");
                let racketBlackRubber = document.createElement("th");
                let racketNotes = document.createElement("th");

                racketBrand.innerHTML = "Marque";
                racketModel.innerHTML = "Modèle";
                racketID.innerHTML = "ID";
                racketRedRubber.innerHTML = "Revêtement Rouge";
                racketBlackRubber.innerHTML = "Revêtement Noir";
                racketNotes.innerHTML = "Notes";

                racketTitleRow.appendChild(racketBrand);
                racketTitleRow.appendChild(racketModel);
                racketTitleRow.appendChild(racketID);
                racketTitleRow.appendChild(racketRedRubber);
                racketTitleRow.appendChild(racketBlackRubber);
                racketTitleRow.appendChild(racketNotes);
                racketsTable.appendChild(racketTitleRow);

                for (let i = 0; i < response.length; i++) {
                    let newRacketEntry = document.createElement("tr");
                    let newRacketBrand = document.createElement("td");
                    let newRacketModel = document.createElement("td");
                    let newRacketID = document.createElement("td");
                    let newRacketRedRubber = document.createElement("td");
                    let newRacketBlackRubber = document.createElement("td");
                    let newRacketNotes = document.createElement("td");

                    newRacketBrand.innerHTML = response[i].Brand;
                    newRacketModel.innerHTML = response[i].Model;
                    newRacketID.innerHTML = response[i].ID;
                    newRacketRedRubber.innerHTML = response[i].RedRubber;
                    newRacketBlackRubber.innerHTML = response[i].BlackRubber;
                    newRacketNotes.innerHTML = response[i].Notes;

                    newRacketEntry.appendChild(newRacketBrand);
                    newRacketEntry.appendChild(newRacketModel);
                    newRacketEntry.appendChild(newRacketID);
                    newRacketEntry.appendChild(newRacketRedRubber);
                    newRacketEntry.appendChild(newRacketBlackRubber);
                    newRacketEntry.appendChild(newRacketNotes);
                    racketsTable.appendChild(newRacketEntry);

                }

                racketsExist = true;
                racketsDisplayed = true;
                hideColor("Black");
                hideColor("Red");
                redRubbersDisplayed = false;
                blackRubbersDisplayed = false;
                racketsTable.style.display = "table-row-group";

            } else {
                racketsDisplayed = true;
                hideColor("Black");
                hideColor("Red");
                redRubbersDisplayed = false;
                blackRubbersDisplayed = false;
                racketsTable.style.display = "table-row-group";
            }
        }
    });
}

function hideColor(colorToHide) {
    if (colorToHide == "Red") {
        document.querySelector("#red-rubber-table-body").style.display = "none";
    } else {
        document.querySelector("#black-rubber-table-body").style.display = "none";
    }
}

function hideRackets() {
    document.querySelector("#rackets-table-body").style.display = "none";
}

window.onload = start;