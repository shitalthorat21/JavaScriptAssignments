


// async function fetchEmployeeDetails(callback){ 
//   const resp = await fetch('http://dummy.restapiexample.com/api/v1/employees');
//   results = await resp.json();
//   addEmployeeDetails(results); 
//   } 
    
// function addEmployeeDetails(results){
//   const resp = fetch('http://dummy.restapiexample.com/api/v1/employees');
//   results = resp.json();

//         let emparr=[];
    
//         results.data.map((r)=> emparr.push(r));
    
//         console.log("CALLBACK RESPONSE BEING PRINTED: ");

//         console.log(JSON.stringify(emparr));
//   }
  

//   function getEmployeeUsingCallBack(callback) {
//     // fetchEmployeeDetails(addEmployeeDetails);
//     addEmployeeDetails();
//   }
function addEmployeeDetails(results){
const response=fetch('http://dummy.restapiexample.com/api/v1/employees')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    // console.log(JSON.stringify(myJson));
    let emparr=[];
    myJson.data.map((r)=>emparr.push(r));
    console.log("CALLBACK RESPONSE BEING PRINTED: ");
    console.log(JSON.stringify(emparr));
  })


}

