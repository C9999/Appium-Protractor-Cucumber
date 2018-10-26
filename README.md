# POC de automação com Protractor e Appium

Projeto usado para validar um fluxo.

## Requisitos

Projeto em Angular
Appim
Protractor
Emulador ou Device físico Android ou iOS

## Instalação

To-do

## Configuração

O Mapeamento das configurações estão dividas por plataforma, e por isso temos dois arquivos de configurações do Protractor:

android.conf.js
ios.conf.js

No arquivo é necessário definir o nome do device, plataforma, versão e apontar a url onde o Voxel.js esta sendo executado.

Exemplo:
```
module.exports.config = {
	seleniumAddress: 'http://localhost:4723/wd/hub',

	specs: ['specs/*.js'],

	capabilities: {
		browserName: 'safari',
		platformName: 'iOS',
		platformVersion: '11.0',
		deviceName: 'iPhone 8 Plus',
	},
	baseUrl: 'http://localhost:3000',
};
````

## Passos para executar os testes

Subir o ambiente Angular:
```
	npm start
```

Iniciar o servidor Appium:
```
	appium
```

Emulador Android ou iOS iniciado
ou
Device(Android) conectado via USB

Executar o Protractor usando o arquivo de configuração:
```
	protractor ios.conf.js
```
