import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { NaviComponent } from './components/navi/navi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { PersonAddComponent } from './components/person-add/person-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import {MatButtonModule} from '@angular/material/button';
import { FavoritePersonComponent } from './components/favorite-person/favorite-person.component';
import { BlockedPersonComponent } from './components/blocked-person/blocked-person.component';
import {MatTableModule} from '@angular/material/table';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BlockedComponent } from './components/blocked/blocked.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SortNamePipe } from './pipes/sort-name-pipe';







@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NaviComponent,
    FilterPipePipe,
    SortNamePipe,
    PersonAddComponent,
    PersonDeleteComponent,
    FavoritePersonComponent,
    BlockedPersonComponent,
    FavoritesComponent,
    BlockedComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSnackBarModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
