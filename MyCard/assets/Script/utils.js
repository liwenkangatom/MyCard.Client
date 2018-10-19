var sceneTree = {
    'GetCard': 'Main',
    'Money': 'Main',
    'Signup': 'Loging',
    'Home': 'Main',
    'Main': null,
    'Loging': null,
};
var routerList = {
	'linkToHome': 'Home',
	'linkToMoney': 'Money',
	'linkGetCard': 'GetCard',
	'linkSignIn': 'Login',
	'linkSignUp': 'Signup',
	'linkToMain': 'SignupSus',
	'linkToMain': 'Main'
}
function getFatherScene(senename) {
	return sceneTree[senename];
}
function getDirect(linkName) {
	return routerList[linkName];
}
module.exports = {
    getFatherScene,
    getDirect,
}