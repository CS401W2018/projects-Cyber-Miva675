document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    alert ("Form Submitted");

    const firstname = document.getElementById('firstname').value.trim();
    const middlename = document.getElementById('middlename').value.trim();
    const lastname = document.getElementById('lastname').value.trim();

    const dateofbirth = document.getElementById('date-of-birth').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);

    const maleChecked = document.getElementById('male').checked;
    const femaleChecked = document.getElementById('female').checked;
    const state = document.getElementById('state').value;

    const phonenumber = document.getElementById('phonenumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!firstname) {
        alert("Please enter your Firstname.");
        return;
    }

    if (!middlename) {
        alert("Please enter your Middlename");
        return;
    }

    if (!lastname) {
        alert("Please enter your Lastname");
        return;
    }

    if (!dateofbirth) {
        alert("Please enter your Date of Birth");
        return;
    }

    if (isNaN(age) || age<18) {
        alert("You need to be 18 or older to register.");
        return;
    }

    if (!maleChecked  && !femaleChecked) {
        alert('Please select your gender');
        return;
    }

    if (!state) {
        alert("Please choose your State");
        return;
    }

    if (phonenumber.match(/^\d{10}$/)) {
        alert("Please enter a valid 10-digit Phone Number");
        return;
    }

    if (!email) {
        alert("Please enter your Email Address");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters or longer");
        return;
    }

    const  formData = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,

        dateofbirth: dateofbirth,
        age: age,

        gender: maleChecked? "male" : "female",
        state: state,

        phonenumber: phonenumber,
        email: email,
        password: password,
    };

    
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myform").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));   
    console.log(formData); 
});