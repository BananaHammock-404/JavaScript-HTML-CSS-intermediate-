const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


function sendMsg (){
    let content = messageIn.value;
    if (content === ''){
        alert('Please Enter Valid Value. Current Value is Empty')
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = ''; //deleting the message the user typed because its alraedy displayed in messageOut
    }
}


sendBtn.addEventListener('click', sendMsg);