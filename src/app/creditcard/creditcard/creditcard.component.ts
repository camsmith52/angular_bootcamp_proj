import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { CreditCardPipe } from 'src/app/pipes/credit-card.pipe';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  @Input() deviceXs: boolean;
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(19),
      Validators.maxLength(19),
      // Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/)
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    if (!this.cardForm.valid) {
      return;
    }
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        name: this.cardForm.controls.name.value,
        cardNumber: this.cardForm.controls.cardNumber.value,
        expiration: this.cardForm.controls.expiration.value,
        securityCode: this.cardForm.controls.securityCode.value,
        header:'Do you want to submit for payment?',
        message: 'Are all the details correct?'
      },
      width: '550px',
      height: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`${result}`);
    });
  }

  ngOnInit(): void {}

  onSubmit() {
   
    //send to backend
  }

  onResetClick() {
    this.cardForm.reset();
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }
}
