import { Router } from 'express';
import BeerRouter from './beer/BeerRouter';
import BreweryRouter from './brewery/BreweryRouter';

class MasterRouter {
    private _router = Router();
    private _beerRouter = BeerRouter;
    private _breweryRouter = BreweryRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.use('/beer', this._beerRouter);
        this._router.use('/brewery', this._breweryRouter);
    }
}

export = new MasterRouter().router;