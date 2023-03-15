const shopGrid = document.querySelector(".shop-grid");
const items = document.querySelectorAll(".item");
const images = document.querySelectorAll("img");

let data = [];

function computeData() {
    const imgArray = Array.from(images);

    data = imgArray.map((img) => {
        return { img };
    });
}

computeData();

function rotateImages() {
    data.forEach((obj, i) => {
        const randomRotate = Math.floor(Math.random() * (7 - -7 + 1) - 7);
        obj.img.style.transform = `rotateZ(${randomRotate}deg)`;
    });
}

rotateImages();

// function determineAxis() {
//     const numberPattern = /-?\d+/g;

//     data.forEach((obj) => {
//         if (obj.img.style.transform.match(numberPattern)[1] >= 0) {
//             obj.xAxis = true;
//             return;
//         }
//         obj.xAxis = false;
//     });
// }

determineAxis();

// items.onmousemove = function (e) {
//     const rotateX = getRotateX(e, 45);
//     const rotateY = getRotateY(e, 45);
//     const translateX = getRotateX(e, 8);
//     const translateY = getRotateY(e, 10);
//     data.forEach((obj) => {
//         if (obj.xAxis) {
//             obj.img.style.transform = `rotateX(${rotateX}deg) rotateZ(${obj.rotateZ}deg)        
//              perspective(400px)`;
//             return;
//         }
//         obj.img.style.transform = `rotateY(${rotateX}deg) rotateZ(${obj.rotateZ}deg) 
//          perspective(400px)`;
//     });
// };

// function getRotateX(e, limit) {
//     const right = items.getBoundingClientRect().right;
//     return ((e.pageX / right) * limit).toFixed(4);
// }

// function getRotateY(e, limit) {
//     const bottom = items.getBoundingClientRect().height;
//     return ((e.pageY / bottom) * limit).toFixed(4);
// }

// items.onwheel = function () {
//     const rotateY = getRotateY(e, 45);
//     const translateX = getRotateX(e, 8);
//     const translateY = getRotateY(e, 10);

//     data.forEach((obj) => {
//         if (!obj.xAxis)
//             obj.style.transform = `perspective(400px) translate3d(-${translateX}%, -${translateY}$,0px) 
//          rotateZ(${obj.rotateZ}deg) rotateY(${rotateY}deg)`;
//     })
// };
const products=[
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:200},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:280},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:260},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:270},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:300},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:400},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:200},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:200},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:150},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:350},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:240},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:320},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:190},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:410},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:420},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:315},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:255},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:385},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:200},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:450},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:200},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:210},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:220},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:280},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:400},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:390},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:280},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:360},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:290},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:310},
    {author:`Iuga Mariana`,title:`Intre cer si pamant`, price:280},


]
const productImages =document.querySelectorAll('.shop-grid item');

productImages.forEach(image => {
    image.addEventListener("click", function() {
      // Get product details from DOM elements
      const productName = image.parentElement.querySelector("h3").textContent;
      const productDescription = image.parentElement.querySelector("p").textContent;
  
      // Open a new tab
      const newTab = window.open("", "_blank");
  
      // Write HTML content to the new tab
      newTab.document.write(`
        <html>
          <head>
            <title>${productName} Details</title>
          </head>
          <body>
            <h1>${productName} Details</h1>
            <p>${productDescription}</p>
          </body>
        </html>
      `);
    });
  });