console.log('Person 1: Show Ticket');
console.log('Person 2: Show Ticket');

const GoToMovie= async()=>{ 

const promiseAliceBringingTicket=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve('Ticket');
    },3000)
   
});

 const getPopCorn= new Promise((resolve,reject)=>
    {
        resolve(`Popcorn`);
    })

const getWater= new Promise((resolve,reject)=>
    {
        resolve(`Water`);
    })

const getColdDrink= new Promise((resolve,reject)=>{
        resolve(`ColdDrink`);
    })

    let Ticket= await promiseAliceBringingTicket;
    let [pop,water,drink]= await Promise.all([getPopCorn,getWater,getColdDrink]);

    console.log(`${pop} : ${water} : ${drink}`);
    //these all are independent events we can use promises.all 
    

  return Ticket;
}
GoToMovie().then((t)=> console.log(`Person 3: Show ${t}`));
console.log('Person 4: Show Ticket');
console.log('Person 5: Show Ticket');