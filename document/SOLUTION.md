
# Solution Description

### It is a microservice structure and using DDD to build the logic

#### Using clean architecture
This project have four layer which are application layer, infrastructure layer, domain layer and web layer. 
* The domain layer is at the centre and include the domain logic.
* The application layer have business logics and it dependent on infrastructure and domain layer.
* The infrascture layer include the code to interact with DB
* The Web layer include restful api and host a react(it will be move to BFF service, and want to make it only work for lead domain) 
