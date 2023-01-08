import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="selectedUser">
      <strong>
        User {{ selectedUser }} was selected
      </strong>
    </p>
    <p *ngIf="!selectedUser">
      Select user...
    </p>
  `
})
export class UserDetailsComponent {

  @Input()
  selectedUser = '';

}
