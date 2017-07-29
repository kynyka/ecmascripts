// ==UserScript==
// @name         9baka-openBox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://bbs.9moe.com/kf_fw_ig_mybp.php
// @grant        none
// ==/UserScript==

(function() {
        'use strict';

        var puTongCount = parseInt(document.querySelector('#alldiv > table:nth-child(6) > tbody > tr > td:nth-child(2) > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(1) > span:nth-child(2)').innerText);
        var xingYunCount = parseInt(document.querySelector('#alldiv > table:nth-child(6) > tbody > tr > td:nth-child(2) > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(2) > span:nth-child(2)').innerText);
        var xiYouCount = parseInt(document.querySelector('#alldiv > table:nth-child(6) > tbody > tr > td:nth-child(2) > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(3) > span:nth-child(2)').innerText);
        var chuanQiCount = parseInt(document.querySelector('#alldiv > table:nth-child(6) > tbody > tr > td:nth-child(2) > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(4) > span:nth-child(2)').innerText);

        var countArr = [puTongCount, xingYunCount, xiYouCount, chuanQiCount];
        var numArr = ['1', '2', '3', '4'];
        // function sortNum_Asc(a,b) {
        //     return a - b  // b - a  Desc
        // }
        // countArr.sort(sortNum_Asc) // 字符串也行,JS真乱来
        
        //sessionStorage.setItem("puTongTally",puTongTally.toString());
        //sessionStorage.getItem("puTongTally");


        function openBox (boxCount, boxNum) {
            for (let boxTally=boxCount; boxTally > 0; boxTally--) {  // let boxTally=chuanQiCount
                setTimeout(function(){dkhz(boxNum);var content = document.querySelector('#boxtext').innerText;console.log('%c%s','color:green',content);content = null;}, (boxCount-(boxTally-1))*timeArg ); // chuanQiCount
            }
        }


        var timeArg = 2000;  // 1s
        

        openBox(countArr[0], numArr[0]);
        // openBox(countArr[1], numArr[1]);
        // openBox(countArr[2], numArr[2]);
        // openBox(countArr[3], numArr[3]);


        /* test use */
        // for (let i=0; i<10;i++){
        //     setTimeout(function(){
        //         console.info(i);
        //     }, i*1000)
        // }
        // for (let j= 0; j<7; j++){
        //     setTimeout(function(){
        //         console.warn(j);
        //     }, j*400)
        // }


        // function randomNum(min,max){
        //     var range = max - min;
        //     var rand = Math.random();  
        //     var num = min + Math.round(rand * range);
        //     return num;
        // }
        // randomNum(1,4);

        // js数组的最大值最小值:
        // var a=[1,2,3,5];
        // console.log(Math.max.apply(null, a));//最大值
        // console.log(Math.min.apply(null, a));//最小值
        // 
        // 多维数组取最大最小值：
        // var a=[1,2,3,[5,6],[1,4,8]];
        // var ta=a.join(",").split(",");//转化为一维数组
        // console.log(Math.max.apply(null,ta));//最大值
        // console.log(Math.min.apply(null,ta));//最小值
})();