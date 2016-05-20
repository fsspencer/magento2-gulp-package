# Gulp Package for Magento 1.x

This is a simple skin package for Magento 1 to let you implement the following features to make you able use a quicker and fancy method of coding.

  - Gulp
  - Sass
  - Css minifier
  - Js minifier
  - Image optimizer
  - Livereload
  - Bootstrap
  - Font Awesome


### Version
1.0.0

### Requirements

You need to install the following dependences on your local environment to make this work.

* [node.js] - evented I/O for the backend. Download the latest version on https://nodejs.org and install it
* [Gulp] - the streaming build system. Once you get NodeJS installed, make sure you can use the command "npm" on your terminal. Then install gulp


### Installation

Once you installed node.js, you need Gulp installed globally (maybe you need to use admin privileges with sudo):

```sh
$ npm install -g gulp
```

Let's create a new skin package on your magento2 project.
```sh
$ cd [magento-root-directory]
$ cd app/design/frontend/[your-vendor-name]/[your-theme-name]/
$ git clone [git-repo-url] .
$ npm install -d
```
All the dependences will be downloaded to a new directory called node_modules, which should be added to your .gitignore file (in case you are using git).

Download and install LiveReload Chrome Extension from the Chrome Web Store. 

Run the gulp watcher
```sh
$ gulp watch
```

For sass you need to modify/add/remove scss files on scss/base, scss/helpers or scss/modules. Everytime you make a change on a single scss file, changes will be appended to the css/styles.css file.
Same with javascript files. 

Every script file you want to add, you need to do it on js/csutom. There is a sample file called _my_custom_scripts.js. Whenever you add or remove js files, you need to edit you gulpfile and append the file list on the array at line 46.
Such as scss files, every js modification you made, will be appended to js/script.js. 



### Implement on Magento

To make this work on Magento, you need to add css/styles.css and js/script.js at the head of each module you want. If you want to apply them on every Magento page, you need to add it on the default.xml layout file, as it comes with this package.

That's it! Have a happy coding!


For more information: www.codealist.com


### IMPORTANT (For Ubuntu users)

If you can't use gulp command on your terminal or you are receiving the error "No such file or directory...", try the following:

```sh
$ sudo apt-get --purge remove node 
$ sudo apt-get --purge remove nodejs 
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
```

That should work!

