import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from './notification/notification.component';
import { LangaugeComponent } from './langauge/langauge.component';



@NgModule({
  declarations: [
    MenuComponent,
    NotificationComponent,
    LangaugeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationComponent,
    MenuComponent,
    LangaugeComponent
  ]

})
export class HeaderModule { }
