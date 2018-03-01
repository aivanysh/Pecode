function imchng(el){
    var imgelchk = el.getElementsByClassName("check")[0];
    var imgeluchk = el.getElementsByClassName("uncheck")[0];
    if(window.getComputedStyle(imgeluchk).display==="block"){
        imgeluchk.style.display="none";
        imgelchk.style.display="block";
        imgelchk.nextElementSibling.style.fontWeight = 'bold';
    } else {
        imgeluchk.style.display="block";
        imgelchk.style.display="none";
        imgelchk.nextElementSibling.style.fontWeight = 'normal';

    }
}


function chgimg(el,imgname){
    el.setAttribute('src', imgname)
}