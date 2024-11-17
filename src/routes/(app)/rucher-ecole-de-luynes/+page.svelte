<script>
    import Paragraph from "$lib/components/Paragraph.svelte";
    import Title1 from "$lib/components/Title1.svelte";
    import Title2 from "$lib/components/Title2.svelte";
    import RefLink from "$lib/components/RefLink.svelte";
    import RefNotice from "$lib/components/RefNotice.svelte";

    import versionPdf from "$lib/images/rucher/le-rucher-ecole-de-luynes.pdf";
    import rimbaultTransparent from "$lib/images/rimbault-transparent.png";
    import cp1 from "$lib/images/rucher/cartes-postales/cp1.jpg";
    import cp2 from "$lib/images/rucher/cartes-postales/cp2.jpg";
    import cp3 from "$lib/images/rucher/cartes-postales/cp3.jpg";
    import cp4 from "$lib/images/rucher/cartes-postales/cp4.jpg";
    import cp1Small from "$lib/images/rucher/cartes-postales/cp1-small.jpg";
    import cp2Small from "$lib/images/rucher/cartes-postales/cp2-small.jpg";
    import cp3Small from "$lib/images/rucher/cartes-postales/cp3-small.jpg";
    import cp4Small from "$lib/images/rucher/cartes-postales/cp4-small.jpg";
    import ecrit1 from "$lib/images/rucher/visuels/ecrit1.jpg";
    import ecrit2 from "$lib/images/rucher/visuels/ecrit2.jpg";
    import pic3 from "$lib/images/rucher/visuels/pic3.jpg";
    import pic4 from "$lib/images/rucher/visuels/pic4.jpg";
    import pic5 from "$lib/images/rucher/visuels/pic5.jpg";
    import pic6 from "$lib/images/rucher/visuels/pic6.jpg";
    import pic7 from "$lib/images/rucher/visuels/pic7.jpg";
    import pic8 from "$lib/images/rucher/visuels/pic8.jpg";
    import pic9 from "$lib/images/rucher/visuels/pic9.jpg";
    import pic10 from "$lib/images/rucher/visuels/pic10.jpg";
    import pic11 from "$lib/images/rucher/visuels/pic11.jpg";
    import pic12 from "$lib/images/rucher/visuels/pic12.jpg";
    import pic13 from "$lib/images/rucher/visuels/pic13.jpg";
    import pic14 from "$lib/images/rucher/visuels/pic14.jpg";
    import pic15 from "$lib/images/rucher/visuels/pic15.jpg";
    import pic16 from "$lib/images/rucher/visuels/pic16.jpg";
    import pic17 from "$lib/images/rucher/visuels/pic17.jpg";
    import pic18 from "$lib/images/rucher/visuels/pic18.jpg";
    import pic19 from "$lib/images/rucher/visuels/pic19.jpg";
    import pic20 from "$lib/images/rucher/visuels/pic20.jpg";
    import pic21 from "$lib/images/rucher/visuels/pic21.jpg";
    import pic22 from "$lib/images/rucher/visuels/pic22.jpg";
    import pic23 from "$lib/images/rucher/visuels/pic23.jpg";
    import pic24 from "$lib/images/rucher/visuels/pic24.jpg";
    import versosHd from "$lib/images/rucher/cartes-postales/versos-hd.jpg";
</script>

<svelte:head>
    <title>Le rucher école de Luynes</title>
    <!-- COMMON TAGS -->
    <meta charset="utf-8"/>
    <!-- Search Engine -->
    <meta name="description" content="Le rucher école de Luynes"/>
    <meta name="image" content={rimbaultTransparent}/>
    <!-- Schema.org for Google -->
    <meta itemprop="name" content="Le rucher école de Luynes"/>
    <meta itemprop="description" content="Résultats des premières recherches"/>
    <meta itemprop="image" content={rimbaultTransparent}/>
    <!-- Twitter -->
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Le rucher école de Luynes"/>
    <meta name="twitter:description" content="Le rucher école de Luynes"/>
    <meta name="twitter:image:src" content={rimbaultTransparent}/>
    <!-- Twitter - Article -->
    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="Le rucher école de Luynes"/>
    <meta name="og:description" content="Le rucher école de Luynes"/>
    <meta name="og:image" content={rimbaultTransparent}/>
    <meta name="og:url" content="https://lautreterreliberee.fr/recettes-vegetaliennes"/>
    <meta name="og:site_name" content="Le rucher école de Luynes"/>
    <meta name="og:locale" content="fr_FR"/>
    <meta name="fb:admins" content="lautreterreliberee"/>
    <meta name="og:type" content="article"/>
    <!-- Open Graph - Article -->
    <meta name="article:section" content="Culture"/>
    <meta name="article:author" content="L'autre terre libérée"/>
    <meta name="article:tag" content="histoire, anarchisme, végétalisme, rimbault, luynes, rucher, apiculteur"/>
</svelte:head>

<Title1>Le rucher école de Luynes</Title1>

<Paragraph cssClass="text-center">
    <a class="text-xl text-center font-bold" href={versionPdf} target="_blank">Version PDF</a>
</Paragraph>

<div class="flex flex-wrap w-full">
    <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
        <img class="w-full" src={cp1Small} alt="Carte postale 1"/>
        <figcaption class="bg-gray-200 text-center text-sm">Carte postale 1 - <a href={cp1} target="_blank">Haute qualité</a></figcaption>
    </figure>
    <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
        <img class="w-full" src={cp2Small} alt="Carte postale 2"/>
        <figcaption class="bg-gray-200 text-center text-sm">Carte postale 2 - <a href={cp2} target="_blank">Haute qualité</a></figcaption>
    </figure>
    <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
        <img class="w-full" src={cp3Small} alt="Carte postale 3"/>
        <figcaption class="bg-gray-200 text-center text-sm">Carte postale 3 - <a href={cp3} target="_blank">Haute qualité</a></figcaption>
    </figure>
    <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
        <img class="w-full" src={cp4Small} alt="Carte postale 4"/>
        <figcaption class="bg-gray-200 text-center text-sm">Carte postale 4 - <a href={cp4} target="_blank">Haute qualité</a></figcaption>
    </figure>
</div>

<Paragraph>
    Un membre de l’association nous a fait passer 4 cartes postales qui, comme pour Terre Libérée, semblent raconter une histoire disparue de la mémoire collective locale, celle d’un rucher école. Nous n’avons pour sources que ces 4 cartes postales.
</Paragraph>

<Title2>Analyse image : que nous disent ces 4 cartes postales ?</Title2>

<Paragraph>
    Sur les photos, on remarque que le lieu semble identique et présente un grand nombre de ruches. On peut les compter en prenant pour référence la ruche avec le toit en clocher. 4 à sa droite (photo 1), 12 à sa gauche jusqu’à la ruche de couleur foncée (photo 2), 3 supplémentaires à la gauche de la foncée (photo 4). On peut donc compter sur les images 18 ruches.
</Paragraph>
<Paragraph>
    On y voit tour à tour un couple ; le même couple avec trois autres personnes dont un enfant ; puis 2 autres cartes postales avec un grand groupe de personnes. On semble assister à une réunion ou une démonstration d’apiculture comme indiqué manuellement sur la photo 3 et 4, “une visite d’hivernage au rucher école Luynes”, “Introduction d’une chasse dans une ruche à cadres au rucher école de Luynes.” La carte numéro 2 est adressée à un propriétaire apiculteur de Manthelan.
</Paragraph>

<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={ecrit1} alt="Ecrit 1"/>
    </figure>
</div>
<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={ecrit2} alt="Ecrit 2"/>
    </figure>
</div>

<Paragraph>
    Sur les 4 cartes, un homme, le même, semble être toujours au centre, sans doute G. Fouquet dont on peut lire la signature sur 3 d’entre elles, ainsi que la date du 12 octobre 1913 sur deux cartes.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic3} alt="Zooms personnages"/>
    </figure>
</div>

<Paragraph>
    Sur deux cartes postales, deux indications différentes “mon rucher dans la vallée du Rinjoly - Luynes” et “coin de mon rucher du Chêne vert luynes I & L”.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic4} alt="Zooms écritures"/>
    </figure>
</div>

<Paragraph>
    Des dates du 6 et 9 octobre sont annotées au verso. Elles indiquent que les 4 photos ont été prises dans la même semaine. Sur une des cartes est signée G. et G. Fouquet, sur une autre on peut découvrir le prénom de l’homme : Georges Fouquet.
</Paragraph>

<div class="flex justify-center">
    <div class="w-[900px] flex flex-wrap w-full">
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic5} alt="Carte postale 1 verso"/>
            <figcaption class="bg-gray-200 text-center text-sm">Verso carte postale 1 - <a href={versosHd} target="_blank">Haute qualité</a></figcaption>
        </figure>
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic6} alt="Carte postale 2 verso"/>
            <figcaption class="bg-gray-200 text-center text-sm">Verso carte postale 2 - <a href={versosHd} target="_blank">Haute qualité</a></figcaption>
        </figure>
    </div>
</div>

<Paragraph>
    Ces précieuses informations nous permettent de commencer les recherches aux archives départementales.
</Paragraph>

<Title2>Les recherches aux archives départementales</Title2>

<Paragraph>
    Pour la localisation des ruches, aux archives 37, le plan cadastre de 1811<RefLink number={1}/> situe le Rinjoly juste au-dessus du chêne vert, qui sur le plan est indiqué avec un “d”. Il s’agit donc bien du même lieu. Au vu de la topographie, les ruches semblent être à flanc de coteau, donc vers le Rinjoli.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic7} alt="Extraits cadastraux"/>
        <figcaption class="bg-gray-200 text-center text-sm">
            <a href="https://archives.touraine.fr/ark:/37621/38n4905jgwkb/e86085c1-0c1a-42a6-9eeb-15552eff448c" target="_blank">Extraits cadastraux</a>
        </figcaption>
    </figure>
</div>

<Paragraph>
    Il conviendra de faire des recherches avec les quelques éléments architecturaux présents dans les cartes pour tenter de déterminer le lieu précis.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic8} alt="Elements architecturaux"/>
    </figure>
</div>

<Paragraph>
    Pour trouver G et G Fouquet, nous faisons appel aux recensements disponibles. Les recensements sont effectués toutes les années en 1 et 6, sauf 1916. La date de 1913, nous incite à chercher dans le livre de recensement de 1911, qui compte 61 pages<RefLink number={2}/>. A Luynes, 1734 personnes habitent alors la commune, et on y trouve 2 Georges Fouquet. Un premier habitant au 37 de la rue Saint-Venant, né en 1908 donc trop jeune, et en page 31, un second habitant la croix-verte, né en 1879 à Luynes, ce Georges Fouquet correspond à notre recherche.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic9} alt="Extrait recensement 1911"/>
    </figure>
</div>

<Paragraph>
    Grâce au recensement, nous savons que vivent dans la maison de la croix-verte le chef de famille, François Fouquet cultivateur à son compte, avec son fils et sa belle-fille, Georges et Germaine, les G et G de la carte postale, ils habitent avec une cousine née en 1828. Toujours grâce au recensement, nous avons la date de naissance de l’un et de l’autre et nous pouvons donc trouver leur certificat de naissance et de mariage.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[400px] mx-w-full">
        <img class="w-full" src={pic10} alt="Georges et Germaine Fouquet"/>
        <figcaption class="bg-gray-200 text-center text-sm">Georges et Germaine Fouquet</figcaption>
    </figure>
</div>

<Paragraph>
    Germaine est née à Villandry d’un père cultivateur et d’une mère lingère<RefLink number={3}/>. Georges est né à Luynes, dans cette même maison de la croix verte le 23 avril 1879<RefLink number={4}/>, maison familiale des Fouquet puisque le père, François est lui-même né dans cette maison le 03 février 1855, d’un père cultivateur<RefLink number={5}/>.
</Paragraph>
<Paragraph>
    Georges et Germaine se marient le 29 mai 1905 à Savonnières<RefLink number={6}/>. Il est intéressant de noter que sur l’acte, la profession indiquée de Georges, de son père et du père de la future mariée est “propriétaire”. Nous sommes en présence d’un mariage entre agriculteurs propriétaires, qui ont donc de l’argent. Et ceci explique sûrement l’élégante robe de Germaine que nous voyons sur la photo du couple.
</Paragraph>
<Paragraph>
    Ils emménagent de suite à la croix verte comme l’indique le recensement de 1906<RefLink number={7}/>et ils ont eu un fils, Jean-Marie, né à Luynes la même année. On note également que 2 domestiques vivent dans la maison et que la mère de Georges est décédée entre 1901 et 1906.
</Paragraph>
<Paragraph>
    Les recensements des années suivantes vont nous donner des informations supplémentaires et notamment le suivant, celui de 1921. A la croix verte, il ne reste plus que Germaine, qui vit avec son beau-père et 2 domestiques.
</Paragraph>

<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic11} alt="Zooms écritures"/>
    </figure>
</div>
<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic12} alt="Zooms écritures"/>
    </figure>
</div>

<Paragraph>
    Plus de Georges, plus de Jean-Marie, et cela reste ainsi jusqu’en 1936, où la maison de la croix-verte est indiquée vide. La disparition de Georges lors du recensement de 1921 nous amène à penser que Georges est décédé pendant la guerre.
</Paragraph>
<Paragraph>
    L’hypothèse est confirmée par son livret militaire<RefLink number={8}/>, Georges Fouquet, cheveux châtains, mesurant 1m74, est décédé le 3 septembre 1914 à l’hôpital de Dijon, soit un mois après la déclaration de guerre, et 11 mois après la photo que nous avons de lui.
</Paragraph>

<div class="flex justify-center">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic13} alt="Livret militaire de Georges Fouquet"/>
    </figure>
</div>

<Paragraph>
    Je pense alors que s’arrêtent ici les recherches sur le rucher école de Georges Fouquet.
</Paragraph>
<Paragraph>
    Je lance tout de même une dernière recherche de carte sur 2 sites référencés en la matière et je trouve les mêmes cartes postales que celles déjà en notre possession, mais les internautes vendeurs ont eu la bonne idée de scanner le verso des cartes, on y trouve au dos de la première une explication de Georges Fouquet de la photo numéro 3.
</Paragraph>

<div class="flex justify-center mb-4">
    <figure class="w-[600px] mx-w-full">
        <img class="w-full" src={pic14} alt="Verso carte postale numéro 3"/>
    </figure>
</div>

<div class="flex justify-center mb-4">
    <div class="bg-atl-black text-white w-[600px] p-2 text-sm">
        <Paragraph cssClass="italic">Monsieur Sibileau,</Paragraph>
        <Paragraph cssClass="italic">
            J’ai le plaisir de vous envoyer les photos du cours du 12 octobre 1913 dernier. Nous étions une trentaine malgré que vous ne soyez que 20 sur la photo, car plusieurs débutants avaient peur de se faire piquer.
        </Paragraph>
        <Paragraph cssClass="italic">
            La masse noire qui est sur le plateau de la ruche sont les abeilles effectuant leur montée. Remarquez qu’à part un ou deux, personne n’a de voile. Il n’y pas eu une piqûre de toute la journée.
        </Paragraph>
        <Paragraph cssClass="italic">
            Recevez monsieur Sibilleau, mes sincères salutations.
        </Paragraph>
        <Paragraph cssClass="italic">G. Fouquet</Paragraph>
    </div>
</div>

<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic15} alt="Carte 3"/>
    </figure>
</div>

<Paragraph>
    Et au verso de la seconde, une mention manuscrite particulièrement intéressante : “le compte rendu de la réunion a paru dans la Touraine du jeudi 30 octobre 1913”.
</Paragraph>

<div class="flex justify-center">
    <div class="w-[900px] flex flex-wrap items-center">
        <figure class="w-full md:w-1/2 mx-w-full">
            <img class="w-full" src={pic16} alt="Extrait carte 2 verso"/>
        </figure>
        <figure class="w-full md:w-1/2 mx-w-full">
            <img class="w-full" src={pic17} alt="Extrait carte 2 verso"/>
        </figure>
    </div>
</div>

<Paragraph>
    "La Touraine", cela ressemble à un titre de quotidien, et sur le site des archives départementales, il y a effectivement un quotidien nommé « la Touraine républicaine ». Les exemplaires sont numérisés et disponibles en ligne et voici donc le compte rendu de cette fameuse journée du 12 octobre 1913, dans le numéro du jeudi 30 octobre 1913<RefLink number={9}/>en page 2, qui nous permet désormais d’ajouter une légende aux photos du rucher école de Georges Fouquet.
</Paragraph>

<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic18} alt="La touraine républicaine extrait 1"/>
    </figure>
</div>
<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic19} alt="La touraine républicaine extrait 2"/>
    </figure>
</div>
<div class="flex justify-center mb-4">
    <figure class="w-[900px] mx-w-full">
        <img class="w-full" src={pic20} alt="La touraine républicaine extrait 3"/>
    </figure>
</div>

<Title2>Retranscription de l’article de la Touraine républicaine, auquel est ajouté les photos colorisées des cartes postales</Title2>

<h3 class="italic">Société d’agriculture, sciences, arts et belles-lettres d’Indre-et-Loire</h3>
<h4 class="italic">Section d’apiculture. – Rûcher-École de Luynes.</h4>

<Paragraph cssClass="italic">
    Le 2e cours d’apiculture de la saison d’automne, donné le 12 octobre au rûcher du Chêne-Vert, à Luynes, chez M. Georges Fouquet, avait attiré des apiculteurs de Tours, Saint-Cyr, Fondettes, Cinq-Mars, Luynes, Saint-Étienne, Saint-Genouph, etc.
</Paragraph>
<Paragraph cssClass="italic">
    Ce très joli rûcher-école, tenu avec un soin et un ordre parfait, d’où l’on découvre un panorama splendide sur la vallée de la Loire, fait l’admiration des visiteurs.
</Paragraph>
<Paragraph cssClass="italic">
    Abritées des vents dominants, sur une plate-forme creusée à cet effet, les 30 ruches, peintes de tons différents, placées en demi-cercle, autour d’un grand massif de fleurs, ressemblent à un coquet petit village et l’aspect est vraiment séduisant.
</Paragraph>

<div class="flex justify-center">
    <div class="w-[1000px] flex flex-wrap">
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic21} alt="Carte postale 1 colorisée"/>
        </figure>
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic22} alt="Carte postale 2 colorisée"/>
        </figure>
    </div>
</div>

<Paragraph cssClass="italic">
    Devant une trentaine de personnes, parmi lesquelles MM. le docteur Bondouy, professeur à l’école de médecine : Maridonneau, instituteur à Saint-Genouph et ses élèves ; Caillaux père et fils ; Rousseau, Robineau, Chollet, Balsas, Filizater, Gallé père ; Léger, Duveau, R. Bigot, Guyon, Loyer, Perrée, etc. ; apiculteurs. M. G. Fouquet fit, avec une grande habileté, la démonstration des numéros inscrits au programme.
</Paragraph>
<Paragraph cssClass="italic">
    Ce fut d’abord la visite des rûches, en vue de l’hivernage : enlèvement des cadres de côté, remplacés par des partitions munies de paille, évaluation des provisions restantes, aération de la colonie en intercalant de petites cales entre la rûche et le plateau, etc.
</Paragraph>
<Paragraph cssClass="italic">
    Une très intéressante opération fut l’introduction d’une chasse dans une ruche à cadres préalablement garnie de rayons de miel enlevées aux colonies fortes. L’ensemble parfait avec lequel ces gentilles petites avettes montaient à l’assaut de leur nouveau domicile émerveilla les spectateurs. Un apiculteur présent, Monsieur Pérée, en prit quelques clichés.
</Paragraph>

<div class="flex justify-center">
    <div class="w-[1000px] flex flex-wrap">
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic23} alt="Carte postale 1 colorisée"/>
        </figure>
        <figure class="w-full md:w-1/2 mx-w-full flex flex-col justify-between">
            <img class="w-full" src={pic24} alt="Carte postale 2 colorisée"/>
        </figure>
    </div>
</div>

<Paragraph cssClass="italic">
    Au laboratoire, le conférencier fit la démonstration des différents nourrisseurs employés à l’arrière saison : système anglais Miller, Siebenthal, Maigre, etc. : tous furent reconnus très pratiques, bien que d’un système différent.
</Paragraph>
<Paragraph cssClass="italic">
    Le 3e numéro du programme consistait en la réunion de deux ruches faibles. Cette opération, très simple, exige cependant un tour de main et une connaissance du métier que possède à fond M. G. Fouquet, pour empêcher que les abeilles ne se battent et ne provoquent une irritation préjudiciable aux colonies.
</Paragraph>
<Paragraph cssClass="italic">
    Grâce à l’habileté de l’exécutant, à un bon enfumage et à une pulvérisation d’eau aromatisée, l’opération réussit à merveille.
</Paragraph>
<Paragraph cssClass="italic">
    Au cours de ces différentes manipulations, et à cette époque où les abeilles sont plus agressives, il est à remarquer qu’aucune piqûre n’incommoda les spectateurs, ce qui prouverait qu’avec de la méthode et un peu de pratique, le maniement des abeilles n’est pas si dangereux que l’on veut bien le dire et qu’avec les précautions voulues, toute personne ayant quelques loisirs peut devenir apiculteur.
</Paragraph>
<Paragraph cssClass="italic">
    La séance prit fin en dégustant un joli vin mousseux et tous les assistants se séparèrent au milieu des remerciements à M. Fouquet et de l’enchantement de ce bon après-midi qui continue l’incomparable série des cours de la société. À la suite de cette conférence, la section enregistra plusieurs adhésions nouvelles.
</Paragraph>
<Paragraph cssClass="italic">
    Rucher École de Loches. — Cette dernière série de cours a été terminée par la réunion-conférence de Loches, le 12 octobre dernier. Plus de vingt-cinq apiculteurs des environs sont accourus pour profiter des démonstrations de M. Mathieu, l’éminent professeur, et tous les assistants, reconnaissants de l’action si particulièrement utile de la section, ont exprimé leurs vifs remerciements à ses représentants, qui préparent, pour des temps prochains, de nouveaux efforts de décentralisation apicole.
</Paragraph>
<Paragraph cssClass="italic">
    Le secrétaire de la section : V. Rocher.
</Paragraph>

<Title2>Des recherches à poursuivre</Title2>

<Paragraph>
    Ces premières recherches nous amènent à en mener de nouvelles, avec des réponses trouvées mais aussi d’autres questions, et d’autres recherches à effectuer aux archives départementales.
</Paragraph>
<Paragraph>
    Des recherches sur les activités agricoles et possessions des Fouquet, qui amèneront peut-être à d’autres découvertes, et notamment sur le devenir des trentes ruches.
</Paragraph>
<Paragraph>
    L’article de la Touraine républicaine ouvre de nouvelles pistes de recherche grâce aux noms des participants, des recherches à mener aussi sur le rucher école de Loches, ainsi que l’existence d’un programme de la journée. Grâce à l’article nous connaissons également l’auteur des photographies Monsieur Pérée.
</Paragraph>
<Paragraph>
    Il serait intéressant de présenter ces photographies et cet article à un apiculteur qui tirerait certainement des conclusions qui nous ouvrirait des pistes.
</Paragraph>
<Paragraph>
    Mais c’est déjà un début d’histoire pour cette nouvelle école découverte sur Luynes.
</Paragraph>
<Paragraph cssClass="font-bold italic">
    Christophe Gaillard, pour L’autre Terre Libérée, 2024
</Paragraph>

<Title2>Une extrapolation</Title2>

<Paragraph>
    Dans l’article, l’auteur fait référence à la dégustation d’« un joli vin mousseux ». A cette époque sur Luynes et Fondettes nombreux étaient les hectares de vignes et les vignerons. Je fais l’extrapolation que la cuvée fournie par Georges Fouquet devait être le vin mousseux de son voisin, Désiré Charles Aimé Bresnier, mort également lors de la première guerre mondiale et dont le fils Aimé propose « la cuvée du Chêne vert » qui peut-être existait déjà en 1913. Les Bresnier habitaient à quelques centaines de mêtres des Fouquet<RefLink number={10}/>, mais ceci est une pure extrapolation !
</Paragraph>

<Title2>Références</Title2>

<ol>
    <RefNotice number={1} description="lien cadastre archive 37" url="https://archives.touraine.fr/ark:/37621/38n4905jgwkb/e86085c1-0c1a-42a6-9eeb-15552eff448c"/>
    <RefNotice number={2} description="lien recensement de 1911" url="https://archives.touraine.fr/ark:/37621/2gl7k05j6wct/a3e6b72b-593d-491f-94fc-021387e9c462"/>
    <RefNotice number={3} description="acte de naissance de Germaine" url="https://archives.touraine.fr/ark:/37621/8gv0pcrxl79s/e763f184-14a4-44bd-aced-b307c2004996"/>
    <RefNotice number={4} description="acte de naissance de Georges" url="https://archives.touraine.fr/ark:/37621/gjt0cq9p74d6/f4d826ed-ece5-4480-908b-7e6c69a2d5f3"/>
    <RefNotice number={5} description="acte de naissance de François" url="https://archives.touraine.fr/ark:/37621/r3vqmg0dskcw/297f94ce-3443-4d9c-8113-935f59da39dd"/>
    <RefNotice number={6} description="acte de mariage de Georges et Germaine" url="https://archives.touraine.fr/ark:/37621/7xsqh2lfc5g9/7d33973b-739b-4610-8366-601787dfbc28"/>
    <RefNotice number={7} description="lien recensement de 1906" url="https://archives.touraine.fr/ark:/37621/802sqt61bm49/7b23ae37-42b7-4a13-a7ee-652142ed489a"/>
    <RefNotice number={8} description="livret militaire de Georges" url="https://archives.touraine.fr/ark:/37621/kb3r15ph6fx8/3df3da2b-f319-4660-94c6-324676432866"/>
    <RefNotice number={9} description="La Touraine républicaine du 30 octobre 1913" url="https://archives.touraine.fr/ark:/37621/m1vzljs7bx8k/720ab4e7-b517-477c-94da-f155a0aa7a32"/>
    <RefNotice number={10} description="lien recensement de 1911 à Fondettes" url="https://archives.touraine.fr/ark:/37621/vskj6xnrd1wp/82215e6a-009d-4512-85e1-735aef78e0a1"/>
</ol>