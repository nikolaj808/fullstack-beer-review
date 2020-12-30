import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import ErrorHandler from './models/ErrorHandler';
import MasterRouter from './routers/MasterRouter';

dotenv.config({
    path: '.env',
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MasterRouter;
}

// Initialize server app
const server = new Server();

// Make server app handle any route starting with '/api'
server.app.use('/api', server.router);

// Make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message,
    });
});

// Make server listen on some port
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();