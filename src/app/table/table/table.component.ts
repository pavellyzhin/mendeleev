import { Component, OnInit } from '@angular/core';
import { elementsData } from 'src/app/data';
import { chemicalElementModel } from 'src/app/info-block.model';
import { MendeleevService } from 'src/app/mendeleev.service';
import { isNull } from 'util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  public table: chemicalElementModel[][][][] = [];
  public items: chemicalElementModel[] = [];
  public tableTrue: boolean = true;
  public listTrue: boolean = false;

  public lanta: chemicalElementModel[] = [];
  public acti: chemicalElementModel[]= [];

  constructor(
    private MendeleevService: MendeleevService,
    private data: elementsData
  ) { 
    this.table = this.MendeleevService.createTable();
    this.acti  = this.MendeleevService.getActinoid();
    
    this.lanta = this.MendeleevService.getLantanoid();
    this.items = data.items;
  }

  tbl(){
    this.tableTrue = true;
    this.listTrue = false;
  }

  list(){
    this.listTrue = true;
    this.tableTrue = false;
  }
  
  ngOnInit() {
  }

}
