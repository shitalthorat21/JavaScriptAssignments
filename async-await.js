  
async function fetchEmployees()
{
    try{
        const resp = await fetch('http://dummy.restapiexample.com/api/v1/employees');

        let results = await resp.json();

        let emparr=[];
    
        results.data.map((r)=> emparr.push(r));
    
        console.log("my local array");

        console.log(JSON.stringify(emparr));

    }
    catch(e)
    {
      console.log("error");    
    }
    
  




  





  
  
  