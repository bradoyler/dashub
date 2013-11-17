# GitFlow (via Ember App Kit [EAK]) 

GitFlow is a tool to make GitHub Issues more visible and manageable to teams using Github for issue tracking 

Ember App Kit (EAK) aims to be the foundation for ambitious web applications built with Ember. It's intended to be used either on its own or as the base scaffolding for projects using [Ember Tools](https://github.com/rpflorence/ember-tools), [generator-ember](https://github.com/yeoman/generator-ember) and a hypothetical official [executable](https://github.com/stefanpenner/ember-cli) at some point in the future.

* [EAK Documentation Site](http://stefanpenner.github.io/ember-app-kit/)

## Try it
- http://bradoyler.github.io/gitflow

## Get this project running 

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


## HowTo Deploy to Github pages 
_assumes u have already cloned this repo_

1. `$ git checkout master`
1. `$ grunt ghpages`
1. `$ git add .` 
1. `$ git commit -a -m 'github deploy'` 
1. `$ git checkout -b gh-pages`
1. `$ git merge master`
1. `$ git push origin gh-pages`
