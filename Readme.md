## How to setup the PRISMA client into our local codebase
```
    - npm init -y npm install typescript ts-node @types/node --save-dev 
    - npx tsc --init 
    - npm install prisma --save-dev 
    - npx prisma init --datasource-provider postgresql
    - npx prisma migrate dev --name init
    - npx prisma generate    : To use the prisma client, provide us the wrapper around the tables we created like mongoose in mongodb

```
