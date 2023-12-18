export default function PlerdyScript() {
  // Adding the Plerdy tracking code within the function
  var _protocol =
    'https:' == document.location.protocol ? ' https://' : ' http://';
  const _site_hash_code = '64deaadeed87b36a303f733fdf231835';
  const _suid = 45702;
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
