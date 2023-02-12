import { Component, OnInit } from '@angular/core';
import { IWikipediaResponse } from 'src/app/interfaces/responses/i-wikipedia-response';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-wikipedia-widget',
  templateUrl: './wikipedia-widget.component.html',
  styleUrls: ['./wikipedia-widget.component.css'],
})
export class wikipediaWidgetComponent implements OnInit {
  pages:any = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onTerm(term: string) {
    this.httpService.search(term).subscribe((response: IWikipediaResponse) => {
      this.pages = response;
    });
  }
}
