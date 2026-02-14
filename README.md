# Online Storefront API

A simple Express.js API that serves a static catalog of products to mimic an online storefront. This project is beginner-friendly, making it ideal for collaboration, learning REST basics.

## Features

- REST endpoints for listing all products and retrieving a product by ID
- Static data store using a JSON file 
- Clean project structure with routes and controllers
- Ready-to-run development setup with nodemon

## Tech Stack

- Node.js
- Express.js
- JSON data file for products

## Getting Started

### Prerequisites

- Node.js 18+ recommended (ESM is enabled in this project)

### Initialise the project

```bash
npm init -y
```

### Install express

```bash
npm install express
```

### install nodemon

```bash 
npm install -D nodemon
```

The API will run on:

```
http://localhost:3000
```

### Run in Development Mode

```bash
npm run dev
```

## API Endpoints

Base URL: `http://localhost:3000`

### Testing our endpoints

`GET /`

Response:

```json
"Welcome to our Online Storefront API"
```

### Get All Products

`GET /api/products`

Response (example):

```json
[
	{
		"id": 1,
		"name": "Wireless Bluetooth Headphones",
		"category": "Electronics",
		"price": 79.99,
		"currency": "USD",
		"stock": 120,
		"rating": 4.5,
		"reviewsCount": 342,
		"description": "Comfortable over-ear wireless headphones with deep bass and long battery life."
	}
]
```

### Get Product By ID

`GET /api/products/:id`

Response (example):

```json
{
	"id": 3,
	"name": "Office Chair",
	"category": "Furniture",
	"price": 249.99,
	"currency": "USD",
	"stock": 40,
	"rating": 4.7,
	"reviewsCount": 87,
	"description": "Adjustable ergonomic office chair designed for all-day comfort."
}
```

If the product does not exist, the API returns:

```json
{
	"msg": "Product not found"
}
```

Status code: `404`

## Data Shape

Each product includes the following fields:

- `id` (number)
- `name` (string)
- `category` (string)
- `price` (number)
- `currency` (string)
- `stock` (number)
- `rating` (number)
- `reviewsCount` (number)
- `description` (string)


## Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with automatic reload

