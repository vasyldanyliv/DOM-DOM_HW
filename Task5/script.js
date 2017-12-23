//// stopPropagation ()
var onClick1 = function (e) {
    var $el1 = e.target;

    e.stopPropagation();

    $el1.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el1.style.backgroundColor = ' ';
};

document.body.onclick = onClick1;
box1.onclick = onClick1;
box2.onclick = onClick1;
box3.onclick = onClick1;



////////  preventDefault()
var onClick2 = function (e) {
    var $el2 = e.target;

    e.preventDefault();

    $el2.style.backgroundColor = 'yellow';
    alert('CLICK!');
    $el2.style.backgroundColor = ' ';
};

document.body.onclick = onClick2;
box11.onclick = onClick2;
box22.onclick = onClick2;
box33.onclick = onClick2;