# Back-end

## Entidades

### Game
id
title
bannerUrl

### Ad 
id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

### Casos de uso 
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

## HTTP methods / API RESTful 
- GET, POST, PUT, PATCH, DELETE

## HTTP Codes - Status Code
- 2xx: Sucesso
- 3xx: Redirecionamento
- 4xx: Erros gerados pela aplicação
- 5xx: Erros inesperados 

## Params

Query: Utilizados para persistir estado. Sempre são nomeados.
- filtros, ordenação, paginação, etc...
- localhost:3333/ads?page=2&sort=title

Route: Parâmetros da url não nomeados.
- identificação de recurso (id, title, ...)
- localhost:3333/ads/5 (anúncio que tem id = 5)

Body: Enviar informações em uma requisição
- envio de formulário (id, nome, senha, etc ...)

## Commands
- npx prisma migrate dev
- npx prisma generate
- npx prisma studio