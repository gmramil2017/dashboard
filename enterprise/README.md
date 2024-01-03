# Dashboard Enterprise Edition

## License

Usage of files in this directory and its subdirectories, and of Dashboard Enterprise Edition features, is subject to
the [Dashboard Commercial License](https://www.metabase.com/license/commercial), and conditional on having a
fully-paid-up license from Dashboard. Access to files in this directory and its subdirectories does not constitute
permission to use this code or Dashboard Enterprise Edition features.

Unless otherwise noted, all files Copyright © 2022 Dashboard, Inc.

## Running it

### Front-end

```sh
MB_EDITION=ee yarn build-hot
```

Clear the Webpack cache using `yarn remove-webpack-cache` if you previously ran OSS edition in dev mode to avoid unexpected application behavior.

### Back-end

You need to add the `:ee` alias to the Clojure CLI command to run Dashboard Enterprise Edition.

```clj
# Start a local Dashboard server that includes EE sources
clojure -M:ee:run

# start a REPL that includes EE sources.
clojure -A:ee

# start a REPL that includes EE sources & test namespaces.
clojure -A:dev:ee:ee-dev
```
