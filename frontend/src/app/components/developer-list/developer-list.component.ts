import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  // styleUrls: ['./developer-list.component.css']
})

export class DeveloperListComponent implements OnInit {
  
  Employee:any = [];

  constructor(private apiService: ApiService) { 
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  removeEmployee(employee, index) {
    if(window.confirm('Você tem certeza?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

}