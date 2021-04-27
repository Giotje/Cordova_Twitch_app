/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    document.getElementById("openlink").addEventListener('click', showbrowser)
    // Cordova is now initialized. Have fun!
    window.open = cordova.InAppBrowser.open;

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function showbrowser(){
    var url = "https://id.twitch.tv/oauth2/authorize?client_id=di5u96cpttmxapibsjpvmyr43x6hn3&redirect_uri=http://localhost&response_type=token&scope=viewing_activity_read"
    var target = "_blank";
    var option = "lcoation=yes"
    cordova.InAppBrowser.open(url,target,option);

};
