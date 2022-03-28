import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementsData } from 'src/app/data';
import { chemicalELementContentModel, chemicalElementModel } from 'src/app/info-block.model';
import { MendeleevService } from 'src/app/mendeleev.service';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})
export class ElementTableComponent implements OnInit {

  public item: chemicalElementModel = new chemicalElementModel();
  public itemContent: chemicalELementContentModel = new chemicalELementContentModel();

  public prevItem: chemicalElementModel = new chemicalElementModel();
  public nextItem: chemicalElementModel = new chemicalElementModel();

  constructor(
    private MendeleevService: MendeleevService,
    private data: elementsData,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params)=>{
      this.item = this.MendeleevService.getElementById(params['id']);
      this.itemContent = this.MendeleevService.getElementContentById(params['id']);
      console.log(this.MendeleevService.items.length);
      this.prevItem = (parseInt(params['id']) == 1) ? this.MendeleevService.getElementById(this.data.items.length) : this.MendeleevService.getElementById(parseInt(params['id'])-1);;
      this.nextItem = (parseInt(params['id']) == this.data.items.length) ? this.MendeleevService.getElementById(1) : this.MendeleevService.getElementById(parseInt(params['id'])+1);;
    })
    
    
  }

  ngOnInit() {
  }

}
