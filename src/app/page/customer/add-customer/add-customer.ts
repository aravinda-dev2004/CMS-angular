import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css',
})
export class AddCustomer {

  customerObj: any = {
    name: "",
    city: "",
    contact: ""
  };

  addCustomer() {
    console.log(this.customerObj);
    alert("Customer Added Successfully!");
    // Reset form
    this.customerObj = {
      name: "",
      city: "",
      contact: ""
    };
  }
}
