cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.clone.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.clone.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.geolocation": "0.3.7",
    "com.clone.phonegap.plugins.PushPlugin": "2.4.1"
}
// BOTTOM OF METADATA
});