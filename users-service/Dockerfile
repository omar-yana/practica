# Imagen base mínima y oficial
#FROM node:18-alpine
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias (mejor cache)
COPY package*.json ./

# Instalación reproducible y solo producción
RUN npm ci --only=production

# Copiar código del microservicio
COPY . .

# Usuario no root (seguridad)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Puerto del servicio
EXPOSE 3001

# Arranque del microservicio
CMD ["node", "index.js"]