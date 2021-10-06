<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="facebook-domain-verification" content="ct721bzana98oh0y6zuftib94fa5k9" />
    <meta name="propeller" content="e91767eddc63b2a7e496835245fe4e98">
    <meta property="fb:app_id" content="1279398252524269" />
    {!! isset($meta) ? $meta : '' !!}
    <meta name="ahrefs-site-verification" content="9166d4c52b2af56d66b35a02ad4659b88541705de263e9f39ba5305247d9b085">
    <title>{{ isset($page['props']['title']) ? $page['props']['title'] : 'Zapgrupos'  }}</title>
    <link rel="shortcut icon" href="{{ request()->root().'/images/favicon.ico' }}" />
    <link rel="icon" href="{{ request()->root().'/images/favicon.ico' }}" />

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    
    <script data-ad-client="ca-pub-8817634033676287" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    
  </head>
  <body>  
    {!! isset($page['props']['facebook']) ? $page['props']['facebook'] : '' !!}
    @inertia
    {!! isset($script) ? $script : '' !!}
  </body>
</html>