# DasHub 
#### a heads-up for agile teams using github issues

DasHub is a tool to make GitHub Issues more visible and manageable to teams using Github for issue tracking 

It uses Ember App Kit (EAK), which aims to be the foundation for ambitious web applications built with Ember. It's intended to be used either on its own or as the base scaffolding for projects using [Ember Tools](https://github.com/rpflorence/ember-tools), [generator-ember](https://github.com/yeoman/generator-ember) and a hypothetical official [executable](https://github.com/stefanpenner/ember-cli) at some point in the future.

* [EAK Documentation Site](http://stefanpenner.github.io/ember-app-kit/)

## Try it
- http://bradoyler.github.io/dashub

## Get it running :running:

1. Install node.js from http://nodejs.org
1. Clone this repo
1. Inside the project directory, run `npm install`
1. Install `grunt-cli` globally: `sudo npm -g install grunt-cli`
1. `npm install -g bower`
1. `bower install`
1. `gem install bundler`
1. `bundle install`
1. Run `grunt server` to get a local development server running
1. The app will be running at http://0.0.0.0:8000


## Deploy to Github pages :boom:
_assumes u cloned this repo and master is up-to-date_

1. `$ git checkout gh-pages`
1. `$ git merge master` 
1. `$ grunt ghpages`
1. `$ git add .` 
1. `$ git commit -am 'github deploy'` 
1. `$ git push origin gh-pages`

## Contribute (2 ways)

1. Submit a Pull request (we won't judge you)
1. Star this repo. It helps encourage more contributions. :clap:


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bradoyler/dashub/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

