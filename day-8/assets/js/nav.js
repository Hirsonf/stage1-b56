let isOpen= false;

function openHumberger() {
    let humbergerButton = document.getElementById("container-humberger")

    if(!isOpen){
        humbergerButton.style.display = "flex"
        isOpen = true;
    }else{
        humbergerButton.style.display = "none"
        isOpen = false;
    }
}