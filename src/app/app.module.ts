import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatExpansionModule, MatTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WarframesModule } from './warframes/warframes.module';
import { WarframesService } from './warframes/warframes.service';

const matModules = [
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatExpansionModule,
  MatTabsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    matModules,
    WarframesModule,
    AppRoutingModule,
  ],
  exports: [
    matModules,
  ],
  providers: [WarframesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
