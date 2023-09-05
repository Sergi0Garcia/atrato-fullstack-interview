# Etapa 1: Construir la aplicación React
FROM node:14 as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY imgs imgs
COPY public public
COPY src src

# Construir la aplicación React
RUN npm run build

# Etapa 2: Crear una imagen de Nginx para servir la aplicación React construida
FROM nginx:alpine

# Copiar los archivos de construcción de la aplicación React a la ubicación adecuada en Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto 80 (el puerto predeterminado de Nginx)
EXPOSE 80

# El servidor Nginx se iniciará automáticamente al ejecutar el contenedor
