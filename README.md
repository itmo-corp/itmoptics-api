# IT[M]Optics API

API for ITMO history project.

## Table of contents
1. [Getting Started](#getting-started)
2. [Running](#running)
    1. [Development](#run-dev)
    2. [Production](#run-prod)
3. [Linting](#linting)
4. [Contributing](#contributing)
5. [Code of Conduct](#code-of-conduct)
6. [License](#license)

## Getting Started <a name="getting-started"></a>

You need to create a `.env` file and configure your database at first, then set up the database and start developing.

```shell
# install deps
yarn install

# run in development mode
yarn dev

# check code styles
yarn lint

# check type errors
yarn typecheck
```

---

## Running <a name="running"></a>

#### Run in _development_ mode: <a name="run-dev"></a>

Runs the application is development mode. Should not be used in production

```shell
yarn dev
# or
yarn dev:debug
```

#### Run in _production_ mode: <a name="run-prod"></a>

Compiles the application and starts it in production mode

```shell
yarn compile
yarn start
```

## Linting <a name="linting"></a>

Check code style, types and fix all linter errors

```shell
yarn lint
yarn lint:fix
yarn typecheck
```
---

## Contributing <a name="contributing"></a>

Bug reports and pull requests are welcome on GitHub at https://github.com/itmo-corp/itmoptics-api.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/itmo-corp/itmoptics-api/blob/master/CODE_OF_CONDUCT.md).


## Code of Conduct <a name="code-of-conduct"></a>

Everyone interacting in the **ITMOptics** project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/itmo-corp/itmoptics-api/blob/master/CODE_OF_CONDUCT.md).


## License <a name="license"></a>

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
*Copyright 2022 itmo-corp*
