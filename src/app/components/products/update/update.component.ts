import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:Product ={
    id :null,
    name:'',
    price: 0
  }
  constructor(private productService: ProductsService,
    private router:Router,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product=>{
       this.product = product
    })
  }
   
  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showOnMenssage("Produto Atualizado");
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
