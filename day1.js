var data = 2
var data1 = 4
var toplam = data+data1
console.log(toplam)
document.write("toplam", " " , toplam + "</br>")
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
document.write('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript'+"</br>")

let firstName = "hüseyin"
console.log(typeof firstName)
let surName = "pektaş"
let country ="türkiye"
let city = "diyarbakir"
// yorumlar kodu daha okunaklı hale getirir.
let isMarried = true 
document.write( firstName," ", surName," ", country," ",city," ",isMarried +"</br>")

// ilkel veri türleri şunlardır
/**
 * number, string, boolen, null, symbol
 * undefined,
 * 
 */
// ilker olmayan veri türleri ise object, ve arrays

let word = "javascript"
word[0]= "Y"
document.write("word: "+ word[0] +"</br>"+"</br>")
var numOne = 3
var numTwo = 3
document.write(numOne === numTwo+"</br>" )

let js ="javascript"
let py = "python"
document.write("</br>")
let lightOn = true
let lightOff = false

console.log(lightOn == lightOff )
// şimdi ilkel olmayan veri türüne geçiyoruz. 
// bunlaeın değerlerini değiştirebiliriz
let num =[1,2,3,4]
num[0]=10
document.write(num+"</br>")
const pı = Math.PI
document.write(pı +"</br>" )
console.log(Math.round(pı))
console.log(Math.floor(pı))
let randNum = Math.random()
console.log(Math.random(randNum)*15)
console.log(Math.sqrt(100))

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

document.write(`burası backtick ile yazdığım yazıdır`+ "<br/>")

let a = 2
let b = 3
document.write(`burası a: ${a}, burası b: ${b} ve toplam: ${a + b} </br>`)
let string = "hüseyin"

let ilkHarf = string[0]
document.write("ilkharf: ", ilkHarf+"</br>")
let uzunluk = string.length
document.write("uzunluk: ", uzunluk+"</br>")
document.write("büyük harf: ", string.toUpperCase()+"</br>")
document.write("küçük harf: ", string.toLowerCase()+"</br>")
// substr(): İki bağımsız değişken alır; başlangıç ​​dizini ve dilimlenecek karakter sayısı.
document.write("küçük harf: ", string.substring(4,6)+"</br>")

// split(): Split yöntemi, bir dizeyi belirtilen bir yerden böler.
let counttry = "antalya, ankara, maraş, diyarbakır"
document.write("split kuralı: ", counttry.split(" , ")+"</br>")
// trim(): Bir dizenin başındaki veya sonundaki boşlukları kaldırır.
document.write("trim: ", string.trim()+"</br>")

