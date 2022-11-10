let year = +prompt("Enter year to check", "2022")
if (year % 100 === 0) {
    if (year % 400 ===0) {
        alert(year + " is a leap year")
    } else {
        alert(year + " is not a leap year")
    }
} else {
    if (year % 4 ===0) {
        alert(year + " is a leap year")
    } else {
        alert(year + " is not a leap year")
    }
}