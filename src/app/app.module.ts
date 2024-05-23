import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CargarScritsService } from './services/cargar-scrits.service';



//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobremiComponent } from './components/private/sobremi/sobremi.component';
import { SignupComponent } from './components/private/signup/signup.component';
import { DetalleComponent as DetalleBlogComponent } from './components/blog/detalle/detalle.component';
import { DetalleComponent } from './components/proyectos/detalle/detalle.component';
import { DashboardComponent } from './components/proyectos/dashboard/dashboard.component';
import { AsideComponent } from './components/private/aside/aside.component';
import { DashboardAdminComponent } from './components/private/dashboard-admin/dashboard-admin.component';
import { WelcomeComponent } from './components/private/welcome/welcome.component';
import { IndexProyectosComponent } from './components/private/proyectos/index-proyectos/index-proyectos.component';
import { CreateProyectosComponent } from './components/private/proyectos/create-proyectos/create-proyectos.component';
import { DetalleProyectComponent } from './components/private/proyectos/detalle-proyect/detalle-proyect.component';
import { GaleriaProyectComponent } from './components/private/proyectos/galeria-proyect/galeria-proyect.component';
import { TagsIndexComponent } from './components/private/tags/tags-index/tags-index.component';
import { TagsCreateComponent } from './components/private/tags/tags-create/tags-create.component';
import { IndexPostComponent } from './components/private/post/index-post/index-post.component';
import { CreatePostComponent } from './components/private/post/create-post/create-post.component';
import { DecripcionComponent } from './components/private/sobremi/desc/decripcion/decripcion.component';
import { DetallePostComponent } from './components/private/post/detalle-post/detalle-post.component';
import { PaginatorComponent } from './components/proyectos/paginator/paginator.component';
import { PaginatorComponent as PaginatorComponentBlog } from './components/blog/paginator/paginator.component';
import { IndexProyectoComponent } from './components/proyectos/index-proyecto/index-proyecto.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { DetalleUserComponent } from './components/private/detalle-user/detalle-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    BlogComponent,
    ContactoComponent,
    NosotrosComponent,
    FooterComponent,
    SobremiComponent,
    SignupComponent,
    DetalleComponent,
    DashboardComponent,
    AsideComponent,
    DashboardAdminComponent,
    WelcomeComponent,
    IndexProyectosComponent,
    CreateProyectosComponent,
    DetalleProyectComponent,
    GaleriaProyectComponent,
    TagsIndexComponent,
    TagsCreateComponent,
    IndexPostComponent,
    CreatePostComponent,
    DecripcionComponent,
    DetallePostComponent,
    DetalleBlogComponent,
    PaginatorComponent,
    IndexProyectoComponent,
    PaginatorComponentBlog,
    ProfileComponent,
    DetalleUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTreeModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatRippleModule,
    CKEditorModule
  ],
  providers: [
    CargarScritsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
