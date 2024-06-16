//  bu bölümde dizileri göreceğiz

let arr = new Array()
document.write(" array: "+arr)
console.log(arr)

 let array = []
 console.log(array)
const number = [0,3,4,5,19,21,34]

const meyveler =["elma","armut","kivi", "kavun","karpuz"]
const hayvanlar =["inek","dana","koyun"]

console.log(number)
console.log(meyveler)
console.log(hayvanlar)
console.log(number,meyveler,hayvanlar)
const name1 =["hüseyin",31,true,{sehir:"diyarbakır", ulke:"turkiye"},
    {beceriler:["html","css","js","react"]}
]
console.log(name1)
const js ="javascript "
const dizi =js.split("")
console.log(dizi)
let text ="benim adım hüseyin pektas"
const diziText =text.split(" ")
console.log(diziText)
console.log(diziText.length)
diziText[0]= "onun"
diziText[1]= "adı"
console.log(diziText)
// concat dizileri birleştirir.
const diziBirlestirme = js.concat(diziText)
console.log(diziBirlestirme)
// slice(1,4) diziyi 1den 4 kadar böler
console.log(diziBirlestirme.slice(1,4))

//  splice fonksiyonu ise kaldırılacak sayı ve eklenecek
//  öğe  sayısı 0 dan başla 2 öğe kaldır sonra 1,2 ekle
console.log(number.splice(0,2,1,2))
console.log(number)
// push diziye yeni bir tane ekler
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push("apple")
console.log(fruits)
//  pop diziden birtane siler sonda
fruits.pop()
console.log(fruits)
// shift dizinin başından kaldırır
fruits.shift()
console.log(fruits)
// unshift basına ekler
fruits.unshift("apple")
console.log(fruits) 
