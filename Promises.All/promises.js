// create a posts Array
const posts=
[ 
    {title:'post1', body:'this is post1', lastTime:'123'},
    {title:'post2', body:'this is post2', lastTime:'456'},
];
//create a function createPost which push posts after 2 sec

function createPost(post)
{
   return new Promise((resolve,reject)=>
   {
     setTimeout(()=>
     {
       posts.push(post);
       resolve();
    },2000);
   })
}
// update userlasttime 

function updateLastUserActivityTime(post)
{
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>{
        post.lastTime=new Date();
        resolve();
        },1000);
    })
}

// to get post

function getPost()
{
    //let out='';
    setTimeout(()=>
    {
        posts.forEach((key) => {
            console.log(`${key.title} : ${key.body} : ${key.lastTime}`);
        });
    },1000);

}
let post={title:'post3',body:'this is post3'};
// delete the post

// function deletePost()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(posts.length>0)
//             {
//                 const dltPost=posts.pop();
//                 resolve(dltPost);
//             }
//             else
//             {
//                 reject('Error! Array is empty');
//             }
//         })
//     })
// }

//promise all
 Promise.all([createPost(post),updateLastUserActivityTime(post)]).then(getPost);
// deletePost();


