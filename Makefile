init:
	npm i

build: rss node_modules
	npm run build

rss:
	node ./build/build_rss.js

node_modules: package.json
	npm i

deploy: build
	./deploy.sh

clean:
	rm -rf dist

.PHONY: build
