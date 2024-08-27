// Header toggle

let MenuBtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (this.classList.contains('fa-bars')) {
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    }
    else{
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    }
})

let navHome = document.getElementById("nav-home");
navHome.addEventListener('click',function(e){
    MenuBtn.dispatchEvent(new Event('click'));
    console.log("event triggered")
} )

let navAbout = document.getElementById("nav-about");
navAbout.addEventListener('click',function(e){
    MenuBtn.dispatchEvent(new Event('click'));
    console.log("event triggered")
} )

let navPortfolio = document.getElementById("nav-portfolio");
navPortfolio.addEventListener('click',function(e){
    MenuBtn.dispatchEvent(new Event('click'));
    console.log("event triggered")
} )

let navAchievements = document.getElementById("nav-achievement");
navAchievements.addEventListener('click',function(e){
    MenuBtn.dispatchEvent(new Event('click'));
    console.log("event triggered")
} )

let navContact = document.getElementById("nav-contact");
navContact.addEventListener('click',function(e){
    MenuBtn.dispatchEvent(new Event('click'));
    console.log("event triggered")
} )


//typing effect

let typed = new Typed(".auto-input",{
    strings: ['Frontend Deveoper', 'Software Developer', 'Software Engineer', 'Full Stack Developer'],
    typeSpeed: 80,
    backSpeed: 120,
    backDelay: 2000,
    loop : true,
})



