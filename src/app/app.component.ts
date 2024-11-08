import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatButtonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  showButtons: boolean = true;

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.showButtons = false;
    this.router.navigate([page]);
  }

  onShowButtonsChange(show: boolean) {
    this.showButtons = show;
  }
}
