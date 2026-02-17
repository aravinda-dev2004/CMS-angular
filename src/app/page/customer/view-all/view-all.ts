import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all.html',
  styleUrl: './view-all.css',
})
export class ViewAll {
  customers = [
    { name: 'John Doe', city: 'New York', contact: '1234567890' },
    { name: 'Jane Smith', city: 'Los Angeles', contact: '9876543210' },
    { name: 'Mike Johnson', city: 'Chicago', contact: '5555555555' },
    { name: 'Sarah Wilson', city: 'Houston', contact: '1112223333' }
  ];
}
