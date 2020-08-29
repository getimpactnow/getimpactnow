all: webpack create_canister build_canister install_canister

build_canister:
	dfx build

create_canister:
	dfx canister create --all
	
install_canister:
	dfx canister install --all -m reinstall

get_frontend_canister_id:
	dfx canister id get_impact_now_assets

webpack: node_modules/.bin/webpack
node_modules/.bin/webpack:
	yarn install