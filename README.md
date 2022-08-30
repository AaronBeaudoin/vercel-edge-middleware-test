# Vercel Edge Middleware Test

1. Deploy to Vercel.
2. Go to `/`. Your request should be processed by the `_default` edge function.
3. Go to `/rewrite`. Your request should be processed by the `_alternate` edge function due to the `x-middleware-rewrite: /_alternate` header set in the `_rewrite` edge middleware function.
3. Go to `/redirect`. Your request should be processed by the `_alternate` edge function due to the 307 redirect to `/_alternate` in the `_redirect` edge middleware function.

## The Problem

In both cases (`/rewrite` and `/redirect`), it does not appear to be possible to pass any information on to the `/_alternate` edge function.

However, suppose you want to set a header (or any data) in `_rewrite` and have that data be available in `_alternate`. How can this be accomplished? (Observe that the `x-custom` header set in `_middleware` can be seen in the network tab of your browser devtools, but not in the list on the page itself.)
