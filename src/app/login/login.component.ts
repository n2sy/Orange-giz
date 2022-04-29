import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultOperateur = 'tt';
  constructor() {}

  ngOnInit(): void {}

  showForm(f) {
    console.log(f.value);
  }

  resetForm(f) {
    f.reset();
  }

  randomPwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'random12345678',
      operateur: '',
    });
  }

  randomPwdII(f: NgForm) {
    f.form.patchValue({
      password: 'random12345678',
    });
  }
}
