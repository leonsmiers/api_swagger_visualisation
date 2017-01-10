/*
This node scripts supports showing API files in the Swagger UI with proper CORS support.
When Swagger is opened and you try to use an API reference like http://docs.oracle.com/cloud/latest/process_gs/CPRRA/swagger.json
the following error is shown in Swagger
"Can't read from server. It may not have the appropriate access-control-origin settings."
The reason for that is that Swagger requires CORS.
This NodeJS application adds CORS and provides a directory (public) where the API JSON specs can be placed.

1.Download the specific Product Swagger API json file (for instance API-Product.json) and this files in the folder swagger-api
2.Start this file with node index.js
3.Open the Swagger UI (Download from http://swagger.io/tools/) in
Open a browser and open the file [Swagger UI location]/dist/index.html and place the CORS enabled URL in the Swagger Explore line.
http://localhost:8081/API-Product.json

--------
Checking that CORS works can be done as follows
See also https://github.com/swagger-api/swagger-ui/issues/146
BEFORE applying CORS functionality
MacBook-Pro-van-LeonSmiers:~ leonsmiers$ curl -i http://localhost:8081/test.txt
HTTP/1.1 200 OK
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Fri, 16 Sep 2016 17:54:48 GMT
ETag: W/"4-1573422f240"
Content-Type: text/plain; charset=UTF-8
Content-Length: 4
Date: Sat, 17 Sep 2016 20:18:45 GMT
Connection: keep-alive

AFTER APPLYING CORS
MacBook-Pro-van-LeonSmiers:~ leonsmiers$ curl -i http://localhost:8081/test.txt
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Fri, 16 Sep 2016 17:54:48 GMT
ETag: W/"4-1573422f240"
Content-Type: text/plain; charset=UTF-8
Content-Length: 4
Date: Sat, 17 Sep 2016 20:18:54 GMT
Connection: keep-alive

*/

//This node file is based upon express
var express = require('express');
var app = express();

/*Enable CORS in express
See also
http://enable-cors.org/server_expressjs.html
http://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
/*
Here the static json files placed in the public directory are available in the URL call http://localhost:8081/static-file
see also https://expressjs.com/en/starter/static-files.html
*/
app.use(express.static('public'));

//Part of the CORS enablement functionality, handle get requests
app.get('/', function(req, res, next) {
  // Handle the get for this route
   res.send('Hoi');
   res.send('Making Swagger UI work.all APIs are placed in the public folder and ');
});

//Part of the CORS enablement functionality, handle post requests
app.post('/', function(req, res, next) {
 // Handle the post for this route
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log(`Making Swagger UI work, running at `,host , port)

})
