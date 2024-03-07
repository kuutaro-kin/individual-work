import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlacesPage implements OnInit {
  places: string[] = ['Black Sand Beach', 'Carnival', 'Cruise', 'Skii Resort'];

  constructor() { }

  ngOnInit() {
  }

}

