[![](https://img.shields.io/amo/v/fbclid-fixed.svg)](https://addons.mozilla.org/en-US/firefox/addon/fbclid-fixed/)

# Facebook fbclid Fixer

A small Firefox extension that fixes (by removing) the `fbclid` param added by Facebook automatically to all outbound links.

## Rationale

If you want to remove the `fbclid` parameter, there are two other alternatives in the Firefox Add-on store:

* [Facebook Tracking & Ad Removal](https://addons.mozilla.org/en-US/firefox/addon/facebook-tracking-removal/), which removes ads, can apply a custom CSS stylesheet and also removes the `fbclid` param

* [nofbclid](https://addons.mozilla.org/en-US/firefox/addon/nofbclid/), which is the main inspiration for this add-on

* [Search Params Remover](https://addons.mozilla.org/en-US/firefox/addon/search-params-remover/) which removes `fbclid`, Google Analytics parameters like `utm_source` and some custom params

All these add-ons are using the `URLSearchParams` object to delete the params. This is a very nice interface for working with query params, but there's an edge case which doesn't work very well: URLs like `http://example.com?foo`.

What happens is that Facebook will add the `fbclid` parameter at the end and the link will look like this:

```
http://example.com/?foo&fbclid=1234-abcd
```

Using `URLSearchParams.delete('fbclid')` you will end up with the following URL:

```
http://example.com?foo=
```

In some cases, this might break the sites. One example is the (DirectPoll)[http://directpoll.com/] site but there are others. This add-on handles those cases slightly better and tries to do only one thing in a very simple way.

Icon made by [Prettycons](https://rbx_www.flaticon.com/authors/prettycons) and it's available for free from [FlatIcon](https://www.flaticon.com/free-icon/location_811222).
