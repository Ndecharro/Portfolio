const Knop = document.body;
const button = document.querySelector(".thema-button");

if(localStorage.getItem("current-theme") === "dark-mode") {
    Knop.classList.add("dark-mode");
} else if(localStorage.getItem("current-theme", "light-mode")){
    Knop.classList.add("light-mode");
}

if(button) {
    button.addEventListener("click", () => {
        if(Knop.classList.contains("dark-mode")) {
            localStorage.setItem("current-theme", "light-mode");

            setTheme("dark-mode", "light-mode");
            console.log('kip is lekker');
        }
            
         else {
            
         (Knop.classList.contains("light-mode"))
            localStorage.setItem("current-theme", "dark-mode");
            setTheme("light-mode", "dark-mode");}
        
    })
}

setTheme = (prevTheme, currTheme) => {
    Knop.classList.remove(prevTheme);
    Knop.classList.toggle(currTheme);
}