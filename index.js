const bip39 = require('bip39')
let {hdkey} = require('ethereumjs-wallet')

const mnemonic = bip39.generateMnemonic()

console.log('Mnemonic: ' + mnemonic);

let hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));

// master key
console.log('MasterPrivateKey: ' + hdwallet.privateExtendedKey())

let wallet_hdpath = "m/44'/60'/0'/0/";

// generate wallets
for (let i = 0; i < 1; i++) {
  const wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
  const address = wallet.getAddressString();
  const publicKey = wallet.getPublicKeyString()
  const privateKey = wallet.getPrivateKeyString()
  
  console.log('['+i+'] Address:    ' + address);
  console.log('['+i+'] PublicKey:  ' + publicKey);
  console.log('['+i+'] PrivateKey: ' + privateKey);
  console.log()
}
