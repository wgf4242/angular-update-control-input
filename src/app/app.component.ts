import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  
  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl(new Date().toLocaleDateString())
    });
  }
}
