import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
   products: Product[]
   displayedColumns = ['id','name','price','action']
   
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
      this.productService.read().subscribe(products=>{
        this.products = products
        console.log(products)
      })
  }
  
}
