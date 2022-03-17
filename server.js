var http=require('http');
var port=8080;
var server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.write('Hello! World');
        res.end();
    }
    else
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>HTML Page</title>
        </head>
        <body>
            <h1>Hello! Welcome to our server!</h1>
        </body>
        </html>`);
        res.end();
    }

});
server.listen(port,() => {
    console.log(`Server running at 8080 port`);
});