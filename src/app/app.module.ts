import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//Forms
import { FormsModule } from '@angular/forms';

//Meterial design modules
import { MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule, 
  MatGridListModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule, 
  MatProgressSpinnerModule, 
  MatTabsModule, 
  MatListModule, 
  MatIconModule } from '@angular/material';

//Routes
import { RouterModule , Routes } from '@angular/router';

//firebase configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//service
import { FirebaseService } from './services/firebase.service';



const appRoutes:Routes = [
{path:'',component:HomeComponent},
{path:'books',component:BooksComponent},
{path:'book/:id',component:BookComponent},
{path:'add-book',component:AddBookComponent},
{path:'edit-book/:id',component:EditBookComponent},
{path:'delete-book/:id',component:DeleteBookComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,MatButtonModule,
    MatCheckboxModule, 
    MatCardModule, 
    MatGridListModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    MatTabsModule, 
    MatListModule, 
    MatIconModule, 
    AngularFireModule.initializeApp(environment.firebase, 'book-notes-app'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
