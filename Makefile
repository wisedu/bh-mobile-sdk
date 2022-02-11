.PHONY: dist
default: help

install:
	npm i --registry=https://registry.npmmirror.com --ignore-scripts

dev: install
	npm run dev

dist:
	npm run dist

deploy:
	npm run deploy

dist-lib: dist
	git add .
	git commit -m 'refine lib'

pub: dist-lib
	./node_modules/.bin/kp $(filter-out $@,$(MAKECMDGOALS))

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  开发模式"
