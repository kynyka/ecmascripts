// ==UserScript==
// @name         9baka-smeltWeapons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://bbs.9moe.com/kf_fw_ig_mybp.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nameParams = ['传奇的法杖', '传奇的长剑', '传奇的短弓'];
    var timeArg = 1200;

    var allTr = document.querySelector('.kf_fw_ig4').getElementsByTagName('tr');
    var i = 0;
    var iMax = allTr.length - 1;
    var flag = true;

    function checkLength(iMax){
        if (iMax < 10) flag = false;
        console.info('flag:',flag);
        return flag;
    }

    function smelt() {
        var f = setInterval(function() {
            if (i > iMax) {
                clearInterval(f);
                window.location = window.location;
                return;
            }

            if (allTr[i].getAttribute('id') && allTr[i].childNodes.length == 3) { // 已装备的只有1个childNode
                var itemId = allTr[i].getAttribute('id').replace('wp_', '');
                console.log('itemId:', itemId); // 有装备的td
                var itemName = allTr[i].lastChild.firstChild;
                if (itemName) { // 保险起见加上的而已
                    if (itemName.innerText != nameParams[0]) { // && itemName.innerText != nameParams[1] && itemName.innerText != nameParams[2]
                        console.log('Melt_id>>', itemId);
                        rlzb(itemId);
                    } else {
                        console.warn('略过本装备: %s——%s', itemId, itemName.innerText);
                    }
                }
            }

            i++;
        }, timeArg);
    }

    checkLength(iMax);
    if (flag === false) return;
    smelt();

})();