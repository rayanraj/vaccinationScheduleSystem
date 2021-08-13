import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.css']
})

export class VaccinationsComponent implements OnInit {
  data!: any[];
  constructor(private firestore: AngularFirestore) { }

  items!: Observable<any[]>;

  ngOnInit(): void {
    this.items = this.firestore.collection('submissionForm').valueChanges();
    var cc = this.items.subscribe(items => {
      console.log(items);
      this.data=items;
    })
    
  }

}

