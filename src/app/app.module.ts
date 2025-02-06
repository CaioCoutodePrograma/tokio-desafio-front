import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddTransferenciaDialogComponent } from './add-transferencia-dialog/add-transferencia-dialog.component';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { CurrencyDirective } from './directive/currency.directive';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask';
import { NgxCurrencyDirective } from "ngx-currency";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AddTransferenciaDialogComponent,
    CurrencyDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgxCurrencyDirective,
    MatCardModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    ApiService,
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
