function fbclidStrip(req) {

    var param = "fbclid";

    // Early check to avoid running a RegExp on every URL
    if (req.url.indexOf(param + "=") !== -1) {
        /*
          Unfortunately, the current URLSearchParams  object does not take into account cases
          where the query string can be just a param without a value, even though the URI RFC
          does not specify a structure.

          See more at:

          http://tools.ietf.org/html/rfc3986#section-3.4
        */
        var regExp = new RegExp("[?&]" + param + "([^&]*)");
        var results = req.url.replace(regExp, '');

        return {
            redirectUrl: results
        };
    }
}

browser.webRequest.onBeforeRequest.addListener(
    fbclidStrip,
    { urls: ["<all_urls>"] },
    ["blocking"]
)
