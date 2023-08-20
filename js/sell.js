// // // Declare Variables
// // let add = document.querySelector(".Add"),
// //   minus = document.querySelector(".min"),
// //   numValue = document.querySelector(".Num"),
// //   addToCart = document.getElementById("addToCart"),
// //   productImg = document.querySelector(".img"),
// //   p_Salary = document.getElementById("p-salary"),
// //   Product = document.getElementById("Product"),
// //   nameAll = document.getElementById("nameAll");

// // let n = 1;
// // // Add And Minus function
// // numValue.innerHTML = `0${n}`;

// // add.onclick = addNum;
// // minus.onclick = minNum;

// // /****************************************** */

// // // Set Local Storage

// // addToCart.onclick = () => {
// //   setLocalStorage(
// //     productImg.innerHTML,
// //     nameAll.innerHTML,
// //     eval(numValue.innerHTML * p_Salary.textContent.replace(",", ""))
// //   );
// // };

// // /******************************************* */
// // function addNum() {
// //   n++;

// //   if (n < 10) {
// //     numValue.innerHTML = `0${n}`;
// //   } else {
// //     numValue.innerHTML = n;
// //   }
// // }

// // function minNum() {
// //   if (n > 1) {
// //     n--;

// //     if (n < 10) {
// //       numValue.innerHTML = `0${n}`;
// //     } else {
// //       numValue.innerHTML = n;
// //     }
// //   }
// // }

// // function setLocalStorage(x, y, z) {
// //   if (addToCart.classList.contains("addEarPhone")) {
// //     localStorage.setItem("earImg", x);
// //     localStorage.setItem("earName", y);
// //     localStorage.setItem("earSalary", z);
// //   } else if (addToCart.classList.contains("addS2")) {
// //     localStorage.setItem("s2Img", x);
// //     localStorage.setItem("s2Name", y);
// //     localStorage.setItem("s2Salary", z);
// //   } else if (addToCart.classList.contains("addS1")) {
// //     localStorage.setItem("s1Img", x);
// //     localStorage.setItem("s1Name", y);
// //     localStorage.setItem("speaker1Salary", z);
// //   } else if (addToCart.classList.contains("addH3")) {
// //     localStorage.setItem("h3Img", x);
// //     localStorage.setItem("h3Name", y);
// //     localStorage.setItem("h3Salary", z);
// //   } else if (addToCart.classList.contains("addH2")) {
// //     localStorage.setItem("h2Img", x);
// //     localStorage.setItem("h2Name", y);
// //     localStorage.setItem("h2Salary", z);
// //   } else {
// //     localStorage.setItem("h1Img", x);
// //     localStorage.setItem("h1Name", y);
// //     localStorage.setItem("h1Salary", z);
// //   }
// // }
// // localStorage.clear();

// // // console.log(eval(numValue.innerHTML));

// // // Get Data From Local Storage

// // function getDataFromLocalStorage() {
// //   for (let i = 0; i < emptyCart.length; i++) {
// //     if (localStorage.length !== 0) {
// //       emptyCart[i].remove();
// //     } else {
// //       console.log(0);
// //     }
// //   }
// // }
// // // localStorage.clear();
// // /* ************************************** */

// // copyRight.innerHTML = new Date().getFullYear();

// // // Add And Minus function
// // numValue.innerHTML = `0${n}`;

// // add.onclick = addNum;
// // minus.onclick = minNum;

// // /****************************************** */

// // // Set Local Storage

// // addToCart.onclick = () => {
// //   setLocalStorage(
// //     productImg.innerHTML,
// //     nameAll.innerHTML,
// //     eval(numValue.innerHTML * p_Salary.textContent.replace(",", ""))
// //   );
// //   getDataFromLocalStorage();
// // };

// // /******************************************* */
// // function addNum() {
// //   n++;

// //   if (n < 10) {
// //     numValue.innerHTML = `0${n}`;
// //   } else {
// //     numValue.innerHTML = n;
// //   }
// // }

// // function minNum() {
// //   if (n > 1) {
// //     n--;

// //     if (n < 10) {
// //       numValue.innerHTML = `0${n}`;
// //     } else {
// //       numValue.innerHTML = n;
// //     }
// //   }
// // }

// // function setLocalStorage(x, y, z) {
// //   if (addToCart.classList.contains("addEarPhone")) {
// //     localStorage.setItem("earImg", x);
// //     localStorage.setItem("earName", y);
// //     localStorage.setItem("earSalary", z);
// //   } else if (addToCart.classList.contains("addS2")) {
// //     localStorage.setItem("s2Img", x);
// //     localStorage.setItem("s2Name", y);
// //     localStorage.setItem("s2Salary", z);
// //   } else if (addToCart.classList.contains("addS1")) {
// //     localStorage.setItem("s1Img", x);
// //     localStorage.setItem("s1Name", y);
// //     localStorage.setItem("speaker1Salary", z);
// //   } else if (addToCart.classList.contains("addH3")) {
// //     localStorage.setItem("h3Img", x);
// //     localStorage.setItem("h3Name", y);
// //     localStorage.setItem("h3Salary", z);
// //   } else if (addToCart.classList.contains("addH2")) {
// //     localStorage.setItem("h2Img", x);
// //     localStorage.setItem("h2Name", y);
// //     localStorage.setItem("h2Salary", z);
// //   } else {
// //     localStorage.setItem("h1Img", x);
// //     localStorage.setItem("h1Name", y);
// //     localStorage.setItem("h1Salary", z);
// //   }
// // }
// // // localStorage.clear();

// // // console.log(eval(numValue.innerHTML));

// //////******************************************** */

// // var n = 1;

// // // Add And Minus
// // numValue.innerHTML = `01`;

// // // add.onclick = addNum;
// // // minus.onclick = minNum;
// // // // ****************************************************

// // // Get Local Storage

// // getLocalStorage();

// // // Set Local Storage

// // function addItem(x, y, z) {
// //   window.localStorage.setItem("imgProduct", x);
// //   window.localStorage.setItem("productName", y);
// //   window.localStorage.setItem("productSalary", z);
// // }

// // addEarPhone.onclick = () => {
// //   addItem(
// //     productImg.innerHTML,
// //     nameEar.textContent,
// //     eval(numValue.innerHTML * 599)
// //   );
// // };
// // // num.innerHTML = `0${i}`;

// // // add.onclick = () => {
// // //   i++;
// // //   if (i < 10) {
// // //     num.textContent = `0${i}`;
// // //   } else {
// // //     num.textContent = i;
// // //   }
// // // };

// // // min.onclick = () => {
// // //   if (i > 1) {
// // //     i--;

// // //     if (i < 10) {
// // //       num.innerHTML = `0${i}`;
// // //     } else {
// // //       num.innerHTML = i;
// // //     }
// // //   }
// // // };

// // // let

// // // addEarPhone.onclick = function () {
// // //   addTask(
// // //     productAll.innerHTML,
// // //     eval(num.innerHTML * 599),
// // //     pName.innerHTML,
// // //     num.innerHTML
// // //   );
// // // };

// // // function addTask(x, y, z) {
// // //   window.localStorage.setItem("earImg", x);
// // //   window.localStorage.setItem("earPrice", y);
// // //   window.localStorage.setItem("earName", z);
// // //   window.localStorage.setItem("earNum", y);

// // //   for (let i = 0; i < emptyCart.length; i++) {
// // //     emptyCart[i].innerHTML = "";
// // //   }
// // // }

// // // getData();
// // // function getData() {
// // //   let img = localStorage.getItem("earImg");
// // //   let productName = localStorage.getItem("earName");
// // //   let salary = localStorage.getItem("earPrice");

// // //   let mainDiv = document.createElement("div"),
// // //     Img = document.createElement("div"),
// // //     tit = document.createElement("div"),
// // //     addToPay = document.createElement("div"),
// // //     btn = document.createElement("vtn"),
// // //     name = document.createElement("h3"),
// // //     p = document.createElement("p"),
// // //     items = document.createElement("p");

// // //   Img.innerHTML = img;
// // //   name.innerHTML = productName;
// // //   items.innerHTML;
// // //   p.innerHTML = `$ 599`;
// // //   addToPay.classList.add("pay");
// // //   tit.append(name, p);
// // //   btn.innerHTML = "Pay Now";

// // //   addToPay.append(btn);

// // //   mainDiv.classList.add("mainDiv");
// // //   Img.className = "myProduct";
// // //   name.classList.add("Title");
// // //   mainDiv.append(Img, tit);
// // //   Product.append(mainDiv, addToPay);
// // // }

// // // //**************************************************** */

// // // let date = new Date().getFullYear();
// // // copyRight.innerHTML = date;
// // // let i = 1,
// // //   add = document.getElementById("add"),
// // //   min = document.getElementById("minus"),
// // //   num = document.getElementById("num");

// // function addNum() {
// //   n++;
// //   if (n < 10) {
// //     numValue.innerHTML = `0${n}`;
// //   } else {
// //     numValue.innerHTML = n;
// //   }
// // }

// // function minNum() {
// //   if (n > 1) {
// //     n--;
// //     if (n < 10) {
// //       numValue.innerHTML = `0${n}`;
// //     } else {
// //       numValue.innerHTML = n;
// //     }
// //   }
// // }

// // function getLocalStorage() {
// //   let earName = localStorage.getItem("productName"),
// //     earPrice = localStorage.getItem("productSalary"),
// //     imgEar = localStorage.getItem("imgProduct");

// //   let mainDiv = document.createElement("div"),
// //     Img = document.createElement("div"),
// //     tit = document.createElement("div"),
// //     addToPay = document.createElement("div"),
// //     btn = document.createElement("vtn"),
// //     name = document.createElement("h3"),
// //     p = document.createElement("p"),
// //     items = document.createElement("p");

// //   Img.innerHTML = imgEar;
// //   name.innerHTML = earName;

// //   p.innerHTML = `$ 599`;
// //   addToPay.classList.add("pay");
// //   tit.append(name, p);
// //   btn.innerHTML = "Pay Now";

// //   addToPay.append(btn);

// //   mainDiv.classList.add("mainDiv");
// //   Img.className = "myProduct";
// //   name.classList.add("Title");
// //   mainDiv.append(Img, tit);
// //   Product.append(mainDiv, addToPay);
// // }

// // Get Data From Local Storage

// // localStorage.clear();

// // Declare Variables
// // let add = document.querySelector(".Add"),
// // minus = document.querySelector(".min"),
// // numValue = document.querySelector(".Num"),
// // // addToCart = document.getElementById("addToCart"),
// // let productImg = document.querySelector(".img"),
// //   p_Salary = document.getElementById("p-salary"),
// //   Product = document.getElementById("Product"),
// //   nameAll = document.getElementById("nameAll");

// let n = 1;

// // Set Local Storage

// // function setData() {
// //   setLocalStorage(
// //     productImg.innerHTML,
// //     nameAll.innerHTML,
// //     eval(numValue.innerHTML * p_Salary.textContent.replace(",", ""))
// //   );
// // }

// // getDataFromLocalStorage();
// // function getDataFromLocalStorage() {
// //   if (localStorage.key("earSalary")) {
// //     console.log(1);
// //   } else {
// //     console.log(0);
// //   }
// // }

// /******************************************* */
// // function addNum() {
// //   n++;

// //   if (n < 10) {
// //     numValue.innerHTML = `0${n}`;
// //   } else {
// //     numValue.innerHTML = n;
// //   }
// // }

// // function minNum() {
// //   if (n > 1) {
// //     n--;

// //     if (n < 10) {
// //       numValue.innerHTML = `0${n}`;
// //     } else {
// //       numValue.innerHTML = n;
// //     }
// //   }
// // }

// // function setLocalStorage(x, y, z) {
// //   if (addToCart.classList.contains("addEarPhone")) {
// //     localStorage.setItem("earImg", x);
// //     localStorage.setItem("earName", y);
// //     localStorage.setItem("earSalary", z);
// //   } else if (addToCart.classList.contains("addS2")) {
// //     localStorage.setItem("s2Img", x);
// //     localStorage.setItem("s2Name", y);
// //     localStorage.setItem("s2Salary", z);
// //   } else if (addToCart.classList.contains("addS1")) {
// //     localStorage.setItem("s1Img", x);
// //     localStorage.setItem("s1Name", y);
// //     localStorage.setItem("speaker1Salary", z);
// //   } else if (addToCart.classList.contains("addH3")) {
// //     localStorage.setItem("h3Img", x);
// //     localStorage.setItem("h3Name", y);
// //     localStorage.setItem("h3Salary", z);
// //   } else if (addToCart.classList.contains("addH2")) {
// //     localStorage.setItem("h2Img", x);
// //     localStorage.setItem("h2Name", y);
// //     localStorage.setItem("h2Salary", z);
// //   } else {
// //     localStorage.setItem("h1Img", x);
// //     localStorage.setItem("h1Name", y);
// //     localStorage.setItem("h1Salary", z);
// //   }
// // }
// // numValue.innerHTML = `0${n}`;

// // Add And Minus function

// // add.onclick = addNum;
// // minus.onclick = minNum;

// /****************************************** */
