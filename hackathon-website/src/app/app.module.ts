import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventsComponent } from './events/events.component';
import { ThemeComponent } from './theme/theme.component';
import { FaqComponent } from './faq/faq.component';
import { ApplyComponent } from './apply/apply.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HeadnavComponent } from './nav/headnav/headnav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SidenavComponent,
    HeadnavComponent,
    AppComponent,
    AboutComponent,
    SponsorsComponent,
    ScheduleComponent,
    EventsComponent,
    ThemeComponent,
    FaqComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
