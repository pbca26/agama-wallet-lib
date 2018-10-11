'use strict';

var _komodoAssetChains = ['SUPERNET', 'REVS', 'PANGEA', 'DEX', 'JUMBLR', 'BET', 'CRYPTO', 'COQUI', 'HODL', 'MSHARK', 'BOTS', 'MGW', 'MVP', 'KV', 'CEAL', 'MESH', 'WLC', 'MNZ', 'AXO', 'ETOMIC', 'BTCH', 'BEER', 'PIZZA', 'OOT', 'NINJA', 'VOTE2018', 'GLXT', 'EQL', 'BNTN', 'PRLPAY', 'CHAIN', 'ZILLA', 'DSEC', 'VRSC', 'MGNX', 'CALL', 'CCL', 'PIRATE', 'KOIN'];

var _komodoCoins = _komodoAssetChains.concat(['CHIPS', 'KMD', 'KOMODO']);

var isKomodoCoin = function isKomodoCoin(coin, skipKMD) {
  return _komodoCoins.find(function (element) {
    if (skipKMD) {
      return element === coin.toUpperCase() && coin.toUpperCase() !== 'KMD' && coin.toUpperCase() !== 'KOMODO';
    }
    return element === coin.toUpperCase();
  });
};

// TODO: add at least 2 explorers per coin
var explorerList = {
  KMD: 'https://www.kmdexplorer.io',
  // KMD asset chains
  DION: 'https://explorer.dionpay.com',
  ZILLA: 'http://zilla.explorer.dexstats.info',
  MGNX: 'http://mgnx.explorer.dexstats.info',
  CALL: 'https://call.explorer.mycapitalco.in',
  CCL: 'http://ccl.explorer.dexstats.info',
  PIRATE: 'http://pirate.explorer.dexstats.info',
  KV: 'https://kv.kmdexplorer.io',
  OOT: 'http://explorer.utrum.io',
  BNTN: 'http://chain.blocnation.io',
  CHAIN: 'http://explorer.chainmakers.co',
  GLXT: 'http://glx.info',
  PRLPAY: 'http://explorer.prlpay.com',
  MSHARK: 'https://mshark.kmdexplorer.io',
  REVS: 'https://revs.kmdexplorer.io',
  SUPERNET: 'https://supernet.kmdexplorer.io',
  DEX: 'https://dex.kmdexplorer.io',
  PANGEA: 'https://pangea.kmdexplorer.io',
  JUMBLR: 'https://jumblr.kmdexplorer.io',
  BET: 'https://bet.kmdexplorer.io',
  CRYPTO: 'https://crypto.kmdexplorer.io',
  HODL: 'https://hodl.kmdexplorer.io',
  SHARK: 'http://SHARK.explorer.supernet.org',
  BOTS: 'https://bots.kmdexplorer.io',
  MGW: 'https://mgw.kmdexplorer.io',
  WLC: 'https://wlc.kmdexplorer.io',
  CHIPS: 'https://explorer.chips.cash',
  COQUI: 'https://explorer.coqui.cash',
  EQL: 'http://178.62.240.191',
  MNZ: 'https://mnz.kmdexplorer.io',
  BTCH: 'https://btch.kmdexplorer.io',
  BTC: 'https://blockchain.info',
  HUSH: 'https://explorer.myhush.org',
  PIZZA: 'http://pizza.komodochainz.info',
  BEER: 'http://beer.komodochainz.info',
  NINJA: 'https://ninja.kmdexplorer.io',
  VOTE2018: 'http://88.99.226.252',
  DSEC: 'https://dsec.kmdexplorer.io',
  VRSC: 'https://vrsc.kmdexplorer.io',
  // non-kmd coins
  QTUM: 'https://explorer.qtum.org',
  DNR: 'http://denarius.name',
  LTC: 'https://live.blockcypher.com/ltc/tx/',
  DOGE: 'https://live.blockcypher.com/doge/tx/',
  DASH: 'https://live.blockcypher.com/dash/tx/',
  MONA: 'https://bchain.info/MONA',
  VIA: 'https://explorer.viacoin.org',
  VTC: 'http://explorer.vertcoin.info',
  NMC: 'https://namecha.in',
  DGB: 'https://digiexplorer.info',
  CRW: 'http://ex.crownlab.eu',
  ABY: 'http://explorer.artbyte.me',
  GAME: 'https://blockexplorer.gamecredits.com/transactions/',
  MAC: 'http://explorer.machinecoin.org',
  IOP: 'http://mainnet.iop.cash',
  BTG: 'https://btgexplorer.com',
  BCH: 'https://bitcoincash.blockexplorer.com',
  ZCL: 'http://explorer.zclmine.pro',
  SNG: 'https://explorer.snowgem.org/',
  ZMY: 'https://myriadexplorer.com',
  BTX: 'http://explorer.bitcore.cc',
  BTCZ: 'https://explorer.bitcoinz.site',
  HODLC: 'http://www.fuzzbawls.pw/explore/HOdlcoin/tx.php?tx=',
  SIB: 'https://chain.sibcoin.net/en/tx/',
  ZEC: 'https://explorer.zcha.in/transactions/',
  BLK: 'https://explorer.coinpayments.net/transaction.php?chain=4&hash=',
  ARG: 'https://prohashing.com/explorer/Argentum/',
  FAIR: 'https://chain.fair.to/transaction?transaction=',
  CRAVE: 'http://explorer.craveproject.net',
  FTC: 'https://explorer.feathercoin.com',
  NLG: 'https://guldenchain.com',
  PIVX: 'http://www.presstab.pw/phpexplorer/PIVX/tx.php?tx=',
  DMD: 'https://chainz.cryptoid.info/dmd/search.dws?q=',
  EFL: 'https://chainz.cryptoid.info/efl/search.dws?q=',
  BSD: 'https://chainz.cryptoid.info/bsd/search.dws?q=',
  ERC: 'https://chainz.cryptoid.info/erc/search.dws?q=',
  SYS: 'https://chainz.cryptoid.info/sys/search.dws?q=',
  EMC2: 'https://chainz.cryptoid.info/emc2/search.dws?q=',
  IXC: 'https://chainz.cryptoid.info/ixc/search.dws?q=',
  DGC: 'https://chainz.cryptoid.info/dgc/search.dws?q=',
  XMY: 'https://chainz.cryptoid.info/xmy/search.dws?q=',
  MUE: 'https://chainz.cryptoid.info/mue/search.dws?q=',
  UNO: 'https://chainz.cryptoid.info/uno/search.dws?q=',
  VOX: 'http://206.189.74.116:3001',
  AUR: 'http://insight.auroracoin.is',
  LBC: 'https://explorer.lbry.io',
  ACC: 'http://explorer.getadcoin.com:5000',
  VIVO: 'http://vivo.explorerz.top:3003',
  GBX: 'http://explorer.gobyte.network:5001',
  FJC: 'http://explorer.fujicoin.org',
  LINX: 'http://explorer.mylinx.io/?',
  CDN: 'https://explorer.canadaecoin.ca',
  FLASH: 'https://explorer.flashcoin.io',
  XZC: 'https://explorer.zcoin.io',
  XMCC: 'http://block.monacocoin.net:8080/tx/',
  STAK: 'https://straks.info/transaction/',
  SMART: 'https://explorer3.smartcash.cc/tx/',
  RAP: 'http://explorer.our-rapture.com/tx/',
  QMC: 'http://54.38.145.192:8080/tx/',
  POLIS: 'https://explorer.polispay.org/tx/',
  PAC: 'http://usa.pacblockexplorer.com:3002/tx/',
  MNX: 'https://minexexplorer.com/?r=explorer/tx&hash=',
  BCBC: 'http://be.cleanblockchain.org/tx/',
  RDD: 'https://live.reddcoin.com',
  KOIN: 'http://3.0.32.41:3001/'
};

var explorerListExt = {
  DEX: 'http://dex.explorer.komodo.services',
  SUPERNET: 'http://supernet.explorer.komodo.services'
};

module.exports = {
  isKomodoCoin: isKomodoCoin,
  explorerList: explorerList,
  explorerListExt: explorerListExt,
  kmdAssetChains: _komodoAssetChains,
  kmdCoins: _komodoCoins // all coins that share R-addresses
};