document.getElementById('btn-sumbit').addEventListener('click', function(){
    const userEmail = document.getElementById('login-email')
    const email = userEmail.value;
    const userPassword = document.getElementById('login-password')
    const password = userPassword.value;
    if (email === 'ami@gorib.com' && password === 'takanai'){
        window.location.href = 'bank.html'
    }
    else {
        alert('Wrong user information')
    }
})