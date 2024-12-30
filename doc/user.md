# User API

## Register

Endpoint : `POST` /api/users

request body :

```json
{
  "username": "Farhan",
  "password": "123123123",
  "name": "Muhammad Farhan"
}
```

response body (success) :

```json
{
  "data": {
    "username": "Farhan",
    "name": "Muhammad Farhan"
  }
}
```

response body (failed) :

```json
{
  "error": "Username already registerd"
}
```

## Login

Endpoint : `POST` /api/users/login

request body :

```json
{
  "username": "Farhan",
  "password": "123123123"
}
```

response body (success) :

```json
{
  "data": {
    "username": "Farhan",
    "name": "Muhammad Farhan",
    "token": "fn23t9032rbfef" //random
  }
}
```

response body (failed) :

```json
{
  "error": "Username or password is wrong"
}
```

## Get User

Endpoint : `GET` /api/users/current

headers :

- authorizaton: `token`

response body (success) :

```json
{
  "data": {
    "username": "Farhan",
    "name": "Muhammad Farhan"
  }
}
```

response body (failed) :

```json
{
  "error": "Unauthorized"
}
```

## Update

Endpoint : `PATCH` /api/users/current

headers :

- authorizaton: `token`

request body :

```json
{
  "password": "123123123", // optional
  "name": "Muhammad Farhan" // optional
}
```

response body (success) :

```json
{
  "data": {
    "username": "Farhan",
    "name": "Muhammad Farhan"
  }
}
```

response body (failed) :

```json
{
  "error": "Username already registerd"
}
```

## Update

Endpoint : `DELETE` /api/users/current

headers :

- authorizaton: `token`

request body :

```json
{
  "data": true
}
```
