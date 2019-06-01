import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterService } from './register.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RegisterService]
})
export class AppModule { }
