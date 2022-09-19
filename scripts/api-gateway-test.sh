#!/usr/bin/env bash
n=1
while [ $n -le 50 ]
do
    curl -s https://execute-api.us-east-1.amazonaws.com/
    echo -e "\n--------------------"
    n=$(( n+1 ))
done