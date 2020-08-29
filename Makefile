all: webpack create_canister build_canister install_canister

build_canister:
	dfx build

create_canister:
	dfx canister create --all
	
install_canister:
	dfx canister install --all -m reinstall

webpack: node_modules/.bin/webpack
node_modules/.bin/webpack:
	yarn install