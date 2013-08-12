build:
	@make install
	@component build --dev
	@component build --standalone sgRandomBetween --name sgRandomBetween --out test
	@uglifyjs test/sgRandomBetween.js > test/sgRandomBetween.min.js --mangle

install:
	@component install --dev > /dev/null

.PHONY: build install