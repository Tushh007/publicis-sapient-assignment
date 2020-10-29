import { OribitParams } from './oribit-params';

export interface Payloads {
    payload_id: string;
    norad_id: [];
    reused: boolean;
    customers: [];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    oribit_params: OribitParams[];
}
