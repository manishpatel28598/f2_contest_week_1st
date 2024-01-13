let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developers = arr
    .filter(arr => arr.profession === "developer")
    .map(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
    }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "alice", age: "22", profession: "designer" },
        { id: 6, name: "bob", age: "25", profession: "manager" },
        { id: 7, name: "charlie", age: "30", profession: "developer" }
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }
  // Call the functions
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();