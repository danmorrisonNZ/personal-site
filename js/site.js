window.onload = function(){
  var contactForm =  document.getElementById('contactform');
  var headerIcon =  document.getElementById('header-icon');
  var cvSectionButtons = document.getElementsByClassName("cv-button");
  var thanks =  document.getElementById('thanks');
  var url = window.location.href
  var i;


  for (i = 0; i < cvSectionButtons.length; i++) {
    cvSectionButtons[i].onclick = function() {
      var contentContainer = this.nextElementSibling;
      if (contentContainer.style.maxHeight){
        contentContainer.style.maxHeight = null;
      } else {
        contentContainer.style.maxHeight = contentContainer.scrollHeight + "px";
      }
    }
  }

  contactForm.setAttribute('action', '//formspree.io/' + 'danielroy' + '.' + 'morrison' + '@' + 'gmail' + '.' + 'com');

  if (window.location.href.indexOf("#") > -1){
    thanks.style.display = "block"
    readInAppropriateTextFile()
    window.onclick = hideDivOverlay;
  }

  function readInAppropriateTextFile(){
    fileName = url.split('#').pop()
    xhr = new XMLHttpRequest();
    xhr.open("GET", "./txtfiles/" + fileName + ".txt");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4)
            thanks.innerHTML = xhr.responseText;
    }
  }

  function hideDivOverlay(){
    console.log("yes")
    thanks.style.display = "none"
  }
}
