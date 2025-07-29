# -------- Stage 1: Build React App --------
FROM node:18 AS react-build

WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client/ ./
RUN npm run build

# -------- Stage 2: Build Node.js Backend --------
FROM node:18 AS node-build

WORKDIR /app/server

COPY server/package*.json ./
RUN npm install

COPY server/ ./

# -------- Stage 3: Production Image --------
FROM node:18-alpine AS production

WORKDIR /app

# Copy backend code
COPY --from=node-build /app/server ./

# Copy React build to backend's public folder
COPY --from=react-build /app/client/build ./public

EXPOSE 5000

CMD ["node", "index.js"]

