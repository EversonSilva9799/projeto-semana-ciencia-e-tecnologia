import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	//private baseUrl: string = 'https://instagram-secitex.herokuapp.com';
	private baseUrl: string = 'http://192.168.0.2:3333';

	constructor() {}

	public getUrl() {
		return this.baseUrl;
	}
}
