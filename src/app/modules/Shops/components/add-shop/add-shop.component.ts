import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {

  addForm: FormGroup = new FormGroup({})

  constructor(
    public builder: FormBuilder,
  ) { }

  ngOnInit() {
    this.addForm = this.builder.group({
      name: [''],
      location:['']
    });
  }

}
