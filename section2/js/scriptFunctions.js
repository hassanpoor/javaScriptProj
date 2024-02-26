var loginFormValidate = function (event) {
    event.preventDefault();
    var form = new FormData(event.target)
    console.log(form.get("username"))
    console.log(form.get("password"))
}
var validateUsername = function (event) {
    var str = event.target.value
    var resultStr;
    if (checkStrStartWithNumber(str)) {
        resultStr = "username is incorrect: must not be start with number";
        console.log(resultStr)
        alert(resultStr)
    } else if (checkContainSpecialCharacter(str)) {
        resultStr = "username is incorrect: must not be contain special char";
        console.log(resultStr)
        alert(resultStr)
    }
    createResultTxt("result", resultStr)

}
var createResultTxt = function (elementId, resultStr) {
    try {
        if (resultStr != null) {
            var lastValue = document.getElementById(elementId).innerHTML;
            if (lastValue != null && lastValue != "") {
                resultStr = lastValue + "<br>" + resultStr
            }
            // debugger
            document.getElementById("result").innerHTML = resultStr
        }
    } catch (e) {
        console.log(e);
    }
}
var validatePassword = function (event) {
    var resultStr;
    var str = event.target.value
    if (!checkContainSpecialCharacter(str)) {
        resultStr = "password is incorrect: must  be contain special char";
        console.log(resultStr)
        alert(resultStr)
    }
    createResultTxt("result", resultStr)
}
var validateDate = function (event) {
    console.log(new Date(event.target.value))
}
var checkStrStartWithNumber = function (str) {
    const firstChar = str.charAt(0);
    return !isNaN(firstChar);
}
var checkContainSpecialCharacter = function (str) {
    const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

var fillDataLocation = function () {
    document.getElementById("informationDiv").innerHTML = "<div>" + location.host + "</div>"
}
var mathUtil = function (x) {
    Math.floor(Math.random() * x)
    Math.sign(x)
    Math.trunc(Math.random() * x)
    Math.round(x)
    Math.pow(x, x)
    Math.sqrt(x)
    Math.log(x)
    Math.abs(x)
    Math.min(x, 10, 6)
    Math.max(x, 10, 6)
    Number(x)
    parseInt(x)

}
//
//     var dateUtil = function (x) {
//         var today = new Date()
//         console.log(today)
//         console.log(today.getDate())
//         console.log(today.getDay())
//         console.log(today.getTime())//get timestamp
//         console.log(today.getMinutes())
//         var yesterday = new Date('Sat Mar 12 2021')
//
// // dateFns
// //         dateFns.addDays(new Date(), 10);
// //         momentJs
//
//     }

var gotoGoogle = function () {
    location.href="https://www.google.com"
}



