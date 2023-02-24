import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () =>
      import('./create-exercise/create-exercise.module').then(
        (m) => m.CreateExerciseModule
      ),
      canActivate:[AuthGuard]
  },

  {
    path: 'exerciseslist',
    loadChildren: () =>
      import('./exercises-list/exercises-list.module').then(
        (m) => m.ExercisesListModule
      ),
  },
  {
    path: 'wikipedia',
    loadChildren: () =>
      import('./wikipedia/wikipedia.module').then((m) => m.wikipediaModule),
  },
  {
    path: 'creditcard',
    loadChildren: () =>
      import('./creditcard/creditcard.module').then((m) => m.CreditcardModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  { path: '', component: HomeComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
