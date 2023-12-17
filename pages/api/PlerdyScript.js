export default function PlerdyScript() {
  // Adding the Plerdy tracking code within the function
  var _protocol =
    'https:' == document.location.protocol ? ' https://' : ' http://';
  _site_hash_code = 'dcb0945445500bc3511a17726f';
  _suid = 34512;
  var plerdyScript = document.createElement('script');
  plerdyScript.setAttribute('defer', '');
  plerdyScript.dataset.plerdymainscript = 'plerdymainscript';
  plerdyScript.src =
    'https://d.plerdy.com/public/js/click/main.js?v=' + Math.random();
  var plerdymainscript = document.querySelector(
    "[data-plerdymainscript='plerdymainscript']"
  );
  if (plerdymainscript) {
    plerdymainscript.parentNode.removeChild(plerdymainscript);
  }
  try {
    document.head.appendChild(plerdyScript);
  } catch (t) {
    console.log(t, 'unable to add script tag');
  }
}
