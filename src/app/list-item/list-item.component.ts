import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid black; padding: 5px 10px; margin-bottom: 5px; background: #efefef"
         (click)="clicked.emit(item)">
      {{ item }}
    </div>
  `,
  styles: []
})
export class ListItemComponent {

  @Input()
  item: string = '';

  @Output()
  clicked = new EventEmitter<string>();

}
