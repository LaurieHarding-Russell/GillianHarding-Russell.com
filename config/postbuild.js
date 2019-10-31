var fs = require('fs');

fs.createReadStream('docs/index.html').pipe(fs.createWriteStream('docs/404.html'));
fs.writeFile("docs/CNAME", "gillianharding-russell.ca",
    function(err) {

        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }
); 