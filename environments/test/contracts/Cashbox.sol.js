"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Cashbox = (function (_Pudding) {
    _inherits(Cashbox, _Pudding);

    function Cashbox() {
      _classCallCheck(this, Cashbox);

      _get(Object.getPrototypeOf(Cashbox.prototype), "constructor", this).apply(this, arguments);
    }

    return Cashbox;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Cashbox.abi = [{ "constant": true, "inputs": [], "name": "beneficiary", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "limit", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "_beneficiary", "type": "address" }, { "name": "_limit", "type": "uint256" }], "type": "constructor" }];
  Cashbox.binary = "6060604081815280610132833960a09052516080516000805433600160a060020a03199182161782556002805490911690931790925560015560ec90819061004690396000f3606060405260e060020a600035046338af3eed811460385780633ccfd60b1460495780638da5cb5b14606a578063a4d66daf14607b575b005b6083600254600160a060020a031681565b6096600254600090819033600160a060020a0390811691161460a8575b5090565b6083600054600160a060020a031681565b609660015481565b600160a060020a03166060908152602090f35b60408051918252519081900360200190f35b60015430600160a060020a0316311115606657600254600160a060020a03908116908290301631606082818181858883f1945050505050801560665760019150606656";

  if ("0x67272de9bc1290dc04fcd27055fcc42e42b1d548" != "") {
    Cashbox.address = "0x67272de9bc1290dc04fcd27055fcc42e42b1d548";

    // Backward compatibility; Deprecated.
    Cashbox.deployed_address = "0x67272de9bc1290dc04fcd27055fcc42e42b1d548";
  }

  Cashbox.generated_with = "1.0.3";
  Cashbox.contract_name = "Cashbox";

  return Cashbox;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Cashbox = factory;
}