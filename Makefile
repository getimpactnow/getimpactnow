all: webpack start_local_ic create_canister build_canister install_canister

test: start_local_ic create_canister build_canister reinstall_canister

reinstall: build_canister install_canister

reinstall_backend: build_backend install_canister_backend
reinstall_frontend: build_frontend install_canister_frontend

build_backend:
	dfx build --skip-frontend

build_frontend:
	dfx build getimpactnow_assets

build_canister:
	dfx build

create_canister:
	dfx canister create --all
	
install_canister_backend:
	dfx canister install get_impact_now -m reinstall

install_canister_frontend:
	dfx canister install getimpactnow_assets -m reinstall

reinstall_canister:
	dfx canister install --all -m reinstall

install_canister:
	dfx canister install --all

get_frontend_url:
	@echo http://localhost:8888/?canisterId=$(shell dfx canister id getimpactnow_assets)

webpack: node_modules/.bin/webpack
node_modules/.bin/webpack:
	yarn install

start_local_ic: dfx
	dfx stop
	dfx start --background

clean:
	dfx stop
	rm -rf .dfx build dist node_modules
	dfx start --clean --background
	yarn
	make create_canister
	make build_canister
	make install_canister

dfx: /usr/local/bin/dfx
/usr/local/bin/dfx:
	sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"