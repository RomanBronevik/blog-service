export function responseCode(code: number, data?: object){
    return JSON.stringify({
        code,
        data   
    });
}