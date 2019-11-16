import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';

@NgModule({
	declarations: [ AppComponent, HomeComponent, MenuComponent, CameraComponent, PostComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
