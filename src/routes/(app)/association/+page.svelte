<script>
    import rimbaultTransparent from "$lib/images/rimbault-transparent.png";
    import cartePostale from "$lib/images/carte-postale.png";
    import mugshot from "$lib/images/mugshot.png";
    import presentationAssociationPdf from "$lib/images/l-autre-terre-liberee.pdf";
    import labelRenaissance from "$lib/images/label-renaissance-2023.jpg";
</script>

<svelte:head>
    <title>L'association "L'Autre terre libérée", à la rencontre de Louis Rimbault</title>
    <!-- COMMON TAGS -->
    <meta charset="utf-8"/>
    <title>Association "L'autre terre libérée", à la rencontre de Louis Rimbault</title>
    <!-- Search Engine -->
    <meta name="description" content="Présentation de l'association L'autre terre libérée à Luynes, autour de Louis Rimbault, anarchiste végétalien"/>
    <meta name="image" content={rimbaultTransparent}/>
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="Association L'autre terre libérée, à la rencontre de Louis Rimbault"/>
    <meta itemprop="description" content="Présentation de l'association L'autre terre libérée à Luynes, autour de Louis Rimbault, anarchiste végétalien"/>
    <meta itemprop="image" content={rimbaultTransparent}/>
    <!-- Twitter -->
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Association L'autre terre libérée, à la rencontre de Louis Rimbault"/>
    <meta name="twitter:description" content="Présentation de l'association L'autre terre libérée à Luynes, autour de Louis Rimbault, anarchiste végétalien"/>
    <meta name="twitter:image:src" content={rimbaultTransparent}/>
    <!-- Twitter - Article -->
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="Association L'autre terre libérée, à la rencontre de Louis Rimbault"/>
    <meta name="og:description" content="Présentation de l'association L'autre terre libérée à Luynes, autour de Louis Rimbault, anarchiste végétalien"/>
    <meta name="og:image" content={rimbaultTransparent}/>
    <meta name="og:url" content="https://lautreterreliberee.fr/association"/>
    <meta name="og:site_name" content="L'autre terre libérée, à la rencontre de Louis Rimbault à Luynes"/>
    <meta name="og:locale" content="en_FR"/>
    <meta name="fb:admins" content="lautreterreliberee"/>
    <meta name="og:type" content="article"/>
    <!-- Open Graph - Article -->
    <meta name="article:section" content="Culture"/>
    <meta name="article:author" content="L'autre terre libérée"/>
    <meta name="article:tag" content="histoire, anarchisme, végétalisme, rimbault, luynes"/>
</svelte:head>

<h1 class="frankie text-center text-4xl md:text-6xl">L'autre Terre Libérée</h1>

<div class="text-center flex justify-center mb-8">
    <img src={cartePostale} alt="Carte postale Terre Libérée" style="width: 900px"/>
</div>

<div class="text-center my-6">
    <a href={presentationAssociationPdf} target="_blank">Version PDF</a>
</div>

<p class="text-base md:text-xl mb-4">
    Notre association a pour objet d’exhumer l’histoire de Terre Libérée disparue de la mémoire collective. Elle a aussi pour vocation d’organiser des moments de convivialité et de promouvoir le vivre
    ensemble, le tout dans une démarche coopérative et respectueuse de l’environnement. L’essence même
    de cette initiative locale réside dans la volonté de créer du lien et vient questionner le sens de « faire communauté » aujourd’hui.
</p>
<p class="text-base md:text-xl mb-4">
    Notre association a obtenu le label <a href="https://www.centre-valdeloire.fr/lactualite-de-la-region-centre-valdeloire/lancement-des-nouvelles-renaissances-2023" target="_blank">Nouvelle
    Renaissance 2023</a> de la région Centre-Val de Loire.
</p>

<div class="flex justify-center">
    <a class="max-w-xs" href="https://www.centre-valdeloire.fr/lactualite-de-la-region-centre-valdeloire/lancement-des-nouvelles-renaissances-2023" target="_blank">
        <img src={labelRenaissance} alt="Label Renaissance(s) 2023"/>
    </a>
</div>

<h2 class="frankie text-2xl md:text-4xl text-atl-red mb-4">Terre Libérée</h2>
<p class="text-base md:text-xl mb-4">Entre 1923 et 1949 s’est déroulée à Luynes une expérience communautaire, végétalienne. Au début du 20e siècle, ils sont nombre de militants anarchistes à tenter
    l’aventure individuelle.</p>
<p class="text-base md:text-xl mb-4">Ces hommes et ces femmes ne veulent pas attendre le grand soir d’une hypothétique révolution qui viendra peut-être un jour. Ils souhaitent que leurs vies changent
    tout de suite et maintenant. Diverses communautés vont voir le jour un peu partout en France.</p>
<p class="text-base md:text-xl mb-4">C’est l’expérience que propose Louis Rimbault à Luynes. Il fonde Terre Libérée, une école de pratique végétarienne à qui il consacre la seconde moitié de sa
    vie.</p>
<p class="text-base md:text-xl mb-4">Terre Libérée et Louis Rimbault sont indissociables.</p>

<p class="text-base md:text-xl mb-4">
    <a href="/dispositions-generales-terre-liberee">Dispositions générales sur le fonctionnement de Terre Libérée</a>
</p>

<h2 class="frankie text-2xl md:text-4xl text-atl-red mb-4">Revue de presse</h2>
<ul>
    <li>
        <p class="text-base md:text-xl mb-4">
            Emission <a href="https://www.mixcloud.com/TouraineEnLuttesOnAir/%C3%A9mission-22-mai-2024-assoc-lautre-terre-lib%C3%A9r%C3%A9e-de-luynes-autour-de-louis-raimbault-anarchiste/" target="_blank">«Touraine en lutte» du 22 mai 2024</a> sur <a href="https://www.radiobeton.com/www/" target="_blank">Radio Béton</a> (Tours)
        </p>
    </li>
    <li>
        <p class="text-base md:text-xl mb-4">
            <a href="https://www.lanouvellerepublique.fr/indre-et-loire/commune/luynes/a-luynes-une-experience-anarchiste-et-vegetalienne-revisitee" target="_blank">Article du 10 juin 2023 paru dans la Nouvelle République du  Centre</a>
        </p>
    </li>
</ul>

<h2 class="frankie text-2xl md:text-4xl text-atl-red mb-4">Louis Rimbault, quelques repères</h2>
<img src={mugshot} alt="Mugshot Louis Rimbault" class="w-48 float-left mr-4"/>
<p class="text-base md:text-xl mb-4">Né le 9 avril 1877 à Tours, mort le 10 novembre 1949 à Luynes. Tour à tour radical socialiste, anarchiste individualiste, syndicaliste et enfin «&nbsp;naturarchiste&nbsp;».
    Il devient végétalien vers 1910.</p>
<p class="text-base md:text-xl mb-4">
    Il est l’ainé d’une fratrie de 7 enfants. Dès ses quatre ans, la famille déménage de Tours à Paris. Son enfance est marquée par la pauvreté, la faim, l’alcoolisme du père qui, comme beaucoup
    d’hommes à l’époque, «boit» son salaire dans les bistrots.
</p>
<p class="text-base md:text-xl mb-4">De 1904 à 1908, il est élu conseiller municipal radical de Livry, puis devient abstentionniste. C’est par son jeune frère Marceau qui fréquente alors les causeries
    des cafés de Montmartre, que Rimbault devient anarchiste individualiste.</p>
<p class="text-base md:text-xl mb-4">
    En 1910-1912, il vit quelque temps à Bascon dans l’Aisne dans le «&nbsp;milieu libre&nbsp;» initié par Georges Butaud et Sophia Zaïkowska. Par la suite, il monte avec ses frères son propre «&nbsp;milieu
    libre&nbsp;» à Pavillon-sous-Bois, un atelier de serrurerie, avec lequel il pratique quelques
    escroqueries à l’assurance. Fin 1912, Louis Rimbault est interpellé dans le cadre de l’affaire des «&nbsp;bandits tragiques&nbsp;», plus connue sous le nom de «&nbsp;la bande à Bonnot&nbsp;».
    Après 2 ans et demi d’enfermement à la prison de la Santé puis à l’asile de Villejuif, il est acquitté
    en août 1914.
</p>

<img src={rimbaultTransparent} alt="Portrait de Louis Rimbault" class="w-36 float-right"/>

<p class="text-base md:text-xl mb-4">
    Mobilisé en 1915, il est affecté comme mécanicien ajusteur. Après la guerre, il devient ouvrier tôlier avant d’être licencié en mai 1919 pour militantisme syndical. Durant les grèves de la
    métallurgie parisienne de juin 1919, il est élu secrétaire du comité de grève de l’Est parisien et apparait
    comme un leader des plus virulents.
</p>
<p class="text-base md:text-xl mb-4">
    Après 1921, il se met à promouvoir un végétalisme de plus en plus intransigeant. L’heure a sonné pour la grande œuvre de sa vie, en novembre 1923, il fonde à Luynes «&nbsp;Terre libérée&nbsp;»,
    son école de pratique végétalienne. Il publie depuis Luynes nombre d’ouvrages de propagande
    végétalienne et propose des conférences notamment à l’Hôtel de Ville de Tours jusqu’à sa mort en 1949, qui marque la fin de l’expérience.
</p>