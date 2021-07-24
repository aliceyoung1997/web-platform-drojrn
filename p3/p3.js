// api url: https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status)
        return
      }

      response.json().then(function(data) {
        appendData(data)
      })
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  })

  function appendData(data){
    for(let i = 0; i < data.length; i++){
      let name=data[i].name
      let email=data[i].email
      let company= data[i].company.name
      const li =document.createElement('li')
      li.classList.add('person')
      li.innerHTML=`${name}/${company}/${email} <button class='delete'>刪除</button>`
      document.querySelector('.list').appendChild(li)
    }
  }

  document.querySelector('.list').addEventListener('click',
    function(e){
      if(e.target.classList.contains('delete')){
        document.querySelector('.list').removeChild(e.target.closest('.person'))
      }
    }
  )