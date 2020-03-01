
const numbers=[];
for(let i=0;i<=100;i++)
{
    numbers.push(i);
}


function createArray()
{
    
    console.log(numbers);
}

function contentOfArray()
{
    for(num in numbers)
    {
        console.log(num);
    }
}

