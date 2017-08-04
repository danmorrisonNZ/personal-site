window.onload = function(){
  var contactForm =  document.getElementById('contactform');
  var headerIcon =  document.getElementById('header-icon');
  var cvSectionButtons = document.getElementsByClassName("cv-button");
  var thanks =  document.getElementById('thanks');
  var i;

  headerIcon.onclick = scrollToTop;

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

  if (window.location.href.indexOf("#thanks") > -1){
    thanks.style.display = "block"
    window.onclick = hideThanksDiv;
  }
  function hideThanksDiv(){
    console.log("yes")
    thanks.style.display = "none"
  }

  function scrollToTop(){
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }
}
