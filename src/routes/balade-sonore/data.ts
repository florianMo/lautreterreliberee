export interface Ardoise {
    numero: string;
    titre: string;
    texteArdoise: string[];
    texteAudio: string[];
}

export const ardoises: Ardoise[] = [
    {
        numero: '1',
        titre: 'A la rencontre de Louis Rimbault',
        texteArdoise :
            [
                'Ce premier podcast vous invite à partir à la rencontre de Louis. Comme vous aujourd’hui, cette histoire nous l’avons découverte au hasard d’une promenade dans Luynes. Nous sommes tombés sur ce premier indice, point de départ de notre enquête, là où nous allons vous emmener.'
            ],
        texteAudio:
            [
                'A Luynes, comme dans beaucoup de villes et villages, nous avons un patrimoine bâti historique qu’on aime à mettre en lumière. Toutes ces vieilles pierres racontent une histoire officielle.',
                'A Luynes, nous avons les vestiges d’un aqueduc romain ; une halle du XVe siècle, point de départ de cette promenade ; une maison à pan de bois, du XVe également ; un château médiéval remodelé à la Renaissance ; et encore quelques autres bâtisses pour le moins magnifiques…',
                'A côté de ces emblèmes forts et imposants, construits sur la sueur et le sang d’hommes et de femmes, il y a leurs petites histoires, leurs parcours.',
                'L’Histoire, celle avec le H en majuscule, est composée de ces multiples autres plus petites, pour beaucoup certainement banales mais parfois passionnantes.',
                'Et à Luynes, il se trouve que nous en avons une comme cela, une qui a disparu des mémoires. Une histoire dont le premier indice se trouve dans le cimetière, dans sa partie ancienne, près de l’if.',
                'C’est là-bas que nous avons rencontré Louis pour la première fois, et c’est là-bas que nous vous invitons également à le rencontrer pour la première fois. A lire l’épitaphe sur sa tombe.'
            ]
    },
    {
        numero: '2',
        titre: 'L\'épitaphe, le début de l\'enquête',
        texteArdoise :
            [
                'De cette épitaphe pour le moins énigmatique, nous commençons notre enquête. Louis Rimbault a été inscrit au carnet B vers 1911-1912. Le carnet B est un fichier établi par la Sûreté Nationale recensant les anarchistes et antimilitaristes considérés comme dangereux. Rimbault faisait donc l’objet d’un contrôle régulier qui nous fournit de riches informations sur son parcours.'
            ],
        texteAudio:
            [
                'Comme vous, là maintenant, en lisant cette plaque, nous avons été intrigués.  Et pour trouver des informations, notre point de départ, ce sont les archives. Aux archives municipales, rien ; aux archives départementales, rien non plus. Notre recherche documentaire nous a finalement conduit loin de Luynes, à Paris, aux archives nationales et aux archives de la police. En tant que militant anarchiste, le parcours de Louis Rimbault a été renseigné par des rapports du ministère de l’Intérieur. Nous vous faisons lecture de certains documents.',
                'Préfecture de police, service des renseignements généraux. Paris, le 29 août 1916. Rapport du chef de service des renseignements généraux à monsieur le préfet de Police.',
                'Objet : Au sujet de Monsieur Rimbault, Louis, abonné au journal anarchiste et pacifiste « Ce Qu’il Faut Dire ».',
                'Je transmets ci-après les renseignements recueillis sur le compte du nommé Rimbault, Louis, né le 09 avril 1877 à Tours.',
                'Après avoir été établi quincailler pendant 5 ans environ de 1906 à 1911 à Gargan Livry Seine et Oise, où il a exercé, durant 4 ans, les fonctions de conseiller municipal auxquelles il avait été élu sous l’étiquette radicale socialiste et qu’il a dû abandonner en raison de son intransigeance, le susnommé a quitté cette localité pour aller demeurer à Pavillon-sous-Bois de décembre 1911 au 19 janvier 1912.',
                'A ce moment Rimbault entretenait des relations avec les anarchistes GARNIER, CAROUY, FORGET faisant partie de la bande à Bonnot. Il passait même pour fournir ceux-ci les outils perfectionnés qui leur servaient à commettre leurs cambriolages.',
                'Impliqué dans le procès de ces anarchistes, il a été arrêté le 19 janvier 1912, sous l’inculpation de vol et de complicité et écroué à la prison de la Santé.',
                'Aux assises, le 20 Août 1914, Rimbault a été acquitté mais il n’a pas été remis en liberté. Il a été envoyé le 26 août au 104e Régiment d’Infanterie à Argentan. Le 30 juin 1915, il a été placé en sursis d’appel et affecté, en sa qualité d’ouvrier serrurier à la maison LECOT, 93 rue Pelleport.',
                'Rimbault demeure depuis juillet 1915, rue Pelleport au 88 ou il occupe un logement annuel de 220 frs qu’il n’a pas encore payé.',
                'Préfecture de police, service des renseignements généraux et des jeux. Paris, le 8 octobre 1923. Rapport du chef de service.',
                'L’anarchiste Rimbault, Louis, Édouard, est absent de son domicile 88 rue Pelleport depuis la fin Septembre.',
                'Il se trouverait 9 rue Victor Hugo à Tours chez une dame Pierre avec laquelle il serait en pourparler pour l’achat d’une petite propriété dans laquelle il installerait une colonie végétarienne.',
                'Rimbault figure sur la liste des anarchistes dont le domicile est soumis à vérification bi-mensuelle.',
                'Signalement : 1m68 environ, figure maigre, osseuse, aspect maladif, corpulence ordinaire, légèrement voûté, cheveux châtain roux, pommettes saillantes, teint pâle.',
                'Préfecture de police, direction des recherches. Paris, le 30 avril 1924. Rapport du chef de service.',
                'L’anarchiste Rimbault Louis, qui demeurait 88 rue Pelleport a quitté cette adresse le 15 avril courant, pour aller habiter à Luynes au lieu dit « Terre Libérée » Indre et Loire, où il aurait créé une colonie végétalienne.',
                'Rimbault figure sur la liste des anarchistes qui est transmise bi-mensuellement au Cabinet.',
                'Préfecture de police, cabinet du préfet. Paris, le 31 décembre 1926. Secret. Le préfet de Police à Monsieur le ministre de l’intérieur (Direction de la sureté générale 2e bureau – Carnet B)',
                'Je suis aisé que le nommé Rimbault Louis Edouard, né le 9 avril 1877 à Tours inscrit au carnet B de la Seine (3e group), s’est installé dans la colonie végétalienne de Luynes au lieu dit « Terre Libérée » Indre et Loire.',
                'J’ai l’honneur de vous faire connaitre que le 28 décembre 1926, j’ai rayé cet individu au carnet B de la Seine et que j’ai transféré son dossier à Monsieur le Préfet d’Indre et Loire.'
            ]
    },
    {
        numero: '4',
        titre: 'Les témoignages vivants',
        texteArdoise :
            [
                'Louis Rimbault est mort en 1949. C’est un peu trop loin pour trouver des témoignages directs. Pour autant, certains ici se souviennent de quelques  commentaires que racontaient les Luynois ayant croisé son chemin.'
            ],
        texteAudio:
            [
                'Louis Rimbault est mort en 1949. C’est un peu trop loin pour trouver des témoignages directs. Pour autant, certains ici se souviennent de leurs parents, de leurs grand-parents et des histoires qu’ils leur racontaient sur ce fameux Rimbault. On se souvient encore du corbillard venu chercher son corps.',
                '<i>Bernard M</i> : Oui, bien moi, je me rappelle de voir les chevaux passer là, des chevaux blancs en plus… et l’mien était noir, c’est ce que j’avais dit, soi disant, je ne me rappelle pas de ça, mais ma mère m’a dit ça, le corbillard a passé là. Et puis par contre, quand il est reparti, il est reparti par ce chemin là qu’il n’avait pas le droit. Il n’avait  pas le droit hein, c’est un chemin privé. Il n’avait pas à repasser par ici, surtout que c’était une saloperie, l’Rimbault, une belle saloperie. Pas possible. Les pauvres gamins qui étaient là-dedans, ils mouraient de faim, les gamins emmenaient en cachette voir ma mère pour avoir un bout de pain sec. Tellement qu’ils n’avaient rien à manger. C’est dingue hein…non les pauvres gamins. Ils étaient dans la misère.',
                '<i>Michel R</i> : Oui, il y a eu des morts. Oui, j’ai entendu ma mère me le dire, qu’elle a entendu de ses grands parents, déjà à l’époque. Il y aurait eu beaucoup de personnes qui seraient décédées là. Beaucoup de travail, travail de la terre afin de récolter terre, mais le lait, ça venait d’une vache. Donc il fallait tout ce qui était vivant il fallait pas y toucher… les œufs de poules, pas les poules, pas le lait de vache, parce qu’ils ne se nourrissaient que de racines, de plantes, que de ça… Racines de pissenlits, et que des trucs comme ça…ben les gens étaient, perdaient du poids et tout. Il y eut des morts… Et ils appelaient ça la confrérie des non bâtisseurs. Comme il y a des maisons qui étaient commencées, jamais finies… Alors c’était ça qui se faisait et nourrissait les gens. Et d’après il y a eu énormément de gens qui sont morts ici.',
                '<i>Bernard M</i> : Attendez on n’était pas du tout du même bord. Lui, il était végétalien à 100%, nous on était normal, normal quoi on mangeait comme tout le monde.',
                '<i>Gilles F</i> : Mon grand père a toujours été ici, à Luynes et je me rappelle, quand j’étais gamin, me parler de ce fameux Rimbault ! Rimbault que tout le monde… pas craignait…  mais on évitait… parce qu’il a vu une réputation un petit peu sulfureuse. Alors ça se disait il y avait des bruits qui couraient… Be des bruits couraient comme quoi ils avaient des pratiques un peu spéciales, quoi. Déjà les bruits sur la réputation de Rimbault, ça, tout le monde le connaissait, son passé était connu à Luynes. Après, il y avait des bruits sur les pratiques un peu bizarres qui se passaient autour de la ferme. Bah, le naturisme à l’époque… Voilà, dans les années, les années 20-30, ce n’était pas trop… ça courait pas… De temps en temps, il descendait parce qu’il allait chercher, je sais pas, la farine pour faire son pain, il avait quand même quelques courses à faire, mais quand on voyait Rimbault dans le village, on changeait de trottoir. Bon, les luynois, à l’époque, se méfiaient de lui. Alors peut-être parce qu’il avait des idées anarchistes… Ben il a quand même été dans la bande à Bonnot. Il avait une réputation sulfureuse. Et puis on se demandait ce qui se passait aussi dans la ferme…',
                '<i>Bernard M</i> : Y’a des moments qu’il était sociable… y’a des moments qu’il était sociable. Et puis des moments, il était invivable. Voilà ce que ma mère m’a dit. Elle était sociable avec nous, avec les gamins, les parents plus ou moins. Mais ça allait. Comme dit ma mère, il y a des fois et c’était. Et puis alors là, ça le prenait… Et là d’ici il allait à la préfecture, à Tours, à pied !!! Et des fois en courant même !! Ah ben c’est mon frère, il est beaucoup plus vieux, il l’a connu lui… Et attends là, il a bientôt, il a neuf ans de plus que moi. Il a connu ça, il allait là bas et là, lui, il se rappelle de le voir aller à Tours à pied. Et des fois, il y allait en courant. Il avait même pas un vélo !!! Mais il avait des sacrés relations attention hein !!!! Et puis il était loin d’être bête ! Attention !! Très, très instruit, très très instruit.',
                '<i>Gilles F</i> : Chose étonnante, les Tourangeaux qui venaient adhérer à cette philosophie, venaient par le tramway, aprce qu’il y avait le tramway qui arrivait au centre ville de Luynes et donc, tout le week end, on voyait, paraît il, un défilé de gens bien vêtus, bien costumés, avec avec leurs bagages pour le weekend et qui montaient à pied, passer le week end à Terre Libérée.',
                'Et les bourgeois de Tours venaient en Tram, donc venaient le samedi puis ils repartaient le dimanche soir. Ils passaient le week end ici et donc il y avait un cortège devant 25 ou 30 personnes qui montaient et puis qui redescendaient… Alors ça intriguait les gens, qu’est ce qui se passe là-bas ? Qu’est ce que c’est que ça ?',
                '<i>Bernard M</i> : Après la guerre, oui, ça s’est calmé. Après la guerre ben il n’a pas vécu longtemps puisqu’il est mort en 49.'
            ]
    },
    {
        numero: '3',
        titre: 'Louis Rimbault s’installe à Luynes',
        texteArdoise :
            [
                '1923, Louis Rimbault est à Luynes, il vient d’acheter une propriété pour y installer son projet d’école végétarienne. Dans le journal <i>Le Néo-Naturien</i>, Louis Rimbault décrit avec enthousiasme le paysage qui l’accueille. Vous allez écouter la description d’un paysage luynois de 1923 en contemplant un paysage de 2023.'
            ],
        texteAudio:
            [
                'Après l’avoir suivi dans les fiches de renseignements de la préfecture de police, nous retrouvons Louis dans un journal de propagande végétarienne le Néo-Naturien, le numéro 15 de novembre-décembre 1923, dans lequel Louis Rimbault décrit avec enthousiasme la propriété qu’il vient d’acquérir',
                '<i>Louis Rimbault</i> : C’est donc à Luynes, près de Tours (11 kilomètres), en pleine Touraine, que s’établira la cité libre végétalienne « TERRE LIBÉRÉE », au lieu-dit « Le Pin ». Les 10 hectares de bonne terre acquis à cet effet sont merveilleusement situés sur un coteau abrité des vents par une ceinture de bois de sapins et de châtaigniers. La propriété domine un ensemble de ravissants panoramas.',
                'Ce coin des plus intéressants de l’ancien duché de Luynes, est à 30 minutes de la Loire et à 8 minutes de la Brême ; un petit ruisselet passe au pied du coteau à l’extrémité de la propriété. Le pays, distant de 2 kilomètres 500 de « TERRE LIBÉRÉE », comprend un bureau de poste, un hôpital et est desservi par un chemin de fer sur route, partant de la gare de Tours, avec six départs journaliers et ayant Luynes comme terminus. Une gare de chemins de fer des lignes de Tours au Mans et de Tours-Vendôme-Paris, Fondettes-Saint-Cyr (résidence d’Anatole France), se trouve à 4 kilomètres de Luynes.',
                'La pierre de béton et de blocage, le cailloutis et la pierre propre à la construction peuvent être tirés très facilement du sol de la Cité. Luynes possède des ruines historiques imposantes, vestiges d’un grand aqueduc romain, ainsi qu’un château fort ancien attirant le touriste étranger. Nombreux sont les amateurs de merveilleux paysages qui fréquentent Luynes et ses environs. Luynes est également le rendez-vous des peintres paysagistes et des poètes qui y composèrent quelques œuvres célèbres.',
                'Une cité, construite sur une des parties les plus élevées de ce pays, harmonieusement accidentée, est habitée par des artisans lapidaires, associés dans leurs entreprises. Le voisinage est composé de gens laborieux, sobres et avenants.'
            ]
    },
    {
        numero: '5',
        titre: 'Être végétarien il y a cent ans',
        texteArdoise :
            [
                'Pour Rimbault, être végétarien, en 1910, c’est un acte éminemment politique. En 1923, il lance son appel aux consciences citoyennes pour venir rejoindre la communauté luynoise. Rimbault est un exalté, un tribun, son texte est emprunt de sa verve enthousiaste et excessive si caractéristique, que nous avons malgré tout quelque peu allégée. Vous noterez l’étonnante modernité de ces mots écrits il y a cent ans.'
            ],
        texteAudio:
            [
                '<i>Le narrateur</i> : Louis Rimbault devient végétarien aux environs de 1910. Pour lui, être végétarien c’est un acte éminemment politique. En décembre 1923, alors qu’il s’installe à Luynes, Louis Rimbault rédige un article dans « Le Néo Naturien », un journal de propagande végétarienne, dans lequel il lance appel à l’action des consciences naturienne, article dans lequel il développe et explique ce qu’est pour lui le végétarisme. Rimbault est un exalté, un tribun, son texte est emprunt de sa verve enthousiaste et excessive si caractéristique. On ne peut être que frappé, de l’étonnante modernité de ces mots écrits il y a cent ans.',
                '<i>Louis Rimbault</i> : Pas un naturophile : naturien, naturocrate, végétarien, végétalien, fruitarien n’aura manqué de se réjouir de l’initiative qui consiste à créer, aux environs de Tours, la première cité végétalienne.',
                'Après avoir renversé les bastilles et dressé mille barricades ; après avoir consenti les sacrifices des révolutions sans lendemain ; après avoir espéré dans les mots christianisme, libéralisme, socialisme, anarchisme ; après avoir remplacé les bannières blanches par des rouges et des noires. Les hommes désignés sous le vocable « matériel humain » sont l’enjeu misérable d’un ordinaire marché.',
                'Quelques hommes clairvoyants ont cependant réagi, et, est né sous leurs efforts et l’exemple de leur vie saine, bienveillante et logique LE VÉGÉTALISME, régénérant physiquement, moralement les hommes, en libérant la terre des ses maux.',
                'Le végétalisme, c’est une conception nouvelle de vie rationnelle, utile, libre et fraternelle.',
                'Repousser toute nourriture animale et tous produits tirés de l’animal ; se refuser à consommer tout ce qui a été industrialisé et devient cause de servitude humaine et animale, pour vivre harmonieusement en la Nature, voilà ce que propose et fait le végétalien.',
                'Le végétalisme, c’est la NON-COOPÉRATION à toutes les entreprises de spoliation, à tous les facteurs de domination et de servitude. Il donne à l’humanité un moyen initial propre à libérer les hommes. Le végétalisme, c’est la TERRE LIBÉRÉE des cultures malfaisantes, parasitaires qui la couvrent dans sa plus grande étendue. Le végétalisme restituera aux hommes, enfin libres, les espaces immenses consacrés à l’élevage des animaux sacrifiés au cannibalisme.',
                'Le végétalisme c’est le retour à la TERRE LIBÉRÉE de tout ce qui entrave l’essor de la vie, industrialise la science domestique la conscience et s’oppose au libre jeu des lois naturelles.',
                'Heureux hommes ! Ceux qui collaboreront et vivrons dans la cité idéale d’où seront bannies la souffrance inutile et la servitude des êtres sensibles.',
                'Heureux temps ! Où les hommes libérés des entraves morales, sociales et économiques,  travailleront à la réalisation d’un rêve bien humain : vivre dans la perfection de soi-même avec le désir d’initier d’autres hommes au bon sens, à l’harmonie, à la beauté !',
                'Louis Rimbault.'
            ]
    },
    {
        numero: '6',
        titre: 'La salade de Rimbault, la Basconnaise',
        texteArdoise :
            [
                'Louis Rimbault participe à plusieurs expériences de milieux libres, notamment à Bascon dans l’Aisne, auprès de Georges Butaud, anarchiste et végétalien né en 1868. Rimbault y invente une recette d’infinie variété végétale : la Basconnaise.'
            ],
        texteAudio:
            [
                'Voici donc pour vous les recettes végétaliennes, pour vivre cent ans.',
                'La salade basconnaise (alimentation saine, vivante, complète et innocente) sera composée de toutes verdures potagères, de toutes salades et légumes verts coupés fins, après un lavage soigné à l’eau salée d’abord, et rincés à l’eau courante.',
                'Les racines crues : carottes, navets, rutabagas, radis noirs, panais, raves, betteraves, pommes de terre, topinambours, seront simplement brossés sans être épluchés - un légume, un fruit épluché perd jusqu’à 8 parties sur 10 de sa valeur nourricière - ils seront donc nettoyés à la brosse à main dans l’eau courante et coupés avec un couteau de ferblanc, dit "couteau à la julienne", vendu communément 0 fr. 50 dans les bazars. Ce couteau, garni de petites encoches, produit une julienne qui fait s’entrelacer, dans un coloris appétissant, puis se confondre, tous les éléments en présence.',
                'Le radis rose et le salsifis, seront coupés en petites rondelles à l’aide de l’extrémité du couteau, réservée à l’épluchage de la pomme de terre.',
                'Les fruits, tels que tomate, melon, seront coupés fin en petites tranches, le melon, débarrassé de sa pelure ; le concombre, la pomme, ces deux derniers lavés avec soin et non épluchés, seront débités en julienne, pépins enlevés.',
                'D’autres fruits tels la cerise - noyau sorti - la groseille à grappe, la framboise, l’amande, la noix, la noisette et le marron - ces quatre derniers coupés en petits morceaux - agrémenteront la basconnaise, suivant ce que la saison fournira de fruits.',
                'Les légumes secs : haricots, lentilles, fèves, pois, cuits dans les soupes (au moyen de la boule à riz ou d\’un petit sac de toile) seront ajoutés dans la proportion d’une cuillerée à bouche ou deux par personne.',
                'Les haricots verts coupés fins, les fèves fraîches coupées en petits morceaux et le petit pois, peuvent entrer, pour une petite part dans la composition de la basconnaise.',
                'Le chou-fleur (cuit et cru), les légumes verts cuits, les croûtons de pain au four - supprimant le pain sur la table - et la pomme de terre cuite (3 en moyenne par personne), seront également ajoutés.',
                'Le blé grillé (doré seulement) et passé au moulin à café, le maïs également, remplaceront avantageusement les croûtons de pains grillés ou dorés à l’huile chaude à la poêle.',
                'Toutes les variétés de choux crus, coupés très fins, sont tout spécialement recommandés pour leurs principes minéralisateurs ; le chou cuit est à écarter de la basconnaise.',
                'Les amandes et le blé trempé dans l’eau avec quelques gouttes de jus de citron, pendant 12 heures au moins, et passés ensuite au hache-viande, font de la basconnaise un aliment complet, de soutien et de force. Condiments associés au choix : poireaux, ciboulette, oignons, ail - vert de préférence - pourpier, oseille, persil, cerfeuil, estragon, fenouil, sarriette, raiponce, pimprenelle, champignons crus et fleurs de trèfle, de sainfoin, luzerne ou capucines, roses, genêts, coquelicot, sureau.',
                'La salade pourra être assaisonnée de citron en remplacement du vinaigre - quelques gouttes de vinaigre peuvent détruire une part importante des principes minéralisateurs - d\’huile de bonne qualité, au choix des variétés, et de sel.',
                'A <i>Terre Libérée</i>, il entre, dans la composition de la “Basconnaise”, plus de 50 variétés végétales sauvages.',
                'A <i>Terre Libérée</i>, il entre, dans la composition de la “Basconnaise”, plus de 50 variétés végétales sauvages. Un argument opposé à l’idée de la basconnaise et de la cuisine d’infinie variété végétale c’est le temps qu’il faut donner à la préparation des mets. Et nous répondrons à cela, que l’argument ne porte que pour ceux qui n’ont pas de temps, soit qu’ils le gâchent ou qu’ils l’offrent stupidement à la rapacité de ceux qui les dupent ou les exploitent.',
                'Louis Rimbault.'
            ]
    },
    {
        numero: '7',
        titre: 'La lutte contre les fléaux',
        texteArdoise :
            [
                'Toute sa vie, Louis Rimbault mène une lutte acharnée contre l’alcool et le tabac. Il faut replacer dans le contexte d’une époque différente de la nôtre ces combats, contre une consommation de vin, largement encouragée par la publicité, qui crée des ravages dans la population du début du 20e siècle et qui, du point de vue de nombre d’anarchistes, contribue à l’aliénation des masses. Il a écrit nombre d’articles à ce sujet, dans <i>Le Néo-Naturien</i>, dont celui-ci.'
            ],
        texteAudio:
            [
                'Voilà bien une des plus importantes causes de la misère et de l’exploitation ! Les chiffres que nous donnons ci-dessous donneront une idée du gâchis provoqué et justifié par l’usage ou l’abus des choses nuisibles toujours, dangereuses souvent, et mortelles quelquefois.',
                'Pour le vin, 86 mille kilomètre carré de culture de vigne ; pour la bière, 42 mille kilomètre carré de culture de céréale ; Pour l’alcool 34 mille kilomètre carré de culture de céréale ; Pour le tabac 10 mille kilomètre carré de culture parasitaire.',
                'Donc se refuser aux travaux inutiles et parasitaires, déserter le “bagne capitaliste” une partie de l’année pour se consacrer à l’étude, boycotter les boutiques de mercantis telles que : boucheries, charcuteries, poissonneries, rôtisseries, “bistrots”, cafés, bars, débitant de tabacs, pharmacies et officines de “fumistéol” et de “charlatonal”, parfumeries, bijouteries, magasins de luxe, patisserie, marchands de cafés, de conserves, de vinaigre et autres poisons et inutilités ; et n’attendre tout ce qui est humain que de la bêche, dans l’effort collectif ou individuel, c’est bien là toute la fin des cités meurtrières, corrompues et pourries, c’est bien là toute la Révolution dans l’individu et le milieu.',
                'Et que dire de cette guerre ou l’aberration des adversaires en présence fut telle, malgré les progrès de la civilisation et de la science, qu’on se demande encore ce qui a pu contribuer à cette faillite de la dignité humaine, de la conscience populaire.',
                'Les Dieux “gniole”, “pinard” et “trèfle” sont bien les trois facteurs principaux qui ont concouri à détruire le sentiment de la responsabilité et de la personnalité dans cette stupide tuerie.'
            ]
    },
    {
        numero: '8',
        titre: 'Une visite à Terre Libérée',
        texteArdoise :
            [
                'En 1924, un “camarade” du <i>Libertaire</i>, un hebdomadaire fondé en 1895 par Louise Michel et Sébastien Faure, rend visite à Terre Libérée. Cet article rend la visite très vivante, vous découvrez la colonie comme si vous y étiez.'
            ],
        texteAudio:
            [
                'Je profitai de ma présence à Tours, pour aller visiter la colonie où Rimbault et quelques pionniers sont en train, depuis une quarantaine de jours, de défricher un sol ingrat. La question des colonies anarchistes m’intéressait au plus haut point, je partis d’enthousiasme.',
                'Nous y allâmes avec Nadaud et Lehoux, nous prîmes à Tours le tramway qui part à 14h15 et qui s’arrête à Luynes à 15 heures. Arrivés là, nous marchâmes sur la route de Cléré, que nous abandonnâmes après trente-cinq minutes de marche pour prendre un petit chemin d’abord un peu large qui se termine en sentier au milieu de froments, d’avoines, d’arbustes et de touffes d’herbes. Cinq minutes de plus et nous sommes arrivés. Nous apercevons au seuil d’une demeure un peu en ruine un petit groupe de compagnes et de compagnons et de deux bambins qui se distinguent des gens de l’endroit par leur mise. Nous nous approchons rapidement, il nous faut reprendre le tramway à 17 heures, nous avons à peine quarante minutes à être les hôtes de nos amis végétaliens. Dès notre approche, voilà Rimbault assis à une table qui rédige une déclaration de principes ou quelque chose d’analogue.',
                '- Bonjour, Rimbault, lui disons-nous. Il nous répond : « -Avez-vous mangé ? – oui. » Tout de suite il commence l’exposé et le fonctionnement de la colonie. Le régime végétalien est de rigueur à « Terre Libérée ». « Nous cherchons à nous exclure complètement du capitalisme », nous dit Rimbault. C’est alors que je lui fais remarquer qu’il n’a réussi qu’imparfaitement. En effet, j’aperçois le journal L’Oeuvre, composé par des salariés. « Nous le recevons du Foyer végétalien », nous dit Rimbault. Nadaud, à son tour, de faire observer : « cette machine à coudre, ce fusil, le linge, le cuir de vos sandalettes, etc., etc. »',
                '« Voilà, dit Rimbault, le fusil c’est le paysan qui était ici avant nous qui l’y a laissé ; quant aux autres objets, nous nous limitons ! (en effet sans chaussettes, un pantalon, une veste et sa chemise forment tout l’habillement de Rimbault).',
                'Il continue : « Tu vois cet objet pour écraser les fruits ? Nous l’avons acheté au moment qu’il retournait au creuset, afin d’éviter au mineur de descendre dans la mine. Nous achetons tous nos objets au marché aux puces, nous les rafistolons, et voilà : il y a assez d’éléments arrachés aux entrailles de la terre ; si tout était utilisé pour des œuvres utiles point ne serait besoin de descendre dans les galeries des mines fouiller et extraire les métaux. »',
                'Voilà un moulin à café, je demande : « vous buvez du café ? » « Non me répond Rimbault, on s’en sert pour écraser les graines. » Toutes ces questions paraissent énerver un compagnon végétalien. « Fais-nous visiter votre exploitation, lui dis-je car il nous faut repartir bientôt. » Le voilà leste et vigoureux, déjà debout : on sent en lui la santé et la volonté. Il y a certes beaucoup de choses raisonnables dans leur régime, entre autres le bannissement de l’alcool, du tabac, des stupéfiants.',
                'Nous visitons les ateliers installés dans un local en ruine, la toiture est en partie ouverte à la pluie ; voilà les terres, voici quelques plates-bandes de salades, choux, oignons rachitiques et maigriots, car ils n’ont pas d’engrais ; voici du maïs dévoré par les chenilles et les colimaçons qui viennent des touffes d’arbustes en bordure.',
                'Les pionniers sont là pour aménager la colonie. Bientôt les sociétaires vont arriver. Pour être sociétaire il faut verser 3.000 francs ; avec cette somme, le sociétaire a droit au logement et à une parcelle de terrain à vie ; au bout de quatre ou cinq ans, la colonie rembourse 2.500 francs, c’est-à-dire la somme que le sociétaire a versée, moins 500 francs qu’on lui retient. A son tour, le sociétaire devient pionnier et va fonder une autre colonie.',
                'Sur ce, nous allons quitter cet admirable coin pastoral où des êtres intelligents, mais inexpérimentés en la matière, fouillent le roc avec des méthodes rudimentaires dans une sorte d’idéal mystico-naturien.',
                'Lorsque la révolution aura aboli le capitalisme, l’exploitation de l’homme par l’homme, l’autorité, l’État et ses succédanés, une floraison de petites communautés, de colonies anarchistes libres surgiront sur toute la terre, à l’exemple de « Terre Libérée », mais le confort moderne n’en sera pas exclu : mécanique, électricité, bibliothèque, enseignement, conférence, etc., élèveront le moral et la conscience des êtres libres qui vivront dans la douce nature des champs.',
                'Un camarade instituteur et une camarade institutrice sont là pour donner un enseignement pratique. Il ne nous reste plus qu’à dire courage à ces braves, tant de tentatives ont échoué, que celle-ci ou d’autres doivent réussir par la logique des choses.'
            ]
    }
].sort((a, b) => a.numero.localeCompare(b.numero));
