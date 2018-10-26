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
