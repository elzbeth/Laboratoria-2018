var showHide = function(e){
    var tabSelected = e.target.dataset.tabSelected;
    var tab01 = document.getElementById("tab1");
    var tab02 = document.getElementById("tab2");
    var tab03 = document.getElementById("tab3");
    if(tabSelected === 'tab01'){
        tab01.style.display="block";
        tab02.style.display="none";
        tab03.style.display="none";

    }else if(tabSelected === 'tab02'){
        tab01.style.display="none";
        tab02.style.display="block";
        tab03.style.display="none";

    }else if(tabSelected === 'tab03'){
        tab01.style.display="none";
        tab02.style.display="none";
        tab03.style.display="block";
    }

}

var loadingPage = function(){
    var tab01 = document.getElementById("tab1");
    var tab02 = document.getElementById("tab2");
    var tab03 = document.getElementById("tab3");
    tab01.style.display="none";
    tab02.style.display="none";
    tab03.style.display="none";

    var elementsTab = document.getElementsByClassName("tabBtn");
    for(var i=0; i < elementsTab.length; i++){
        elementsTab[i].addEventListener("click",showHide);
    }
}


loadingPage()
