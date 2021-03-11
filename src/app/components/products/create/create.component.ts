import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product:Product ={
    name:'',
    price: 0
  }

  constructor(private productService: ProductsService,
  private router:Router  ) { }

  ngOnInit(): void {
  
  }
  createProducts():void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showOnMenssage("Produto Criado");
      this.router.navigate(['/products'])
    })
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }

}
