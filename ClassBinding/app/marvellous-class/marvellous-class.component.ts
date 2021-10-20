import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-class',
  template: `<!--By using class attributes we can use class from css file-->

  <h1 class="success">
  Marvellous Infosystems
  </h1>
  
  <h1 class="Failure">
  Pune University
  </h1>
  
  <!--We can also use like proerty binding for the class-->
  <!-- in .ts file there should be attribute named as MyClass-->
  <h1 [class]="MyClass">
    Educating for better tomorrow..
  </h1>
  
  
  <!-- We can set class property depending upon the condition-->
  <h1 [class.success]="IsSet">
    Piyush Khairnar
  </h1>
  
  
  `,
  // style: ['./marvellous-class.component.css']
  
})
export class MarvellousClassComponent implements OnInit 
{
  public MyClass="success";

  public IsSet = true;



  constructor() { }

  ngOnInit() {
  }

}
