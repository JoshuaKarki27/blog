// src/app/user.service.ts
import { Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbPath = '/users';
  usersRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }

  getAllUsers() {
    return this.usersRef;
  }

  getUser(user: string) {
    return this.db.object(`${this.dbPath}/${user}`);
  }

  addUser(user: User) {
    this.usersRef.push(user);
  }
}
