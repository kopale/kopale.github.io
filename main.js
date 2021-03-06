//output text
const runOutput = '<div id="outputtxt"><span class="outtitle">OUTPUT</span><br><br>Hello World! I am Tuomas Korpi from Kuopio, Finland.<br>'  
+'This website showcases my abilities as web/software developer '
+'and IoT engineer.<br>Open menu (<span ><svg id="smallfileBottom" xmlns="http://www.w3.org/2000/svg" width="23.697" height="29.483" viewBox="0 0 23.697 29.483">'
+'<g  transform="translate(11.378 -50.017)">'
+'  <path id="filePath_7" data-name="Path 3" d="M13.716,2H6.159A2.165,2.165,0,0,0,4,4.172V21.544a2.165,2.165,0,0,0,2.159,2.172H19.114a2.165,2.165,0,0,0,2.159-2.172V9.6Z" transform="translate(-13.878 54.283)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
+'  <rect id="filePath_8" data-name="Rectangle 1" width="16" height="22" transform="translate(-5.181 50.017)" fill="#1e1e1e"/>'
+'  <path id="filePath_5" data-name="Path 1" d="M12.809,2H5.958A2.034,2.034,0,0,0,4,4.1V20.924a2.034,2.034,0,0,0,1.958,2.1H17.7a2.034,2.034,0,0,0,1.958-2.1V9.359Z" transform="translate(-8.842 49.973)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
+'  <path id="filePath_6" data-name="Path 2" d="M13,2V9.824h6.906" transform="translate(-10.889 50.117)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
+'</g>'
+'</svg>'
+'</span> ) on the left or click tab on<br>' 
+'the top to see my projects.</div>';

//___________DOM SELECTORS_____________________________
/////////////////////////////////////////////////////////
const menuopen = document.getElementById("menuopen");
const menubar = document.getElementById("menubar");
const footer = document.getElementById("footer");
const header = document.getElementById("header");
const fileico = document.getElementById("fileico");
const linkico = document.getElementById("linkico");
const aside = document.getElementById("aside");
const output = document.getElementById("output");
const tab1 = document.getElementById("tab1"); 
const tab2 = document.getElementById("tab2"); 
const tabback = document.getElementById("tabback");
const me = document.getElementById("me");
const outputbox = document.getElementById("outputbox");
const runbtn = document.getElementById("runico");
const rownum = document.getElementById("rownum");
const asideProject = document.getElementById("asideProject");
const main = document.getElementById("mainId");
const modal = document.getElementById("myModal");
const listItem = document.getElementById("listItem");
const emailico = document.getElementById("emailico");
const code = document.getElementById("code");

const footerIcos = document.querySelectorAll("footerIcos");
const minimize = document.querySelectorAll('.minimize');
const mobile = document.querySelectorAll('.mobile');
const githubIco = document.querySelectorAll('.githubIco');
const youtubeIco = document.querySelectorAll('.youtubeIco');
const projectPage = document.querySelectorAll('.projectPage');
const body = document.body;
//////////////////////////////////////////////////////////////////////
//____________VARIABLES______________________________________________
/////////////////////////////////////////////////////////////////////
//what tab are we on?
let tab = "tab1";
//what project box is selected?
let selectedBox = "none";
//is category selected?
let category ="none";
let prevItem = "none";
//////////////////////////////////////////////////////////////////////
//_________________ON LOAD___________________________________________
/////////////////////////////////////////////////////////////////////
//hide projectpage
asideProject.style.display = "none";
//make row numbers
getNumRow();


function growFooterIcos(){
    let screenW = window.innerWidth;
    document.querySelectorAll('.footerIco').forEach(item => {
        

        if (screenW < 600) {
            item.style.width = "50px";
            item.style.height = "50px";
            footer.style.flexDirection = "column";
            item.style.marginTop = "5vh";

        }
        else{
            item.style.width = "60px";
            item.style.height = "60px";
            footer.style.flexDirection = "row";
            item.style.marginRight = "10vw";
        }
        
        
    })

}
function smallFooterIcos(){
    document.querySelectorAll('.footerIco').forEach(item => {
        item.style.width = "20px";
        item.style.height = "17px";
        item.style.marginRight = "0px";
        item.style.marginTop = "0px";
        
    })
}

   
//FILE ICON CLICK OPEN MENU
let menucount = 1;
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){    
        //OPEN
        
        if (menucount % 2 != 0  ) {
            menuMode = "open";
            menuopen.style.display = 'flex';
            menuopen.style.marginRight = "-37px" 
            //border
            fileico.style.borderLeft = 'solid 4px #D4D4D4';

        }
        
        //CLOSE
        else if (menucount % 2 == 0 ) {
            menuMode = "close";
            menuopen.style.display = 'none';
            //border
            fileico.style.borderLeft = 'solid 4px #333333';

        }

    menucount ++;   
    
}}
//RUN ICON CLICK CHANGE TXT
runico.addEventListener("click", runcode());
function runcode(){
    return function(){        
            outputbox.innerHTML = runOutput;
            //button to gray
            runbtn.style.backgroundImage = "url('icons/runbtngrey.svg')";
     
}}
//emailico click
emailico.addEventListener("click", contact());
function contact(){
    return function(){        
                 
        //tab1
        mainPage();

          getNumRow();
          code.style.marginTop ="-300px";
          code.style.height ="700px";
          code.style.overflow ="visible";

     
}}
function mainPage(){
    tab = "tab1";
        tab2.style.backgroundColor ="#2D2D2D";
        tab1.style.backgroundColor ="#1E1E1E";
        aside.style.display = "block";
        asideProject.style.display = "none";
        //return boxes
        returnBoxes(); 
        unselectList();
}
//Link ico click
linkcount = 1;
linkico.addEventListener("click", clickLinks());
function clickLinks(){
    return function(){    
        //OPEN
        
        if (linkcount % 2 != 0  ) {  
            footer.style.height = "216px";
            linkico.style.borderLeft = 'solid 4px #D4D4D4';
            // output.style.display = "none";
            footer.scrollIntoView(); 
            growFooterIcos();
            // footer.style.top = "-200px";
        }
        
        //CLOSE
        else if (linkcount % 2 == 0 ) {

            footer.style.height = "21px";
            linkico.style.borderLeft = 'solid 4px #333333';
            // output.style.display = "block";
            tab1.scrollIntoView();
            smallFooterIcos();
            footer.style.flexDirection = "row";
           
        }
    linkcount ++;
       
    
}}

//tab click
tab2.addEventListener("click", clickTab2());
function clickTab2(){
    return function(){
        
        projectTab();
        displayAllProjects();
}}
tab1.addEventListener("click", clickTab1());
function clickTab1(){
    return function(){
        // output.style.zIndex = "1";  
        mainPage();
        code.style.height = "400px";
        code.style.marginTop ="0";
        code.style.overflow = "hidden";
         
}}

//event listner for project box click. show only selected box and make it big.
document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', event => {
        let clickId = item.id;
        selectedBox = item;
        document.querySelectorAll('.project').forEach(item => {
            if (item.id != clickId) {
                item.style.display ="none"; 
            }
        })
        growBox();
    })
})
//event listener for list projects click
document.querySelectorAll('.list').forEach(item => {
    item.addEventListener('click', event => {
        projectTab();
        
        if(prevItem != "none"){
           prevItem.style.backgroundColor = "#262525"; 
        }
        
        
        
        //swich case to pair list and box IDs
        let boxId = "";
        switch(item.id) {
            case "lip1":
                boxId = "p1";

              break;
            case "lip2":
                boxId = "p2";

              break;
            case "lip3":
                boxId = "p3";

            break;
            case "lip4":
                boxId = "p4";

            break;
            case "lip5":
                boxId = "p5";

              break;
            case "lip6":
                boxId = "p6";

              break;
            case "lip7":
                boxId = "p7";

            break;
            case "lip8":
                boxId = "p8";

            break;
            default:
            break;
        }
        //get boxes
        document.querySelectorAll('.project').forEach(item => {
            if (item.id != boxId) {
                item.style.display ="none"; 
                //make previous selected box small
            }
            else{     
                item.style.display ="block";    
                returnBox()    
            }
        })
        //get this box
        selectedBox = document.getElementById(boxId);
        growBox();
        document.getElementById(item.id).style.backgroundColor = "#0362fc";
        prevItem = item
        document.querySelectorAll('.menuCategory').forEach(item => {
            item.style.backgroundColor = "#262525";
        })
   
    })
})

//close btn
document.querySelectorAll('.minimize').forEach(item => {   
    item.addEventListener('click', event => {
        displayAllProjects();
        unselectList();
    })
})
//Category click listener
document.querySelectorAll('.menuCategory').forEach(item => {
    item.addEventListener('click', event => {
        projectTab();
        returnBox();
        if(category != "none"){
            document.getElementById(category).style.backgroundColor = "#262525";
        }
        
        if(item.id == "categoryWeb"){
            checkProjectClass(item.id);
        }
        if(item.id == "categoryMobile"){
            checkProjectClass(item.id);
        }
        if(item.id == "categoryCustomer"){
            checkProjectClass(item.id);
        }
        if(item.id == "categoryMachine"){
            checkProjectClass(item.id);
        }
        if(item.id == "categoryIot"){
            checkProjectClass(item.id);
        }
        if(item.id == "categoryAll"){
            displayAllProjects();
        }
        category = item.id;
        document.getElementById(category).style.backgroundColor = "#0362fc";
        document.querySelectorAll('.list').forEach(item => {
            item.style.backgroundColor = "#262525";
        })
    })
})

        



//__________________FUNCTIONS________________________
/////////////////////////////////////////////
function displayAllProjects(){
    returnBoxes();
    event.stopPropagation();
    selectedBox ="none";
    category = "none";

}
//return project boxes all to original size
function returnBoxes(){
    document.querySelectorAll('.project').forEach(item => {  
        item.style.display ="block";
        returnBox()
    })
}
function returnBox(){
    if (selectedBox != "none") {
        //this from returnBox function
        selectedBox.style.animation = "smallBox 0s forwards";
        //images are named same as project pox id
        selectedBox.style.backgroundImage = `url('svg/${selectedBox.id}.svg')`;
        //hide close btn 
        selectedBox.children[0].style.display = "none";
        selectedBox.children[1].style.display = "none";
    }
}
//got to tab2
function projectTab(){
    //move to project tab
    tab = "tab2";
    tab2.style.backgroundColor ="#1E1E1E";
    tab1.style.backgroundColor ="#2D2D2D";
    aside.style.display = "none";
    asideProject.style.display = "block";
}
function growBox(){
    selectedBox.style.animation = "growBox .25s forwards";
    selectedBox.style.backgroundImage = "none";
    //close btn visible
    selectedBox.children[0].style.display = "block";
    selectedBox.children[1].style.display = "block";
}
//print row numbers
function getNumRow(){
    let count = 0;
    let num = "";
    if(window.innerWidth < 601){
        count = 53;
    }
  
    else{
        count = 35
    }
    
    for (let index = 1; index <count; index++) {
        num = num + index +"<br>";
    }
    console.log("rownum_________________________")

    rownum.innerHTML = num;
}
function checkProjectClass(category){
    document.querySelectorAll('.project').forEach(item => {
        if (item.classList.contains(category)){
            item.style.display ="block";   
        }
        else{
            item.style.display ="none"; 
        }
    })
}
function unselectList(){
    document.querySelectorAll('.menuCategory').forEach(item => {
        item.style.backgroundColor = "#262525";
    })
    document.querySelectorAll('.list').forEach(item => {
    
        item.style.backgroundColor = "#262525";
    })
}

///////////////////////////////////////////////////////////////////////


