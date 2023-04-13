### LOGIN:

#### METHOD: **POST**
URL: http://localhost:8080/login
``` json
	{
		"login": "admin",
		"password": "admin"
	}
```

### EMPRESA:

#### Method: **POST**
URL: http://localhost:8080/empresa
HEADER: TOKEN
``` json
	 {
	"cgc": "32132323213244",
	"endereco": {
		"logradouro": "Rua do sol",
		"bairro": "centenario",
		"cep": "58421000",
		"cidade": "campina",
		"uf": "pb",
		"complemento": "escolinha",
		"numero": "148"
	},
	"nome": "Vitor B"
}
```

#### Method: **GET**
URL: http://localhost:8080/empresa/
HEADER: TOKEN

ALTERNATIVE: http://localhost:8080/empresa/page={id}

#### Method: **DELETE**
URL: http://localhost:8080/empresa/{id}
HEADER: TOKEN

#### Method: **PUT**
URL: http://localhost:8080/empresa/
HEADER: TOKEN
``` json
 {
	"id": 1,
	"nome": "Joao Firmino"
}
```

### Fornecedor: 

#### Method: **POST**
URL: http://localhost:8080/fornecedor
HEADER: TOKEN
``` json
 {
	"cgc": "12345678900",
	"endereco": {
		"logradouro": "Rua do sol",
		"bairro": "centenario",
		"cep": "58421000",
		"cidade": "campina",
		"uf": "pb",
		"complemento": "escolinha",
		"numero": "148"
	},
	"nome": "Vitor M"
}
```

#### Method: **GET**
URL: http://localhost:8080/fornecedor/
HEADER: TOKEN

ALTERNATIVE: http://localhost:8080/fornecedor/page={id}

#### Method: **DELETE**
URL: http://localhost:8080/fornecedor/{id}
HEADER: TOKEN

#### Method: **PUT**
URL: http://localhost:8080/fornecedor/
HEADER: TOKEN
``` json
 {
	"id": 1,
	"nome": "Joao Firmino"
 }
```
