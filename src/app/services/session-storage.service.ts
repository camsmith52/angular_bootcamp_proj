import { Injectable } from '@angular/core';
import { ExerciseDetails } from '../interfaces/exercise-details';
import { PaymentDetails } from '../interfaces/payment-details';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  public array: any[] = [];

  setExercise(exerciseDetails: ExerciseDetails) {
    const exercise = JSON.stringify(exerciseDetails);
    sessionStorage.setItem('exerciseDetails', exercise);
  }

  getExercise(): string[] | null {
    const exercises = sessionStorage.getItem('exerciseDetails');
    if (!exercises) {
      return this.array;
    }
    return JSON.parse(exercises);
  }

  public setPaymentDetails(paymentDetails: PaymentDetails){
    const paymentPersonDetails = JSON.stringify(paymentDetails);
    sessionStorage.setItem('paymentDetails', paymentPersonDetails);
  }

  public getPaymentDetails(key: string): PaymentDetails{
    const result = JSON.parse(sessionStorage.getItem(key) || '{}');
    return result;
  }

  public removePaymentDetails(){
    sessionStorage.removeItem('paymentDetails');
  }

  public setHttpLoggingDetails(url: any, headers:any,body:any){
    const loggingDetails = JSON.stringify({url, headers, body});
    sessionStorage.setItem('loggingDetails', loggingDetails);
  }

  removeAll() {
    sessionStorage.clear();
  }

  constructor() {}
}
