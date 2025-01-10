import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  height = 10; // Dynamic height value

  constructor(private sensorService: SensorDataServiceService, private sanitizer: DomSanitizer) {
  }
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(`--height: ${this.height}%`);
  }
  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data) => {
      this.waterlevel = getWaterLevel(data);
      this.flooded = this.waterlevel > 1.40;
      this.height = 90
    });
  }

  inc() {
    this.height -= 10;
  }

}