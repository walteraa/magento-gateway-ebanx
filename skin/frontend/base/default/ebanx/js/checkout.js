<<<<<<< HEAD
"use strict";var waitFor=function(t,n){var r=setInterval(function(){var e=t();if(null==e)return!1;clearInterval(r),n(e)},500)},hasClass=function(e,t){return-1<(" "+e.className+" ").indexOf(" "+t+" ")},resetValidations=function(e,t){Array.from(e.querySelectorAll(t)).forEach(function(e){e.classList.remove("required-entry","validation-failed","brand-required"),e.nextElementSibling&&hasClass(e.nextElementSibling,"validation-advice")&&(e.nextElementSibling.style.display="none")})},addRequiredClassToInputs=function(e,t,n,r){resetValidations(n,r),Array.from(e).forEach(function(e){e.classList.add(t),hasClass(e,"hidden-input-brand")&&(e.classList.add("brand-required"),e.classList.remove("required-entry"))})},validationFormListener=function(t,e){var n=".required-entry-input",r=".required-entry-select";Array.from(e).forEach(function(e){e.querySelector("input[type=radio]").addEventListener("change",function(e){addRequiredClassToInputs(e.target.parentElement.querySelectorAll(n),"required-entry",t,n),addRequiredClassToInputs(e.target.parentElement.querySelectorAll(r),"validate-select",t,r)})})},initCreditCardOption=function(e,t){var n=e.querySelector("input[type=radio]"),r=".required-entry-input";n.checked=!0,addRequiredClassToInputs(n.parentElement.querySelectorAll(r),"required-entry",t,r)},initCreditCardWithoutSavedCards=function(e){e.querySelectorAll(".required-entry-input").forEach(function(e){e.classList.add("required-entry")}),e.querySelectorAll(".required-entry-select").forEach(function(e){e.classList.add("validate-select")})},initCreditCardForm=function(e,t){0!==e.length?(validationFormListener(t,e),initCreditCardOption(e[0],t)):initCreditCardWithoutSavedCards(t)},handleEbanxForm=function(e,t,n){waitFor(function(){return document.querySelector("#"+n)},function(e){var t=e.querySelectorAll(".ebanx-credit-card-option");initCreditCardForm(t,e)});var r=function(e){return document.getElementById(e)},i=null,a=r("ebanx_"+t+"_"+e+"_"+t+"_name"),d=r("ebanx_"+t+"_"+e+"_"+t+"_number"),u=r("ebanx_"+t+"_"+e+"_expiration"),l=r("ebanx_"+t+"_"+e+"_expiration_yr"),o=r("ebanx_"+t+"_"+e+"_"+t+"_cid"),s=r("ebanx_"+t+"_"+e+"_token"),c=r("ebanx_"+t+"_"+e+"_brand"),v=r("ebanx_"+t+"_"+e+"_masked_card_number"),_=r("ebanx_"+t+"_"+e+"_device_fingerprint"),f=r("ebanx_"+t+"_"+e+"_mode"),m=r("ebanx_"+t+"_"+e+"_integration_key"),y=r("ebanx_"+t+"_"+e+"_country"),b=r("ebanx-error-message"),p=void 0!==r("payment_form_ebanx_"+t+"_"+e),E="sandbox"===f.value?"test":"production",g=null;EBANX.config.setMode(E),EBANX.config.setPublishableKey(m.value),EBANX.config.setCountry(y.value);var h=function(e){var t=document.querySelector("#review-buttons-container > button");void 0!==t&&t&&(t.disabled=e)},x=function(e){if(!e.data.hasOwnProperty("status")){var t=e.error.err,n=t.message;return t.message||(EBANX.errors.InvalidValueFieldError(t.status_code),n=EBANX.errors.message||"Some error happened. Please, verify the data of your credit card and try again."),b.innerHTML=n,h(!1),setTimeout(function(){Validation.showAdvice({advices:!1},b,"ebanx-error-message")},500),!1}var r,a;i=e.data,s.value=i.token,c.value=i.payment_type_code,v.value=i.masked_card_number,_.value=i.deviceId,h(!1),r=g,(a=document.createEvent("Event")).initEvent("click",!0,!0),r.dispatchEvent(a)},q=function(e){var t;d.value.length&&a.value.length&&u.value.length&&l.value.length&&o.value.length&&(!(t=e.relatedTarget)||"button"!==t.type&&"span"!==t.type||(g=t),i||(h(!0),EBANX.card.createToken({card_number:parseInt(d.value.replace(/ /g,"")),card_name:a.value,card_due_date:(parseInt(u.value)||0)+"/"+(parseInt(l.value)||0),card_cvv:o.value},x)))},C=function(){i=null,s.value="",c.value="",v.value="",_.value="",Validation.hideAdvice({advices:!1},b)};p&&(a.addEventListener("blur",q,!1),d.addEventListener("blur",q,!1),u.addEventListener("blur",q,!1),l.addEventListener("blur",q,!1),o.addEventListener("blur",q,!1),a.addEventListener("change",C,!1),d.addEventListener("change",C,!1),u.addEventListener("change",C,!1),l.addEventListener("change",C,!1),o.addEventListener("change",C,!1)),d.addEventListener("input",function(e){setInterval(function(){o.setAttribute("maxlength",3),-1<(" "+e.target.className+" ").indexOf(" amex ")&&o.setAttribute("maxlength",4),-1<(" "+e.target.className+" ").indexOf(" unknown ")&&(o.value="")},200)})};
=======
"use strict";var waitFor=function(n,r){var t=setInterval(function(){var e=n();if(null==e)return!1;clearInterval(t),r(e)},500)},hasClass=function(e,n){return-1<(" "+e.className+" ").indexOf(" "+n+" ")},resetValidations=function(e,n){Array.from(e.querySelectorAll(n)).forEach(function(e){e.classList.remove("required-entry","validation-failed","brand-required"),e.nextElementSibling&&hasClass(e.nextElementSibling,"validation-advice")&&(e.nextElementSibling.style.display="none")})},addRequiredClassToInputs=function(e,n,r,t){resetValidations(r,t),Array.from(e).forEach(function(e){e.classList.add(n),hasClass(e,"hidden-input-brand")&&(e.classList.add("brand-required"),e.classList.remove("required-entry"))})},validationFormListener=function(n,e){var r=".required-entry-input",t=".required-entry-select";Array.from(e).forEach(function(e){e.querySelector("input[type=radio]").addEventListener("change",function(e){addRequiredClassToInputs(e.target.parentElement.querySelectorAll(r),"required-entry",n,r),addRequiredClassToInputs(e.target.parentElement.querySelectorAll(t),"validate-select",n,t)})})},initCreditCardOption=function(e,n){var r=e.querySelector("input[type=radio]"),t=".required-entry-input";r.checked=!0,addRequiredClassToInputs(r.parentElement.querySelectorAll(t),"required-entry",n,t)},initCreditCardWithoutSavedCards=function(e){e.querySelectorAll(".required-entry-input").forEach(function(e){e.classList.add("required-entry")}),e.querySelectorAll(".required-entry-select").forEach(function(e){e.classList.add("validate-select")})},initCreditCardForm=function(e,n){0!==e.length?(validationFormListener(n,e),initCreditCardOption(e[0],n)):initCreditCardWithoutSavedCards(n)},handleEbanxForm=function(e,n,r){waitFor(function(){return document.querySelector("#"+r)},function(e){var n=e.querySelectorAll(".ebanx-credit-card-option");initCreditCardForm(n,e)});var t=function(e){return document.getElementById(e)},i=null,a=t("ebanx_"+n+"_"+e+"_"+n+"_name"),d=t("ebanx_"+n+"_"+e+"_"+n+"_number"),l=t("ebanx_"+n+"_"+e+"_expiration"),u=t("ebanx_"+n+"_"+e+"_expiration_yr"),o=t("ebanx_"+n+"_"+e+"_"+n+"_cid"),s=t("ebanx_"+n+"_"+e+"_token"),c=t("ebanx_"+n+"_"+e+"_brand"),v=t("ebanx_"+n+"_"+e+"_masked_card_number"),_=t("ebanx_"+n+"_"+e+"_device_fingerprint"),f=t("ebanx_"+n+"_"+e+"_mode"),y=t("ebanx_"+n+"_"+e+"_integration_key"),m=t("ebanx_"+n+"_"+e+"_country"),b=t("ebanx-error-message"),p=void 0!==t("payment_form_ebanx_"+n+"_"+e),E="sandbox"===f.value?"test":"production",h=null;EBANX.config.setMode(E),EBANX.config.setPublishableKey(y.value),EBANX.config.setCountry(m.value);var g=function(e){var n=document.querySelector("#review-buttons-container > button");void 0!==n&&n&&(n.disabled=e)},q=function(e){if(!e.data.hasOwnProperty("status")){var n=e.error.err,r=n.message;return n.message||(EBANX.errors.InvalidValueFieldError(n.status_code),r=EBANX.errors.message||"Some error happened. Please, verify the data of your credit card and try again."),b.innerHTML=r,g(!1),setTimeout(function(){Validation.showAdvice({advices:!1},b,"ebanx-error-message")},500),!1}var t,a;i=e.data,s.value=i.token,c.value=i.payment_type_code,v.value=i.masked_card_number,_.value=i.deviceId,g(!1),t=h,(a=document.createEvent("Event")).initEvent("click",!0,!0),t.dispatchEvent(a)},x=function(e){var n;d.value.length&&a.value.length&&l.value.length&&u.value.length&&o.value.length&&(!(n=e.relatedTarget)||"button"!==n.type&&"span"!==n.type||(h=n),i||(g(!0),EBANX.card.createToken({card_number:parseInt(d.value.replace(/ /g,"")),card_name:a.value,card_due_date:(parseInt(l.value)||0)+"/"+(parseInt(u.value)||0),card_cvv:o.value},q)))},C=function(){i=null,s.value="",c.value="",v.value="",_.value="",Validation.hideAdvice({advices:!1},b)};p&&(a.addEventListener("blur",x,!1),d.addEventListener("blur",x,!1),l.addEventListener("blur",x,!1),u.addEventListener("blur",x,!1),o.addEventListener("blur",x,!1),a.addEventListener("change",C,!1),d.addEventListener("change",C,!1),l.addEventListener("change",C,!1),u.addEventListener("change",C,!1),o.addEventListener("change",C,!1))};
>>>>>>> master
//# sourceMappingURL=checkout.js.map
