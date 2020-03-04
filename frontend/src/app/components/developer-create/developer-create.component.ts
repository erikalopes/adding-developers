import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})

export class DeveloperCreateComponent implements OnInit {  
  submitted = false;
  employeeForm: FormGroup;
  EmployeeShift:any = ['Manhã', 'Tarde', 'Noite']
  
  EmployeeHability:any = ['NodeJS', 'Angular', 'HTML', 'CSS', 'Banco de Dados']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }
// name: string;
// email: string;
// phoneNumber: number;
// linkedin: string;
// city: string;
// state: string;
// shift: string;
// hability: string;
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      linkedin: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      shift: ['', [Validators.required]],
    })
  }

  // Choose shift with select dropdown
  updateProfile(e){
    this.employeeForm.get('shift').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Programador cadastrado com sucesso!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
