# Vercel Edge Middleware Test

There are 4 edge functions in this example, 2 of which are edge middleware.

- The `_default` function renders an HTML page displaying some data from the request.
- The `_alternate` function is a separate function that is functionally identical to `_default`.
- The `_rewrite` middleware uses `x-middleware-rewrite` to rewrite to the `_alternate` function. It attempts to pass along query parameters in the rewrite URL and sets a `x-custom` header.
- The `_redirect` middleware uses a 307 response to redirect to the `_alternate` function. It attempts to pass along query parameters in the redirect URL and sets a `x-custom` header.
- The `_rewrite` and `_redirect` middlewares are run by going to `/rewrite` and `/redirect`.
- All non-matched routes go to `_default` as a fallback.

## Reproduction

1. Deploy to Vercel.
2. Go to `/random?test`. Your request should be processed by the `_default` edge function.  
   **Pay attention to the URL and headers rendered from the edge function.**
3. Go to `/rewrite?test`. Your request should be processed by the `_alternate` edge function due to the `x-middleware-rewrite: /_alternate` header set in the `_rewrite` edge middleware function.  
   **Observe that the `?test` query parameter is not present in the edge function URL.**  
   **Observe that the `x-custom` header is not present in the edge function headers.**  
   **Check your browser network devtools to observe that `x-custom` is still present.**
4. Go to `/redirect?test`. Your request should be processed by the `_alternate` edge function due to the 307 redirect to `/_alternate` in the `_redirect` edge middleware function.  
   **Observe that the `?test` query parameter is not present in the edge function URL.**  
   **Observe that the `x-custom` header is not present in the edge function headers.**  
   **Check your browser network devtools to observe that `x-custom` is still present.**

## The Problem

In both the `_rewrite` and `_redirect` edge middleware functions, it does not appear to be possible to pass any information forward to the `_alternate` edge function.

### Via Query Parameters

In both the `_rewrite` and `_redirect` edge middleware functions the new URL has the request URL's query parameters manually appended. However, as you can see by going to `/rewrite?test` or `/redirect?test`, the `request.url` passed to the `_alternate` edge function has no query parameters. However, for `_rewrite`, it is still present in the browser address bar URL as expected.

### Via Headers

In both the `_rewrite` and `_redirect` edge middleware functions a `x-custom` header is added. However, as you can see by going to `/rewrite` or `/redirect`, the `x-custom` header is not in `request.headers`. However, for `_rewrite`, it is still in the headers sent to the browser visible via the network devtools as expected.

## The Question

Suppose you wish to rewrite or redirect using edge middleware and manually pass/set some new data forward to whatever function might be called next. You probably want to preserve the query parameters, and you might want to set some custom headers with some custom data. Maybe you even want to directly modify the URL (`request.url`) that the next function will have.

Currently it doesn't appear that any of this is possible, based on the example in this repository. Is there some way to accomplish this goal (passing data from edge middleware to some "next" function)?
