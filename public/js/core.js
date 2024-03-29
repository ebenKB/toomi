$("document").ready(() => {
  // initialize cookie
  initCookie();

  // initialize scroll events on the scrollabel targets
  scroll('learnMore', 'gettingStarted', 800, 260);
  scroll('to-social-media', 'social-media', 1000, 0);
  scroll('to-overview', 'overview',500, 200 );
  scroll('to-information-collection', 'information-collection', 500, 200);
  scroll('to-log-data', 'log-data', 500, 200);
  scroll('to-cookies', 'cookies', 500, 200);
  scroll('to-sharing-info', 'sharing-info', 500, 200);
  scroll('to-contacting', 'contacting', 900, 0);
// set scroll positions
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

  document.getElementById('acceptCookie').addEventListener('click', () => {
    setCookie();
  });
});

// button.addEventListener('click', event => {
//   button.innerHTML = `Click count: ${event.detail}`;
// });

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

// listen to scroll events on the page
function scroll(id, to, delay, offset) {
  if ($(this).data('offset') != undefined) offset = $(this).data('offset');
  $('#'+id).click(() =>{
    $('html, body').animate({
      scrollTop: $('#'+to).offset().top - offset
    }, delay)
  });
}

function initCookie() {
  const cookie = getCookie('_has_accepted_cookie')
  console.log(cookie)
  if(!cookie || cookie == null || cookie == 'undefined') {
    // show accept cookie form.
    showCookie();
  }
}

function setCookie() {
  // add a cookie to the browser
  document.cookie= "_has_accepted_cookie=true;"+"Expires="+ Date.now()+36000;

  // hide the cookie form
  $('#cookieWrapper').addClass('hide');
};

function showCookie() {
 $('#cookieWrapper').removeClass('hide')
}

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}