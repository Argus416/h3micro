## Client image

```shell
docker tag h3micro-client:latest h3micro.azurecr.io/h3micro-client && docker push h3micro.azurecr.io/h3micro-client
```

## Server image

```shell
docker tag h3micro-server:latest h3micro.azurecr.io/h3micro-server && docker push h3micro.azurecr.io/h3micro-server
```

## Run production images

```shell
docker compose -f docker-compose-production.yaml up
```

# docker cp 72713bcb350e:/usr/share/elasticsearch/config/certs/ca/ca.crt /tmp/.

# curl --cacert /tmp/ca.crt -u elastic:mohamad https://localhost:9200
