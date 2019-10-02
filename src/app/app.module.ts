import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { NgbModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WarframesModule } from './warframes/warframes.module';
import { WarframesService } from './warframes/warframes.service';
import { WarframeStatService } from './warframes/warframe-stats/warframe-stats.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

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
    FormsModule,
    matModules,
    NgbModule,
    WarframesModule,
    UsersModule,
    AppRoutingModule,
  ],
  exports: [
    matModules,
  ],
  providers: [
    NgbProgressbarConfig,
    WarframesService,
    WarframeStatService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
