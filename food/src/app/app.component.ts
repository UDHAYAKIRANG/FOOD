
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food';
}
