import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Postagem from '../components/models/Postagem';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class PostagemService {
	constructor(private http: HttpClient, private apiService: ApiService) {
		this.BaseUrl = this.apiService.getUrl();
		this.BaseUrl = this.BaseUrl + '/api';
	}
	private BaseUrl: string;

	public getPostagens(): Observable<Postagem[]> {
		return this.http.get<Postagem[]>(`${this.BaseUrl}/postagens`);
	}

	public cadastrar(postagem): Observable<any> {
		return this.http.post<any>(`${this.BaseUrl}/postagens`, postagem);
	}

	public DeletePostagem(id: number): Observable<any> {
		return this.http.delete<any>(`${this.BaseUrl}/postagens/${id}`);
	}
}
