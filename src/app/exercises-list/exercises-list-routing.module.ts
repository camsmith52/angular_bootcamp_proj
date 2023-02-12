import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';

const routes: Routes = [{
  path: '', component: ExercisesTableComponent
},
{
  path: 'editExercise', component: EditExerciseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesListRoutingModule { }
