"use strict";var hasClass=function(e,n){return(" "+e.className+" ").indexOf(" "+n+" ")>-1},resetValidations=function(e,n){Array.from(e.querySelectorAll(n)).forEach(function(e){e.classList.remove("required-entry","validation-failed","brand-required"),e.nextElementSibling&&hasClass(e.nextElementSibling,"validation-advice")&&(e.nextElementSibling.style.display="none")})},addRequiredClassToInputs=function(e,n,a,r){resetValidations(a,r),Array.from(e).forEach(function(e){e.classList.add(n)})},validationFormListener=function(e,n){var a=".required-entry-input",r=".required-entry-select";Array.from(n).forEach(function(n){n.querySelector("input[type=radio]").addEventListener("change",function(n){console.log(n.target),addRequiredClassToInputs(n.target.parentElement.querySelectorAll(a),"required-entry",e,a),addRequiredClassToInputs(n.target.parentElement.querySelectorAll(r),"validate-select",e,r)})})},initCreditCardOption=function(e,n){var a=e.querySelector("input[type=radio]"),r=".required-entry-input";a.checked=!0,addRequiredClassToInputs(a.parentElement.querySelectorAll(r),"required-entry",n,r)},handleEbanxForm=function(e,n,a){var r=document.querySelector("#"+a),t=r.querySelectorAll(".ebanx-credit-card-option");validationFormListener(r,t),initCreditCardOption(t[0],r);var i=function(e){return document.getElementById(e)},d=null,l=i("ebanx_"+n+"_"+e+"_"+n+"_name"),o=i("ebanx_"+n+"_"+e+"_"+n+"_number"),u=i("ebanx_"+n+"_"+e+"_expiration"),s=i("ebanx_"+n+"_"+e+"_expiration_yr"),c=i("ebanx_"+n+"_"+e+"_"+n+"_cid"),v=i("ebanx_"+n+"_"+e+"_token"),_=i("ebanx_"+n+"_"+e+"_brand"),b=i("ebanx_"+n+"_"+e+"_masked_card_number"),m=i("ebanx_"+n+"_"+e+"_device_fingerprint"),y=i("ebanx_"+n+"_"+e+"_mode"),f=i("ebanx_"+n+"_"+e+"_integration_key"),g=i("ebanx_"+n+"_"+e+"_country"),p=i("ebanx-error-message"),E=void 0!==i("payment_form_ebanx_"+n+"_"+e),h="sandbox"===y.value?"test":"production";EBANX.config.setMode(h),EBANX.config.setPublishableKey(f.value),EBANX.config.setCountry(g.value);var x=function(e){var n=document.querySelector("#review-buttons-container > button");void 0!==n&&n&&(n.disabled=e)},q=function(e){if(!e.data.hasOwnProperty("status")){var n=e.error.err,a=n.message;return n.message||(EBANX.errors.InvalidValueFieldError(n.status_code),a=EBANX.errors.message||"Some error happened. Please, verify the data of your credit card and try again."),p.innerHTML=a,x(!1),setTimeout(function(){Validation.showAdvice({advices:!1},p,"ebanx-error-message")},1e3),!1}d=e.data,v.value=d.token,_.value=d.payment_type_code,b.value=d.masked_card_number,m.value=d.deviceId,x(!1)},A=function(){o.value.length&&l.value.length&&u.value.length&&s.value.length&&c.value.length&&(d||(x(!0),EBANX.card.createToken({card_number:parseInt(o.value.replace(/ /g,"")),card_name:l.value,card_due_date:(parseInt(u.value)||0)+"/"+(parseInt(s.value)||0),card_cvv:c.value},q)))},L=function(){d=null,v.value="",_.value="",b.value="",m.value="",Validation.hideAdvice({advices:!1},p)};E&&(l.addEventListener("blur",A,!1),o.addEventListener("blur",A,!1),u.addEventListener("blur",A,!1),s.addEventListener("blur",A,!1),c.addEventListener("blur",A,!1),l.addEventListener("change",L,!1),o.addEventListener("change",L,!1),u.addEventListener("change",L,!1),s.addEventListener("change",L,!1),c.addEventListener("change",L,!1))};
//# sourceMappingURL=checkout.js.map
