let currentPageId = "Home-Tab";
let currentElementId = "Home"
let nextPageElementId;
let nextPageId;

//imports


function PageSwitch(pageIndex) 
{ 
document.getElementById(currentPageId).style.display = "none";


document.getElementById(currentElementId).style.backgroundColor = "#110000";

switch (pageIndex) {
  case 0:
    nextPageId = "Home-Tab";
    nextPageElementId = "Home"
    break;
  case 1:
    nextPageId = "News-Tab"
    nextPageElementId = "News"
    break;
}

document.getElementById(nextPageId).style.display = "block";

document.getElementById(nextPageElementId).style.backgroundColor = "#ff4d4d";

currentPageId = nextPageId;
currentElementId = nextPageElementId;


}

