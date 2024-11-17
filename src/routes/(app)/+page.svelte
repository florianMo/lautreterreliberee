<script>
    import afficheSansTexte from "$lib/images/affiche-sanstexte.png";
    import Icon from "svelte-awesome";
    import map from "svelte-awesome/icons/map";
    import rimbaultTransparent from "$lib/images/rimbault-transparent.png";
    import miel from "$lib/images/miel.jpeg";
</script>

<svelte:head>
    <title>Champ Libre, programme des journées organisée par l'association "L'autre terre libérée" à Luynes</title>
    <!-- COMMON TAGS -->
    <meta charset="utf-8"/>
    <title>L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault</title>
    <!-- Search Engine -->
    <meta name="description" content="Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"/>
    <meta name="image" content={afficheSansTexte}/>
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"/>
    <meta itemprop="description" content="Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"/>
    <meta itemprop="image" content={afficheSansTexte}/>
    <!-- Twitter -->
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"/>
    <meta name="twitter:description" content="Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"/>
    <meta name="twitter:image:src" content={afficheSansTexte}/>
    <!-- Twitter - Article -->
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"/>
    <meta name="og:description" content="Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"/>
    <meta name="og:image" content={rimbaultTransparent}/>
    <meta name="og:url" content="https://lautreterreliberee.fr/"/>
    <meta name="og:site_name" content="L'autre terre libérée, à la rencontre de Louis Rimbault à Luynes"/>
    <meta name="og:locale" content="en_FR"/>
    <meta name="fb:admins" content="lautreterreliberee"/>
    <meta name="og:type" content="article"/>
    <!-- Open Graph - Article -->
    <meta name="article:section" content="Culture"/>
    <meta name="article:author" content="L'autre terre libérée"/>
    <meta name="article:tag" content="histoire, anarchisme, végétalisme, rimbault, luynes"/>
</svelte:head>

<div class="img-header text-center flex justify-center mb-10">
    <img src={afficheSansTexte} alt="Affiche Champ Libre 2023" class="w-60 max-w-full"/>
</div>

<h1 class="frankie text-2xl md:text-4xl lg:text-6xl text-center text-white bg-atl-black p-4 my-8">Atelier contre-cartographie</h1>
<span class="frankie text-atl-black text-2xl md:text-6xl mt-8 block">Vendredi 8 novembre 2024</span>
<p class="text-base lg:text-2xl mb-4">
    Initiation à la contre-cartographie par Nicolas Gimenez. Définition de plusieurs groupes de travail, sur plusieurs sujets de contre-cartographie autour du territoire de Luynes. Ouvert à tous, n'hésitez pas à nous contacter pour vous greffer à l'aventure :).
</p>

<h1 class="frankie text-2xl md:text-4xl lg:text-6xl text-center text-white bg-atl-black p-4 my-8">Champ Libre 2024</h1>
<span class="frankie text-atl-black text-2xl md:text-6xl mt-8 block">Dimanche 22 septembre 2024</span>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    Balade sonore
    <a href="/balade-sonore" target="blank"><Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/></a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">10h > 12h - Départ de la halle de Luynes - <a href="/balade-sonore/1">Podcasts</a></h2>
<p class="text-base lg:text-2xl mb-4">
    <a href="/balade-sonore" target="_blank">Promenade d’environ 2h</a>, parsemée de <a href="/balade-sonore/1">podcasts</a> pour découvrir l’histoire
    de Louis Rimbault et de son école de pratique
    végétalienne Terre Libérée. Cette balade sonore proposée par l’association L’autre Terre Libérée vous raconte cette expérience qui a eu lieu à Luynes
    entre 1923 et 1949, et qui a disparu des mémoires collectives. Tout au long du parcours, des ardoises informatives vous invitent à scanner des QR
    Codes pour écouter des petites pastilles audio tout en cheminant jusqu’au terrain de l’association.
</p>
<p class="font-bold italic text-base lg:text-2xl">Informations pratiques :</p>
<p class="italic text-base lg:text-2xl mb-4">
    Nous vous invitons à vous garer dans les parkings du centre du village puis de vous rendre sous la halle pour le départ de la balade. Prévoir 2
    heures pour l’aller, un temps sur place, puis environ 40 minutes de marche pour le retour. Pour ceux qui voudraient éviter la marche,
    il est possible de se garer sur le parking du supermarché, puis de descendre jusqu’au terrain (environ 10 minutes de marche).
</p>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    Pique-nique partagé & lectures
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">12h30 - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">
    <img src={miel} alt="Miel Laurent Guibert" class="w-60 max-w-full max-h-96 border-4 border-atl-black float-right"/>
    Chaque participant est invité à préparer une spécialité culinaire, à la déposer sur la table pour partager le moment convivial du repas. Une
    buvette sera également disponible pour se désaltérer, proposant des boissons bio avec et sans alcool, sélectionnées auprès de producteurs locaux (chèque et espèces uniquement).<br/>
    Vente de miel local (Laurent Guibert, Monnaie) par le producteur.
</p>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    Atelier nature
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank"><Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/></a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">À partir de 14h - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">Divers ateliers sont proposés tout au long de l’après midi, pour les petits et les grands. Land art, dessin, jeu des empreintes.</p>

<span class="frankie text-atl-black text-2xl md:text-6xl block">Samedi 15 juin 2024</span>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    <a href="https://www.vegetarisme.fr/agenda/vegan-place-a-tours-37-2/" class="frankie" target="_blank">Participation à la Vegan Place 2024</a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">10h ➜ 18h - Boulevard Heurteloup - Tours</h2>
<p class="text-base lg:text-2xl my-4">
    La Vegan Place est un événement co-organisé par le <a href="https://www.vegetarisme.fr/groupelocal/indre-et-loire/" target="_blank">groupe local tourangeau</a> de l'<a
        href="https://www.vegetarisme.fr/" target="_blank">Association Végétarienne de France</a> (AVF), l'antenne tourangelle du <a href="https://mouvementutopia.org/site/" target="_blank">mouvement
    Utopia</a>, <a href="https://www.l214.com/" target="_blank">L214</a> et <a href="https://www.code-animal.com/" target="_blank">Code Animal</a>. Elle accueillera un ensemble de posters
    documentaires créés par notre association autour de «Terre libérée» et du végétalisme dans les mouvements anarchistes.
</p>

<span class="frankie text-atl-black text-2xl md:text-6xl block">Jeudi 25 avril 2024</span>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    <a href="conferences/guillaume-davranche-la-greve-des-metallos-et-la-revolution" class="frankie" target="_blank">«Louis Rimbault 1919 : la grève des métallos et la révolution»</a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">19h - Halle de Luynes</h2>
<p class="text-base lg:text-2xl my-4">
    Conférence de <a href="https://www.babelio.com/auteur/Guillaume-Davranche/337582" target="_blank">Guillaume Davranche</a>, journaliste et chercheur indépendant en histoire sociale. Auteur de <a
        href="https://editionslibertalia.com/catalogue/coeditions/trop-jeunes-pour-mourir" target="_blank">Trop jeune pour mourir</a>, <a
        href="https://editionslibertalia.com/catalogue/dix-questions/dix-questions-sur-l-anarchisme" target="_blank">Dix questions sur l'anarchisme</a>, <a
        href="https://editionsatelier.com/boutique/maitron-/235-les-anarchistes-dictionnaire-biographique-du-mouvement-libertaire-francophone-9782708243163.html"
        target="_blank">Les anarchistes -
    Dictionnaire bibliographique du mouvement libertaire francophone</a>. En partenariat avec les <a href="https://rdv-histoire.com/" target="_blank">Rendez-vous de l'histoire de Blois</a>, dans le
    cadre des <a href="https://cafeshistoriques.com/" target="_blank">cafés historiques en région
    Centre Val-de-Loire</a>.
</p>
<p class="text-base lg:text-2xl mb-4">Vente d'une sélection thématique d'ouvrages de la librairie tourangelle autogérée <a href="https://www.canalbd.net/bedelire" target="_blank">Bédélire</a>.</p>
<p class="text-base my-2">
    Au sortir de la Grande Guerre, le syndicalisme révolutionnaire remonte en flèche, le pays est en ébullition, et cela se traduit notamment par la grande grève de la métallurgie parisienne, au
    printemps 1919. Alors que la direction réformiste de la CGT freine et tergiverse, la base est plus impatiente que jamais. Et parmi les meneurs se trouve un rescapé de l'affaire de la bande à
    Bonnot : Louis Rimbault ! Mais que s'est-il passé exactement, durant ce mouvement des métallos, prélude à la scission de la CGT entre réformistes et révolutionnaires ?
</p>
<p class="text-base my-2">
    Guillaume Davranche est journaliste et chercheur indépendant en histoire sociale. Il est l'auteur de «Trop jeunes pour mourir. Ouvriers et révolutionnaires face à la guerre (1909-1914)» et de «Dix
    questions sur l'anarchisme» chez Libertalia, et a codirigé le dictionnaire Maitron des anarchistes.
</p>
<p class="text-base mb-4">
    <a href="conferences/guillaume-davranche-la-greve-des-metallos-et-la-revolution">Captation audio, éléments bibliographiques et repères historiques</a>
</p>

<h1 class="frankie text-2xl md:text-4xl lg:text-6xl text-center text-white bg-atl-black p-4 my-8">Champ Libre 2023<br/>À la découverte de Terre Libérée</h1>

<span class="frankie text-atl-black text-2xl md:text-6xl block">Mardi 27 juin 2023</span>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    <a href="https://cafeshistoriques.com/programme/la-rencontre-de-louis-rimbault-et-des-causeries-anarchistes" class="frankie" target="_blank">«À la rencontre de Louis Rimbault et des causeries anarchistes»</a>
    <a href="https://osm.org/go/0AU8MOGON?way=68947126" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">19h - Halle de Luynes</h2>
<p class="text-base lg:text-2xl mb-4">
    Conférence d'<a href="https://fr.wikipedia.org/wiki/Anne_Steiner" target="_blank">Anne Steiner</a>, sociologue, spécialiste du <a
        href="https://fr.wikipedia.org/wiki/Anarchisme_individualiste"
        target="_blank">mouvement individualiste anarchiste</a>, en partenariat avec les
    <a href="https://rdv-histoire.com/" target="_blank">Rendez-vous de l'histoire de Blois</a>, dans le cadre des <a href="https://cafeshistoriques.com/" target="_blank">cafés historiques en région
    Centre Val-de-Loire</a>.
</p>
<p class="text-base lg:text-2xl mb-4">Vente d'une sélection thématique d'ouvrages de la librairie tourangelle autogérée <a
        href="https://www.canalbd.net/bedelire" target="_blank">Bédélire</a>.</p>

<span class="frankie text-atl-black text-2xl md:text-6xl mt-8 block">Dimanche 2 juillet 2023</span>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    Balade sonore
    <a href="https://osm.org/go/0AU8MOGON?way=68947126" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">10h > 12h - Départ de la halle de Luynes - <a href="/balade-sonore/1">Podcasts</a></h2>
<p class="text-base lg:text-2xl mb-4">
    <a href="/balade-sonore" target="_blank">Promenade d’environ 2h</a>, parsemée de <a href="/balade-sonore/1">podcasts</a> pour découvrir l’histoire
    de Louis Rimbault et de son école de pratique
    végétalienne Terre Libérée. Cette balade sonore proposée par l’association L’autre Terre Libérée vous raconte cette expérience qui a eu lieu à
    Luynes
    entre 1923 et 1949, et qui a disparu des mémoires collectives. Tout au long du parcours, des ardoises informatives vous invitent à scanner des QR
    Codes pour écouter des petites pastilles audio
    tout en cheminant jusqu’au terrain de l’association.
</p>
<p class="font-bold italic text-base lg:text-2xl">Informations pratiques :</p>
<p class="italic text-base lg:text-2xl mb-4">
    Nous vous invitons à vous garer dans les parkings du centre du village puis de vous rendre sous la halle pour le départ de la balade. Prévoir 2
    heures pour l’aller, un temps sur place, puis
    environ 40 minutes de marche pour le retour. Pour ceux qui voudraient éviter la marche, il est possible de
    se garer sur le parking du supermarché, puis de descendre jusqu’au terrain (environ 10 minutes de marche).
</p>
<span class="frankie text-atl-red text-2xl md:text-4xl">
    Pique-nique partagé & Causeries
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">12h30 - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">
    Chaque participant est invité à préparer une spécialité culinaire, à la déposer sur la table pour partager le moment convivial du repas. Une
    buvette sera également disponible pour se désaltérer,
    proposant des boissons bio avec et sans alcool, sélectionnées auprès de producteurs locaux.
</p>

<span class="frankie text-atl-red text-2xl md:text-4xl">
    Fresque du climat
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">À partir de 14h - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">
    L’approche ludique et pédagogique de la Fresque du Climat permet à chacun de comprendre le fonctionnement, l’ampleur et la complexité des enjeux
    liés aux dérèglements climatiques. L’atelier
    mobilise l’intelligence collective pour sensibiliser les participants aux changements climatiques. Durant l’atelier, les participants relient les
    liens de cause à effets et intègrent les enjeux
    climatiques dans leur globalité.
</p>

<span class="frankie text-atl-red text-2xl md:text-4xl">
    Vélo Sound System
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">À partir de 14h - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">Découverte d’un Discobike mobile et autonome de diffusion du son, alimenté par des sources d'énergies
    renouvelables musculaires et solaires.</p>

<span class="frankie text-atl-red text-2xl md:text-4xl">
    Ateliers ludiques
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank"><Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/></a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">À partir de 14h - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">Divers ateliers sont proposés tout au long de l’après midi, pour les petits et les grands. Land art, dessin, jeu des empreintes, grand jeu de construction collective.</p>

<span class="frankie text-atl-red text-2xl md:text-4xl">
    Concert
    <a href="https://osm.org/go/0AU8Qn3Nl-?m=" target="blank">
        <Icon data={map} class="w-4 md:w-8 h-4 md:h-8"/>
    </a>
</span>
<h2 class="text-base md:text-2xl text-atl-red font-bold">17h - Terrain de l'association</h2>
<p class="text-base lg:text-2xl mb-4">Concert du groupe Šaban Shukar qui revisite les plus belles chansons de Šaban Bajramovic, Roi de la soul
    Tsigane, compositeur serbe d’origine Rrom très populaire
    dans tous les Balkans.</p>

<div class="text-center flex justify-center my-16">
    <img src={rimbaultTransparent} alt="Portrait Louis Rimbault" class=""/>
</div>
