describe("togglePartials", function() {
  var $page, $partialToAppend;

  beforeEach(function() {
    $page = $('<div>').attr('id', 'page').appendTo(document.body)
    $partialToAppend = $('<div>').text("Test Text")
  })

  afterEach(function() {
    page.remove()
  })

  it("should add the content to the page", function() {
    Controller.togglePartials($partialToAppend)
    expect($page.text()).toMatch($partialToAppend.text())
  });

  it("should remove the current content from the page", function() {
    var $partialToRemove = $('<div>').text("Remove Me");
    $page.append($partialToRemove);
    Controller.togglePartials($partialToAppend);
    expect($page.text()).toNotMatch($partialToRemove.text())
  });

});

describe('showPartial',function() {
  var $page, $partial
  beforeEach(function() {
    $page = $('<div>').attr('id', 'page').appendTo(document.body)
    $partial = $('<div>').text("some text")
  })

  afterEach(function() {
    $page.remove()
  })

  it('should show passed in partial', function() {
    Controller.showPartial($partial)
    expect($page.text()).toMatch($partial.text())
  })
})
