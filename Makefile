all: webpack start_local_ic create_canister build_canister install_canister

reinstall: build_canister install_canister

reinstall_backend: build_backend install_canister_backend

build_backend:
	dfx build --skip-frontend

build_canister:
	dfx build

create_canister:
	dfx canister create --all
	
install_canister_backend:
	dfx canister install get_impact_now -m reinstall

install_canister:
	dfx canister install --all -m upgrade

open_frontend:
	open http://localhost:8000/?canisterId=$(shell dfx canister id get_impact_now_assets)

webpack: node_modules/.bin/webpack
node_modules/.bin/webpack:
	yarn install

start_local_ic: dfx
	dfx stop
	dfx start --background

dfx: /usr/local/bin/dfx
/usr/local/bin/dfx:
	sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"