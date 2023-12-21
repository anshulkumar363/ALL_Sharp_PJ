console.log('Person 1: Show Ticket');
console.log('Person 2: Show Ticket');

const promiseAliceBringingTicket=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve('Ticket');
    },3000)
   
})
const getPopCorn=promiseFriendBringingTicket.then((t)=>
{
    console.log('Bob: Can we get in?');
    console.log(`Alice: No I am hungry`);
    // alice return a new promise
    return new Promise((resolve,reject)=>
    {
        resolve(`${t} popcorn`);
    })
})
getPopCorn().then((t)=>{
    console.log(`${t}`);
})


console.log('Person 4: Show Ticket');
console.log('Person 5: Show Ticket');
