import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  iProduct,
  ProductService,
} from '../../services/product/product-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  productId: string = '';
  loading: boolean = false;
  products: iProduct[] = [];
  product: iProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];

      console.log(`productId ${this.productId}`);

      this.loading = true;
      this.productService.getProducto(this.productId).subscribe({
        next: (product) => {
          this.product = product;
          console.log(this.product);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          this.loading = false;
          console.info('complete');
        },
      });
    });
  }
}
