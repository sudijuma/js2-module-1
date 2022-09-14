//


localStorage.setItem("name", "Sudi");

// how to get local storage 

//retrive data from local storage

//get item

const firstName = localStorage.getItem('name');
console.log(firstName);

//remove item from local storage

localStorage.removeItem('name');

// 3 item local storage

localStorage.setItem("name", "Sudi");
localStorage.setItem("age", "35");
localStorage.setItem("city", "mombasa");

const dataArr = '{"name":"Sudi","id":1234, "isStudent":true,"section":"Front-End Development"}';

localStorage.setItem("user arr", dataArr);

let dataArrNew = localStorage.getItem("dataArr");
console.log(dataArrNew);
console.log("data", JSON.parse(dataArrNew));

/* localStorage.clear(); */