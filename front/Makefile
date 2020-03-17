CONTAINER_NAME:=test-front

build:
	@docker build -t $(CONTAINER_NAME) .

run:
	@docker run --rm -it -p 8001:8001 -v ${PWD}:/app/ --name="$(CONTAINER_NAME)" $(CONTAINER_NAME)

exec:
	@docker exec -it $(CONTAINER_NAME) sh

stop:
	@docker rm -f $(CONTAINER_NAME)
