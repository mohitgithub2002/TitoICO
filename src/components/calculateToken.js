const tokenPrices = {};

const Null = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
const _wbnbAddress = "0x90D694ab4eA9737b21a363E35b406e740238D239";
const _usdtAddress = "0xaB0011b2Ac2B095c6EeC8e82eE7E55CE7A1e1a22";
const _usdcAddress = "0xa0106242975e8281EBb2dcdab5F3705d424c74a8";

const Beps = 10000;

tokenPrices[Null] = 1620.93; // 1620.93 USD in 1 ETH
tokenPrices[_wbnbAddress] = 214.82; // 214.82 USD in 1 BNB
tokenPrices[_usdtAddress] = 1.0; // 1 USDT in 1 USD
tokenPrices[_usdcAddress] = 1.0; // 1 USDC in 1 USD

const rate = [100, 150, 200, 500];

function calculateToken(_stage, _crypto, _amount) {
  
  const _rate = rate[_stage];
  let _tokens;

  if (_crypto === Null) {
    _tokens = (tokenPrices[Null] * _amount * _rate * 100) / Beps;
  } else if (_crypto === _wbnbAddress) {
    _tokens = (tokenPrices[_wbnbAddress] * _amount * _rate * 100) / Beps;
  } else if (_crypto === _usdtAddress) {
    _tokens = (tokenPrices[_usdtAddress] * _amount * _rate * 100) / Beps;
  } else if (_crypto === _usdcAddress) {
    _tokens = (tokenPrices[_usdcAddress] * _amount * _rate * 100) / Beps;
  }
  
  return _tokens;
}
export default calculateToken;
// const token = calculateToken(0, _wbnbAddress, 1);
// console.log("token", token);
