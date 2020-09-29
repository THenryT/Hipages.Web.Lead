# Hipage Web Lead 

This is the service used to make users can see, decline and accept leads from UI
It includes Front-end(React) + Back-end service(Asp dotnet core 3.1)

### Prerequisites
1. Docker
2. Asp dotnet core 3.1 SDK
3. VS Studio or Rider(Mac)
4. node and npm

## How to execute it locally
1. Using docker-compose up the mongodb docker with initial data
2. Open solution in vs studio or rider
3. Execute the Hipage.Web.Lead

## ToDo list
This is a start up project and I have listed all todo list belowe to remind us to imporve our project:
* Add Dockfile for lead service
* Add Integartion tests
* Add Validation for lead service
* Add End-to-End test for system
* Seperate BFF and lead microservice, BFF should host react instead of hosted in lead service
