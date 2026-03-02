module.exports = {
  "suno-ai-chord-progressions": {
    title: "Progressions d'accords Suno AI : comment vraiment contr\u00f4ler les accords jou\u00e9s par Suno",
    seoTitle: "Progressions d'accords Suno AI : comment sp\u00e9cifier les accords dans Suno (Guide 2026) | Solfej",
    description: "Apprenez \u00e0 sp\u00e9cifier des progressions d'accords dans les prompts Suno AI. Inclut des exemples fonctionnels avec des progressions courantes, des astuces pour les tonalit\u00e9s mineures et majeures, et pourquoi les bases de th\u00e9orie musicale rendent vos morceaux Suno 10 fois meilleurs.",
    timeToRead: "10 min",
    body: `<p>L'une des frustrations les plus courantes avec Suno AI est qu'on ne peut pas contr\u00f4ler pr\u00e9cis\u00e9ment quels accords il joue. Vous tapez \u00ab sad ballad in A minor \u00bb et obtenez quelque chose qui sonne vaguement mineur \u2014 mais la progression d'accords r\u00e9elle est un coup de pile ou face.</p>
<p>La bonne nouvelle : il existe des moyens de guider Suno vers des progressions d'accords sp\u00e9cifiques. La meilleure nouvelle : comprendre un peu de th\u00e9orie musicale vous donne un contr\u00f4le consid\u00e9rablement plus pr\u00e9cis sur le r\u00e9sultat. Voici tout ce qui fonctionne en 2026.</p>

<h2>Le probl\u00e8me : Suno chante vos accords au lieu de les jouer</h2>
<p>Si vous tapez <code>Am - F - G - Em</code> directement dans un prompt Suno, il y a de fortes chances que l'IA chante litt\u00e9ralement \u00ab A minor, F, G, E minor \u00bb comme paroles au lieu de jouer ces accords instrumentalement.</p>
<p>Cela se produit parce que Suno traite tout ce qui se trouve dans le champ des paroles comme du texte \u00e0 chanter. Il ne comprend pas nativement les symboles d'accords comme un musicien lisant une grille d'accords. Vous devez contourner ce probl\u00e8me.</p>

<h2>M\u00e9thode 1 : Balises entre crochets dans le champ des paroles</h2>
<p>La m\u00e9thode la plus fiable consiste \u00e0 placer les noms d'accords entre crochets dans vos paroles, comme ceci :</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>Cela indique \u00e0 Suno \u00ab ce sont des balises structurelles, pas des paroles \u00e0 chanter \u00bb. Il ne les suit pas toujours parfaitement, mais cela augmente consid\u00e9rablement les chances d'obtenir le bon mouvement harmonique.</p>
<p>Vous ne savez pas ce que Am, F, G et Em repr\u00e9sentent ? Voici ce qui se passe musicalement :</p>
<ul>
<li><a href="/chords/a-minor">Am (La mineur)</a> \u2014 l'accord tonique, \u00e9tablit le \u00ab point de d\u00e9part \u00bb en La mineur</li>
<li><a href="/chords/f-major">F majeur</a> \u2014 le sixi\u00e8me degr\u00e9, apporte une touche douce-am\u00e8re</li>
<li><a href="/chords/g-major">G majeur</a> \u2014 le septi\u00e8me degr\u00e9, cr\u00e9e un \u00e9lan vers l'avant</li>
<li><a href="/chords/e-minor">Em (Mi mineur)</a> \u2014 le cinqui\u00e8me degr\u00e9 du mode mineur naturel, cr\u00e9e une r\u00e9solution plus douce qu'un <a href="/chords/e-major">accord V majeur</a></li>
</ul>
<p>C'est l'une des progressions les plus courantes en pop et en rock \u2014 vous l'avez entendue dans des centaines de chansons.</p>

<h2>M\u00e9thode 2 : Utilisez la bo\u00eete Style pour la direction harmonique</h2>
<p>Dans le Mode Personnalis\u00e9 de Suno, la bo\u00eete Style of Music accepte des descripteurs de genre et d'ambiance. Vous pouvez combiner cela avec des informations d'accords dans les paroles :</p>
<p><b>Bo\u00eete Style :</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>Bo\u00eete Paroles :</b> Vos paroles avec les balises d'accords entre crochets</p>
<p>Sp\u00e9cifier la tonalit\u00e9 dans la bo\u00eete Style aide Suno \u00e0 rester dans le bon voisinage harmonique. Si vous indiquez \u00ab A minor key \u00bb, Suno est plus susceptible d'utiliser des accords de la <a href="/scales/a-minor">gamme de La mineur naturel</a> (Am, Bdim, C, Dm, Em, F, G).</p>

<h2>Les 5 progressions d'accords qui fonctionnent le mieux dans Suno</h2>
<p>Suno est entra\u00een\u00e9 sur des millions de chansons, il gravite donc naturellement vers les progressions courantes dans la musique populaire. Ces cinq progressions fonctionnent de mani\u00e8re fiable :</p>

<h3>1. I - V - vi - IV (La \u00ab progression Pop \u00bb)</h3>
<p>En Do majeur : <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>C'est la progression d'accords la plus courante dans la pop moderne. On la retrouve dans \u00ab Let It Be \u00bb, \u00ab No Woman No Cry \u00bb, \u00ab Someone Like You \u00bb et des centaines d'autres. Si vous donnez \u00e0 Suno une ambiance pop entra\u00eenante, il aboutira souvent naturellement \u00e0 cette progression.</p>
<p><b>Astuce prompt Suno :</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V (La \u00ab progression Pop triste \u00bb)</h3>
<p>En Do majeur : <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Les m\u00eames accords que ci-dessus, mais commencer sur l'accord mineur change compl\u00e8tement l'atmosph\u00e8re. On retrouve cette progression partout dans la pop \u00e9motionnelle et les ballades. Commencer sur <a href="/chords/a-minor">La mineur</a> au lieu de <a href="/chords/c-major">Do majeur</a> lui conf\u00e8re une qualit\u00e9 m\u00e9lancolique.</p>
<p><b>Astuce prompt Suno :</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I (La \u00ab progression Blues/Rock \u00bb)</h3>
<p>En La majeur : <a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>L'\u00e9pine dorsale du rock, de la country et du blues. Si vous voulez que Suno g\u00e9n\u00e8re quelque chose qui sonne comme du rock classique, utiliser ces trois accords dans la bo\u00eete Style fonctionne bien. Pour un son plus blues, utilisez <a href="/chords/a-dominant-7th">A7</a>, <a href="/chords/d-dominant-7th">D7</a> et <a href="/chords/e-dominant-7th">E7</a> \u2014 les accords de septi\u00e8me de dominante sont ce qui donne au blues son son caract\u00e9ristique.</p>
<p><b>Astuce prompt Suno :</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I (La \u00ab progression Jazz \u00bb)</h3>
<p>En Do majeur : <a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>Le ii-V-I est la progression la plus importante en jazz. Obtenir que Suno la r\u00e9ussisse est plus difficile car elle implique des accords enrichis (septi\u00e8mes). Vous pouvez essayer le prompt <code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code> mais les r\u00e9sultats varient. Suno g\u00e8re mieux le jazz simple que le bebop complexe.</p>
<p>Si vous voulez comprendre pourquoi cette progression est si importante, consultez <a href="/chords/d-minor-7th">Dm7</a> (l'accord ii), <a href="/chords/g-dominant-7th">G7</a> (l'accord V) et <a href="/chords/c-major-7th">Cmaj7</a> (l'accord I). La fa\u00e7on dont les notes se d\u00e9placent entre ces trois accords \u2014 appel\u00e9e conduite des voix \u2014 est ce qui donne au jazz son son fluide et sophistiqu\u00e9.</p>

<h3>5. i - VI - III - VII (La \u00ab progression mineure \u00e9pique \u00bb)</h3>
<p>En La mineur : <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Cette progression appara\u00eet constamment dans la musique cin\u00e9matique, dramatique et au son \u00e9pique. Ce sont techniquement les m\u00eames accords que la progression pop triste, mais quand vous donnez \u00e0 Suno des ambiances \u00ab epic orchestral \u00bb ou \u00ab cinematic trailer \u00bb, il tend \u00e0 les arranger avec des dynamiques beaucoup plus grandes.</p>
<p><b>Astuce prompt Suno :</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>Pourquoi conna\u00eetre la tonalit\u00e9 est important</h2>
<p>Quand vous indiquez \u00e0 Suno une tonalit\u00e9 \u2014 disons \u00ab in C major \u00bb \u2014 vous limitez les accords qu'il est susceptible de choisir. Chaque tonalit\u00e9 poss\u00e8de un ensemble d'accords qui lui appartiennent naturellement. Pour <a href="/scales/c-major">Do majeur</a>, ces accords sont :</p>
<ul>
<li>I \u2014 <a href="/chords/c-major">Do majeur</a></li>
<li>ii \u2014 <a href="/chords/d-minor">R\u00e9 mineur</a></li>
<li>iii \u2014 <a href="/chords/e-minor">Mi mineur</a></li>
<li>IV \u2014 <a href="/chords/f-major">Fa majeur</a></li>
<li>V \u2014 <a href="/chords/g-major">Sol majeur</a></li>
<li>vi \u2014 <a href="/chords/a-minor">La mineur</a></li>
<li>vii\u00b0 \u2014 <a href="/chords/b-diminished">Si diminu\u00e9</a></li>
</ul>
<p>Si Suno g\u00e9n\u00e8re un accord qui n'est pas dans cette liste, il sort \u00ab en dehors de la tonalit\u00e9 \u00bb \u2014 ce qui peut sonner intentionnel et cool, ou al\u00e9atoire et mauvais. Sp\u00e9cifier la tonalit\u00e9 dans votre prompt r\u00e9duit le caract\u00e8re al\u00e9atoire.</p>
<p>Pour les tonalit\u00e9s mineures, les accords sont diff\u00e9rents. En <a href="/scales/a-minor">La mineur</a> :</p>
<ul>
<li>i \u2014 <a href="/chords/a-minor">La mineur</a></li>
<li>ii\u00b0 \u2014 <a href="/chords/b-diminished">Si diminu\u00e9</a></li>
<li>III \u2014 <a href="/chords/c-major">Do majeur</a></li>
<li>iv \u2014 <a href="/chords/d-minor">R\u00e9 mineur</a></li>
<li>v \u2014 <a href="/chords/e-minor">Mi mineur</a></li>
<li>VI \u2014 <a href="/chords/f-major">Fa majeur</a></li>
<li>VII \u2014 <a href="/chords/g-major">Sol majeur</a></li>
</ul>

<h2>Utiliser des mots d'ambiance pour orienter vers des gammes</h2>
<p>Suno ne comprend pas directement les noms de gammes, mais il comprend les ambiances. Vous pouvez utiliser cela pour contr\u00f4ler indirectement la gamme :</p>
<ul>
<li><b>\u00ab Bright \u00bb ou \u00ab happy \u00bb</b> \u2192 tend \u00e0 produire des m\u00e9lodies en <a href="/scales/c-major">gamme majeure</a></li>
<li><b>\u00ab Sad \u00bb ou \u00ab melancholic \u00bb</b> \u2192 tend \u00e0 produire des m\u00e9lodies en <a href="/scales/a-minor">mineur naturel</a></li>
<li><b>\u00ab Bluesy \u00bb ou \u00ab gritty \u00bb</b> \u2192 tend \u00e0 produire des m\u00e9lodies en <a href="/scales/a-blues">gamme blues</a></li>
<li><b>\u00ab Mysterious \u00bb ou \u00ab dark \u00bb</b> \u2192 tend \u00e0 produire des m\u00e9lodies en <a href="/scales/a-harmonic-minor">mineur harmonique</a></li>
<li><b>\u00ab Funky \u00bb ou \u00ab groovy \u00bb</b> \u2192 tend \u00e0 produire des sonorit\u00e9s <a href="/scales/a-mixolydian-pentatonic">mixolydiennes</a></li>
<li><b>\u00ab Ethereal \u00bb ou \u00ab dreamy \u00bb</b> \u2192 tend \u00e0 produire des m\u00e9lodies d'influence <a href="/scales/a-lydian-pentatonic">lydienne</a></li>
</ul>
<p>Ce ne sont pas des garanties \u2014 Suno est probabiliste, pas d\u00e9terministe. Mais combiner un mot d'ambiance avec une tonalit\u00e9 et des balises d'accords entre crochets vous donne la meilleure chance d'obtenir ce que vous voulez.</p>

<h2>Ce que Suno ne peut toujours pas faire</h2>
<p>Soyons honn\u00eates sur les limites :</p>
<ul>
<li><b>Renversements d'accords pr\u00e9cis</b> \u2014 Vous ne pouvez pas demander \u00e0 Suno de jouer un <a href="/chords/c-major">Do majeur</a> en deuxi\u00e8me renversement. Il choisit les renversements tout seul.</li>
<li><b>Changements de tonalit\u00e9 en cours de morceau</b> \u2014 Demander une modulation (changement de tonalit\u00e9) fonctionne rarement de mani\u00e8re fiable.</li>
<li><b>Harmonie jazz complexe</b> \u2014 Les accords alt\u00e9r\u00e9s, les substitutions tritoniques et l'harmonie enrichie d\u00e9passent ce que Suno g\u00e8re bien.</li>
<li><b>Cadences sp\u00e9cifiques</b> \u2014 Vous ne pouvez pas demander de mani\u00e8re fiable une <a href="/blog/cadences">cadence rompue</a> ou une demi-cadence \u00e0 un endroit pr\u00e9cis.</li>
</ul>
<p>Pour tout ce qui va au-del\u00e0 de l'harmonie pop/rock/folk de base, vous obtiendrez de meilleurs r\u00e9sultats en apprenant la th\u00e9orie vous-m\u00eame et en utilisant un DAW.</p>

<p><b><a href="/chords">Rechercher n'importe quel accord sur Solfej \u2192</a></b></p>
<p><b><a href="/scales">Rechercher n'importe quelle gamme sur Solfej \u2192</a></b></p>

<h2>Plus de guides Suno AI</h2>
<ul>
<li><a href="/fr/blog/suno-ai-prompt-guide">Guide de prompts Suno AI : l'aide-m\u00e9moire de th\u00e9orie musicale pour de meilleures chansons</a></li>
<li><a href="/fr/blog/suno-vs-udio">Suno vs Udio : quel g\u00e9n\u00e9rateur de musique IA est meilleur en 2026 ?</a></li>
<li><a href="/fr/blog/suno-ai-tips">Comment rendre vos chansons Suno AI professionnelles (astuces de th\u00e9orie musicale)</a></li>
</ul>`,
  },

  "suno-ai-prompt-guide": {
    title: "Guide de prompts Suno AI : l'aide-m\u00e9moire de th\u00e9orie musicale pour de meilleures chansons",
    seoTitle: "Guide de prompts Suno AI : aide-m\u00e9moire de th\u00e9orie musicale pour de meilleurs prompts (2026) | Solfej",
    description: "Un guide pratique pour \u00e9crire de meilleurs prompts Suno AI en utilisant les bases de la th\u00e9orie musicale. Couvre les tonalit\u00e9s, gammes, modes, tempo, et comment traduire ce que vous entendez dans votre t\u00eate en prompts qui fonctionnent.",
    timeToRead: "9 min",
    body: `<p>La plupart des guides de prompts Suno AI vous disent d'ajouter des tags de genre et des mots d'ambiance. C'est bien, mais c'est superficiel. Les personnes qui obtiennent les meilleurs r\u00e9sultats de Suno sont celles qui connaissent un peu de th\u00e9orie musicale \u2014 parce qu'elles peuvent d\u00e9crire ce qu'elles veulent en termes auxquels l'IA r\u00e9pond r\u00e9ellement.</p>
<p>Vous n'avez pas besoin d'un dipl\u00f4me de musique. Vous avez besoin d'environ 10 minutes et de cet aide-m\u00e9moire.</p>

<h2>Les 4 choses que Suno comprend r\u00e9ellement</h2>
<p>La bo\u00eete de style de Suno r\u00e9pond \u00e0 quatre types d'informations musicales. Par ordre de fiabilit\u00e9 :</p>
<ol>
<li><b>Genre</b> \u2014 \u00ab indie rock \u00bb, \u00ab lo-fi hip hop \u00bb, \u00ab jazz ballad \u00bb</li>
<li><b>Ambiance/\u00e9nergie</b> \u2014 \u00ab melancholic \u00bb, \u00ab aggressive \u00bb, \u00ab dreamy \u00bb</li>
<li><b>Instrumentation</b> \u2014 \u00ab acoustic guitar \u00bb, \u00ab piano and strings \u00bb, \u00ab 808s \u00bb</li>
<li><b>Param\u00e8tres musicaux</b> \u2014 tonalit\u00e9, tempo/BPM, signature rythmique</li>
</ol>
<p>La plupart des gens n'utilisent que les points 1 et 2. Ajouter les points 3 et surtout 4, c'est l\u00e0 que la th\u00e9orie musicale vous donne un avantage.</p>

<h2>Tonalit\u00e9s : majeur vs mineur (et pourquoi c'est important)</h2>
<p>La chose la plus impactante que vous puissiez ajouter \u00e0 un prompt Suno est la tonalit\u00e9. Elle indique \u00e0 l'IA quelles notes et quels accords utiliser.</p>
<p><b>Les tonalit\u00e9s majeures</b> sonnent brillantes, joyeuses, r\u00e9solues. Si vous indiquez <code>C major</code>, Suno aura tendance \u00e0 construire autour de la <a href="/scales/c-major">gamme de Do majeur</a> et \u00e0 utiliser des accords comme <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a> et <a href="/chords/g-major">G</a>.</p>
<p><b>Les tonalit\u00e9s mineures</b> sonnent sombres, tristes, tendues. Si vous indiquez <code>A minor</code>, Suno puisera dans la <a href="/scales/a-minor">gamme de La mineur</a> et utilisera des accords comme <a href="/chords/a-minor">Am</a>, <a href="/chords/d-minor">Dm</a> et <a href="/chords/e-minor">Em</a>.</p>
<p>Voici un r\u00e9f\u00e9rentiel rapide des tonalit\u00e9s courantes et de l'atmosph\u00e8re qu'elles tendent \u00e0 produire :</p>
<ul>
<li><a href="/scales/c-major">Do majeur</a> / <a href="/scales/a-minor">La mineur</a> \u2014 pas de di\u00e8ses ni de b\u00e9mols, sensation \u00ab neutre \u00bb, tr\u00e8s courant en pop</li>
<li><a href="/scales/g-major">Sol majeur</a> / <a href="/scales/e-minor">Mi mineur</a> \u2014 brillant et ouvert, courant en folk et rock</li>
<li><a href="/scales/d-major">R\u00e9 majeur</a> / <a href="/scales/b-minor">Si mineur</a> \u2014 chaleureux et r\u00e9sonnant, id\u00e9al pour les chansons \u00e0 la guitare acoustique</li>
<li><a href="/scales/f-major">Fa majeur</a> / <a href="/scales/d-minor">R\u00e9 mineur</a> \u2014 majeur l\u00e9g\u00e8rement plus sombre, fonctionne bien pour les ballades</li>
<li><a href="/scales/eb-major">Mib majeur</a> / <a href="/scales/c-minor">Do mineur</a> \u2014 riche et plein, courant en R&B et soul</li>
</ul>

<h2>Tempo : aide-m\u00e9moire BPM</h2>
<p>Ajouter un BPM (battements par minute) \u00e0 votre prompt vous donne le contr\u00f4le sur le niveau d'\u00e9nergie. Suno r\u00e9pond aussi bien aux chiffres BPM exacts qu'aux termes de tempo italiens.</p>
<ul>
<li><b>60-70 BPM (Adagio)</b> \u2014 Tr\u00e8s lent. Ballades, ambiant, cin\u00e9matique. <code>Slow ballad, 65 BPM, piano</code></li>
<li><b>70-90 BPM (Andante)</b> \u2014 Allure de marche. Lo-fi hip hop, R&B. <code>Lo-fi hip hop, 80 BPM, chill</code></li>
<li><b>90-110 BPM (Moderato)</b> \u2014 Mod\u00e9r\u00e9. Pop, indie, folk. <code>Indie folk, 100 BPM, acoustic guitar</code></li>
<li><b>110-130 BPM (Allegro)</b> \u2014 Entra\u00eenant. Pop, rock, danse. <code>Pop rock anthem, 120 BPM, electric guitar</code></li>
<li><b>130-160 BPM (Vivace)</b> \u2014 Rapide. Punk, drum & bass, EDM. <code>Punk rock, 150 BPM, aggressive</code></li>
<li><b>160+ BPM (Presto)</b> \u2014 Tr\u00e8s rapide. Drum & bass, speed metal. <code>Drum and bass, 170 BPM, dark</code></li>
</ul>

<h2>Modes : au-del\u00e0 du majeur et du mineur</h2>
<p>Les modes sont des gammes qui poss\u00e8dent chacune une ambiance distincte. Suno ne r\u00e9pond pas toujours directement aux noms de modes, mais vous pouvez l'orienter avec des mots d'ambiance :</p>
<ul>
<li><b><a href="/scales/c-major">Ionien</a> (gamme majeure)</b> \u2014 joyeux, brillant \u2192 prompt : <code>bright, uplifting, major key</code></li>
<li><b><a href="/scales/c-dorian">Dorien</a></b> \u2014 mineur mais avec une qualit\u00e9 d'espoir \u2192 prompt : <code>minor key, slightly funky, Santana-esque</code></li>
<li><b><a href="/scales/c-phrygian">Phrygien</a></b> \u2014 saveur espagnole/moyen-orientale \u2192 prompt : <code>Spanish guitar, dark, flamenco-influenced</code></li>
<li><b><a href="/scales/c-lydian-pentatonic">Lydien</a></b> \u2014 r\u00eaveur, flottant, \u00e9th\u00e9r\u00e9 \u2192 prompt : <code>ethereal, dreamy, shimmering, Joe Satriani</code></li>
<li><b><a href="/scales/c-mixolydian-pentatonic">Mixolydien</a></b> \u2014 blues, rock, l\u00e9g\u00e8rement non r\u00e9solu \u2192 prompt : <code>classic rock, bluesy, Grateful Dead</code></li>
<li><b><a href="/scales/a-minor">\u00c9olien</a> (mineur naturel)</b> \u2014 triste, sombre \u2192 prompt : <code>sad, dark, melancholic, minor key</code></li>
</ul>
<p>L'id\u00e9e cl\u00e9 : chaque mode est simplement une gamme ordinaire commen\u00e7ant sur une note diff\u00e9rente. <a href="/scales/c-dorian">Do dorien</a> utilise les m\u00eames notes que <a href="/scales/bb-major">Sib majeur</a>, mais sonne compl\u00e8tement diff\u00e9remment parce que la \u00ab note de r\u00e9f\u00e9rence \u00bb est Do au lieu de Sib. Si vous voulez approfondir, consultez n'importe laquelle de ces gammes sur Solfej.</p>

<h2>Assembler le tout : mod\u00e8les de prompts</h2>
<p>Voici des mod\u00e8les pr\u00eats \u00e0 l'emploi qui combinent genre, ambiance, tonalit\u00e9 et tempo :</p>

<h3>Ballade acoustique triste</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>Cela fonctionne parce que : <a href="/scales/a-minor">La mineur</a> est une tonalit\u00e9 confortable pour la guitare, 75 BPM est assez lent pour une ballade, et les mots d'ambiance renforcent la tonalit\u00e9 mineure.</p>

<h3>Chanson pop entra\u00eenante</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>Cela fonctionne parce que : <a href="/scales/c-major">Do majeur</a> est la tonalit\u00e9 la plus brillante, la plus \u00ab basique \u00bb \u2014 pas de di\u00e8ses ni de b\u00e9mols \u2014 et 118 BPM se situe pile dans la zone id\u00e9ale de la pop.</p>

<h3>Beat trap sombre</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>Cela fonctionne parce que : <a href="/scales/d-minor">R\u00e9 mineur</a> est une tonalit\u00e9 courante pour le trap (elle s'accorde bien avec la basse 808), et 140 BPM est le tempo standard du trap.</p>

<h3>Standard jazz</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>Cela fonctionne parce que : <a href="/scales/bb-major">Sib majeur</a> est la tonalit\u00e9 la plus courante en jazz (les instruments \u00e0 vent sont construits en Sib), et sp\u00e9cifier \u00ab walking bass \u00bb et \u00ab swing \u00bb aide Suno \u00e0 trouver le bon feeling rythmique.</p>

<h3>Beat lo-fi pour \u00e9tudier</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>Cela fonctionne parce que : <a href="/scales/f-major">Fa majeur</a> a une qualit\u00e9 chaude et l\u00e9g\u00e8rement douce, 85 BPM est la zone id\u00e9ale du lo-fi, et \u00ab jazzy chords \u00bb pousse Suno vers des renversements de <a href="/chords/f-major-7th">septi\u00e8me majeure</a> et de <a href="/chords/f-dominant-7th">septi\u00e8me de dominante</a>.</p>

<h2>Erreurs courantes</h2>
<ul>
<li><b>Surcharger le prompt</b> \u2014 Ne mettez pas 15 descripteurs dans la bo\u00eete Style. Suno pond\u00e8re les premiers mots le plus fortement. Commencez par le genre et la tonalit\u00e9.</li>
<li><b>Instructions contradictoires</b> \u2014 \u00ab Happy, bright, D minor \u00bb est contradictoire. <a href="/scales/d-minor">R\u00e9 mineur</a> est une tonalit\u00e9 triste. Faites correspondre vos mots d'ambiance \u00e0 votre tonalit\u00e9.</li>
<li><b>Ignorer le BPM</b> \u2014 Si vous indiquez \u00ab energetic \u00bb mais ne sp\u00e9cifiez pas le tempo, Suno pourrait vous donner un morceau lent. Ajoutez toujours le BPM pour les genres d\u00e9pendants de l'\u00e9nergie.</li>
<li><b>Attendre une reproduction exacte</b> \u2014 Suno est probabiliste. Il vous am\u00e8nera dans le voisinage de ce que vous demandez, pas une reproduction exacte. G\u00e9n\u00e9rez 3-4 versions et choisissez la meilleure.</li>
</ul>

<h2>Le v\u00e9ritable avantage : savoir ce que vous entendez</h2>
<p>La principale raison d'apprendre les bases de la th\u00e9orie musicale n'est pas d'\u00e9crire de meilleurs prompts Suno \u2014 c'est de comprendre ce que Suno vous renvoie. Quand vous g\u00e9n\u00e9rez un morceau et pensez \u00ab \u00e7a sonne bien \u00bb, \u00eatre capable de dire \u00ab c'est parce qu'il utilise une gamme <a href="/scales/c-dorian">dorienne</a> sur un accord de <a href="/chords/c-minor-7th">septi\u00e8me mineure</a> \u00bb signifie que vous pouvez recr\u00e9er ce son intentionnellement, pas par chance.</p>
<p>Si rien d'autre, apprenez ces trois choses :</p>
<ul>
<li>La diff\u00e9rence entre les accords <a href="/chords/c-major">majeurs</a> et <a href="/chords/c-minor">mineurs</a> (et pourquoi ils sonnent diff\u00e9remment)</li>
<li>Ce qu'est une <a href="/scales/c-major">gamme</a> et comment elle d\u00e9termine quelles notes \u00ab fonctionnent \u00bb dans une tonalit\u00e9</li>
<li>Ce que sont les <a href="/blog/cadences">cadences</a> \u2014 elles sont la raison pour laquelle certaines fins semblent d\u00e9finitives et d'autres non r\u00e9solues</li>
</ul>

<p><b><a href="/chords">Rechercher n'importe quel accord sur Solfej \u2192</a></b></p>
<p><b><a href="/scales">Rechercher n'importe quelle gamme sur Solfej \u2192</a></b></p>

<h2>Plus de guides Suno AI</h2>
<ul>
<li><a href="/fr/blog/suno-ai-chord-progressions">Progressions d'accords Suno AI : comment contr\u00f4ler les accords jou\u00e9s par Suno</a></li>
<li><a href="/fr/blog/suno-vs-udio">Suno vs Udio : quel g\u00e9n\u00e9rateur de musique IA est meilleur en 2026 ?</a></li>
<li><a href="/fr/blog/suno-ai-tips">Comment rendre vos chansons Suno AI professionnelles (astuces de th\u00e9orie musicale)</a></li>
</ul>`,
  },

  "suno-vs-udio": {
    title: "Suno vs Udio : quel g\u00e9n\u00e9rateur de musique IA est meilleur en 2026 ?",
    seoTitle: "Suno vs Udio 2026 : quel g\u00e9n\u00e9rateur de musique IA est vraiment meilleur ? | Solfej",
    description: "Une comparaison honn\u00eate de Suno et Udio en 2026. Nous testons les deux sur les voix, les progressions d'accords, la pr\u00e9cision des genres et la qualit\u00e9 musicale \u2014 avec une v\u00e9ritable analyse de th\u00e9orie musicale.",
    timeToRead: "9 min",
    body: `<p>Suno et Udio sont les deux plus grands g\u00e9n\u00e9rateurs de musique IA en 2026. Les deux vous permettent de taper un prompt textuel et d'obtenir une chanson compl\u00e8te en retour. Mais ils produisent des r\u00e9sultats sensiblement diff\u00e9rents \u2014 et lequel est \u00ab meilleur \u00bb d\u00e9pend de ce que vous essayez de faire.</p>
<p>La plupart des comparaisons se concentrent sur la qualit\u00e9 audio et les tarifs. Celle-ci se concentre sur quelque chose de plus utile : ce que chaque outil fait r\u00e9ellement avec la th\u00e9orie musicale, et o\u00f9 chacun \u00e9choue.</p>

<h2>Tableau comparatif rapide</h2>
<table>
<thead>
<tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
</thead>
<tbody>
<tr><td><b>Vitesse</b></td><td>~30 secondes par morceau</td><td>~90 secondes par morceau</td></tr>
<tr><td><b>Qualit\u00e9 vocale</b></td><td>Plus naturel, meilleure \u00e9motion</td><td>Meilleure diction, mix plus propre</td></tr>
<tr><td><b>Qualit\u00e9 instrumentale</b></td><td>Bonne mais peut sonner compress\u00e9</td><td>Meilleure s\u00e9paration, mix plus propre</td></tr>
<tr><td><b>Pr\u00e9cision des accords</b></td><td>Suit les balises entre crochets ~60% du temps</td><td>L\u00e9g\u00e8rement meilleur pour suivre les accords</td></tr>
<tr><td><b>Gamme de genres</b></td><td>Large, meilleur en pop/rock/hip-hop</td><td>Large, meilleur en jazz/classique</td></tr>
<tr><td><b>Offre gratuite</b></td><td>10 morceaux/jour</td><td>G\u00e9n\u00e9rations limit\u00e9es/mois</td></tr>
<tr><td><b>Dur\u00e9e max</b></td><td>4 minutes</td><td>Extension jusqu'\u00e0 15+ minutes</td></tr>
</tbody>
</table>

<h2>Voix : Suno l'emporte</h2>
<p>Suno produit des voix plus expressives \u00e9motionnellement. L'IA capture le souffle, les cassures vocales et les changements dynamiques qui sonnent plus proches d'un vrai chanteur. Les voix d'Udio sont techniquement plus propres mais sonnent souvent plus robotiques \u2014 comme une voix MIDI tr\u00e8s polie.</p>
<p>Pour les genres o\u00f9 le caract\u00e8re vocal compte \u2014 soul, indie, country \u2014 Suno est le gagnant incontestable. Pour les genres o\u00f9 des voix impeccables et trait\u00e9es sont attendues \u2014 EDM, production pop \u2014 la diff\u00e9rence est moindre.</p>

<h2>Instruments : Udio l'emporte</h2>
<p>Udio produit une meilleure s\u00e9paration instrumentale. Dans un morceau Suno, la guitare, la basse, la batterie et les voix peuvent se m\u00e9langer d'une fa\u00e7on qui sonne \u00ab boueuse \u00bb. La sortie d'Udio \u00e0 48 kHz ressemble davantage \u00e0 un mix professionnel o\u00f9 l'on peut entendre chaque instrument clairement.</p>
<p>Cela compte le plus pour les arrangements complexes. Si vous g\u00e9n\u00e9rez un simple morceau guitare acoustique et voix, les deux sonnent bien. Si vous essayez de g\u00e9n\u00e9rer un arrangement complet avec plusieurs instruments, Udio g\u00e8re mieux la s\u00e9paration.</p>

<h2>Progressions d'accords : comment chacun g\u00e8re l'harmonie</h2>
<p>C'est l\u00e0 que \u00e7a devient int\u00e9ressant du point de vue de la th\u00e9orie musicale. Les deux outils sont entra\u00een\u00e9s sur d'\u00e9normes ensembles de donn\u00e9es de musique populaire, donc ils gravitent tous les deux vers les <a href="/chords">progressions d'accords</a> courantes. Mais ils g\u00e8rent la complexit\u00e9 harmonique diff\u00e9remment.</p>

<h3>Progressions simples (I-IV-V-I, vi-IV-I-V)</h3>
<p>Les deux outils les g\u00e8rent bien. Si vous demandez une chanson pop en <a href="/scales/c-major">Do majeur</a>, les deux vous donneront de mani\u00e8re fiable des progressions construites \u00e0 partir de <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a>, <a href="/chords/g-major">G</a> et <a href="/chords/a-minor">Am</a>. Pas de vrai gagnant ici.</p>

<h3>Harmonie jazz (ii-V-I, accords enrichis)</h3>
<p>Udio g\u00e8re mieux le jazz. Quand on lui demande du jazz, Udio est plus susceptible de produire de v\u00e9ritables renversements de <a href="/chords/d-minor-7th">septi\u00e8me mineure</a> et de <a href="/chords/c-major-7th">septi\u00e8me majeure</a> plut\u00f4t que des triades simplifi\u00e9es. Suno a tendance \u00e0 \u00ab pop-ifier \u00bb les prompts jazz \u2014 vous obtenez quelque chose qui sonne vaguement jazz mais utilise une harmonie plus simple.</p>
<p>Si vous voulez un morceau qui sonne vraiment comme s'il utilisait une progression <a href="/chords/d-minor-7th">Dm7</a> \u2192 <a href="/chords/g-dominant-7th">G7</a> \u2192 <a href="/chords/c-major-7th">Cmaj7</a>, Udio a plus de chances de livrer.</p>

<h3>Pr\u00e9cision en tonalit\u00e9 mineure</h3>
<p>Les deux outils ont parfois du mal \u00e0 rester dans une tonalit\u00e9 mineure. Vous demandez \u00ab sad, A minor \u00bb et obtenez une section qui saute soudainement vers <a href="/scales/a-major">La majeur</a>. C'est plus courant chez Suno que chez Udio, surtout sur les g\u00e9n\u00e9rations plus longues.</p>
<p>Le probl\u00e8me est que les deux outils sont entra\u00een\u00e9s sur des chansons qui m\u00e9langent fr\u00e9quemment majeur et mineur (la plupart de la musique pop le fait), donc ils ne maintiennent pas toujours une <a href="/scales/a-minor">gamme mineure</a> stricte tout au long du morceau.</p>

<h3>Changements de tonalit\u00e9</h3>
<p>Aucun des deux outils ne g\u00e8re bien les changements de tonalit\u00e9 demand\u00e9s par prompt. Si vous \u00e9crivez <code>[Key change to Eb major]</code> dans vos paroles, les deux l'ignoreront la plupart du temps. Suno produit occasionnellement des changements de tonalit\u00e9 accidentels (surtout dans la section pont), tandis qu'Udio tend \u00e0 rester dans une seule tonalit\u00e9 plus obstin\u00e9ment.</p>

<h2>Pr\u00e9cision des genres</h2>
<h3>O\u00f9 Suno est meilleur :</h3>
<ul>
<li><b>Pop / Top 40</b> \u2014 Suno ma\u00eetrise le son pop moderne, avec les bons <a href="/chords">renversements d'accords</a> et le bon style de production</li>
<li><b>Hip-hop / Trap</b> \u2014 Meilleure basse 808, patterns de hi-hat plus convaincants, capture bien l'esth\u00e9tique <a href="/scales/d-minor">tonalit\u00e9 mineure sombre</a></li>
<li><b>Rock</b> \u2014 Guitares distordues plus convaincantes, meilleur pour capturer l'\u00e9nergie des <a href="/chords/a-power-chord">power chords</a></li>
<li><b>Country</b> \u2014 Meilleur pour le timbre vocal country et l'ouverture en <a href="/scales/g-major">tonalit\u00e9 majeure</a> qui d\u00e9finit la country</li>
</ul>

<h3>O\u00f9 Udio est meilleur :</h3>
<ul>
<li><b>Jazz</b> \u2014 Meilleur pour les <a href="/chords/c-major-7th">accords enrichis</a>, les lignes de basse walking et le feeling swing</li>
<li><b>Classique / Orchestral</b> \u2014 La meilleure s\u00e9paration instrumentale fait que les cordes, les cuivres et les bois sonnent plus r\u00e9alistes</li>
<li><b>\u00c9lectronique / Ambiant</b> \u2014 Meilleur pour le design sonore subtil et les textures \u00e9volutives</li>
<li><b>Musiques du monde</b> \u2014 Plus susceptible d'incorporer des <a href="/scales">gammes</a> et instruments non-occidentaux au son authentique</li>
</ul>

<h2>Strat\u00e9gies de prompting : des approches diff\u00e9rentes</h2>
<p>Parce que les outils pond\u00e8rent diff\u00e9remment les \u00e9l\u00e9ments, votre strat\u00e9gie de prompting doit diff\u00e9rer :</p>
<p><b>Pour Suno :</b> Commencez par le genre, puis l'ambiance, puis la tonalit\u00e9. Suno pond\u00e8re les premiers mots le plus fortement. Exemple : <code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>Pour Udio :</b> Soyez plus pr\u00e9cis sur l'instrumentation et le style de production. Udio r\u00e9pond mieux aux descriptions sonores d\u00e9taill\u00e9es. Exemple : <code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>Tarifs (2026)</h2>
<ul>
<li><b>Suno Gratuit :</b> 50 cr\u00e9dits/jour (10 morceaux), utilisation non commerciale</li>
<li><b>Suno Pro :</b> 10 $/mois, 500 morceaux/mois, licence commerciale</li>
<li><b>Udio Gratuit :</b> G\u00e9n\u00e9rations limit\u00e9es par mois</li>
<li><b>Udio Standard :</b> 10 $/mois, similaire \u00e0 Suno Pro</li>
</ul>
<p>Les tarifs sont similaires. L'offre gratuite compte le plus pour les utilisateurs occasionnels, et le renouvellement quotidien des cr\u00e9dits de Suno est plus g\u00e9n\u00e9reux pour l'exp\u00e9rimentation.</p>

<h2>Le verdict final</h2>
<ul>
<li><b>Utilisez Suno si :</b> Vous voulez des morceaux pop/rock/hip-hop rapides et accrocheurs avec de bonnes voix. C'est plus rapide, plus facile \u00e0 prompter, et l'offre gratuite est meilleure.</li>
<li><b>Utilisez Udio si :</b> Vous avez besoin d'une meilleure qualit\u00e9 audio, d'une meilleure s\u00e9paration instrumentale, ou travaillez avec des genres jazz/classique/\u00e9lectronique o\u00f9 la nuance compte.</li>
<li><b>Utilisez les deux si :</b> Vous \u00eates s\u00e9rieux au sujet de la musique IA. G\u00e9n\u00e9rez le m\u00eame prompt sur les deux et comparez. Vous apprendrez beaucoup sur la fa\u00e7on dont chaque outil interpr\u00e8te l'harmonie et l'arrangement diff\u00e9remment.</li>
</ul>
<p>Et quel que soit l'outil que vous utilisez \u2014 apprenez quelques <a href="/chords">accords</a> et <a href="/scales">gammes</a> de base. Savoir ce que vous demandez (et ce que vous obtenez en retour) fait la diff\u00e9rence entre un r\u00e9sultat al\u00e9atoire et de la musique intentionnelle.</p>

<p><b><a href="/chords">Rechercher n'importe quel accord sur Solfej \u2192</a></b></p>
<p><b><a href="/scales">Rechercher n'importe quelle gamme sur Solfej \u2192</a></b></p>

<h2>Plus de guides Suno AI</h2>
<ul>
<li><a href="/fr/blog/suno-ai-chord-progressions">Progressions d'accords Suno AI : comment contr\u00f4ler les accords jou\u00e9s par Suno</a></li>
<li><a href="/fr/blog/suno-ai-prompt-guide">Guide de prompts Suno AI : l'aide-m\u00e9moire de th\u00e9orie musicale pour de meilleures chansons</a></li>
<li><a href="/fr/blog/suno-ai-tips">Comment rendre vos chansons Suno AI professionnelles (astuces de th\u00e9orie musicale)</a></li>
</ul>`,
  },

  "suno-ai-tips": {
    title: "Comment rendre vos chansons Suno AI professionnelles (astuces de th\u00e9orie musicale)",
    seoTitle: "Comment rendre vos chansons Suno AI professionnelles : astuces de th\u00e9orie musicale (2026) | Solfej",
    description: "Vos chansons Suno AI sonnent amateur parce qu'il vous manque les bases de la th\u00e9orie musicale. Voici les concepts pr\u00e9cis qui rendront votre musique g\u00e9n\u00e9r\u00e9e par IA consid\u00e9rablement meilleure.",
    timeToRead: "8 min",
    body: `<p>Vous avez g\u00e9n\u00e9r\u00e9 50 chansons dans Suno. Certaines sonnent correctement. La plupart sonnent g\u00e9n\u00e9riques. Quelques-unes sonnent franchement mal. Le probl\u00e8me n'est pas Suno \u2014 c'est que vous promptez \u00e0 l'aveugle.</p>
<p>La diff\u00e9rence entre un r\u00e9sultat Suno g\u00e9n\u00e9rique et quelque chose qui sonne vraiment comme une vraie chanson se r\u00e9sume \u00e0 la compr\u00e9hension de quelques concepts de th\u00e9orie musicale. Voici ceux qui comptent le plus.</p>

<h2>Astuce 1 : Arr\u00eatez de choisir des tonalit\u00e9s au hasard</h2>
<p>La plupart des utilisateurs de Suno ne sp\u00e9cifient pas de tonalit\u00e9 ou en choisissent une au hasard. C'est comme cuisiner sans savoir quelles saveurs vont ensemble.</p>
<p>Chaque tonalit\u00e9 a une personnalit\u00e9. Ce n'est pas de l'\u00e9sot\u00e9risme \u2014 c'est parce que diff\u00e9rentes tonalit\u00e9s se positionnent diff\u00e9remment sur les instruments et dans la tessiture vocale humaine :</p>
<ul>
<li><a href="/scales/c-major">Do majeur</a> \u2014 La \u00ab toile vierge \u00bb. Propre et simple, pas de di\u00e8ses ni de b\u00e9mols. Id\u00e9al pour : pop directe.</li>
<li><a href="/scales/g-major">Sol majeur</a> \u2014 Ouvert et brillant. Pratique pour la guitare (beaucoup de cordes \u00e0 vide). Id\u00e9al pour : folk, country, rock.</li>
<li><a href="/scales/e-minor">Mi mineur</a> \u2014 Sombre et puissant. La tonalit\u00e9 la plus courante en rock. Id\u00e9al pour : rock, metal, pop dramatique.</li>
<li><a href="/scales/a-minor">La mineur</a> \u2014 Triste mais accessible. Id\u00e9al pour : ballades, indie, auteur-compositeur.</li>
<li><a href="/scales/d-minor">R\u00e9 mineur</a> \u2014 Profond et t\u00e9n\u00e9breux. Courant en hip-hop et trap. Id\u00e9al pour : trap, R&B sombre, musiques de film.</li>
<li><a href="/scales/bb-major">Sib majeur</a> \u2014 Chaleureux et riche. La tonalit\u00e9 jazz par d\u00e9faut. Id\u00e9al pour : jazz, soul, R&B.</li>
</ul>
<p><b>La solution :</b> Faites correspondre votre tonalit\u00e9 \u00e0 votre genre. Indiquer <code>G major</code> pour une chanson folk ou <code>D minor</code> pour un beat trap rend instantan\u00e9ment le r\u00e9sultat plus authentique.</p>

<h2>Astuce 2 : Comprenez pourquoi vos chansons se ressemblent toutes</h2>
<p>Si toutes vos chansons Suno se ressemblent, c'est parce qu'elles utilisent toutes la m\u00eame progression d'accords. Suno utilise par d\u00e9faut les progressions pop les plus courantes quand vous ne lui donnez pas de direction :</p>
<ul>
<li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> (la \u00ab chanson \u00e0 quatre accords \u00bb)</li>
<li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> (m\u00eames accords, d\u00e9but mineur)</li>
</ul>
<p>Ces progressions dominent la musique pop, donc Suno gravite vers elles par d\u00e9faut. Pour en sortir, vous devez demander des progressions diff\u00e9rentes.</p>
<p><b>La solution :</b> Ajoutez des balises d'accords entre crochets dans vos paroles pour orienter Suno vers des progressions moins courantes. Essayez :</p>
<ul>
<li><code>[Dm] [G] [C] [Am]</code> \u2014 ii-V-I-vi, courant en soul et jazz-pop</li>
<li><code>[Am] [Em] [F] [Dm]</code> \u2014 i-v-VI-iv, plus sombre et dramatique</li>
<li><code>[C] [Em] [Am] [G]</code> \u2014 I-iii-vi-V, utilis\u00e9 dans le rock des ann\u00e9es 60/70 (style Beatles)</li>
</ul>
<p>Vous ne savez pas ce que signifient ces chiffres romains ? Chaque num\u00e9ro repr\u00e9sente un accord construit sur ce degr\u00e9 de la gamme. En <a href="/scales/c-major">Do majeur</a>, I = <a href="/chords/c-major">C</a>, ii = <a href="/chords/d-minor">Dm</a>, iii = <a href="/chords/e-minor">Em</a>, IV = <a href="/chords/f-major">F</a>, V = <a href="/chords/g-major">G</a>, vi = <a href="/chords/a-minor">Am</a>.</p>

<h2>Astuce 3 : Utilisez la tension et la r\u00e9solution</h2>
<p>Les chansons professionnelles ne restent pas sur un seul niveau d'\u00e9nergie \u2014 elles construisent la tension puis la rel\u00e2chent. C'est le principe des <a href="/blog/cadences">cadences</a>.</p>
<p>Le sch\u00e9ma tension-r\u00e9solution le plus important en musique est <b>V \u2192 I</b> : l'accord de <a href="/chords/g-major">Sol majeur</a> se r\u00e9solvant sur <a href="/chords/c-major">Do majeur</a> (dans la tonalit\u00e9 de Do). C'est ce qu'on appelle une <a href="/blog/cadences">cadence authentique</a>, et c'est le son de \u00ab fin satisfaisante \u00bb que vous avez entendu dans des milliers de chansons.</p>
<p>Vous ne pouvez pas directement demander \u00e0 Suno des cadences, mais vous pouvez les int\u00e9grer dans vos balises d'accords entre crochets. Terminez votre refrain avec <code>[G] [C]</code> pour une r\u00e9solution forte, ou <code>[G] [Am]</code> pour une surprise qui laisse l'auditeur en suspens (c'est une <a href="/blog/cadences">cadence rompue</a>).</p>
<p>Autres outils de tension :</p>
<ul>
<li><b><a href="/chords/c-dominant-7th">Accords de septi\u00e8me de dominante</a></b> \u2014 Ajouter une septi\u00e8me \u00e0 l'accord V (<a href="/chords/g-dominant-7th">G7</a> au lieu de <a href="/chords/g-major">G</a>) augmente l'attraction vers la r\u00e9solution. Excellent pour le blues et le jazz.</li>
<li><b><a href="/chords/c-suspended-4th">Accords suspendus</a></b> \u2014 Les accords sus4 cr\u00e9ent une sensation flottante, non r\u00e9solue. Utilisez <code>[Csus4] [C]</code> pour un effet subtil d'\u00ab ouverture \u00bb.</li>
<li><b><a href="/chords/c-minor">Accords mineurs</a> dans des tonalit\u00e9s majeures</b> \u2014 Ins\u00e9rer un <a href="/chords/a-minor">Am</a> inattendu dans un contexte de <a href="/scales/c-major">Do majeur</a> cr\u00e9e instantan\u00e9ment un poids \u00e9motionnel.</li>
</ul>

<h2>Astuce 4 : Faites correspondre votre tempo \u00e0 votre genre</h2>
<p>Un mauvais tempo est l'un des moyens les plus faciles de faire sonner un morceau Suno de travers. Chaque genre a une plage de tempo naturelle. Si votre \u00ab chill lo-fi beat \u00bb est \u00e0 140 BPM, il ne sonnera pas chill quels que soient les autres mots utilis\u00e9s.</p>
<ul>
<li><b>Ballade :</b> 60-80 BPM</li>
<li><b>R&B / Neo-soul :</b> 70-90 BPM</li>
<li><b>Lo-fi hip hop :</b> 75-90 BPM</li>
<li><b>Pop :</b> 100-125 BPM</li>
<li><b>Rock :</b> 110-140 BPM</li>
<li><b>EDM / House :</b> 120-130 BPM</li>
<li><b>Drum & bass :</b> 160-180 BPM</li>
<li><b>Punk :</b> 150-180 BPM</li>
</ul>
<p><b>La solution :</b> Incluez toujours le BPM dans votre prompt de style. <code>Lo-fi hip hop, 82 BPM, chill</code> produira de bien meilleurs r\u00e9sultats que simplement <code>Lo-fi hip hop, chill</code>.</p>

<h2>Astuce 5 : Apprenez la gamme blues (s\u00e9rieusement)</h2>
<p>Si vous ne devez apprendre qu'une seule gamme pour le prompting Suno, apprenez la <a href="/scales/a-blues">gamme blues</a>. C'est la fondation du rock, du blues, du R&B, du hip-hop et d'une \u00e9norme partie de la musique pop.</p>
<p>La <a href="/scales/a-blues">gamme blues de La</a> est : A - C - D - Eb - E - G. Six notes. C'est tout.</p>
<p>Pourquoi c'est important pour Suno : quand vous demandez des genres bluesy, soul ou gritty et que Suno g\u00e9n\u00e8re une m\u00e9lodie, il puise souvent dans cette gamme. Si vous la reconnaissez, vous pouvez dire si Suno vous a donn\u00e9 ce que vous avez demand\u00e9. Si la m\u00e9lodie sonne \u00ab trop joyeuse \u00bb pour un prompt blues, cela signifie que Suno est revenu par d\u00e9faut \u00e0 une <a href="/scales/a-major">gamme majeure</a> \u2014 reg\u00e9n\u00e9rez.</p>
<p>Autres gammes utiles \u00e0 reconna\u00eetre :</p>
<ul>
<li><a href="/scales/a-major-pentatonic">Pentatonique majeure</a> \u2014 la version \u00ab joyeuse \u00bb de la gamme blues. Utilis\u00e9e en pop, country et solos de rock classique.</li>
<li><a href="/scales/a-harmonic-minor">Mineur harmonique</a> \u2014 ajoute une saveur dramatique, moyen-orientale ou classique. Promptez avec \u00ab mysterious \u00bb ou \u00ab dark classical \u00bb.</li>
<li><a href="/scales/a-dorian">Dorien</a> \u2014 une gamme mineure qui sonne moins d\u00e9primante. Utilis\u00e9e en funk, rock style Santana et musique \u00e9lectronique style Daft Punk.</li>
</ul>

<h2>Astuce 6 : Structurez votre chanson comme une vraie chanson</h2>
<p>Suno r\u00e9pond aux balises de structure entre crochets. Au lieu de le laisser d\u00e9cider de la structure, indiquez-la :</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>Le pont est l\u00e0 o\u00f9 la plupart des chansons Suno s'am\u00e9liorent. Les vraies chansons utilisent le pont pour introduire un contraste harmonique \u2014 passant souvent \u00e0 un accord diff\u00e9rent ou m\u00eame bri\u00e8vement \u00e0 une tonalit\u00e9 diff\u00e9rente. M\u00eame si vous ne pouvez pas forcer Suno \u00e0 changer de tonalit\u00e9, le simple fait d'avoir la balise <code>[Bridge]</code> tend \u00e0 produire quelque chose de musicalement diff\u00e9rent des couplets et du refrain.</p>
<p>Astuce de pro : utilisez des balises d'accords diff\u00e9rentes dans votre pont. Si votre couplet utilise <code>[Am] [F] [C] [G]</code>, essayez <code>[Dm] [Em] [F] [G]</code> pour le pont. Cela donne \u00e0 Suno un \u00ab nettoyant de palais harmonique \u00bb avant le refrain final.</p>

<h2>Astuce 7 : Utilisez vos oreilles, pas seulement vos yeux</h2>
<p>Voici la m\u00e9ta-astuce qui s\u00e9pare les bons utilisateurs de Suno de tous les autres : <b>\u00e9coutez de mani\u00e8re critique ce que Suno g\u00e9n\u00e8re.</b></p>
<p>Quand vous obtenez un r\u00e9sultat, demandez-vous :</p>
<ul>
<li>La m\u00e9lodie reste-t-elle dans la tonalit\u00e9, ou s'\u00e9gare-t-elle vers des notes qui sonnent \u00ab faux \u00bb ?</li>
<li>La progression d'accords bouge-t-elle vraiment, ou r\u00e9p\u00e8te-t-elle simplement les m\u00eames deux accords ?</li>
<li>Y a-t-il de la vari\u00e9t\u00e9 dynamique \u2014 le refrain semble-t-il plus grand que le couplet ?</li>
<li>La chanson se termine-t-elle bien, ou s'arr\u00eate-t-elle simplement\u2026 comme \u00e7a ?</li>
</ul>
<p>D\u00e9velopper cette oreille prend du temps. Mais chaque fois que vous recherchez un <a href="/chords">accord</a> que vous entendez et d\u00e9couvrez ce qu'il est, ou identifiez quelle <a href="/scales">gamme</a> une m\u00e9lodie utilise, vous vous am\u00e9liorez un peu. Et cela rend chaque futur prompt Suno plus efficace.</p>

<p><b><a href="/chords">Rechercher n'importe quel accord sur Solfej \u2192</a></b></p>
<p><b><a href="/scales">Rechercher n'importe quelle gamme sur Solfej \u2192</a></b></p>

<h2>Plus de guides Suno AI</h2>
<ul>
<li><a href="/fr/blog/suno-ai-chord-progressions">Progressions d'accords Suno AI : comment contr\u00f4ler les accords jou\u00e9s par Suno</a></li>
<li><a href="/fr/blog/suno-ai-prompt-guide">Guide de prompts Suno AI : l'aide-m\u00e9moire de th\u00e9orie musicale pour de meilleures chansons</a></li>
<li><a href="/fr/blog/suno-vs-udio">Suno vs Udio : quel g\u00e9n\u00e9rateur de musique IA est meilleur en 2026 ?</a></li>
</ul>`,
  },
}
