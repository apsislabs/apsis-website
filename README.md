# Apsis Website
## Running in development
This site uses [Gatsby](https://www.gatsbyjs.org/).

Requires Node, NPM.
Good tool to have: Gatsby CLI.

To run: `gatsby develop` (with Gatsby CLI) or `npm run develop`

## Adding a Blog Post
Use an existing post as a reference, they live in src/pages/blog_posts

## Deploy Infrastructure

Note: Doesn't currently work on windows with the beta multi environment cli for amplify unless you install globally

* `npx amplify init` select dev or prod
* `npm amplify push`

## Deploy Code:

If you have an aws profile setup on you machine:
`npm run deploy-dev -- --profile apsis`

If you want to just pass in secrets:
`AWS_ACCESS_KEY_ID={YOUR KEY} AWS_SECRET_ACCESS_KEY={YOUR SECRET} npm run deploy-dev`

To deploy to prod use `npm run deploy-prod` and your favorite method of setting credentials from above

---

# Built by Apsis

[![apsis](https://s3-us-west-2.amazonaws.com/apsiscdn/apsis.png)](https://www.apsis.io)

`apsis-website` was built by Apsis Labs. We love sharing what we build! Check out our [other libraries on Github](https://github.com/apsislabs), and if you like our work you can [hire us](https://www.apsis.io/work-with-us/) to build your vision.
