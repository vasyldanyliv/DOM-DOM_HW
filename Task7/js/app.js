

var addUser = (function () {
    var m = {};


    var ul = document.createElement('ul');
    ul.setAttribute('class', 'employeeList');
    document.body.appendChild(ul);

    var li = document.createElement('li');
    ul.appendChild(li);


    var firstName = document.createElement('input');
    firstName.setAttribute('name', 'FirsName');
    firstName.setAttribute('class', 'person1');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('placeholder', 'Your firstName');

    var firstNameSpan = document.createElement('span');
    firstNameSpan.setAttribute('class', 'employeeFirstName');
    firstNameSpan.appendChild(firstName);
    li.appendChild(firstNameSpan);


    var lastName = document.createElement('input');
    lastName.setAttribute('name', 'LastName');
    lastName.setAttribute('class', 'person2');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('placeholder', 'Your lastName');


    var lastNameSpan = document.createElement('span');
    lastNameSpan.setAttribute('class', 'employeeLastName');
    lastNameSpan.appendChild(lastName);
    li.appendChild(lastNameSpan);


    var salary = document.createElement('input');
    salary.setAttribute('name', 'Salary');
    salary.setAttribute('class', 'Salary1');
    salary.setAttribute('type', 'text');
    salary.setAttribute('placeholder', 'Your salary per month');


    var salarySpan = document.createElement('span');
    salarySpan.setAttribute('class', 'employeeSalary');
    salarySpan.appendChild(salary);
    li.appendChild(salarySpan);


    var possition = document.createElement('input');
    possition.setAttribute('name', 'Possition');
    possition.setAttribute('type', 'text');
    possition.setAttribute('placeholder', 'Your possition');


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
    numbersOfEmployees.setAttribute('placeholder', 'limit the employees');
    numbersOfEmployees.setAttribute('id', 'empCount');
    document.body.appendChild(numbersOfEmployees);



    var update = document.createElement('input');
    update.setAttribute('type', 'button');
    update.setAttribute('class', 'Update');
    update.setAttribute('value', 'Update limit of employees');
    update.setAttribute('id', 'Update1');
    document.body.appendChild(update);


    m.init = function () {
        button
            .addEventListener('click', addNewEmployee);

    };

    function addNewEmployee(click) {




        // valid the firstName
        if (!firstName.value.match(/^[a-zA-Z ]+$/)) {
            alert("Please provide your correct firstName ");
            click.preventDefault();
            firstName.focus();
            return false;

        }


        // valid the lasttName
        if (!lastName.value.match(/^[a-zA-Z ]+$/)) {
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

        if (!possition.value.match(/^[a-zA-Z ]+$/)) {
            alert("Please provide your correct possition ");
            // click.preventDefault();
            possition.focus();
            return false;

        }



        // var list = document.createElement('ul');
        // list.setAttribute('class', 'Added users');
        // added user to the list

        var entry = document.createElement('li');
        entry.setAttribute('class', "unitLi");
        document.body.appendChild(entry);
         // list.appendChild(entry);

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
                    alert('Dont allow greater than ' + numbersOfEmployees.value + ' employees. You can increase the staff limit above');
                    button.disabled = true;
                }

            }

            else if ($('li.unitLi').length >= 10){
                button.disabled = true;
                alert('Dont allow greater than 10  employees. You can increase the staff limit above');
            }


        }
        count();




        //  prevent duplicates of name
        {    $(function(){

            $('input[class="person1"]').keyup(function(){

                var searchText = $(this).val();
                $('li').each(function(){

                    var currentLiText = $(this).text();
                       if( showCurrentLi = currentLiText.indexOf(searchText) === -1){
                           button.disabled = false;
                       }

                       else {
                           button.disabled = true;

                       }
                        // showCurrentLi = currentLiText ;

                    // $(this).toggle(showCurrentLi);

                });
            });

        });
        }


        //  prevent duplicates of Surname
        {    $(function(){

            $('input[class="person2"]').keyup(function(){

                var searchText = $(this).val();
                $('li').each(function(){

                    var currentLiText = $(this).text();
                    if( showCurrentLi = currentLiText.indexOf(searchText) === -1){
                        button.disabled = false;
                    }

                    else {
                        button.disabled = true;

                    }
                    // showCurrentLi = currentLiText ;

                    // $(this).toggle(showCurrentLi);

                });
            });

        });
        }



                    // // avarage salary
                    // function  sum(){
                    //     $(document).ready(function(){
                    //         var test_qty = 0;
                    //         $(".Salary1").each(function(){
                    //             test_qty += parseInt($(this).val());
                    //             console.log(test_qty);
                    //         });
                    //     });
                    // }
                    // sum();



        // reset te limit of empoyees :
        update.addEventListener('click', function () {
            if ($('li.unitLi').length <= numbersOfEmployees.value ){
                button.disabled = false;
            }

        });

    }


return m;

}());
addUser.init();













