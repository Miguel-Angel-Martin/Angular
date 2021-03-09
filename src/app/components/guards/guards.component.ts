import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css'],
})
export class GuardsComponent implements OnInit {
  constructor(private authService: AuthService, private _fb: FormBuilder) {}
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  ngOnInit(): void {
    this.form = this._fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const login: boolean = await this.authService.login(username, password);
        if (login === false) this.loginInvalid = true;
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
