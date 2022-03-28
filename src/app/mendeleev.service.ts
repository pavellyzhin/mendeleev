import { Injectable } from '@angular/core';
import { isNull } from 'util';
import { elementsData } from './data';
import { chemicalELementContentModel, chemicalElementModel } from './info-block.model';

@Injectable({
  providedIn: 'root'
})
export class MendeleevService {

  public items: chemicalElementModel[][][] = [];
  
  constructor(
    private data: elementsData
  ) { 
console.log(data.items.length);
  }

  public createTable():chemicalElementModel[][][][]{
    let position: any = {};
    // periods
    let rows: chemicalElementModel[][][][] = [];
    for(let i = 0 ; i < 7; i++){
      let group: chemicalElementModel[][][] = [];
      // groups
      for(let e = 0 ; e < 8; e++){
        let item:chemicalElementModel[][] = [];
        item[0] = [];
        item[1] = [];
        for(let z =0; z < this.data.items.length; z++){
          if(
              this.data.items[z].period.length == i+1 && 
              this.data.items[z].group == e+1 
            ) {
                if(item[0].length){
                  for(let y = 0; y < item[0].length;y++){
                    if(
                        item[0][y].period.length == this.data.items[z].period.length 
                        && this.data.items[z].group == item[0][y].group
                      ){
                        if(this.data.items[z].group == 8 && item[0].length < 3){
                           item[0].push(this.data.items[z]); break;
                        } else {
                          item[1].push(this.data.items[z]); break;
                        }
                    
                      }else{
                        if(y+1 == item[0].length){
                            item[0].push(this.data.items[z]);
                        }
                      }
                  }
                }else{
                  item[0].push(this.data.items[z]);
                }
              }
        }
        group.push(item);
      }
      rows.push(group);
    }
    return rows;
  }

  public getElementById(id:number): chemicalElementModel{
    for(let i =0; i < this.data.items.length; i++){
      if(this.data.items[i].id == id){
        return this.data.items[i];
      }
      if(i+1 == this.data.items.length){
        return this.data.items[109];
      }
    }
    
  }

  public getElementContentById(id:number): chemicalELementContentModel{
    for(let i =0; i < this.data.contentItems.length; i++){
      if(this.data.contentItems[i].id == id){
        return this.data.contentItems[i];
      }
      if(i+1 == this.data.contentItems.length){
        return new chemicalELementContentModel(id,'здесь покачто пусто');
      }
    }
  }


  public getLantanoid(){
    let row: chemicalElementModel[] = [];
    for(let i =0; i < this.data.items.length; i++){
      if(this.data.items[i].lantanoid == 1){
        row.push(this.data.items[i]);
      }
    }    
    return row;
  }

  public getActinoid(){
    let row: chemicalElementModel[] = [];
    for(let i =0; i < this.data.items.length; i++){
      if(this.data.items[i].lantanoid == 2){
        row.push(this.data.items[i]);
      }
    }    
    return row;
  }
}
