# Sendgrid Proxy

This repo contains a node application that serves as a proxy service between all City of Pittsburgh client applications that interface with the Sendgrid API.

## Authorization

Bearer token.  Just ask for it

## File structure
    .
    ├── routes                  # All endpoints
    ...                   
    ├── server.js               # Entry point, Express config
    ...
    └── README.md

## API Documentation

Swagger UI: https://sendgridproxy.azurewebsites.us/docs

## Running Locally

### Prerequisites

* [Node.js](https://nodejs.org) - JS runtime
* .env - See .env.example for all required secrets

### Installation
```
git clone https://github.com/CityofPittsburgh/sendgrid-proxy
cd sendgrid-proxy
npm install
node server.js
```

## Deployment

Both staging and production services are hosted in Azure.  Application is deployed directly from github, and can be triggered either (a) through the Azure GUI, (b) through the [CLI](https://docs.microsoft.com/en-us/cli/azure/webapp/deployment/source?view=azure-cli-latest#az-webapp-deployment-source-sync), or (c) through the [proxy service](https://github.com/CityofPittsburgh/azure-proxy).

For complete documentation on the azure environment, see [here](https://github.com/CityofPittsburgh/all-things-azure.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details