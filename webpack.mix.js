let Mix = require('laravel-mix');

Mix.postCss('postcss.css', 'site.css', [
  require('postcss-import'),
  require('tailwindcss')('./tailwind.js')
]);
