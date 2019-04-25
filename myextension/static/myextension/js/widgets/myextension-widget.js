/* -*- mode: espresso; espresso-indent-level: 8; indent-tabs-mode: t -*- */
/* vim: set softtabstop=2 shiftwidth=2 tabstop=2 expandtab: */

(function(CATMAID) {

  "use strict";

  var MyextensionWidget = function() {
    this.widgetID = this.registerInstance();
    this.idPrefix = `myextension-widget${this.widgetID}-`;
  };

  $.extend(MyextensionWidget.prototype, new InstanceRegistry());

  MyextensionWidget.prototype.getName = function() {
    return 'Myextension Widget ' + this.widgetID;
  };

  MyextensionWidget.prototype.getWidgetConfiguration = function() {
    return {
      helpText: 'Myextension Widget: ',
      controlsID: this.idPrefix + 'controls',
      createControls: function(controls) {
        controls.appendChild(document.createTextNode('Controls go here'));
      },
      contentID: this.idPrefix + 'content',
      createContent: function(container) {
        container.appendChild(document.createTextNode('Content goes here'));
      },
      init: function() {}
    };
  };

  MyextensionWidget.prototype.destroy = function() {
    this.unregisterInstance();
  };

  CATMAID.registerWidget({
    name: 'My Extension Widget',
    description: 'Widget associated with the myextension app',
    key: 'myextension-widget',
    creator: MyextensionWidget
  });

})(CATMAID);
