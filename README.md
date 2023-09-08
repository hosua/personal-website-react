# This README is incomplete

### Install all necessary node modules

`npm install`


### Make sure all submodules are also up to date

`git submodule update --remote --recursive`

Or just run the `update-submodules.sh` script.


### Start the server

`npm run start`

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (This needs to be changed, though).

# TO DO

### There are plenty of things I still need to do:

1. Move the forum into its own repository and reference it via git
   submodule.

2. Improve this README, it is missing a lot of information. 
	* Ports used by this application, and all sub-applications
	* How to set up and run...
      - the necessary databases
      - the server-side submodules

3. Use `pm2`` for all server-side hosting. Right now it is only used by
   yugioh-fm-db, but I want the forum, and any other server-side code I
   may add in the future to also use it, since it conveniently restarts
   the server should an uncaught exception occur.

4. There is more I'm forgetting, add more to this list later...
