# Jenkins surveillance page

Thin backend and ui to show jenkins build statuses through the Jenkins REST-API.

## Configuration

In the `/ui` folder:

````
mv .surveillance.config.js.in .surveillance.config.js && cp .secrets.config.js.in .secrets.config.js
````

* Add a [jenkins token](https://jenkins.io/blog/2018/07/02/new-api-token-system/) to `.secrets.config.js`

* Edit `.surveillance.config.js` to your preferences.


## Build Setup

``` bash
cd ui
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
