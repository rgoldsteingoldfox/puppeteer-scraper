#!/bin/bash
apt-get update && apt-get install -y wget gnupg ca-certificates
npm install
npx puppeteer browsers install chrome
