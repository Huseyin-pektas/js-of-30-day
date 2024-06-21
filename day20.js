const MyButton = document.getElementById('myButton')
MyButton.classList.add('btn')
MyButton.innerText="Ben Butonum"
MyButton.style.backgroundColor="red"
MyButton.style.color="white"
MyButton.style.padding="10px 20px"
MyButton.style.fontSize="20px "
MyButton.style.borderRadius="5px "
MyButton.style.margin="10px "

MyButton.addEventListener('click',()=>{
    console.log('butona tıkladınız')
})
console.log(MyButton," benim butonda ne var")

const Body1 = document.getElementById("body1")
const color1 = document.createElement("div")

color1.classList.add("color-box")
color1.id= "color-box1"
color1.style.backgroundColor="blue"
color1.style.margin ="10px"
color1.style.border ="2px solid "
color1.style.witdh="200px"
Body1.appendChild(color1)

const Buttons = document.createElement('button')
Buttons.innerText = "Yeni Buton"
Buttons.type="button"
Body1.appendChild(Buttons)

function ButunaTıklandı(){
    allTitles.innerText=" butona tıklanınca ben geliyorum ve 2 saniye sonra kaybolacağım"
    allTitles.style.color="red"
    allTitles.style.fontSize="24px"
    setTimeout(() => {
        allTitles.innerText="Baslık"
    }, 2000);
   
 
}
 Buttons.addEventListener("click",ButunaTıklandı)

const allTitles = document.getElementById('baslik')

allTitles.classList.add("title")
allTitles.id = "title1"

allTitles.innerText = "Başlık"



