# Twitter clone

This is a decentralized twitter built on top of Lens protocol and ipfs.
We're keeping all the features of normal twitter but on a _decentralized architecture_ .

To get started, do the following :

- clone the project with `git clone https://github.com/Merdi-kim/Decentralized-twitter-clone-.git`
- Navigate into the project directory with `cd Decentralized-twitter-clone`
- install all the dependeecies with `npm install` or `yarn install`

To run the project, type `npm run dev` or `yarn dev` in your terminal. Now your project is running on http://localhost:3000

In order to be able to create profiles and post content, you'll need to set up a _.env_ .
Inside that file, set your storage key like this `NEXT_PUBLIC_STORAGE_KEY= `.

🚨 The storage key in this case will be the key that we generate from [web3.storage](https://web3.storage/) which is a service for storing data on IPFS.

Now you can start to make changes to this project and I'll be more than happy to see your PRs.

Happy coding! 💻
