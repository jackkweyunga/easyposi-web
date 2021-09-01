import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup = new FormGroup({})

  constructor(
    public builder: FormBuilder,
    public router: Router,
    public storesService: StoresService,
  ) { }

  save() {
    if (this.addForm.valid) {
      const store = this.addForm.value;
      // console.log(store);
      this.storesService.add(store)
      this.router.navigateByUrl('stores/p/list')

    }
  }


  ngOnInit() {
    this.addForm = this.builder.group({
      name: [''],
      location:['']
    });
  }

}
