function displayA() {
    var x= document.getElementById("hideA");
    var y = document.getElementById("clickA");
    if (x.style.display === "none") {
        x.style.display ="block";
        y.innerHTML="-Advanced";
    } else {
        x.style.display ="none";
        y.innerHTML="+Advanced";
    }
}


function displayP() {
    var x= document.getElementById("hideP");
    var y = document.getElementById("clickP");
    if (x.style.display === "none") {
        x.style.display ="block";
        y.innerHTML="-Proficient";
    } else {
        x.style.display ="none";
        y.innerHTML="+Proficient";
    }
}

function displayF() {
    var x= document.getElementById("hideF");
    var y = document.getElementById("clickF");
    if (x.style.display === "none") {
        x.style.display ="block";
        y.innerHTML="-Familiar";
    } else {
        x.style.display ="none";
        y.innerHTML="+Familiar";
    }
}

function displayL() {
    var x= document.getElementById("hideL");
    var y = document.getElementById("clickL");
    if (x.style.display === "none") {
        x.style.display ="block";
        y.innerHTML="-Learning";
    } else {
        x.style.display ="none";
        y.innerHTML="+Learning";
    }
}