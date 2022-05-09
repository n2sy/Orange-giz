import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultOperateur = 'tt';
  show = false;
  constructor(
    private http: HttpClient,
    private loginSer: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.http
    //   .get('https://jsonplaceholdjhhvjhver.typicode.com/users')
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('Flux terminé');
    //     },
    //   });
  }

  toLogin(identifiants) {
    console.log(identifiants);

    this.loginSer.seConnecter(identifiants).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('orange_token', response['token']);

        this.router.navigateByUrl('/cv');
      },
      error: (error) => {
        this.show = true;
        console.log('Probleme authentification');
      },
    });
  }

  // showForm(f) {
  //   console.log(f.value);
  // }

  // resetForm(f) {
  //   f.reset();
  // }

  // randomPwd(f: NgForm) {
  //   f.setValue({
  //     login: '',
  //     password: 'random12345678',
  //     operateur: '',
  //   });
  // }

  // randomPwdII(f: NgForm) {
  //   f.form.patchValue({
  //     password: 'random12345678',
  //   });
  // }
}
