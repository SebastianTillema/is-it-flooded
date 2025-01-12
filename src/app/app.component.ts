import { Component, OnInit } from '@angular/core';
import { SensorDataServiceService } from './sensor-data-service.service';
import { getWaterLevel } from './sensor-data';
import { WaveBackgroundComponent } from "../wave-background/wave-background.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [WaveBackgroundComponent]
})
export class AppComponent implements OnInit {
  waterlevel: number | undefined;
  flooded: boolean | undefined;

  constructor(private sensorService: SensorDataServiceService) {
  }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data) => {
      this.waterlevel = getWaterLevel(data);
      this.flooded = this.waterlevel > 1.40;
    });
  }
}