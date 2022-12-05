function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

//allikas: https://alvarotrigo.com/blog/css-animations-scroll/

/*
pmst see kood annab või eemaldab ".active" nende elementide jaoks, millel on ".reveal" klass. See toimub siis, kui need elemendid sisenevad vaatealasse.
 */