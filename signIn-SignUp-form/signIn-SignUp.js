
// tab function
function openPage(pageName,elmt,color){
  let i, tabcontents, tablinks;

  tabcontents = document.querySelectorAll('.tabcontent');
  for(i=0; i< tabcontents.length; i++){
    tabcontents[i].style.display = "none";
  }

  tablinks = document.querySelectorAll('.tablink');
  for(i=0;i< tablinks.length; i++){
    tablinks[i].style.backgroundColor = "";
  }
  elmt.style.backgroundColor = color;
  document.getElementById(pageName).style.backgroundColor = color;
  document.getElementById(pageName).style.display = "block";
}

document.getElementById('defaultOpen').click();


// forms
