import { Painting } from './painting';

export class Gallery {

    private _paintings: Painting[] = [];

    public get paintings(): Painting[] {
        return this._paintings;
    }
}
