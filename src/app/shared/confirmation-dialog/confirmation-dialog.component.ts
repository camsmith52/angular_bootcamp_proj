import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentDetails } from 'src/app/interfaces/payment-details';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent implements OnInit {
  personPaymentDetails: PaymentDetails;
  header: string |undefined= ''
  message:string|undefined=''
  constructor(@Inject(MAT_DIALOG_DATA) public data: PaymentDetails, protected sessionStorageService:SessionStorageService) {}

  ngOnInit(): void {
    this.header = this.data.header
    this.message = this.data.message
    this.personPaymentDetails = {
      name: this.data.name,
      expiration: this.data.expiration,
      securityCode: this.data.securityCode,
      cardNumber: this.data.cardNumber,
    };
  }

  onSubmit() {
    this.sessionStorageService.setPaymentDetails(this.personPaymentDetails)
    // sessionStorage.setItem('Payment details', JSON.stringify(this.personPaymentDetails));
  }
}
