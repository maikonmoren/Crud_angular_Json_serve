import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  product:Product ={
    id :null,
    name:'',
    price: 0
  }
  constructor(private productService: ProductsService,
    private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id).subscribe(product=>{
         this.product = product
      })
    }
     
    deleteProduct():void{
      this.productService.delete(this.product.id).subscribe(()=>{
        this.productService.showOnMenssage("Produto deletado");
        this.router.navigate(['/products'])
      })
    }
  
    cancel():void{
      this.router.navigate(['/products'])
    }

}
