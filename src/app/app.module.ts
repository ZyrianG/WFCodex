import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WarframeComponent } from './warframe/warframe.component';
import { WarframeListComponent } from './warframe/warframe-list/warframe-list.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponsListComponent } from './weapons/weapons-list/weapons-list.component';

const modules = [
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WarframeComponent,
    WarframeListComponent,
    WeaponsComponent,
    WeaponsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    modules,
  ],
  exports: [
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
