document.addEventListener('DOMContentLoaded', function () {

  let siteInfo = document.querySelectorAll('.site-info');

  let homeBody = document.querySelector('#homeBody');

  siteInfo.forEach((infos, index) => {

    infos.addEventListener('mouseover', function () {
      homeBody.classList.add("zoom-bg");
    });

    infos.addEventListener('mouseout', function () {
      homeBody.classList.remove("zoom-bg");
    });

    console.log("mouseover event added to site-info " + index);


  });

  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      const navElement = document.querySelector("nav");
      navElement.innerHTML = data;



      // Add event listeners to the nav Icon to open the mobile nav
      let navIcon = document.querySelectorAll('.nav-icon');

      let mobileNav = document.querySelectorAll('.mobile-nav');

      let navLinks = document.querySelectorAll('.nav-links');


      navIcon.forEach(icon => {
        console.log('test');
        icon.addEventListener('click', () => {
          console.log('Item clicked:');

          icon.classList.toggle('open');

          navLinks.forEach(link => {
            link.classList.toggle('open');
          });
          mobileNav.forEach(nav => {
            nav.classList.toggle('open');
          });


        });
      });
    });



});
