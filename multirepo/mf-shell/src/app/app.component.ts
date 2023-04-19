import { Component } from '@angular/core';
import PubSub from 'pubsub-js';

export interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  private _products: ICommonProduct[] = [];

  ngOnInit() {
    PubSub.subscribe('products', (_message, data) => {
      this._products.push(data as unknown as ICommonProduct);
      this.count++;
      localStorage.setItem('products', JSON.stringify(this._products));
    })
  }
}
