# Use uma imagem base Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante do código fonte da aplicação
COPY . .

# Exponha a porta em que a aplicação Express estará ouvindo
EXPOSE 3001

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["start"]
ENTRYPOINT ["npm"]