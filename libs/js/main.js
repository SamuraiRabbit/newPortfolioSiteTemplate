/*-----ON LOAD-----*/
$(window).on('load', function () {
    // Launches pre-loader while html loads
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
        });
    }
  });

$(document).ready(function(){
        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
    
        };
    
        // Shrink the navbar 
        navbarShrink();
    
        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);
    
        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 72,
            });
        };
    
        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    
});

$("#submitForm").click(function() {

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    $.ajax({
        url: "https://formsubmit.co/ajax/494233f27764d4e419296de3b3fa11fb",
        method: "POST",
        data: {
            name: name,
            email: email,
            message: message
        },
        dataType: "json",
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
});