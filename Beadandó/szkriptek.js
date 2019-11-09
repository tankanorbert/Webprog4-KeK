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

//legordulo lista

var cimkeajanlo = ["Research in Motion", "Fideszes viszály Miskolcon, Baráti tűz", "TÁVOZIK AZ AMERIKAI BLOGKIRÁLYNŐ Arianna Huffington vált", "Hogy hat a biblioterápia?, Ráolvasók", "A vírusok üzenete", "Veszik vagy viszik?", "Kisgazda-Surányi kiegyezés", "Globális genderszakadék-rangsor, 2009", "A HERZOG-GYŰJTEMÉNY ARANYKORA, Házimúzeum", "Elektromos autók végtelen hatótávval", "Átrendeződés a telekommunikációs piacon, Kábel, a rengeteg", "Vészfizető kezesek", "a kolumbiai kokaintermelés", "Schuster vétója", "Áradások Ázsiában ", "Mugabe osztogat", "KEHI-JELENTÉS A HUNGEXPO RT.-RŐL Megmaradt a félpénzük", "CD + 100 The Very Best of Benjamin Britten", "EUROSTAT, Magyar jövedelemkülönbségek", "Közérzet-paradoxon: nehezebb életkörülmények közt boldogabban?", "Schuster vétója"];

var szovegek  = ["24 dollár alá – két és fél éves mélypontjára – is benézett a Research in Motion (RIM) árfolyama a múlt héten. Borzolta a befektetők idegeit, hogy a BlackBerry okostelefon gyártójának második negyedévi bevétele 15 százalékkal elmaradt az előző negyedévitől. Még drasztikusabban – 1,46-ról 0,63 dollárra – esett vissza a cég egy részvényre jutó eredménye. Pozitívum ugyanakkor, hogy a társaság szabadalmakba fektetett pénzösszegének mértéke 22 százalékkal nőtt, miközben felvásárolta a Nortel 778 millió dollárra értékelt szellemi vagyonát, amivel tovább erősítheti alkalmazásainak fejlesztését. Bár az Equilor Befektetési Zrt. szerint a RIM az androidos készülékekkel és az iPhone okostelefonjaival a közeljövőben sem tud lépést tartani, a szabadalmakba és fejlesztésekbe fektetett összegek arra késztethetik versenytársait, hogy a jelenlegi alulértékelt szinten felvásárlási ajánlatot tegyenek a RIM-részvényekre. Ez pedig a kisbefektetőknek is vonzó sztorit jelenthet.", "Fideszes viszály Miskolcon Baráti tűz Jobboldali belharc következményének tűnik, hogy uniós szabálytalansági eljárás indult Miskolc villamospálya-felújítása kapcsán. Elmaradt Petykó Zoltánnak, a Nemzeti Fejlesztési Ügynökség vezetőjének múlt csütörtöki miskolci látogatása – az uniós forrásokból kiemelten támogatott Zöld Nyíl villamospálya-felújítás munkálatait járta volna be. Helyette levél érkezett az ügynökségtől a városházára, benne a figyelmeztetéssel: ha Miskolc vezetése változtatni kíván a terveken, akkor más forrásokat kell keresnie.", "TÁVOZIK AZ AMERIKAI BLOGKIRÁLYNŐ Arianna Huffington vált Lemond a nevét viselő The Huffington Post médiaportál főszerkesztői posztjáról, és a cégtől is távozik a 66 éves Arianna Huffington. Várhatóan novembertől Thrive Global néven új vállalkozást indít, amely egészségügyi és wellnesskérdésekkel foglalkozik. Az erős görög akcentusát máig megőrző, Athénban, Arianna Sztasszinopulosz néven született nő Londonban kóstolt bele az újságírásba.","Hogy hat a biblioterápia? Ráolvasók Sok száz éve ismerik, más művészetterápiákhoz képest mégis kevéssé elterjedt az olvasásterápia. A betegek fele már négy hónap után jobban érezte magát, mint hagyományos antidepresszánssal kezelt sorstársai, egy év múlva pedig mindannyian sokkal könnyebben viselték a depresszióval kapcsolatos problémáikat. Ez a summázata a Glasgow-i Egyetem munkatársai által végzett, két éve publikált vizsgálatnak, melynek során a kétszáz résztvevő felét biblioterápiával – ez esetben nem egy szépirodalmi művel, hanem a kutatást vezető professzor, Christopher Williams depresszióval foglalkozó könyvével – kúrálták. Bár efféle adatszerű bizonyítékokból máig kevés áll rendelkezésre, „a rendszeres olvasás az élet bármely területén képes lehet gyógyítani, megszabadítani a fájdalmaktól, a mindennapok béklyóitól, ajtót nyitni egy másik világ felé” – foglalja össze tapasztalatait a HVG-nek Andrea Gerk német írónő, biblioterapeuta."];

var ec = ["elektronikai ipar \nértékpapírpiac \nmobiltelefon \nrészvény","önkormányzat \nbelpolitika \npártpolitika \npolitika","internet \nfúzió \nbefektetés \nsajtó","bűnözés \nterrorizmus \ninformatika \njárvány"];
var ece = ["geography_kanada \norgaization_research in motion","geography__irán \niszlám \nperson__mohamed \ngeography__arab","geography__izrael \norganization__hamász \ngeography__palesztina \ntársadalom","geography__irán \niszlám \nperson__mohamed \ngeography__arab"];
var ac = ["mobiltelefon", "óraipar" , "kereskedelem", "kiállítás"];
var ace = ["geography_kanada", "organization__nato" ," geography__dél-korea", "geography__afganisztán"];


var select = document.getElementById("selectem");
var select2 = document.getElementById("ketto");

for(var i = 0; i < cimkeajanlo.length; i++) {
    var el = document.createElement("option");
    el.textContent = cimkeajanlo[i];
    el.value = cimkeajanlo[i];
    
    select.appendChild(el);
}

var languageDropdown = document.getElementById("selectem");

var lastSelected = languageDropdown.options[languageDropdown.selectedIndex].value;

console.log(lastSelected);

languageDropdown.onchange = function(){  
    var textBox = document.getElementById("ketto");
    var box = document.getElementById("egy");
    var box1 = document.getElementById("negy");
    var box2 = document.getElementById("ot");
    var box3 = document.getElementById("hat");
    
    currentText = textBox.value;

    var selected = this.options[this.selectedIndex].value;
    
    var index;
    for (var i = 0; i < cimkeajanlo.length; i++){
        if(selected == cimkeajanlo[i]){
            index = i;
        }
    }
    
    console.log(index);
       
   	//load the current text into the last selected value
    sessionStorage.setItem(lastSelected, currentText);
       
    
    //load the new text in to the text box
    textBox.value = szovegek[index];
    //box.value = szovegek[index];
    //box1.value = szovegek[index];
    //box2.value = szovegek[index];
    //box3.value = szovegek[index];
    
    box.value = ac[index];
    box1.value = ec[index];
    box2.value = ece[index];
    box3.value = ace[index];
    
    
    lastSelected = selected;
};