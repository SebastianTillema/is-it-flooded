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
    let params = new HttpParams().set('q', 'select%20%20%20%20%20%20%20%20%20%20%20liif.loc_id,%20%20%20%20%20%20%20%20%20%20to_json(ts_info%20||%20COALESCE(cli.criteria_level,%20%27[]%27::jsonb))%20AS%20ts_info%20%20%20%20%20%20%20%20%20%20FROM%20sensor.latest_information_info_function(array[1523])%20as%20liif%20%20%20%20%20%20%20%20%20%20LEFT%20JOIN%20sensor.criteria_level_info%20cli%20ON%20cli.loc_id%20=%20liif.loc_id;');
    return this.http.get<SensorData>(this.apiUrl, { params });
  }
}
