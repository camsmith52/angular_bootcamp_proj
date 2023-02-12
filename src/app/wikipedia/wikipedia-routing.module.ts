import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { wikipediaWidgetComponent } from './wikipedia-widget/wikipedia-widget.component';
const routes: Routes = [
  {
    path: '',
    component: wikipediaWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class wikipediaRoutingModule {}
