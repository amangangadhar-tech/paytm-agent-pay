> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Instagram

> Manage an Instagram Business or Creator account — profile, media publishing, comments, insights, hashtags, stories, and business discovery via the Instagram Graph API.

## Overview

Phinite's **Instagram** predefined tool lets workspace agent graphs call Instagram APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage an Instagram Business or Creator account — profile, media publishing, comments, insights, hashtags, stories, and business discovery via the Instagram Graph API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Instagram User ID `ig_user_id` (required)

## Setup steps

1. Meta Developers → create app → add Instagram product → configure permissions and obtain access token for your business account.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Instagram**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

<Warning>
  Instagram API access requires a Meta Business account and app review for production use.
</Warning>

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **InstagramTools** (or search for Instagram)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Instagram:

* Get Profile: Get the Instagram Business/Creator account profile fields including username, biography, follower count, and media count.
* Get User Media: Get a paginated list of media objects published by the Instagram account.
* Get Content Publishing Limit: Get the content-publishing rate-limit status for the account (100 posts per 24h quota).
* Get Media: Get details of a specific Instagram media object by its ID.
* Publish Photo: Publish a photo to the Instagram feed. Image must be a public JPEG URL. Two-step container-then-publish flow.
* Publish Reel: Publish a Reel (short video) to Instagram. Video must be a public URL. Two-step container-then-publish flow.
* Publish Carousel: Publish a carousel (album) of up to 10 images or videos to Instagram. Each child item must have image\_url or video\_url.
* Delete Media: Delete an Instagram media object (post, story, reel, or carousel). Only works with Instagram API with Facebook Login.
* Get Media Comments: Get comments on a specific Instagram media object in reverse chronological order.
* Post Comment: Post a new comment on an Instagram media object.
* Reply To Comment: Reply to a top-level comment on an Instagram media object.
* Hide Comment: Hide or unhide a comment on an Instagram media object. Hidden comments are not visible to other users.
* Delete Comment: Delete a comment on an Instagram media object. Only the media owner can delete comments.
* Get User Insights: Get insights/metrics for the Instagram Business/Creator account (impressions, reach, profile\_views, follower\_count, etc.).
* Get Media Insights: Get insights/metrics for a specific Instagram media object (engagement, impressions, reach, saved, video\_views, etc.).
* Discover Business: Get public information about another Instagram Business or Creator account by username.
* Search Hashtag: Search for an Instagram hashtag and get its IG Hashtag ID. Max 30 unique hashtag queries per 7-day period.
* Get Hashtag Recent Media: Get recent media objects tagged with a specific Instagram hashtag. Requires the hashtag ID (use search\_hashtag first).
* Get Stories: Get the list of currently live (unexpired) stories for the Instagram account.
* Get Container Status: Check the status of a media container during publishing. Status can be EXPIRED, ERROR, FINISHED, IN\_PROGRESS, or PUBLISHED.

## Documentation & resources

* Official documentation: `https://developers.facebook.com/docs/instagram-api`

* Phinite documentation: [Instagram](https://docs.phinite.ai/docs/integrations-hub/instagram)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
