import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {

  orderObj: any = {
    productName: "",
    color: "",
    category: "",
    price: null
  };

  addOrder() {
    console.log(this.orderObj);
    alert("Order Added Successfully!");
    // Reset form
    this.orderObj = {
      productName: "",
      color: "",
      category: "",
      price: null
    };
  }
}
