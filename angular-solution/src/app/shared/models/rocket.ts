import { Fairings } from './fairings';
import { FirstStage } from './first-stage';
import { SecondStage } from './second-stage';

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage[];
    second_stage: SecondStage[];
    fairings: Fairings[];
}
