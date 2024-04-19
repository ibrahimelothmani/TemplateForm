import { Component } from '@angular/core';
import { Etudiant } from './etudiant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  specialites = ['DSI', 'MDW', 'RSI'];
  etudiant = new Etudiant("Ibrahim", "ibrahim@gmail.com", "DSI")

  onSubmit() {
    console.log(this.etudiant)
  }
}
