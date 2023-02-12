import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExerciseRoutingModule } from './create-exercise-routing.module';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CreateExerciseComponent],
  imports: [
    CommonModule,
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
})
export class CreateExerciseModule {}
