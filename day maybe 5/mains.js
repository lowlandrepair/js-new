function validation() {
    // Name validation
    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;
    if (!name.match(valid_name_regex)) {
        document.getElementById("name-error").style.visibility = "visible";
        document.getElementById("name-error").style.color = "red";
        document.getElementById("name-correct").style.visibility = "hidden";
    } else {
        document.getElementById("name-error").style.visibility = "hidden";
        document.getElementById("name-error").style.color = "black";
        document.getElementById("name-correct").style.visibility = "visible";
    }

    // Age validation
    var age = document.getElementById("age").value;
    var valid_age_regex = /^[0-9]+$/;
    if (!age.match(valid_age_regex)) {
        document.getElementById("age-error").style.visibility = "visible";
        document.getElementById("age-error").style.color = "red";
        document.getElementById("age-correct").style.visibility = "hidden";
    } else {
        document.getElementById("age-error").style.visibility = "hidden";
        document.getElementById("age-error").style.color = "black";
        document.getElementById("age-correct").style.visibility = "visible";
    }

    // City validation (dropdown)
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("city-error").style.visibility = "visible";
        document.getElementById("city-error").style.color = "red";
        document.getElementById("city-correct").style.visibility = "hidden";
    } else {
        document.getElementById("city-error").style.visibility = "hidden";
        document.getElementById("city-error").style.color = "black";
        document.getElementById("city-correct").style.visibility = "visible";
    }
}