import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: no-non-null-assertion
      const id: string = this.route.snapshot.paramMap.get('id')!;
      this.product = this.productsService.getProduct(id);
    // });
  }

}
