/*校验手机号*/

import {passwordLength} from "./variousHint";

// let phoneReg = /!/;
/*
function checkMobile(str) {
    var re = /^1\d{10}$/
    if (re.test(str)) {
        alert("正确");
    } else {
        alert("错误");
    }
}

checkMobile('13800138000'); //调用*/

// let passwordReg = /^([A-Z]+[a-z]+[0-9]+)|([A-Z]+[0-9]+[a-z]+)|([0-9]+[A-Z]+[a-z]+){8,20}$/;

let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;

export function checkPasword(str) {
   // console.log('passwordReg.test(str)', passwordReg.test(str));
   if (!passwordReg.test(str)) {
      passwordLength()
   }

   return passwordReg.test(str);
}
