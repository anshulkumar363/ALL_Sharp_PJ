let neworder=document.getElementById('addOrder');

neworder.addEventListener('submit',AddOrder);

let url='https://crudcrud.com/api/47a90984babc42228bea31a5c246a82f/orders';

let UserList1=document.getElementById('t1');
let UserList2=document.getElementById('t2');
let UserList3=document.getElementById('t3');
let userId=undefined;


//Add order
 function AddOrder(e)
 {
    e.preventDefault();

    let newObj={
        orderprice:document.getElementById('orderprice').value ,
        ordername:document.getElementById('ordername').value ,
        ordertable:document.getElementById('table').value 
    }

   if(userId === undefined)
   {
     axios.post(url,newObj)
     .then(res=>{
         document.getElementById('orderprice').value="",
        document.getElementById('ordername').value="",
        document.getElementById('table').value=""
        // console.log(res);
     })
     .catch(err=> console.log(err));
    }
    else{
        axios.put(`${url}/${userId}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

 }

 // load order with the help add event listner of domcontentloaded

 window.addEventListener('DOMContentLoaded',()=>{
   
    //axios get req
    axios.get(url)
    .then(res=>{
        for(let i=0; i< res.data.length; i++){
             console.log(res.data[i]);
             ShowOrder(res.data[i]);
        }
    })
    .catch(err=>console.log(err));
 })

 function ShowOrder(e)
 {
// make li and add to UserList of corresponding table;
    let li=document.createElement('li');

    console.log(e.ordertable);

    li.appendChild(document.createTextNode(e.orderprice+'   '+e.ordername));

    if(e.ordertable === "table1")
    {
        li.id="t1";
        UserList1.appendChild(li);
    }
    if(e.ordertable === "table2")
    {
        li.id="t2";
        UserList2.appendChild(li);
    }
    if(e.ordertable === "table3")
    {
        li.id="t3";
        UserList3.appendChild(li);
    }

    //make delete btn

    let delBtn=document.createElement('button');
    delBtn.className='btn btn-secondary btn-sm float-right del';
    delBtn.appendChild(document.createTextNode('del'));
    if(e.ordertable === "table1")
    {
        UserList1.appendChild(delBtn);
    }
    if(e.ordertable === "table2")
    {
        UserList2.appendChild(delBtn);
    }
    if(e.ordertable === "table3")
    {
        UserList3.appendChild(delBtn);
    }
    delBtn.onclick=()=>{
        axios.delete(`${url}/${e._id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

        if(e.ordertable === "table1")
    {
        UserList1.removeChild(li);
        UserList1.removeChild(delBtn);
    }
    if(e.ordertable === "table2")
    {
        UserList2.removeChild(li);
        UserList2.removeChild(delBtn);
    }
    if(e.ordertable === "table3")
    {
        UserList3.removeChild(li);
        UserList3.removeChild(delBtn);
    }
    }

    if(e.ordertable === "table1")
    {
        UserList1.appendChild(li);
    }
    if(e.ordertable === "table2")
    {
        UserList2.appendChild(li);
    }
    if(e.ordertable === "table3")
    {
        UserList3.appendChild(li);
    }

 }