/======== 前略 ========

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前のチェック
    if ($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

     // フリガナのチェック
     if ($('#furigana').val() == '') {
       // エラーあり
       $('#furigana').css('background-color', '#f79999');
       error = true;
       message += 'フリガナを入力してください。\n';
     } else {
       // エラーなし
       $('#furigana').css('background-color', '#fafafa');
     }
 
     // お問い合わせのチェック
     if ($('#message').val() == '') {
       // エラーあり
       $('#message').css('background-color', '#f79999');
       error = true;
       message += 'お問い合わせ内容を入力してください。\n';
     } else {
       // エラーなし
       $('#message').css('background-color', '#fafafa');
     }
  }
});