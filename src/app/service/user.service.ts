import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jsonUrl= environment.jsonUrl
  http = inject(HttpClient)

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.jsonUrl}./users`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}./users/${id}`);
  }


  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.jsonUrl}./users`, user);
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.jsonUrl}./users/${user.id}`,user)
  }


  deleteUser(id:string){
    return this.http.delete<User>(`${this.jsonUrl}./users/${id}`)
    }
}

