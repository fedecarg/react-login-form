# Authentication with React and Auth0

## Documentation

- [Create React App](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Getting started

```
cd react-auth0-login
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see the React app.

## Deployment
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Testing

Current approach is split into the following:

* Functional test: UI test against mocked API. This will cover user journeys
* Unit test: Smallest testable part of application

### Running browser test on Browserstack

```
$ npm run test:browser
```

### Running browser test locally

```
$ npm run test:browser:local
```

### Debugging browser test

Run browser test without headless mode:

```
$ npm run test:browser:debug
```

# Continuous Integration
CircleCI treats tags and branches differently when deciding which job should run:

* **Master branch**: CircleCi triggers the `build`, `lint`, `test` and `deploy_to_dev` jobs
* **Any branch, except master**: CircleCi triggers the `build`, `lint` and `test` jobs.
* **Any tag**: CircleCi triggers the `build`, `lint`, `test`, and `deploy_to_(dev|test|staging|prod)` jobs.

# Deployment

## CircleCI
You can trigger a CircleCI job by creating and pushing a tag:
```
$ npm version <patch|minor|major> -m "Upgrade to version %s"
$ git push origin <version>
```

Or, you can execute the following bash script:
```
$ sh aws/circleci-deploy.sh --version <patch|minor|major>
To github.com:fedecarg/react-auth0-login.git
 * [new tag]         v0.1.00 -> v0.1.00
Deploying tag v0.1.00 ...
```


