import React from 'react';
import { Helmet } from 'react-helmet';
import '../../public/css/style.css'

export const DefaultHelmet = ({title = 'JJ Design Space'}) =>( 
<Helmet title={title} defer={false}>
    <link rel='shortcut icon' href='images/icons/favicon.ico' type='images/x-icon'/>
    <link rel='apple-touch-icon' sizes='180x180' href='images/icons/apple-touch-icon.png'/>
    <link rel='icon' type='images/png' sizes='32x32' href='images/icons/apple-touch-icon.png'/>
    <link rel='icon' type='images/png' sizes='192x192' href='images/icons/android-chrome-192x192.png'/>
    <link rel='icon' type='images/png' sizes='256x256' href='images/icons/android-chrome-256x256.png'/>
    <link rel='mask-icon' href='images/icons/safari-pinned-tab.svg' color='#406eeb'/>
    <meta name='apple-mobile-web-app-title' content='JJ Design Space'/>
    <meta name='application-name' content='JJ Design Space'/>
    <meta name='msapplication-TileColor' content='#406eeb'/>
    <meta name='theme-color' content='#406eeb'/>
    <meta property='og:image:width' content='1920'/>
    <meta property='og:image:height' content='1005'/>
    <meta property='og:title' content='JJ Design Space'/>
    <meta property='og:description'
        content='This is a portfolio site for JuanJose (JJ) Bastida, showcasing his Interaction Design works. Showing the usage of graphic design, interaction design, and coding skills.' />
    <meta property='og:url' content='jjdesign.space'/>
    <meta property='og:image' content='images/icons/og-image.jpg'/>
    <meta name='description'
        content='This is a portfolio site for JuanJose (JJ) Bastida, showcasing his Interaction Design works. Showing the usage of graphic design, interaction design, and coding skills.' />
    <meta name='google-site-verification' content='lKr7fSiQy1zcJBnhc-0eXUjRWM5udVxFH1ZyrujR-hU' />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Serif+Pro:400,600,700'
        rel='stylesheet'/>
    <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.4.2/css/solid.css'
        integrity='sha384-SYCdBxlsgGngJi9eiKt5Tk6UtOJs1Jq5eU3yZDZ+hOe0GKk/obXhHy50IYVVdJro' crossorigin='anonymous' />
    <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.6.3/css/all.css'
        integrity='sha384-LRlmVvLKVApDVGuspQFnRQJjkv0P7/YFrw84YYQtmYG4nK8c+M+NlmYDCv0rKWpG' crossorigin='anonymous' />
</Helmet>
);