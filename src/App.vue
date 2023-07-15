<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main role="main" class="">
    <header class="navbar" data-navbar="{ sticky: true }">
      <a href="#se1" class="navbar-skip-link" data-skip-link="">Skip door naar content</a>
      <div class="navbar-meta" data-navbar-meta="">
        <div class="navbar-container">
          <ul class="navbar-meta-links">
            <li class="is-active" itemprop="name"><a itemprop="url" href="/">Privé</a></li>
            <li itemprop="name"><a itemprop="url" href="/zakelijk">Zakelijk</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-container">
        <input id="navbar-menu-state" class="navbar-menu-state" type="checkbox" data-navbar-menu-toggle=""
          autocomplete="off">
        <a class="navbar-logo" href="/" title="Terug naar de homepage"></a>
        <nav class="navbar-menu" role="navigation">
          <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="navbar-menu-list"
            data-navbar-menu="">
            <li itemprop="name" class=" is-primary-item" data-navbar-menu-dropdown="">
              <a class="navbar-link" data-navbar-menu-item="" itemprop="url" href="/shop" title="Mobiel">Mobiel</a>
              <div class="navbar-menu-sub">
                <button class="navbar-menu-sub-back" data-navbar-menu-back="">Mobiel</button>
                <div class="navbar-menu-sub-container">
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/shop/alle-telefoons" title="Telefoons">Telefoons</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/shop/alle-telefoons" title="Alle telefoons">Alle telefoons</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/shop/aanbiedingen" title="Aanbiedingen">Aanbiedingen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/losse-telefoons" title="Losse telefoons">Losse telefoons</a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://accessoires.t-mobile.nl/" title="Accessoires">Accessoires</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/iphone/iphone-11" title="iPhone 11">iPhone 11</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/iphone/iphone-11-pro" title="iPhone 11 Pro">iPhone 11 Pro</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/iphone/iphone-11-pro-max" title="iPhone 11 Pro Max">iPhone 11 Pro
                          Max</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/samsung/galaxy-note-10" title="Samsung Galaxy Note 10">Samsung Galaxy
                          Note 10</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/samsung/galaxy-s10" title="Samsung Galaxy S10">Samsung Galaxy S10</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/mobiel-abonnement" title="Abonnementen">Abonnementen</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/go-unlimited" title="Unlimited">Unlimited</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/shop/alle-telefoons" title="Met telefoon">Met telefoon</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-abonnement/sim-only" title="Sim Only">Sim Only</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-abonnement/verlengen" title="Verlengen">Verlengen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/shop/alle-tablets" title="Tablets">Tablets</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/4g-voor-thuis" title="4G voor Thuis">4G voor Thuis</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/dual-sim-esim" title="eSIM">eSIM</a>
                      </li>
                      <li class="has-button">
                        <a href="/zakelijk/diensten" itemprop="url" class="button-primary button-small">Naar
                          Diensten</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-promo-column">
                    <figure class="navbar-image-promo">
                      <a href="#">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          alt="Promo image product alt" data-srcset="/images/huawei-p30pro-front-back.png"
                          data-lazy-loader="">
                      </a>
                      <figcaption>
                        <span class="text-uppercase text-small text-warning pt-3">
                          <span>Promo description label</span>
                        </span>
                        <span>Promo description</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="navbar-menu-sub-promo-column">
                    <figure class="navbar-image-promo">
                      <a href="#">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          alt="Promo image product alt" data-srcset="/images/huawei-p30pro-front-back.png"
                          data-lazy-loader="">
                      </a>
                      <figcaption>
                        <span class="text-uppercase text-small text-warning pt-3">
                          <span>Promo description label</span>
                        </span>
                        <span>Promo description</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </li>
            <li itemprop="name" class=" is-primary-item" data-navbar-menu-dropdown="">
              <a class="navbar-link" data-navbar-menu-item="" itemprop="url" href="/thuis" title="Thuis">Thuis</a>
              <div class="navbar-menu-sub">
                <button class="navbar-menu-sub-back" data-navbar-menu-back="">Thuis</button>
                <div class="navbar-menu-sub-container">
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/thuis/shop/alle-pakketten" title="Pakketten">Pakketten</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/thuis/alles-in-1" title="Internet, TV &amp; Vast Bellen">Internet, TV
                          &amp; Vast Bellen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet-en-tv" title="Internet &amp; TV">Internet&amp; TV</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet" title="Internet Only">Internet Only</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-thuis" title="Mobiel + Thuis">Mobiel + Thuis</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/shop/alle-pakketten"
                          title="Pakkettenoverzicht">Pakkettenoverzicht</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/shop/product/zelf-samenstellen" title="Zelf Samenstellen">Zelf
                          Samenstellen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantvoordeel" title="T-Mobile Klantvoordeel">T-Mobile
                          Klantvoordeel</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/thuis/internet" title="Internet">Internet</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/thuis/internet/glasvezel" title="Glasvezel internet">Glasvezel
                          internet</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet/dsl" title="DSL">DSL</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet/wifi-service" title="Wifi Service">Wifi Service</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/shop/alle-pakketten" title="Postcodecheck">Postcodecheck</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet/speedtest" title="Speedtest">Speedtest</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/thuis/internet/veiligheid" title="Veilig internetten">Veilig
                          internetten</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/4g-voor-thuis" title="4G voor Thuis">4G voor Thuis</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-promo-column">
                    <a href="#">
                      <figure class="navbar-full-image-promo">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          alt="Promo image product alt" data-srcset="/images/card-example-3.jpg" data-lazy-loader="">
                        <figcaption>
                          <span>Mobiel + Thuis Voordeel</span>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li itemprop="name" class=" is-primary-item" data-navbar-menu-dropdown="">
              <a class="navbar-link" data-navbar-menu-item="" itemprop="url" href="/mobiel-thuis" title="Mobiel+Thuis">
                Mobiel+Thuis
              </a>
              <div class="navbar-menu-sub">
                <button class="navbar-menu-sub-back" data-navbar-menu-back="">Mobiel+Thuis with a very long
                  title</button>
                <div class="navbar-menu-sub-container">
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/mobiel-thuis" title="Welke T-Mobile abonnementen heb je al?">Welke
                        T-Mobile abonnementen heb je al?</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/mobiel-thuis?combideal" title="Ik ben nog geen klant">Ik ben nog geen
                          klant</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-thuis/mobiel" title="Ik heb T-Mobile Mobiel">Ik heb T-Mobile
                          Mobiel</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-thuis/thuis" title="Ik heb T-Mobile Thuis">Ik heb T-Mobile
                          Thuis</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel-thuis/informatie" title="Ik heb T-Mobile Mobiel en Thuis">Ik heb
                          T-Mobile Mobiel en Thuis</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li itemprop="name" data-navbar-menu-dropdown="">
              <a class="navbar-link" data-navbar-menu-item="" itemprop="url" href="/klantenservice"
                title="Klantenservice">
                Klantenservice
              </a>
              <div class="navbar-menu-sub">
                <button class="navbar-menu-sub-back" data-navbar-menu-back="">Klantenservice</button>
                <div class="navbar-menu-sub-container">
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/klantenservice/mobiel" title="Mobiel">Mobiel</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/facturen-en-tarieven"
                          title="Facturen &amp; tarieven">Facturen&amp; tarieven</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/abonnement-wijzigen"
                          title="Abonnement wijzigen">Abonnement wijzigen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/opzeggen-of-verlengen"
                          title="Verlengen">Verlengen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/simkaart"
                          title="Simkaart &amp; eSIM">Simkaart&amp; eSIM</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/toestel" title="Toestel">Toestel</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/gegevens-wijzigen"
                          title="Gegevens wijzigen">Gegevens wijzigen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/alles-over-je-bestelling"
                          title="Bestelling">Bestelling</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/prepaid" title="PrePaid">PrePaid</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="https://thuisservice.t-mobile.nl/" title="Thuis">Thuis</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="https://thuisservice.t-mobile.nl/internet-en-email"
                          title="Internet &amp; Wifi">Internet&amp; Wifi</a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://thuisservice.t-mobile.nl/tv-en-radio/"
                          title="Interactieve TV">Interactieve TV</a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://thuisservice.t-mobile.nl/telefonie/" title="Vast Bellen">Vast
                          Bellen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="http://thuisservice.t-mobile.nl/nu-regelen/opzet-van-je-rekening/"
                          title="Rekening &amp; Betalen">Rekening&amp; Betalen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="http://thuisservice.t-mobile.nl/nu-regelen/abonnement-wijzigen/"
                          title="Abonnement aanpassen">Abonnement aanpassen</a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://thuisservice.t-mobile.nl/nu-regelen/my-t-mobile-thuis/"
                          title="My T-Mobile Thuis">My T-Mobile Thuis</a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://thuisservice.t-mobile.nl/bestelling/overstappen/"
                          title="Overstappen">Overstappen</a>
                      </li>
                    </ul>
                  </div>
                  <div class="navbar-menu-sub-column">
                    <span class="navbar-menu-sub-heading">
                      <a itemprop="url" href="/klantenservice/bekijk-ook" title="Bekijk ook">Bekijk ook</a>
                    </span>
                    <ul class="navbar-menu-sub-list">
                      <li>
                        <a itemprop="url" href="/klantenservice" title="Contact">Contact</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/login" title="My T-Mobile">My T-Mobile</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantvoordeel-activeren" title="Aanmelden Klantvoordeel">Aanmelden
                          Klantvoordeel</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/winkels" title="Winkels">Winkels</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/mobiel/buitenland" title="Buitenland">Buitenland</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/mobiel/netwerk/dekking" title="Dekking">Dekking</a>
                      </li>
                      <li>
                        <a itemprop="url" href="/klantenservice/netwerk-en-bereik/internetsnelheid"
                          title="Mobiele internetsnelheid">Mobiele internetsnelheid</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="navbar-container hidden-tablet-up">
            <ul class="navbar-meta-toggle">
              <li class="is-active" itemprop="name"><a itemprop="url" href="/">Privé</a></li>
              <li itemprop="name"><a itemprop="url">Zakelijk</a></li>
            </ul>
          </div>
        </nav>
        <div class="navbar-user is-hidden-on-toggled" data-navbar-user="">
          <a role="button" tabindex="0" class="navbar-link navbar-user-toggle" data-navbar-user-toggle="">
            <span class="icon-user"></span>
            <span class="hidden-tablet-down ml-1 text-ellipsis" data-hj-masked="">Customer name</span>
          </a>
          <div class="navbar-user-dropdown">
            <div class="navbar-user-dropdown-arrow" x-arrow=""></div>
            <button class="navbar-user-close" data-navbar-user-close=""><span class="icon-close"></span></button>
            <div class="navbar-user-menu">
              <ul>
                <li>
                  <a class="navbar-link" href="/my/dashboard" title="Overzicht"><span
                      class="navbar-user-menu-title">Overzicht</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/verbruik-en-kosten" title="Verbruik &amp; Kosten"><span
                      class="navbar-user-menu-title">Verbruik &amp; Kosten</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/aanvullers" title="MB's aanvullen"><span
                      class="navbar-user-menu-title">MB's aanvullen</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/facturen" title="Facturen"><span
                      class="navbar-user-menu-title">Facturen</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/abonnement-en-instellingen"
                    title="Abonnement &amp; Instellingen"><span class="navbar-user-menu-title">Abonnement &amp;
                      Instellingen</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/abonnement/wijzigen" title="Bundels aanpassen"><span
                      class="navbar-user-menu-title">Bundels aanpassen</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/gegevens" title="Mijn Gegevens"><span
                      class="navbar-user-menu-title">Mijn Gegevens</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/toestel-en-sim" title="SIM &amp; Toestel"><span
                      class="navbar-user-menu-title">SIM &amp; Toestel</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/download-app" title="Download My T-Mobile App"><span
                      class="navbar-user-menu-title">Download My T-Mobile App</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/sparen/catalogus" title="T-Mobile Extra"><span
                      class="navbar-user-menu-title">T-Mobile Extra</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/klantvoordeel" title="T-Mobile Klantvoordeel"><span
                      class="navbar-user-menu-title">T-Mobile Klantvoordeel</span></a>
                </li>
                <li>
                  <a class="navbar-link" href="/my/samen" title="T-Mobile Samen"><span
                      class="navbar-user-menu-title">T-Mobile Samen</span></a>
                </li>
                <li><a class="navbar-link" href="/logout" title="Uitloggen"><span
                      class="navbar-user-menu-title">Uitloggen</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <form action="/my/dashboard#SearchBox_SearchNav" class="navbar-search is-hidden-on-toggled"
          data-navbar-search="" id="SearchBox_SearchNav_4" method="post">
          <input name="__BindingPrefix" type="hidden" value="SearchBox">
          <div class="navbar-search-close" data-navbar-search-close="">
            <button aria-label="Zoekveld sluiten" type="button">
              <span class="icon-arrow-left"></span>
            </button>
          </div>
          <input autocorrect="off" class="navbar-search-input" data-navbar-search-input="" id="SearchBox_SearchTerm_4"
            name="SearchBox.SearchTerm" placeholder="Zoeken.." type="search" value="" autocomplete="off">
          <div class="navbar-search-clear" data-autocomplete-clear="">
            <button type="button" aria-label="Veld legen"><span class="icon-error-solid"></span></button>
          </div>
          <span role="button" tabindex="0" class="navbar-search-open" data-navbar-search-open="">
            <span class="icon-search"></span>
            <span class="navbar-search-open-label hidden-tablet-down ml-1">Zoeken</span>
          </span>
          <div class="navbar-search-overlay" data-navbar-search-close=""></div>
        </form>
        <div class="navbar-cart is-hidden-on-toggled" data-navbar-cart="">
          <a role="button" tabindex="0" data-interaction-id="page-component-shopping-cart-link"
            href="/shop/bestellen/winkelwagen?ch=es&amp;cc=con&amp;sc=acq" class="navbar-cart-open"
            data-navbar-cart-open="">
            <div class="badge-wrapper">
              <span data-shopping-cart-total-quantity="" class="badge">1</span>
              <span class="icon-cart"></span>
            </div>
          </a>
          <div class="navbar-cart-dropdown" data-navbar-cart-dropdown="" x-placement="bottom-end"
            style="position: absolute; transform: translate3d(46px, 80px, 0px); top: 0px; left: 0px; will-change: transform;">
            <div class="navbar-cart-arrow" x-arrow="" style="left: 0px;"></div>
            <ul class="list list-divider my-0">
              <li class="p-4">
                <div class="media">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    class="mr-3" data-srcset="/images/svg-mobile-devices.svg" data-lazy-loader="">
                  <div class="media-body">
                    <strong class="text-weight-bolder">Samsung Galaxy S10 128GB Zwart</strong>
                    <div class="text-muted">
                      <span>@Work</span>
                      <span>16 GB + Onbeperkt bellen</span>
                      <span>(2 jaar)</span>
                    </div>
                    <!-- amount only shown for business -->
                    <div>Aantal: 1</div>
                  </div>
                </div>
              </li>
              <li class="navbar-cart-totals">
                <div><span>Totaal/mnd:</span>€ 39,50</div>
                <div><span>Totaal eenmalig:</span> € 4,70</div>
                <a href="/winkelwagen" class="mt-4 button-green button-block">Naar winkelwagen</a>
              </li>
            </ul>
          </div>
          <div class="navbar-cart-backdrop"></div>
        </div>
        <label for="navbar-menu-state" aria-label="Menu openen" class="navbar-menu-toggle">
          <span class="navbar-menu-toggle-stripes">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </label>
      </div>
    </header>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <footer>
      <div class="container">
        <div class="row">
          <div class="column">
            <ol class="footer-breadcrumb" xmlns:v="">
              <li typeof="v:Breadcrumb">
                <a property="v:title" rel="v:url" title="Homepage" href="/">
                  <span class="icon-telekom" aria-hidden="true" title="Home"></span>
                </a>
              </li>
              <li typeof="v:Breadcrumb">
                <a property="v:title" rel="v:url" title="Level 1" href="#">Level 1</a>
              </li>
              <li typeof="v:Breadcrumb">
                <span property="v:title">Level 2</span>
              </li>
            </ol>
            <ul class="footer-jump">
              <li><a href="#">Jump to 1</a></li>
              <li><a href="#">Jump to 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-section">
        <div class="container">
          <div class="row footer-nav">
            <div class="column-desktop">
              <input class="footer-nav-toggle" type="checkbox" id="footer-nav-list-1">
              <label class="footer-nav-title" for="footer-nav-list-1">Main category 1</label>
              <ul class="footer-nav-list">
                <li><a href="#">Sub category 1</a></li>
                <li><a href="#">Sub category 2</a></li>
                <li><a href="#">Sub category 3</a></li>
                <li><a href="#">Sub category 4</a></li>
              </ul>
            </div>
            <div class="column-desktop">
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section">
        <div class="container">
          <div class="row">
            <div class="column-desktop-9 mb-3 mb-desktop-0">
              <ul class="footer-links">
                <li><a href="#">Over T-Mobile</a></li>
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Tarieven</a></li>
                <li><a href="#">Voorwaarden</a></li>
              </ul>
              <span>© Copyright</span>
            </div>
            <div class="column-desktop-3 align-self-center">
              <ul class="footer-social">
                <li><a href="#"><span class="footer-social-icon icon-facebook-solid" aria-hidden="true"
                      title="Social media"></span></a></li>
                <li><a href="#"><span class="footer-social-icon icon-twitter-solid" aria-hidden="true"
                      title="Social media"></span></a></li>
                <li><a href="#"><span class="footer-social-icon icon-instagram" aria-hidden="true"
                      title="Social media"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
