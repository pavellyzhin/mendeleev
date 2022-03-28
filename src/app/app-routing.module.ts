import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { MendeleevComponent } from './mendeleev/mendeleev.component';
import { ElementTableComponent } from './table/element-table/element-table.component';
import { MainComponent } from './table/main/main.component';
import { TableComponent } from './table/table/table.component';


const routes: Routes = [{path: '' , component: MainComponent},
  { path: 't', component:TableComponent},
  { path: 't/:id', component: ElementTableComponent},
{ path: 'm' , component: MendeleevComponent },
{ path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
