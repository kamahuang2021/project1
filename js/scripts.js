/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const getPhoto = document.body.querySelector('#photoBtn');
    if (getPhoto) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        getPhoto.addEventListener('click', event => {
            event.preventDefault();
            var pp = document.getElementById('photo-placeholder');
            var x = pp.childElementCount;
            if (x == 0) {
                        var elem = document.createElement("img");
                        elem.setAttribute("height", "576");
                        elem.setAttribute("width", "768");
                        elem.setAttribute("alt", "me");
                        elem.src = 'img/me.jpeg';
                        pp.appendChild(elem);
                        document.getElementById('photoBtn').innerText = 'Clear';
            } else {
                pp.removeChild(pp.children[0]);
                document.getElementById('photoBtn').innerText = 'Click this and you can get my photo';
            }
        });
    }
});
