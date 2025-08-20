document.addEventListener('DOMContentLoaded', function (){ 

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

    // Add event listeners to the nav links
    let navIcon = document.querySelectorAll('.nav-icon');

    navIcon.forEach(item => {
      console.log('test');
      item.addEventListener('click', () => {
        console.log('Item clicked:');
      });
    });
  });

  
  
});
