$("document").ready(() => {
  scroll('learnMore', 'gettingStarted', 800);
// scroll positions
let last_known_scroll_position = 0;
let current_pos = last_known_scroll_position;

// add a scroll event listner
  window.addEventListener('scroll', () => {
    last_known_scroll_position = current_pos;
    current_pos = window.scrollY;
    
    window.requestAnimationFrame(() => {
      // scroll down
      if (current_pos > last_known_scroll_position) {
          // hide header 
        if (current_pos >= 200) {
          hideHeader()
        }
      } else {
        // scroll up 
        // show header
        if(last_known_scroll_position > current_pos ) {
          showHeader();
        }
      }
    });
  });
});

function showHeader() {
  $('#menu-section').removeClass('fadeOut');
  $('header-fix').removeClass('fadeOut');
  $('#menu-section').removeClass('hide');
  $('#header-fix').removeClass('hide');
}

function hideHeader() {
  $('#menu-section').addClass('fadeOut');
  $('#header-fix').addClass('fadeOut');
}

function scroll(id, to, delay) {
  $('#'+id).click(() =>{
    $('html, body').animate({
      scrollTop: $('#'+to).offset().top
    }, delay)
  });
}