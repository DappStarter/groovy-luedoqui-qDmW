require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name renew stereo prosper hunt merry fog ghost'; 
let testAccounts = [
"0x3da3b9928962662b740f2b8fa7474a19f58ac23cce92aaab46484b76567790f9",
"0x095b801982677afc0d95a43ef0388f0450e65587ce92bbe0d647ba679fb26203",
"0x1108774d551c63e132d654b21ea87e36126bf8303b2b68b476b6e8701dacb5f2",
"0xa477473791464646c19a2db94e044c672085013cfd8fc177e2c877825af91d8a",
"0x85cb7a1d674a69592226706491903e9e1f726f7d33ddabef18e915d122f87066",
"0x379fa89a58c7d355d97a5ba87ca39b174c3ec93521189c2e271e326f068cb5fb",
"0x7a2b98296ab6c28059cd73be517c133bf541d5adf73c2f2e436f362792b487a6",
"0x2c16396f1fc9c763b047c7bf6a1ee0cc3ed532f385432f6dbdf0e6f03eb25449",
"0x8996c801cdb304a8ecd61be9b06aea0bb9ae320b07d257c6cd87c11710deeb79",
"0x348aff9f1b7e0510ce7bdb359bb26e0e4e958275b6379f09d6270ad568f7d228"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

