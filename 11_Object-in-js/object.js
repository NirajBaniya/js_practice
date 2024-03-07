// Objects
const city ={
    id: 1,
    name : "Butwal",
    zip_code: 32907,
    population: 600000,
    city_detail: function (){
        return this.name + " " + this.zip_code;
    }
}
  console.log(city.city_detail())

  // Another example of Objects..
  const city1 ={
    id: 1,
    name : "Butwal",
    zip_code: 32907,
    population: 600000,
    city_detail: function (){
        return city1.name + " " + city1.zip_code;
    }
}
  console.log(city1.city_detail())

  // Method of Creating an Object

  const person = new Object;
  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 24;

  console.log(person)

  //Array of Objects

  const person_details = [
    {
        firstName: "Ram",
        age: 25,
        address: "Butwal"
    },
    {
        firstName : "Hari",
        age: 20,
        address: "Pokhara"
    },
    {
        firstName: "Bishal",
        age : 95,
        address: "Sunwal" 
    },
    {
        firstName: "Sunil",
        age : 85,
        address: "Butwal" 
    }
  ]

  for(let i = 0; i < person_details.length; i++) {
      console.log(person_details[i])
      document.write("The name of person is: ", person_details[i].firstName + "<br>");
      document.write("The name of address is: ", person_details[i].address + "<br>");
      document.write("The age is: ", person_details[i].age + "<br>");
      document.write("Candidate <hr>")

  }

  // Dates in Js
  const today_date = new Date();

  // Date Formate (MM:dd:YY)
  const other_date = new Date("3/7/2024 9:36")
   console.log(other_date)

   let day, date, minutes, second, time, month, hours;
   day = other_date.getDay();
   date = other_date.getDate();
   minutes = other_date.getMinutes();
   second = other_date.getSeconds();
   time = other_date.getTime();
   month = other_date.getMonth();
   hours = other_date.getHours();

   console.log(day, date, minutes, second, time, month, hours)

   other_date.setDate(7);
   console.log(other_date)


var library =[
    {
        title : "The Road Ahead",
        author : "Bill Gates",
        libraryID : 1
    },
    {
        title : "Walter Isaacson",
        author : "Steve Jobs",
        libraryID : 2
    },
     {
        title : "Brief of History of Time",
        author : "Stephen Hawking",
        libraryID : 3
    }, 
     {
        title : "Mockingjay: The Final Book of the Hunger Games",
        author : "Suzanne Collins",
        libraryID : 4
    }
];

const sorted_library_id = library.sort((a, b)=>{
    return (b.libraryID - a.libraryID)
});
console.log(sorted_library_id)


















