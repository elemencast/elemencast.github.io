build: rss node_modules
	yarn build

rss:
	node ./build/build_rss.js

deploy: build
	./deploy.sh

clean:
	rm -rf dist

init:
	yarn

node_modules: package.json
	yarn

.PHONY: build
