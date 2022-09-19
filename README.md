## Building Docker Image

```bash
docker build . -t lookup-service-app
```

## Running Docker Container

```bash
docker run -p 8080:8080 -d lookup-service-app
```

## ECR

For pushing docker images to ECR, follow below steps:

Note: You need to create a respository named `lookup-service-app` before running below commands

```bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

docker tag lookup-service-app <account-id>.dkr.ecr.us-east-1.amazonaws.com/lookup-service-app:latest

docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/lookup-service-app:latest
```

## Test Container

```bash
kubectl run curl-debug --image=radial/busyboxplus:curl -l "type=testcontainer" -n application -it --tty  sh
```
