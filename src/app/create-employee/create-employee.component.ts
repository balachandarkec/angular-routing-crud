import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee :Employee=new Employee();
  submitted=false;

    constructor(private  employeeService:EmployeeService,  private router: Router) {
     
     }
   

     newEmployee():void{
     this.employee =new Employee();
       this.submitted=false;
     }
 

     gotoList(){
       this.router.navigate(['/employees']);
     }

     save(){
       this.employeeService.createEmployee(this.employee)
       .subscribe(data=>{console.log(data);
        this.employee=new Employee();

       this. gotoList();
      
      },
      error=>{
        console.log(error);
      }
      );
     }

     onSubmit(){
       this.submitted=true;
       this.save();
     }
   

  ngOnInit(): void {
    this.submitted=false;
  }

}
