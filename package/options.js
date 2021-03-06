// Generated by CoffeeScript 1.8.0
(function() {
  $(function() {
    var restoreOptions, saveOptions;
    if (localStorage['filename_setting'] == null) {
      localStorage['filename_setting'] = '?member-name? - ?title?(?illust-id?)';
    }
    saveOptions = function() {
      var saveOption;
      saveOption = function(name) {
        return localStorage[name] = $("#" + name).val();
      };
      return saveOption('filename_setting');
    };
    restoreOptions = function() {
      var selectOption;
      selectOption = function(name) {
        var option;
        option = localStorage[name];
        if (option != null) {
          return $("#" + name).val(option);
        }
      };
      return selectOption('filename_setting');
    };
    restoreOptions();
    return $("#save").click(function() {
      return saveOptions();
    });
  });

}).call(this);
