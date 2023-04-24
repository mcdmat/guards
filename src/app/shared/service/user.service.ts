import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role = ['anonymous', 'user','admin'];

  login(): Observable<boolean>  {
    return of(false).pipe( 
     delay(3000)
   );
  }
}
