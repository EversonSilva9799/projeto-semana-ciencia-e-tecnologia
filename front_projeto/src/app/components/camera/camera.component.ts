import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemService } from '../../services/postagem.service';

@Component({
	selector: 'app-camera',
	templateUrl: './camera.component.html',
	styleUrls: [ './camera.component.css' ]
})
export class CameraComponent implements OnInit {
	public autor: string;
	public legenda: string;
	public imagem: any;
	public initPreview: boolean = false;
	@ViewChild('inputFile', { static: false })
	inputFile: ElementRef;

	@ViewChild('imagemHTML', { static: false })
	imagemHTML: ElementRef;

	@ViewChild('descricao', { static: false })
	descricao: ElementRef;

	constructor(private postagemService: PostagemService, private router: Router) {}

	ngOnInit() {}

	public tirarFoto() {
		this.inputFile.nativeElement.onchange = (event) => {
			this.initPreview = true;
			this.imagem = event.target.files[0];
			this.imagemHTML.nativeElement.src = URL.createObjectURL(this.imagem);
			this.initPreview = false;
		};
	}

	public cancelar() {
		this.imagem = undefined;
		this.inputFile.nativeElement.value = '';
		this.descricao.nativeElement.value = '';
	}

	public publicar() {
		const dataSend = new FormData();
		const hashtags = this.legenda.match(/#\w+/gim);

		if (this.autor && this.legenda) {
			this.autor = this.autor.toLocaleLowerCase().replace(/\s/g, '');

			dataSend.append('imagem', this.imagem);
			dataSend.append('autor', this.autor);
			dataSend.append('legenda', this.legenda);

			this.postagemService.cadastrar(dataSend).subscribe((data) => {
				this.router.navigate([ '' ]);
			});
		}
	}
}
