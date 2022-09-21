
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TDS_I18N, vi_VN } from 'tds-ui/i18n';
import { AppRoutingModule } from './app-routing.module';
// Đa ngôn ngữ
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1/page1.component';
import { Page2Component } from './page1/page2/page2.component';
import { Page3Component } from './page1/page3/page3.component';
import { Page4Component } from './page1/page4/page4.component';
import { Page5Component } from './page1/page5/page5.component';
import { Page6Component } from './page1/page6/page6.component';
import { Page7Component } from './page1/page7/page7.component';
// Thiết lập tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: [{ provide: TDS_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
