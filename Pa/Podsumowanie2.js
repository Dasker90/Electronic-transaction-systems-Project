script type="text/javascript">
// <![CDATA[
Array.prototype.random = function(limit){
	if (typeof limit == 'undefined' || limit < 0) limit = 1;
	else if (!limit) limit = this.length;

	for (var i = 0, source = this, target = new Array(), n = source.length; i < limit && n > 0; i++){
		do { var index = Math.random(); } while (index == 1);
		index = Math.floor(index * n);
		target.push(source[index]);
		source[index] = source[--n];
	}
	return target;
}

document.write(new Array(
//tablica zawierająca bazę tekstów
'Tekst 1',
'Tekst 2',
'Tekst 3'
).random().join(''));
// ]]>
</script>