import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './table/table.module';
import { MendeleevComponent } from './mendeleev/mendeleev.component';
import { AboutComponent } from './about/about.component';
import { MendeleevService } from './mendeleev.service';
import { elementsData } from './data';
import { ElementListComponent } from './element-list/element-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MendeleevComponent,
    AboutComponent,
    ElementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [MendeleevService,elementsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
