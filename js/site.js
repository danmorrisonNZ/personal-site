window.onload = function(){
  var contactform =  document.getElementById('contactform');
  var cvSectionButtons = document.getElementsByClassName("cv-button");
  var thanks =  document.getElementById('thanks');
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

  contactform.setAttribute('action', '//formspree.io/' + 'danielroy' + '.' + 'morrison' + '@' + 'gmail' + '.' + 'com');

  if (window.location.href.indexOf("#thanks") > -1){
    thanks.style.display = "block"
    window.onclick = hideThanksDiv;
  }
  function hideThanksDiv(){
    console.log("yes")
    thanks.style.display = "none"
  }
}
