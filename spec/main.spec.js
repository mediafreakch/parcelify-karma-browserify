describe('The parcelify plugin', function(){

    var mod = require('../index');

    it('should transform the package\'s LESS file to CSS', function() {
        expect(window.getComputedStyle(document.body).getPropertyValue('background-color')).toBe('rgb(33, 169, 227)');
    });

});
