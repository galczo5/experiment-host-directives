import {UserListDirective} from "./user-list.directive";
import {UsersService} from "./users.service";
import {Observable, of, take} from "rxjs";
import {FakeHttpService} from "../fake-http.service";
import {UserListService} from "./user-list.service";

class MockUserService extends UsersService {
  constructor() {
    super(null as unknown as FakeHttpService);
  }

  override getFilteredUsers(filter: string): Observable<Array<string>> {
    return of(
      ['user1', 'user2', 'user3'].filter(x => x.includes(filter))
    );
  }
}

describe('user-list-directive', function () {

  it('should pass filtered users on filter change', function (done) {
    const userListService = new UserListService();
    const userListDirective = new UserListDirective(
      new MockUserService(),
      userListService
    );

    userListService.getUsers()
      .pipe(take(1))
      .subscribe(users => {
        expect(users).toEqual(['user1']);
        userListDirective.ngOnDestroy();
        done();
      });

    userListDirective.filterValue = '1';
    userListDirective.ngOnChanges({
      filterValue: {
        currentValue: '1',
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => true
      }
    });

  });

});
