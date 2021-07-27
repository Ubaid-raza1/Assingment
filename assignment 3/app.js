//OBJECT 1

// var allitems = [
//     {name: "juice", price: 30, quantity: 4 },
//     {name: "burger", price: 50, quantity: 2 },
//     {name: "samosa", price: 20, quantity: 5 },
//     {name: "tea", price: 40, quantity: 5 }
// ]
// document.write(allitems[0].price*allitems[0].quantity + "<br>")
// document.write(allitems[1].price*allitems[1].quantity + "<br>")
// document.write(allitems[2].price*allitems[2].quantity + "<br>")
// document.write(allitems[3].price*allitems[3].quantity + "<br>")

// var ManProperties = {
//  name: "ubaid",
//  email: "ubaidbhai61@gmail.com",
//  password: "Mylaptop12",
//  country: "pakistan",
//  gender: "male",
//  city: "karachi",
//  age: 19

// }
// document.write("age" in ManProperties)
// document.write("<br>")
// document.write("country" in ManProperties)
// document.write("<br>")
// document.write("firstname" in ManProperties)
// document.write("<br>")
// document.write("lastname" in ManProperties)

// function Plan(name,country,age,enducation,city){
//    this.name = name
//    this.country = country
//    this.age = age
//    this.city = city
//    this.enducation = enducation
// }

// var pro = new Plan(
//     "ubaid","pakistan",19,"karachi","matriculation"
// )
//     console.log(pro)



// question no 4:
function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function myfun() {
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if ((personName.length && address.length && education.length && profession.length) == 0) {
        console.log("Please fill all the field correctly");
    } else {
        var gender1 = document.getElementById("male");

        var gender2 = document.getElementById("female");

        if (gender1.checked) {
            var a = "male";
        } else if (gender2.checked) {
            var a = "female";
        }

        const myArea = new Area(personName, a, address, education, profession);
        console.log(myArea);
    }
}
