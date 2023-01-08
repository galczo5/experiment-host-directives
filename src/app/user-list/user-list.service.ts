import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";

@Injectable()
export class UserListService {

  private readonly users$ = new ReplaySubject<Array<string>>(1);

  setUsers(users: Array<string>): void {
    this.users$.next(users);
  }

  getUsers(): Observable<Array<string>> {
    return this.users$.asObservable();
  }

}
