console.log('Person 1: Show Ticket');
console.log('Person 2: Show Ticket');

const GoToMovie= async()=>{ 

const promiseAliceBringingTicket=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        reject('Ticket');
    },3000)
   
});

  // if our promise got rejected
  let Ticket
  try{
     Ticket= await promiseAliceBringingTicket;
  }catch{
     Ticket='Sad Face';
  }
    //these all are independent events we can use promises.all 
  return Ticket;
}
GoToMovie().then((t)=> console.log(`Person 3: Show ${t}`));
console.log('Person 4: Show Ticket');
console.log('Person 5: Show Ticket');