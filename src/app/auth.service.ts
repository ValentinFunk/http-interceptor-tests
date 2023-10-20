import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtToken = 'some-token';

  refreshJwtToken(): Observable<string | null> {
    return of(this.jwtToken);
  }
}
