# Nigeria States API - Free Access

[![Render Status](https://img.shields.io/render/https://nigeria-states-free-api.onrender.com/ping)](https://nigeria-states-free-api.onrender.com/)

Welcome to the Nigeria States API! This free and open API provides comprehensive information about the 36 states of Nigeria, including their capitals and Local Government Areas (LGAs). Whether you're building a mobile app, a website, or conducting research, this API aims to be a reliable source for Nigerian state data.

**Live URL:** https://nigeria-states-free-api.onrender.com

## Endpoints

The API offers various endpoints to retrieve specific sets of data. All endpoints return a JSON response.

### 1. Get All States, Capitals, and LGAs

- **Endpoint:** `/api/all`
- **Method:** `GET`
- **Description:** Retrieves a list of all 36 states, along with their respective capitals and a list of their Local Government Areas.
- **Response Format:**

```json
{
    "count": 36,
    "data": [
        {
            "state": "Abia",
            "capital": "Umuahia",
            "lgas": [
                "Aba North",
                "Aba South",
                "Arochukwu",
                "Bende",
                "Ikwuano",
                "Isiala Ngwa North",
                "Isiala Ngwa South",
                "Isuikwuato",
                "Obi Ngwa",
                "Ohafia",
                "Osisioma Ngwa",
                "Ugwunagbo",
                "Ukwa East",
                "Ukwa West",
                "Umuahia North",
                "Umuahia South",
                "Umunneochi"
            ]
        }
    ]
}
```

### 2. Get Only States

- **Endpoint:** `/api/states`
- **Method:** `GET`
- **Description:** Retrieves an array containing only the names of all 36 states.
- **Response Format:**

```json
{
    "count": 36,
    "states": ["Abia", "Adamawa", "Akwa Ibom"]
}
```

### 3. Get States and Capitals Only

- **Endpoint:** `/api/states-capitals`
- **Method:** `GET`
- **Description:** Retrieves a list of all 36 states along with their corresponding capitals.
- **Response Format:**

```json
{
    "count": 36,
    "data": [
        {"state": "Abia", "capital": "Umuahia"},
        {"state": "Adamawa", "capital": "Yola"}
    ]
}
```

### 4. Get Only Capitals

- **Endpoint:** `/api/capitals`
- **Method:** `GET`
- **Description:** Retrieves an array containing only the names of the capitals of all 36 states.
- **Response Format:**

```json
{
    "count": 36,
    "capitals": ["Umuahia", "Yola", "Uyo"]
}
```

### 5. Get States and LGAs Only

- **Endpoint:** `/api/states-lgas`
- **Method:** `GET`
- **Description:** Retrieves a list of all 36 states along with a list of their Local Government Areas.
- **Response Format:**

```json
{
    "count": 36,
    "data": [
        {
            "state": "Abia",
            "lgas": ["Aba North", "Aba South", "Arochukwu"]
        },
        {
            "state": "Adamawa",
            "lgas": ["Demsa", "Fufore", "Ganye"]
        }
    ]
}
```

### 6. Get Capital and LGAs Only

- **Endpoint:** `/api/capital-lgas`
- **Method:** `GET`
- **Description:** Retrieves a list containing the capital and the Local Government Areas for each of the 36 states.
- **Response Format:**

```json
{
    "count": 36,
    "data": [
        {
            "capital": "Umuahia",
            "lgas": ["Aba North", "Aba South", "Arochukwu"]
        },
        {
            "capital": "Yola",
            "lgas": ["Demsa", "Fufore", "Ganye"]
        }
    ]
}
```

### 7. Get Only LGAs

- **Endpoint:** `/api/lgas`
- **Method:** `GET`
- **Description:** Retrieves a flat array containing all the Local Government Areas across all 36 states.
- **Response Format:**

```json
{
    "count": 774,
    "lgas": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano"]
}
```

## How to Use

You can access this API using any HTTP client (e.g., `fetch` in JavaScript, `axios`, `curl`, `Postman`).

### JavaScript

```javascript
fetch('https://nigeria-states-free-api.onrender.com/api/states')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching states:', error));
```

### curl

```bash
curl https://nigeria-states-free-api.onrender.com/api/states-capitals
```

### Python

```python
import requests

response = requests.get('https://nigeria-states-free-api.onrender.com/api/all')
data = response.json()
print(data)
```

## Rate Limiting

This is a free API, and while there are currently no strict rate limits in place, please be mindful of server resources. Excessive and frequent requests might lead to temporary blocking.

## Data Accuracy

The data is based on publicly available information and is believed to be accurate. However, administrative divisions can change. If you notice any discrepancies, feel free to report them.

## Contributing

Feedback and suggestions are welcome. If you find issues or have ideas, please create an issue or a pull request.

---

© 2024 Peace Oloruntoba
