# QA Automation Challenge

Este proyecto es un marco de automatización de pruebas web utilizando [Cypress](https://www.cypress.io/) version 13, escrito en JavaScript. Incorpora GitHub Actions para CI/CD y utiliza [Mochawesome](https://github.com/adamgruber/mochawesome) para generar informes de pruebas con estilo e informativos. Realiza pruebas en la página web[SauceDemo](https://www.saucedemo.com/v1/) para la interfaz de usuario y en la pagina [PETSTORE](https://petstore.swagger.io/v2) para la API.

### UI testing

Este fue el escenario automatizado:

Un flujo de compra que incluye:
    . Autenticarse con el usuario: tandard_user y password: secret_sauce

    . Agregar dos productos al carrito.

    . Visualizar el carrito.

    . Completar el formulario de compra.

    . Finalizar la compra hasta la confirmación: "THANK YOU FOR YOUR ORDER"

## API testing

Para las pruebas de API, se han automatizado 3 escenarios:

    1. Crear un usuario.

    2. Buscar al usuario creado.

    3. Actualizar el nombre y el correo electrónico y hacer afirmaciones.

### Referencias de la API

Este proyecto automatiza diferentes respuestas de API desde  https://petstore.swagger.io/ utilizando el marco Cypress y el [cypress-plugin-api.](https://github.com/filiphric/cypress-plugin-api) creado por [Filip Hric](https://github.com/filiphric), generando informes y ejecutándose en GitHub Actions como CI.

#### Detalles del usuario

```http
  GET /users/{username}
```

| Request type | Endpoints           | Expected Response Code |
| :----------- | :------------------ | :--------------------- |
| `GET`        | `/users/{username}` | `200`                  |

#### Crear usuario

```http
  POST /users/{username}
```

| Request type | Endpoints           | Request Body                                                                                                                                              | Expected Response Code |
| :----------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `POST`       | `/users/{username}` | `"id": 0, "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": 0` | `200`                  |

#### Modificar usuario

```http
  PUT /users/{username}
```

| Request type | Endpoints           | Request Body                                                                                                                                              | Expected Response Code |
| :----------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `PUT`        | `/users/{username}` | `"id": 0, "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": 0` | `200`                  |

#### Eliminar

```http
  DELETE /users/{username}
```

| Request type | Endpoints           | Expected Response Code |
| :----------- | :------------------ | :--------------------- |
| `DELETE`     | `/users/{username}` | `200`                  |

## Tecnologias utilizadas

- [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Nodejs.](https://nodejs.org/en/about/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [cypress-plugin-api.](https://github.com/filiphric/cypress-plugin-api)
- [GitHub Actions.](https://docs.github.com/en/actions)
- [cypress-mochawesome-reporter.](https://www.npmjs.com/package/cypress-mochawesome-reporter)

## Ejecutar localmente

#### Requisitos para ejecutar el proyecto

- [Node.js](https://nodejs.org/en/download/)

###

- Clonar el repositorio:

```bash
  git clone https://github.com/edgarysabel/e2e-api-automation-test.git
```

- Instalar dependencias:

```bash
  npm install
```

- Ejecutar el proyecto en modo "headless":

```bash
  npm run cy:run
```

- Ejecutar el proyecto en modo "headed":

```bash
  npm run cy:open
```

Esto ejecutará todas las pruebas y generará un informe al final de la ejecución.

## Ejecutar CI

La integración continua (CI) está configurada con GitHub Actions para facilitar el uso e integración, ya que el proyecto ya está alojado en GitHub. Para ejecutarlo, simplemente ve a las acciones y ejecuta el flujo de trabajo Run QA Integration Tests en la rama de tu preferencia. Además, el pipeline siempre se ejecuta cada vez que hay un nuevo commit.

Nota: Para poder hacer commits o ejecutar flujos de trabajo, por favor contáctame jerfish04@gmail.com.

## Reporte de pruebas

Mochawesome está configurado para generar un informe HTML independiente después de la ejecución de las pruebas. Puedes encontrar el informe en el directorio cypress/reports/mochawesome-report. Abre mochawesome.html en tu navegador para ver el informe.

Para personalizar la configuración de Mochawesome, puedes modificar las opciones de mochawesomeReporter en el archivo cypress.json o cypress.config.js.

Los informes de prueba se han realizado con Allure Report y se almacenan con GitHub Pages, por lo que cada vez que se ejecuta el pipeline, los informes se generan junto con él. 

## Estructura del proyecto

#### Configuración de pruebas de interfaz de usuario (UI)

El archivo cypress.env.json en el directorio raíz contiene las credenciales necesarias para las pruebas de interfaz de usuario. Las credenciales de trabajo están incluidas actualmente en el proyecto.

```bash
  {
  "FRONTEND_URL": "https://www.saucedemo.com/v1/",
  "API_ENDPOINT": "https://petstore.swagger.io/v2"
  }

```

## Información Importante

- Para los escenarios inválidos de la API se utilizó failOnStatusCode: false, para que continúe y realice las afirmaciones.

- Se utilizó un patrón POM personalizado con Javascript y Cypress.

- Los datos estáticos se almacenan en fixture para cada caso de prueba.
