 // This is for remove history of back button //
	history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };	