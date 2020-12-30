import { NextFunction, Request, Response, Router } from 'express';
import BeerController from '../../controllers/BeerController';

class BeerRouter {
    private _router = Router();
    private _controller = BeerController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try {
                res.status(200).json(this._controller.defaultMethod());
            }
            catch (error) {
                next(error);
            }
        });
    }
}

export = new BeerRouter().router;