lyonjs.org
----------

Source of the [lyonjs.org](http://lyonjs.org) website.

## Install

*Following assumes you have git, node and npm installed and available in your $PATH. Was tested and developped for node 0.6.x, recommended version < 0.6.6.*

    # clone the repo, wherever you like
    git clone git://github.com/lyonjs/lyonjs.github.com.git
    cd lyonjs.github.com

    # the default branch is gh-pages instead of master
    # actually change to master and create the branch on first clone
    git checkout -b master origin/master

    # Install all the deps
    npm install

## Description

The site's content is generated against the [project's wiki](https://github.com/lyonjs/lyonjs.github.com/wiki). The `package.json` defines two script with the correct configuration to generate into the `out/` folder, and performs the necessary changes to prepares the gh-pages branch and move files accordingly.

* `out/`: generation destination dir
* `scripts/`: custom scripts / tasks used by the generation process.
* `lyonjs.github.com.wiki/`: the repo's that is .gitignored and cloned / pull whenever the generate task is run.
* `layouts/`: includes the page template used during the generation process, and assets to copy into `out/`.

## Usage

The package.json defines a couple of npm-script you may use through the `npm run-script <script>` command.

    "scripts": {
      "generate": "node bin/generate --config grunt.js --tasks scripts",
      "deploy": "node bin/generate --config grunt.js --tasks scripts deploy",
      "watch": "node bin/generate --config grunt.js --tasks scripts reload",
      "reload": "node bin/generate --config grunt.js --tasks scripts reload"
    }

* `generate`: That script will:
  * guess the correct location of repo's wiki from git config
  * perform a first clone of wiki's repo, or pull from origin master if it exists.
  * generate the site's content in `out/`

* `deploy`: Prepares the gh-branch
  * switch to gh-pages or create an empty branch if it not exists yet.
  * generates site's content in `out/`
  * performs the necessary git commands to move, add and commit files accordingly.

* `watch`: (*alias reload*)
  * perfrom a first build
  * spawn a local http server on top of `out/` dir
  * Watch for file changes in wiki content, or layout templates / assets.
  * retrigger a build and send an event through socket.io to reload (last) connected client.

In any case, you may want to run the command directly instead of running
an npm script. The command should include the path the the local config
file and the path to the custom tasks dir, followed by the task(s) to
run.

    node bin/generate --config grunt.js --tasks scripts/ <task>

**Note**: The generation process and scripts should work on windows too.
The deploy script deploy may experience some issue on windows though,
but should work well on osx / unix systems.

So, to update (or init) the remote wiki repo and generate a new build,
you'll need to run:

    node bin/generate --config grunt.js --tasks scripts/ update generate

To preview the generated output, simply cd into `out/` and start a local
http server like so:

    cd out/ && serve


## Deploy

On windows, you may need to run manually the necessary git commands of
the deploy script. That is:

    git symbolic-ref HEAD refs/heads/gh-pages
    rm .git/index
    node bin/generate --config grunt.js --tasks scripts
    # or npm run-script generate
    git add out/ .gitignore CNAME favicon.ico -f
    git clean -fdx -e node_modules
    git mv out/* .
    git commit -m "the commit msg"

And then push to origin upstream to reflect changes on the live sites,
you'll need necessary github permissions to be able to do so.

## How to contribute

Head over to the [project's wiki](https://github.com/lyonjs/lyonjs.github.com/wiki), and use the github web interface do edit pages.

Then, you'll have to yell at one of the lyonjs member to update the live site:

* [@temsa](https://twitter.com/temsa)
* [@louis_remi](https://twitter.com/louis_remi)
* [@filirom1](https://twitter.com/filirom1)
* [@mklabs](https://twitter.com/mklabs)

We'll regenerate and push to upstream the new site's content to reflect your changes asap.

As of now, the live site is hosted on github. Ideally, we'll move to custom server and may automate the process a bit further (like generating the site on a regular basis via a cron job).


