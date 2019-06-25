window.onload = function() {
    document.querySelector('.triangle').onclick = 
    function() {
        document.querySelector('.description').classList.toggle('hide');
        let desctiptionClasses = document.querySelector('.description').classList;
        let classArray = Array.from(desctiptionClasses);

        if(classArray.indexOf('hide') != 1) {
            document.querySelector('.triangle').style.backgroundImage = 'url("../img/button.png")';
        }
        else {
            document.querySelector('.triangle').style.backgroundImage  = 'url("../img/arrow_up.png")';
        }
    }
}