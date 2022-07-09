<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="language" content="pt">
    <meta name="facebook-domain-verification" content="ct721bzana98oh0y6zuftib94fa5k9" />
    <meta name="propeller" content="e91767eddc63b2a7e496835245fe4e98">
    <meta property="fb:app_id" content="1279398252524269" />
    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
    <link rel="shortcut icon" href="/img/favicon-16x16.png">
    <link rel="manifest" href="/img/site.webmanifest">
    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    {!! isset($page['props']['meta']) ? $page['props']['meta'] : '' !!}
    <title>{{ isset($page['props']['title']) ? $page['props']['title'] : 'Zapgrupos'  }}</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>    
    @isset($page['props']['role'])
      @if($page['props']['role'] === 'user')
        <script data-ad-client="ca-pub-8817634033676287" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      @endif
    @endisset

    @empty($page['props']['role'])
      <script data-ad-client="ca-pub-8817634033676287" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    @endempty
  </head>
  <body>
    {!! isset($page['props']['facebook']) ? $page['props']['facebook'] : '' !!}
    @inertia
    {!! isset($script) ? $script : '' !!}
  </body>
</html>
