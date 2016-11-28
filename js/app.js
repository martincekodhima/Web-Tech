$(document).ready(function () {
    _500px.init({
      sdk_key: 'bd1d93962ca5dafb586e6724fd243a352a09b874'
    });
    
    _500px.api('/photos', { feature: 'popular', page: 1 }, function (response) {
        console.log(response.data.photos);
    });
});