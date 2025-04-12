<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit</title>
    <link rel="stylesheet" href="final.css">
</head>
<body>
    <main>
        <h1>Thank you for your submision!!</h1>
        <p>First Name<?php print $_POST ['first-name']?></p>
        <p>Middle Name<?php print $_POST ['middle-name']?></p>
        <p>Last Name<?php print $_POST ['last-name']?></p>
        <p>Date of birth<?php print $_POST ['date-of-birth']?></p>
        <p>Marital Status<?php print $_POST ['maritalstatus']?></p>
        <p>Email<?php print $_POST ['email']?></p>
        <p>Password<?php print $_POST ['password']?></p>

        <p>Phone Number<?php print $_POST ['phonenumber']?></p>
        <p>Remember Password<?php print $_POST ['rememberpassword']?></p>
        <p>Comments<?php print $_POST ['comments']?></p>
        <p>I agree to the terms<?php print $_POST ['agree']?></p>
    </main>
</body>
</html>