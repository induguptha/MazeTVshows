import { environment } from './environments/environment';

export default class Constants {
    static BASE_URL: string = environment.BASE_URL;
    static SHOWS_API: string = Constants.BASE_URL +'/shows';
}