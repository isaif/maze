# Maze game

The basic logic of game was taken from the *The Modern Javascript Bootcamp Course*.
The tutorial involved using CDN to import matter-js but here I make use of Node modules.


Nodejs provides easy way to add and remove modules and separating modules into dev dependency or production dependency.
Making use of modules and separating codes into multiple files I can keep my code more readable, maintainable and scaleable.


Since browsers doesn't support modules or support is still incomplete, I had to use webpack.
Webpack have other benefits as well like bundling and supporting any module format.


## Modules
1. **matter-js** complete game was created using the matter-js
2. **webpack** helps in bundling and using modules so we don't have to rely on CDN to get modules.
3. **eslint** to provide linting.
4. **prettier** to fix code formatting.
6. **eslint-config-prettier** and **eslint-plugin-prettier** to make eslint work with prettier.
 

##Credit  
[The Modern Javascript Bootcamp Course (2020)](https://www.udemy.com/share/102gjm/)  
Lesson 22. Javascript with the Canvas API
