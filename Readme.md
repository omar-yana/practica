## Pipeline DevSecOps
- Esta práctica tiene como objetivo implementar y comprender un flujo DevSecOps completo, integrando diseño, desarrollo, seguridad y operaciones en una arquitectura basada en microservicios, utilizando Node.js, Docker, Docker Compose y GitHub Actions.

# Arquitectura del Sistema
El sistema está compuesto por tres servicios principales:
## API Gateway
- Punto de entrada único al sistema.
- Encargado del enrutamiento hacia los microservicios.
- Punto central para aplicar seguridad y control.

## Users Service
- Microservicio encargado de la gestión de usuarios.
- Expone endpoints relacionados con información de usuarios.

## Academic Service
- Microservicio encargado de la gestión académica.
- Expone endpoints relacionados con cursos y datos académicos.

La comunicación entre servicios se realiza a través de una red interna Docker, evitando el uso de localhost entre contenedores.