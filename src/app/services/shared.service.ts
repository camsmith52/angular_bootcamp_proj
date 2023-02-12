import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { ExerciseDetails } from '../interfaces/exercise-details';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  exerciseArray: any = [];

  private variableSubject = new BehaviorSubject<any[]>([]);

  listOfExercises: any = this.variableSubject.asObservable();

  updateExerciseList(exerciseDetails: ExerciseDetails) {
    this.exerciseArray = [...this.exerciseArray, exerciseDetails];
    this.variableSubject.next(this.exerciseArray);
  }

  deleteExercise(exerciseToDelete: ExerciseDetails) {
    this.exerciseArray = this.exerciseArray.filter((ele: ExerciseDetails) => {
      return ele.id !== exerciseToDelete.id;
    });
    this.variableSubject.next(this.exerciseArray);
  }

  editExerciseList(exerciseToEdit: ExerciseDetails) {
    this.exerciseArray = this.exerciseArray.map(function (
      exercise: ExerciseDetails
    ) {
      if (exercise.id === exerciseToEdit.id) {
        return exerciseToEdit;
      }
      return exercise;
    });
    this.variableSubject.next(this.exerciseArray);
  }

  constructor() {}
}
