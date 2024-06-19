// destructuring  and spread metodu

const names = ["ahmet ", "mehmet ", "selim", "tarık", "veli "]

const [isim1, isim2, isim3, isim4, isim5] = names

// console.log(isim1,isim2,isim3,isim4,isim5)

let numara = [1, 2, 3, 4, 5]

const [num1, num2, ...rest] = numara
// console.log(num1,num2,rest)


const user = { name: "ali", age: 25, job: "developer" }

const copiedUser = { ...user, title: "engineer" }

// console.log(copiedUser)

const summary = (...args) => {
    // console.log(args)
}

summary("ali", "veli", "selim", 12, 13, 14)


// console.warn("This is a warning message")

// console.error("This is an error message")
// console.table(names);
const userrr = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
//   console.table(userrr)
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
//   console.table(users)

// console.info('30 Days Of JavaScript challenge is trending on Github')
// console.info('30 Days Of fullStack challenge might be released')
// console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert(4 > 3, '4 is greater than 3') // no result
// console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// for (let i = 0; i <= 10; i += 1) {
//   let errorMessage = `${i} is not even`
//   console.log('the # is ' + i)
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
// }
// const func = () => {
//     console.count('Function has been called')
//   }
//   func()
//   func()
//   func()
const UserBilgi =
    `{
    "users1":[
        {
            "adı":"ahmet",
            "soyadı":"kaya",
            "yas":25,
            "e-posta":"ahmet.kaya@gmail.com",
            "skills":["javascript","react","nodejs"],
            "isLogin":false

        },
        
         {
                "adı":"veli",
                "soyadı":"kaya",
                "yas":30,
                "e-posta":"veli.kaya@gmail.com",
                "skills":["javascript","react","nodejs"],
                "isLogin":true
        }
        
    ]
}
    `

const usersText =
    `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`

const usersObj = JSON.parse(usersText, (key ,value)=>{
    let newVlue = typeof value ==='string' && key != 'email' ? value.toUpperCase() : value
    return newVlue
})
// console.log(usersObj)


const userObj = JSON.parse(UserBilgi, undefined)
// console.log(userObj)

const newUser = {
    adı: "selim",
    soyadı: "kaya",
    yas: 28,
    eposta: "selim.kaya@gmail.com",
    skills: ["javascript", "react", "nodejs"],
    isLogin: false
}
const txt = JSON.stringify(newUser,["adı","soyadı","yas","eposta","skills","isLogin"],4)
console.log(txt)