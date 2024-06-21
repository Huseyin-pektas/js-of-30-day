
let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
//   let skillJSON = JSON.stringify(skills)
//   localStorage.setItem('skills', skillJSON)
//   console.log(skillJSON)


  const url ="https://restcountries.com/v2/all"
  fetch(url)
  .then( response => response.json())
  .then(data =>{
    console.log(data)
  })
  .catch(error => console.log(error))


  const FetchData = async()=>{
    try{
      const response =  await fetch(url)
      const ulkeler = await response.json()
      console.log(ulkeler)
    }
    catch(error) {console.log(error)}
  }

//    kodlarında tek tırnak kullanmanı tercih edin.


function newNmae(){
    let a =5
  function myNewNumber(){
        a++
        return a
    }
    return myNewNumber
}
const enson = newNmae()
console.log(enson())
console.log(enson())
console.log(enson())
console.log(enson())

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())