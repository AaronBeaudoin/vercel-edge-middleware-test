# Vercel Edge Middleware Test

1. Deploy to Vercel.
2. Go to `/`. See that it works.
3. Go to `/test`. See that `x-spaghetti: monster` header is present, indicating that middleware ran, but the `_default` edge function never ran, so the page is blank.
