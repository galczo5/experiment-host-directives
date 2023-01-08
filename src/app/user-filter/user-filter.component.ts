import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #inputElement type="text" (keyup)="filterChanged.emit(inputElement.value)">
  `
})
export class UserFilterComponent {

  @Output()
  filterChanged = new EventEmitter<string>();

}
