# Williams Sonoma Challange

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# test application
$ yarn test
```

A public static build of this project is hosted on [Netlify](https://netlify.com): Candidate Jorge Castellon Jr - [Williams Sonoma Challenge](https://williams-sonoma-challenge.castellon.dev)

Based on the details provide, I was able to pull in data from a json file and populate the html with that data and also create custom routes based on the id of the products.

Unfortunately, when trying to host on a public server, there were server error when trying to read a file on a different server. Since this wasn't a traditional API to get json data I moved over the json file content into the static folder, which in turn creates a public route that the app can pull from replicating the same call but in the same server. I could have build an API, my personal choice would have been a cloudflare worker, to pull the content of the file and send it over through a GET request. I decided not to since this was a challenge for a front end application build and not a Full stack build

I used to frameworks to help me build this vue application, [Nuxt.js](https://nuxtjs.org) and [Vuetify](https://vuetifyjs.com). I have used multiple different frameworks over the past 2 years but these 2 frameworks have been the frameworks of my choice for over a year now.

Nuxt.js is similar to [Next.js](https://nextjs.org). It provides a lot of tooling to quickly and efficiently built Vue.js apps. For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Vuetify is a design framework that is based on the [Material Design](https://material.io) framework. It has many prebuilt and functional components that can save time when trying to build tedious components, like a navigation slide bar.

Unfortunately, I have not used unit testing much to be able to use it efficiently in this project. A majority of what jest code I wrote I also learned during the process of this challenge. I'm still in the beggining phases of unit testing, so my understand of how it all works or how it should work isn't there. But I won't let that stop me! While learning unit testing I found out how we can automate QA testing which will be a huge help for my personal projects later on.
