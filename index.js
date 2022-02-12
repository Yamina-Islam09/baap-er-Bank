document.getElementById('submit').addEventListener('click', function() {
    //set user email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    //set user password
    const passFeild = document.getElementById('user-password');
    const userPass = passFeild.value;
    //check user mail and password
    if (userEmail == 'yamina@gmail.com' && userPass == 'yamina') {
        window.location.href = "banking.html";

    } else {
        alert('invalid password or user mail');
    }

})