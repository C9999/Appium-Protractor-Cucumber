module.exports.config = {
	seleniumAddress: 'http://localhost:4723/wd/hub',

specs: ['specs/*.js'],

capabilities: {
	browserName: 'chrome',
	platformName:'Android',
	platformVersion: '7.1.1',
	deviceName: 'C',
},
	baseUrl: 'http://localhost:3000',
};
