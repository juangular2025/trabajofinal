import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { iProduct } from '../../services/product/product-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() product: iProduct | undefined;
}
