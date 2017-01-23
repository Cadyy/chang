$(document).ready(function () {
	var rotationMultiplier = 3.6;
	// 匹配id以"circle"结尾的
	$( "div[id$='circle']" ).each(function() {
		// 保存其所有class到数组里面
		var classList = $( this ).attr('class').split(/\s+/);
		// Iterate over the array
		for (var i = 0; i < classList.length; i++) {
		   /* 如果有一个百分比类，取实际百分比并应用css转换在指定百分比类的所有出现，即使对于没有以“circle”结尾的id的div */
		   if (classList[i].match("^p")) {
			var rotationPercentage = classList[i].substring(1, classList[i].length);
			var rotationDegrees = rotationMultiplier*rotationPercentage;
			$('.c100.p'+rotationPercentage+ ' .bar').css({
			  '-webkit-transform' : 'rotate(' + rotationDegrees + 'deg)',
			  '-moz-transform'    : 'rotate(' + rotationDegrees + 'deg)',
			  '-ms-transform'     : 'rotate(' + rotationDegrees + 'deg)',
			  '-o-transform'      : 'rotate(' + rotationDegrees + 'deg)',
			  'transform'         : 'rotate(' + rotationDegrees + 'deg)'
			});
		   }
		}
	});
});