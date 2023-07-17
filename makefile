default: build

build:
	tsc typescript/* --target es6 --outDir .
