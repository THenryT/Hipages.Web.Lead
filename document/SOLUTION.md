
# Solution Description
It is a microservice structure and it include one domain called "lead".
I use clean architecture to build the strcutre of project
This project have four layer which are application layer, infrastructure layer, domain layer and web layer. 
1.The domain layer is at the centre and include the domain logic.
2.The application layer have business logics and it dependent on infrastructure and domain layer.
3.The infrascture layer include the code to interact with DB
4.The Web layer include restful api and host a react(it will be move to BFF service, and want to make it only work for lead domain) 
