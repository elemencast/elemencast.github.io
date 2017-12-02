build: node_modules
	yarn build

rss: build
    node ./build/build_rss.js

deploy: rss
	./deploy.sh

clean:
	rm -rf dist

init:
	yarn

node_modules: package.json
	yarn

.PHONY: build
