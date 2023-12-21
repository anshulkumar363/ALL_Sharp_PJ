//with the help of Async&Await

console.log('Person 1: Show Ticket');
console.log('Person 2: Show Ticket');

const GoToMovie= async()=>{ 

const promiseAliceBringingTicket=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve('Ticket');
    },3000)
   
});

 let Ticket= await promiseAliceBringingTicket;

 const getPopCorn= new Promise((resolve,reject)=>
    {
        resolve(`popcorn`);
    })
   console.log(`Alice: I have tickets`);
  console.log('Bob: Can we get in?');
   console.log(`Alice: No I am hungry`);

let  popcorn=await getPopCorn;
 
console.log(`Bob: I got some ${popcorn} `);
console.log('Bob: Can we get in');
console.log('Alice: No I need some buttor on Popcorn');

const getButtor= new Promise((resolve,reject)=>
    {
        resolve(`Buttor`);
    })

    let buttor= await getButtor;

    console.log(`Bob: I got ${buttor} on popcorn`);
    console.log('Bob: Anything else');
    console.log('Alice: I need cold drink');

const getColdDrink= new Promise((resolve,reject)=>{
        resolve(`ColdDrink`);
    })

  let colddrink=await getColdDrink;

  console.log(`Bob: I got ${colddrink} `);
  console.log('Alice: Now we have every thing lets go');
  console.log('Bob: lets go');
  return Ticket;
}
GoToMovie().then((t)=> console.log(`Person 3: Show ${t}`));
console.log('Person 4: Show Ticket');
console.log('Person 5: Show Ticket');