import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthDetails } from 'src/app/interfaces/auth-details';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css'],
})
export class EnterDetailsComponent implements OnInit {
  @Input() loginOrSignUp!: string;
  public oppositeLabel: string = '';
  public hide = true;
  public loading: boolean = false;
  subscription: Subscription;
  public duplicatedEmailError:string = '';
  public card= true

  constructor(private router: Router, private httpService: HttpService) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.buttonLabel();
    this.subscription = this.httpService.loading$.subscribe((loading) => {
      console.log(loading);
      console.log(this.loading, 'this.loading');
      this.loading = loading;
      console.log(this.loading, 'this.loading updated');
    });
  }

  buttonLabel() {
    this.loginOrSignUp === 'Login'
      ? (this.oppositeLabel = 'Sign up')
      : (this.oppositeLabel = 'Login');
  }

  switchMode() {
    if (this.loginOrSignUp === 'Login') {
      this.router.navigate([`/signup`]);
      return;
    }
    this.router.navigate([`/login`]);
  }

  onButtonClick() {
    this.loading = true;
    if (this.loginOrSignUp === 'Login') {
     this.httpService
      .sendDetails(
        {
          email: this.email.value,
          password: this.password.value,
        },
        'login'
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          this.loading = false;
          localStorage.setItem('accesstoken', response.accessToken);
          this.router.navigate([`/exerciseslist`]);
        },
        (error) => {
          this.duplicatedEmailError = error.error.message
          console.error(error);
          this.loading = false;
        }
      );
      return;
    }
    this.httpService
      .sendDetails(
        {
          email: this.email.value,
          password: this.password.value,
        },
        'signUp'
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          this.loading = false;
          localStorage.setItem('accesstoken', response.accessToken);
          this.router.navigate([`/exerciseslist`]);
        },
        (error) => {
          this.duplicatedEmailError = error.error.message
          console.error(error);
          this.loading = false;
        }
      );
  }
}
