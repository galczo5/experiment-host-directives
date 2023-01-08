import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      style="display: grid; grid-template-columns: repeat(2, 1fr); width: 800px; border: 1px solid gray; padding: 10px; margin: 0 auto; gap: 50px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <strong>List</strong>
        <app-user-filter (filterChanged)="setFilter($event)"></app-user-filter>
        <app-user-list [filterValue]="filter"
                       (userSelected)="setSelectedUser($event)"></app-user-list>
      </div>
      <div style="display: flex; flex-direction: column;">
        <strong>Details</strong>
        <app-user-details [selectedUser]="selectedUser"></app-user-details>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filter = '';

  selectedUser = '';

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  setFilter(newFilter: string): void {
    this.filter = newFilter;
    this.changeDetectorRef.detectChanges();
  }

  setSelectedUser(newSelectedUser: string): void {
    this.selectedUser = newSelectedUser;
    this.changeDetectorRef.detectChanges();
  }

}
