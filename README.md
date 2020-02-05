# Jenkins surveillance page

Thin backend and ui to show jenkins build statuses through the Jenkins REST-API.

## Configuration

In `/ui`-folder

````
$ cp .config.ln .config && cp .secrets.ln .secrets
````

* Add a [jenkins token](https://jenkins.io/blog/2018/07/02/new-api-token-system/) to `.secrets`

* Edit `.config` to your preferences.


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
