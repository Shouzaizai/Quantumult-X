/*******************************
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************
[rewrite_local]
^https:\/\/authcode.qunhongtech.com\/(\/auth\/verifyNoticeApi|auth\/verifyAuthCodeApi|\/user\/heartbeatServerStateApi) url script-response-body https://raw.githubusercontent.com/Shouzaizai/Quantumult-X/main/jsq.js
^http[s]?:\/\/authcodebackup.qunhongtech.com\/(\/auth\/verifyNoticeApi|auth\/verifyAuthCodeApi|\/user\/heartbeatServerStateApi) url script-response-body https://raw.githubusercontent.com/Shouzaizai/Quantumult-X/main/jsq.js
^https:\/\/www.hxh520.top url script-response-body https://raw.githubusercontent.com/Shouzaizai/Quantumult-X/main/jsq.js
[mitm] 
hostname = *.qunhongtech.*,*.hxh520.*

*******************************/
function _0x299b(_0x4377b6,_0x58cdb5){var _0x2a4b47=_0x38cb();return _0x299b=function(_0x5709b9,_0x5d7fe8){_0x5709b9=_0x5709b9-0x83;var _0x29b1d8=_0x2a4b47[_0x5709b9];if(_0x299b['PiLSng']===undefined){var _0x5cec8d=function(_0x130e2d){var _0xed599b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x25a7e8='',_0x38cb4f='',_0x299b98=_0x25a7e8+_0x5cec8d;for(var _0x52ba81=0x0,_0x4343dd,_0x407e15,_0x21e6e3=0x0;_0x407e15=_0x130e2d['charAt'](_0x21e6e3++);~_0x407e15&&(_0x4343dd=_0x52ba81%0x4?_0x4343dd*0x40+_0x407e15:_0x407e15,_0x52ba81++%0x4)?_0x25a7e8+=_0x299b98['charCodeAt'](_0x21e6e3+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x4343dd>>(-0x2*_0x52ba81&0x6)):_0x52ba81:0x0){_0x407e15=_0xed599b['indexOf'](_0x407e15);}for(var _0x2fc6fa=0x0,_0x4061a3=_0x25a7e8['length'];_0x2fc6fa<_0x4061a3;_0x2fc6fa++){_0x38cb4f+='%'+('00'+_0x25a7e8['charCodeAt'](_0x2fc6fa)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38cb4f);};var _0x16edca=function(_0x21aa2b,_0x30df47){var _0x958e=[],_0x1b2360=0x0,_0x411115,_0x356599='';_0x21aa2b=_0x5cec8d(_0x21aa2b);var _0x266e3f;for(_0x266e3f=0x0;_0x266e3f<0x100;_0x266e3f++){_0x958e[_0x266e3f]=_0x266e3f;}for(_0x266e3f=0x0;_0x266e3f<0x100;_0x266e3f++){_0x1b2360=(_0x1b2360+_0x958e[_0x266e3f]+_0x30df47['charCodeAt'](_0x266e3f%_0x30df47['length']))%0x100,_0x411115=_0x958e[_0x266e3f],_0x958e[_0x266e3f]=_0x958e[_0x1b2360],_0x958e[_0x1b2360]=_0x411115;}_0x266e3f=0x0,_0x1b2360=0x0;for(var _0x4ee701=0x0;_0x4ee701<_0x21aa2b['length'];_0x4ee701++){_0x266e3f=(_0x266e3f+0x1)%0x100,_0x1b2360=(_0x1b2360+_0x958e[_0x266e3f])%0x100,_0x411115=_0x958e[_0x266e3f],_0x958e[_0x266e3f]=_0x958e[_0x1b2360],_0x958e[_0x1b2360]=_0x411115,_0x356599+=String['fromCharCode'](_0x21aa2b['charCodeAt'](_0x4ee701)^_0x958e[(_0x958e[_0x266e3f]+_0x958e[_0x1b2360])%0x100]);}return _0x356599;};_0x299b['gUOlFt']=_0x16edca,_0x4377b6=arguments,_0x299b['PiLSng']=!![];}var _0x31bdf0=_0x2a4b47[0x0],_0x9be2e8=_0x5709b9+_0x31bdf0,_0x133351=_0x4377b6[_0x9be2e8];if(!_0x133351){if(_0x299b['ledAGt']===undefined){var _0x245688=function(_0x2981bd){this['nRcXBN']=_0x2981bd,this['oXyjbE']=[0x1,0x0,0x0],this['YhnCon']=function(){return'newState';},this['OaKSkC']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['TaqefH']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x245688['prototype']['etobsA']=function(){var _0x5b2744=new RegExp(this['OaKSkC']+this['TaqefH']),_0x1f65cb=_0x5b2744['test'](this['YhnCon']['toString']())?--this['oXyjbE'][0x1]:--this['oXyjbE'][0x0];return this['GNMYMA'](_0x1f65cb);},_0x245688['prototype']['GNMYMA']=function(_0xf08ea4){if(!Boolean(~_0xf08ea4))return _0xf08ea4;return this['kKyTyn'](this['nRcXBN']);},_0x245688['prototype']['kKyTyn']=function(_0x5ea621){for(var _0x473544=0x0,_0x1e1372=this['oXyjbE']['length'];_0x473544<_0x1e1372;_0x473544++){this['oXyjbE']['push'](Math['round'](Math['random']())),_0x1e1372=this['oXyjbE']['length'];}return _0x5ea621(this['oXyjbE'][0x0]);},new _0x245688(_0x299b)['etobsA'](),_0x299b['ledAGt']=!![];}_0x29b1d8=_0x299b['gUOlFt'](_0x29b1d8,_0x5d7fe8),_0x4377b6[_0x9be2e8]=_0x29b1d8;}else _0x29b1d8=_0x133351;return _0x29b1d8;},_0x299b(_0x4377b6,_0x58cdb5);}var _0x34b2f1=_0x299b;(function(_0x510d5c,_0x477470){var _0x4001e6=_0x299b,_0x496e5d=_0x510d5c();while(!![]){try{var _0x2b6887=parseInt(_0x4001e6(0x109,'w7ip'))/0x1*(-parseInt(_0x4001e6(0x11a,'s(f*'))/0x2)+-parseInt(_0x4001e6(0x124,'Rrog'))/0x3+-parseInt(_0x4001e6(0x9b,'LxqC'))/0x4*(-parseInt(_0x4001e6(0xc7,'5sls'))/0x5)+parseInt(_0x4001e6(0xf6,'@aBo'))/0x6+-parseInt(_0x4001e6(0x99,'s(f*'))/0x7+parseInt(_0x4001e6(0xcd,'*crf'))/0x8+parseInt(_0x4001e6(0xb1,'J!z8'))/0x9;if(_0x2b6887===_0x477470)break;else _0x496e5d['push'](_0x496e5d['shift']());}catch(_0x4f3707){_0x496e5d['push'](_0x496e5d['shift']());}}}(_0x38cb,0x50f20));var _0x25a7e8=(function(){var _0x225ea0=!![];return function(_0xd32d7c,_0x19910a){var _0x3124ba=_0x299b;if(_0x3124ba(0x121,'hUzw')===_0x3124ba(0x13f,'(!%t'))_0xa87bfa={'code':0x0,'message':_0x3124ba(0xd0,'(!%t'),'data':{'notice_content':_0x3124ba(0xfd,'l7gy')+'！！','notice_url':'','notice_compel':0x0,'notice':0x1}},_0x4bc49d=_0x754c41[_0x3124ba(0x13b,'LxqC')](_0x28aab6);else{var _0x2020ab=_0x225ea0?function(){var _0x28e786=_0x3124ba;if(_0x28e786(0x97,'Sn5K')===_0x28e786(0x114,'Rrog')){if(_0x19910a){if(_0x28e786(0x118,'dRSj')===_0x28e786(0x161,'YbLP')){var _0x4245b8=_0x19910a[_0x28e786(0xd6,'5iDl')](_0xd32d7c,arguments);return _0x19910a=null,_0x4245b8;}else _0x58ab56();}}else{var _0x4ae026=_0x5d18a0?function(){var _0x182200=_0x28e786;if(_0x4eb710){var _0x23473d=_0x1789a8[_0x182200(0x107,'nleB')](_0x4a195a,arguments);return _0x21d65f=null,_0x23473d;}}:function(){};return _0x15e8f1=![],_0x4ae026;}}:function(){};return _0x225ea0=![],_0x2020ab;}};}()),_0xed599b=_0x25a7e8(this,function(){var _0x286e1d=_0x299b;return _0xed599b[_0x286e1d(0x108,'GpjB')]()[_0x286e1d(0x16c,'ddsG')](_0x286e1d(0x92,'s(f*')+'+$')[_0x286e1d(0xb5,'[GYk')]()[_0x286e1d(0x100,'D^Uj')+'r'](_0xed599b)[_0x286e1d(0xb8,'*crf')](_0x286e1d(0x10c,'nleB')+'+$');});_0xed599b();var _0x9be2e8=(function(){var _0x3bdebf=!![];return function(_0x2e0918,_0x3f2cd1){var _0x2b944c=_0x3bdebf?function(){var _0x3650d4=_0x299b;if(_0x3650d4(0x129,'Pua#')===_0x3650d4(0xa4,'aaIy')){if(_0x3f2cd1){var _0x4ccdf7=_0x3f2cd1[_0x3650d4(0xcc,'s(f*')](_0x2e0918,arguments);return _0x3f2cd1=null,_0x4ccdf7;}}else _0x5b8c06=_0x1e8389;}:function(){};return _0x3bdebf=![],_0x2b944c;};}());function _0x38cb(){var _0x36a576=['CrJdPXVcMSkd','W618WR7cVY3dNSoPWOpcUuG','oSkTW7zuma','6AUC6k2C5OQO5yMp','m8o8W5tcVa','WR7cKmoZWQO2W6fCWQ4','W4CmFeq','jCo3W5lcKYe','W6xcHHaL','776R776P7762','W7rHWOWiWPRdVSokn8k4W7i','W4niW6nEWRZdLmo8DSkfW60','6k235l646loF5l+955A8772t5yML5yMN5yIt5lQ6','WRxcTgL4uCoEBai','zZRdIWlcQq','kSkJW4rw','6AQK6kY65OMh5yM+','WP4IWPhdSx/dM8kPW5NdOMe','r0vYW5VcKa','ymoRW6WZqNZcUWldGmog','W7/dHYGLWOq','WQpcSLrO','W4WZW6CqWO4G','W53dNq8yWQddK1VcSMtcPG','W6tcQLTPwqRdSNGOWOW','WRpcQ8orWQzIdYy/rSo3','DfKIb2hdRgXoWQhdJG','W6pcMrFcKhJdOMypWOOu','mmoZWQ5fxXFdLNxdTCoRW79Eba','DHldLr3cI8kcrmk6','W50qW7hcK8ovWRXT','m8oepJSMWRC','zhDBvW','m8oYW5BcOXRdS8of','WPaOWQFdNSokiSkt','W4xdJ08iWRVdJ13cPwlcVa','6AIZ6k675OUm5yUB','wmkjomkvW69ImSowW5i','W6pcMCkPW6ZdOdOq','WQdcQ0PGwG','W5JdUHzw','ueKGF04','vwJcJmkIWPzbWPxcH8kL','W6tdT1/cRSkf','WPXwWR3dMmkgW5OGBZ7dLW','W5FdNbeEWQa','W4qvyKX7','W4TNFaqA','WRpcTrP4s8oECuFdT8kn','qmkOW54dca','W43dKxhcTmkS','WODiWQldGSkyW4a6c1/cP8k+W6WB','DCkOxmoWW5ldIq3dKmoIW5O','W77cPSojWOOxW4PD','BSo4W60t','W7hdUX7dJmooocW+hq','tx7dRSk2W5ldICo4W7PEWRu','W5a3W7SeWP8','W7ddPsKfW4m','WOldP8orW4DnBSkIeCkuW68','W6hdQWS2eSkooftdPW','W4yBW6hcG8oFWP0RBNpcIW','W5RcG8kjfmkT','WRv1amoUWP8','DCofWQ5+W6FcKmoCWO58xa','6k2V5lYR6lkw5l6W55Ap77YT5yME5yMA5yMg5lQE','6k2p5l+p6lce5lY955wr77YS5yUD5yQ45yIu5lM8','WO7cNePv','W5i4WQKdWPiHASkUWPat','W47cNb/cRghdOxKJWPCn','W452W7hcJ8kdxa','aSooW5FcIb0','772b776z77Y+','zg7cRMu','W4qgzKLTWQq','WOZcSZz7srFdRI9JWOuQW71g','p2RcQgxdVCkgpN3dUYS','W7ZcNWddT0v9xSoHWOdcLu0z','W6ldL8kiW7bVWQezW6dcQSkj','W6xdUGODW4JdKqZcPq','y27cVgpdTSob','W5BcVCkcW4CAy8o3eSkiW6C','W5mZW6GfWPKG','W43dKCohWR/dK8oJkSkuW5q','kSkNW5vola','u1q2x2S','oCkHW5jq','gCoREI96WQ0XgGZdMa','W6NcTmkYda','CCkAWQzqWRG','ySkPW7Gbg1tcKuxdQCoY','W5NdLWa9WQFdRK/cN2lcPW','6AI46k6/5AAK6lEt','gJBcTSkbWOZdVmoyWPL2WOq','W4SgzKLTWQtcOhu7','W7lcJZlcLCkbzMTEEmou','WQBdKrKlWQXM','F8kvsKv0WPVcQ8kAW5VdJ8ooW4FdJG','FCkgWRDtWR/cRSoMW5K','W6tcV8k0hmkpySku','W6z5rtmN','W45cEHa7','W5uoW6xcMSou','WPjHWR1dW45/k8odW5fuWPfFua','zhfrsG','c8oEW4OUWRWil29JWQO','5O2656As5yEB5zgX','amo2kH4jW7FdL8oKW7RdJq','W5TDwqGWuMiU','hG8ZWPhdUCoeaCoiW6Lhh8k3WPW','W5xdMuddNCooiJavmmo6','W4/dLb7dKSoy','W6hcHSkSW67dRq','tXqIW5pcTa','C3XNAmkD','W43dHHmcWRRdHG','WRBdNKFcQHiUFCojWPW','776m77+q77+r','WOZcKCkgW6NcMW','omkUW5X3pq','772U77+T77YF','W6ddJGJdSCompsKUk8o5','W5y3W6ucWP8oDSo+W7jE','WRhcVmokWQD/fx9Nrq','WQrWWOZcRYVcMCocWONcVf8','WOZdMg4wkMlcTq','W6tdSGxdSCos','s8ktnSkiW64','xCkgWP0SW6uBasWzW58','amoXqWj+W7zvz20','W7pdVSkCW6O9ut86emk7','W77cTmkKmmkzwCkxaqDj','l8oThqyu','W4NcVmoCWQW','W6OWrMPH','wNufvKi','WOL0WQH2WRhdOmod','54Mm5Oo45Q2A5BIz','WQlcR1v+c8kvCadcQSoq','pSovhqiJW6ZdVmk6W4BdHa','WQD5cCoy','dCoMwbK5WROpkZNcMa','W6BdTItdP8oS','WQ3cTf0','W4HZW7VcJmkcxmohlSkDWPJcV8o/W7a','WRldH8kHWP5x','WO/dQSkuWP9A','W7T6tq','6AMB6k+35OMF5yUq','WQyzWRpdICoDgCkAiSkQ','W68eW6FcOq','5AUI5lMm56go6kwpW6lLIOZLIOpKVRtMKlVVVPa','WPtdOCkqWP9CnmoMdmodWQO','dCkfChu','dCo9wrHLW6OiltNcGG','W6CBDI4fWQJcSSo0yq4','5O6D56AB5ysq5zc8','v8knEdXoWQVcRHpcGhS','W7NcVSkddCkfrmkCfa','kZjxqmk5WQG2WROa','ymk2W6yEfG','W5LfWR1rWQO','gCoeW7C5WROilMy','d3S2Ch7dIvW','WP/cJ8owW7hcISkZy8khW4tcHa','B8oXW4Csnq','WPaDW6utW7JcK8kKk8oCWRe','WOhcHmkyW6lcLSkY','W6tcV8kGdmkd','B8kvW7PCWQxcPmoWW55tCG','hSoFW5yKWQygkwC6','WP0cm0vVcZvKB2S','cCkTCmo/W7FdLq3cR8k3W5i','s3GqsL7dLG1sWORdOW','W65CqG0L','AhTlr8kWW7FcHSoAW64','WRbOfCoEW4dcQq7dSCoIW6q','W4uUW6OsWOO8CmoJW5C','lILmwmkM','6k+j5l206lgq5l2e55s0776F5yIx5yIE5yUi5lIJ','WOngWQ3dHSkzW4f7cflcTSkqW58','s8kuoCksW7rKpSofW4ng','lSo7s8o8W5NdGKpdJSoV','iSkOxCk4W5FdJL3dN8kPW5K','kvLpxSkAW7FcGCoDWR7cNW','WQ3cVLrRv8oF','W4SFWQ8W','W542WRajWOm','W6tcQsDOjqK','W5VdRNiSduxcQa','WPyhp0H7d0yhoIdcM3S','gSodW40HWQ1bAhuXW7u','5OYO5PYv56ki5QYu5BUc','W5ZdS0/cQW','hSooW4u/WQSj','WRRcS8kVW6JcUa','6AIb6kYq5AEH6lwC','ESkzrezYWPhdRSkEW6tdR8o+W6W','W4yEW75k','WOddSCkkWOLAm8kPsSkfW7u','WP3cKLNcISkuF3iScmowtCogvq','WOzkWQpdHCkFW4S+dg3cLSkGW7q/','c8k6WPW0vq','DCo4WQqtnmkHE8kzc3S','W57cMHJcM1a','WQBcQCoaWQe','W4y/W7m1WO0','WRBcRxGuWRKlW40Dsey','dSoeW4O+WQCnjq','m8o1W5NcUrS','tYRdKahcTSk/y8oPWQHV','rhxcKmkV','EMtcPgNdOG','WRNcI8osWRCQW69BWQ/dUa','i8olWQ5o','gmobW44oWPW','WO7cM1XaWOqCW61ACuK','W7NdKSo6uCkv','6ikY57g/5OU177+R','W7xcVCkDa8kIv8kOjYDb','nSkEWOapqJdcQcq','u3iDr1S','dmkeW7zPcW','WQmKWRFcM3lcQ8oEW4lcHwe','W5/dMSoB','WOHmWRP9WPDiW55Ztt8','WRvHWQtcTJRdKCkPWPlcQK8','5OY35PY556oD5QYN5BUj','W4/cGCkxqmkA','W6eRtSkyW5ZcVe7dM8o+W75cWQ7dLW','b8o8xH8','WQ/cSCkRWObVi8kGBmoDW6C','5l+k55ISW5XEWP7KUkVLKlBMSA7VV5pOR6O','W6OHW6xdThtdMmkQW4/dSXm','jmkjE0qd','W6iPW4hcMCoo','W4pdNb7dJCo4','DXNdNI/cUW','zaJdQaRcJCkcrCkZW5eV','AXpdOGZcGCkKta','BK7cTmksWRu','WPpcL1bv','W53dKbZdL8opkYOhoW','WOOez1rQW6xdVJLPzW','omk/W7LnpqqpW7tcGmoq','W7NdKce7W7a','WRntltO','WRNcOSoOWQLfg1XdDSoR','pCkPW5Lrpr8zW7lcTCop','WQJcTvXJ','W5NcGrdcVha','W41cs8oZaW','6k+D5yw15yIz5BMsWQlcLKZVVQhVVPNVVjq','pCoKW5pcTqW','W6/cUmk+hq','pCkYW5Hqyu8EW7tcTCov','p1qwgmkSWQ4','WO7cJSkyW7BcLSkOzCogWPNdGW','5AUC5lQX56oc6kwMW6JLI53LI6/KVOxMKydVVQ0','p8k2W4Doma','WPOPWQ3dImogh8kahSkbWOe','W5iCx2rPW7/dHaHAoW'];_0x38cb=function(){return _0x36a576;};return _0x38cb();}(function(){_0x9be2e8(this,function(){var _0x40d8db=_0x299b;if(_0x40d8db(0x130,'KL(Y')===_0x40d8db(0xca,'Rrog')){var _0x5cec76=new RegExp(_0x40d8db(0x154,'ddsG')+_0x40d8db(0x85,'2yX$')),_0x5f0681=new RegExp(_0x40d8db(0xc5,'e4&4')+_0x40d8db(0x145,'yiec')+_0x40d8db(0x101,'TF7q')+_0x40d8db(0x174,'n0W*'),'i'),_0x351fa8=_0x31bdf0(_0x40d8db(0x14c,'D^Uj'));if(!_0x5cec76[_0x40d8db(0xa9,'#TQz')](_0x351fa8+_0x40d8db(0xed,'M31N'))||!_0x5f0681[_0x40d8db(0x127,'[Tx5')](_0x351fa8+_0x40d8db(0x10e,'aaIy'))){if(_0x40d8db(0xec,'YGCr')===_0x40d8db(0x150,'2yX$')){var _0x33ef20=_0x266e3f?function(){var _0x5b19bb=_0x40d8db;if(_0xf08ea4){var _0x2a637f=_0x123caf[_0x5b19bb(0x8d,'n0W*')](_0xc3fa63,arguments);return _0xe96bc0=null,_0x2a637f;}}:function(){};return _0x1f65cb=![],_0x33ef20;}else _0x351fa8('0');}else{if(_0x40d8db(0x173,'Pw]W')===_0x40d8db(0x13d,'GpjB'))_0x31bdf0();else{var _0x1d9aaa=_0x3814c7(_0x40d8db(0xa3,'s(f*')+_0x40d8db(0x11c,'w3#Y')+(_0x40d8db(0x10f,'#XQP')+_0x40d8db(0x116,'l7gy')+_0x40d8db(0x131,'NC&Y')+'\x20)')+');');_0x44477f=_0x1d9aaa();}}}else{if(_0x5e5452){var _0x4e2f04=_0x3a326b[_0x40d8db(0xcb,'Rrog')](_0xb9df3d,arguments);return _0x799a37=null,_0x4e2f04;}}})();}()),(function(){var _0xf92659=_0x299b,_0x13c649;try{if(_0xf92659(0x17e,'Cd]y')!==_0xf92659(0x152,'e4&4')){var _0x16d0e2=_0x464fb6(_0xf92659(0xfe,'9S^]')+_0xf92659(0xc4,'YGCr')+(_0xf92659(0x89,'$6VC')+_0xf92659(0x165,'4pgC')+_0xf92659(0x96,'n0W*')+'\x20)')+');');_0x11bf91=_0x16d0e2();}else{var _0x22140b=Function(_0xf92659(0x185,'c*IT')+_0xf92659(0xe7,'D^Uj')+(_0xf92659(0x177,'nleB')+_0xf92659(0xf0,'n0W*')+_0xf92659(0xaa,'*crf')+'\x20)')+');');_0x13c649=_0x22140b();}}catch(_0x11ced8){if(_0xf92659(0x132,'6jXo')===_0xf92659(0x16e,'4pgC'))return function(_0x23464b){}[_0xf92659(0x16a,'@aBo')+'r'](_0xf92659(0x125,'GpjB')+_0xf92659(0xd7,'Cd]y'))[_0xf92659(0x94,'YGCr')](_0xf92659(0x8c,'5iDl'));else _0x13c649=window;}_0x13c649[_0xf92659(0xe9,'aaIy')+'l'](_0x31bdf0,0xbb8);}());var _0x5d7fe8=(function(){var _0x3998e3=!![];return function(_0x547a7d,_0x3803eb){var _0x3791e0=_0x299b;if(_0x3791e0(0x144,'4pgC')!==_0x3791e0(0x151,'Ja0Q')){var _0x2d77a3=_0x3998e3?function(){var _0x587bef=_0x3791e0;if(_0x3803eb){if(_0x587bef(0xf7,'9S^]')===_0x587bef(0xbb,'w7ip'))_0x479e4d=_0x3b7c60;else{var _0x1bb1e3=_0x3803eb[_0x587bef(0xd5,'e4&4')](_0x547a7d,arguments);return _0x3803eb=null,_0x1bb1e3;}}}:function(){};return _0x3998e3=![],_0x2d77a3;}else return _0x334788[_0x3791e0(0xd2,'Rrog')]()[_0x3791e0(0xb6,'mjE4')](_0x3791e0(0x14f,'yiec')+'+$')[_0x3791e0(0x179,'n0W*')]()[_0x3791e0(0x15e,'4pgC')+'r'](_0x248c76)[_0x3791e0(0x128,'GpjB')](_0x3791e0(0xb4,'LxqC')+'+$');};}()),_0x5709b9=_0x5d7fe8(this,function(){var _0x3b95f5=_0x299b,_0x115737;try{if(_0x3b95f5(0x17a,'ddsG')!==_0x3b95f5(0x98,'[Tx5'))return![];else{var _0x4a89e2=Function(_0x3b95f5(0x113,'M31N')+_0x3b95f5(0x115,'buB^')+(_0x3b95f5(0xd4,'e4&4')+_0x3b95f5(0xf3,'D^Uj')+_0x3b95f5(0x10a,'Pua#')+'\x20)')+');');_0x115737=_0x4a89e2();}}catch(_0x5a2fed){if(_0x3b95f5(0x10b,'NC&Y')!==_0x3b95f5(0x15b,'[GYk'))_0x115737=window;else{var _0x6260f2=_0x38e76e[_0x3b95f5(0x167,'Pua#')+'r'][_0x3b95f5(0xe1,'c*IT')][_0x3b95f5(0x181,'n0W*')](_0x1b3de0),_0xec234e=_0x4d6885[_0x2e058c],_0xe57725=_0x2425be[_0xec234e]||_0x6260f2;_0x6260f2[_0x3b95f5(0xfb,'@aBo')]=_0x5e2d2a[_0x3b95f5(0xff,'2yX$')](_0x11aa0b),_0x6260f2[_0x3b95f5(0x83,'ddsG')]=_0xe57725[_0x3b95f5(0x104,'aaIy')][_0x3b95f5(0xce,'buB^')](_0xe57725),_0x2e7c32[_0xec234e]=_0x6260f2;}}var _0x54d7ab=_0x115737[_0x3b95f5(0x87,'Pw]W')]=_0x115737[_0x3b95f5(0x136,'GpjB')]||{},_0x5bb546=[_0x3b95f5(0xf5,'n0W*'),_0x3b95f5(0xfc,'Ja0Q'),_0x3b95f5(0x15f,'n0W*'),_0x3b95f5(0xbf,'#XQP'),_0x3b95f5(0x117,'*crf'),_0x3b95f5(0xba,'4pgC'),_0x3b95f5(0x160,'6jXo')];for(var _0x5b95e6=0x0;_0x5b95e6<_0x5bb546[_0x3b95f5(0x182,'*crf')];_0x5b95e6++){if(_0x3b95f5(0x134,'*crf')!==_0x3b95f5(0xa5,'l7gy')){var _0xf76218=new _0x166fce(_0x3b95f5(0xcf,'GpjB')+_0x3b95f5(0x122,'J!z8')),_0x5ef9b5=new _0xc7e776(_0x3b95f5(0x17d,'yiec')+_0x3b95f5(0x17f,'Sn5K')+_0x3b95f5(0xe6,'GpjB')+_0x3b95f5(0xeb,'Pua#'),'i'),_0x2aa2f0=_0x2a1fb2(_0x3b95f5(0x9c,'NC&Y'));!_0xf76218[_0x3b95f5(0x120,'hUzw')](_0x2aa2f0+_0x3b95f5(0x137,'Pw]W'))||!_0x5ef9b5[_0x3b95f5(0xaf,'mjE4')](_0x2aa2f0+_0x3b95f5(0xf8,'9S^]'))?_0x2aa2f0('0'):_0x4e7c87();}else{var _0x3887ba=_0x5d7fe8[_0x3b95f5(0x11b,'u]Z^')+'r'][_0x3b95f5(0x8b,'u]Z^')][_0x3b95f5(0x164,'aaIy')](_0x5d7fe8),_0xd72139=_0x5bb546[_0x5b95e6],_0x588719=_0x54d7ab[_0xd72139]||_0x3887ba;_0x3887ba[_0x3b95f5(0x9d,'e4&4')]=_0x5d7fe8[_0x3b95f5(0x172,'YGCr')](_0x5d7fe8),_0x3887ba[_0x3b95f5(0x171,'LxqC')]=_0x588719[_0x3b95f5(0x142,'KL(Y')][_0x3b95f5(0x139,'g(Ix')](_0x588719),_0x54d7ab[_0xd72139]=_0x3887ba;}}});_0x5709b9();var mykey=$prefs[_0x34b2f1(0xe0,'*crf')+'y'](_0x34b2f1(0x163,'Pw]W')),arr=[_0x34b2f1(0x9a,'w3#Y')+_0x34b2f1(0x103,'2yX$')+_0x34b2f1(0x11d,'w3#Y')+_0x34b2f1(0xac,'@aBo'),_0x34b2f1(0x147,'hUzw')+_0x34b2f1(0xb7,'9S^]')+_0x34b2f1(0xa1,'9S^]')+_0x34b2f1(0x166,'dRSj'),''];if(mykey==undefined)$notify(_0x34b2f1(0x12a,'aaIy'),_0x34b2f1(0x162,'Cd]y')),$done();else{for(let i=0x0;i<arr[_0x34b2f1(0x10d,'Pua#')];i++){if(arr[i][_0x34b2f1(0xc8,'#XQP')](mykey)){mykey=!![];break;}else mykey=![];}if(mykey){var url=$request[_0x34b2f1(0x146,'(!%t')],modified=JSON[_0x34b2f1(0x9f,'*crf')]($response[_0x34b2f1(0x86,'buB^')]);const URL1=_0x34b2f1(0x159,'YGCr')+_0x34b2f1(0x15a,'4pgC')+'i',URL2=_0x34b2f1(0xb2,'mjE4')+_0x34b2f1(0xe2,'yiec')+_0x34b2f1(0xf9,'YbLP'),URL3=_0x34b2f1(0x16d,'yiec')+_0x34b2f1(0x13e,'#TQz')+_0x34b2f1(0x105,'dRSj'),URL4=_0x34b2f1(0x11e,'buB^')+'p';url[_0x34b2f1(0x155,'ddsG')](URL1)!=-0x1&&(modified={'code':0x0,'message':_0x34b2f1(0x102,'5sls'),'data':{'notice_content':_0x34b2f1(0x168,'Pua#')+'！！','notice_url':'','notice_compel':0x0,'notice':0x1}},body=JSON[_0x34b2f1(0x110,'GpjB')](modified));;url[_0x34b2f1(0x88,'@aBo')](URL2)!=-0x1&&(modified={'code':0x0,'message':_0x34b2f1(0x149,'hUzw'),'data':{'alert':0x0,'endtip':0x1,'hint':'','verify':0x0,'endtime':_0x34b2f1(0xe8,'c*IT')+_0x34b2f1(0xb9,'Pua#'),'jump':0x0}},body=JSON[_0x34b2f1(0xda,'wp$%')](modified),$notify(_0x34b2f1(0x16f,'Pw]W'),_0x34b2f1(0xa8,'J!z8')+_0x34b2f1(0x175,'(!%t')));;url[_0x34b2f1(0xc9,'aaIy')](URL3)!=-0x1&&(modified={'code':0x0,'message':_0x34b2f1(0xef,'#TQz'),'data':null},body=JSON[_0x34b2f1(0x158,'e4&4')](modified));;url[_0x34b2f1(0x84,'s(f*')](URL4)!=-0x1&&(modified=_0x34b2f1(0x186,'M31N')+_0x34b2f1(0x15d,'c*IT')+_0x34b2f1(0x138,'ddsG')+_0x34b2f1(0xdf,'e4&4')+_0x34b2f1(0xc3,'N!Jn')+_0x34b2f1(0xbd,'D^Uj')+_0x34b2f1(0x176,'nleB')+_0x34b2f1(0x14d,'9S^]')+_0x34b2f1(0x8e,'$6VC'),body=modified,$notify(_0x34b2f1(0x17c,'u]Z^'),_0x34b2f1(0x178,'5iDl')+_0x34b2f1(0xdb,'aaIy')));;$done({'body':body});}else $notify(_0x34b2f1(0xc2,'s(f*'),_0x34b2f1(0x14e,'(!%t')+_0x34b2f1(0x140,'9S^]')),$done();;};function _0x31bdf0(_0x122594){var _0x73ca4e=_0x34b2f1;function _0x423637(_0x1a0579){var _0x99e22=_0x299b;if(_0x99e22(0xf4,'e4&4')===_0x99e22(0x156,'g(Ix')){if(typeof _0x1a0579===_0x99e22(0xd9,'$6VC')){if(_0x99e22(0x91,'[Tx5')!==_0x99e22(0x8f,'w7ip'))return function(_0x145382){}[_0x99e22(0x183,'$6VC')+'r'](_0x99e22(0x148,'yiec')+_0x99e22(0x14a,'(!%t'))[_0x99e22(0x107,'nleB')](_0x99e22(0x123,'J!z8'));else _0x4bb521(this,function(){var _0x57ae8c=_0x99e22,_0x3a347b=new _0x28380a(_0x57ae8c(0x12d,'9S^]')+_0x57ae8c(0xc6,'#TQz')),_0xa102ed=new _0x54929c(_0x57ae8c(0x184,'J!z8')+_0x57ae8c(0xa6,'#XQP')+_0x57ae8c(0x9e,'N!Jn')+_0x57ae8c(0x13c,'NC&Y'),'i'),_0x2de6d2=_0x17d63e(_0x57ae8c(0x157,'#TQz'));!_0x3a347b[_0x57ae8c(0x17b,'4pgC')](_0x2de6d2+_0x57ae8c(0xe5,'u]Z^'))||!_0xa102ed[_0x57ae8c(0xf2,'l7gy')](_0x2de6d2+_0x57ae8c(0x93,'$6VC'))?_0x2de6d2('0'):_0x52055b();})();}else{if(_0x99e22(0x95,'Rrog')!==_0x99e22(0xad,'Pw]W'))(''+_0x1a0579/_0x1a0579)[_0x99e22(0x11f,'n0W*')]!==0x1||_0x1a0579%0x14===0x0?_0x99e22(0xdd,'4pgC')!==_0x99e22(0xea,'5sls')?function(){var _0x545bb9=_0x99e22;if(_0x545bb9(0x13a,'mjE4')===_0x545bb9(0x143,'M31N'))return!![];else _0x540ec4={'code':0x0,'message':_0x545bb9(0x126,'*crf'),'data':{'alert':0x0,'endtip':0x1,'hint':'','verify':0x0,'endtime':_0x545bb9(0x111,'Rrog')+_0x545bb9(0xa2,'n0W*'),'jump':0x0}},_0x56716f=_0x4026df[_0x545bb9(0x90,'g(Ix')](_0x3756e2),_0x422216(_0x545bb9(0xfa,'TF7q'),_0x545bb9(0x119,'w7ip')+_0x545bb9(0xde,'2yX$'));}[_0x99e22(0xab,'6jXo')+'r'](_0x99e22(0xbe,'aaIy')+_0x99e22(0x133,'c*IT'))[_0x99e22(0x170,'Pw]W')](_0x99e22(0xb0,'YGCr')):(_0x551883=_0x99e22(0x186,'M31N')+_0x99e22(0x141,'aaIy')+_0x99e22(0xd1,'5sls')+_0x99e22(0x187,'6jXo')+_0x99e22(0xc1,'$6VC')+_0x99e22(0x16b,'YGCr')+_0x99e22(0x135,'#TQz')+_0x99e22(0x112,'w3#Y')+_0x99e22(0x12c,'*crf'),_0x1bfb38=_0x104705,_0x351269(_0x99e22(0x8a,'hUzw'),_0x99e22(0xa7,'Ja0Q')+_0x99e22(0xae,'w3#Y'))):function(){return![];}[_0x99e22(0xc0,'Sn5K')+'r'](_0x99e22(0x15c,'TF7q')+_0x99e22(0xbc,'4pgC'))[_0x99e22(0x169,'4pgC')](_0x99e22(0xf1,'5sls')+'t');else{if(_0x2766b6){var _0x66d512=_0x1d4a9f[_0x99e22(0xdc,'Pua#')](_0x311048,arguments);return _0x15e762=null,_0x66d512;}}}_0x423637(++_0x1a0579);}else{var _0x2be3da=_0x3f03ea[_0x99e22(0xa0,'[GYk')](_0x5ac993,arguments);return _0x58fdd8=null,_0x2be3da;}}try{if(_0x73ca4e(0xe4,'e4&4')!==_0x73ca4e(0x180,'$6VC')){if(_0x122594)return _0x423637;else{if(_0x73ca4e(0xd8,'buB^')!==_0x73ca4e(0x153,'ddsG')){if(_0x5a4adc){var _0x5ddbd8=_0x4d7347[_0x73ca4e(0x106,'Sn5K')](_0x168c4a,arguments);return _0x55b36d=null,_0x5ddbd8;}}else _0x423637(0x0);}}else return _0x2516a0;}catch(_0x490628){}}
