#!/bin/sh
n=1
while [ $n -le 50 ]
do
    curl -s lookup-service.application
    echo -e "\n--------------------"
    n=$(( n+1 ))
done