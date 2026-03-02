module.exports = {
  "suno-ai-chord-progressions": {
    title: "Suno AI Akkordfolgen: So steuerst du wirklich, welche Akkorde Suno spielt",
    seoTitle: "Suno AI Akkordfolgen: So gibst du Akkorde in Suno vor (Anleitung 2026) | Solfej",
    description: "Lerne, wie du Akkordfolgen in Suno AI-Prompts angibst. Mit funktionierenden Beispielen gaengiger Progressionen, Tipps fuer Moll- und Dur-Tonarten und warum grundlegende Musiktheorie deine Suno-Songs 10x besser macht.",
    timeToRead: "10 Min.",
    body: `<p>Eine der haeufigsten Frustrationen mit Suno AI ist, dass man nicht praezise steuern kann, welche Akkorde gespielt werden. Du tippst "sad ballad in A minor" ein und bekommst etwas, das vage nach Moll klingt -- aber die tatsaechliche Akkordfolge ist Glueckssache.</p>
<p>Die gute Nachricht: Es gibt Wege, Suno in Richtung bestimmter Akkordfolgen zu lenken. Die noch bessere Nachricht: Ein wenig Musiktheorie-Wissen gibt dir dramatisch mehr Kontrolle ueber das Ergebnis. Hier ist alles, was 2026 funktioniert.</p>

<h2>Das Problem: Suno singt deine Akkorde, statt sie zu spielen</h2>
<p>Wenn du <code>Am - F - G - Em</code> direkt in einen Suno-Prompt eingibst, besteht eine gute Chance, dass die KI woertlich "A minor, F, G, E minor" als Text singt, anstatt diese Akkorde instrumental zu spielen.</p>
<p>Das passiert, weil Suno alles im Textfeld als zu singenden Text behandelt. Es versteht Akkordsymbole nicht nativ so, wie ein Musiker ein Lead Sheet lesen wuerde. Du musst einen Workaround finden.</p>

<h2>Methode 1: Klammer-Tags im Textfeld</h2>
<p>Die zuverlaessigste Methode ist, Akkordnamen in eckigen Klammern in deinen Text zu setzen, so:</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>Das sagt Suno: "Das sind strukturelle Tags, kein Text zum Singen." Es folgt ihnen nicht immer perfekt, aber es erhoeht die Wahrscheinlichkeit, die richtige harmonische Bewegung zu bekommen, dramatisch.</p>
<p>Du weisst nicht genau, was Am, F, G und Em eigentlich sind? Hier ist, was musikalisch passiert:</p>
<ul>
<li><a href="/chords/a-minor">Am (A-Moll)</a> -- der Tonika-Akkord, setzt die "Heimatbasis" in A-Moll</li>
<li><a href="/chords/f-major">F-Dur</a> -- die sechste Stufe, fuegt eine bittersuessse Hebung hinzu</li>
<li><a href="/chords/g-major">G-Dur</a> -- die siebte Stufe, erzeugt Vorwaertsbewegung</li>
<li><a href="/chords/e-minor">Em (E-Moll)</a> -- die fuenfte Stufe im natuerlichen Moll, erzeugt eine sanftere Aufloesung als ein <a href="/chords/e-major">Dur-V-Akkord</a></li>
</ul>
<p>Dies ist eine der haeufigsten Progressionen in Pop und Rock -- du hast sie in Hunderten von Songs gehoert.</p>

<h2>Methode 2: Nutze die Style-Box fuer harmonische Richtung</h2>
<p>Im Custom Mode von Suno akzeptiert die Style-of-Music-Box Genre- und Stimmungsbeschreibungen. Du kannst dies mit Akkordinformationen im Textfeld kombinieren:</p>
<p><b>Style-Box:</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>Text-Box:</b> Dein Text mit Klammer-Akkord-Tags</p>
<p>Die Angabe der Tonart in der Style-Box hilft Suno, in der richtigen harmonischen Umgebung zu bleiben. Wenn du "A minor key" angibst, ist es wahrscheinlicher, dass Suno Akkorde aus der <a href="/scales/a-minor">natuerlichen A-Moll-Tonleiter</a> verwendet (Am, Bdim, C, Dm, Em, F, G).</p>

<h2>Die 5 Akkordfolgen, die in Suno am besten funktionieren</h2>
<p>Suno ist mit Millionen von Songs trainiert und tendiert daher natuerlich zu Progressionen, die in populaerer Musik ueblich sind. Diese fuenf funktionieren zuverlaessig:</p>

<h3>1. I - V - vi - IV (Die "Pop-Progression")</h3>
<p>In C-Dur: <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>Dies ist die haeufigste Akkordfolge im modernen Pop. Sie steckt in "Let It Be", "No Woman No Cry", "Someone Like You" und Hunderten weiteren Songs. Wenn du Suno mit einer froehlichen Pop-Stimmung promptst, landet es oft natuerlich hier.</p>
<p><b>Suno-Prompt-Tipp:</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V (Die "Trauriger-Pop-Progression")</h3>
<p>In C-Dur: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Die gleichen Akkorde wie oben, aber der Start auf dem Moll-Akkord veraendert das Gefuehl komplett. Das findet sich ueberall in emotionalem Pop und Balladen. Der Start auf <a href="/chords/a-minor">A-Moll</a> statt <a href="/chords/c-major">C-Dur</a> verleiht ihm eine melancholische Qualitaet.</p>
<p><b>Suno-Prompt-Tipp:</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I (Die "Blues/Rock-Progression")</h3>
<p>In A-Dur: <a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>Das Rueckgrat von Rock, Country und Blues. Wenn du willst, dass Suno etwas erzeugt, das nach Classic Rock klingt, funktioniert das Prompting mit diesen drei Akkorden in der Style-Box gut. Fuer einen bluesigeren Klang verwende <a href="/chords/a-dominant-7th">A7</a>, <a href="/chords/d-dominant-7th">D7</a> und <a href="/chords/e-dominant-7th">E7</a> -- Dominant-Septakkorde sind es, die dem Blues seinen charakteristischen Klang geben.</p>
<p><b>Suno-Prompt-Tipp:</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I (Die "Jazz-Progression")</h3>
<p>In C-Dur: <a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>Die ii-V-I ist die wichtigste Progression im Jazz. Suno dazu zu bringen, das sauber umzusetzen, ist schwieriger, da erweiterte Akkorde (Septakkorde) beteiligt sind. Du kannst versuchen, mit <code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code> zu prompten, aber die Ergebnisse variieren. Suno kommt mit einfachem Jazz besser zurecht als mit komplexem Bebop.</p>
<p>Wenn du verstehen willst, warum diese Progression so wichtig ist, schau dir <a href="/chords/d-minor-7th">Dm7</a> (den ii-Akkord), <a href="/chords/g-dominant-7th">G7</a> (den V-Akkord) und <a href="/chords/c-major-7th">Cmaj7</a> (den I-Akkord) an. Die Art, wie sich die Toene zwischen diesen drei Akkorden bewegen -- die sogenannte Stimmfuehrung -- ist das, was dem Jazz seinen geschmeidigen, raffinierten Klang verleiht.</p>

<h3>5. i - VI - III - VII (Die "Epische-Moll-Progression")</h3>
<p>In A-Moll: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Das taucht staendig in filmischer, dramatischer und episch klingender Musik auf. Technisch sind es die gleichen Akkorde wie bei der traurigen Pop-Progression, aber wenn du Suno fuer "epic orchestral"- oder "cinematic trailer"-Stimmungen promptst, tendiert es dazu, sie mit viel groesserer Dynamik zu arrangieren.</p>
<p><b>Suno-Prompt-Tipp:</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>Warum die Tonart wichtig ist</h2>
<p>Wenn du Suno eine Tonart nennst -- sagen wir "in C major" -- schraenkst du die Akkorde ein, die es wahrscheinlich waehlen wird. Jede Tonart hat eine Reihe von Akkorden, die natuerlich zu ihr gehoeren. Fuer <a href="/scales/c-major">C-Dur</a> sind das:</p>
<ul>
<li>I -- <a href="/chords/c-major">C-Dur</a></li>
<li>ii -- <a href="/chords/d-minor">D-Moll</a></li>
<li>iii -- <a href="/chords/e-minor">E-Moll</a></li>
<li>IV -- <a href="/chords/f-major">F-Dur</a></li>
<li>V -- <a href="/chords/g-major">G-Dur</a></li>
<li>vi -- <a href="/chords/a-minor">A-Moll</a></li>
<li>vii° -- <a href="/chords/b-diminished">B vermindert</a></li>
</ul>
<p>Wenn Suno einen Akkord erzeugt, der nicht in dieser Liste ist, geht es "ausserhalb der Tonart" -- was beabsichtigt und cool klingen kann, oder zufaellig und schlecht. Die Angabe der Tonart in deinem Prompt reduziert die Zufaelligkeit.</p>
<p>Bei Moll-Tonarten sind die Akkorde anders. In <a href="/scales/a-minor">A-Moll</a>:</p>
<ul>
<li>i -- <a href="/chords/a-minor">A-Moll</a></li>
<li>ii° -- <a href="/chords/b-diminished">B vermindert</a></li>
<li>III -- <a href="/chords/c-major">C-Dur</a></li>
<li>iv -- <a href="/chords/d-minor">D-Moll</a></li>
<li>v -- <a href="/chords/e-minor">E-Moll</a></li>
<li>VI -- <a href="/chords/f-major">F-Dur</a></li>
<li>VII -- <a href="/chords/g-major">G-Dur</a></li>
</ul>

<h2>Stimmungswoerter zur Steuerung von Tonleitern nutzen</h2>
<p>Suno versteht Tonleiternamen nicht direkt, aber es versteht Stimmungen. Du kannst dies nutzen, um indirekt die Tonleiter zu steuern:</p>
<ul>
<li><b>"Bright" oder "happy"</b> -- tendiert dazu, Melodien in der <a href="/scales/c-major">Dur-Tonleiter</a> zu erzeugen</li>
<li><b>"Sad" oder "melancholic"</b> -- tendiert dazu, Melodien im <a href="/scales/a-minor">natuerlichen Moll</a> zu erzeugen</li>
<li><b>"Bluesy" oder "gritty"</b> -- tendiert dazu, Melodien in der <a href="/scales/a-blues">Blues-Tonleiter</a> zu erzeugen</li>
<li><b>"Mysterious" oder "dark"</b> -- tendiert dazu, Melodien im <a href="/scales/a-harmonic-minor">harmonischen Moll</a> zu erzeugen</li>
<li><b>"Funky" oder "groovy"</b> -- tendiert dazu, <a href="/scales/a-mixolydian-pentatonic">mixolydische</a> Faerbungen zu erzeugen</li>
<li><b>"Ethereal" oder "dreamy"</b> -- tendiert dazu, <a href="/scales/a-lydian-pentatonic">lydisch</a> beeinflusste Melodien zu erzeugen</li>
</ul>
<p>Das sind keine Garantien -- Suno ist probabilistisch, nicht deterministisch. Aber die Kombination eines Stimmungsworts mit einer Tonart und Klammer-Akkord-Tags gibt dir die beste Chance, das zu bekommen, was du willst.</p>

<h2>Was Suno noch nicht kann</h2>
<p>Um ehrlich ueber die Einschraenkungen zu sein:</p>
<ul>
<li><b>Exakte Akkordumkehrungen</b> -- Du kannst Suno nicht sagen, es soll einen <a href="/chords/c-major">C-Dur</a> in zweiter Umkehrung spielen. Es waehlt die Voicings selbst.</li>
<li><b>Tonartwechsel mitten im Song</b> -- Das Prompting fuer eine Modulation (Tonartwechsel) funktioniert selten zuverlaessig.</li>
<li><b>Komplexe Jazz-Harmonik</b> -- Alterierte Akkorde, Tritonus-Substitutionen und erweiterte Harmonien uebersteigen, was Suno gut beherrscht.</li>
<li><b>Bestimmte Kadenzen</b> -- Du kannst nicht zuverlaessig eine <a href="/blog/cadences">Trugsschluss-Kadenz</a> oder einen Halbschluss an einer bestimmten Stelle prompten.</li>
</ul>
<p>Fuer alles, was ueber grundlegende Pop/Rock/Folk-Harmonik hinausgeht, bekommst du bessere Ergebnisse, wenn du die Theorie selbst lernst und eine DAW verwendest.</p>

<p><b><a href="/chords">Jeden Akkord auf Solfej nachschlagen &rarr;</a></b></p>
<p><b><a href="/scales">Jede Tonleiter auf Solfej nachschlagen &rarr;</a></b></p>

<h2>Weitere Suno AI-Anleitungen</h2>
<ul>
<li><a href="/de/blog/suno-ai-prompt-guide">Suno AI Prompt-Guide: Der Musiktheorie-Spickzettel fuer bessere Songs</a></li>
<li><a href="/de/blog/suno-vs-udio">Suno vs. Udio: Welcher KI-Musikgenerator ist 2026 besser?</a></li>
<li><a href="/de/blog/suno-ai-tips">So klingen deine Suno AI-Songs professionell (Musiktheorie-Tipps)</a></li>
</ul>`,
  },

  "suno-ai-prompt-guide": {
    title: "Suno AI Prompt-Guide: Der Musiktheorie-Spickzettel fuer bessere Songs",
    seoTitle: "Suno AI Prompt-Guide: Musiktheorie-Spickzettel fuer bessere Prompts (2026) | Solfej",
    description: "Ein praktischer Leitfaden fuer bessere Suno AI-Prompts mit grundlegender Musiktheorie. Behandelt Tonarten, Tonleitern, Modi, Tempo und wie du das, was du im Kopf hoerst, in funktionierende Prompts uebersetzt.",
    timeToRead: "9 Min.",
    body: `<p>Die meisten Suno AI Prompt-Guides sagen dir, du sollst Genre-Tags und Stimmungswoerter hinzufuegen. Das ist in Ordnung, aber es kratzt nur an der Oberflaeche. Die Leute, die die besten Ergebnisse mit Suno erzielen, sind diejenigen, die ein wenig Musiktheorie kennen -- denn sie koennen beschreiben, was sie wollen, in Begriffen, auf die die KI tatsaechlich reagiert.</p>
<p>Du brauchst keinen Musikabschluss. Du brauchst etwa 10 Minuten und diesen Spickzettel.</p>

<h2>Die 4 Dinge, die Suno wirklich versteht</h2>
<p>Sunos Style-Prompt-Box reagiert auf vier Arten musikalischer Informationen. Sortiert nach Zuverlaessigkeit:</p>
<ol>
<li><b>Genre</b> -- "indie rock", "lo-fi hip hop", "jazz ballad"</li>
<li><b>Stimmung/Energie</b> -- "melancholic", "aggressive", "dreamy"</li>
<li><b>Instrumentierung</b> -- "acoustic guitar", "piano and strings", "808s"</li>
<li><b>Musikalische Parameter</b> -- Tonart, Tempo/BPM, Taktart</li>
</ol>
<p>Die meisten Leute nutzen nur 1 und 2. Das Hinzufuegen von 3 und besonders 4 ist der Punkt, an dem Musiktheorie dir einen Vorteil verschafft.</p>

<h2>Tonarten: Dur vs. Moll (und warum es wichtig ist)</h2>
<p>Das Wirkungsvollste, was du einem Suno-Prompt hinzufuegen kannst, ist die Tonart. Sie sagt der KI, welche Toene und Akkorde sie verwenden soll.</p>
<p><b>Dur-Tonarten</b> klingen hell, froehlich, aufgeloest. Wenn du <code>C major</code> promptst, wird Suno dazu tendieren, um die <a href="/scales/c-major">C-Dur-Tonleiter</a> herum aufzubauen und Akkorde wie <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a> und <a href="/chords/g-major">G</a> zu verwenden.</p>
<p><b>Moll-Tonarten</b> klingen dunkel, traurig, angespannt. Wenn du <code>A minor</code> promptst, wird Suno aus der <a href="/scales/a-minor">A-Moll-Tonleiter</a> schoepfen und Akkorde wie <a href="/chords/a-minor">Am</a>, <a href="/chords/d-minor">Dm</a> und <a href="/chords/e-minor">Em</a> verwenden.</p>
<p>Hier ist eine Kurzreferenz fuer gaengige Tonarten und das Gefuehl, das sie tendenziell erzeugen:</p>
<ul>
<li><a href="/scales/c-major">C-Dur</a> / <a href="/scales/a-minor">A-Moll</a> -- keine Vorzeichen, "neutrales" Gefuehl, sehr haeufig im Pop</li>
<li><a href="/scales/g-major">G-Dur</a> / <a href="/scales/e-minor">E-Moll</a> -- hell und offen, haeufig in Folk und Rock</li>
<li><a href="/scales/d-major">D-Dur</a> / <a href="/scales/b-minor">B-Moll</a> -- warm und resonant, grossartig fuer Akustikgitarren-Songs</li>
<li><a href="/scales/f-major">F-Dur</a> / <a href="/scales/d-minor">D-Moll</a> -- etwas dunkleres Dur, funktioniert gut fuer Balladen</li>
<li><a href="/scales/eb-major">Eb-Dur</a> / <a href="/scales/c-minor">C-Moll</a> -- reich und voll, haeufig in R&B und Soul</li>
</ul>

<h2>Tempo: BPM-Spickzettel</h2>
<p>Das Hinzufuegen einer BPM-Angabe (Beats pro Minute) zu deinem Prompt gibt dir Kontrolle ueber das Energieniveau. Suno reagiert sowohl auf exakte BPM-Zahlen als auch auf italienische Tempobezeichnungen.</p>
<ul>
<li><b>60-70 BPM (Adagio)</b> -- Sehr langsam. Balladen, Ambient, Filmmusik. <code>"Slow ballad, 65 BPM, piano"</code></li>
<li><b>70-90 BPM (Andante)</b> -- Schrittempo. Lo-fi Hip Hop, R&B. <code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
<li><b>90-110 BPM (Moderato)</b> -- Mittel. Pop, Indie, Folk. <code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
<li><b>110-130 BPM (Allegro)</b> -- Beschwingt. Pop, Rock, Dance. <code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
<li><b>130-160 BPM (Vivace)</b> -- Schnell. Punk, Drum & Bass, EDM. <code>"Punk rock, 150 BPM, aggressive"</code></li>
<li><b>160+ BPM (Presto)</b> -- Sehr schnell. Drum & Bass, Speedmetal. <code>"Drum and bass, 170 BPM, dark"</code></li>
</ul>

<h2>Modi: Jenseits von Dur und Moll</h2>
<p>Modi sind Tonleitern, die jeweils eine eigene Stimmung haben. Suno reagiert nicht immer direkt auf Modusnamen, aber du kannst es mit Stimmungswoertern lenken:</p>
<ul>
<li><b><a href="/scales/c-major">Ionisch</a> (Dur-Tonleiter)</b> -- froehlich, hell &rarr; Prompt: <code>"bright, uplifting, major key"</code></li>
<li><b><a href="/scales/c-dorian">Dorisch</a></b> -- Moll, aber mit hoffnungsvoller Qualitaet &rarr; Prompt: <code>"minor key, slightly funky, Santana-esque"</code></li>
<li><b><a href="/scales/c-phrygian">Phrygisch</a></b> -- Spanischer/nahhoestlicher Charakter &rarr; Prompt: <code>"Spanish guitar, dark, flamenco-influenced"</code></li>
<li><b><a href="/scales/c-lydian-pentatonic">Lydisch</a></b> -- traeumerisch, schwebend, aetherisch &rarr; Prompt: <code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
<li><b><a href="/scales/c-mixolydian-pentatonic">Mixolydisch</a></b> -- bluesig, rockig, leicht unaufgeloest &rarr; Prompt: <code>"classic rock, bluesy, Grateful Dead"</code></li>
<li><b><a href="/scales/a-minor">Aeolisch</a> (natuerliches Moll)</b> -- traurig, dunkel &rarr; Prompt: <code>"sad, dark, melancholic, minor key"</code></li>
</ul>
<p>Die zentrale Erkenntnis: Jeder Modus ist einfach eine regulaere Tonleiter, die auf einem anderen Ton beginnt. <a href="/scales/c-dorian">C Dorisch</a> verwendet die gleichen Toene wie <a href="/scales/bb-major">Bb-Dur</a>, klingt aber voellig anders, weil der "Grundton" C statt Bb ist. Wenn du tiefer einsteigen willst, schau dir jede dieser Tonleitern auf Solfej an.</p>

<h2>Alles zusammenfuegen: Prompt-Vorlagen</h2>
<p>Hier sind fertige Vorlagen, die Genre, Stimmung, Tonart und Tempo kombinieren:</p>

<h3>Traurige akustische Ballade</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>Das funktioniert, weil: <a href="/scales/a-minor">A-Moll</a> eine bequeme Tonart fuer Gitarre ist, 75 BPM langsam genug fuer eine Ballade ist und die Stimmungswoerter die Moll-Tonalitaet verstaerken.</p>

<h3>Froehlicher Pop-Song</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>Das funktioniert, weil: <a href="/scales/c-major">C-Dur</a> die hellste, "einfachste" Tonart ist -- keine Vorzeichen -- und 118 BPM genau im Pop-Sweetspot liegt.</p>

<h3>Dunkler Trap-Beat</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>Das funktioniert, weil: <a href="/scales/d-minor">D-Moll</a> eine gaengige Tonart fuer Trap ist (sie passt gut zum 808-Bass) und 140 BPM Standard-Trap-Tempo ist.</p>

<h3>Jazz-Standard</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>Das funktioniert, weil: <a href="/scales/bb-major">Bb-Dur</a> die haeufigste Jazz-Tonart ist (Blechblasinstrumente sind in Bb gestimmt) und die Angabe von "walking bass" und "swing" Suno hilft, das rhythmische Gefuehl richtig hinzubekommen.</p>

<h3>Lo-fi Study Beat</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>Das funktioniert, weil: <a href="/scales/f-major">F-Dur</a> eine warme, leicht gedaempfte Qualitaet hat, 85 BPM der Lo-fi-Sweetspot ist und "jazzy chords" Suno in Richtung <a href="/chords/f-major-7th">Major-7</a>- und <a href="/chords/f-dominant-7th">Dominant-7</a>-Voicings drueckt.</p>

<h2>Haeufige Fehler</h2>
<ul>
<li><b>Prompt ueberladung</b> -- Packe nicht 15 Beschreibungen in die Style-Box. Suno gewichtet die ersten Woerter am staerksten. Fuehre mit Genre und Tonart.</li>
<li><b>Widerspruechliche Anweisungen</b> -- "Happy, bright, D minor" ist widerspruechlich. <a href="/scales/d-minor">D-Moll</a> ist eine traurige Tonart. Passe deine Stimmungswoerter an deine Tonart an.</li>
<li><b>BPM ignorieren</b> -- Wenn du "energetic" promptst, aber kein Tempo angibst, koennte Suno dir einen langsamen Track liefern. Gib fuer energieabhaengige Genres immer BPM an.</li>
<li><b>Exakte Reproduktion erwarten</b> -- Suno ist probabilistisch. Es bringt dich in die Naehe dessen, was du fragst, nicht zu einer exakten Reproduktion. Generiere 3-4 Versionen und waehle die beste.</li>
</ul>

<h2>Der wahre Vorteil: Verstehen, was du hoerst</h2>
<p>Der groesste Grund, grundlegende Musiktheorie zu lernen, ist nicht, bessere Suno-Prompts zu schreiben -- es ist zu verstehen, was Suno dir zurueckgibt. Wenn du einen Track generierst und denkst "das klingt cool", und du sagen kannst "das liegt daran, dass es eine <a href="/scales/c-dorian">dorische</a> Tonleiter ueber einem <a href="/chords/c-minor-7th">Moll-7-Akkord</a> verwendet", dann kannst du diesen Klang absichtlich reproduzieren, nicht durch Glueck.</p>
<p>Lerne mindestens diese drei Dinge:</p>
<ul>
<li>Den Unterschied zwischen <a href="/chords/c-major">Dur</a>- und <a href="/chords/c-minor">Moll</a>-Akkorden (und warum sie unterschiedlich klingen)</li>
<li>Was eine <a href="/scales/c-major">Tonleiter</a> ist und wie sie bestimmt, welche Toene in eine Tonart "passen"</li>
<li>Was <a href="/blog/cadences">Kadenzen</a> sind -- sie sind der Grund, warum manche Schluessse endgueltig und manche unaufgeloest klingen</li>
</ul>

<p><b><a href="/chords">Jeden Akkord auf Solfej nachschlagen &rarr;</a></b></p>
<p><b><a href="/scales">Jede Tonleiter auf Solfej nachschlagen &rarr;</a></b></p>

<h2>Weitere Suno AI-Anleitungen</h2>
<ul>
<li><a href="/de/blog/suno-ai-chord-progressions">Suno AI Akkordfolgen: So steuerst du, welche Akkorde Suno spielt</a></li>
<li><a href="/de/blog/suno-vs-udio">Suno vs. Udio: Welcher KI-Musikgenerator ist 2026 besser?</a></li>
<li><a href="/de/blog/suno-ai-tips">So klingen deine Suno AI-Songs professionell (Musiktheorie-Tipps)</a></li>
</ul>`,
  },

  "suno-vs-udio": {
    title: "Suno vs. Udio: Welcher KI-Musikgenerator ist 2026 besser?",
    seoTitle: "Suno vs. Udio 2026: Welcher KI-Musikgenerator ist wirklich besser? | Solfej",
    description: "Ein ehrlicher Vergleich von Suno und Udio im Jahr 2026. Wir testen beide bei Gesang, Akkordfolgen, Genre-Genauigkeit und musikalischer Qualitaet -- mit echter Musiktheorie-Analyse.",
    timeToRead: "9 Min.",
    body: `<p>Suno und Udio sind die beiden groessten KI-Musikgeneratoren im Jahr 2026. Bei beiden gibst du einen Text-Prompt ein und bekommst einen kompletten Song zurueck. Aber sie produzieren merklich unterschiedliche Ergebnisse -- und welcher "besser" ist, haengt davon ab, was du erreichen willst.</p>
<p>Die meisten Vergleiche konzentrieren sich auf Audioqualitaet und Preise. Dieser hier konzentriert sich auf etwas Nuetzlicheres: was jedes Tool tatsaechlich mit Musiktheorie macht und wo jedes an seine Grenzen stoesst.</p>

<h2>Schnelle Vergleichstabelle</h2>
<table>
<thead>
<tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
</thead>
<tbody>
<tr><td><b>Geschwindigkeit</b></td><td>~30 Sekunden pro Song</td><td>~90 Sekunden pro Song</td></tr>
<tr><td><b>Gesangsqualitaet</b></td><td>Natuerlicher, bessere Emotion</td><td>Bessere Diktion, sauberer Mix</td></tr>
<tr><td><b>Instrumentalqualitaet</b></td><td>Gut, kann aber komprimiert klingen</td><td>Bessere Trennung, sauberer Mix</td></tr>
<tr><td><b>Akkordgenauigkeit</b></td><td>Folgt Klammer-Tags ~60% der Zeit</td><td>Etwas besser beim Folgen von Akkorden</td></tr>
<tr><td><b>Genre-Bandbreite</b></td><td>Breit, am besten bei Pop/Rock/Hip-Hop</td><td>Breit, besser bei Jazz/Klassik</td></tr>
<tr><td><b>Gratis-Stufe</b></td><td>10 Songs/Tag</td><td>Begrenzte Generierungen/Monat</td></tr>
<tr><td><b>Max. Laenge</b></td><td>4 Minuten</td><td>Erweiterbar auf 15+ Minuten</td></tr>
</tbody>
</table>

<h2>Gesang: Suno gewinnt</h2>
<p>Suno produziert emotional ausdrucksvolleren Gesang. Die KI erfasst Hauchigkeit, Stimmbrueche und dynamische Veraenderungen, die naeher an einem echten Saenger klingen. Udios Gesang ist technisch sauberer, klingt aber oft roboterhafter -- wie eine sehr polierte MIDI-Stimme.</p>
<p>Fuer Genres, in denen der Gesangscharakter wichtig ist -- Soul, Indie, Country -- ist Suno der klare Gewinner. Fuer Genres, in denen makellose, produzierte Stimmen erwartet werden -- EDM, Pop-Produktion -- ist der Unterschied geringer.</p>

<h2>Instrumente: Udio gewinnt</h2>
<p>Udio produziert eine bessere Instrumententrennung. In einem Suno-Track koennen Gitarre, Bass, Schlagzeug und Gesang so ineinander ueberlaufen, dass es "matschig" klingt. Udios Ausgabe bei 48 kHz klingt eher wie ein professioneller Mix, bei dem man jedes Instrument deutlich hoeren kann.</p>
<p>Das ist am wichtigsten bei komplexen Arrangements. Wenn du einen einfachen Track mit Akustikgitarre und Gesang generierst, klingen beide gut. Wenn du versuchst, ein volles Band-Arrangement mit mehreren Instrumenten zu generieren, handhabt Udio die Trennung besser.</p>

<h2>Akkordfolgen: Wie jedes Tool mit Harmonik umgeht</h2>
<p>Hier wird es aus musiktheoretischer Sicht interessant. Beide Tools sind mit riesigen Datensaetzen populaerer Musik trainiert, sodass beide zu gaengigen <a href="/chords">Akkordfolgen</a> tendieren. Aber sie gehen unterschiedlich mit harmonischer Komplexitaet um.</p>

<h3>Einfache Progressionen (I-IV-V-I, vi-IV-I-V)</h3>
<p>Beide Tools koennen das gut. Wenn du einen Pop-Song in <a href="/scales/c-major">C-Dur</a> promptst, liefern dir beide zuverlaessig Progressionen aus <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a>, <a href="/chords/g-major">G</a> und <a href="/chords/a-minor">Am</a>. Hier gibt es keinen echten Gewinner.</p>

<h3>Jazz-Harmonik (ii-V-I, erweiterte Akkorde)</h3>
<p>Udio kommt mit Jazz besser zurecht. Wenn man fuer Jazz promptet, ist es bei Udio wahrscheinlicher, dass tatsaechliche <a href="/chords/d-minor-7th">Moll-7</a>- und <a href="/chords/c-major-7th">Major-7</a>-Voicings erzeugt werden, statt vereinfachter Dreiklaenge. Suno neigt dazu, Jazz-Prompts zu "verpopen" -- man bekommt etwas, das vage jazzig klingt, aber einfachere Harmonik verwendet.</p>
<p>Wenn du einen Track willst, der wirklich nach einer <a href="/chords/d-minor-7th">Dm7</a> &rarr; <a href="/chords/g-dominant-7th">G7</a> &rarr; <a href="/chords/c-major-7th">Cmaj7</a>-Progression klingt, ist Udio eher in der Lage, das zu liefern.</p>

<h3>Moll-Tonart-Genauigkeit</h3>
<p>Beide Tools haben manchmal Schwierigkeiten, in einer Moll-Tonart zu bleiben. Du promptst "sad, A minor" und bekommst einen Abschnitt, der ploetzlich nach <a href="/scales/a-major">A-Dur</a> springt. Das passiert bei Suno haeufiger als bei Udio, besonders bei laengeren Generierungen.</p>
<p>Das Problem ist, dass beide Tools mit Songs trainiert sind, die haeufig Dur und Moll mischen (die meiste Popmusik tut das), sodass sie nicht immer eine strikte <a href="/scales/a-minor">Moll-Tonleiter</a> durchgehend beibehalten.</p>

<h3>Tonartwechsel</h3>
<p>Keines der beiden Tools kommt gut mit geprompten Tonartwechseln zurecht. Wenn du <code>[Key change to Eb major]</code> in deinen Text schreibst, ignorieren beide das groesstenteils. Suno produziert gelegentlich versehentliche Tonartwechsel (besonders im Bridge-Teil), waehrend Udio dazu neigt, sturrer in einer Tonart zu bleiben.</p>

<h2>Genre-Genauigkeit</h2>
<h3>Wo Suno besser ist:</h3>
<ul>
<li><b>Pop / Top 40</b> -- Suno trifft den modernen Pop-Sound, komplett mit den richtigen <a href="/chords">Akkord-Voicings</a> und dem passenden Produktionsstil</li>
<li><b>Hip-Hop / Trap</b> -- Besserer 808-Bass, ueberzeugendere Hi-Hat-Patterns, erfasst die <a href="/scales/d-minor">dunkle Moll-Tonart</a>-Aesthetik gut</li>
<li><b>Rock</b> -- Ueberzeugendere verzerrte Gitarren, besser beim Einfangen der <a href="/chords/a-power-chord">Powerchord</a>-Energie</li>
<li><b>Country</b> -- Besser beim stimmlichen Twang und der <a href="/scales/g-major">Dur-Tonart</a>-Offenheit, die Country ausmacht</li>
</ul>

<h3>Wo Udio besser ist:</h3>
<ul>
<li><b>Jazz</b> -- Besser bei <a href="/chords/c-major-7th">erweiterten Akkorden</a>, Walking-Bass-Linien und Swing-Gefuehl</li>
<li><b>Klassik / Orchester</b> -- Bessere Instrumententrennung bedeutet, dass Streicher, Blaeser und Holzblaeser realistischer klingen</li>
<li><b>Elektronik / Ambient</b> -- Besser bei subtiler Klanggestaltung und sich entwickelnden Texturen</li>
<li><b>Weltmusik</b> -- Eher in der Lage, authentisch klingende nicht-westliche <a href="/scales">Tonleitern</a> und Instrumente einzubauen</li>
</ul>

<h2>Prompting: Verschiedene Strategien</h2>
<p>Weil die Tools unterschiedliche Dinge gewichten, sollte deine Prompting-Strategie sich unterscheiden:</p>
<p><b>Fuer Suno:</b> Fuehre mit Genre, dann Stimmung, dann Tonart. Suno gewichtet die ersten Woerter am staerksten. Beispiel: <code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>Fuer Udio:</b> Sei spezifischer bei Instrumentierung und Produktionsstil. Udio reagiert besser auf detaillierte Klangbeschreibungen. Beispiel: <code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>Preise (2026)</h2>
<ul>
<li><b>Suno Gratis:</b> 50 Credits/Tag (10 Songs), nicht-kommerzielle Nutzung</li>
<li><b>Suno Pro:</b> 10 $/Monat, 500 Songs/Monat, kommerzielle Lizenz</li>
<li><b>Udio Gratis:</b> Begrenzte Generierungen pro Monat</li>
<li><b>Udio Standard:</b> 10 $/Monat, aehnlich wie Suno Pro</li>
</ul>
<p>Die Preise sind aehnlich. Die Gratis-Stufe ist am wichtigsten fuer Gelegenheitsnutzer, und Sunos taegliche Credit-Auffrischung ist grosszuegiger fuer Experimente.</p>

<h2>Das Fazit</h2>
<ul>
<li><b>Nutze Suno, wenn:</b> Du schnelle, eingaengige Pop/Rock/Hip-Hop-Tracks mit gutem Gesang willst. Es ist schneller, leichter zu prompten und die Gratis-Stufe ist besser.</li>
<li><b>Nutze Udio, wenn:</b> Du hoehere Audioqualitaet, bessere Instrumententrennung brauchst oder mit Jazz/Klassik/Elektronik-Genres arbeitest, bei denen Nuancen wichtig sind.</li>
<li><b>Nutze beide, wenn:</b> Du es ernst meinst mit KI-Musik. Generiere den gleichen Prompt auf beiden und vergleiche. Du wirst viel darueber lernen, wie jedes Tool Harmonik und Arrangement unterschiedlich interpretiert.</li>
</ul>
<p>Und unabhaengig davon, welches Tool du verwendest -- lerne einige grundlegende <a href="/chords">Akkorde</a> und <a href="/scales">Tonleitern</a>. Zu wissen, was du verlangst (und was du zurueckbekommst), ist der Unterschied zwischen zufaelligem Output und beabsichtigter Musik.</p>

<p><b><a href="/chords">Jeden Akkord auf Solfej nachschlagen &rarr;</a></b></p>
<p><b><a href="/scales">Jede Tonleiter auf Solfej nachschlagen &rarr;</a></b></p>

<h2>Weitere Suno AI-Anleitungen</h2>
<ul>
<li><a href="/de/blog/suno-ai-chord-progressions">Suno AI Akkordfolgen: So steuerst du, welche Akkorde Suno spielt</a></li>
<li><a href="/de/blog/suno-ai-prompt-guide">Suno AI Prompt-Guide: Der Musiktheorie-Spickzettel fuer bessere Songs</a></li>
<li><a href="/de/blog/suno-ai-tips">So klingen deine Suno AI-Songs professionell (Musiktheorie-Tipps)</a></li>
</ul>`,
  },

  "suno-ai-tips": {
    title: "So klingen deine Suno AI-Songs professionell (Musiktheorie-Tipps)",
    seoTitle: "So klingen Suno AI-Songs professionell: Musiktheorie-Tipps (2026) | Solfej",
    description: "Deine Suno AI-Songs klingen amateurhaft, weil dir grundlegende Musiktheorie fehlt. Hier sind die konkreten Konzepte, die deine KI-generierte Musik dramatisch besser klingen lassen.",
    timeToRead: "8 Min.",
    body: `<p>Du hast 50 Songs in Suno generiert. Einige klingen passabel. Die meisten klingen generisch. Ein paar klingen richtig schlecht. Das Problem ist nicht Suno -- es ist, dass du blind promptst.</p>
<p>Der Unterschied zwischen einem generischen Suno-Output und etwas, das tatsaechlich wie ein echter Song klingt, laeuft auf das Verstaendnis einer Handvoll Musiktheorie-Konzepte hinaus. Hier sind die, die am meisten zaehlen.</p>

<h2>Tipp 1: Hoer auf, zufaellige Tonarten zu waehlen</h2>
<p>Die meisten Suno-Nutzer geben entweder keine Tonart an oder waehlen eine zufaellig. Das ist wie Kochen, ohne zu wissen, welche Geschmaecker zusammenpassen.</p>
<p>Jede Tonart hat eine Persoenlichkeit. Das ist kein Hokuspokus -- es liegt daran, dass verschiedene Tonarten auf Instrumenten und im menschlichen Stimmumfang unterschiedlich liegen:</p>
<ul>
<li><a href="/scales/c-major">C-Dur</a> -- Die "leere Leinwand". Klar und einfach, keine Vorzeichen. Am besten fuer: geradlinigen Pop.</li>
<li><a href="/scales/g-major">G-Dur</a> -- Offen und hell. Gitarrenfreundlich (viele leere Saiten). Am besten fuer: Folk, Country, Rock.</li>
<li><a href="/scales/e-minor">E-Moll</a> -- Dunkel und kraftvoll. Die haeufigste Tonart im Rock. Am besten fuer: Rock, Metal, dramatischen Pop.</li>
<li><a href="/scales/a-minor">A-Moll</a> -- Traurig, aber zugaenglich. Am besten fuer: Balladen, Indie, Singer-Songwriter.</li>
<li><a href="/scales/d-minor">D-Moll</a> -- Tief und broodend. Haeufig in Hip-Hop und Trap. Am besten fuer: Trap, Dark R&B, Filmmusik.</li>
<li><a href="/scales/bb-major">Bb-Dur</a> -- Warm und reich. Die Standard-Jazz-Tonart. Am besten fuer: Jazz, Soul, R&B.</li>
</ul>
<p><b>Die Loesung:</b> Passe deine Tonart an dein Genre an. <code>G major</code> fuer einen Folk-Song oder <code>D minor</code> fuer einen Trap-Beat zu prompten, laesst das Ergebnis sofort authentischer klingen.</p>

<h2>Tipp 2: Verstehe, warum deine Songs alle gleich klingen</h2>
<p>Wenn all deine Suno-Songs aehnlich klingen, liegt es daran, dass sie alle die gleiche Akkordfolge verwenden. Suno greift standardmaessig auf die gaengigsten Pop-Progressionen zurueck, wenn du keine Richtung vorgibst:</p>
<ul>
<li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> (der "Vier-Akkorde-Song")</li>
<li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> (gleiche Akkorde, Moll-Start)</li>
</ul>
<p>Diese Progressionen dominieren die Popmusik, daher tendiert Suno standardmaessig dazu. Um auszubrechen, musst du andere Progressionen prompten.</p>
<p><b>Die Loesung:</b> Fuege Klammer-Akkord-Tags in deinen Text ein, um Suno in Richtung weniger gaengiger Progressionen zu lenken. Probiere:</p>
<ul>
<li><code>[Dm] [G] [C] [Am]</code> -- ii-V-I-vi, haeufig in Soul und Jazz-Pop</li>
<li><code>[Am] [Em] [F] [Dm]</code> -- i-v-VI-iv, dunkler und dramatischer</li>
<li><code>[C] [Em] [Am] [G]</code> -- I-iii-vi-V, verwendet in 60er/70er-Rock (Beatles-artig)</li>
</ul>
<p>Du weisst nicht, was diese roemischen Ziffern bedeuten? Jede Zahl steht fuer einen Akkord, der auf dieser Stufe der Tonleiter aufgebaut ist. In <a href="/scales/c-major">C-Dur</a> ist I = <a href="/chords/c-major">C</a>, ii = <a href="/chords/d-minor">Dm</a>, iii = <a href="/chords/e-minor">Em</a>, IV = <a href="/chords/f-major">F</a>, V = <a href="/chords/g-major">G</a>, vi = <a href="/chords/a-minor">Am</a>.</p>

<h2>Tipp 3: Nutze Spannung und Aufloesung</h2>
<p>Professionelle Songs bleiben nicht einfach auf einem Energieniveau -- sie bauen Spannung auf und loesen sie dann. Genau darum geht es bei <a href="/blog/cadences">Kadenzen</a>.</p>
<p>Das wichtigste Spannungs-Aufloesungs-Muster in der Musik ist <b>V &rarr; I</b>: der <a href="/chords/g-major">G-Dur-Akkord</a>, der sich nach <a href="/chords/c-major">C-Dur</a> aufloest (in der Tonart C). Das nennt man eine <a href="/blog/cadences">authentische Kadenz</a>, und es ist der "befriedigende Schluss"-Klang, den du in Tausenden von Songs gehoert hast.</p>
<p>Du kannst Suno nicht direkt fuer Kadenzen prompten, aber du kannst sie in deine Klammer-Akkord-Tags einbauen. Beende deinen Refrain mit <code>[G] [C]</code> fuer eine starke Aufloesung oder <code>[G] [Am]</code> fuer eine Ueberraschung, die den Hoerer in der Schwebe laesst (das ist ein <a href="/blog/cadences">Trugschluss</a>).</p>
<p>Weitere Spannungswerkzeuge:</p>
<ul>
<li><b><a href="/chords/c-dominant-7th">Dominant-Septakkorde</a></b> -- Das Hinzufuegen einer Septime zum V-Akkord (<a href="/chords/g-dominant-7th">G7</a> statt <a href="/chords/g-major">G</a>) verstaerkt den Zug zur Aufloesung. Grossartig fuer Blues und Jazz.</li>
<li><b><a href="/chords/c-suspended-4th">Vorhaltsakkorde</a></b> -- Sus4-Akkorde erzeugen ein haengendes, unaufgeloestes Gefuehl. Verwende <code>[Csus4] [C]</code> fuer einen subtilen "Oeffnungs"-Effekt.</li>
<li><b><a href="/chords/c-minor">Moll-Akkorde</a> in Dur-Tonarten</b> -- Ein unerwarteter <a href="/chords/a-minor">Am</a> in einem <a href="/scales/c-major">C-Dur</a>-Kontext erzeugt sofortige emotionale Tiefe.</li>
</ul>

<h2>Tipp 4: Passe dein Tempo an dein Genre an</h2>
<p>Falsches Tempo ist eine der einfachsten Moeglichkeiten, einen Suno-Song falsch klingen zu lassen. Jedes Genre hat einen natuerlichen Tempo-Bereich. Wenn dein "chilliger Lo-fi-Beat" bei 140 BPM liegt, wird er nicht chill klingen, egal welche anderen Woerter du verwendest.</p>
<ul>
<li><b>Ballade:</b> 60-80 BPM</li>
<li><b>R&B / Neo-Soul:</b> 70-90 BPM</li>
<li><b>Lo-fi Hip Hop:</b> 75-90 BPM</li>
<li><b>Pop:</b> 100-125 BPM</li>
<li><b>Rock:</b> 110-140 BPM</li>
<li><b>EDM / House:</b> 120-130 BPM</li>
<li><b>Drum & Bass:</b> 160-180 BPM</li>
<li><b>Punk:</b> 150-180 BPM</li>
</ul>
<p><b>Die Loesung:</b> Fuege immer BPM in deinen Style-Prompt ein. <code>Lo-fi hip hop, 82 BPM, chill</code> wird viel bessere Ergebnisse liefern als nur <code>Lo-fi hip hop, chill</code>.</p>

<h2>Tipp 5: Lerne die Blues-Tonleiter (im Ernst)</h2>
<p>Wenn du nur eine Tonleiter fuer Suno-Prompts lernst, lerne die <a href="/scales/a-blues">Blues-Tonleiter</a>. Sie ist die Grundlage von Rock, Blues, R&B, Hip-Hop und einem riesigen Teil der Popmusik.</p>
<p>Die <a href="/scales/a-blues">A-Blues-Tonleiter</a> ist: A - C - D - Eb - E - G. Sechs Toene. Das war's.</p>
<p>Warum das fuer Suno wichtig ist: Wenn du fuer bluesige, soulige oder rauhe Genres promptst und Suno eine Melodie generiert, greift es oft auf diese Tonleiter zurueck. Wenn du sie erkennst, kannst du feststellen, ob Suno dir gegeben hat, was du verlangt hast. Wenn die Melodie "zu froehlich" fuer einen Blues-Prompt klingt, bedeutet das, dass Suno stattdessen auf eine <a href="/scales/a-major">Dur-Tonleiter</a> ausgewichen ist -- regeneriere.</p>
<p>Weitere nuetzliche Tonleitern zum Erkennen:</p>
<ul>
<li><a href="/scales/a-major-pentatonic">Dur-Pentatonik</a> -- die "froehliche" Version der Blues-Tonleiter. Verwendet in Pop, Country und klassischen Rock-Soli.</li>
<li><a href="/scales/a-harmonic-minor">Harmonisches Moll</a> -- fuegt einen dramatischen, nahhoestlichen oder klassischen Charakter hinzu. Prompte mit "mysterious" oder "dark classical".</li>
<li><a href="/scales/a-dorian">Dorisch</a> -- eine Moll-Tonleiter, die weniger deprimierend klingt. Verwendet in Funk, Santana-artigem Rock und Daft-Punk-artiger elektronischer Musik.</li>
</ul>

<h2>Tipp 6: Strukturiere deinen Song wie einen echten Song</h2>
<p>Suno reagiert auf Struktur-Tags in Klammern. Anstatt es die Struktur entscheiden zu lassen, sag es ihm:</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>Die Bridge ist der Punkt, an dem die meisten Suno-Songs besser werden. Echte Songs nutzen die Bridge, um harmonischen Kontrast einzufuehren -- oft mit einem Wechsel zu einem anderen Akkord oder sogar kurz in eine andere Tonart. Auch wenn du Suno nicht zwingen kannst, die Tonart zu wechseln, tendiert allein der <code>[Bridge]</code>-Tag dazu, etwas musikalisch Anderes als die Strophen und den Refrain zu produzieren.</p>
<p>Profi-Tipp: Verwende andere Akkord-Tags in deiner Bridge. Wenn deine Strophe <code>[Am] [F] [C] [G]</code> verwendet, probiere <code>[Dm] [Em] [F] [G]</code> fuer die Bridge. Das gibt Suno einen harmonischen "Gaumenreiniger" vor dem letzten Refrain.</p>

<h2>Tipp 7: Benutze deine Ohren, nicht nur deine Augen</h2>
<p>Dies ist der Meta-Tipp, der gute Suno-Nutzer von allen anderen unterscheidet: <b>Hoere kritisch zu, was Suno generiert.</b></p>
<p>Wenn du ein Ergebnis zurueckbekommst, frag dich:</p>
<ul>
<li>Bleibt die Melodie in der Tonart, oder wandert sie in Toene ab, die "falsch" klingen?</li>
<li>Bewegt sich die Akkordfolge tatsaechlich, oder wiederholt sie nur die gleichen zwei Akkorde?</li>
<li>Gibt es dynamische Vielfalt -- fuehlt sich der Refrain groesser an als die Strophe?</li>
<li>Endet der Song gut, oder hoert er einfach... auf?</li>
</ul>
<p>Dieses Gehoer zu entwickeln, braucht Zeit. Aber jedes Mal, wenn du einen <a href="/chords">Akkord</a> nachschlaegst, den du hoerst, und herausfindest, was er ist, oder erkennst, welche <a href="/scales">Tonleiter</a> eine Melodie verwendet, wirst du ein bisschen besser darin. Und das macht jeden zukuenftigen Suno-Prompt effektiver.</p>

<p><b><a href="/chords">Jeden Akkord auf Solfej nachschlagen &rarr;</a></b></p>
<p><b><a href="/scales">Jede Tonleiter auf Solfej nachschlagen &rarr;</a></b></p>

<h2>Weitere Suno AI-Anleitungen</h2>
<ul>
<li><a href="/de/blog/suno-ai-chord-progressions">Suno AI Akkordfolgen: So steuerst du, welche Akkorde Suno spielt</a></li>
<li><a href="/de/blog/suno-ai-prompt-guide">Suno AI Prompt-Guide: Der Musiktheorie-Spickzettel fuer bessere Songs</a></li>
<li><a href="/de/blog/suno-vs-udio">Suno vs. Udio: Welcher KI-Musikgenerator ist 2026 besser?</a></li>
</ul>`,
  },
}
