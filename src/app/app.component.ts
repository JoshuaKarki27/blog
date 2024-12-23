import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PathService } from './services/path.service'; // Import the shared service

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'blog';
  currPath: string = '';

  constructor(private router: Router, private pathService: PathService) {
    this.pathService.currPath$.subscribe((path) => (this.currPath = path));
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.pathService.updatePath(path);
  }
  
}
