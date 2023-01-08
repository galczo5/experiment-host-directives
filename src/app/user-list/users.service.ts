import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {FakeHttpService} from "../fake-http.service";

const USERS = [
  'Bradley Tapia',
  'Harriett Dawson',
  'Jorge Adkins',
  'Zak Jenkins',
  'Ryan Nguyen',
  'Rhodri Kidd',
  'Thalia Willis',
  'Maisey Macias',
  'Caitlin Goodwin',
  'Shawn Ryan',
  'Josef Gallegos',
  'Kaan Barker',
  'Ruben Haynes',
  'Matthew Andrews',
  'Sharon Glenn',
  'Saffron Haas',
  'Teresa Knowles',
  'Kaiden Silva',
  'Jacqueline Hopkins',
  'Jazmine Mcgee',
  'Jane Leonard',
  'Willie Huber',
  'Lori Dunn',
  'Yasmin Stuart',
  'Luqman Knight'
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly fakeHttpService: FakeHttpService
  ) {
  }

  getFilteredUsers(filter: string): Observable<Array<string>> {
    return this.fakeHttpService.post(USERS)
      .pipe(
        map(users => users.filter(u => u.includes(filter)))
      );
  }
}
