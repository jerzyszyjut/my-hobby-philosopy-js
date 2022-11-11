function getSchoolsValues() {
    const sofisci = document.getElementById("sofisci").checked;
    const platonicy = document.getElementById("platonicy").checked;
    const arystotelicy = document.getElementById("arystotelicy").checked;
    const stoicy = document.getElementById("stoicy").checked;
    const epikurejczycy = document.getElementById("epikurejczycy").checked;
    const cynicy = document.getElementById("cynicy").checked;

    return {
        sofisci,
        platonicy,
        arystotelicy,
        stoicy,
        epikurejczycy,
        cynicy
    };
}

function loadSchoolsValues(schools) {
    document.getElementById("sofisci").checked = schools.sofisci;
    document.getElementById("platonicy").checked = schools.platonicy;
    document.getElementById("arystotelicy").checked = schools.arystotelicy;
    document.getElementById("stoicy").checked = schools.stoicy;
    document.getElementById("epikurejczycy").checked = schools.epikurejczycy;
    document.getElementById("cynicy").checked = schools.cynicy;
}

function getInputValues() {
    const age = document.getElementById("age").value;
    const sexMale = document.getElementById("male").checked;
    const sexFemale = document.getElementById("female").checked;
    const educationSelect = document.getElementById("education").value;
    const favouriteColor = document.getElementById("color").value;
    const schools = getSchoolsValues();
    const favouritePhilosopher = document.getElementById("favourite-philosopher").value;
    const importantDay = document.getElementById("important-day").value;
    const importantDayDescription = document.getElementById("important-day-description").value;

    return {
        age,
        sexMale,
        sexFemale,
        educationSelect,
        favouriteColor,
        schools,
        favouritePhilosopher,
        importantDay,
        importantDayDescription
    };
}

function loadInputValues(inputValues) {
    document.getElementById("age").value = inputValues.age;
    document.getElementById("male").checked = inputValues.sexMale;
    document.getElementById("female").checked = inputValues.sexFemale;
    document.getElementById("education").value = inputValues.educationSelect;
    document.getElementById("color").value = inputValues.favouriteColor;
    loadSchoolsValues(inputValues.schools);
    document.getElementById("favourite-philosopher").value = inputValues.favouritePhilosopher;
    document.getElementById("important-day").value = inputValues.importantDay;
    document.getElementById("important-day-description").value = inputValues.importantDayDescription;
}

function saveInputValuesToSessionStorage() {
    const inputValues = getInputValues();
    sessionStorage.setItem("inputValues", JSON.stringify(inputValues));
}

function loadInputValuesFromSessionStorage() {
    const inputValues = JSON.parse(sessionStorage.getItem("inputValues"));
    if (!inputValues) return;
    loadInputValues(inputValues);
}

function clearInputValuesFromSessionStorage() {
    sessionStorage.removeItem("inputValues");
}


const form = document.querySelector("form");
form.addEventListener("change", (event) => {
    saveInputValuesToSessionStorage();
});

form.addEventListener("reset", (event) => {
    clearInputValuesFromSessionStorage();
});

window.addEventListener("load", () => {
    loadInputValuesFromSessionStorage();
});
