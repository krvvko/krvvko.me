# [krvvko.me](krvvko.me) - Website 

### Tests:
<a href="https://github.com/krvvko/krvvko.com/actions"><img src="https://github.com/krvvko/krvvko.com/workflows/build/badge.svg"></a>
- `krvvko.me/tests` - Tests
## Frameworks and libraries used:
- Laravel and all connected to it libs

## File System and code:

- `krvvko.me/routes/web.php` - Main routes
``` php
// Default Laravel route that I'm using
Route::get('name', function () {
    return view('name');
})->name("name");
```
- `krvvko.me/resources/views/layout` - Main layout
``` php
// Function that printing the page's
// content besides header and footer 
@yield("body")
```
- `krvvko.me/public/styles` - Main stylesheets 
- `krvvko.me/public/src` - Main resources (images etc.) 
- `krvvko.me/config/app` - Main config (lang change, timezone change, etc.) 
- `krvvko.me/database/db.sqlite` - Main database (not included in git)
- `krvvko.me/app/Http/Controllers` - Main controllers

## Available pages and features: 
- [x] Home page
  - [x] Random article after every refresh
  - [x] Articles
  - [x] Header
    - [x] Different pages links
    - [x] Animated Logo
  - [x] Footer
    - [x] Reserved rights text and link
    - [x] Contact me section
    - [x] Animated logo-link in the middle
- [ ] About Me page
- [ ] My projects page
- [x] Domain [krvvko.me](krvvko.me)
- [x] Https used 
- [x] Mobile adoptation 
