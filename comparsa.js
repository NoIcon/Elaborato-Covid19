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