// Ternary Operators

// Üçlü operatör bir koşulun yazılmasına izin verir. 
// Koşullu yazmanın başka bir yolu da üçlü 
// operatörler kullanmaktır.
//  Aşağıdaki örneklere bakın

//  kullanımı şu şekildir : 
//  eger birşey doğru ise sunu yap değilse sunu yap
//  Israining ? () : ()

let IsRaining = true
IsRaining ?
 document.write("Senin şemsiyeye ihtiyacın var"+"</br>")
 : document.write("şemsiye almana gerek yok")

 let IsRaininng = false

 IsRaininng ?
 document.write("Senin şemsiyeye ihtiyacın var"+"</br>")
:   document.write("şemsiye almana gerek yok"+"</br>")
let number = 5
number > 0
  ? document.write(`${number} is a positive number`+"</br>")
  : document.write(`${number} is a negative number`+"</br>")

let pro = prompt()
if (pro ==="merhaba") {
    document.write("Dogru bildiniz")
} else document.write("tekrar deneyiniz")

let agree = confirm("verilen koşulları kabul ediyor musunuz")

document.write("cevap :"+ agree)

const Simdi = new Date().getTime()
document.write(Simdi)