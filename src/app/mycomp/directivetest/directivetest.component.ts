import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.css']
})
export class DirectivetestComponent implements OnInit {
  students = [
      {name: 'north' , email: 'north@uva.edu', major: 'CS', year: 'second'},
      {name: 'nqk' , email: 'nqk@uva.edu', major: 'CS', year: 'third'},
      {name: 'nonny' , email: 'nonny@uva.edu', major: 'SWE', year: 'third'},
      {name: 'nan' , email: 'nan@uva.edu', major: 'SWE', year: 'second'}
    ];
  constructor(){}
  ngOnInit(): void {
  }

}
