## How do you need in project

nodejs >= 12
mongodb cloud
yarn

## How to install project

git clone: git@github.com:mayconbalves/my-diary.git or https://github.com/mayconbalves/my-diary

Enter backend folder and run command: `npm i` or `yarn`

Inside backend/src/index.js in line 10 do you have this code `const mongoDB = process.env.MONGODB_URI` 
you need to configure the key of cluster you created in mongodb cloud inside your .bash

After run `yarn start` or `npm run start`

Enter frontend folder and run command  `npm i` or `yarn`

And run `yarn start` and enjoy
