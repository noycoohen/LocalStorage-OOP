let users = [
  {
    firstName: "Noy",
    lastName: "Cohen",
    password: "321321",
    nick: "noya",
  },
  {
    firstName: "Sagi",
    lastName: "Cohen",
    password: "1qa2ws3ed",
    nick: "Sag",
  },
  {
    firstName: "Gal",
    lastName: "Daus",
    password: "aaaa",
    nick: "galia",
  },
];
localStorage.setItem("usersStorage", JSON.stringify(users));

class Render {
  #users;
  constructor() {
    this.#users = JSON.parse(localStorage.getItem("usersStorage"));
  }
  renderHTML() {
    this.#users.forEach((user) => {
      let newContainer = document.createElement("div");
      let leftSide = document.createElement("div");
      let rightSide = document.createElement("div");

      newContainer.setAttribute("class", "newContainer");
      leftSide.setAttribute("class", "leftSide");
      rightSide.setAttribute("class", "rightSide");

      let text1 = document.createTextNode(
        `First name: ${user.firstName}, Surname: ${user.lastName}`
      );
      let text2 = document.createTextNode(
        `Password: ${user.password}, Nickname: ${user.nick}`
      );

      leftSide.appendChild(text1);
      rightSide.appendChild(text2);

      newContainer.appendChild(leftSide);
      newContainer.appendChild(rightSide);

      document.body.appendChild(newContainer);
    });
  }
}
let newUsers = new Render();
newUsers.renderHTML();

//mission 2
class Product {
  price;
  productName;
  expDate;
  constructor(inputPrice, inputProductName, inputExpDate) {
    this.price = inputPrice;
    this.productName = inputProductName;
    this.expDate = inputExpDate;
  }
}

class Shop {
  products;
  constructor() {
    this.products = [];
    this.readMethod();
  }
  addProduct(product) {
    this.products.push(product);
    this.saveCreateArray();
  }
  saveCreateArray() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
  readMethod() {
    if (localStorage.getItem("products") != null) {
      this.products = JSON.parse(localStorage.getItem("products"));
    } else {
      this.saveCreateArray();
    }
  }
}
