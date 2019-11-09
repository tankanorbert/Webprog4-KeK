// Menü rendszer működése
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//value scripts

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


//buttons
var select = document.getElementById("selectem");
var options = select.getElementsByTagName("option");
function first() {
    select.selectedIndex = 0;
}

function next() {
    if (select.selectedIndex == options.length-1)
        first();
    else
        select.selectedIndex = select.selectedIndex+1;
}

function previous() {
    if (select.selectedIndex == 0)
        last();
    else
        select.selectedIndex = select.selectedIndex-1;
}

function last() {
    select.selectedIndex = options.length-1;
}
