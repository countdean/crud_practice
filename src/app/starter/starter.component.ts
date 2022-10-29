import { Component,  OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { Product } from './starter';
import { StarterService } from './starter.service';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  listProduct!:Product[];

  displayedColumns: string[] = ['id','name', 'image_link', 'description', 'price','action'];
  dataSource: any;

  fetchProducts(){
    this.starterService.getProducts().subscribe((data) => {
      this.listProduct = data.data
      this.dataSource = new MatTableDataSource(this.listProduct)
      console.log('list of Products', this.listProduct)
    })
  }

  deleteProduct(id: number){
    this.starterService.deleteProduct(id).subscribe(((data) =>{
      console.log(data)
      this.fetchProducts()
    }));
  }

  onSubmit(product: NgForm){
    console.log(product);
    this.starterService.addProduct(product).subscribe((product) => {
      this.fetchProducts()
      console.log(product)
    })
  }

  updateProduct(row: any){
    this.editDialog.open(EditProductDialogComponent,{
      data: row
    }).afterClosed().subscribe((val) => {
      if( val === 'update'){
        this.fetchProducts()
      }
    })
  }

  constructor(private starterService: StarterService, private editDialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchProducts()
  }


}
