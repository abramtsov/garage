function preloader() {
    let childPanel = document.querySelector('.preloader');
    if (sessionStorage.getItem('preloader')) childPanel.remove();
    setTimeout(() => {
        childPanel.remove();
    }, 2800)
    sessionStorage.setItem('preloader', true)
}
preloader();