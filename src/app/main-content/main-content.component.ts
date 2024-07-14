// src/app/main-content/main-content.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  searchTerm: string = '';

  onSearch() {
    console.log('Search term:', this.searchTerm);
    // Implement search functionality here
  }
}
