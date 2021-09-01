import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm: FormGroup = new FormGroup({})

  store: any;

  constructor(
    public builder: FormBuilder,
    public router: Router,
    public storesService: StoresService,

  ) { }

  save() {
    if (this.editForm.valid) {
      const stores = this.editForm.value;
      // console.log(shop);
      this.storesService.edit(stores)

      this.router.navigateByUrl('stores/p/list')
    }
  }

  delete() {
      this.storesService.delete(this.store)
      this.router.navigateByUrl('stores/p/list')
  }

  ngOnInit() {

    this.store = window.history.state['row'];
    console.log(this.store);

    this.editForm = this.builder.group({
      id: [this.store.id],
      name: [this.store.name],
      location:[this.store.location],
    });

  }


}
