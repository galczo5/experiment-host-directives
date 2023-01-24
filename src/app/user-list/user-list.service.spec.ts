import {UserListService} from "./user-list.service";
import {take} from "rxjs";

describe('user-list-service', function () {

  it('should pass the state', function (done) {
    const userListService = new UserListService();
    const expectedUsers = ['user1', 'user2'];

    userListService.getUsers()
      .pipe(take(1))
      .subscribe(users => {
        expect(expectedUsers).toEqual(users);
        done();
      });

    userListService.setUsers(expectedUsers)
  });

});
