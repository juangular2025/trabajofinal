import { Component, inject } from '@angular/core';
import { iProduct, ProductService } from '../../services/product/product-service';
import { Product } from "../product/product";

@Component({
  selector: 'app-carousel',
  imports: [Product],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  loading: boolean = false;
  products: iProduct[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.loading = true;
    this.productService.getProductos().subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products)
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        this.loading = false;
        console.info('complete');
      },
    });
  }
}
