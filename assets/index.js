var email = prompt('Enter your email address:')

var password = prompt('Enter your password:')

var main = []

main.push(email, password)

console.log(main);


var res_email = prompt('Please enter your email for login')

var res_password = prompt('Please enter your password for login')

var main_res = []

main_res.push(res_email, res_password)

console.log(main_res);

if (main[0] === main_res[0] && main[1] === main_res[1]) {
    console.log('You have successfully entered the system');
} else {
    alert('Please check your information');
}





