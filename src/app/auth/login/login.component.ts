import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from '../../service/user-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, RouterLink, CommonModule, ReactiveFormsModule, MatSelectModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 matcher = new MyErrorStateMatcher();
 private _snackBar = inject(MatSnackBar);
 private _userservice = inject(UserServiceService);
 private _router = inject(Router);
 isSubmit:boolean = false;
 loginForm = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(4)])
 })

 loginSubmit(){
  if (this.loginForm.valid) {
    // Handle form submission here
    const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    this.isSubmit = true;
    const payload = this.loginForm.value;
    console.log(payload);
    const response:any = this._userservice.loginService(payload);
    setTimeout(()=> {
      if(response){
        console.log(response);
        localStorage.setItem('userRole', response.userRole);
        localStorage.setItem('jwtToken', sampleToken);
        this.isSubmit = false;
        this.loginForm.reset();
        this._userservice.setUserId();
        this._router.navigateByUrl('/dashboard');
      } else {
        this._snackBar.open('Invalid Credentials', 'Error');
        this.isSubmit = false;
        this.loginForm.reset();
      }
    }, 2000)

 }
}

 get loginFormControl(): {[key: string]: AbstractControl} {
     return this.loginForm.controls;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
