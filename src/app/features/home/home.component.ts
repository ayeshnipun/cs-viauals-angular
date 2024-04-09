import { Component } from '@angular/core';
import { Service } from '../../interfaces/home/service';
import { NgFor } from '@angular/common';
import { ServiceCardComponent } from '../../components/shared/service-card/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services: Service[] = [];

  ngOnInit() {
    const tempServicesFromApi: Service[] = [
      {
        name: 'Travel and Landscape Photography',
        imagePath: '../../../assets/images/logos/travel.png',
      },
      {
        name: 'Architecture Photography',
        imagePath: '../../../assets/images/logos/architect.png',
      },
      {
        name: 'Portrait Photography',
        imagePath: '../../../assets/images/logos/portrait.png',
      },
      {
        name: 'Ariel Photography and Videography',
        imagePath: '../../../assets/images/logos/ariel.png',
      },
    ];

    this.services = tempServicesFromApi;
  }
}
