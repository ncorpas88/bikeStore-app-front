# The Bike Hub

## [See the App!](https://bikestore-app.netlify.app/)

![App Logo](/public/images/logobikestore.png)

## Description

**NOTE -** Es una web app para mostrar de una forma mas i nteractiva el catálogo de productos de una tienda.
#### [Client Repo here](https://github.com/ncorpas88/bikeStore-app-front.git)
#### [Server Repo here](https://github.com/ncorpas88/bikeStore-app-server.git)

## Technologies, Libraries & APIs used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, Bootstrap.

## Backlog Functionalities

**NOTE -** Listado de todas la bicicletas, filtrado por disciplina, añadir bicicleta, actualizar bicicleta, eliminar bicicleta.

# Client Structure

## User Stories

404 – Como usuario quiero ver una página 404 bonita cuando accedo a una ruta que no existe para saber que fue un error mío.

500 – Como usuario quiero ver una página de error amigable cuando algo falla en el servidor para saber que no fue culpa mía.

homepage – Como usuario quiero acceder a la página de inicio para ver todas las bicicletas disponibles, filtrarlas por disciplina y buscarlas por nombre.

crear bicicleta – Como usuario quiero poder crear una nueva bicicleta mediante un formulario para agregarla al sistema.

modificar bicicleta – Como usuario quiero poder editar la información de una bicicleta existente para mantener sus datos actualizados.

ver detalles de bicicleta – Como usuario quiero ver la información completa de una bicicleta específica, con opción de actualizarla o eliminarla si es necesario.

eliminar bicicleta – Como usuario quiero poder eliminar una bicicleta que ya no es relevante para mantener el listado limpio.

ver empresas – Como usuario quiero ver la lista de empresas registradas para conocer quién ofrece bicicletas o servicios relacionados.

## Client Routes


## React Router Routes (React App)
| Path                       | Page                 | Componentes Asociados                        | Comportamiento                                                                |
| -------------------------- | -------------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| `/`                        | Home                 | `HomePage`, `CardBikes`, `Form.Select`       | Muestra todas las bicicletas con filtro por disciplina y búsqueda por nombre. |
| `/formCreateBikePage`      | Crear Bicicleta      | `FormCreateBikePage`, `Form`                 | Formulario para agregar una nueva bicicleta mediante `POST /bikes`.           |
| `/formModifyPage/:bikeId`  | Modificar Bicicleta  | `FormModifyPage`, `Form`                     | Formulario para editar una bicicleta existente mediante `PUT /bikes/:id`.     |
| `/detailsBikePage/:bikeId` | Detalles Bicicleta   | `DetailsBikePage`, `Modal`, `Link`, `Button` | Muestra detalles de una bicicleta; permite actualizar o eliminar (`DELETE`).  |
| `/companies`               | Detalles de Empresas | `CompanyDetailsPage`, `Card`                 | Muestra todas las empresas desde `GET /companies`.                            |

## Other Components

- Navbar
- Footer
- CardBikes

  
## Links

### Collaborators

[Developer:] Natanael Corpas Rivero



### Project

[Repository Link Client](https://github.com/ncorpas88/bikeStore-app-front.git)

[Repository Link Server](https://github.com/ncorpas88/bikeStore-app-server.git)

[Deploy Link](https://bikestore-app.netlify.app/)

