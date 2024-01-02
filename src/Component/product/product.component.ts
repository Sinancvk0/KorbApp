import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/products';
import { ProductService } from '../../Service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  korbItems:Product[]=[];

  ngOnInit(): void {
    this.getList();
 
  }

  constructor(private productService: ProductService) { }

  getList(): void {
    this.productService.getAll().subscribe(result => {

      this.products = result;

    })

 

   

  }

  getProductById(id:number){
    this.productService.getById(id).subscribe(res=>{
     this.korbProduct(res)
    })
  }
  korbProduct(product: Product) {
    const existingProduct = this.korbItems.find(item => item.id === product.id);
  
    if (existingProduct) {
      if (existingProduct.quantity !== undefined) {
        existingProduct.quantity++; // Eğer ürün sepette varsa ve quantity tanımlıysa, sadece miktarını artır
      } else {
        existingProduct.quantity = 1; // Eğer quantity tanımlı değilse, adeti 1 olarak belirle
      }
    } else {
      product.quantity = 1; // Eğer sepette yoksa, adeti 1 olarak belirle
      this.korbItems.push(product); // Ürünü ekle
    }
  }
  
  getItems() {
    return this.korbItems;
}

}
