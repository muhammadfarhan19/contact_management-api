# Address API

## Create

Endpoint : `POST` /api/contacts/:contactId/addresses

headers :

- authorizaton: `token`

request body :

```json
{
  "street": "Jl, contoh",
  "city": "Temanggung",
  "province": "Jawa Tengah",
  "country": "Indonesia",
  "postal_code": "56264"
}
```

response body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl, contoh",
    "city": "Temanggung",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "56264"
  }
}
```

response body (failed) :

```json
{
  "error": "Failed add address"
}
```

## Get

Endpoint : `GET` /api/contacts/:contactId/addresses/:addressId

headers :

- authorizaton: `token`

response body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl, contoh",
    "city": "Temanggung",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "56264"
  }
}
```

## Update

Endpoint : `PUT` /api/contacts/:contactId/addresses/:addressId

headers :

- authorizaton: `token`

request body :

```json
{
  "street": "Jl, contoh",
  "city": "Temanggung",
  "province": "Jawa Tengah",
  "country": "Indonesia",
  "postal_code": "56264"
}
```

response body (success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jl, contoh",
    "city": "Temanggung",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "56264"
  }
}
```

response body (failed) :

```json
{
  "error": "Failed add address"
}
```

## Delete

Endpoint : `DELETE` /api/contacts/:contactId/address/:addressId

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

## List Addresses

Endpoint: `GET` /api/contacts/:contactId/address

headers:

- authorization: token

response body (success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl, contoh",
      "city": "Temanggung",
      "province": "Jawa Tengah",
      "country": "Indonesia",
      "postal_code": "56264"
    },
    {
      "id": 2,
      "street": "Jl, contoh",
      "city": "Temanggung",
      "province": "Jawa Tengah",
      "country": "Indonesia",
      "postal_code": "56264"
    }
  ]
}
```

```

```
