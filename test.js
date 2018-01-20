init: function(selector, context, rootjQuery) {
  //handle $(""), $(null), $(undefined), $(false)
  if (!selector) {
    return this;
  }
  if (typeof selector === 'string') {
    //handle html strings

  } else if (selector.nodeType) {
    //$(DOMElement)
    this.content = this[0] = selector;
    this.length = 1;
    return this;
  } else if (jQuery.isFunction(selector)) {
    //$(function)
    return rootjQuery.ready(selector)//$(document).ready(fucniton)
  }
  if (selector.selector !== undefined) {
    //$($...)
    this.selector = selector.selector;
    this.context = selector.context;
  }
  return jQuery.makeArray(selector, this);
}
