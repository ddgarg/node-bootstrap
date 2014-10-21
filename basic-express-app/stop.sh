#!/bin/bash
kill `ps -ef | grep index.js | grep -v grep | awk '{print $2}'`

