;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['face_recognition'] = Darkroom.Plugin.extend({
    initialize: function InitDarkroomCropPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.button = buttonGroup.createButton({
        image: 'face-recognition'
      });
    }
  });
})(window, document, Darkroom, fabric);
