import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SobremiComponent } from './components/private/sobremi/sobremi.component';
import { SignupComponent } from './components/private/signup/signup.component';
import { DetalleComponent } from './components/proyectos/detalle/detalle.component';
import { DetalleComponent as DetalleComponentBlog } from './components/blog/detalle/detalle.component';
import { DashboardComponent } from './components/proyectos/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/private/dashboard-admin/dashboard-admin.component';
import { WelcomeComponent } from './components/private/welcome/welcome.component';
import { CreateProyectosComponent } from './components/private/proyectos/create-proyectos/create-proyectos.component';
import { IndexProyectosComponent } from './components/private/proyectos/index-proyectos/index-proyectos.component';
import { GaleriaProyectComponent } from './components/private/proyectos/galeria-proyect/galeria-proyect.component';
import { TagsIndexComponent } from './components/private/tags/tags-index/tags-index.component';
import { TagsCreateComponent } from './components/private/tags/tags-create/tags-create.component';
import { IndexPostComponent } from './components/private/post/index-post/index-post.component';
import { CreatePostComponent } from './components/private/post/create-post/create-post.component';
import { DecripcionComponent } from './components/private/sobremi/desc/decripcion/decripcion.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexProyectoComponent } from './components/proyectos/index-proyecto/index-proyecto.component';
import { ProfileComponent } from './components/private/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  {
    path: 'proyectos', component: DashboardComponent,
    children: [
      { path: 'index', component: IndexProyectoComponent },
      { path: 'page/:page', component: IndexProyectoComponent },
      { path: 'verProyecto/:id/:nombre', component: DetalleComponent },

      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'admin', component: DashboardAdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'indexProyect', component: IndexProyectosComponent },
      { path: 'createProyect', component: CreateProyectosComponent },
      { path: 'editProyect/:id', component: CreateProyectosComponent },
      { path: 'galeriaProyect/:id', component: GaleriaProyectComponent },

      { path: 'indexTags', component: TagsIndexComponent },
      { path: 'createTags', component: TagsCreateComponent },
      { path: 'editTag/:id', component: TagsCreateComponent },

      { path: 'indexPost', component: IndexPostComponent },
      { path: 'createPost', component: CreatePostComponent },
      { path: 'editPost/:id', component: CreatePostComponent },

      { path: '', component: WelcomeComponent }
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/page/:page', component: BlogComponent },
  { path: 'blog/verPost/:id', component: DetalleComponentBlog },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {
    path: 'sobremi', component: SobremiComponent,
    children: [
      { path: '', component: DecripcionComponent },
    ]

  },
  { path: 'signup', component: SignupComponent },





];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
