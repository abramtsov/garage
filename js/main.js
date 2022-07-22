function panel() {
    let childPanel = document.querySelector('.preloader');
    // childPanel.remove()
    setTimeout(() => {
        childPanel.remove();
    }, 4000)
    console.log(childPanel);
}
panel();