# Webpack 4 Boilerplate

## Author

[Mikael Vesavuori](http://www.mikaelvesavuori.se), 2018

## Status

Webpack 4 came out on February 24 2018 and this boilerplate initially came out the day after. Because it's still VERY early days, expect that many of your favourite plugins won't work just yet. This boilerplate should be stable for what I've made assembled. It uses a couple of alpha versions and some other odd versions to solve errors. I will likely update this as Webpack 4 support becomes more solid, also opting for more stable dependency versions.

## Why would you want to use this?

You need some very basic tooling for a current-generation web development project. Right now, with Webpack 4 being super-hot and brand spanking new, you want to try it out without having to figure out every last bit of what works and not. You may, or may not, be sure if you need all the bells and whistles but you'd much rather have a setup that is easily extensible and does the basics (build a distribution package, bundle JS, transpile ES2015 into ES5) than starting from zero.

## How it works

The `build` operation will compile/transpile and place fresh files in the `dist` folder. The `dev` command will run Webpack in development mode while watching your files. Webpack will use **index.js** as the entry point and import/require **index.html** and **styles.scss**. You can also use webpack-dev-server to run the site locally with auto-reloading.

## What does the boilerplate provide?

* [Webpack 4](https://webpack.js.org) which does bundling of JS, but also works as a simple build tool
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) which sets up a local server
* [PostCSS](https://github.com/postcss/postcss) (with [PreCSS](https://github.com/jonathantneal/precss) and [cssnext](http://cssnext.io)) so you can run super-sweet CSS whether you feel the traditional preprocessor love or you'd rather want futuristic not-yet-seen wizardry
* [Babel](https://babeljs.io) which allows transpilation of new ES2015+ code to ES5 (this boilerplate is set to output ES6 code)

## How do I use it?

* `npm run build` or `yarn build` will build your project and put it in the dist folder
* `npm run dev` or `yarn dev` will use the new development mode with watching
* `npm run server` or `yarn server` will use Webpack's dev server to run your site, auto-updating and all such things
