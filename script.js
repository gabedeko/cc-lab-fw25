document.addEventListener('DOMContentLoaded', function (){ 
  console.log("testington");

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

  

});
