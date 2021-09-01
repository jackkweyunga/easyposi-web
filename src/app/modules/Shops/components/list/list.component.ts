import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListDataSource } from './list-datasource';
import { ListItem } from "../../shops.model";
import { ShopsService } from '../../services/shops.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListItem>;
  dataSource: ListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'location'];

  constructor(
    public router: Router,
    private shopsService: ShopsService
  ) {
    this.dataSource = new ListDataSource(this.shopsService);
  }

  selected(row: ListItem) {
    console.log(row);
    this.router.navigate(['shops/account/edit'], {state:{row}} )
  }

  async ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  async ngOnInit() {
  }
}
