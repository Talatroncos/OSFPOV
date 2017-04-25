import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'App Web!';
    // Variable que contiene la lista de pollos
    pollos: Array<any>;

    /**
     * Constructor de la clase. Aquí inyectamos los servicios de FireBase
     *
     * @param db - Servicio de acceso a la base de datos
     * @param auth - Servicio de autentificación
     */
    constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
        // Logeamos anonimamente
        this.auth.auth.signInAnonymously();
    }

    /**
     * Método llamado cuando la página está lista
     */
    ngOnInit() {
        // Buscamos la lista de pollos
        this.db.list("pollos")
        .subscribe(
            items => {
                // Asignamos a la variable el resultado de la busqueda
                this.pollos = items;
            }
        );
    }
}
