import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'AddPatient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  private submissionForm!: AngularFirestoreCollection<any>;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {}

  myForm!: FormGroup;

  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('submissionForm');
    this.myForm = this.fb.group({
      Name: ['', Validators.required],
      DOB: ['', Validators.required],
      Gender: ['Male', Validators.required],
      POB: ['', Validators.required],
      BloodGroup: ['', Validators.required],
      Height: ['', Validators.required],
      Weight: ['', Validators.required],
    });
  }

  submitData(value: any) {
    this.submissionForm
      .add(value)
      .then((res) => {
        console.log("data added",res);
      })
      .catch((err) => console.log(err));
  }
}
