const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

allCars.forEach(car => {

    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})



// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

const doctorsBill = {
    officeName: "Office name",
    streetAddress: "Street Address",
    doctorName: "Doctor Name",
    patientName: "Patient Name",
    visitDate: "1/23/45",
    amountBilled: 9999.99,
    dueDate: "12/34/56"
}

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

// console.log(doctorsBill[dateVisited])
// console.log(doctorsBill[owed])
// console.log(doctorsBill[patient])
// console.log(Object.values(doctorsBill))
const firstCar = allCars[0]


outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(allCars[0])) {
    outputElement.innerHTML += `<div>${key}</div>`
}


outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})

const bug = {
    flying: true,
    legs: 6
}

for (const entry of Object.entries(bug)) {
    console.log(entry)
}

outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})
