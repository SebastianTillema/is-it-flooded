import { Component, OnInit } from '@angular/core';
import { SensorDataServiceService } from './sensor-data-service.service';
import { getWaterLevel } from './sensor-data';
import { WaveBackgroundComponent } from "../wave-background/wave-background.component";
import { MeterToCentimeter } from "../pipe/meter-to-centimeter.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [WaveBackgroundComponent, MeterToCentimeter]
})
export class AppComponent implements OnInit {
  waterlevel: number | undefined;
  pathlevel: number = 1.40;
  flooded: boolean | undefined;

  constructor(private sensorService: SensorDataServiceService) {
  }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data) => {
      this.waterlevel = getWaterLevel(data);
      this.flooded = this.waterlevel > this.pathlevel;
    });
  }
}