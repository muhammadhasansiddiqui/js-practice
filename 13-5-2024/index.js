// chat app
var arr = 
    [
        {
            "id": 1,
            "name": "hasan",
            "message": "Hello"
        },
        {
            "id": 2,
            "name": "uzair",
            "message": "Hi"
        },
        {
            "id": 3,
            "name": "zee",
            "message": "How are you?"
        }
    
        ,
        

        

    ];

 function sendMessage() {
    var chat = document.getElementById("message-input");
    chat.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        chat.innerHTML += "<div class='chat-box'><p class='name'>" + arr[i].name + "</p><p class='message'>" + arr[i].message + "</p></div>";
    }
} {
    
 }