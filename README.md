# django webpack.js vue.js whatever...
Trying to make a django application that can have javascript components...

## What it would be?
Using django template power combined with single file components of javascript frameworks like .vue or .jsx files.  
A boilerplate to start up a full frontend and backend project very quick without needing to wrestle with rest api in both front and backend.  
Server Side Render using lovely django instead of killing time with nuxt.js.  

## Getting started
Clone project:
```
git clone https://github.com/usefss/django-vue.git
cd django-vue
```
Startup webpack:
```
npm install
npm start
```
Startup django:
```
pip install -r requirements.txt
./manage migrate
./manage runserver 0.0.0.0:8000
```
Go to [127.0.0.1:8000](http://127.0.0.1:8000), and you can see a dynamic rendered vue component starting on page.

## Contributions
Any change that makes this better is welcomed.

## What will happen?
Changing webpack to compile all files in src folder to seperate .js for sake of code spliting optimization.  
Add something to django watcher to auto load compiled .js files to template base and reload browser.  
Structure project in a charming shape.  

## Usefull links 
[django webpack loader package](https://github.com/owais/django-webpack-loader) for django it is very large for my purpose and has problems with webpack>=4.  
[django + webpack](https://www.valentinog.com/blog/webpack-django/), explains about splitChunks and the options for stacking javascript with django.  
[django + webpack](https://pascalw.me/blog/2020/04/19/webpack-django.html), very simple approach.  
[working example repo](https://github.com/pascalw/django-webpack-boilerplate), showing the last working state, why I am doing this? :/  