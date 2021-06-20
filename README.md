This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## DOCKER

# https://mherman.org/blog/dockerizing-a-react-app/

docker build -t sample:dev .
docker-compose up -d --build
docker-compose stop

## GIT

rm -rf .git
rm -rf node_modules

# ReactSomeCode

## Travis CI


## Eslint
https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba
https://dev.to/thatanjan/setup-eslint-prettier-with-typescript-and-react-3loe
Bug fix: https://newbedev.com/failed-to-load-config-airbnb-base-to-extend-from-code-example
Run at root : npx eslint src/* --fix

## Update Latest NPM
https://www.npmjs.com/package/npm-check
https://dev.to/craigaholliday/how-to-update-all-your-npm-packages-at-once-458j
## Router
Testing V6:
https://typescript.tv/react/upgrade-to-react-router-v6/#React-Router-v6
https://reacttraining.com/blog/react-router-v6-pre/

Bug fix: yarn add history react-router-dom@next

## Cache
npm cache clear --force
npm cache rm --force
npm cache verify 

## TODOS
add axios
add authentication