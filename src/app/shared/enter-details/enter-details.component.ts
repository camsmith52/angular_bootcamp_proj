import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthDetails } from 'src/app/interfaces/auth-details';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css'],
})
export class EnterDetailsComponent implements OnInit, OnDestroy {
  @Input() loginOrSignUp!: string;
  public oppositeLabel: string = '';
  public hide = true;
  public loading: boolean = false;
  public message:string = '';
  public card= true


  constructor(private router: Router, private httpService: HttpService,private messageService: MessageService, private authService: AuthService) {}




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
    this.httpService.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
    this.httpService.message$.subscribe((message)=>{
      this.message = message;
    })
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

          console.log('i got hit');
          localStorage.setItem('accesstoken', response.accessToken);
          this.authService.isLoggedIn()
          this.messageService.openSnackBar('Successfully logged in','Dismiss')
          this.router.navigate([`/exerciseslist`]);
        },
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
          console.log(response, 'i got hit');
          // this.loading = false;
          localStorage.setItem('accesstoken', response.accessToken);
          this.router.navigate([`/exerciseslist`]);
        },
      );
  }

   ngOnDestroy(): void {
    console.log('ondestroy running')
    // throw new Error('Method not implemented.');
  }

}
