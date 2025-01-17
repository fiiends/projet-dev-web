//La variable qui contient toutes les données
const quizData = [
    {
      "question": "Quel groupe est surnommé les \"Fab Four\" ?",
      "options": ["The Beatles", "The Rolling Stones", "ABBA", "Queen"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quelle chanteuse est connue pour son tube \"Hello\" ?",
      "options": ["Adele", "Beyoncé", "Taylor Swift", "Lady Gaga"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Qui a composé la symphonie \"Symphonie No. 5\" ?",
      "options": ["Beethoven", "Mozart", "Bach", "Schubert"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel artiste a popularisé la chanson \"Thriller\" ?",
      "options": ["Michael Jackson", "Prince", "Stevie Wonder", "Elvis Presley"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel instrument est associé à Ludwig van Beethoven ?",
      "options": ["Piano", "Violon", "Guitare", "Flûte"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quelle chanteuse est surnommée la \"Reine de la Soul\" ?",
      "options": ["Aretha Franklin", "Whitney Houston", "Mariah Carey", "Etta James"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel groupe britannique a chanté \"Wonderwall\" ?",
      "options": ["Oasis", "Blur", "Radiohead", "Coldplay"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel instrument est typiquement utilisé dans le jazz ?",
      "options": ["Saxophone", "Guitare électrique", "Violon", "Harpe"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel chanteur est connu pour la chanson \"Shape of You\" ?",
      "options": ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Harry Styles"],
      "level": "facile",
      "category": "musique"
    },
    {
      "question": "Quel duo électro français a créé \"Get Lucky\" ?",
      "options": ["Daft Punk", "Justice", "Air", "The Chemical Brothers"],
      "level": "facile",
      "category": "musique"
    },
  
    // Moyen
    {
      "question": "Quel groupe a sorti l’album Dark Side of the Moon ?",
      "options": ["Pink Floyd", "Led Zeppelin", "The Who", "Metallica"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "De quel pays provient le genre musical le Fado ?",
      "options": ["Portugal", "Espagne", "Italie", "Grèce"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Qui chante \"Shallow\" avec Lady Gaga dans le film A Star is Born ?",
      "options": ["Bradley Cooper", "Chris Hemsworth", "Ryan Gosling", "Hugh Jackman"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Quel compositeur a écrit \"Le Lac des cygnes\" ?",
      "options": ["Tchaïkovski", "Stravinsky", "Chopin", "Brahms"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Quel est le nom du rappeur connu pour \"Stronger\" ?",
      "options": ["Kanye West", "Jay-Z", "Eminem", "Drake"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Quelle chanteuse est connue pour son album \"Born to Die\" ?",
      "options": ["Lana Del Rey", "Lorde", "Billie Eilish", "Florence Welch"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "De quel pays provient le genre musiqueal le Reggae ?",
      "options": ["Jamaïque", "Trinidad et Tobago", "Haïti", "Barbade"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Qui a composé \"La Flûte enchantée\" ?",
      "options": ["Mozart", "Beethoven", "Haydn", "Schubert"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Quel groupe a écrit la chanson \"Smells Like Teen Spirit\" ?",
      "options": ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"],
      "level": "moyen",
      "category": "musique"
    },
    {
      "question": "Quel rappeur est surnommé \"Slim Shady\" ?",
      "options": ["Eminem", "50 Cent", "Nas", "Kendrick Lamar"],
      "level": "moyen",
      "category": "musique"
    },
  
    // Difficile
    {
      "question": "Quel artiste de jazz est surnommé \"Satchmo\" ?",
      "options": ["Louis Armstrong", "Duke Ellington", "Charlie Parker", "Miles Davis"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Quel membre des Rolling Stones joue de la guitare ?",
      "options": ["Keith Richards", "Mick Jagger", "Ringo Starr", "Eric Clapton"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Dans quelle langue originale Edith Piaf chantait-elle principalement ?",
      "options": ["Français", "Italien", "Anglais", "Espagnol"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "En quelle année est sorti \"Imagine\" de John Lennon ?",
      "options": ["1971", "1969", "1973", "1975"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Quel chanteur interprète \"Bohemian Rhapsody\" avec Queen ?",
      "options": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Quel guitariste virtuose a popularisé la technique du tapping ?",
      "options": ["Eddie Van Halen", "Jimi Hendrix", "Eric Clapton", "Slash"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Dans quel opéra trouve-t-on l’air \"Nessun Dorma\" ?",
      "options": ["Turandot", "La Bohème", "Tosca", "Madame Butterfly"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Qui est l’auteur de la chanson \"Hallelujah\" ?",
      "options": ["Leonard Cohen", "Jeff Buckley", "Bob Dylan", "Paul Simon"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Quelle chanteuse française a interprété \"La Javanaise\" ?",
      "options": ["Juliette Gréco", "Edith Piaf", "Barbara", "Françoise Hardy"],
      "level": "difficile",
      "category": "musique"
    },
    {
      "question": "Quel membre des Beatles a écrit \"Something\" ?",
      "options": ["George Harrison", "Paul McCartney", "John Lennon", "Ringo Starr"],
      "level": "difficile",
      "category": "musique"
    },
  
    // Extreme
    {
      "question": "Qui a inventé le solfège ?",
      "options": ["Guido d’Arezzo", "Jean-Sébastien Bach", "Claudio Monteverdi", "François Couperin"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel est le plus long morceau jamais enregistré ?",
      "options": ["The Rise and Fall of Bossanova", "Echoes", "Tubular Bells", "Marquee Moon"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Qui a popularisé le mouvement Free Jazz ?",
      "options": ["Ornette Coleman", "John Coltrane", "Charles Mingus", "Dizzy Gillespie"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quelle œuvre de Bach contient \"Le Clavier bien tempéré\" ?",
      "options": ["Suites pour clavier", "Concerto Brandebourgeois", "Messe en si mineur", "Partita en ré"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel groupe islandais est connu pour sa chanteuse Björk avant sa carrière solo ?",
      "options": ["The Sugarcubes", "Sigur Rós", "Of Monsters and Men", "Múm"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quelle compositrice est considérée comme l’une des premières femmes à avoir écrit de la musique classique au Moyen Âge ?",
      "options": ["Hildegarde de Bingen", "Francesca Caccini", "Barbara Strozzi", "Fanny Mendelssohn"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel artiste a composé l’album de jazz emblématique \"Kind of Blue\" ?",
      "options": ["Miles Davis", "John Coltrane", "Herbie Hancock", "Thelonious Monk"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel opéra de Wagner dure environ 15 heures ?",
      "options": ["L’Anneau du Nibelung", "Tristan et Isolde", "Parsifal", "Tannhäuser"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel pianiste est surnommé \"Le Poète du Piano\" ?",
      "options": ["Frédéric Chopin", "Franz Liszt", "Claude Debussy", "Sergueï Rachmaninov"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel groupe a réalisé l’album expérimental \"Kid A\" ?",
      "options": ["Radiohead", "Pink Floyd", "The Velvet Underground", "Sonic Youth"],
      "level": "extreme",
      "category": "musique"
    },
    {
      "question": "Quel réalisateur est derrière Jurassic Park ?",
      "options": ["Steven Spielberg", "James Cameron", "Christopher Nolan", "George Lucas"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Quel film met en scène le personnage de Luke Skywalker ?",
      "options": ["Star Wars", "Star Trek", "Avatar", "Matrix"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Qui est l’acteur principal de Mission Impossible ?",
      "options": ["Tom Cruise", "Keanu Reeves", "Brad Pitt", "Matt Damon"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Dans quel film trouve-t-on le personnage de Simba ?",
      "options": ["Le Roi Lion", "Madagascar", "Bambi", "Zootopie"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Quel est le réalisateur de Titanic ?",
      "options": ["James Cameron", "Steven Spielberg", "Martin Scorsese", "Ridley Scott"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur est derrière E.T. l'extra-terrestre ?",
      "options": ["Steven Spielberg", "George Lucas", "Tim Burton", "James Cameron"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Quel film présente les personnages de Buzz l'Éclair et Woody ?",
      "options": ["Toy Story", "Les Indestructibles", "Monstres & Cie", "Cars"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Qui joue le rôle principal dans Pirates des Caraïbes ?",
      "options": ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Keanu Reeves"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Dans quel film le personnage principal s'appelle Marty McFly ?",
      "options": ["Retour vers le futur", "Ghostbusters", "Gremlins", "Les Goonies"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Quel est le nom du célèbre film de James Cameron sorti en 2009 ?",
      "options": ["Avatar", "Titanic", "Terminator 2", "Abyss"],
      "level": "facile",
      "category": "cinema"
    },
    {
      "question": "Qui a réalisé Pulp Fiction ?",
      "options": ["Quentin Tarantino", "Martin Scorsese", "Guy Ritchie", "David Fincher"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Quel film a remporté l’Oscar du meilleur film en 2020 ?",
      "options": ["Parasite", "Joker", "1917", "Once Upon a Time in Hollywood"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Quel acteur joue dans Forrest Gump ?",
      "options": ["Tom Hanks", "Robert De Niro", "Robin Williams", "Harrison Ford"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Dans quel film entend-on la phrase 'Hasta la vista, baby' ?",
      "options": ["Terminator 2", "Die Hard", "Rambo", "Predator"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Qui joue le rôle de Joker dans The Dark Knight ?",
      "options": ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur a dirigé Le Seigneur des Anneaux ?",
      "options": ["Peter Jackson", "Christopher Nolan", "Guillermo del Toro", "Ridley Scott"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Dans quel film entend-on la phrase 'Pourquoi est-ce si sérieux ?' ?",
      "options": ["The Dark Knight", "Inception", "Fight Club", "Se7en"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Quel acteur joue dans Le Loup de Wall Street ?",
      "options": ["Leonardo DiCaprio", "Matthew McConaughey", "Brad Pitt", "Tom Hardy"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Qui a réalisé le film Get Out ?",
      "options": ["Jordan Peele", "Spike Lee", "Quentin Tarantino", "John Singleton"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Quel film d'animation des années 90 met en scène la chanson 'Prince Ali' ?",
      "options": ["Aladdin", "Le Roi Lion", "Pocahontas", "Mulan"],
      "level": "moyen",
      "category": "cinema"
    },
    {
      "question": "Qui a écrit et réalisé le film Mulholland Drive ?",
      "options": ["David Lynch", "Quentin Tarantino", "Paul Thomas Anderson", "Terrence Malick"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "En quelle année est sorti le premier Harry Potter au cinéma ?",
      "options": ["2001", "1999", "2002", "2003"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel est le nom du personnage principal de La Liste de Schindler ?",
      "options": ["Oskar Schindler", "Hans Frank", "Itzhak Stern", "Amon Goeth"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur est célèbre pour ses plans-séquences complexes dans Birdman ?",
      "options": ["Alejandro G. Iñárritu", "Alfonso Cuarón", "Guillermo del Toro", "Damien Chazelle"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel film de science-fiction des années 80 a popularisé le hoverboard ?",
      "options": ["Retour vers le futur II", "Blade Runner", "Tron", "E.T."],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Qui a réalisé le film Apocalypse Now ?",
      "options": ["Francis Ford Coppola", "Stanley Kubrick", "Martin Scorsese", "Oliver Stone"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "En quelle année est sorti Citizen Kane ?",
      "options": ["1941", "1939", "1945", "1950"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur est connu pour Le Fabuleux Destin d'Amélie Poulain ?",
      "options": ["Jean-Pierre Jeunet", "Luc Besson", "Claude Lelouch", "François Ozon"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel acteur joue le rôle principal dans There Will Be Blood ?",
      "options": ["Daniel Day-Lewis", "Philip Seymour Hoffman", "Joaquin Phoenix", "Christian Bale"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Dans quel film trouve-t-on le personnage de Travis Bickle ?",
      "options": ["Taxi Driver", "Drive", "Reservoir Dogs", "Les Affranchis"],
      "level": "difficile",
      "category": "cinema"
    },
    {
      "question": "Quel film japonais a inspiré Le Roi Lion ?",
      "options": ["Kimba, le lion blanc", "Akira", "Princesse Mononoké", "Le Tombeau des lucioles"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel film d’Andrei Tarkovski est basé sur un roman d’Arkadi et Boris Strougatski ?",
      "options": ["Stalker", "Solaris", "Le Sacrifice", "Andreï Roublev"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur italien est connu pour Huit et demi ?",
      "options": ["Federico Fellini", "Sergio Leone", "Luchino Visconti", "Michelangelo Antonioni"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel est le premier long-métrage animé de l’histoire du cinéma ?",
      "options": ["Blanche-Neige et les Sept Nains", "Fantasia", "Dumbo", "Pinocchio"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Qui a composé la musique de Le Bon, la Brute et le Truand ?",
      "options": ["Ennio Morricone", "Hans Zimmer", "Nino Rota", "John Williams"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur russe est connu pour le film Andreï Roublev ?",
      "options": ["Andrei Tarkovski", "Sergueï Eisenstein", "Alexander Sokourov", "Dziga Vertov"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur danois est célèbre pour le mouvement Dogme 95 ?",
      "options": ["Lars von Trier", "Thomas Vinterberg", "Nicolas Winding Refn", "Susanne Bier"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel film muet de Fritz Lang est considéré comme une œuvre majeure de la science-fiction ?",
      "options": ["Metropolis", "Le Cabinet du docteur Caligari", "Nosferatu", "La Femme sur la Lune"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel réalisateur est connu pour le montage non linéaire dans Rashômon ?",
      "options": ["Akira Kurosawa", "Yasujirō Ozu", "Kenji Mizoguchi", "Takeshi Kitano"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel compositeur a collaboré avec Sergio Leone sur la Trilogie du dollar ?",
      "options": ["Ennio Morricone", "Bernard Herrmann", "John Barry", "Elmer Bernstein"],
      "level": "extreme",
      "category": "cinema"
    },
    {
      "question": "Quel joueur de tennis détient le record de victoires à Wimbledon en simple masculin ?",
      "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Dans quel sport utilise-t-on un ballon ovale ?",
      "options": ["Rugby", "Football", "Basketball", "Volleyball"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Qui est surnommé 'King James' en NBA ?",
      "options": ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O’Neal"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Combien de joueurs composent une équipe de football sur le terrain ?",
      "options": ["11", "7", "15", "9"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Dans quelle discipline Usain Bolt est-il champion ?",
      "options": ["Athlétisme", "Natation", "Cyclisme", "Boxe"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Quel joueur argentin est surnommé 'La Pulga' ?",
      "options": ["Lionel Messi", "Diego Maradona", "Sergio Agüero", "Ángel Di María"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Dans quel sport utilise-t-on une raquette et un volant ?",
      "options": ["Badminton", "Tennis", "Squash", "Ping-pong"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Quel pays a remporté le plus de médailles aux Jeux olympiques d’été ?",
      "options": ["États-Unis", "Chine", "Russie", "Allemagne"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Quelle compétition de football est connue sous le nom de 'Ligue des Champions' ?",
      "options": ["UEFA Champions League", "Copa Libertadores", "Coupe du Monde", "Europa League"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Quel athlète est célèbre pour le saut en longueur légendaire à Mexico en 1968 ?",
      "options": ["Bob Beamon", "Carl Lewis", "Jesse Owens", "Mike Powell"],
      "level":"facile",
      "category": "sport"
    },
    {
      "question": "Quel pays a remporté la Coupe du monde de football en 2018 ?",
      "options": ["France", "Allemagne", "Espagne", "Brésil"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Qui est l'actuel détenteur du record de points en NBA ?",
      "options": ["LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan", "Karl Malone"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "En quelle année se sont tenus les premiers Jeux olympiques modernes ?",
      "options": ["1896", "1900", "1888", "1924"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel cycliste a remporté le Tour de France 5 fois consécutives dans les années 1990 ?",
      "options": ["Miguel Indurain", "Lance Armstrong", "Chris Froome", "Eddy Merckx"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel est le nom de l’équipe nationale de rugby de Nouvelle-Zélande ?",
      "options": ["All Blacks", "Springboks", "Wallabies", "Pumas"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel joueur de tennis a terminé 2023 avec le plus de titres en Grand Chelem masculin ?",
      "options": ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Pete Sampras"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Dans quel sport trouve-t-on le terme 'ace' ?",
      "options": ["Tennis", "Volleyball", "Basketball", "Rugby"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel coureur est surnommé 'Le Cannibale' dans le cyclisme ?",
      "options": ["Eddy Merckx", "Bernard Hinault", "Miguel Indurain", "Fausto Coppi"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel boxeur a remporté le combat mythique surnommé le 'Rumble in the Jungle' ?",
      "options": ["Muhammad Ali", "George Foreman", "Joe Frazier", "Sugar Ray Leonard"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quel club de football italien joue dans le stade de San Siro ?",
      "options": ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
      "level":"moyen",
      "category": "sport"
    },
    {
      "question": "Quelle joueuse détient le record de victoires en Grand Chelem au tennis féminin ?",
      "options": ["Margaret Court", "Serena Williams", "Steffi Graf", "Martina Navratilova"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Qui est le seul pilote à avoir remporté 7 fois le championnat de F1 avec deux écuries différentes ?",
      "options": ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Alain Prost"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Quel sport est surnommé 'le sport roi' en Amérique latine ?",
      "options": ["Football", "Baseball", "Basket-ball", "Volleyball"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Combien de temps dure un match de rugby professionnel ?",
      "options": ["80 minutes", "60 minutes", "90 minutes", "70 minutes"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Dans quel pays se déroule la course cycliste 'Giro' ?",
      "options": ["Italie", "Espagne", "Belgique", "France"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Quel marathon est considéré comme le plus prestigieux au monde ?",
      "options": ["Marathon de Boston", "Marathon de New York", "Marathon de Londres", "Marathon de Berlin"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Quel joueur de basketball est surnommé 'The Big Fundamental' ?",
      "options": ["Tim Duncan", "Shaquille O’Neal", "Kevin Garnett", "Dirk Nowitzki"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Quel pays a accueilli les Jeux olympiques d’hiver en 1994 ?",
      "options": ["Norvège", "Canada", "Japon", "France"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Quel footballeur est le meilleur buteur de l’histoire de la Coupe du Monde ?",
      "options": ["Miroslav Klose", "Pelé", "Ronaldo", "Just Fontaine"],
      "level":"difficile",
      "category": "sport"
    },
    {
      "question": "Dans quel sport se distingue-t-on en pratiquant le 'clean and jerk' ?",
      "options": ["Haltérophilie", "Lutte", "Gymnastique", "Judo"],
      "level":"difficile",
      "category": "sport"
    },
    // extreme difficulty questions
    {
      "question": "Qui est le premier athlète à avoir franchi la barre des 10 secondes au 100 mètres ?",
      "options": ["Jim Hines", "Carl Lewis", "Jesse Owens", "Maurice Greene"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quel boxeur est connu sous le surnom de 'The Greatest' ?",
      "options": ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "George Foreman"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "En quelle année a eu lieu la première Coupe du monde de football ?",
      "options": ["1930", "1924", "1934", "1940"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Combien de médailles d’or Michael Phelps a-t-il remportées aux JO de Pékin ?",
      "options": ["8", "7", "6", "9"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Dans quelle ville se trouve le stade de Maracanã ?",
      "options": ["Rio de Janeiro", "Buenos Aires", "São Paulo", "Lima"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quel joueur de cricket détient le record de centuries en matchs internationaux ?",
      "options": ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Jacques Kallis"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quel pays a remporté le premier championnat du monde de rugby en 1987 ?",
      "options": ["Nouvelle-Zélande", "Australie", "Afrique du Sud", "France"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quelle gymnaste a réalisé le premier triple-double en compétition ?",
      "options": ["Simone Biles", "Nadia Comăneci", "Larisa Latynina", "Mary Lou Retton"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Dans quel sport pratique-t-on la Ryder Cup ?",
      "options": ["Golf", "Tennis", "Cricket", "Rugby"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quel athlète a remporté le décathlon aux JO en battant le record mondial en 1976 ?",
      "options": ["Bruce Jenner", "Daley Thompson", "Ashton Eaton", "Roman Šebrle"],
      "level":"extreme",
      "category": "sport"
    },
    {
      "question": "Quelle planète est la plus proche du Soleil ?",
      "options": ["Mercure", "Vénus", "Mars", "Jupiter"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Combien de pattes a une araignée ?",
      "options": ["8", "6", "10", "12"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quel est l’état de l’eau à 0°C ?",
      "options": ["Solide", "Liquide", "Gazeux", "Plasma"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la formule chimique de l’eau ?",
      "options": ["H₂O", "O₂", "CO₂", "H₂"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quel organe est responsable de pomper le sang dans le corps humain ?",
      "options": ["Cœur", "Poumons", "Foie", "Rein"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quel est le plus grand océan de la Terre ?",
      "options": ["Océan Pacifique", "Océan Atlantique", "Océan Indien", "Océan Arctique"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Combien de dents a un adulte en moyenne ?",
      "options": ["32", "28", "30", "34"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la principale source d’énergie pour les plantes ?",
      "options": ["Le soleil", "L’eau", "Le vent", "Le sol"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la planète la plus éloignée du Soleil ?",
      "options": ["Pluton", "Uranus", "Neptune", "Saturne"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Quel est le plus grand mammifère terrestre ?",
      "options": ["Éléphant", "Girafe", "Rhinocéros", "Hippopotame"],
      "level":"facile",
      "category": "sciences"
    },
    {
      "question": "Qui a développé la théorie de la relativité ?",
      "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quelle est la valeur approximative de la vitesse de la lumière en km/s ?",
      "options": ["300 000", "150 000", "250 000", "400 000"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "De quel élément chimique le diamant est-il composé ?",
      "options": ["Carbone", "Silicium", "Azote", "Soufre"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quel est l’os le plus long du corps humain ?",
      "options": ["Fémur", "Humérus", "Tibia", "Colonne vertébrale"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quel est le plus gros organe du corps humain ?",
      "options": ["Peau", "Cœur", "Poumons", "Foie"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quelle est la principale fonction des globules rouges ?",
      "options": ["Transporter l'oxygène", "Protéger contre les infections", "Coaguler le sang", "Détruire les toxines"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quelle est la formule chimique du méthane ?",
      "options": ["CH₄", "CO₂", "C₆H₁₂O₆", "H₂O"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quelle est la composition principale du noyau terrestre ?",
      "options": ["Fer et nickel", "Aluminium et silicium", "Zinc et plomb", "Oxygène et silicium"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Combien de paires de chromosomes l'être humain possède-t-il ?",
      "options": ["23", "22", "24", "20"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Quel est l'organe principal de la respiration ?",
      "options": ["Poumons", "Cœur", "Estomac", "Foie"],
      "level":"moyen",
      "category": "sciences"
    },
    {
      "question": "Qui est considéré comme le père de la microbiologie ?",
      "options": ["Antoine van Leeuwenhoek", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quel gaz est le plus abondant dans l’atmosphère terrestre ?",
      "options": ["Azote", "Oxygène", "Dioxyde de carbone", "Argon"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quel scientifique a découvert la pénicilline ?",
      "options": ["Alexander Fleming", "Marie Curie", "James Watson", "Gregor Mendel"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la force qui nous maintient sur Terre ?",
      "options": ["Gravité", "Frottement", "Magnétisme", "Force centrifuge"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quel métal est liquide à température ambiante ?",
      "options": ["Mercure", "Plomb", "Fer", "Zinc"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la température de fusion du plomb en °C ?",
      "options": ["327°C", "180°C", "600°C", "1000°C"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Qui a découvert la circulation sanguine ?",
      "options": ["William Harvey", "Andreas Vesalius", "Hippocrate", "René Descartes"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la principale fonction des mitochondries dans les cellules ?",
      "options": ["Produire de l'énergie", "Synthétiser des protéines", "Diriger la division cellulaire", "Contrôler la croissance cellulaire"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la durée d’une révolution de la Terre autour du Soleil ?",
      "options": ["365,25 jours", "360 jours", "400 jours", "380 jours"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Quelle est la planète la plus grande du système solaire ?",
      "options": ["Jupiter", "Saturne", "Uranus", "Neptune"],
      "level":"difficile",
      "category": "sciences"
    },
    {
      "question": "Combien de chromosomes possède un être humain ?",
      "options": ["46", "48", "44", "40"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quelle unité mesure l’intensité du courant électrique ?",
      "options": ["Ampère", "Volt", "Watt", "Ohm"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Qui a formulé la loi de la gravitation universelle ?",
      "options": ["Isaac Newton", "Albert Einstein", "Johannes Kepler", "Galileo Galilei"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quel est le point d’ébullition de l’azote liquide en °C ?",
      "options": ["-196°C", "-273°C", "-78°C", "-100°C"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quelle est la température à laquelle l'eau se solidifie sous pression atmosphérique ?",
      "options": ["0°C", "-1°C", "1°C", "-2°C"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quel est le nom de la théorie qui décrit l'origine de l'univers ?",
      "options": ["Big Bang", "Relativité générale", "Évolution", "Mécanique quantique"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quelle est la densité de l'eau à 4°C ?",
      "options": ["1 g/cm³", "0,5 g/cm³", "0,8 g/cm³", "2 g/cm³"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quel est le nom du plus grand volcan actif de la Terre ?",
      "options": ["Mauna Loa", "Vésuve", "Etna", "Kilauea"],
      "level":"extreme",
      "category": "sciences"
    },
    {
      "question": "Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Marseille", "Toulouse"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus grand océan du monde ?",
      "options": ["Océan Pacifique", "Océan Atlantique", "Océan Indien", "Océan Arctique"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays peut-on visiter la Tour de Pise ?",
      "options": ["Italie", "France", "Espagne", "Grèce"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quel fleuve traverse l’Égypte ?",
      "options": ["Nil", "Amazone", "Danube", "Yangtsé"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quel pays a pour capitale Tokyo ?",
      "options": ["Japon", "Chine", "Corée du Sud", "Thaïlande"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quelle est la capitale de l'Allemagne ?",
      "options": ["Berlin", "Munich", "Francfort", "Hambourg"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays se trouve la Grande Barrière de Corail ?",
      "options": ["Australie", "Indonésie", "Philippines", "Brésil"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus grand pays du monde en superficie ?",
      "options": ["Russie", "Canada", "Chine", "États-Unis"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays peut-on visiter le Colisée ?",
      "options": ["Italie", "Espagne", "Grèce", "Turquie"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Quel océan borde la côte est des États-Unis ?",
      "options": ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Mer Méditerranée"],
      "level":"facile",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays se trouve le Machu Picchu ?",
      "options": ["Pérou", "Mexique", "Brésil", "Chili"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quelle est la capitale du Canada ?",
      "options": ["Ottawa", "Toronto", "Montréal", "Vancouver"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quel est le désert le plus grand au monde ?",
      "options": ["Sahara", "Gobi", "Kalahari", "Atacama"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quelle est la montagne la plus haute d’Afrique ?",
      "options": ["Kilimandjaro", "Mont Kenya", "Rwenzori", "Mont Elbrouz"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quel pays est surnommé 'le pays du Soleil-Levant' ?",
      "options": ["Japon", "Thaïlande", "Indonésie", "Chine"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quel pays possède la plus grande superficie de forêts tropicales ?",
      "options": ["Brésil", "Indonésie", "Canada", "Russie"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quelle est la capitale de l'Australie ?",
      "options": ["Canberra", "Sydney", "Melbourne", "Perth"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus grand désert froid du monde ?",
      "options": ["Antarctique", "Arctique", "Sahara", "Gobi"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Sur quel continent se trouve le désert du Kalahari ?",
      "options": ["Afrique", "Asie", "Amérique du Sud", "Océanie"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quelle île est située au sud-est de l'Inde ?",
      "options": ["Sri Lanka", "Madagascar", "Bornéo", "Sumatra"],
      "level":"moyen",
      "category": "geographie"
    },
    {
      "question": "Quelle mer borde l’Italie au sud-est ?",
      "options": ["Mer Adriatique", "Mer Egée", "Mer Tyrrhénienne", "Mer Ionienne"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Combien de continents y a-t-il dans le monde ?",
      "options": ["7", "6", "5", "8"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quel pays d’Europe a la plus grande superficie ?",
      "options": ["Russie", "France", "Espagne", "Ukraine"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus long fleuve d’Amérique du Sud ?",
      "options": ["Amazone", "Orénoque", "Paraná", "Rio Negro"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quelle île est la plus grande du monde ?",
      "options": ["Groënland", "Madagascar", "Bornéo", "Nouvelle-Guinée"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quelle mer sépare l'Italie et la Croatie ?",
      "options": ["Mer Adriatique", "Mer Méditerranée", "Mer Noire", "Mer Égée"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quel pays a pour capitale Oslo ?",
      "options": ["Norvège", "Suède", "Danemark", "Finlande"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quelle est la plus grande île de la Méditerranée ?",
      "options": ["Sicile", "Crète", "Chypre", "Corse"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus long fleuve d'Afrique ?",
      "options": ["Nil", "Congo", "Niger", "Zambèze"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Quel pays est traversé par le fleuve Danube ?",
      "options": ["Autriche", "Suisse", "Allemagne", "Pologne"],
      "level":"difficile",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays se trouve le lac Titicaca ?",
      "options": ["Bolivie", "Pérou", "Chili", "Argentine"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quel est le pays le moins peuplé au monde ?",
      "options": ["Vatican", "Monaco", "Nauru", "Saint-Marin"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quelle est la capitale de l’Ouzbékistan ?",
      "options": ["Tachkent", "Astana", "Bakou", "Achgabat"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quelle chaîne de montagnes traverse le Népal ?",
      "options": ["Himalaya", "Andes", "Alpes", "Monts Oural"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quel pays possède le plus de lacs naturels au monde ?",
      "options": ["Canada", "Suède", "États-Unis", "Russie"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quel est le plus grand désert chaud du monde ?",
      "options": ["Sahara", "Kalahari", "Sonora", "Atacama"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quelle est la capitale du Bhoutan ?",
      "options": ["Thimphou", "Katmandou", "Paro", "Dacca"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Dans quel pays se trouve le Mont Everest ?",
      "options": ["Népal", "Chine", "Inde", "Pakistan"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quel pays est le plus petit du monde ?",
      "options": ["Vatican", "Monaco", "Nauru", "Saint-Marin"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Quel pays d'Asie a pour capitale Naypyidaw ?",
      "options": ["Myanmar", "Laos", "Cambodge", "Vietnam"],
      "level":"extreme",
      "category": "geographie"
    },
    {
      "question": "Qui était Napoléon Bonaparte ?",
      "options": ["Un empereur français", "Un roi anglais", "Un tsar russe", "Un général allemand"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "En quelle année Christophe Colomb a-t-il découvert l’Amérique ?",
      "options": ["1492", "1488", "1500", "1498"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Quelle révolution a eu lieu en France en 1789 ?",
      "options": ["Révolution française", "Révolution industrielle", "Révolution américaine", "Révolution russe"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Qui était Cléopâtre ?",
      "options": ["Une reine d’Égypte", "Une impératrice romaine", "Une déesse grecque", "Une reine de Perse"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Quelle guerre a eu lieu de 1939 à 1945 ?",
      "options": ["Seconde Guerre mondiale", "Première Guerre mondiale", "Guerre froide", "Guerre de Corée"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Qui a été le premier président des États-Unis ?",
      "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Franklin Roosevelt"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Quelle grande pyramide se trouve en Égypte ?",
      "options": ["Pyramide de Gizeh", "Pyramide de Sakkara", "Pyramide de Mykérinos", "Pyramide de Chéops"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "En quelle année a eu lieu la Première Guerre mondiale ?",
      "options": ["1914-1918", "1939-1945", "1900-1914", "1929-1933"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Qui a écrit 'Les Misérables' ?",
      "options": ["Victor Hugo", "Emile Zola", "Gustave Flaubert", "Balzac"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Qui était Jules César ?",
      "options": ["Un général romain", "Un empereur chinois", "Un roi de France", "Un tsar russe"],
      "level": "facile",
      "category": "histoire"
    },
    {
      "question": "Qui a peint la chapelle Sixtine ?",
      "options": ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Botticelli"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Quel empire a été fondé par Gengis Khan ?",
      "options": ["Empire mongol", "Empire ottoman", "Empire perse", "Empire aztèque"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "En quelle année est tombé le mur de Berlin ?",
      "options": ["1989", "1985", "1991", "1993"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Quelle bataille célèbre a eu lieu en 1066 ?",
      "options": ["Bataille de Hastings", "Bataille de Waterloo", "Bataille de Marathon", "Bataille d’Azincourt"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Qui était le dernier tsar de Russie ?",
      "options": ["Nicolas II", "Alexandre III", "Ivan IV", "Pierre le Grand"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Quel roi français a abdiqué en 1814 ?",
      "options": ["Napoléon Ier", "Louis XVI", "Charles X", "Louis XVIII"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Qui a fondé l'Empire byzantin ?",
      "options": ["L'empereur Constantin", "L'empereur Théodose", "L'empereur Auguste", "L'empereur Charlemagne"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Quelle bataille a marqué la fin de l'Empire napoléonien ?",
      "options": ["Bataille de Waterloo", "Bataille de Leipzig", "Bataille de Trafalgar", "Bataille de Jena"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "En quelle année a eu lieu la Révolution américaine ?",
      "options": ["1776", "1789", "1800", "1750"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Qui était le roi d'Angleterre lors de la Guerre des Roses ?",
      "options": ["Henri VI", "Richard III", "Henri VIII", "Edward IV"],
      "level": "moyen",
      "category": "histoire"
    },
    {
      "question": "Qui a signé l’Édit de Nantes ?",
      "options": ["Henri IV", "Louis XIV", "François Ier", "Charles IX"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Quel pays a été dirigé par les Habsbourg pendant des siècles ?",
      "options": ["Autriche", "Espagne", "Allemagne", "Italie"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Quel est le nom du bateau du capitaine James Cook ?",
      "options": ["Endeavour", "Beagle", "Santa Maria", "Golden Hind"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Qui a écrit Le Prince ?",
      "options": ["Machiavel", "Montesquieu", "Voltaire", "Rousseau"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Qui était Spartacus ?",
      "options": ["Un esclave gladiateur", "Un empereur romain", "Un philosophe grec", "Un général perse"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Quel est le nom du roi d'Angleterre pendant la guerre de Cent Ans ?",
      "options": ["Edward III", "Richard II", "Henry IV", "Henry V"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Quel empereur romain a légalisé le christianisme ?",
      "options": ["Constantin Ier", "Auguste", "Dioclétien", "Trajan"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "En quelle année la Révolution française a-t-elle commencé ?",
      "options": ["1789", "1792", "1795", "1800"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Quel royaume a été unifié par Guillaume le Conquérant ?",
      "options": ["Angleterre", "France", "Espagne", "Italie"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "Qui a été le premier empereur de Rome ?",
      "options": ["Auguste", "César", "Trajan", "Néron"],
      "level": "difficile",
      "category": "histoire"
    },
    {
      "question": "En quelle année l'Empire romain d'Occident est-il tombé ?",
      "options": ["476", "410", "395", "534"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Qui a remporté la bataille de Zama ?",
      "options": ["Scipion l'Africain", "Hannibal", "César", "Alexandre le Grand"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Quelle dynastie a régné sur la Chine pendant la construction de la Grande Muraille ?",
      "options": ["Dynastie Qin", "Dynastie Ming", "Dynastie Tang", "Dynastie Yuan"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Qui a lancé la Réforme protestante en 1517 ?",
      "options": ["Martin Luther", "Jean Calvin", "Érasme", "Thomas More"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Quelle bataille a mis fin à l’Empire napoléonien ?",
      "options": ["Bataille de Waterloo", "Bataille d’Austerlitz", "Bataille de Leipzig", "Bataille de Borodino"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "En quelle année a été signé le traité de Versailles, mettant fin à la Première Guerre mondiale ?",
      "options": ["1919", "1920", "1918", "1925"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Quelle bataille a permis à Alexandre le Grand de conquérir l'empire perse ?",
      "options": ["Bataille d'Issos", "Bataille de Gaugamèles", "Bataille de Marathon", "Bataille de Chéronée"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Qui a proclamé l'indépendance des États-Unis en 1776 ?",
      "options": ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "En quelle année a eu lieu le sacre de Charlemagne ?",
      "options": ["800", "768", "843", "814"],
      "level": "extreme",
      "category": "histoire"
    },
    {
      "question": "Quelle guerre a opposé les États-Unis et le Vietnam entre 1955 et 1975 ?",
      "options": ["Guerre du Vietnam", "Guerre de Corée", "Guerre du Golfe", "Guerre du Pacifique"],
      "level": "extreme",
      "category": "histoire"
    },
    ///////////////////////////////////////////
    {
      "question": "Qui a écrit Les Misérables ?",
      "options": ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Jules Verne"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui est l’auteur de Roméo et Juliette ?",
      "options": ["William Shakespeare", "Charles Dickens", "John Milton", "Oscar Wilde"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Quel est le nom du détective créé par Arthur Conan Doyle ?",
      "options": ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Arsène Lupin"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Quel livre commence par 'Call me Ishmael' ?",
      "options": ["Moby Dick", "L’Odyssée", "Le vieil homme et la mer", "Robinson Crusoé"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Le Petit Prince ?",
      "options": ["Antoine de Saint-Exupéry", "Albert Camus", "André Gide", "Jean-Paul Sartre"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Les Fables ?",
      "options": ["Jean de La Fontaine", "Victor Hugo", "Gustave Flaubert", "Paul Verlaine"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Quel est le nom du personnage principal de L'Attrape-cœurs ?",
      "options": ["Holden Caulfield", "Harry Potter", "Gatsby", "Sherlock Holmes"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Le Seigneur des Anneaux ?",
      "options": ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui est l'auteur de Les Trois Mousquetaires ?",
      "options": ["Alexandre Dumas", "Victor Hugo", "Emile Zola", "Honoré de Balzac"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Quel roman raconte l'histoire de Frankenstein ?",
      "options": ["Mary Shelley", "Bram Stoker", "Edgar Allan Poe", "H.G. Wells"],
      "level": "facile",
      "category": "litterature"
    },
    {
      "question": "Qui est l’auteur de 1984 ?",
      "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain russe a écrit Crime et Châtiment ?",
      "options": ["Fiodor Dostoïevski", "Léon Tolstoï", "Anton Tchekhov", "Ivan Tourgueniev"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Dans quel roman trouve-t-on le personnage de Gatsby le Magnifique ?",
      "options": ["The Great Gatsby", "Moby Dick", "Les Raisins de la colère", "Les Hauts de Hurlevent"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel livre est considéré comme le premier roman de l’histoire ?",
      "options": ["Le Dit du Genji", "Don Quichotte", "Les Mille et Une Nuits", "Beowulf"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel auteur est surnommé le 'Barde d’Avon' ?",
      "options": ["William Shakespeare", "Geoffrey Chaucer", "Christopher Marlowe", "John Milton"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel roman de Jules Verne raconte l’histoire d’un voyage autour du monde ?",
      "options": ["Le Tour du monde en 80 jours", "Vingt Mille Lieues sous les mers", "L'Île mystérieuse", "Voyage au centre de la Terre"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain est l'auteur de L’Odyssée ?",
      "options": ["Homère", "Virgile", "Euripide", "Sophocle"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel est le nom du narrateur dans Les Misérables ?",
      "options": ["Jean Valjean", "Fantine", "Marius", "Cosette"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Quel est le nom de l’héroïne dans Jane Eyre ?",
      "options": ["Jane Eyre", "Elizabeth Bennet", "Emma Woodhouse", "Anne Shirley"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Dans quel roman trouve-t-on le personnage de 'Hannibal Lecter' ?",
      "options": ["Le Silence des agneaux", "Shining", "Psychose", "Le Dahlia noir"],
      "level": "moyen",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Le Meilleur des Mondes ?",
      "options": ["Aldous Huxley", "George Orwell", "H.G. Wells", "Jules Verne"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel poète français a écrit Les Fleurs du mal ?",
      "options": ["Charles Baudelaire", "Arthur Rimbaud", "Paul Verlaine", "Stéphane Mallarmé"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel personnage de roman vit à Baker Street ?",
      "options": ["Sherlock Holmes", "Hercule Poirot", "Dr. Watson", "Miss Marple"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Qui est l’auteur de L’Étranger ?",
      "options": ["Albert Camus", "Jean-Paul Sartre", "André Gide", "Antoine de Saint-Exupéry"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel roman de Tolstoï commence par : 'Toutes les familles heureuses se ressemblent...' ?",
      "options": ["Anna Karénine", "Guerre et Paix", "Résurrection", "Enfance"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel poète français a écrit Le Bateau ivre ?",
      "options": ["Arthur Rimbaud", "Paul Verlaine", "Stéphane Mallarmé", "Charles Baudelaire"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit L'Insoutenable Légèreté de l'être ?",
      "options": ["Milan Kundera", "Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain américain a écrit Les Raisins de la colère ?",
      "options": ["John Steinbeck", "Ernest Hemingway", "Mark Twain", "William Faulkner"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Dans quel roman trouve-t-on le personnage de Dr. Jekyll et Mr. Hyde ?",
      "options": ["Robert Louis Stevenson", "Charles Dickens", "Bram Stoker", "Edgar Allan Poe"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Qui est l’auteur du roman Moby Dick ?",
      "options": ["Herman Melville", "Walt Whitman", "Nathaniel Hawthorne", "Edgar Allan Poe"],
      "level": "difficile",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain français a refusé le prix Nobel de littérature en 1964 ?",
      "options": ["Jean-Paul Sartre", "Albert Camus", "André Malraux", "Paul Valéry"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quel poète grec ancien est l’auteur de L’Iliade et L’Odyssée ?",
      "options": ["Homère", "Sophocle", "Euripide", "Hésiode"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit À la recherche du temps perdu ?",
      "options": ["Marcel Proust", "Émile Zola", "Gustave Flaubert", "Honoré de Balzac"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain a imaginé le personnage de Don Quichotte ?",
      "options": ["Miguel de Cervantes", "Lope de Vega", "Gabriel García Márquez", "Pablo Neruda"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quelle œuvre majeure a été écrite par Dante Alighieri ?",
      "options": ["La Divine Comédie", "Le Décaméron", "L’Énéide", "Orlando Furioso"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Les Confessions ?",
      "options": ["Jean-Jacques Rousseau", "René Descartes", "Montesquieu", "Voltaire"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain a rédigé La Condition humaine ?",
      "options": ["André Malraux", "Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quel est l’auteur de Les Frères Karamazov ?",
      "options": ["Fiodor Dostoïevski", "Léon Tolstoï", "Anton Tchekhov", "Ivan Tourgueniev"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Quel écrivain a écrit La Peste ?",
      "options": ["Albert Camus", "Jean-Paul Sartre", "François Mauriac", "André Gide"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Qui a écrit Le Livre de la jungle ?",
      "options": ["Rudyard Kipling", "Charles Dickens", "J.R.R. Tolkien", "Mark Twain"],
      "level": "extreme",
      "category": "litterature"
    },
    {
      "question": "Qui est le dieu grec des mers ?",
      "options": ["Poséidon", "Zeus", "Hadès", "Hermès"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Qui est la déesse grecque de la sagesse et de la guerre ?",
      "options": ["Athéna", "Aphrodite", "Artémis", "Héra"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Dans la mythologie nordique, qui est le dieu du tonnerre ?",
      "options": ["Thor", "Loki", "Odin", "Balder"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Quel est le royaume des morts dans la mythologie grecque ?",
      "options": ["Les Enfers", "L’Olympe", "Le Valhalla", "Le Tartare"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu romain de la guerre ?",
      "options": ["Mars", "Jupiter", "Neptune", "Mercure"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu romain des enfers ?",
      "options": ["Pluton", "Mars", "Neptune", "Apollon"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Qui est la déesse grecque de l’amour et de la beauté ?",
      "options": ["Aphrodite", "Héra", "Athéna", "Artémis"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Dans la mythologie grecque, quel dieu porte un casque qui rend invisible ?",
      "options": ["Hadès", "Poséidon", "Zeus", "Hermès"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom de l'épée d'Excalibur ?",
      "options": ["Excalibur", "Durandal", "Hrunting", "Clarent"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le père d’Hercule dans la mythologie grecque ?",
      "options": ["Zeus", "Poséidon", "Apollon", "Hadès"],
      "level": "facile",
      "category": "mythologie"
    },
    {
      "question": "Quel héros grec tua le Minotaure ?",
      "options": ["Thésée", "Hercule", "Achille", "Ulysse"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom du marteau de Thor ?",
      "options": ["Mjöllnir", "Excalibur", "Gram", "Durandal"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Qui est la mère d’Achille ?",
      "options": ["Thétis", "Héra", "Aphrodite", "Gaïa"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Quel dieu égyptien a une tête de chacal ?",
      "options": ["Anubis", "Râ", "Horus", "Osiris"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Quel titan portait le ciel sur ses épaules ?",
      "options": ["Atlas", "Prométhée", "Cronos", "Océan"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Qui est la déesse de la chasse dans la mythologie grecque ?",
      "options": ["Artémis", "Héra", "Athéna", "Perséphone"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom du cheval de Troie ?",
      "options": ["Pégase", "Arion", "Bucephale", "Le cheval de Troie"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Dans la mythologie égyptienne, qui est le dieu des cieux et de la guerre ?",
      "options": ["Horus", "Osiris", "Anubis", "Seth"],
      "level": "moyen",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom de la rivière qui sépare le monde des vivants et celui des morts dans la mythologie grecque ?",
      "options": ["Styx", "Achéron", "Lethe", "Cocytus"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Qui est la femme de Zeus ?",
      "options": ["Héra", "Déméter", "Perséphone", "Aphrodite"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu nordique de la malice et du chaos ?",
      "options": ["Loki", "Fenrir", "Surt", "Njörd"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Quel est l’équivalent grec de Vénus ?",
      "options": ["Aphrodite", "Héra", "Artémis", "Athéna"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Quelle déesse est née de la tête de Zeus ?",
      "options": ["Athéna", "Artémis", "Perséphone", "Hestia"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Quel titan est connu pour avoir volé le feu aux dieux pour le donner aux humains ?",
      "options": ["Prométhée", "Atlas", "Cronos", "Oceanus"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu grec de la médecine ?",
      "options": ["Asclépios", "Hermès", "Apollon", "Poséidon"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Dans la mythologie nordique, quel est le nom du serpent géant qui entoure le monde ?",
      "options": ["Jörmungandr", "Níðhöggr", "Fenrir", "Surt"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom de la déesse romaine de la chasse, équivalente à Artémis ?",
      "options": ["Diana", "Cérès", "Vénus", "Junon"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu grec de la musique et de la poésie ?",
      "options": ["Apollon", "Hermès", "Zeus", "Dionysos"],
      "level": "difficile",
      "category": "mythologie"
    },
    {
      "question": "Quel monstre avait des serpents pour cheveux et pouvait pétrifier d’un regard ?",
      "options": ["Méduse", "Chimère", "Sphinx", "Scylla"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Qui a volé le feu aux dieux pour le donner aux hommes ?",
      "options": ["Prométhée", "Héraclès", "Hermès", "Atlas"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quel dieu égyptien est associé au soleil ?",
      "options": ["Râ", "Seth", "Osiris", "Anubis"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quel héros grec a accompli les Douze Travaux ?",
      "options": ["Héraclès", "Achille", "Jason", "Persée"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quelle est l’origine du monde selon la mythologie grecque ?",
      "options": ["Le Chaos", "L’Olympe", "Le Styx", "Le Tartare"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quel est le nom de la déesse de la vengeance dans la mythologie grecque ?",
      "options": ["Némésis", "Iris", "Hécate", "Perséphone"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Qui est le dieu des forges dans la mythologie grecque ?",
      "options": ["Hephaïstos", "Poséidon", "Zeus", "Hermès"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quel héros grec a tué Méduse ?",
      "options": ["Persée", "Héraclès", "Thésée", "Ulysse"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Qui est le roi des dieux dans la mythologie nordique ?",
      "options": ["Odin", "Thor", "Loki", "Balder"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quelle déesse de la mythologie grecque a été transformée en araignée ?",
      "options": ["Arachné", "Méduse", "Calypso", "Hécate"],
      "level": "extreme",
      "category": "mythologie"
    },
    {
      "question": "Quel pays a un drapeau rouge avec une feuille d’érable blanche ?",
      "options": ["Canada", "Suisse", "Danemark", "Norvège"],
      "level": "facile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec une étoile et un croissant ?",
      "options": ["Pakistan", "Seychelles", "Maroc", "Serbie"],
      "level": "facile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau tricolore bleu, blanc et rouge vertical ?",
      "options": ["France", "Russie", "Italie", "Pays-Bas"],
      "level": "facile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau rouge avec une étoile jaune au centre ?",
      "options": ["Viêt Nam", "Chine", "Ghana", "Mozambique"],
      "level": "facile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec une croix blanche sur fond rouge ?",
      "options": ["Danemark", "Espagne", "Angleterre", "Norvège"],
      "level": "facile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau bleu et jaune horizontal ?",
      "options": ["Ukraine", "Suède", "Kazakhstan", "Finlande"],
      "level": "moyen",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec un cercle rouge au centre sur fond blanc ?",
      "options": ["Japon", "Bangladesh", "Indonésie", "Singapour"],
      "level": "moyen",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau tricolore vertical vert, blanc et orange ?",
      "options": ["Irlande", "Côte d’Ivoire", "Inde", "Italie"],
      "level": "moyen",
      "category": "drapeaux"
    },
    {
      "question": "Quel drapeau est composé de cinq étoiles jaunes sur un fond rouge ?",
      "options": ["Chine", "Viêt Nam", "Corée du Nord", "Singapour"],
      "level": "moyen",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec un dragon rouge sur fond blanc et vert ?",
      "options": ["Pays de Galles", "Bhoutan", "Sri Lanka", "Tonga"],
      "level": "moyen",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau rouge, blanc et noir avec deux étoiles vertes ?",
      "options": ["Syrie", "Irak", "Égypte", "Yémen"],
      "level": "difficile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec un lion tenant une épée ?",
      "options": ["Sri Lanka", "Kenya", "Éthiopie", "Togo"],
      "level": "difficile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec une croix scandinave jaune sur fond bleu ?",
      "options": ["Suède", "Norvège", "Finlande", "Danemark"],
      "level": "difficile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau tricolore rouge, bleu et jaune vertical ?",
      "options": ["Roumanie", "Colombie", "Venezuela", "Kosovo"],
      "level": "difficile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau représentant un coucher de soleil ?",
      "options": ["Kiribati", "Maldives", "Îles Fidji", "Seychelles"],
      "level": "difficile",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau bleu clair avec un soleil et un oiseau ?",
      "options": ["Kazakhstan", "Ouzbékistan", "Kirghizistan", "Mongolie"],
      "level": "extreme",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau rouge avec une étoile noire au centre ?",
      "options": ["Ghana", "Mozambique", "Angola", "Guinée-Bissau"],
      "level": "extreme",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau avec une machette, un livre et une étoile ?",
      "options": ["Mozambique", "Angola", "Ghana", "Zambie"],
      "level": "extreme",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau blanc avec une croix noire et une croix rouge superposées ?",
      "options": ["Îles-Féroé", "Norvège", "Eswatini", "Géorgie"],
      "level": "extreme",
      "category": "drapeaux"
    },
    {
      "question": "Quel pays a un drapeau vert avec un cercle rouge décalé ?",
      "options": ["Bangladesh", "Maldives", "Laos", "Bhoutan"],
      "level": "extreme",
      "category": "drapeaux"
    }
  ]