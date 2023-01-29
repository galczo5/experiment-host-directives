import {Component, EventEmitter, Output, Self} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListService} from "./user-list.service";
import {ListComponent} from "../list/list.component";
import {PushModule} from "@rx-angular/template/push";
import {UserListDirective} from "./user-list.directive";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ListComponent, PushModule],
  template: `
    <app-list [items]="userListService.getUsers() | push"
              (itemSelected)="userSelected.emit($event)"></app-list>
  `,
  hostDirectives: [
    {
      directive: UserListDirective,
      inputs: ['filterValue']
    }
  ]
})
export class UserListComponent {

  @Output()
  userSelected = new EventEmitter<string>();

  constructor(
    @Self() readonly userListService: UserListService
  ) {
  }

}
