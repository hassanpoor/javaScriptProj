var count = 0
var countInterval;
var start = () => {
    countInterval = setInterval(function () {
        count++
        document.getElementById("counterP").innerHTML = count
        document.cookie = "count=" + count
    }, 1000)

    document.getElementById("startbtn").disabled = true
    document.getElementById("stopbtn").disabled = false
}

var stop = () => {
    clearInterval(countInterval)
    document.getElementById("startbtn").disabled = false
    document.getElementById("stopbtn").disabled = true

}
var reset =
    () => {
        stop()
        document.getElementById("counterP").innerHTML = 0
        count = 0
        document.cookie = "count=0"
    }

var loadCountFromCookie = () => {
    count = Number(document.cookie.substring(6))
    document.getElementById("counterP").innerHTML = count
}