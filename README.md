# Hydrogen website repository

This repository holds the website of the Hydrogen project.

The website can be reached via https://hydrogen-music.github.io/hydrogen-music/.

If you want to edit the documentation part of the website, please create a pull request at our [Documentation](https://github.com/hydrogen-music/documentation) repository. Do not edit the generated html of the manual/tutorial directly!

## Deployment

You can use the provided [Dockerfile](Dockerfile) to build and serve this slightly antique Jekyll page.

``` bash
docker build -t hydrogen-music .
docker run --rm -p 4000:4000 hydrogen-music
```
