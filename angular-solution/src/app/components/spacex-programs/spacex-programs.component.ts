import { Component, OnDestroy, OnInit } from '@angular/core';
import { Launch } from 'src/app/shared/models/launch';
import { first } from 'rxjs/operators';
import { SpacexService } from 'src/app/shared/services/spacex.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spacex-programs',
  templateUrl: './spacex-programs.component.html',
  styleUrls: ['./spacex-programs.component.css']
})
export class SpacexProgramsComponent implements OnInit, OnDestroy {

  launchData: any;
  private queryRef: Subscription = null;

  constructor(private spacexService: SpacexService) {
    this.launchData = [];
  }

  ngOnInit(): void {
    this.queryRef = this.spacexService.query$.subscribe((query) => {
      this.getLaunchData(query);
    });
  }

  ngOnDestroy(): void {
    this.queryRef.unsubscribe();
  }

  getLaunchData(query): void {
    this.spacexService.getLaunchData(query.year, query.launch, query.landing).pipe(first()).subscribe((launchData: Launch) => {
      this.launchData = launchData;
      console.log(this.launchData);
    });
  }
}
