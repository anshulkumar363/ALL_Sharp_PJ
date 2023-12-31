
// GET REQUEST

function getTodos() {
    // big way to write axios 

    // axios({
    //   method:'get',
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit:5}
    // })
    // .then(res=> showOutput(res))
    // .catch(error=> console.log(error));
    
    // sort way 
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=> showOutput(res))
    .catch(err=> console.log(err));
    // even you can write without .get

  }
  
  // POST REQUEST
  function addTodo() {
    
    // axios({
    //   method:'post',
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   data: {
    //     title:'New Todo',
    //     completed: true
    //     }
    // })
    axios.post('https://jsonplaceholder.typicode.com/todos',{title:'New Todo',completed: true})
    .then(res=> showOutput(res))
    .catch(error=> console.log(error));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    // put request we add id to url /1

    // axios.put('https://jsonplaceholder.typicode.com/todos/1',{title:'Put request',completed: true})
    // .then(res=> showOutput(res))
    // .catch(error=> console.log(error));

    // patch(data updated with existing data) request we add id to url /1
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{title:'Patch request',completed: true})
    .then(res=> showOutput(res))
    .catch(error=> console.log(error));

  }
  
  // DELETE REQUEST
  function removeTodo() 
  {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=> showOutput(res))
    .catch(error=> console.log(error));
  }
  
  // SIMULTANEOUS DATA
  // now suppose we need posts and todos at same time

  function getData() {
     axios.all([
         axios.get('https://jsonplaceholder.typicode.com/todos'),
         axios.get('https://jsonplaceholder.typicode.com/posts')
     ])
    //  .then(res=>{
    //     console.log(res[0]); 
    //     console.log(res[1]);
    //     showOutput(res[0]);
    // })
    .then(axios.spread((post,todo)=>showOutput(post)))
     .catch(err=> console.log(err));
  }
  
  // CUSTOM HEADERS
  // create a header 
  function customHeaders() 
  {
     const config={
        header:{
            'Content-type':'application/json',
            Authorization:'some token'
        }
     }

     axios.post('https://jsonplaceholder.typicode.com/todos',{title:'New Todo',completed: true},config)
    .then(res=> showOutput(res))
    .catch(error=> console.log(error));
    
  }
  
  // TRANSFORMING REQUESTS & RESPONSES

  function transformResponse() {
    
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
          title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
          data.title = data.title.toUpperCase();
          return data;
        })
      };
    
      axios(options).then(res => showOutput(res));
  }
  
  // ERROR HANDLING
  
  function errorHandling() {
    //console.log('Error Handling');

    axios
    .get('https://jsonplaceholder.typicode.com/todosppSp', {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert('Error: Page Not Found');
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    // console.log('Cancel Token')
    const source = axios.CancelToken.source();
    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        cancelToken: source.token
      })
      .then(res => showOutput(res))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        }
      });
  
    if (true) {
      source.cancel('Request canceled!');
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  // we make interceptor so that every time when we go for any request we get config and time
  axios.interceptors.request.use(
    config=>{
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at time
         ${new Date().getTime()}`);

    return config;
    },error=>{
        return Promise.reject(error);
    }
  );
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);