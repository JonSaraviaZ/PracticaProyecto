Sigue estos pasos para iniciar el proyecto:


🚀 Requisitos previos:

Tener instalado Node.js y npm en tu máquina.

Tener instalado Git.

Tener instalado Visual Studio Code.

🛠️ Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el proyecto:

```bash
git clone https://github.com/JonSaraviaZ/PracticaProyecto.git
```
Luego, entra a la carpeta del proyecto:

```bash
cd PracticaProyecto
```


📂 Estructura del proyecto

El repositorio contiene:

/frontend: Archivos HTML, CSS y JavaScript del cliente.

/microservicio-users: Microservicio de usuarios en Node.js (puerto 3001).

/microservicio-orders: Microservicio de órdenes en Node.js (puerto 3002).

⚙️ Instalación de dependencias

En cada microservicio debes instalar las dependencias:

Entra en la carpeta microservicio-users:
```bash
cd microservicio-users
npm install
```


Luego en la carpeta microservicio-orders:
```bash
cd ../microservicio-orders
npm install
```


▶️ Ejecución de los microservicios

Levanta cada microservicio en una terminal diferente:

Ejecuta el microservicio de usuarios:

```bash
cd microservicio-users
node server.js
```


Ejecuta el microservicio de órdenes:

```bash
cd ../microservicio-orders
node server.js
```


🌐 Visualizar el Frontend

Abre el archivo index.html que está en la carpeta frontend con la extensión de VS Code Live Server o abre directamente el archivo en el navegador.

Si usas Live Server, el frontend estará disponible generalmente en:

```bash
http://127.0.0.1:5500/frontend/index.html
```


⚡ Desde el frontend podrás consumir los datos que exponen ambos microservicios.

🖐️ Subir cambios a GitHub

Para subir cambios nuevos:

Añade los archivos modificados:

```bash
git add .
```
Crea un commit describiendo los cambios:

```bash
git commit -m "Descripción breve del cambio"
```


Sube los cambios a GitHub:
```bash
git push origin main
```
