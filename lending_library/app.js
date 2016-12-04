
// ===============PROVIDED CODE========================



let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]





function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}
// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)


function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

// ==================PROVIDED CODE ENDS========================



//==================CODE BEGINS================

let users = [
{userid:'wmdd',password:'123456',serial:58}
]



function signin(){
  document.getElementById('logon').style.display = 'initial'
  document.getElementById('newuser').style.display = 'none'
}


function signup(){
  document.getElementById('newuser').style.display = 'initial'
  document.getElementById('logon').style.display = 'none'
}




//================FUNCTION TO CREATE A NEW USER PROFILE============================


function createUser(){

  let user = {
    userid: document.getElementById('newlogin').value ,password: document.getElementById('newpassword').value ,
    serial: Math.floor(Math.random([100],[10000])*100)
  }

  users.push(user)
  document.getElementById('newuser').style.display = 'none'
  document.getElementById('disp').innerHTML = 'Your account has been created' 
 
}


// ========================FUNCTION TO LOGIN =================================


function logged(){
  let login = document.getElementById('login').value
  let password = document.getElementById('password').value
  let loginCheck = false


  for (let i=0; i<users.length;i++)
  {
    if(login==users[i].userid && password==users[i].password){
      document.getElementById('logon').style.display = 'none'
      document.getElementById('disp').innerHTML = `Welcome, ${users[i].userid}`
      document.getElementById('disp1').innerHTML = `user ID: ${users[i].serial}`
    document.getElementById('newuser').style.display = 'none'
      loginCheck=true
      break;
    
  }

  if(loginCheck==false){
      document.getElementById('disp1').innerHTML = 'Your login/password are not in our database. Please try again'  
  }
}
}

// ================END OF CODE===============================
