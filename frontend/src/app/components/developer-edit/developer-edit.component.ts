import { Employee } from '../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})

export class DeveloperEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeForm: Employee[];
  EmployeeShift:any = ['Manhã', 'Tarde', 'Noite']
  
  EmployeeHability:any = ['NodeJS', 'Angular', 'HTML', 'CSS', 'Banco de Dados']
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      linkedin: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      shift: ['', [Validators.required]],
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('shift').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        phoneNumber: data['phoneNumber'],
        linkedin: data['linkedin'],
        city: data['city'],
        state: data['state'],
        shift: data['shi'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      linkedin: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      shift: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Você tem certeza?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/employees-list');
            console.log('Dados alterado com sucesso!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}