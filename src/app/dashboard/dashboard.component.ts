import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  isSidebarVisible = true;

  constructor() {
    this.updateContent(); // Initial check on load
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:object) {
    this.updateContent();
  }

  updateContent() {
    const width = window.innerWidth;
    this.isSidebarVisible = width >= 768; // Determine visibility based on width
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }
}
