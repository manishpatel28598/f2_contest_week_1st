let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const p = arr.filter((eployee) => {
    return eployee.profession == "developer";
  })
  p.map((data) => {
    console.log(data)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const f = arr.filter((eployee) => {
    return eployee.profession == "developer";
  })
  f.forEach((data) => {
    console.log(data)
  })
}

function addData() {
  //Write your code here, just console.log
  const newObj = ({ id: 4, name: "susan", age: "20", profession: "intern" })
  arr.push(newObj)
  console.log(newObj)
}

function removeAdmin() {
  //Write your code here, just console.log
  const reAdmin = arr.filter((eployee) => {
    return eployee.profession != "admin";
  })
  console.log(reAdmin)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  const newArr = arr.concat(arr2)
  console.log(newArr)
}
//   // Call the functions
// PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// concatenateArray();