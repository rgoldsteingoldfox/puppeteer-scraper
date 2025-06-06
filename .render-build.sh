#!/bin/bash

# Update system packages
apt-get update

# Install Chromium and dependencies
apt-get install -y wget ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 \
  libatk1.0-0 libcups2 libdbus-1-3 libgdk-pixbuf2.0-0 libnspr4 libnss3 libx11-xcb1 libxcomposite1 \
  libxdamage1 libxrandr2 xdg-utils chromium

# Confirm install
which chromium || which chromium-browser

# Install node dependencies
npm install
