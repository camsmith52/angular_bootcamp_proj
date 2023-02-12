import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  finalize,
  map,
  retry,
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public isLoading = new BehaviorSubject<boolean>(false);
  loading$ = this.isLoading.asObservable();

  constructor(private httpClient: HttpClient) {}

  search(term:string){
    return this.httpClient.get('https://en.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin:'*'
      }
    }).pipe(
      retry(2),
      map((response: any) => {return response.query.search}),
      finalize(() => {
        console.log('Sequence complete');
        
      }
    ))
  }

  sendDetails(
    apiEndPoint: string,
    email: string | null,
    password: string | null
  ) {
    
  
    this.httpClient
      .post(`${environment.nodeDevBaseUrl}/${apiEndPoint}`, {
        email,
        password,
      })
      .pipe(
        retry(2),
        map((response: any) => response.email),
        finalize(() => {
          console.log('Sequence complete');
          this.isLoading.next(false);
        }
      ))
      .subscribe(
        (email: string) => {
          console.log(email);
          this.isLoading.next(false);
        },
        (error) => {
          console.error(error);
          this.isLoading.next(false);
        }
      );
  }
  

  getDetails(
    apiEndPoint: string,
    email: string | null,
    password: string | null
  ) {
    this.isLoading.next(true);
  
    this.httpClient
      .get(`${environment.nodeDevBaseUrl}/${apiEndPoint}`)
      .pipe(
        retry(3),
        map((response: any) => response.email),
        finalize(() => {
          console.log('Sequence complete');
          this.isLoading.next(false);
        })
      )
      .subscribe((email: string) => {
        console.log(email);
      },
      (error) => {
        console.error(error);
        this.isLoading.next(false);
      });
  }
}
