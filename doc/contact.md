# Contact API

## Create

Endpoint : `POST` /api/contacts

headers :

- authorizaton: `token`

request body :

```json
{
  "first_name": "Farhan",
  "last_name": "Hamidie",
  "email": "hamidie@gmail.com",
  "phone": "0855558383"
}
```

response body (success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Farhan",
    "last_name": "Hamidie",
    "email": "hamidie@gmail.com",
    "phone": "0855558383"
  }
}
```

response body (failed) :

```json
{
  "error": "Email already registerd"
}
```

## Get

Endpoint : `GET` /api/contacts/:contactId

headers :

- authorizaton: `token`

response body (success) :

````json
{
  "data": {
    "id": 1,
    "first_name": "Farhan",
    "last_name": "Hamidie",
    "email": "hamidie@gmail.com",
    "phone": "0855558383"
  }
}

response body (failed) :

```json
{
  "error": "Contact doesn't exist"
}
````

## Update

Endpoint : `PUT` /api/contacts/:contactId

headers :

- authorizaton: `token`

request body :

```json
{
  "first_name": "Farhan",
  "last_name": "Hamidie",
  "email": "hamidie@gmail.com",
  "phone": "0855558383"
}
```

response body (success) :

```json
{
  "data": {
    "first_name": "Farhan",
    "last_name": "Hamidie",
    "email": "hamidie@gmail.com",
    "phone": "0855558383"
  }
}
```

response body (failed) :

```json
{
  "error": "Failed"
}
```

## Delete

Endpoint : `DELETE` /api/contacts/:contactId

headers :

- authorizaton: `token`

response body (success) :

```json
{
  "data": true
}
```

response body (failed) :

```json
{
  "error": "Contact doesn't exist"
}
```

## Search

Endpoint: `GET` /api/contacts

headers:

- authorization: token

query params:

- name: `string` (contact first name or last name) // optional
- phone: `string` (contact phone) // optional
- email: `string` (contact email) // optional
- page: `number` (default: 1)
- per_page: `number` (default: 10)

response body (success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Farhan",
      "last_name": "Hamidie",
      "email": "hamidie@gmail.com",
      "phone": "0855558383"
    },
    {
      "id": 2,
      "first_name": "Farhan",
      "last_name": "Hamidie",
      "email": "hamidie@gmail.com",
      "phone": "0855558383"
    }
  ],
  "pagination": {
    "current_page": "1",
    "total_page": "10",
    "per_page": "10"
  }
}
```
