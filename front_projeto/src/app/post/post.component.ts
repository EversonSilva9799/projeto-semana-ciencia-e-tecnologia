import { Component } from "@angular/core";
import Postagem from "../models/Postagem";
import { ApiService } from "../services/api.service";
import { PostagemService } from "../services/postagem.service";
import { WebsocketService } from "../services/websocket.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent {
  public url: string;
  public postagens: Postagem[];
  public erro: boolean = false;
  public messagemErro: string;

  constructor(
    private postagemService: PostagemService,
    private apiService: ApiService,
    private webSocketService: WebsocketService
  ) {
    this.url = this.apiService.getUrl() + "/imagens";

    this.getPostagens();
    this.listeningPostagem();
    this.listenerPostagemRemovida();
  }

  public getPostagens() {
    this.postagemService.getPostagens().subscribe(data => {
      this.postagens = data;
    });
  }
  public deletePostagem(postagem: Postagem) {
    this.postagemService.DeletePostagem(postagem.id).subscribe(data => {
      if (!data.status) {
        this.messagemErro = "Não foi possível excluir";
        this.erro = true;

        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    });
  }

  public listeningPostagem() {
    this.webSocketService.listenerPostagem(postagem => {
      this.postagens = [postagem, ...this.postagens];
    });
  }

  public listenerPostagemRemovida() {
    this.webSocketService.listenerRemovePostagem(
      (postagemDeletar: Postagem) => {
        this.postagens.forEach((postagem, index) => {
          if (postagem.id === postagemDeletar.id) {
            this.postagens.splice(index, 1);
            return;
          }
        });
      }
    );
  }
}
