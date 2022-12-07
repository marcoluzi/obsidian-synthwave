const mix = require('laravel-mix');
const path = require('path');
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});

mix.options({manifest: false, autoprefixer: false});
mix.sass('src/main.scss', 'obsidian.css');
mix.copy('obsidian.css', process.env.VAULT_THEMES_PATH + '/SynthWave.css');
