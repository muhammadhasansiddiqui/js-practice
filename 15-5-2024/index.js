
var body = document.getElementsByTagName('body')[0];    
body.innerHTML = '<ul id="userList"</ul>';


function getUser() {
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then((success) => renderUser (success.users));}

function renderUser(users) {
    var ul = document.getElementsByTagName( 'ul') [0];
    for (var i = 0; i < users.length; i++) {
        ul.innerHTML+=
        `<li><img src = ${users[i].image} height = "15%" width="15%">
        <br>        

        username : ${users[i].username}<br />
        email : ${users[i].email}<br />
        gender : ${users[i].gender}<br />
        age : ${users[i].age}<br />
        address : ${users[i].address}<br />
        phone : ${users[i].phone}<br />
      
      

        </li>`
    };
}

      
        
    //     var li = document.createElement('li');
    //     li.innerHTML = users[i].firstName + ' ' + users[i].lastName + ' ' + users[i]
    //     .gender + ' ' + users[i].age + ' ' + users[i].email;        ul.appendChild(li);
    // }}