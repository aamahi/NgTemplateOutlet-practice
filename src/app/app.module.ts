import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCommonTemplateComponent } from './shared/app-common-template/app-common-template.component';
import { AppProductComponent } from './component/app-product/app-product.component';
import { AppPersonComponent } from './component/app-person/app-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCommonTemplateComponent,
    AppProductComponent,
    AppPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
