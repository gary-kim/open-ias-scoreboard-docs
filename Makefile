SHELL := /bin/bash
HUGO := hugo

.PHONY: dep build build-production build-prod prod serve

build-prod: build-production

prod: build-production

dep:
	git submodule update --init --recursive

build: 
	$(HUGO) ${extra_args}

build-production:
	HUGO_ENV=production $(HUGO) --minify ${extra_args}

serve:
	$(HUGO) serve ${extra_args}