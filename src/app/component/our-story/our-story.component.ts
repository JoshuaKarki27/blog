import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PathService } from '../../services/path.service'; // Import the shared service

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.css',
})
export class OurStoryComponent {
  constructor(private router: Router, private pathService: PathService) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.pathService.updatePath(''); // Clear the shared path
  }

}
