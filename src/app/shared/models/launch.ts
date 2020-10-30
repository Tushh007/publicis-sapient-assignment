import { LaunchFailureDetails } from './launch-failure-details';
import { LaunchSite } from './launch-site';
import { Links } from './links';
import { Rocket } from './rocket';
import { Telementry } from './telementry';
import { Timeline } from './timeline';

export interface Launch {
    flight_number: number;
    mission_name: string;
    mission_id: [];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: Rocket[];
    ships: [];
    telementry: Telementry[];
    launch_site: LaunchSite[];
    launch_success: boolean;
    launch_failure_details: LaunchFailureDetails[];
    links: Links[];
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: Timeline[];
    crew: string;
}
