import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css'],
})
export class EditExerciseComponent implements OnInit {
  @Input() exerciseToAmmend: any;

  exerciseForm: FormGroup;
  foods: any = [
    { value: 'running', viewValue: 'Running' },
    { value: 'swimming', viewValue: 'Swimming' },
    { value: 'cycling', viewValue: 'Cycling' },
  ];

  constructor(
    private fb: FormBuilder,
    protected sessionStorageService: SessionStorageService,
    private sharedService: SharedService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    console.log(history.state);

    this.exerciseForm = this.fb.group({
      name: new FormControl(history.state['name'], Validators.required),
      typeOfExercise: new FormControl(
        history.state['typeOfExercise'],
        Validators.required
      ),
      date: new FormControl(history.state['date'], Validators.required),
      description: new FormControl(
        history.state['description'],
        Validators.required
      ),
    });
  }

  onSubmit() {
    if(!this.exerciseForm.valid){
      return
    }
    const exerciseDetails = {
      id: history.state['id'],
      name: this.exerciseForm.controls['name'].value,
      typeOfExercise: this.exerciseForm.controls['typeOfExercise'].value,
      date: this.exerciseForm.controls['date'].value,
      description: this.exerciseForm.controls['description'].value,
    };
    this.sharedService.editExerciseList(exerciseDetails);
    this.sessionStorageService.setExercise(exerciseDetails);
    this.messageService.openSnackBar('Exercise updated successfully!','Dismiss')
    this.router.navigate(['/exerciseslist'])

  }

}
