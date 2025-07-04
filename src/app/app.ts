import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'formularios';
}
