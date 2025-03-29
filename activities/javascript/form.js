document.getElementById('myform').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firstname) {
        alert("You need to enter your name.");
        return;
    }

    if (!age || age<18) {
        alert("You need to be 18.");
        return;
    }

    const  formData = {
        firstname: firstname,
        email: email,
        password: password,
    };

    console.log(formData);
   

const xhr = new XMLHttpRequest();
xhr.open("GET", "submit.json", true);
xhr.setRequestHeader("COntent-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
    if (xhr.readystate === 4 && xhr.status === 200) {
        alert('Form submitted successfully.');
    } else if (xhr.readystate === 4) {
        alert('Error submitting form.');
    }
};
xhr.send(JSON.stringify(formData));

});