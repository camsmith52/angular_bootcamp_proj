import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreditCardPipe } from '../pipes/credit-card.pipe';
import { SecurityCodePipe } from '../pipes/security-code.pipe';
import { MMYYPipe } from '../pipes/m-myy.pipe';

@NgModule({
  declarations: [
    CreditcardComponent,
    CreditCardPipe,
    SecurityCodePipe,
    MMYYPipe,
  ],
  imports: [
    CommonModule,
    CreditcardRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    
  ],
  exports:[
    
  ]
 
  
})
export class CreditcardModule { }
