# CommitsApp

Este proyecto fue realizado con Angular 12 como frontend y un backend con una API en NodeJs y se consume la API de GitHub desde el server. Autenticación con mongoDB


## Instalar dependencias

Desde la raiz del proyecto una vez descargado `npm i` para instalar dependencias de Angular. Se deben instalar las dependencias de node desde el directorio `server/` y ejecutar `npm i`. 

## Iniciar servidor de NodeJS

Desde el directorio `server/` ejecutar `npm start`. Si desea ejecutar el servidor en desarrollo para poder ver logs de consola, `npm run dev` pero para esto debe tener instalado nodemon en forma global `npm i -g nodemon`

## Iniciar aplicación Angular

 Desde la raíz ejecutar `ng serve` para iniciar el servidor de desarrollo de angular. En el navegador abra `http://localhost:4200/`.

## Observaciones

- Se implementó una autenticación con una base de datos en mongoDB para lo que se compartió el archivo .env, este acceso será eliminado en poco tiempo ya que esto es para este caso de demostración, en todo caso se puede cambiar la cadena de conexión por una propia.
- El login carga por defecto un usuario con acceso `user@test.com` y contraseña `password`, puede jugar con el registro crear nuevos usuario y realizar login con los mismos.
- La ruta principal para obtener los commits `/commits` fue protegida mediante guards con tokens, solo un usuario autenticado puede acceder a esta ruta. El login se persiste en el localstorage.
- Se consume la API de GitHub para obtener los commits de este proyecto. Se envian los datos necesarios al servidor del usuario y repositorio que se quieren leer mediante los select de la pantalla, pero el backend esta listo para consumir la data de cualqueir usuario y su repositorio
