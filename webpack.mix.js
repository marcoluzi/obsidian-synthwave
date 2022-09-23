const mix = require('laravel-mix');

mix.options({ manifest: false })
mix.sass('src/main.scss', 'obsidian.css');
