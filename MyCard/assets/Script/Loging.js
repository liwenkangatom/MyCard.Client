// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
const getFatherScene = require('utils').getFatherScene;
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },kb
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    	// node.on(cc.Node.EventType.MOUSE_DOWN, function (e){
    	// 	console.log('Mouse Down');
    	// 	// e.getLocationX();
    	// 	console.log('mouse location', e.getLocationX());
    	// })
        console.log('test script onLoad', getFatherScene("Home"));
    },

    start () {
    	console.log('test script start', this.node);
        var node = this.node;
        node.on(cc.Node.EventType.MOUSE_DOWN, function (e) {
            cc.director.loadScene("Home");
        })
    },

    // update (dt) {},
});
