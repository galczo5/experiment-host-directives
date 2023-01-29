import {Directive, Input, OnChanges, OnDestroy, Self, SimpleChanges} from '@angular/core';
import {UserListService} from "./user-list.service";
import {Subject, takeUntil} from "rxjs";
import {UsersService} from "./users.service";

@Directive({
  selector: '[appUserList]',
  standalone: true,
  providers: [
    UserListService
  ]
})
export class UserListDirective implements OnChanges, OnDestroy {

  @Input()
  filterValue = '';

  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private readonly usersService: UsersService,
    @Self() private readonly userListService: UserListService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterValue']) {
      this.getFilteredUsers();
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(void 0);
    this.onDestroy$.complete();
  }

  private getFilteredUsers(): void {
    this.usersService.getFilteredUsers(this.filterValue)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(users => this.userListService.setUsers(users));
  }
}
