function execute() {
    var applyLanguage = function (lang) {
        alert('Now language is: ' + lang);
    };

    // set cookies ---------------------
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //---------------------------------------------------------
    var loadCurrentLanguage = function () {
        var defaultLanguage = 'ua';
        if (document.querySelector('input[type="radio"]:checked') === null) {
            defaultLanguage;
        }
        else {
            var defaultLanguage = document.querySelector('input[type="radio"]:checked').getAttribute('data-language');
        }
        return defaultLanguage;
    };

    // check a radio button
    function saveChecking() {
        var saveLang = "[data-language='" + currentLang + "']";
        document.querySelector(saveLang).checked = true;
        currentLang.$save = true;
    }

  // get language from cookies
    var currentLang = getCookie("language") || loadCurrentLanguage();
    if (currentLang.$save) {
        saveChecking();
    }
    updateTexts();

    // change texts of greeting
    var change = document.getElementById('languages');
    change.addEventListener('change', function () {
        currentLang = loadCurrentLanguage();
        updateTexts();
        saveChecking();
    });

    // remove visible with class 'lang'
    function updateTexts() {
        var langEls = document.getElementsByClassName('lang');
        for (var i = 0; i < langEls.length; i++) {
            var textLine = langEls[i];
            textLine.classList.remove('visible');
        }
        // make text visible in span 'lang- currentLang'
        var langEls = document.getElementsByClassName('lang-' + currentLang);
        for (var i = 0; i < langEls.length; i++) {
            var textLine = langEls[i];
            textLine.classList.add('visible');
        }
    }
    // save current language in cookies
    var $save = document.getElementById('save');
    $save.addEventListener('click', function () {
        setCookie("language", currentLang, 30);
        applyLanguage(currentLang);
    });
}
