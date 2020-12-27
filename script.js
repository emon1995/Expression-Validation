let Name = document.querySelector("#Name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone_Number");
let postCode = document.querySelector("#post_Code");


//Add Event Listener
Name.addEventListener("click", newName);
email.addEventListener("click", newEmail);
phoneNumber.addEventListener("click", newPhoneNumber);
postCode.addEventListener("click", newPostCode);

// Name Function
function newName(e){
    let name_re = /^[a-zA-Z]+ [a-zA-Z]+?$/;
    choice = prompt("Enter Your Full Name: ");


let post = choice.match(name_re);

    var text;
if(post){
    text = "Name Matched!";
    
}else{
    text = "Name doesn't Matched!";
    
}

alert(text);

    e.preventDefault();
}

//Email Function
function newEmail(e){
    let email_re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    choice = prompt("Enter Your Email: ");


let post = choice.match(email_re);

    var text;
if(post){
    text = "Email Matched!";
    
}else{
    text = "Email doesn't Matched!";
    
}

alert(text);

    e.preventDefault();
}

//Phone Number Function
function newPhoneNumber(e){
    let phone_re = /^([01]|\+88)?\d{11}/;
    choice = prompt("Enter Your Phone Number: ");


let post = choice.match(phone_re);

    var text;
if(post){
    text = "Phone Number Matched!";
    
}else{
    text = "Phone Number doesn't Matched!";
    
}

alert(text);

    e.preventDefault();
}

//Post Code Function
function newPostCode(e){
    let post_re = /^[0-9]{4}$/;
    choice = prompt("Enter Your PostCode: ");


let post = choice.match(post_re);

    var text;
if(post){
    text = "Post Code Matched!";
    
}else{
    text = "Post Code doesn't Matched!";
    
}

alert(text);

    e.preventDefault();
}





