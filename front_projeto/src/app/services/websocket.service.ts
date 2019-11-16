import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  private socket = io(this.apiService.getUrl());
  constructor(private apiService: ApiService) {}

  public listenerPostagem(callback) {
    this.socket.on("postagem", callback);
  }

  public listenerRemovePostagem(callback) {
    this.socket.on("postagemRemovida", callback);
  }
}
