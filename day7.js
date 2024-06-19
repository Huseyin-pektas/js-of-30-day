// setTimeout(fonksiyon, 2000);

// function fonksiyon() {
//     console.log("hello")
// }
// const SetInverDurdur = setInterval(() => {
//     console.log("set interval her 2 saniyede çalışacak")
// }, 2000);

// clearInterval(SetInverDurdur);
// console.log("set interval durduruldu", clearInterval())

// setTimeout(() => {
//     clearInterval(SetInverDurdur);
//     console.log("set interval durduruldu", clearInterval)
// }, 2000);


let dizi = ["enes","ahmet","mehmet","hasan","ayşe","kübra","selin","esra"]

// dizi.forEach(function(d,index){
//     console.log(d,index)
// })
dizi.forEach((e,index,arr)=>console.log(e,index,arr))
//  bu yöntem dizideki sayıların toplamını verir
let sum = 0
const numbers = [1,2,3,4,5,6,7,8]
numbers.forEach((num)=>sum+= num)
console.log(sum)
//  bu yöntem diziyi döner ve bize hepsini büyük harf yapar

// dizi.forEach((num)=>console.log(num.toUpperCase()))
// map yöntemi yeni bir değişkene atayıp kullanıyoruz
const yeniNumber = numbers.map((e,index)=>e*e)
console.log(yeniNumber)

const BuyukHarf = dizi.map((isim)=>isim.toUpperCase())
console.log(">>>>>>",BuyukHarf)

const Slice = dizi.map((e)=>e.slice(0,5))
console.log(Slice)

const Land = dizi.filter((d)=>d.includes("es"))
console.log(Land)

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((sc) => sc.score > 80)
  console.log(scoresGreaterEighty)

//   find fonksiyonu
const bul=  scores.find((e)=>e.score> 95)
console.log(bul)
const bul1 = scores.find((bul)=>bul.name.length < 7)
console.log(bul1)


