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
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import { UserServiceService } from '../../service/user-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, RouterLink, MatRadioModule, CommonModule, MatSnackBarModule, ReactiveFormsModule, MatSelectModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  matcher = new MyErrorStateMatcher();
  private _snackBar = inject(MatSnackBar);
  private _userservice = inject(UserServiceService);
  private _router = inject(Router);
  isSubmit: boolean = false;
  registerForm = new FormGroup({
   username: new FormControl('',Validators.required),
   email: new FormControl('',[Validators.required, Validators.email]),
   password: new FormControl('', [Validators.required, Validators.minLength(4)]),
   userRole: new FormControl('admin')
  })

  registerSubmit(){
   if (this.registerForm.valid) {
    this.isSubmit = true;
    const payload = this.registerForm.value;
    this._userservice.registerservice(payload);
    setTimeout(()=> {
        this._snackBar.open('User Register Successful', 'Okay');
        this.isSubmit = false;
        this.registerForm.reset();
        this._router.navigate(['login']);
    }, 3000)
   }
  }

  get registerFormControl(): {[key: string]: AbstractControl} {
      return this.registerForm.controls;
   }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  }
