import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../product.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];

  @Output() productSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {}
}
