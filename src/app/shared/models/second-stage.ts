import { Payloads } from './payloads';

export interface SecondStage {
    block: number;
    payloads: Payloads[];
}
