import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { wikipediaRoutingModule } from './wikipedia-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { wikipediaWidgetComponent } from './wikipedia-widget/wikipedia-widget.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    wikipediaWidgetComponent,
    SearchBarComponent,
    PageListComponent,
  ],
  imports: [
    CommonModule,
    wikipediaRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [],
})
export class wikipediaModule {}
