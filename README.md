#Static Website with CloudFront


##Overview
I already had a static site hosted on S3, but I wanted to take it further and make it look more production ready.
So in this project, I connected the S3 site to CloudFront (AWS CDN). Now the site loads faster, and all traffic gets redirected to HTTPS.

##Architecture
1. S3 bucket → stores the static site files (index.html, css, etc.)
2. CloudFront → distributes the content globally and handles HTTPS
   
## Steps i took
1. Created an S3 bucket and uploaded index.html.
2. Enabled static website hosting in S3.
3. Updated the bucket policy so the files could be read publicly.
4. Went to CloudFront and created a distribution with the S3 website endpoint as the origin.
5. Set the policy to redirect all HTTP requests → HTTPS.
6. Waited 20 minutes for CloudFront to finish deploying.

## Live Demo
View Website https://dxq2bvhpfgbul.cloudfront.net/
S3 static hosting settings
CloudFront distribution details
Website loading on CloudFront domain

## Screenshots 
1. S3 static hosting settings
2. CloudFront distribution details
3. Website loading on CloudFront domain
   
### What I Learned
1. CloudFront takes time to deploy changes — patience required 😅.
2. The S3 website endpoint is different from the bucket ARN (easy mistake to make).
3. Setting the policy to redirect HTTP → HTTPS is important for security.

### Issues I Faced
1. First time, I forgot to enable static hosting in the bucket.
2. Had to re-upload index.html after a cache issue with CloudFront.
