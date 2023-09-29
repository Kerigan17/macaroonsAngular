import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { CustomButtonDirective } from './directives/custom-button.directive';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { CustomPhonePipe } from './pipes/custom-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdvantageComponent,
    CustomButtonDirective,
    ShortTextPipe,
    CustomPhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
