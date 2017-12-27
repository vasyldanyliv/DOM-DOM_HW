
  var addUser = (function () {
    var module = {};
    var form = document.createElement('form');
    form.action = 'google.com';
    form.name = 'login';
    document.body.appendChild(form);

    var Age = document.createElement('input');
    Age.setAttribute('name', 'age');
    Age.setAttribute('type', 'text');
    Age.setAttribute('placeholder', 'Your age');
    form.appendChild(Age);

    var UserName = document.createElement('input');
    UserName.setAttribute('name', 'username');
    UserName.setAttribute('type', 'text');
    UserName.setAttribute('placeholder', 'Your name');
    form.appendChild(UserName);

    var Date_t = document.createElement('input');
    Date_t.setAttribute('name', 'date');
    Date_t.setAttribute('type', 'text');
    Date_t.setAttribute('placeholder', 'Today date');
    form.appendChild(Date_t);

    var Submit = document.createElement('input');
    Submit.setAttribute('type', 'submit');
    Submit.setAttribute('value', 'Validate Me');
    form.appendChild(Submit);

    module.init = function () {
        Submit
            .addEventListener('click', Validate);
    };

    // Form validation :
    function Validate(click) {

        // validation an age:
        if (!Age.value.match(/^[0-9]+$/) || Age.value > Infinity || Age.value < 0) {
            alert("Please provide your age. That must only contain the  numbers!");
            click.preventDefault();
            Age.focus();
            return false;
        }

        // validation a name:
        if (!UserName.value.match(/^user_/)) {
            alert("Please provide your user_name according to the template: should start from user_ ");
            click.preventDefault();
            UserName.focus();
            return false;
        }

        function effect1() {
            var image = document.body.style.backgroundImage = "url('./images/Congrat.gif')";
        }

        function effect2() {
            var image = document.body.style.backgroundImage = "url('./images/backg.jpeg')";
        }

        // checking and validation a date:
        {
            var todaysDate = new Date();
            var todayday = todaysDate.getDate();
            var todaymonth = todaysDate.getMonth() + 1;
            var todayyear = todaysDate.getFullYear();
            if (todayday < 10) {
                todayday = "0" + todayday;
            }
            if (todaymonth < 10) {
                todaymonth = "0" + todaymonth;
            }
            var fullDate = todayday + "/" + todaymonth + "/" + todayyear;
            if (Date_t.value !== fullDate) {
                alert("Your date is invalid!!! Please provide todays date according to the format dd/mm/yyyy");
                click.preventDefault();
                Date_t.focus();
                return false;
            }
        }

        // effect after confirmation
        function effect() {
            var timerId = setInterval(function() {
                effect1()
            }, 0);

            setTimeout(function() {
                clearInterval(timerId);
                effect2()
            }, 3000);
        }
        effect();

        // clear fields after confirmation
        Date_t.value = null;
        UserName.value = null;
        Age.value = null;

        click.preventDefault();
    }
    return module;

  })();
  addUser.init();
