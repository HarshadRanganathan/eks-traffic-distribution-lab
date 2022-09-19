const express = require('express');
const app = express();
const http = require('http')

var exec = require('child_process').exec;

var ip_val = "ip n/a";
exec("hostname -i", function(error, ip, stderr){ 
  ip_val = ip;
});

app.get('/', (req, res) => {
  metadataLookup(req,res);
});

function metadataLookup(req,res) {
  console.log('Received a request.');

  //http://169.254.169.254/latest/meta-data/placement/availability-zone
  const azOptions = {
    hostname: '169.254.169.254',
    port: 80,
    path: '/latest/meta-data/placement/availability-zone',
    method: 'GET'
  }

  const metaReq = http.request(azOptions, metaResp => {
    console.log(`statusCode: ${metaResp.statusCode}`)
  
    metaResp.on('data', az => {
       res.send("Pod IP: " + ip_val + "AZ: " + az + "\nForwarding Node IP: " + req.headers['x-forwarded-for']);
    })
  })
  
  metaReq.on('error', error => {
    console.error(error)
  })
  metaReq.end()
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  setTimeout(function() {
    console.log('Listening on port', port, ip_val);
  },2000);
});

