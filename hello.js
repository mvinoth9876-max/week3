let messages = [];

let input = document.getElementById("msg");
let count = document.getElementById("count");
let status = document.getElementById("status");
let display = document.getElementById("display");

input.addEventListener("input", function () {
    count.textContent = input.value.length;
});

function addMessage() {

    let text = input.value;

    let promise = new Promise(function(resolve, reject){

        if(text.length >= 3){
            resolve(text);
        }
        else{
            reject("Message must contain at least 3 characters");
        }

    });

    promise.then(function(msg){

        status.textContent = "Message Added Successfully";

        messages.push(msg);

        showMessages();

        input.value = "";
        count.textContent = 0;

    });

    promise.catch(function(error){

        status.textContent = error;

    });

}

function showMessages(){

    display.innerHTML = "";

    for(let i = 0; i < messages.length; i++){

        let p = document.createElement("p");

        p.textContent = messages[i];

        display.appendChild(p);

        setTimeout(function(){

            if(messages.includes(messages[i])){

                messages.splice(i,1);

                showMessages();

                status.textContent = "Message Expired";

            }

        },10000);

    }

}

function clearMessages(){

    messages = [];

    display.innerHTML = "";

    status.textContent = "All Messages Cleared";

}