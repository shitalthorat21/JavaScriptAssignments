// function get(url) {
  
//   return new Promise(function(resolve, reject) {
    
//     var req = new XMLHttpRequest();
//     req.open('GET', url);

//     req.onload = function() {
     
//       if (req.status == 200) {
       
//         resolve(req.response);
//       }
//       else {
        
//         reject(Error(req.statusText));
//       }
//     };

    

//     // Make the request
//     req.send();
//   });
// }

// function testPromise() {
//   get('http://dummy.restapiexample.com/api/v1/employees').then(function(response) {
//       console.log("Success Promise!", response);

//       try{

//           let results = response.json();
  
//           let emparr=[];
      
//           results.data.map((r)=> emparr.push(r));
      
//           emparr = JSON.parse(response).data;

//           console.log(JSON.stringify(emparr));
  
//       }
//       catch(e)
//       {
//         console.log("Error Occured");    
//       }

//     }, function(error) {
//       console.error("Failed");
//     })
// }

let emp_arr=[];
function testPromise(){

  const Promise=fetch("http://dummy.restapiexample.com/api/v1/employees");
Promise.then(response=>{
  const data= response.json();
  console.log(data);
  
  data.then(response2=>{
    emp_arr.push(response2);  
  console.log(emp_arr);

});
}).catch(handleError)
}

function handleError(err) {
  console.log('Ohh noooo!!');
  console.log(err);
}
