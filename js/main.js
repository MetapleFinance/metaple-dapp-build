window.onload = function() {
    // Dark Mode JS
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });

    // Select Token
    $('.select-token').slideUp();
    $(".select-source-token").click(function(){
        $('.select-token').slideDown("slow");
    });
    $(".back-to-token").click(function(){
        $('.select-token').slideUp("slow");
    });
    $(".chart-icon").click(function(){
        $('.chart-box').slideToggle("slow");
    });

    //Show and hide hamburguer menu in small screens 
    const menu = document.getElementById("menu");
    const ulMenu = document.getElementById("ulMenu");

    function menuToggle() {
        menu.classList.toggle('active');
    }

    // Browser resize listener
    window.addEventListener("resize", menuResize);

    // Rezise menu if user changing the width with responsive menu opened
    function menuResize() {
        // first get the size from the window
        const window_size = window.innerWidth || document.body.clientWidth;
        if (window_size > 640){
            menu.querySelectorAll.remove('.active');
        }
    }

    // Tabs
    const tabs = document.querySelectorAll(".tabs");
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".tab-content");

    function onTabClick(event) {
        // deactivate existing active tabs and panel
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove("active");
        }

        for (let i = 0; i < panel.length; i++) {
            panel[i].classList.remove("active");
        }


        // activate new tabs and panel
        event.target.classList.add('active');
        let classString = event.target.getAttribute('data-target');
        console.log(classString);
        document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', onTabClick, false);
    }

    // Active class on Current Page
    $('ul#ulMenu li a').filter(function(){
        return this.href === location.href;
    }).addClass('active');

    // Tooltip
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl);
    });
}