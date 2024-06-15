//  öğrenilecek konular
// Conditionals
// If
// If Else
// If Else if Else
// Switch
// Ternary Operators

// let onayla = prompt()

// if (onayla === "hoşgeldiniz") {
//     document.write("cevap : dersimize  hoşgeldiniz " +"</br>")
// } else if (onayla === "buyrunuz") {
//     document.write("cevap : Buyrunuz" +"</br>")
// } else if (onayla === "merhaba") {

// }else if (onayla === "onayla") {
//     document.write("cevap : onayladınız" +"</br>")
// }else {
//     document.write("cevap : Tekrar deneyiniz" +"</br>")
// }
/*
let weather = prompt()
if (weather === "sunny") {
    document.write("cevap : Bugün Hava güneşli " +"</br>")
} else if (weather === "rainy") {
    document.write("cevap :Şemsiyeyi yanınıza  almalısınız" +"</br>")
} else if (weather === "cloud") {
    document.write("cevap :bugün hava bulutludur" +"</br>")

}else if (weather === "windy") {
    document.write("cevap :hava rüzgarlı dikkalı olun" +"</br>")
}else {
    document.write("cevap : hava durmu bilgisi yok" +"</br>")
} */

// switch case metodu 

let whichDay = prompt("what day is today?")
let day = whichDay.toLowerCase()

switch (day) {
    case "monday":
        document.write("Bugün pazartesi günüdür" + "</br>")

        break;
    case "tuesday":
        document.write("Bugün salı günüdür" + "</br>")

        break;
    case "wednesday":
        document.write("Bugün çarşaba günüdür" + "</br>")

        break;
    case "thursday":
        document.write("Bugün perşembe günüdür" + "</br>")

        break;
    case "friday":
        document.write("Bugün cuma günüdür" + "</br>")

        break;
    default: document.write("Bugün hafta için değildir" + "</br>")

        break;
}
