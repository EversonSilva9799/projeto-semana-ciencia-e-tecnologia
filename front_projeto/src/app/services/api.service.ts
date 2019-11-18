import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	//private baseUrl: string = 'https://instagram-secitex.herokuapp.com';
	private baseUrl: string = 'http://10.208.1.59:3333';

	constructor() {}

	public getUrl() {
		return this.baseUrl;
	}
}
