import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css'],
})
export class CreateExerciseComponent implements OnInit {
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
    private router:Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      name: new FormControl('', Validators.required),
      typeOfExercise: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if(!this.exerciseForm.valid){
      return
    }
    const exerciseDetails = {
      id: crypto.getRandomValues(new Uint32Array(1))[0],
      name: this.exerciseForm.controls['name'].value,
      typeOfExercise: this.exerciseForm.controls['typeOfExercise'].value,
      date: this.exerciseForm.controls['date'].value,
      description: this.exerciseForm.controls['description'].value,
    };
    this.sharedService.updateExerciseList(exerciseDetails); //push exercise entered to service function
    this.sessionStorageService.setExercise(exerciseDetails);
    this.messageService.openSnackBar('Exercise added successfully!','Dismiss')
    this.router.navigate(['/exerciseslist'])
  }

  onReset() {}
}
