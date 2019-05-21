$("document").ready(() => {
  initCookie();

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

function scroll(id, to, delay) {
  $('#'+id).click(() =>{
    $('html, body').animate({
      scrollTop: $('#'+to).offset().top
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