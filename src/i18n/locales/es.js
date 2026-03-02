module.exports = {
  "suno-ai-chord-progressions": {
    title: "Progresiones de Acordes en Suno AI: Como Controlar Realmente los Acordes que Toca Suno",
    seoTitle: "Progresiones de Acordes en Suno AI: Como Especificar Acordes en Suno (Guia 2026) | Solfej",
    description: "Aprende a especificar progresiones de acordes en los prompts de Suno AI. Incluye ejemplos funcionales con progresiones comunes, consejos para tonalidades menores y mayores, y por que la teoria musical basica mejora tus canciones de Suno 10 veces.",
    timeToRead: "10 min",
    body: `
<p>Una de las frustraciones mas comunes con Suno AI es que no puedes controlar con precision que acordes toca. Escribes "balada triste en A minor" y obtienes algo que vagamente suena menor, pero la progresion de acordes real es cuestion de suerte.</p>
<p>La buena noticia: hay formas de guiar a Suno hacia progresiones de acordes especificas. La mejor noticia: entender un poco de teoria musical te da un control dramaticamente mayor sobre el resultado. Aqui tienes todo lo que funciona en 2026.</p>

<h2>El Problema: Suno Canta Tus Acordes en Vez de Tocarlos</h2>
<p>Si escribes <code>Am - F - G - Em</code> directamente en un prompt de Suno, hay bastantes probabilidades de que la IA literalmente cante "A minor, F, G, E minor" como letra en lugar de tocar esos acordes instrumentalmente.</p>
<p>Esto ocurre porque Suno trata todo en el campo de letras como texto para cantar. No entiende nativamente los simbolos de acordes de la forma en que lo haria un musico leyendo una partitura. Necesitas encontrar la forma de evitar esto.</p>

<h2>Metodo 1: Etiquetas entre Corchetes en el Campo de Letras</h2>
<p>El metodo mas fiable es colocar los nombres de acordes entre corchetes dentro de tus letras, asi:</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>Esto le dice a Suno "estas son etiquetas estructurales, no letras para cantar." No siempre las sigue perfectamente, pero aumenta dramaticamente las probabilidades de obtener el movimiento armonico correcto.</p>
<p>No sabes que son Am, F, G y Em? Esto es lo que ocurre musicalmente:</p>
<ul>
    <li><a href="/chords/a-minor">Am (A minor)</a> — el acorde tonico, establece la "base" en A minor</li>
    <li><a href="/chords/f-major">F major</a> — el sexto grado, agrega un toque agridulce</li>
    <li><a href="/chords/g-major">G major</a> — el septimo grado, crea impulso hacia adelante</li>
    <li><a href="/chords/e-minor">Em (E minor)</a> — el quinto grado en la escala menor natural, crea una resolucion mas suave que la que daria un <a href="/chords/e-major">acorde V mayor</a></li>
</ul>
<p>Esta es una de las progresiones mas comunes en pop y rock — la has escuchado en cientos de canciones.</p>

<h2>Metodo 2: Usa la Casilla de Estilo para la Direccion Armonica</h2>
<p>En el Modo Personalizado de Suno, la casilla de Estilo de Musica acepta descriptores de genero y estado de animo. Puedes combinar esto con informacion de acordes en las letras:</p>
<p><b>Casilla de estilo:</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>Casilla de letras:</b> Tus letras con etiquetas de acordes entre corchetes</p>
<p>Especificar la tonalidad en la casilla de estilo ayuda a Suno a mantenerse en el vecindario armonico correcto. Si dices "A minor key", Suno tendra mas probabilidades de usar acordes de la <a href="/scales/a-minor">escala de A natural minor</a> (Am, Bdim, C, Dm, Em, F, G).</p>

<h2>Las 5 Progresiones de Acordes que Mejor Funcionan en Suno</h2>
<p>Suno esta entrenado con millones de canciones, asi que gravita naturalmente hacia progresiones comunes en la musica popular. Estas cinco funcionan de forma fiable:</p>

<h3>1. I - V - vi - IV (La "Progresion Pop")</h3>
<p>En C major: <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>Esta es la progresion de acordes mas comun en el pop moderno. Esta en "Let It Be", "No Woman No Cry", "Someone Like You" y cientos mas. Si le pides a Suno un ambiente pop animado, a menudo llegara aqui de forma natural.</p>
<p><b>Consejo para el prompt de Suno:</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V (La "Progresion Pop Triste")</h3>
<p>En C major: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Los mismos acordes que arriba, pero comenzar en el acorde menor cambia completamente la sensacion. Esta por todas partes en el pop emocional y las baladas. Comenzar en <a href="/chords/a-minor">A minor</a> en lugar de <a href="/chords/c-major">C major</a> le da una cualidad melancolica.</p>
<p><b>Consejo para el prompt de Suno:</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I (La "Progresion Blues/Rock")</h3>
<p>En A major: <a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>La columna vertebral del rock, el country y el blues. Si quieres que Suno genere algo que suene a rock clasico, usar estos tres acordes en la casilla de estilo funciona bien. Para un sonido mas blusero, usa <a href="/chords/a-dominant-7th">A7</a>, <a href="/chords/d-dominant-7th">D7</a> y <a href="/chords/e-dominant-7th">E7</a> — los acordes de septima dominante son los que le dan al blues su sonido caracteristico.</p>
<p><b>Consejo para el prompt de Suno:</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I (La "Progresion Jazz")</h3>
<p>En C major: <a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>El ii-V-I es la progresion mas importante del jazz. Lograr que Suno lo clave es mas dificil ya que involucra acordes extendidos (septimas). Puedes intentar con el prompt <code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code> pero los resultados varian. Suno maneja mejor el jazz simple que el bebop complejo.</p>
<p>Si quieres entender por que esta progresion es tan importante, busca <a href="/chords/d-minor-7th">Dm7</a> (el acorde ii), <a href="/chords/g-dominant-7th">G7</a> (el acorde V) y <a href="/chords/c-major-7th">Cmaj7</a> (el acorde I). La forma en que las notas se mueven entre estos tres acordes — llamada conduccion de voces — es lo que le da al jazz su sonido suave y sofisticado.</p>

<h3>5. i - VI - III - VII (La "Progresion Menor Epica")</h3>
<p>En A minor: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Esta aparece constantemente en musica cinematica, dramatica y de sonido epico. Tecnicamente son los mismos acordes que la progresion pop triste, pero cuando le pides a Suno un ambiente "epic orchestral" o "cinematic trailer", tiende a arreglarlos con dinamicas mucho mas grandes.</p>
<p><b>Consejo para el prompt de Suno:</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>Por Que Importa Conocer la Tonalidad</h2>
<p>Cuando le dices a Suno una tonalidad — digamos, "in C major" — estas restringiendo los acordes que probablemente elegira. Cada tonalidad tiene un conjunto de acordes que pertenecen naturalmente a ella. Para <a href="/scales/c-major">C major</a>, esos acordes son:</p>
<ul>
    <li>I — <a href="/chords/c-major">C major</a></li>
    <li>ii — <a href="/chords/d-minor">D minor</a></li>
    <li>iii — <a href="/chords/e-minor">E minor</a></li>
    <li>IV — <a href="/chords/f-major">F major</a></li>
    <li>V — <a href="/chords/g-major">G major</a></li>
    <li>vi — <a href="/chords/a-minor">A minor</a></li>
    <li>vii° — <a href="/chords/b-diminished">B diminished</a></li>
</ul>
<p>Si Suno genera un acorde que no esta en esta lista, esta yendo "fuera de la tonalidad" — lo cual puede sonar intencional y genial, o aleatorio y malo. Especificar la tonalidad en tu prompt reduce la aleatoriedad.</p>
<p>Para tonalidades menores, los acordes son diferentes. En <a href="/scales/a-minor">A minor</a>:</p>
<ul>
    <li>i — <a href="/chords/a-minor">A minor</a></li>
    <li>ii° — <a href="/chords/b-diminished">B diminished</a></li>
    <li>III — <a href="/chords/c-major">C major</a></li>
    <li>iv — <a href="/chords/d-minor">D minor</a></li>
    <li>v — <a href="/chords/e-minor">E minor</a></li>
    <li>VI — <a href="/chords/f-major">F major</a></li>
    <li>VII — <a href="/chords/g-major">G major</a></li>
</ul>

<h2>Usar Palabras de Estado de Animo para Dirigir Hacia Escalas</h2>
<p>Suno no entiende directamente los nombres de escalas, pero si entiende estados de animo. Puedes usar esto para controlar indirectamente la escala:</p>
<ul>
    <li><b>"Bright" o "happy"</b> — tiende a producir melodias en <a href="/scales/c-major">escala mayor</a></li>
    <li><b>"Sad" o "melancholic"</b> — tiende a producir melodias en <a href="/scales/a-minor">menor natural</a></li>
    <li><b>"Bluesy" o "gritty"</b> — tiende a producir melodias en <a href="/scales/a-blues">escala de blues</a></li>
    <li><b>"Mysterious" o "dark"</b> — tiende a producir melodias en <a href="/scales/a-harmonic-minor">menor armonica</a></li>
    <li><b>"Funky" o "groovy"</b> — tiende a producir sabores <a href="/scales/a-mixolydian-pentatonic">mixolidios</a></li>
    <li><b>"Ethereal" o "dreamy"</b> — tiende a producir melodias con influencia <a href="/scales/a-lydian-pentatonic">lidia</a></li>
</ul>
<p>Estas no son garantias — Suno es probabilistico, no deterministico. Pero combinar una palabra de estado de animo con una tonalidad y etiquetas de acordes entre corchetes te da la mejor oportunidad de obtener lo que quieres.</p>

<h2>Lo que Suno Todavia No Puede Hacer</h2>
<p>Para ser honestos sobre las limitaciones:</p>
<ul>
    <li><b>Voicings exactos de acordes</b> — No puedes decirle a Suno que toque un <a href="/chords/c-major">C major</a> en segunda inversion. Elige los voicings por su cuenta.</li>
    <li><b>Cambios de tonalidad a mitad de cancion</b> — Pedir una modulacion (cambio de tonalidad) rara vez funciona de forma fiable.</li>
    <li><b>Armonia jazz compleja</b> — Acordes alterados, sustituciones de tritono y armonia extendida estan mas alla de lo que Suno maneja bien.</li>
    <li><b>Cadencias especificas</b> — No puedes pedir de forma fiable una <a href="/blog/cadences">cadencia enganyosa</a> o una semicadencia en un punto especifico.</li>
</ul>
<p>Para cualquier cosa mas alla de armonia basica de pop/rock/folk, obtendras mejores resultados aprendiendo la teoria tu mismo y usando un DAW.</p>

<p><b><a href="/chords">Busca cualquier acorde en Solfej →</a></b></p>
<p><b><a href="/scales">Busca cualquier escala en Solfej →</a></b></p>

<h2>Mas Guias de Suno AI</h2>
<ul>
    <li><a href="/es/blog/suno-ai-prompt-guide">Guia de Prompts de Suno AI: La Hoja de Referencia de Teoria Musical para Mejores Canciones</a></li>
    <li><a href="/es/blog/suno-vs-udio">Suno vs Udio: Cual Generador de Musica con IA Es Mejor en 2026?</a></li>
    <li><a href="/es/blog/suno-ai-tips">Como Hacer que las Canciones de Suno AI Suenen Profesionales (Consejos de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-ai-prompt-guide": {
    title: "Guia de Prompts de Suno AI: La Hoja de Referencia de Teoria Musical para Mejores Canciones",
    seoTitle: "Guia de Prompts de Suno AI: Hoja de Referencia de Teoria Musical para Mejores Prompts (2026) | Solfej",
    description: "Una guia practica para escribir mejores prompts de Suno AI usando teoria musical basica. Cubre tonalidades, escalas, modos, tempo y como traducir lo que escuchas en tu cabeza a prompts que funcionen.",
    timeToRead: "9 min",
    body: `
<p>La mayoria de las guias de prompts de Suno AI te dicen que agregues etiquetas de genero y palabras de estado de animo. Eso esta bien, pero es superficial. Las personas que obtienen los mejores resultados de Suno son las que saben un poco de teoria musical — porque pueden describir lo que quieren en terminos a los que la IA realmente responde.</p>
<p>No necesitas un titulo en musica. Necesitas unos 10 minutos y esta hoja de referencia.</p>

<h2>Las 4 Cosas que Suno Realmente Entiende</h2>
<p>La casilla de estilo de Suno responde a cuatro tipos de informacion musical. En orden de fiabilidad:</p>
<ol>
    <li><b>Genero</b> — "indie rock", "lo-fi hip hop", "jazz ballad"</li>
    <li><b>Estado de animo/energia</b> — "melancholic", "aggressive", "dreamy"</li>
    <li><b>Instrumentacion</b> — "acoustic guitar", "piano and strings", "808s"</li>
    <li><b>Parametros musicales</b> — tonalidad, tempo/BPM, compas</li>
</ol>
<p>La mayoria de las personas solo usan 1 y 2. Agregar 3 y especialmente 4 es donde la teoria musical te da ventaja.</p>

<h2>Tonalidades: Mayor vs Menor (y Por Que Importa)</h2>
<p>Lo mas impactante que puedes agregar a un prompt de Suno es la tonalidad. Le dice a la IA que notas y acordes usar.</p>
<p><b>Las tonalidades mayores</b> suenan brillantes, alegres, resueltas. Si pones <code>C major</code>, Suno tendera a construir alrededor de la <a href="/scales/c-major">escala de C major</a> y usar acordes como <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a> y <a href="/chords/g-major">G</a>.</p>
<p><b>Las tonalidades menores</b> suenan oscuras, tristes, tensas. Si pones <code>A minor</code>, Suno se basara en la <a href="/scales/a-minor">escala de A minor</a> y usara acordes como <a href="/chords/a-minor">Am</a>, <a href="/chords/d-minor">Dm</a> y <a href="/chords/e-minor">Em</a>.</p>
<p>Aqui tienes una referencia rapida de tonalidades comunes y la sensacion que tienden a producir:</p>
<ul>
    <li><a href="/scales/c-major">C major</a> / <a href="/scales/a-minor">A minor</a> — sin sostenidos ni bemoles, sensacion "neutral", muy comun en pop</li>
    <li><a href="/scales/g-major">G major</a> / <a href="/scales/e-minor">E minor</a> — brillante y abierta, comun en folk y rock</li>
    <li><a href="/scales/d-major">D major</a> / <a href="/scales/b-minor">B minor</a> — calida y resonante, genial para canciones con guitarra acustica</li>
    <li><a href="/scales/f-major">F major</a> / <a href="/scales/d-minor">D minor</a> — tonalidad mayor ligeramente mas oscura, funciona bien para baladas</li>
    <li><a href="/scales/eb-major">Eb major</a> / <a href="/scales/c-minor">C minor</a> — rica y plena, comun en R&B y soul</li>
</ul>

<h2>Tempo: Hoja de Referencia de BPM</h2>
<p>Agregar un BPM (pulsos por minuto) a tu prompt te da control sobre el nivel de energia. Suno responde tanto a numeros exactos de BPM como a terminos italianos de tempo.</p>
<ul>
    <li><b>60-70 BPM (Adagio)</b> — Muy lento. Baladas, ambient, cinematico. <code>"Slow ballad, 65 BPM, piano"</code></li>
    <li><b>70-90 BPM (Andante)</b> — Paso de caminata. Lo-fi hip hop, R&B. <code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
    <li><b>90-110 BPM (Moderato)</b> — Medio. Pop, indie, folk. <code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
    <li><b>110-130 BPM (Allegro)</b> — Animado. Pop, rock, dance. <code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
    <li><b>130-160 BPM (Vivace)</b> — Rapido. Punk, drum & bass, EDM. <code>"Punk rock, 150 BPM, aggressive"</code></li>
    <li><b>160+ BPM (Presto)</b> — Muy rapido. Drum & bass, speedmetal. <code>"Drum and bass, 170 BPM, dark"</code></li>
</ul>

<h2>Modos: Mas Alla de Mayor y Menor</h2>
<p>Los modos son escalas que tienen cada una un estado de animo distinto. Suno no siempre responde directamente a los nombres de los modos, pero puedes guiarlo con palabras de estado de animo:</p>
<ul>
    <li><b><a href="/scales/c-major">Jonico</a> (escala mayor)</b> — alegre, brillante → prompt: <code>"bright, uplifting, major key"</code></li>
    <li><b><a href="/scales/c-dorian">Dorico</a></b> — menor pero con una cualidad esperanzadora → prompt: <code>"minor key, slightly funky, Santana-esque"</code></li>
    <li><b><a href="/scales/c-phrygian">Frigio</a></b> — sabor espanol/medio oriental → prompt: <code>"Spanish guitar, dark, flamenco-influenced"</code></li>
    <li><b><a href="/scales/c-lydian-pentatonic">Lidio</a></b> — sonyador, flotante, etereo → prompt: <code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
    <li><b><a href="/scales/c-mixolydian-pentatonic">Mixolidio</a></b> — blusero, rock, ligeramente sin resolver → prompt: <code>"classic rock, bluesy, Grateful Dead"</code></li>
    <li><b><a href="/scales/a-minor">Eolico</a> (menor natural)</b> — triste, oscuro → prompt: <code>"sad, dark, melancholic, minor key"</code></li>
</ul>
<p>La idea clave: cada modo es simplemente una escala regular que comienza en una nota diferente. <a href="/scales/c-dorian">C Dorian</a> usa las mismas notas que <a href="/scales/bb-major">Bb major</a>, pero suena completamente diferente porque la "nota base" es C en lugar de Bb. Si quieres profundizar, busca cualquiera de estas escalas en Solfej.</p>

<h2>Poniendolo Todo Junto: Plantillas de Prompts</h2>
<p>Aqui tienes plantillas listas para usar que combinan genero, estado de animo, tonalidad y tempo:</p>

<h3>Balada Acustica Triste</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>Esto funciona porque: <a href="/scales/a-minor">A minor</a> es una tonalidad comoda para guitarra, 75 BPM es suficientemente lento para una balada, y las palabras de estado de animo refuerzan la tonalidad menor.</p>

<h3>Cancion Pop Animada</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>Esto funciona porque: <a href="/scales/c-major">C major</a> es la tonalidad mas brillante y "basica" — sin sostenidos ni bemoles — y 118 BPM esta justo en el punto ideal del pop.</p>

<h3>Beat de Trap Oscuro</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>Esto funciona porque: <a href="/scales/d-minor">D minor</a> es una tonalidad comun para trap (encaja bien con el bajo 808), y 140 BPM es el tempo estandar del trap.</p>

<h3>Estandar de Jazz</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>Esto funciona porque: <a href="/scales/bb-major">Bb major</a> es la tonalidad mas comun del jazz (los instrumentos de metal estan construidos en Bb), y especificar "walking bass" y "swing" ayuda a Suno a conseguir la sensacion ritmica correcta.</p>

<h3>Beat Lo-fi para Estudiar</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>Esto funciona porque: <a href="/scales/f-major">F major</a> tiene una cualidad calida y ligeramente suave, 85 BPM es el punto ideal del lo-fi, y "jazzy chords" empuja a Suno hacia voicings de <a href="/chords/f-major-7th">septima mayor</a> y <a href="/chords/f-dominant-7th">septima dominante</a>.</p>

<h2>Errores Comunes</h2>
<ul>
    <li><b>Sobrecargar el prompt</b> — No pongas 15 descriptores en la casilla de estilo. Suno da mas peso a las primeras palabras. Comienza con el genero y la tonalidad.</li>
    <li><b>Instrucciones contradictorias</b> — "Happy, bright, D minor" es contradictorio. <a href="/scales/d-minor">D minor</a> es una tonalidad triste. Haz que tus palabras de estado de animo coincidan con tu tonalidad.</li>
    <li><b>Ignorar el BPM</b> — Si pones "energetic" pero no especificas el tempo, Suno podria darte una pista lenta. Siempre agrega BPM para generos que dependen de la energia.</li>
    <li><b>Esperar una reproduccion exacta</b> — Suno es probabilistico. Te pondra en el vecindario de lo que pides, no una reproduccion exacta. Genera 3-4 versiones y elige la mejor.</li>
</ul>

<h2>La Verdadera Ventaja: Saber Lo Que Estas Escuchando</h2>
<p>La razon mas importante para aprender teoria musical basica no es escribir mejores prompts de Suno — es entender lo que Suno te devuelve. Cuando generas una pista y piensas "eso suena genial", poder decir "es porque esta usando una escala <a href="/scales/c-dorian">dorica</a> sobre un acorde de <a href="/chords/c-minor-7th">septima menor</a>" significa que puedes recrear ese sonido intencionalmente, no por suerte.</p>
<p>Si no aprendes nada mas, aprende estas tres cosas:</p>
<ul>
    <li>La diferencia entre acordes <a href="/chords/c-major">mayores</a> y <a href="/chords/c-minor">menores</a> (y por que suenan diferente)</li>
    <li>Que es una <a href="/scales/c-major">escala</a> y como determina que notas "encajan" en una tonalidad</li>
    <li>Que son las <a href="/blog/cadences">cadencias</a> — son la razon por la que algunos finales se sienten definitivos y otros se sienten sin resolver</li>
</ul>

<p><b><a href="/chords">Busca cualquier acorde en Solfej →</a></b></p>
<p><b><a href="/scales">Busca cualquier escala en Solfej →</a></b></p>

<h2>Mas Guias de Suno AI</h2>
<ul>
    <li><a href="/es/blog/suno-ai-chord-progressions">Progresiones de Acordes en Suno AI: Como Controlar los Acordes que Toca Suno</a></li>
    <li><a href="/es/blog/suno-vs-udio">Suno vs Udio: Cual Generador de Musica con IA Es Mejor en 2026?</a></li>
    <li><a href="/es/blog/suno-ai-tips">Como Hacer que las Canciones de Suno AI Suenen Profesionales (Consejos de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-vs-udio": {
    title: "Suno vs Udio: Cual Generador de Musica con IA Es Mejor en 2026?",
    seoTitle: "Suno vs Udio 2026: Cual Generador de Musica con IA Es Realmente Mejor? | Solfej",
    description: "Una comparacion honesta de Suno y Udio en 2026. Probamos ambos en vocales, progresiones de acordes, precision de genero y calidad musical — con analisis real de teoria musical.",
    timeToRead: "9 min",
    body: `
<p>Suno y Udio son los dos generadores de musica con IA mas grandes en 2026. Ambos te permiten escribir un prompt de texto y obtener una cancion completa. Pero producen resultados notablemente diferentes — y cual es "mejor" depende de lo que estes intentando hacer.</p>
<p>La mayoria de las comparaciones se centran en la calidad de audio y los precios. Esta se centra en algo mas util: lo que cada herramienta realmente hace con la teoria musical, y donde cada una falla.</p>

<h2>Tabla Comparativa Rapida</h2>
<table>
    <thead>
        <tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
    </thead>
    <tbody>
        <tr><td><b>Velocidad</b></td><td>~30 segundos por cancion</td><td>~90 segundos por cancion</td></tr>
        <tr><td><b>Calidad vocal</b></td><td>Mas natural, mejor emocion</td><td>Mejor diccion, mezcla mas limpia</td></tr>
        <tr><td><b>Calidad instrumental</b></td><td>Buena pero puede sonar comprimida</td><td>Mejor separacion, mezcla mas limpia</td></tr>
        <tr><td><b>Precision de acordes</b></td><td>Sigue etiquetas entre corchetes ~60% del tiempo</td><td>Ligeramente mejor siguiendo acordes</td></tr>
        <tr><td><b>Rango de generos</b></td><td>Amplio, mejor en pop/rock/hip-hop</td><td>Amplio, mejor en jazz/clasica</td></tr>
        <tr><td><b>Nivel gratuito</b></td><td>10 canciones/dia</td><td>Generaciones limitadas/mes</td></tr>
        <tr><td><b>Duracion maxima</b></td><td>4 minutos</td><td>Extender a 15+ minutos</td></tr>
    </tbody>
</table>

<h2>Vocales: Gana Suno</h2>
<p>Suno produce vocales mas expresivas emocionalmente. La IA captura respiraciones, quiebres de voz y cambios dinamicos que suenan mas cercanos a un cantante real. Las vocales de Udio son tecnicamente mas limpias pero a menudo suenan mas roboticas — como una voz MIDI muy pulida.</p>
<p>Para generos donde el caracter vocal importa — soul, indie, country — Suno es el claro ganador. Para generos donde se esperan vocales pristinas y procesadas — EDM, produccion pop — la diferencia es menor.</p>

<h2>Instrumentos: Gana Udio</h2>
<p>Udio produce mejor separacion instrumental. En una pista de Suno, la guitarra, el bajo, la bateria y las voces pueden mezclarse entre si de una manera que suena "turbia". La salida de Udio a 48kHz suena mas como una mezcla profesional donde puedes escuchar cada instrumento claramente.</p>
<p>Esto importa mas para arreglos complejos. Si estas generando una pista simple de guitarra acustica y voz, ambos suenan bien. Si intentas generar un arreglo de banda completa con multiples instrumentos, Udio maneja mejor la separacion.</p>

<h2>Progresiones de Acordes: Como Maneja Cada Uno la Armonia</h2>
<p>Aqui es donde se pone interesante desde una perspectiva de teoria musical. Ambas herramientas estan entrenadas con conjuntos masivos de datos de musica popular, por lo que ambas gravitan hacia <a href="/chords">progresiones de acordes</a> comunes. Pero manejan la complejidad armonica de forma diferente.</p>

<h3>Progresiones simples (I-IV-V-I, vi-IV-I-V)</h3>
<p>Ambas herramientas las manejan bien. Si pides una cancion pop en <a href="/scales/c-major">C major</a>, ambas te daran de forma fiable progresiones construidas con <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a>, <a href="/chords/g-major">G</a> y <a href="/chords/a-minor">Am</a>. No hay un ganador real aqui.</p>

<h3>Armonia jazz (ii-V-I, acordes extendidos)</h3>
<p>Udio maneja mejor el jazz. Cuando se le pide jazz, Udio tiene mas probabilidades de producir voicings reales de <a href="/chords/d-minor-7th">septima menor</a> y <a href="/chords/c-major-7th">septima mayor</a> en lugar de triadas simplificadas. Suno tiende a "popificar" los prompts de jazz — obtienes algo que suena vagamente a jazz pero usa armonia mas simple.</p>
<p>Si quieres una pista que realmente suene como si usara una progresion <a href="/chords/d-minor-7th">Dm7</a> → <a href="/chords/g-dominant-7th">G7</a> → <a href="/chords/c-major-7th">Cmaj7</a>, Udio tiene mas probabilidades de entregarlo.</p>

<h3>Precision en tonalidades menores</h3>
<p>Ambas herramientas a veces tienen dificultades para mantenerse en una tonalidad menor. Pones "sad, A minor" y obtienes una seccion que de repente salta a <a href="/scales/a-major">A major</a>. Esto es mas comun en Suno que en Udio, especialmente en generaciones mas largas.</p>
<p>El problema es que ambas herramientas estan entrenadas con canciones que frecuentemente mezclan mayor y menor (la mayoria de la musica pop lo hace), por lo que no siempre mantienen una <a href="/scales/a-minor">escala menor</a> estricta a lo largo de toda la cancion.</p>

<h3>Cambios de tonalidad</h3>
<p>Ninguna herramienta maneja bien los cambios de tonalidad indicados por prompt. Si escribes <code>[Key change to Eb major]</code> en tus letras, ambas lo ignoraran en su mayoria. Suno ocasionalmente produce cambios de tonalidad accidentales (especialmente en la seccion del puente), mientras que Udio tiende a mantenerse en una tonalidad mas obstinadamente.</p>

<h2>Precision de Genero</h2>
<h3>Donde Suno es mejor:</h3>
<ul>
    <li><b>Pop / Top 40</b> — Suno clava el sonido pop moderno, completo con los <a href="/chords">voicings de acordes</a> y el estilo de produccion correctos</li>
    <li><b>Hip-hop / Trap</b> — Mejor bajo 808, patrones de hi-hat mas convincentes, captura bien la estetica de <a href="/scales/d-minor">tonalidad menor oscura</a></li>
    <li><b>Rock</b> — Guitarras distorsionadas mas convincentes, mejor capturando la energia de <a href="/chords/a-power-chord">acordes de potencia</a></li>
    <li><b>Country</b> — Mejor en el twang vocal y la apertura de <a href="/scales/g-major">tonalidad mayor</a> que define al country</li>
</ul>

<h3>Donde Udio es mejor:</h3>
<ul>
    <li><b>Jazz</b> — Mejor en <a href="/chords/c-major-7th">acordes extendidos</a>, lineas de walking bass y sensacion de swing</li>
    <li><b>Clasica / Orquestal</b> — Mejor separacion instrumental significa que cuerdas, metales y maderas suenan mas realistas</li>
    <li><b>Electronica / Ambient</b> — Mejor en disenyo de sonido sutil y texturas evolutivas</li>
    <li><b>Musica del mundo</b> — Mas probabilidades de incorporar <a href="/scales">escalas</a> e instrumentos no occidentales que suenen autenticos</li>
</ul>

<h2>Prompting: Estrategias Diferentes</h2>
<p>Dado que las herramientas ponderan cosas diferentes, tu estrategia de prompting deberia diferir:</p>
<p><b>Para Suno:</b> Comienza con el genero, luego el estado de animo, luego la tonalidad. Suno da mas peso a las primeras palabras. Ejemplo: <code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>Para Udio:</b> Se mas especifico sobre la instrumentacion y el estilo de produccion. Udio responde mejor a descripciones detalladas del sonido. Ejemplo: <code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>Precios (2026)</h2>
<ul>
    <li><b>Suno Gratuito:</b> 50 creditos/dia (10 canciones), uso no comercial</li>
    <li><b>Suno Pro:</b> $10/mes, 500 canciones/mes, licencia comercial</li>
    <li><b>Udio Gratuito:</b> Generaciones limitadas por mes</li>
    <li><b>Udio Standard:</b> $10/mes, similar a Suno Pro</li>
</ul>
<p>Los precios son similares. El nivel gratuito importa mas para usuarios casuales, y la recarga diaria de creditos de Suno es mas generosa para experimentar.</p>

<h2>La Conclusion</h2>
<ul>
    <li><b>Usa Suno si:</b> Quieres pistas rapidas y pegadizas de pop/rock/hip-hop con buenas vocales. Es mas rapido, mas facil de promptear y el nivel gratuito es mejor.</li>
    <li><b>Usa Udio si:</b> Necesitas mayor calidad de audio, mejor separacion instrumental o trabajas con generos de jazz/clasica/electronica donde los matices importan.</li>
    <li><b>Usa ambos si:</b> Te tomas en serio la musica con IA. Genera el mismo prompt en ambos y compara. Aprenderas mucho sobre como cada herramienta interpreta la armonia y el arreglo de forma diferente.</li>
</ul>
<p>Y sin importar que herramienta uses — aprende algunos <a href="/chords">acordes</a> y <a href="/scales">escalas</a> basicos. Saber lo que estas pidiendo (y lo que recibes de vuelta) es la diferencia entre resultados aleatorios y musica intencional.</p>

<p><b><a href="/chords">Busca cualquier acorde en Solfej →</a></b></p>
<p><b><a href="/scales">Busca cualquier escala en Solfej →</a></b></p>

<h2>Mas Guias de Suno AI</h2>
<ul>
    <li><a href="/es/blog/suno-ai-chord-progressions">Progresiones de Acordes en Suno AI: Como Controlar los Acordes que Toca Suno</a></li>
    <li><a href="/es/blog/suno-ai-prompt-guide">Guia de Prompts de Suno AI: La Hoja de Referencia de Teoria Musical para Mejores Canciones</a></li>
    <li><a href="/es/blog/suno-ai-tips">Como Hacer que las Canciones de Suno AI Suenen Profesionales (Consejos de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-ai-tips": {
    title: "Como Hacer que las Canciones de Suno AI Suenen Profesionales (Consejos de Teoria Musical)",
    seoTitle: "Como Hacer que las Canciones de Suno AI Suenen Profesionales: Consejos de Teoria Musical (2026) | Solfej",
    description: "Tus canciones de Suno AI suenan amateur porque te falta teoria musical basica. Aqui estan los conceptos especificos que haran que tu musica generada por IA suene dramaticamente mejor.",
    timeToRead: "8 min",
    body: `
<p>Has generado 50 canciones en Suno. Algunas suenan decentes. La mayoria suenan genericas. Algunas suenan activamente mal. El problema no es Suno — es que estas prompteando a ciegas.</p>
<p>La diferencia entre un resultado generico de Suno y algo que realmente suena como una cancion real se reduce a entender un punnado de conceptos de teoria musical. Aqui estan los que mas importan.</p>

<h2>Consejo 1: Deja de Elegir Tonalidades al Azar</h2>
<p>La mayoria de los usuarios de Suno no especifican una tonalidad o eligen una al azar. Esto es como cocinar sin saber que sabores combinan bien.</p>
<p>Cada tonalidad tiene una personalidad. Esto no es esoterismo — es porque diferentes tonalidades se asientan de forma diferente en los instrumentos y en el rango vocal humano:</p>
<ul>
    <li><a href="/scales/c-major">C major</a> — El "lienzo en blanco". Limpia y simple, sin sostenidos ni bemoles. Ideal para: pop directo.</li>
    <li><a href="/scales/g-major">G major</a> — Abierta y brillante. Amigable con la guitarra (muchas cuerdas al aire). Ideal para: folk, country, rock.</li>
    <li><a href="/scales/e-minor">E minor</a> — Oscura y poderosa. La tonalidad mas comun en rock. Ideal para: rock, metal, pop dramatico.</li>
    <li><a href="/scales/a-minor">A minor</a> — Triste pero accesible. Ideal para: baladas, indie, cantautor.</li>
    <li><a href="/scales/d-minor">D minor</a> — Profunda y sombria. Comun en hip-hop y trap. Ideal para: trap, R&B oscuro, bandas sonoras.</li>
    <li><a href="/scales/bb-major">Bb major</a> — Calida y rica. La tonalidad por defecto del jazz. Ideal para: jazz, soul, R&B.</li>
</ul>
<p><b>La solucion:</b> Haz coincidir tu tonalidad con tu genero. Poner <code>G major</code> para una cancion folk o <code>D minor</code> para un beat de trap hace que el resultado suene mas autentico al instante.</p>

<h2>Consejo 2: Entiende Por Que Tus Canciones Suenan "Todas Iguales"</h2>
<p>Si todas tus canciones de Suno suenan similares, es porque todas estan usando la misma progresion de acordes. Suno recurre por defecto a las progresiones pop mas comunes cuando no le das direccion:</p>
<ul>
    <li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> (la "cancion de cuatro acordes")</li>
    <li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> (mismos acordes, comienzo menor)</li>
</ul>
<p>Estas progresiones dominan la musica pop, asi que Suno gravita hacia ellas por defecto. Para salir de eso, necesitas promptear progresiones diferentes.</p>
<p><b>La solucion:</b> Agrega etiquetas de acordes entre corchetes en tus letras para guiar a Suno hacia progresiones menos comunes. Prueba:</p>
<ul>
    <li><code>[Dm] [G] [C] [Am]</code> — ii-V-I-vi, comun en soul y jazz-pop</li>
    <li><code>[Am] [Em] [F] [Dm]</code> — i-v-VI-iv, mas oscura y dramatica</li>
    <li><code>[C] [Em] [Am] [G]</code> — I-iii-vi-V, usada en rock de los 60s/70s (estilo Beatles)</li>
</ul>
<p>No sabes que significan estos numeros romanos? Cada numero representa un acorde construido sobre ese grado de la escala. En <a href="/scales/c-major">C major</a>, I = <a href="/chords/c-major">C</a>, ii = <a href="/chords/d-minor">Dm</a>, iii = <a href="/chords/e-minor">Em</a>, IV = <a href="/chords/f-major">F</a>, V = <a href="/chords/g-major">G</a>, vi = <a href="/chords/a-minor">Am</a>.</p>

<h2>Consejo 3: Usa Tension y Resolucion</h2>
<p>Las canciones profesionales no se quedan en un solo nivel de energia — construyen tension y luego la liberan. De eso se tratan las <a href="/blog/cadences">cadencias</a>.</p>
<p>El patron de tension-resolucion mas importante en la musica es <b>V → I</b>: el acorde de <a href="/chords/g-major">G major</a> resolviendo a <a href="/chords/c-major">C major</a> (en la tonalidad de C). Esto se llama <a href="/blog/cadences">cadencia autentica</a>, y es el sonido de "final satisfactorio" que has escuchado en miles de canciones.</p>
<p>No puedes pedirle directamente a Suno cadencias, pero puedes incorporarlas en tus etiquetas de acordes entre corchetes. Termina tu estribillo con <code>[G] [C]</code> para una resolucion fuerte, o <code>[G] [Am]</code> para una sorpresa que mantiene al oyente en suspenso (eso es una <a href="/blog/cadences">cadencia enganyosa</a>).</p>
<p>Otras herramientas de tension:</p>
<ul>
    <li><b><a href="/chords/c-dominant-7th">Acordes de septima dominante</a></b> — Agregar una septima al acorde V (<a href="/chords/g-dominant-7th">G7</a> en lugar de <a href="/chords/g-major">G</a>) aumenta la atraccion hacia la resolucion. Genial para blues y jazz.</li>
    <li><b><a href="/chords/c-suspended-4th">Acordes suspendidos</a></b> — Los acordes sus4 crean una sensacion suspendida, sin resolver. Usa <code>[Csus4] [C]</code> para un sutil efecto de "apertura".</li>
    <li><b><a href="/chords/c-minor">Acordes menores</a> en tonalidades mayores</b> — Introducir un <a href="/chords/a-minor">Am</a> inesperado en un contexto de <a href="/scales/c-major">C major</a> crea peso emocional instantaneo.</li>
</ul>

<h2>Consejo 4: Haz Coincidir el Tempo con tu Genero</h2>
<p>Un tempo incorrecto es una de las formas mas faciles de hacer que una cancion de Suno suene mal. Cada genero tiene un rango de tempo natural. Si tu "beat lo-fi relajado" esta a 140 BPM, no sonara relajado sin importar que otras palabras uses.</p>
<ul>
    <li><b>Balada:</b> 60-80 BPM</li>
    <li><b>R&B / Neo-soul:</b> 70-90 BPM</li>
    <li><b>Lo-fi hip hop:</b> 75-90 BPM</li>
    <li><b>Pop:</b> 100-125 BPM</li>
    <li><b>Rock:</b> 110-140 BPM</li>
    <li><b>EDM / House:</b> 120-130 BPM</li>
    <li><b>Drum & bass:</b> 160-180 BPM</li>
    <li><b>Punk:</b> 150-180 BPM</li>
</ul>
<p><b>La solucion:</b> Siempre incluye BPM en tu prompt de estilo. <code>Lo-fi hip hop, 82 BPM, chill</code> producira resultados mucho mejores que solo <code>Lo-fi hip hop, chill</code>.</p>

<h2>Consejo 5: Aprende la Escala de Blues (En Serio)</h2>
<p>Si solo vas a aprender una escala para los prompts de Suno, aprende la <a href="/scales/a-blues">escala de blues</a>. Es la base del rock, blues, R&B, hip-hop y una gran parte de la musica pop.</p>
<p>La <a href="/scales/a-blues">escala de A blues</a> es: A - C - D - Eb - E - G. Seis notas. Eso es todo.</p>
<p>Por que esto importa para Suno: cuando prompteas generos bluseros, con alma o crudos y Suno genera una melodia, a menudo esta extrayendo de esta escala. Si la reconoces, puedes saber si Suno te dio lo que pediste. Si la melodia suena "demasiado alegre" para un prompt de blues, significa que Suno recurrio a una <a href="/scales/a-major">escala mayor</a> en su lugar — regenera.</p>
<p>Otras escalas utiles para reconocer:</p>
<ul>
    <li><a href="/scales/a-major-pentatonic">Pentatonica mayor</a> — la version "alegre" de la escala de blues. Usada en pop, country y solos de rock clasico.</li>
    <li><a href="/scales/a-harmonic-minor">Menor armonica</a> — agrega un sabor dramatico, medio oriental o clasico. Promptea con "mysterious" o "dark classical".</li>
    <li><a href="/scales/a-dorian">Dorica</a> — una escala menor que suena menos deprimente. Usada en funk, rock estilo Santana y musica electronica estilo Daft Punk.</li>
</ul>

<h2>Consejo 6: Estructura tu Cancion Como una Cancion Real</h2>
<p>Suno responde a etiquetas de estructura entre corchetes. En lugar de dejar que decida la estructura, dile:</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>El puente es donde la mayoria de las canciones de Suno mejoran. Las canciones reales usan el puente para introducir contraste armonico — a menudo moviéndose a un acorde diferente o incluso a una tonalidad diferente brevemente. Aunque no puedes forzar a Suno a cambiar de tonalidad, solo tener la etiqueta <code>[Bridge]</code> tiende a producir algo musicalmente diferente de los versos y el estribillo.</p>
<p>Movimiento pro: usa etiquetas de acordes diferentes en tu puente. Si tu verso usa <code>[Am] [F] [C] [G]</code>, prueba <code>[Dm] [Em] [F] [G]</code> para el puente. Esto le da a Suno un "limpiador de paladar" armonico antes del estribillo final.</p>

<h2>Consejo 7: Usa Tus Oidos, No Solo Tus Ojos</h2>
<p>Este es el meta-consejo que separa a los buenos usuarios de Suno de todos los demas: <b>escucha criticamente lo que Suno genera.</b></p>
<p>Cuando recibes un resultado, preguntate:</p>
<ul>
    <li>La melodia se mantiene en la tonalidad, o se desvía hacia notas que suenan "mal"?</li>
    <li>La progresion de acordes realmente se mueve, o solo repite los mismos dos acordes?</li>
    <li>Hay variedad dinamica — el estribillo se siente mas grande que el verso?</li>
    <li>La cancion termina bien, o simplemente... se detiene?</li>
</ul>
<p>Desarrollar este oido toma tiempo. Pero cada vez que buscas un <a href="/chords">acorde</a> que escuchas y descubres que es, o identificas que <a href="/scales">escala</a> usa una melodia, mejoras un poco. Y eso hace que cada futuro prompt de Suno sea mas efectivo.</p>

<p><b><a href="/chords">Busca cualquier acorde en Solfej →</a></b></p>
<p><b><a href="/scales">Busca cualquier escala en Solfej →</a></b></p>

<h2>Mas Guias de Suno AI</h2>
<ul>
    <li><a href="/es/blog/suno-ai-chord-progressions">Progresiones de Acordes en Suno AI: Como Controlar los Acordes que Toca Suno</a></li>
    <li><a href="/es/blog/suno-ai-prompt-guide">Guia de Prompts de Suno AI: La Hoja de Referencia de Teoria Musical para Mejores Canciones</a></li>
    <li><a href="/es/blog/suno-vs-udio">Suno vs Udio: Cual Generador de Musica con IA Es Mejor en 2026?</a></li>
</ul>
`,
  },
}
