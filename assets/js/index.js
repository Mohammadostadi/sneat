var showEye1 = document.getElementById('show-eye');
var hideEye = document.getElementById('hide-eye');
var index = 1

function showEye(){
    if(index % 2 == 1){
        showEye1.classList.remove('d-none')
        hideEye.classList.add('d-none')
    }else{
        showEye1.classList.add('d-none')
        hideEye.classList.remove('d-none')
    }

    index += 1
}

var popUps = document.getElementById('pop-ups');

function showPopUp(){
        popUps.classList.add("show")
}

function closePopUp(){
    popUps.classList.remove("show")
}