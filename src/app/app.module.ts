import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './view/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuTabComponent } from './view/menu-tab/menu-tab.component';
import {MatCardModule} from '@angular/material/card';
import { MesaComponent } from './view/mesa/mesa.component';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { FooterComponent } from './view/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuTabComponent,
    MesaComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
