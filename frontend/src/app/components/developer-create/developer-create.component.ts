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
  EmployeeShift: any = ['Manhã', 'Tarde', 'Noite']
  EmployeeHability: any = ['0', '1', '2', '3', '4', '5']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      linkedin: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      shift: ['', [Validators.required]],
      habilityNode: ['', [Validators.required]],
      habilityAngular: ['', [Validators.required]],
      habilityHTML: ['', [Validators.required]],
      habilityCSS: ['', [Validators.required]],
      habilityBD: ['', [Validators.required]],
    })
  }

  // Choose shift with select dropdown
  updateProfile(e) {
    this.employeeForm.get('shift').setValue(e, {
      onlySelf: true
    })
  }

  // Choose habilityNode with select dropdown
  updateNode(e) {
    this.employeeForm.get('habilityNode').setValue(e, {
      onlySelf: true
    })
  }
  // Choose habilityAngular with select dropdown
  updateAngular(e) {
    this.employeeForm.get('habilityAngular').setValue(e, {
      onlySelf: true
    })
  }
  // Choose habilityHTML with select dropdown
  updateHTML(e) {
    this.employeeForm.get('habilityHTML').setValue(e, {
      onlySelf: true
    })
  }
  // Choose habilityCSS with select dropdown
  updateCSS(e) {
    this.employeeForm.get('habilityCSS').setValue(e, {
      onlySelf: true
    })
  }
   // Choose habilityBD with select dropdown
  updateBD(e) {
    this.employeeForm.get('habilityBD').setValue(e, {
      onlySelf: true
    })
  }
  // Getter to access form control
  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          alert('Programador cadastrado com sucesso!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
