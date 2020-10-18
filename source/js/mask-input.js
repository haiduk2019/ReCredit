/* import IMask from 'imask';

const phoneInput  = document.querySelector('input[name=phone-field]');
const pinInput    = document.querySelector('input[name=sms-code-field]');

if(phoneInput) {
  const phoneMask = IMask(phoneInput, {mask: '+{38} (000) 000-00-00'});
}

if(pinInput) {
  const pinMask = IMask(pinInput, {mask: '_ _ _ _'});
}
 */

$('.phone-mask').mask("+38 (999) 999-99-99");
$('.inn-mask').mask("9999999999");
$('input.sms-4digit-input').mask("9 9 9 9");
