
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
// Thiết lập tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
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
