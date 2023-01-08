import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  constructor() {
  }

  post<T>(data: T): Observable<T> {
    return of(data)
      .pipe(
        delay(Math.random() * 100)
      );
  }
}
