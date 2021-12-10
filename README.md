# Burn-to-Claim Demo App
### Cross-chain Value Transfer App using [Burn-to-Claim](https://www.sciencedirect.com/science/article/abs/pii/S1389128621004369) protocol by Babu Pillai

### Prerequisites
For the purposes of building this application, knowledge of the protocol is not required. 

Knowledge of [Smart Contract](https://ethereum.org/en/developers/docs/smart-contracts/) development is advantageous. To learn more, visit my [Youtube series](https://youtube.com/playlist?list=PLH7-GRFbhInbZmSubSoaqWz40nfOK0kyH) on the Ethers.js javascript library.

### This App
This app implements the protocol on the Ethereum blockchain via [Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/). For simplicity, and cost reasons, transfers will only take place between two testnet networks (Rinkeby & Ropsten).

### Burn-to-Claim Protocol
The function of the burn-to-claim protocol is to transfer value (eg ERC20 tokens) from one blockchain to another OR timeout and return the funds.


For a successful transfer, there are 5 method calls to the blockchain. 

![BTC2022 Successful](./architecture/diagrams/BTC2022_Successful.svg)


For a failed transfer there are 3. 

![BTC2022 Timeout](./architecture/diagrams/BTC2022_Timeout.svg)

More are involved on initial setup. For the full data flow diagram, refer to [BTC2022](./architecture/diagrams/BTC2022.svg).

### The node.js version

A [proof of concept repo](https://github.com/severalpens/burn-to-claim) was built in 2020 which uses a node.js console application to demonstrate the 'happy path' for a successful transfer.

### Objective 1 - Construct UI forms for each method (step) in the dataflow diagram.

The main purpose of this repo is to take some of the console application code and use it to construct a complete React UI application. 

For example, deploying the ERC20 tokens, relevant code from the node.js version can be recycled in the construction of a form which will do the same thing. However the user will have control over the variables such as initial amount:

![oldNewExample](./architecture/OldNewExample.png)

#### NB

Ignore everything in the root directory (/) for now. The React application is located in '/client'.

