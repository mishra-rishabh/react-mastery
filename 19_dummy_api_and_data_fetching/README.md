# Dummy JSON and Fetching Data with using Fetch

* **Dummy JSON API Link:** https://dummyjson.com/docs/products

## Fetch Function
1. **fetch:** Modern JavaScript API for network requests.
2. **Promise-Based:** Returns a Promise with a Response object.
3. **Usage:** Default is GET. For POST use method: 'POST'
4. **Response:** Use .then() and response.json() for JSON data.
5. **Errors:** Doesn't reject on HTTP errors. Check response.ok.
6. **Headers:** Managed using the Headers API.