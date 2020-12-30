import ErrorHandler from "../models/ErrorHandler";

class BeerController {
    defaultMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
    }
}

export = new BeerController();