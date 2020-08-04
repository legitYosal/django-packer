# django webpack.js vue.js whatever...
future django-webpack template 
## Usefull links 
[django webpack loader package](https://github.com/owais/django-webpack-loader) for django it is very large for my purpose and has problems with webpack>=4.  
[django + webpack](https://www.valentinog.com/blog/webpack-django/), explains about splitChunks and the options for stacking javascript with django.  
[django + webpack](https://pascalw.me/blog/2020/04/19/webpack-django.html), very simple approach.  
[working example repo](https://github.com/pascalw/django-webpack-boilerplate), showing the last working state, why I am doing this? :/  

# Getting started
clone project:
```
git clone https://github.com/usefss/django-vue.git
cd django-vue
```
startup webpack:
```
npm install
npm start
```
startup django:
```
source env/bin/activate
pip install -r requirements.txt
./manage migrate
./manage runserver 0.0.0.0:8000
```
go to 127.0.0.1:8000, and you can see a dynamic rendered vue component starting on page.