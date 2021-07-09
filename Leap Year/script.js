function calculateYear(year) {
    var y = document.getElementById('year').value;
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        window.alert("This is a leap year !");
    } else {
        window.alert("This is not a leap year !");
    }
}