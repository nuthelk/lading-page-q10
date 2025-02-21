# Instalación y Configuración de Vite con React

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

Puedes verificar si están instalados ejecutando los siguientes comandos en la terminal:

```sh
node -v
npm -v
```

## Instalación de Vite con React

### 1. Crear un nuevo proyecto con Vite
Ejecuta el siguiente comando para crear un nuevo proyecto:

```sh
npm create vite@latest nombre-del-proyecto --template react
```

Si estás usando `yarn`, ejecuta:

```sh
yarn create vite@latest nombre-del-proyecto --template react
```

Sigue las instrucciones en pantalla para configurar el proyecto.

### 2. Acceder al directorio del proyecto

```sh
cd nombre-del-proyecto
```

### 3. Instalar dependencias

Si usas `npm`:

```sh
npm install
```

Si usas `yarn`:

```sh
yarn
```

### 4. Ejecutar el servidor de desarrollo

Para iniciar el proyecto en modo desarrollo, ejecuta:

```sh
npm run dev
```

O con `yarn`:

```sh
yarn dev
```

Esto iniciará un servidor local (generalmente en `http://localhost:5173/`).

### 5. Generar una versión de producción
Si deseas construir el proyecto para producción, usa:

```sh
npm run build
```

O con `yarn`:

```sh
yarn build
```

Esto generará los archivos optimizados en la carpeta `dist/`.
