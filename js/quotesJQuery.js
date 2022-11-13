import { availablePhilosophers } from './quotes.js';

jQuery.ui.autocomplete.prototype._resizeMenu = function () {
    var ul = this.menu.element;
    ul.outerWidth(this.element.outerWidth());
}

$('#quote_author').autocomplete({
    source: availablePhilosophers,
});
