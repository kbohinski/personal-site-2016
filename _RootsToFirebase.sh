#!/bin/bash

roots clean
roots compile -e production

cd ../_firebase
rm -rf public
cp -r ../personal-site-2016/public/ ./public/

firebase deploy