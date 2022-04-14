const chains: Record<string, string> = {
  '420': '2020',
  eth: '1',
  exp: '2',
  rop: '3',
  rin: '4',
  gor: '5',
  kot: '6',
  tch: '7',
  ubq: '8',
  tubq: '9',
  oeth: '10',
  meta: '11',
  kal: '12',
  dstg: '13',
  flr: '14',
  diode: '15',
  cflr: '16',
  tfi: '17',
  TST: '18',
  sgb: '19',
  elaeth: '20',
  elaetht: '21',
  eladid: '22',
  eladidt: '23',
  dthmainnet: '24',
  cro: '25',
  L1test: '26',
  shib: '27',
  'Boba Rinkeby': '28',
  L1: '29',
  rsk: '30',
  trsk: '31',
  GooDT: '32',
  GooD: '33',
  dth: '34',
  tbwg: '35',
  val: '38',
  'Telos EVM': '40',
  'Telos EVM Testnet': '41',
  kov: '42',
  pangolin: '43',
  crab: '44',
  pangoro: '45',
  xdc: '50',
  TXDC: '51',
  cet: '52',
  tcet: '53',
  ZYX: '55',
  bnb: '56',
  sys: '57',
  'Ontology Mainnet': '58',
  'EOS Mainnet': '59',
  go: '60',
  etc: '61',
  tetc: '62',
  metc: '63',
  ella: '64',
  tokt: '65',
  okt: '66',
  dbm: '67',
  SO1: '68',
  okov: '69',
  cfxtest: '71',
  idchain: '74',
  mix: '76',
  spoa: '77',
  primuschain: '78',
  GeneChain: '80',
  Meter: '82',
  MeterTest: '83',
  gttest: '85',
  gt: '86',
  nnw: '87',
  tomo: '88',
  tomot: '89',
  'gar-s0': '90',
  'gar-s1': '91',
  'gar-s2': '92',
  'gar-s3': '93',
  'Kylin Testnet': '95',
  nsc: '96',
  bnbt: '97',
  poa: '99',
  gno: '100',
  eti: '101',
  w3g: '102',
  vlx: '106',
  ntn: '107',
  TT: '108',
  xpr: '110',
  ETL: '111',
  fuse: '122',
  spark: '123',
  dwu: '124',
  'oychain testnet': '125',
  'oychain mainnet': '126',
  feth: '127',
  heco: '128',
  MATIC: '137',
  dax: '142',
  tpht: '162',
  pht: '163',
  hoosmartchain: '170',
  resil: '172',
  Seele: '186',
  BMC: '188',
  BMCT: '189',
  BTT: '199',
  aox: '200',
  EDI: '211',
  ASK: '222',
  ewt: '246',
  ftm: '250',
  hecot: '256',
  SUR: '262',
  hpb: '269',
  Boba: '288',
  kcs: '321',
  kcst: '322',
  w3q: '333',
  sdn: '336',
  tcro: '338',
  'theta-mainnet': '361',
  'theta-sapphire': '363',
  'theta-amber': '364',
  'theta-testnet': '365',
  pls: '369',
  lisinski: '385',
  ogor: '420',
  rupx: '499',
  CLASS: '555',
  tao: '558',
  'metis-stardust': '588',
  maca: '595',
  'mesh-chain-testnet': '600',
  'pixie-chain-testnet': '666',
  kar: '686',
  bcs: '707',
  tbcs: '708',
  tfeth: '721',
  cth: '777',
  aca: '787',
  haic: '803',
  clo: '820',
  tclo: '821',
  ambros: '880',
  wan: '888',
  'gar-test-s0': '900',
  'gar-test-s1': '901',
  'gar-test-s2': '902',
  'gar-test-s3': '903',
  tpls: '940',
  yeti: '977',
  ln: '998',
  twan: '999',
  Baobab: '1001',
  tnew: '1007',
  EVC: '1010',
  new: '1012',
  sku: '1022',
  tclv: '1023',
  clv: '1024',
  tbtt: '1028',
  cfx: '1030',
  'metis-andromeda': '1088',
  MATH: '1139',
  tMATH: '1140',
  iora: '1197',
  wtt: '1202',
  popcat: '1213',
  enter: '1214',
  HO: '1280',
  mbeam: '1284',
  mriver: '1285',
  mbase: '1287',
  mrock: '1288',
  cate: '1618',
  ath: '1620',
  bta: '1657',
  tsf: '1856',
  egem: '1987',
  edg: '2021',
  edgt: '2022',
  rpg: '2025',
  eco: '2100',
  esp: '2101',
  ktoc: '2559',
  zcrbeach: '3331',
  'w3q-t': '3333',
  btx: '3690',
  tftm: '4002',
  'iotex-mainnet': '4689',
  'iotex-testnet': '4690',
  es: '5197',
  UZMI: '5315',
  tsys: '5700',
  'Ontology Testnet': '5851',
  rbd: '5869',
  'pixie-chain': '6626',
  shyft: '7341',
  tscas: '7878',
  teleport: '8000',
  'teleport-testnet': '8001',
  mdgl: '8029',
  GeneChainAdn: '8080',
  Cypress: '8217',
  Kortho: '8285',
  olo: '8723',
  tolo: '8724',
  ambrostestnet: '8888',
  berg: '8995',
  'evmos-testnet': '9000',
  evmos: '9001',
  GENEC: '9100',
  trpg: '9527',
  myn: '9999',
  smartbch: '10000',
  smartbchtest: '10001',
  GEN: '10101',
  WAGMI: '11111',
  shyftt: '11437',
  tZERO: '12051',
  ZERO: '12052',
  Phoenix: '13381',
  mtt: '16000',
  mtttest: '16001',
  btcix: '19845',
  web: '24484',
  mintme: '24734',
  esn: '31102',
  got: '31337',
  fsn: '32659',
  nrg: '39797',
  PC: '42069',
  arb1: '42161',
  CELO: '42220',
  emerald: '42261',
  oasis: '42262',
  avaeth: '43110',
  Fuji: '43113',
  Avalanche: '43114',
  ALFA: '44787',
  REI: '47805',
  tnrg: '49797',
  rei: '55555',
  trei: '55556',
  'TKM-test0': '60000',
  'TKM-test1': '60001',
  'TKM-test2': '60002',
  'TKM-test103': '60103',
  BKLV: '62320',
  ecs: '63000',
  'ecs-testnet': '63001',
  TKM0: '70000',
  TKM1: '70001',
  TKM2: '70002',
  TKM103: '70103',
  ckb: '71393',
  vt: '73799',
  firenze: '78110',
  maticmum: '80001',
  usctest: '99998',
  usc: '99999',
  'qkc-r': '100000',
  'qkc-s0': '100001',
  'qkc-s1': '100002',
  'qkc-s2': '100003',
  'qkc-s3': '100004',
  'qkc-s4': '100005',
  'qkc-s5': '100006',
  'qkc-s6': '100007',
  'qkc-s7': '100008',
  bro: '108801',
  'qkc-d-r': '110000',
  'qkc-d-s0': '110001',
  'qkc-d-s1': '110002',
  'qkc-d-s2': '110003',
  'qkc-d-s3': '110004',
  'qkc-d-s4': '110005',
  'qkc-d-s5': '110006',
  'qkc-d-s6': '110007',
  'qkc-d-s7': '110008',
  aka: '200625',
  alaya: '201018',
  alayadev: '201030',
  platondev: '210309',
  platon: '210425',
  ats: '246529',
  atstau: '246785',
  SoChain: '281121',
  sparta: '333888',
  olympus: '333999',
  'arb-rinkeby': '421611',
  vpioneer: '666666',
  vision: '888888',
  elv: '955305',
  etho: '1313114',
  xero: '1313500',
  kintsugi: '1337702',
  music: '7762959',
  sep: '11155111',
  tpep: '13371337',
  ilt: '18289463',
  qki: '20181205',
  auxi: '28945486',
  JOYS: '35855456',
  aqua: '61717561',
  TOYS: '99415706',
  GTH: '192837465',
  'neonevm-devnet': '245022926',
  'neonevm-mainnet': '245022934',
  'neonevm-testnet': '245022940',
  oneledger: '311752642',
  tGTH: '356256156',
  dGTH: '486217935',
  ipos: '1122334455',
  aurora: '1313161554',
  'aurora-testnet': '1313161555',
  'aurora-betanet': '1313161556',
  'hmy-s0': '1666600000',
  'hmy-s1': '1666600001',
  'hmy-s2': '1666600002',
  'hmy-s3': '1666600003',
  'hmy-b-s0': '1666700000',
  'hmy-b-s1': '1666700001',
  'hmy-b-s2': '1666700002',
  'hmy-b-s3': '1666700003',
  hop: '2021121117',
  pirl: '3125659152',
  frankenstein: '4216137055',
  tpalm: '11297108099',
  palm: '11297108109',
  ntt: '197710212030',
  'ntt-haradev': '197710212031',
  mole: '6022140761023',
}

export default chains