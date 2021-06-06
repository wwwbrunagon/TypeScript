import { createServer, IncomingMessage, ServerResponse } from 'http';

export class Server {

    public createServer() {
        createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                console.log('req.url: ' + req.url);
                console.log('req.method: '
                    + req.method);
                res.end();
            }
        ).listen(8080);
        console.log('server started')
    }
}