var QuestionActions = {
  new: function (args) {
    RouterContainer.get().transitionTo('/home');
    $.ajax({
      type: 'POST',
      url: '/question/new_question',
      data: args,
      dataType: 'JSON',
      success: function () {
        RouterContainer.get().transitionTo('/home');
      }
    });
  },

  get: function (args) {
    $.ajax({
      type: 'POST',
      url: '/question/get_questions',
      data: args,
      dataType: 'JSON'
    }).done(function (data, textStatus, jqXHR) {
      QuestionDispatcher.dispatch({
        actionType: 'GET_QUESTIONS',
        data: data
      });
    });
  }
}