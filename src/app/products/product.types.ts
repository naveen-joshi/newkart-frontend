export interface Product {
  "image": string,
  "brand": string,
  "price": number,
  "rating": number,
  "numReviews": number,
  "isFeatured": boolean,
  "name": string,
  "description": string,
  "category": {
    "name": string,
    "color": string,
    "icon": string,
    "id": string
  },
  "countInStock": number,
  "images": string[],
  "richDescription": string,
  "dateCreated": Date,
  "id": string
}
