import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/shared/services/spacex.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  year: number;
  launch: boolean;
  landing: boolean;
  query: any;

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
  }

  onYear(value): void {
    this.year = value;
    this.submit();
  }

  onLaunch(value): void {
    this.launch = value;
    this.submit();
  }

  onLanding(value): void {
    this.landing = value;
    this.submit();
  }

  onReset(): void {
    this.year = undefined;
    this.landing = undefined;
    this.launch = undefined;
    this.submit();
  }

  submit(): void {
    this.query = {
      year: this.year,
      launch: this.launch,
      landing: this.landing
    }
    this.spacexService.updateQuery(JSON.stringify(this.query));
  }
}
