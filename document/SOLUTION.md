
# Solution Description

## It is a microservice structure 

## Domain is Lead

### Use clean architecture 
This project have four layer which are application layer, infrastructure layer, domain layer and web layer. 
1.The domain layer is at the centre and include the domain logic.
2.The application layer have business logics and it dependent on infrastructure and domain layer.
3.The infrascture layer include the code to interact with DB
4.The Web layer include restful api and host a react(it will be move to BFF service, and want to make it only work for lead domain) 
