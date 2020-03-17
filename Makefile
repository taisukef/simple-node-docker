d/up:
	@docker-compose up -d --build
	open http://localhost:8002/
	echo see src on front/index.js!
	echo type 'make d/down' to stop this docker

d/down:
	@docker-compose down

# org
c-prune:
	docker container prune

i-prune:
	docker image prune

v-prune:
	docker volume prune

prune:
	make c-prune && make i-prune && make v-prune
