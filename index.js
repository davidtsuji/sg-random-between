module.exports = function(_min, _max) {

	var min = _min < _max ? _min : _max
	  , max = _min < _max ? _max : _min
	  , minAndMaxAreNumbers = typeof min == 'number' && typeof max == 'number'

	return minAndMaxAreNumbers ? Math.floor(Math.random() * (max - min + 1)) + min : NaN;

}