import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-exercises-table',
  templateUrl: './exercises-table.component.html',
  styleUrls: ['./exercises-table.component.css'],
})
export class ExercisesTableComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  readSessionStorage: string | null = sessionStorage.getItem('exerciseDetails');
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'Name',
    'Exercise',
    'Date',
    'Description',
    'Edit',
    'Delete',
  ];
  subscription: Subscription;
  @Output() exerciseToAmmend: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(
    protected sessionStorageService: SessionStorageService,
    private sharedService: SharedService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.subscription = this.sharedService.listOfExercises.subscribe(
      (arrayOfExercises: any) => {
        this.dataSource.data = arrayOfExercises;
      }
    );
  }

  onClearSessionStorage() {
    this.sessionStorageService.removeAll();
  }

  onDeleteExercise(exerciseToDelete: any) {
    this.sharedService.deleteExercise(exerciseToDelete);
  }

  onEditExercise(exerciseToEdit: any) {
    this.router.navigate(['/exerciseslist/editExercise'], {
      state: exerciseToEdit,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
