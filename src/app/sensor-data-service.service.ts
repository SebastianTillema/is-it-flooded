import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorData } from './sensor-data';

@Injectable({
  providedIn: 'root'
})
export class SensorDataServiceService {
  private apiUrl = 'https://watsonc.admin.gc2.io/api/v2/sql/watsonc';

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<SensorData> {
    let params = new HttpParams().set('q', 'select to_json(ts_info) AS ts_info FROM sensor.latest_information_info_function(array[1523]) as liif');
    return this.http.get<SensorData>(this.apiUrl, { params });
  }
}
