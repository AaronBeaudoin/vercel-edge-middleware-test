# Vercel Edge Middleware Test

1. Deploy to Vercel.
2. Go to `/`. Your request should be processed by the `_default` edge function.
3. Go to `/random`. Your request should also be processed by the `_default` edge function.
4. Go to `/_alternate`. Your request should still be processed by the `_default` edge function, because there is no filesystem handle in `config.json#routes` to cause `_alternate` to be called.
5. Go to `/middle`. Your request should be processed by the `_alternate` edge function due to the `x-middleware-rewrite` header in `_middleware`. However, suppose you want to set a header (or any data) in `_middleware` and have that data be available in `_alternate`. How can this be accomplished? (Observe that the `x-custom` header set in `_middleware` can be seen in the network tab of your browser devtools, but not in the list on the page itself.)
