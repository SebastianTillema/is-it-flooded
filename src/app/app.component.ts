import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, NgIf, NgFor, JsonPipe } from '@angular/common';
import { SensorDataServiceService } from './sensor-data-service.service';
import { SensorData, getWaterLevel } from './sensor-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, NgIf, NgFor, JsonPipe]
})
export class AppComponent implements OnInit {
  waterlevel: number | undefined;
  flooded: boolean | undefined;

  constructor(private sensorService: SensorDataServiceService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data) => {
      this.waterlevel = getWaterLevel(data);
      this.flooded = this.waterlevel > 1.40;
    });
  }
}