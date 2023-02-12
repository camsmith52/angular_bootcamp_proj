import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesListRoutingModule } from './exercises-list-routing.module';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableDataSource} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CreateExerciseRoutingModule } from '../create-exercise/create-exercise-routing.module';

@NgModule({
  declarations: [
    ExercisesTableComponent,
    EditExerciseComponent
  ],
  imports: [
    CommonModule,
    ExercisesListRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    CreateExerciseRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    
    
  ],
  exports:[]
})
export class ExercisesListModule { }
