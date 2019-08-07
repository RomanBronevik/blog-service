

export function logger(req: Request, res: Request, next: Function){
        console.log('request..');
        next();
}