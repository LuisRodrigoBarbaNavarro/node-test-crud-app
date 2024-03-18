# Obtener la última versión de node
FROM node:latest 

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Ejecutar el comando npm start
CMD ["npm", "start"]