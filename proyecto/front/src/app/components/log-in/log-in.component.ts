import { Component, ViewChild, ElementRef } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from "@angular/forms"
import { UsersService } from 'src/app/services/usuarios.services';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    @ViewChild('ElementoLogIn') MyLogIn!:ElementRef

    FormLogIn!: FormGroup
    regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    constructor(private fb:FormBuilder, private _userService:UsersService){
        this.FormLogIn = this.fb.group({
            Email :['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            Password: ['',[Validators.required, Validators.pattern(/.*/)]]
        })
    }
}
