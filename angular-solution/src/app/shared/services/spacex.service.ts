import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private querySource = new BehaviorSubject<''>('');
  public query$ = this.querySource.asObservable();

  constructor(private http: HttpClient) { }

  updateQuery(query): void {
    this.querySource.next(JSON.parse(query));
  }

  getLaunchData(year, launch, landing): Observable<Launch> {
    let params = new HttpParams();
    if (year !== undefined) {
      params = params.append('launch_year', year);
    }

    if (launch !== undefined) {
      params = params.append('launch_success', launch);
    }

    if (landing !== undefined) {
      params = params.append('land_success', landing);
    }
    return this.http.get<Launch>(`${environment.apiUrl}/launches?limit=100`, {params});
  }

}
