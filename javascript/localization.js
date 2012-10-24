$(document).bind("mobileinit", function() {
  //ローディング中のメッセージ
  $.mobile.loadingMessage = '読み込み中です';
  //読み込み失敗のメッセージ
  $.mobile.pageLoadErrorMessage = '読み込みに失敗しました';
  //ダイアログの閉じるボタンのラベル
  $.mobile.dialog.prototype.options.closeBtnText = '閉じる';
  //セレクトメニューの閉じるボタンのラベル
  $.mobile.selectmenu.prototype.options.closeText = '閉じる';
  //検索フィールドのプレースホルダー
  $.mobile.listview.prototype.options.filterPlaceholder = '検索ワードを入力してください';
  //自動で表示される戻るボタンのラベル
  $.mobile.page.prototype.options.backBtnText = '戻る';
});

