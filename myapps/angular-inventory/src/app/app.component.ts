import { Component, EventEmitter } from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "NICEHAT",
        "Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Nice Jacket",
        "/assets/images/products/blue-jacket.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99
      ),
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.jpg",
        ["Men", "Shoes", "Running Shoes"],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log("Product clicked", product);
  }
}
