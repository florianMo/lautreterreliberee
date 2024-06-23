<script>
    import mugshot from "$lib/images/mugshot.png";
    import scan from "$lib/images/scan.png";
    import cartePostale from "$lib/images/carte-postale.png";
    import ecoute from "$lib/images/ecoute.png";
</script>

<svelte:head>
    <title>Balade sonore, à la rencontre de Louis Rimbault — L'autre terre libérée</title>
</svelte:head>

<h1 class="text-center frankie text-4xl mb-4 text-atl-brown">En route vers Terre Libérée</h1>
<h2 class="text-center frankie text-3xl mb-12 text-atl-brown">Une balade sonore pour découvrir Luynes à travers une histoire originale</h2>

<p class="text-lg my-2">Partez à la découverte de Luynes et son territoire grâce l’histoire insolite de Louis Rimbault qui créa en 1923 son école de pratique végétalienne Terre Libérée.</p>
<p class="text-lg my-2">Vous déambulerez pendant 2 heures en écoutant 8 bulles sonores qui vous raconte cette histoire pour le moins atypique !</p>

<img src={scan} alt="Mugshot Louis Rimbault" class="w-60 float-right ml-4"/>

<p class="frankie my-2 text-2xl text-atl-brown">Mode d'emploi</p>
<ul>
    <li>8 ardoises sont disposées tout au long du parcours</li>
    <li>Avec votre téléphone, scannez le QR code présent sur l’ardoise</li>
    <li>Écoutez le podcast en marchant jusqu’à l’étape suivante</li>
    <li>Vous pouvez écouter en haut-parleur, avec un casque ou un enceinte connectée pour profiter de l’écoute à plusieurs</li>
</ul>
<p class="frankie my-2 text-2xl text-atl-brown">Comment scanner un QR code</p>
<ul>
    <li>Ouvrez l'application "appareil photo"</li>
    <li>Scannez le QR code comme si vous souhaitiez le prendre en photo</li>
    <li>Un lien vous sera proposé par l'application : appuyez dessus</li>
    <li>Une fois la page internet de l'étape ouverte, lancez le lecteur audio présent sur la page</li>
</ul>

<p class="frankie my-2 text-2xl text-atl-brown">La balade</p>

<iframe
        id="map"
        title="Carte de la balade sonore à la rencontre de Louis Rimbault et Terre Libérée"
        allowfullscreen
        allow="geolocation"
        class="my-8"
        src="//umap.openstreetmap.fr/fr/map/balade-sonore-a-la-rencontre-de-louis-rimbault_939821?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
/>

<p class="text-lg my-2"><a href="/balade-sonore/1" class="dot">1</a>Prendre à droite, place des Douves, le long des habitations troglodytes jusqu’à la rue Paul-Louis Courier, tourner à droite puis, tout de suite, à gauche vers le Moulin Hodoux (2 km) rue de l’Alma.</p>

<img src={ecoute} alt="Mugshot Louis Rimbault" class="w-64 float-right ml-4"/>

<p class="text-lg my-2">Longer le cimetière et pénétrer par l’entrée au-dessus à droite. Emprunter la 2e allée à gauche ; la tombe de Louis Rimbault est la 8e à droite.</p>

<p class="text-lg my-2"><a href="/balade-sonore/2" class="dot">2</a>Sortir du cimetière et reprendre la montée raide mais courte qui longe bientôt un vignoble avec une loge de vigne remarquable. A 250m environ à gauche, un panneau apporte quelques informations sur le château de Luynes. Dépasser le Moulin Doré et longer des champs sur une centaine de mètres avant de quitter la route qui descend pour tourner à gauche à angle droit sur un chemin en bordure de haie.</p>

<img src={mugshot} alt="Mugshot Louis Rimbault" class="w-48 float-left mr-4"/>

<p class="text-lg my-2"><a href="/balade-sonore/3" class="dot">3</a>Rester sur ce chemin qui traverse haies variées, champs, prés en offrant un beau point de vue vers l’ouest avant de descendre vers la route. <a href="/balade-sonore/4" class="dot">4</a>Tourner à droite, longer un rucher sur la droite et poursuivre vers le Moulin Hodoux. Dépasser Les Planches, continuer par la voie sans issue pour rejoindre le moulin et <a href="/balade-sonore/5" class="dot">5</a> prendre de suite un étroit chemin à gauche, entre deux piliers, s’enfonçant sous les arbres.</p>

<p class="text-lg my-2">Traverser 3 passerelles puis longer un ruisseau à droite avant de parvenir rapidement à la route. Tourner à droite puis, au panneau Le Vieux Bourg, poursuivre sur le chemin à droite (balisage jaune).</p>

<p class="text-lg my-2"><a href="/balade-sonore/6" class="dot">6</a>Au bout de ce chemin, prendre à droite au-dessus d’un petit pont, suivi de deux autres, puis tourner à gauche sur un bon chemin le long d’un pré à chevaux. <a href="/balade-sonore/7" class="dot">7</a>Après un virage à droite emprunter, avant la route, un chemin en herbe à droite en direction d’un bois. S’enfoncer dans les sous-bois par une belle montée ombragée. Dépasser une grande propriété clôturée puis, avant une petite clairière, <a href="/balade-sonore/8" class="dot">8</a>prendre à gauche un sentier descendant bien marqué le long d’un fossé à droite jusqu’à la route.</p>

<img src={cartePostale} class="w-96 float-right ml-4" alt="Carte postale Terre Libérée"/>

<p class="text-lg my-2">Prendre à droite sur 300m environ et, 50m après l’arrêt de bus, tourner à gauche vers le hameau Le Pin (panneau lisible de l’autre côté). Monter jusqu’en haut de la butte pour observer le paysage de « Terre Libérée » (maison et terrains). Redescendre quelques dizaines de mètres jusqu’à l’entrée à gauche d’un terrain géré par l’association « L’Autre Terre Libérée » (pause et pique-nique possibles).</p>

<p class="frankie my-2 text-2xl text-atl-brown">Conseil pour le retour en centre ville</p>

<p class="text-lg my-2">Quitter le terrain pour redescendre et prendre, juste après celui-ci, un chemin plus ou moins fauché qui traverse champs et friches vers Luynes, devenant carrossable entre de belles haies où la concurrence des chants d’oiseaux bat son plein.</p>

<p class="text-lg my-2">Parvenus à la route, prendre à gauche puis immédiatement à droite vers les habitations aux jardins très arborés sur un chemin piéton qui descend jusqu’à un feu à côté des écoles. Prendre la rue principale de Luynes à gauche jusqu’aux halles.</p>

<style lang="scss">
  #map {
    width: 100%;
    height: 500px;
  }

  .dot {
    display: inline-block;
    text-align: center;
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-weight: bold;
    border-radius: 50%;
    margin-left: 4px;
    margin-right: 4px;
    background-color: theme('colors.atl-brown');
    color: white;

    &:hover {
      text-decoration: none;
    }
  }
</style>
