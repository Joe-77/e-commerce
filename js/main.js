// Declare Variables

let menu = document.getElementById("menu"),
  products = document.getElementById("Product"),
  myProducts = document.querySelector(".myProducts"),
  xMark = document.getElementById("none"),
  close = document.getElementById("xMark"),
  ul = document.querySelector(".links"),
  copyRight = document.getElementById("copyRight"),
  cart = document.querySelector(".cart"),
  numValue = document.querySelector(".Num"),
  emptyCart = document.querySelectorAll(".emptyCart"),
  none = document.getElementById("none"),
  nameAll = document.getElementById("nameAll"),
  p_Salary = document.getElementById("p-salary"),
  p_Img = document.querySelector(".img"),
  numCart = document.getElementById("numCart"),
  checkOut = document.querySelector(".checkOut"),
  required = document.querySelectorAll(".required"),
  productItem = document.getElementById("productItem"),
  orderCheck = document.querySelector(".orderCheck"),
  btn = document.getElementById("btn"),
  n = 1;

let currentDiv = document.querySelectorAll(".mainDiv");
// Function Card

menu.addEventListener("click", () => {
  ul.style.display = "flex";
  none.style.position = "absolute";
  none.style.right = "20px";
  none.style.top = "20px";

  setTimeout(() => {
    ul.style.left = "0px";
  }, 500);

  xMark.style.display = "block";

  xMark.onclick = () => {
    xMark.style.display = "none";
    ul.style.left = "-500px";
  };
});

cart.addEventListener("click", () => {
  products.classList.remove("d-none");
});
close.onmousedown = () => {
  products.classList.add("d-none");
};
copyRight.innerHTML = new Date().getFullYear();
/***************************************** */

/* ************************************** */
// Add and Minus Num

function addNum() {
  n++;
  if (n < 10) {
    numValue.innerHTML = `0${n}`;
  } else {
    numValue.innerHTML = n;
  }
}

function minNum() {
  if (n > 1) {
    n--;
    if (n < 10) {
      numValue.innerHTML = `0${n}`;
    } else {
      numValue.innerHTML = n;
    }
  }
}

/* ************************************* */

let dataFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
numCart.textContent = dataFromLocalStorage.length;
cart.onclick = () => {
  if (localStorage.length !== 0) {
    products.remove();
    window.open("pay.html", "_self");
    getData();
  }
};

// Set Data

function addToCart(id, img) {
  let currentSalary = eval(p_Salary.innerHTML.replace(",", ""));

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find((product) => product.id === id);
  if (product) {
    product.quantity = eval(numValue.innerHTML);
  } else {
    cart.push({
      id: id,
      img: img,
      name: nameAll.innerHTML,
      quantity: eval(numValue.innerHTML),
      salary: currentSalary,
    });
  }
  numCart.textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

getData();
// localStorage.clear();

// /* *********************************************

// Get Data From Local Storage
function getData() {
  dataFromLocalStorage.forEach((e) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "mainDiv";
    mainDiv.innerHTML = `
      <div class='myAllProducts'>
      <div><img src="${e.img}" ></div>
      <div class="mainTitle">
      <h3>${e.name}</h3>
      <h5 class='p_salary'>$ ${e.salary}</h5>
      </div>
      </div>
      <div class="quantity">x${e.quantity}</div>
      `;
    let b = e.quantity * e.salary;

    // console.log(e.salary * e.quantity);

    productItem.prepend(mainDiv);
  });

  let quantity = document.querySelectorAll(".quantity"),
    salary = document.querySelectorAll(".p_salary"),
    TOTAL = document.getElementById("TOTAL"),
    VAT = document.getElementById("VAT"),
    SHIPPING = document.getElementById("SHIPPING"),
    GRAND = document.getElementById("GRAND"),
    sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += eval(
      salary[i].innerHTML.replace("$", "") *
        quantity[i].innerHTML.replace("x", "")
    );
    TOTAL.innerHTML = `$ ${sum}`;
    SHIPPING.innerHTML = `$ 80`;
    let sh = SHIPPING.innerHTML.replace("$", "");
    VAT.innerHTML = `$ ${(sum * 0.18).toFixed(2)}`;
    GRAND.innerHTML = `$ ${(sum + sum * 0.18 + eval(sh)).toFixed(2)}`;
  }

  numCart.textContent = dataFromLocalStorage.length;
}

// Create Button Function

function checkButton() {
  if (
    Name.value !== "" &&
    mail.value !== "" &&
    mail.value.match(validMail) &&
    phone.value.length == 13 &&
    address.value !== "" &&
    code.value.length == 4 &&
    city.value !== "" &&
    country.value !== ""
  ) {
    orderCheck.classList.remove("d-none");
    const myAllSalary = document.getElementById("myAllSalary"),
      GRAND = document.getElementById("GRAND");
    myAllSalary.innerHTML = `${GRAND.innerHTML}`;

    document.getElementById("clearData").onclick = () => {
      localStorage.clear();
    };
  }
}
// ********************************************************************

//***************************** */
let Name = document.getElementById("name"),
  errorName = document.getElementById("errorName"),
  mail = document.getElementById("mail"),
  errorMail = document.getElementById("errorMail"),
  phone = document.getElementById("phone"),
  errorPhone = document.getElementById("errorPhone"),
  address = document.getElementById("address"),
  errorAddress = document.getElementById("errorAddress"),
  city = document.getElementById("city"),
  code = document.getElementById("code"),
  errorCode = document.getElementById("errorCode"),
  errorCity = document.getElementById("errorCity"),
  country = document.getElementById("country"),
  errorCountry = document.getElementById("errorCountry");

let validMail = /\w+@\w+.(com|org|eg)/gi,
  validPhone = /\d{12}/g,
  validCode = /\d{4}/g;

mail.addEventListener("keyup", () => {
  if (mail.value.match(validMail)) {
    errorMail.classList.add("d-none");
  } else {
    errorMail.classList.remove("d-none");
  }
});

Name.addEventListener("keyup", () => {
  if (Name.value !== "") {
    errorName.classList.add("d-none");
  } else {
    errorName.classList.remove("d-none");
  }
});

phone.onkeyup = () => {
  if (phone.value.match(validPhone)) {
    if (phone.value.length < 13) {
      errorPhone.classList.remove("d-none");
    } else {
      errorPhone.classList.add("d-none");
      address.focus();
    }
  } else {
    errorPhone.classList.remove("d-none");
    errorPhone.innerHTML = "Enter Valid Number";
  }
  if (phone.value == "") {
    errorPhone.textContent = "This field is required";
  }
};

address.onkeyup = () => {
  if (address.value === "") {
    errorAddress.classList.remove("d-none");
  } else {
    errorAddress.classList.add("d-none");
  }
};

code.onkeyup = () => {
  if (code.value.match(validCode)) {
    errorCode.classList.add("d-none");
    city.focus();
  } else {
    errorCode.classList.remove("d-none");
    errorCode.innerHTML = "Enter Valid Code";
  }
  if (code.value == "") {
    errorCode.textContent = "This field is required! ";
  }
};

city.onkeyup = () => {
  if (city.value === "") {
    errorCity.classList.remove("d-none");
  } else {
    errorCity.classList.add("d-none");
  }
};
country.onkeyup = () => {
  if (country.value === "") {
    errorCountry.classList.remove("d-none");
  } else {
    errorCountry.classList.add("d-none");
  }
};

let select = document.querySelectorAll(".select"),
  d = document.querySelectorAll(".div");

let ePay = document.createElement("div");
ePay.classList.add("ePay");
ePay.classList.add("allMail");

select[0].onclick = () => {
  d[0].classList.add("checked");
  d[1].classList.remove("checked");

  if (!checkOut.lastElementChild.classList.contains("ePay")) {
    ePay.innerHTML = `
    <div>
                <label for="number">e-Money Number</label>
                <input
                  type="text"
                  maxlength="9"
                  id="number"
                  placeholder="238521993"
                />
                <small class="required" id="errorNumber"
                  >This field is required</small
                >
              </div>

              <div>
                <label for="pin">e-Money PIN</label>
                <input type="text" id="pin" maxlength="4" placeholder="6891" />
                <small class="required" id="errorPin"
                  >This field is required</small
                >
              </div>
    `;
    checkOut.appendChild(ePay);
    let number = document.getElementById("number"),
      pin = document.getElementById("pin"),
      errorPin = document.getElementById("errorPin"),
      errorNumber = document.getElementById("errorNumber");

    let validMoney = /\d{9}/g,
      validPin = /\d{4}/g;

    number.onkeyup = () => {
      if (number.value.match(validMoney)) {
        errorNumber.classList.add("d-none");
        pin.focus();
      } else {
        errorNumber.classList.remove("d-none");
        errorNumber.textContent = "Enter valid Number";
      }
      if (number.value == "") {
        errorNumber.textContent = "This field is required";
      }
    };

    pin.onkeyup = () => {
      if (pin.value.match(validPin)) {
        errorPin.classList.add("d-none");
      } else {
        errorPin.classList.remove("d-none");
        errorPin.textContent = "Enter valid pin";
      }
      if (pin.value == "") {
        errorPin.textContent = "This field is required";
      }
    };
  }
  if (number.value.length == 9 && pin.value.length == 4) {
    checkButton();
  }
};
select[1].onclick = () => {
  d[1].classList.add("checked");
  d[0].classList.remove("checked");
  if (checkOut.lastElementChild.classList.contains("ePay")) {
    ePay.remove();
  }
};
