import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  template: `
    <app-list-item *ngFor="let item of items"
                   [item]="item"
                   (clicked)="itemSelected.emit(item)"></app-list-item>
  `
})
export class ListComponent {

  @Input()
  items: Array<string> = [];

  @Output()
  itemSelected = new EventEmitter<string>();

}
