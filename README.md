# shodan-api-strongloop-connector
Strongloop connector for shodan APi 

[Shodan](http://www.shodan.io/) connector for [LoopBack](http://www.loopback.io)

## Customizing Shodan configuration for examples

To run the example you will need to provide your tokens


### Installation

In your LoopBack project:
    
    $ npm install loopback-connector-shodan

## Using the Connector
To use the connector, define the datasource using the connector in your `datasources.json` file:
    
    "twilio": {
        "name": "shodan",
        "connector": "loopback-connector-shodan",
        "token": "YOUR_TOKEN"
    }
  
Next, attach the created datasource to a model in the `model-config.json` file:

    "Explore": {
        "dataSource": "shodan",
        "public": true
    }
    
Now, using the created model, you can make calls using the `call` method of the model:
    
    Shodan.query(options, callback);
     
    
## Running the Example
To run the example in the `/example/example.js` directory, you must set the following values in the file:

    var SID = 'YXXXNT_SID';
    var QUERY = 'YOURXXXOKEN'; 

Next, from the from the `/loopback-connector-shodan/` directory, install the `loopback` module using the following command:
    
    $ npm install loopback
    
Finally, run the example app using the following command from the `/loopback-connector-shodan/` directory:

    $ node ./example/example.js
    
 

### Version
0.1.0

License
----
 
