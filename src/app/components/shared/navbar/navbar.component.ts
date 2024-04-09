import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scrolled: boolean = false;
  showDropdown: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const isScrolled = window.scrollY > 50;
    this.scrolled = isScrolled;
  }

  getAdditionalClass() {
    return this.scrolled ? 'bg-gray-600 bg-opacity-75' : 'bg-gray-600';
  }

  handleDropDownState(show: boolean) {
    this.showDropdown = show;
  }
}
