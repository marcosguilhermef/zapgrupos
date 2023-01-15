<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="language" content="pt">
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
    
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <meta name="coinzilla" content="d26db9f445cba783ca304a05a0430daf" />
    
    <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "a7v77uibqr");
    </script>
    
</head>
  <body>
    {!! isset($page['props']['facebook']) ? $page['props']['facebook'] : '' !!}
    @inertia
    {!! isset($script) ? $script : '' !!}

    @isset($page['props']['role'])
      @if($page['props']['role'] === 'user')
          <script type="text/javascript">
            var amzn_assoc_ad_type = "link_enhancement_widget";
            var amzn_assoc_tracking_id = "nixeassociate-20";
            var amzn_assoc_linkid = "1f06cdab451d513b1acb8cbb189cf301";
            var amzn_assoc_placement = "";
            var amzn_assoc_marketplace = "amazon";
            var amzn_assoc_region = "US";
          </script>
          <script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>
      @endif
    @endisset

    @empty($page['props']['role'])
          <script type="text/javascript">
            var amzn_assoc_ad_type = "link_enhancement_widget";
            var amzn_assoc_tracking_id = "nixeassociate-20";
            var amzn_assoc_linkid = "1f06cdab451d513b1acb8cbb189cf301";
            var amzn_assoc_placement = "";
            var amzn_assoc_marketplace = "amazon";
            var amzn_assoc_region = "US";
        </script>
        <script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>
    @endempty
    
  </body>
</html>
