import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ { path: '', component: HomeComponent }, { path: 'compartilhar', component: CameraComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
