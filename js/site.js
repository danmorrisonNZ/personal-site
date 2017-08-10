window.onload = function(){
  var contactForm =  document.getElementById('contactform');
  var headerIcon =  document.getElementById('header-icon');
  var cvSectionButtons = document.getElementsByClassName("cv-button");
  var coverLetter =  document.getElementsByClassName('cover-letter');
  var overlayCopy =  document.getElementById('overlay-copy');
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
    // weirdness with forEach loop not working
    coverLetter[0].style.display = "block"
    coverLetter[1].style.display = "block"
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
            overlayCopy.innerHTML = xhr.responseText;
    }
  }

  function hideDivOverlay(){
    coverLetter[0].style.visibility = "hidden"
    coverLetter[0].style.opacity = 0
    coverLetter[1].style.visibility = "hidden"
    coverLetter[1].style.opacity = 0
  }
}
