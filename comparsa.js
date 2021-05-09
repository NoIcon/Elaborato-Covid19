document.querySelectorAll('.bottone').forEach(button =>{
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('bottone--active');

        if(button.classList.contains('bottone--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else{
            accordionContent.style.maxHeight = 0;
        }
    })                                                                                                                                                                                                                                                                                                         
});

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      button.classList.toggle('dropbtn1--active')
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          if(button.classList.contains('dropbtn1--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
          }
        }
      }
    }
  } 

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 


  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 