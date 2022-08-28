# express-mongoose-ra-json-server-demo
This project is a minimal demo for the package express-mongoose-ra-json-server.
This project uses Nx as its monorepo manager.
**Contributions are greatly welcome to improve the currently very minimal demo.**

## Running this demo project
You may need to install Nx Global CLI with `npm install -g nx`.  
To run this project locally, you may follow these steps.

### Prerequisites
- You need a MongoDB server (Tested with v4.4.6 Community) already up.
- Node.js (Tested with v16.15.0) and npm
### Setup the project files
Run these commands to clone and install dependencies:
```sh
git clone https://github.com/NathanAdhitya/express-mongoose-ra-json-server-demo.git .
npm install
```

Afterwards, change your MongoDB connection settings in `/packages/backend/src/environments/environment.ts` and replace the default value `mongodb://localhost:27017/express-mongoose-ra-json-server-demo` in the `DB_URI` variable to your connection string.
### Running the project
Run from two different terminals:
1. `nx run backend:serve`
2. `nx run frontend:serve`

You may then try to access the frontend via `http://localhost:4200`
