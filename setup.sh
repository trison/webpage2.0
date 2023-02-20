#!/bin/bash

# Fix common issues on new dev environments
# TODO: dockerize or use npm shrinkwrap

# Remove old packages
rm -rf node_modules
rm package-lock.json

# Clean npm cache
npm cache clean --force

# Explicitly use Node 18
npm install react@18 react-dom@18

# Install missing package
npm install --save-dev web-vitals
