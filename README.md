FlipDeal is an eCommerce company that sells various kinds of gadgets. FlipDeal is now expecting to also give its customers the ability to add items to the cart, edit the quantity, delete items, and also read the current state of the cart page.
 Product Listing Page:
-   Laptop
-   Mobile
-   Tablet

## Operations perfomed: 

1.  **Add items** to the cart using the `GET /cart/add` endpoint.
    
2.  **Edit the quantity** of items in the cart using the `GET /cart/edit` endpoint.
    
3.  **Delete items** from the cart using the `GET /cart/delete` endpoint.
    
4.  **Read the current state** of the cart using the `GET /cart` endpoint.
    
5.  **Calculate the total quantity** of items in the cart using the `GET /cart/total-quantity` endpoint.
    
6.  **Calculate the total price** of items in the cart using the `GET /cart/total-price` endpoint.

### Endpoint 1: Add an Item to the Cart
```
http://localhost:3000/cart/add?productId=3&name=Tablet&price=15000&quantity=1
```
**Endpoint:** `/cart/add`

**Query Parameters:**

-   `productId`: The ID of the product (integer).
    
-   `name`: The name of the product (string).
    
-   `price`: The price of the product (float).
    
-   `quantity`: The quantity of the product (integer).

### Endpoint 2: Edit Quantity of an Item in the Cart
```
http://localhost:3000/cart/edit?productId=2&quantity=3
```

**Endpoint:** `/cart/edit`

**Query Parameters:**

-   `productId`: The ID of the product (integer).
    
-   `quantity`: The new quantity of the product (integer).

### Endpoint 3: Delete an Item from the Cart
```
http://localhost:3000/cart/delete?productId=1
```
### Endpoint 4: Read Items in the Cart
```

**Endpoint:** `/cart/delete`

**Query Parameters:**

-   `productId`: The ID of the product to be deleted (integer).

http://localhost:3000/cart
```
### Endpoint 5: Calculate Total Quantity of Items in the Cart
```
http://localhost:3000/cart/total-quantity
```
### Endpoint 6: Calculate Total Price of Items in the Cart
```
http://localhost:3000/cart/total-price
```
