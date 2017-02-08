var customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3,
    },
    'Carrie': {
        visits: 4
    }
};

function greetCustomer(firstName) {
    var greeting = '';

    // your code here
    if (firstName === "") {
        return 'Welcome! Is this your first time?';
    }
    if (customerData.hasOwnProperty(firstName)) {
        greeting = outputResult(customerData[firstName].visits, firstName)
    } else {
        greeting = 'Welcome! Is this your first time?';
    }


    return greeting;
}

function outputResult(visits, customerName) {
    var output = '';
    if (visits == 1) {
        output = 'Welcome back, '+ customerName +'! We\'re glad you liked us the first time!';
    } else if (visits > 1) {
        output = 'Welcome back, ' + customerName+ '! So glad to see you again!'
    }

    return output

}