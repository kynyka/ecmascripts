// ==UserScript==
// @name         Calculate_BaiDu_File_Volumes
// @namespace    Made at Home!
// @version      1.0
// @description  It has been ineffectual.
// @author       kynyka
// @match        http://pan.baidu.com/*
// @match        https://pan.baidu.com/*
// @grant        none
// ==/UserScript==

/*
 * 单文件，node-type="module"者有2，取第2class下之size类
 * 多文件，node-type="module"者有6，取第4class(module-list-view)下之list类
 */
function calcVol() {
    //var sing = document.getElementsByClassName('size');/*20161010改版致此类作废*/
    var sing = document.getElementsByClassName('zip-quota');
    var le = sing[0].innerHTML;
    var unit = /M/g.test(le)?'M':'G';
    if (sing.length > 0) {
        console.log('sing.length',sing.length);
        prompt('Total Size ('+ unit +'):', le.replace(/M|G/, ''));
    } else {
        var a = document.getElementsByClassName('list')[1].innerHTML;
        var b = a.match(/(\d+\.)?\d+(G|M)/g);
//        console.info('b:', b);
        var mArr = [],
            gArr = [];
        var c = /G/;
        var d = null,
            e = null;
        for (var i = 0; i < b.length; i++) {
            if (c.test(b[i]) === true) {
                gArr.push(Number(b[i].replace('G', '')));
            } else {
                mArr.push(Number(b[i].replace('M', '')));
            }
        }
        console.info('gArr:', gArr);
        console.info('mArr:', mArr);
        if (gArr.length >= 0) {
            for (var j = 0; j < gArr.length; j++) {
                d += gArr[j];
            }
            console.info('Size of d:', d);
        }
        if (mArr.length >= 0) {
            for (var k = 0; k < mArr.length; k++) {
                e += mArr[k];
            }
            console.info('Size of e:', e);
        }
        if (gArr.length > 0 && mArr.length > 0 || mArr.length === 0) {
            prompt('Total Size (GB):', (d + e / 1024).toFixed(2));
            //WTF! string; floating point arithmetic is not always 100% accurate
        } else {
            prompt('Total Size (MB):', e);
        }
    }
}

function startCount() {
    var aBtn = document.createElement('a');
    aBtn.setAttribute('hidefocus', 'true');
    aBtn.setAttribute('href', 'javascript:;');
    aBtn.style.cssText = 'display:block;position:absolute;width:73px;margin-top:6px;padding:6px 16px;border-radius:5px;background:#32af75;text-align:center;text-decoration:none';
    // 书写顺序会影响布局
    var sp = document.createElement('span');
//    sp.setAttribute('id','xxx');
    sp.onclick = function(){calcVol();};
    //sp.setAttribute('onclick', 'calcVol()');//Cf.bit.ly/2bMXiLD与bit.ly/2bLHFXy。当然用addEventListener也可以
    sp.style.cssText = 'font-size:16px;color:#fff;';
    sp.innerHTML = 'C a l c';
    aBtn.appendChild(sp);
    var topBtns = document.getElementsByClassName('slide-header-funcs')[0];
    if (topBtns) {
        topBtns.appendChild(aBtn);
    } else {
        console.warn(">> 2 Potentials:\n1. DOM's still loading...\n2. Reinspect the page!");
    }
}

//timer = window.setInterval(function() {
//    if (/loaded|complete/.test(document.readyState)) {
        //fireContentLoadedEvent();
//        console.info('DOM already!');
//        startCount();
//        clearInterval(timer);
////        var u = document.getElementById('xxx');
////        u.addEventListener('click',function(){calcVol();});
//    }
//}, 0);

window.onload = function() {
    console.info('onloaded!');
    startCount();
};