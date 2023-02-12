import {AfterViewInit, Component, OnInit,Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements AfterViewInit, OnInit, OnChanges {
@Input() pages=[]
displayedColumns: string[] = ['title', 'wordcount', 'snippet'];
dataSource:MatTableDataSource<any>;
subscrption: Subscription

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.pages);
    this.dataSource.data = this.pages
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['pages'].previousValue===undefined) {
      return
    }
    this.dataSource.data = this.pages
  }
  

}
