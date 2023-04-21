import { Component, Input } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { CommonModule } from '@angular/common';
import PubSub from 'pubsub-js';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product?: IProductCard;

  constructor(private router: Router) { }

  clickCard(): void {
    PubSub.publish('products', this.product);
  }

  navigate(): void {
    this.router.navigate(['/test']);
  }
}
