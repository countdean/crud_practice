import { Component, OnInit, Inject } from '@angular/core';
import { StarterService } from '../starter/starter.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {

  editProductForm!: FormGroup;

  getEditProductForm(){
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      image_link: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      is_published: ['', Validators.required]
    })
    if(this.editData){
      this.editProductForm.controls['name'].setValue(this.editData.name)
      this.editProductForm.controls['image_link'].setValue(this.editData.image_link)
      this.editProductForm.controls['description'].setValue(this.editData.description)
      this.editProductForm.controls['price'].setValue(this.editData.price)
      this.editProductForm.controls['is_published'].setValue(this.editData.is_published)

    }
  }

  updateProduct(){
    this.starterService.updateProduct(this.editProductForm.value, this.editData.id).subscribe((data) =>{
      this.dialogRef.close('update')
    })
  }

  constructor( private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<EditProductDialogComponent>, 
    private starterService: StarterService ) { }

  ngOnInit(): void {
    this.getEditProductForm()
    console.log(this.editData)
  }

}
