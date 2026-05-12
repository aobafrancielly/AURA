function toggleMenu(id) {
    const menu = document.getElementById(id);
    const icon = menu.previousElementSibling.querySelector('i');
            
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        menu.style.display = "block";
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}