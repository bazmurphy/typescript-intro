# TypeScript

## Setup:

### install LOCALLY:

install typescript as dev dependency  
`npm install --save-dev typescript`  
automatically creates a new tsconfig.json file  
`npx tsc --init`  
run the compiler  
`npx tsc`  
you can add the name of the file after to specifically compile one file  
`npx tsc index`  
or in watch mode  
`npx tsc --watch`  

---
### install GLOBALLY:  

install typescript globally  
`npm install -g typescript`  
automatically create new tsconfig.json file  
`tsc --init`  
run the compiler  
`tsc`  
(you can add the name of the file after to specifically compile one file)  
`tsc index`  
or in watch mode  
`tsc --watch`  

---

## Configuration:

in `tsconfig.json`  
there are loads of options you can change depending on what you want  

This allows TypeScript to be compiled FROM Js Files:
`"allowJs": true,`  
Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files  

This allows the above to get CHECKED from JS files but NOT compiled.
`"checkJs": true,`  
Enable error reporting in type-checked JavaScript files  

`"sourceMap": true,`  
^ This is good for debugging
Create source map files for emitted JavaScript files.


What is important is :
`outDir`
and
`rootDir`  
Typically you will not have your `index.js` and `index.ts` next to each other in the root directory.  
Typically what you will see is you will have a `src` folder that has your TypeScript files which are the files you work on and you will have a `dist` folder with your actual compiled project (your javascript files)

so we should make `outDir: "./dist"`  
so when it compiles to JavaScript we want it to go into `./dist`

And `rootDir: "./src"`  
which is where we want our Source Code (the TypeScript files) to be kept.

---
