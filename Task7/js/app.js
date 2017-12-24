
    var sum = 0;
    var salaries = [];
    var addUser = (function () {
    var module = {};
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'employeeList');
    document.body.appendChild(ul);

    var li = document.createElement('li');
    ul.appendChild(li);

    var firstName = document.createElement('input');
    firstName.setAttribute('class', 'name');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('placeholder', 'Enter your first name');

    var firstNameSpan = document.createElement('span');
    firstNameSpan.setAttribute('class', 'employeeFirstName');
    firstNameSpan.appendChild(firstName);
    li.appendChild(firstNameSpan);

    var lastName = document.createElement('input');
    lastName.setAttribute('class', 'surname');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('placeholder', 'Enter your last name');

    var lastNameSpan = document.createElement('span');
    lastNameSpan.setAttribute('class', 'employeeLastName');
    lastNameSpan.appendChild(lastName);
    li.appendChild(lastNameSpan);

    var salary = document.createElement('input');
    salary.setAttribute('class', 'salary');
    salary.setAttribute('type', 'text');
    salary.setAttribute('id','salary');
    salary.setAttribute('placeholder', 'Enter your salary per month');

    var salarySpan = document.createElement('span');
    salarySpan.setAttribute('class', 'employeeSalary');
    salarySpan.appendChild(salary);
    li.appendChild(salarySpan);

    var possition = document.createElement('input');
    possition.setAttribute('name', 'possition');
    possition.setAttribute('type', 'text');
    possition.setAttribute('placeholder', 'Enter your possition');

    var possitionSpan = document.createElement('span');
    possitionSpan.setAttribute('class', 'employeePosition');
    possitionSpan.appendChild(possition);
    li.appendChild(possitionSpan);

    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'addEmployee');
    button.setAttribute('value', 'Add employee');
    button.setAttribute('id', 'add');
    document.body.appendChild(button);

    var numbersOfEmployees = document.createElement('input');
    numbersOfEmployees.setAttribute('name', 'NumbersOfEmployees');
    numbersOfEmployees.setAttribute('type', 'text');
    numbersOfEmployees.setAttribute('placeholder', 'Enter the limit of employees');
    numbersOfEmployees.setAttribute('id', 'empCount');
    document.body.appendChild(numbersOfEmployees);

    var update = document.createElement('input');
    update.setAttribute('type', 'button');
    update.setAttribute('value', 'Update limit of employees');
    update.setAttribute('id', 'update');
    document.body.appendChild(update);

    module.init = function () {
        button
            .addEventListener('click', addNewEmployee);
    };

    function addNewEmployee(click) {

        // valid the firstName
        if (!firstName.value.match(/^[a-zA-Z]+$/) || firstName === ' ') {
            alert("Please provide your correct firstName ");
            click.preventDefault();
            firstName.focus();
            return false;
        }

        // valid the lastName
        if (!lastName.value.match(/^[a-zA-Z]+$/) || lastName ===' ') {
            alert("Please provide your correct lastName ");
            click.preventDefault();
            lastName.focus();
            return false;
        }

        // validation the salary per month:
        if (!salary.value.match(/^[0-9]+$/) || salary.value > Infinity || salary.value < 0) {
            alert("Please provide your correct salary/month. That must only contain the  numbers!");
            click.preventDefault();
            salary.focus() ;
            return false;
        }

        // validation the possition:
        if (!possition.value.match(/^[a-zA-Z]+$/)) {
            alert("Please provide your correct possition ");
            // click.preventDefault();
            possition.focus();
            return false;
        }

        // avarage salary
        function avarsalary() {
            function getAvarageSalary(currentResult, currentValue) {
                return currentResult + currentValue;
            }
            salaries.push(parseInt(salary.value));
            var totalSalary = salaries.reduce(getAvarageSalary);
            var avarSalary = totalSalary / (salaries.length);
            alert('Avarage salary is ' + avarSalary.toFixed(2) + ' $');

            //  check avarage salary >2000$
            if (avarSalary >=2000){
                button.disabled = true;
                firstName.disabled = true;
                alert('Limit avarage salary');
            }
        }
        avarsalary();

        // list of users
        var entry = document.createElement('li');
        entry.setAttribute('class', "unitLi");
        document.body.appendChild(entry);
        entry.appendChild(document.createTextNode(firstName.value + ' ' + lastName.value + ' ' + salary.value
            + '$' + ' ' + possition.value));

        // clear fields after added;
        firstName.value = null;
        lastName.value = null;
        salary.value = null;
        possition.value = null;

        // limit of numbers if employees
        function count() {
            alert('The numbers of employees : '+ $('li.unitLi').length  );
            if(numbersOfEmployees.value) {
                if ($('li.unitLi').length >= numbersOfEmployees.value )  {
                    alert('Don`t allow greater than ' + numbersOfEmployees.value + ' employees. You can increase the staff limit above');
                    button.disabled = true;
                    firstName.disabled = true;
                }
            }
            else if ($('li.unitLi').length >= 10){
                button.disabled = true;
                firstName.disabled = true;
                alert('Don`t allow greater than 10  employees. You can increase the staff limit above');
            }
        }
        count();

        // reset te limit of empoyees :
        update.addEventListener('click', function () {
            if ($('li.unitLi').length < numbersOfEmployees.value ){
                button.disabled = false;
                firstName.disabled = false;
            }
        });

        //  prevent duplicates of name
        {    $(function(){
            $('input[class="name"]').keyup(function(){
                var searchText = $(this).val();
                  $('li').each(function(){
                     var currentLiText = $(this).text();
                       showCurrentLi = currentLiText.indexOf(searchText) === -1 ? button.disabled = false :
                           button.disabled = true;
                });
            });

        });
        }
        //  prevent duplicates of Surname
        {
            $(function(){
                $('input[class="surname"]').keyup(function(){
                    var searchText = $(this).val();
                    $('li').each(function(){
                        var currentLiText = $(this).text();
                            showCurrentLi = currentLiText.indexOf(searchText) === -1 ? button.disabled = false :
                                button.disabled = true;
                    });
                });
            });
        }
    }
    return module;
    })();
addUser.init();













