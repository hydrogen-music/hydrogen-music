#syntax=docker/dockerfile:1
FROM ruby:2.7.8-slim-bullseye

MAINTAINER theGreatWhiteShark <princess.trudildis@posteo.de>

WORKDIR /app
ADD . /app

RUN apt-get update
RUN apt-get install -y make gcc g++

RUN gem install commonmarker -v '0.17.11'

# Update bundler
RUN bundle update --bundler

## Install dependencies
RUN bundle install

## Forward port
EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
