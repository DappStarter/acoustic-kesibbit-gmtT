require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember hole inflict enrich obtain spirit'; 
let testAccounts = [
"0x19d1c3e99e98f5741af44d39dafc1991908b943d5f11f418424b4c63552c3bb8",
"0x46358b18077d192f9de5b90a4e923a1e391699910631bf5df17e484a1c35ca60",
"0x962aff576b515a50bf299a2cc00a73a8d8c421e9347fe121ba153d3714a9b21c",
"0x150f1a61e46d7e48209161bd1cfb52498b067e76ca67706ab90453ee02079279",
"0x34521f3eaa0cf900b790f47478ba46b4ba789cf07aebc47a1dc29d7f7fbb6d96",
"0xfb04366d9b889faab458392e6c9a84c1b67669188b2ed90ddbc458f02e8aadda",
"0xf242bb0803554950587b426ae1b0d6e1bba676d0f6988c6b3bb9edfb8ea28dd0",
"0x7b0d37da09b16a4a79cd438a2fa0f8349ee6b2d22768d105ab90b3301ea67e86",
"0xefc5f23b19e6186af0454c7e9aa45ee867e507dc58fea34f217279eed94df316",
"0xe36df8df6393dcd4dd71995b219ca15bb0efdacd5501533382d6195566b2a163"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


