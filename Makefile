init:
	yarn

build: rss node_modules
	yarn build

rss:
	node ./build/build_rss.js

node_modules: package.json
	yarn

deploy: build
	./deploy.sh

clean:
	rm -rf dist

.PHONY: build
