let myform=document.getElementById('addForm');
myform.addEventListener('submit',AddUser);

let UserList=document.getElementById('users');
let userId=undefined;
let url='https://crudcrud.com/api/a0c9b8cf1b934c88bedc4b6872477183/data';

function AddUser(e)
{
    e.preventDefault();

    let obj={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    };

    // send data using post req
    if(userId === undefined)
    {
        axios.post(url,obj)
         .then(res=>{
            document.getElementById('name').value=""
            document.getElementById('email').value=""
            document.getElementById('phone').value=""
         })
         .catch(err=>{
             console.log(err);
         })
    } else{
         axios.put(`${url}/${userId}`,obj)
         .then(res=>console.log(res))
         .catch(err=>console.log(err));
    }
}

// load user 
window.addEventListener('DOMContentLoaded',()=>{
   axios.get(url)
     .then(res=>{
         for(let i=0; i<res.data.length; i++){
            console.log(res.data[i]);
            showUser(res.data[i]);
         }
     })
     .catch(err=>console.log(err));
})
// show user
function showUser(e)
{
     let li=document.createElement('li');
     li.className='list-group-item';
     li.appendChild(document.createTextNode(e.name +' '+e.email+ ' '+e.phone));
     UserList.appendChild(li);

     let delBtn = document.createElement('button');
     delBtn.className='btn btn-primary btn-sm float-right delete';
     delBtn.appendChild(document.createTextNode('Delete'));
     
     //Remove user from local storage
     delBtn.onclick = () =>{
         //localStorage.removeItem(userObj.emailId);
         //console.log(userObj._id);
         axios.delete(`${url}/${e._id}`)
              .then(res=>console.log(res))
              .catch(err=>console.log(err));
         UserList.removeChild(li);
     }
     li.appendChild(delBtn);
 
     //create edit button.
     let editBtn = document.createElement('button');
     editBtn.className ='btn btn-primary btn-sm float-right edit';
     editBtn.appendChild(document.createTextNode('Edit'));
     editBtn.onclick = () => {
         document.getElementById('name').value=e.name;
         document.getElementById('email').value=e.email;
         document.getElementById('phone').value=e.phone;
         userId=e._id;
         UserList.removeChild(li);
         
     }
     li.appendChild(editBtn);
     
     UserList.appendChild(li);
}
