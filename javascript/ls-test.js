var localStorageKey = "demoStorageKey";
$('#storageDemoPage').live('pagecreate', function() {
  if (Modernizr.localstorage) {
    showStoreValue();
  } else {
    $('#message').text("Unfortunately your browser doesn't support local storage");
    $('#deleteStorage').attr('disabled', 'disabled');
    $('#addToStorage').attr('disabled', 'disabled');
    $('#message').show();
  }
    $('#deleteStorage').click(function(e) {
    localStorage.removeItem(localStorageKey);
    showStoreValue();
    e.preventDefault();
    });
  $('#addToStorage').click(function(e) {
    localStorage.setItem(localStorageKey, $('#entry').val());
    showStoreValue();
    e.preventDefault();
  });
});

function showStoreValue() {
  var item = localStorage.getItem(localStorageKey);
  if (item == null) {
    item = 'Nothing in store';
  } else if (item.length === 0) {
    item = 'Store contains empty value';
  }
  $('.storeItem').text(item);
}

