import { Component, OnInit } from '@angular/core';
import { ArtisansDataService } from '../../services/artisans-data.service';
import { Titreh2Component } from '../titres/titreh2/titreh2.component';
import { NgFor } from '@angular/common';
import { ArtisanDuMoisFilterPipe } from '../../pipes/artisan-du-mois-filter.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artisans-du-mois',
  standalone: true,
  imports: [Titreh2Component, NgFor, ArtisanDuMoisFilterPipe, RouterLink],
  templateUrl: './artisans-du-mois.component.html',
  styleUrl: './artisans-du-mois.component.scss',
})
export class ArtisansDuMoisComponent implements OnInit {
  artisans: any;

  constructor(private artisansDataService: ArtisansDataService) {}

  ngOnInit(): void {
    this.artisans = this.artisansDataService.artisanList;
  }
}
