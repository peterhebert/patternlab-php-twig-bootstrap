
# Bootstrap Pattern Lab

This is a Pattern Lab instance based upon the [Standard Edition for Twig](https://github.com/pattern-lab/edition-php-twig-standard). This adds build tools and patterns for the [Bootstrap](https://getbootstrap.com/) framework.

## Packaged Components

The following components are pre-packaged:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-twig`: [documentation](https://github.com/pattern-lab/patternengine-php-twig#twig-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-twig), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-twig)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-twig-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-twig-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-twig-default)
* `pattern-lab/starterkit-twig-base`: manually placed in `source` [GitHub](https://github.com/pattern-lab/starterkit-twig-base)

## Installing

Please follow the directions for installing [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) and [node.js](https://nodejs.org/).

### Install this projet's dependencies

Install Composer packages:

    composer install

Install Node packages:

    npm install

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### List all of the available commands

To list all available commands type:

    php core/console --help

To list the options for a particular command type:

    php core/console --help --[command]

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    php core/console --generate

### Watch for changes and re-generate Pattern Lab

To watch for changes and re-generate the front-end for Pattern Lab type:

    php core/console --watch

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a seperate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

