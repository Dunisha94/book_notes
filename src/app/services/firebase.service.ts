import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  books: Observable<any[]>;
  favoriteBooks: Observable<any>;
  unreadBooks: Observable<any>;

  constructor(private db:AngularFireDatabase) {
  }

   getBooks(){
     this.books = this.db.list('/books').valueChanges();
     return this.books;
   }

   getFavoriteBooks(){
     this.favoriteBooks = this.getBooks().map(books => {
       const topRatedBooks = books.filter(item => item.rate > 4);
       return topRatedBooks;
     });
     return this.favoriteBooks;
   }

   getUnreadBooks(){
    this.unreadBooks = this.getBooks().map(books => {
      const ub = books.filter(item => item.dateread == null);
      return ub;
    });
    return this.unreadBooks;
  }
}
