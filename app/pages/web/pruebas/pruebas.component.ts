import { Component, OnInit } from '@angular/core';
import * as SHA256 from "crypto-js/sha256";

@Component({
    selector: 'osfpov-pruebas',
    templateUrl: './pruebas.component.html',
    styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
    texto: string;
    textoSHA: string;

    constructor() {
        this.texto = "";
    }
    
    ngOnInit() {
      
    }
    
    code() {
        this.textoSHA = SHA256(this.texto);
    }

}
