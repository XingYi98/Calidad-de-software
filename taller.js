const soap = require("soap");
const url = "https://apps.learnwebservices.com/services/hello?wsdl";
const args = {Name: "Luis Ayala"};
soap.createClient(url, function(err, client) {
    client.SayHello(args, function(err, result) {
        console.log(result.Message);
    });
});