//  bu dersimizde döngüleri işleyeceğiz


for (let i = 0; i < 4; i++) {

    // console.log(i)
}
for (let i = 5; i >= 0; i--) {
    // console.log(i)
}
for (let i = 0; i <= 5; i++) {
    // console.log(`${i} * ${i} = ${i * i}`)
}
for (let i = 0; i <= 5; i++) {
    // console.log(`${i} * ${i} = ${i * i}`)
}

const number = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for (let i = 0; i<number.length; i++){
    sum = sum + number[i]
}
// console.log(sum)
const newArr =[]
for(i = 0;i<number.length; i++){
    newArr.push(number[i]**2)
}
// console.log(newArr)

const coutry = ["turkey","italy","usa","denmark","sweden"]

const Arr =[]
for (let i = 0; i<coutry.length; i++){
    Arr.push(coutry[i].toUpperCase())
    if(Arr == "TURKEY"){
        break
    }
}
// console.log(Arr)

for (let i = 0 ; i <= 7 ; i++) {
let arttir = ""
    for (let j = 1; j<=i; j++){
        arttir+= "#";
    }
    // console.log(arttir)
}
let yeniDizi = []
for(let i = 0; i<= 9; i++){
    yeniDizi.push(number[i] * number[i])
}
//  console.log(yeniDizi)

 for ( let j = 0; j <=10; j++ ){
    // console.log(j +" x "+ j +" = " + (j*j))
    // console.log(`${j}  ${j**2}  ${j**3}`)
 }
 for ( let j = 0; j <=100; j+=2 ){
    // console.log(j +" x "+ j +" = " + (j*j))
   
    // console.log(j)
 }
 for ( let j = 0; j <=100; j+=2 ){
    if(j%2 ==0){
//  console.log(j)
    }
   
   
 }

 function isPrime(num) {
    if (num <= 1) return false; // Asal sayılar 1'den büyük olmalı
    if (num === 2) return true; // 2 asaldır
    if (num % 2 === 0) return false; // Çift sayılar asal olamaz (2 hariç)
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        // console.log(i);
    }
}

 let sehir = [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
let arazili =[]
let landOlmayanSehir =[]
for (let i = 0; i <sehir.length; i++){
    if(sehir[i][0].includes("land")){
        arazili.push(sehir[i][0]);
    }else{
        landOlmayanSehir.push(sehir[i][0])
        console.log(landOlmayanSehir)
    }
    
    
}
console.log(landOlmayanSehir)
// if(arazili.length > 0){
//     console.log(arazili)
// }else {
//     console.log("bu ülkelerin 'land' kelimesi yok")
// }
