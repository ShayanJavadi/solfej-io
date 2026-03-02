module.exports = {
  "suno-ai-chord-progressions": {
    title: "Progressões de Acordes no Suno AI: Como Realmente Controlar Quais Acordes o Suno Toca",
    seoTitle: "Progressões de Acordes no Suno AI: Como Especificar Acordes no Suno (Guia 2026) | Solfej",
    description: "Aprenda a especificar progressões de acordes nos prompts do Suno AI. Inclui exemplos funcionais com progressões comuns, dicas para tonalidades maiores e menores, e por que teoria musical básica torna suas músicas no Suno 10x melhores.",
    timeToRead: "10 min",
    body: `
<p>Uma das frustrações mais comuns com o Suno AI é que você não consegue controlar com precisão quais acordes ele toca. Você digita "sad ballad in A minor" e recebe algo que vagamente soa menor — mas a progressão de acordes real é uma moeda jogada ao ar.</p>
<p>A boa notícia: existem maneiras de guiar o Suno em direção a progressões de acordes específicas. A notícia ainda melhor: entender um pouco de teoria musical dá a você dramaticamente mais controle sobre o resultado. Aqui está tudo que funciona em 2026.</p>

<h2>O Problema: O Suno Canta Seus Acordes em Vez de Tocá-los</h2>
<p>Se você digitar <code>Am - F - G - Em</code> diretamente em um prompt do Suno, há uma boa chance de a IA literalmente cantar "A minor, F, G, E minor" como letras em vez de tocar esses acordes instrumentalmente.</p>
<p>Isso acontece porque o Suno trata tudo no campo de letras como texto a ser cantado. Ele não entende nativamente símbolos de acordes como um músico lendo uma partitura faria. Você precisa contornar isso.</p>

<h2>Método 1: Tags de Colchetes no Campo de Letras</h2>
<p>O método mais confiável é colocar nomes de acordes entre colchetes dentro das suas letras, assim:</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>Isso diz ao Suno "estas são tags estruturais, não letras para cantar." Nem sempre ele segue perfeitamente, mas aumenta dramaticamente as chances de obter o movimento harmônico correto.</p>
<p>Não tem certeza do que Am, F, G e Em realmente são? Aqui está o que está acontecendo musicalmente:</p>
<ul>
    <li><a href="/chords/a-minor">Am (Lá menor)</a> — o acorde tônico, define a "base" em Lá menor</li>
    <li><a href="/chords/f-major">Fá maior</a> — o sexto grau, adiciona uma elevação agridoce</li>
    <li><a href="/chords/g-major">Sol maior</a> — o sétimo grau, cria impulso para frente</li>
    <li><a href="/chords/e-minor">Em (Mi menor)</a> — o quinto grau na escala menor natural, cria uma resolução mais suave do que um <a href="/chords/e-major">acorde V maior</a> faria</li>
</ul>
<p>Esta é uma das progressões mais comuns no pop e rock — você já a ouviu em centenas de músicas.</p>

<h2>Método 2: Use a Caixa de Estilo para Direção Harmônica</h2>
<p>No Modo Personalizado do Suno, a caixa Estilo de Música aceita descritores de gênero e humor. Você pode combinar isso com informações de acordes nas letras:</p>
<p><b>Caixa de estilo:</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>Caixa de letras:</b> Suas letras com tags de acordes entre colchetes</p>
<p>Especificar a tonalidade na caixa de estilo ajuda o Suno a permanecer na vizinhança harmônica correta. Se você disser "A minor key", o Suno é mais propenso a usar acordes da <a href="/scales/a-minor">escala de Lá menor natural</a> (Am, Bdim, C, Dm, Em, F, G).</p>

<h2>As 5 Progressões de Acordes que Melhor Funcionam no Suno</h2>
<p>O Suno é treinado em milhões de músicas, então ele naturalmente gravita em direção a progressões comuns na música popular. Estas cinco funcionam de forma confiável:</p>

<h3>1. I - V - vi - IV (A "Progressão Pop")</h3>
<p>Em Dó maior: <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>Esta é a progressão de acordes mais comum no pop moderno. Está em "Let It Be", "No Woman No Cry", "Someone Like You" e centenas mais. Se você der ao Suno um prompt com vibe pop animada, ele frequentemente chegará aqui naturalmente.</p>
<p><b>Dica de prompt Suno:</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V (A "Progressão Pop Triste")</h3>
<p>Em Dó maior: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Os mesmos acordes acima, mas começando no acorde menor muda completamente a sensação. Isso está em todo lugar no pop emocional e baladas. Começar em <a href="/chords/a-minor">Lá menor</a> em vez de <a href="/chords/c-major">Dó maior</a> dá uma qualidade melancólica.</p>
<p><b>Dica de prompt Suno:</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I (A "Progressão Blues/Rock")</h3>
<p>Em Lá maior: <a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>A espinha dorsal do rock, country e blues. Se você quer que o Suno gere algo que soe como rock clássico, usar esses três acordes na caixa de estilo funciona bem. Para um som mais blues, use <a href="/chords/a-dominant-7th">A7</a>, <a href="/chords/d-dominant-7th">D7</a> e <a href="/chords/e-dominant-7th">E7</a> — acordes de sétima dominante são o que dá ao blues seu som característico.</p>
<p><b>Dica de prompt Suno:</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I (A "Progressão Jazz")</h3>
<p>Em Dó maior: <a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>O ii-V-I é a progressão mais importante no jazz. Fazer o Suno acertar isso é mais difícil pois envolve acordes estendidos (sétimas). Você pode tentar <code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code> mas os resultados variam. O Suno lida melhor com jazz simples do que com bebop complexo.</p>
<p>Se você quer entender por que essa progressão é tão importante, pesquise <a href="/chords/d-minor-7th">Dm7</a> (o acorde ii), <a href="/chords/g-dominant-7th">G7</a> (o acorde V) e <a href="/chords/c-major-7th">Cmaj7</a> (o acorde I). A maneira como as notas se movem entre esses três acordes — chamada condução de vozes — é o que dá ao jazz seu som suave e sofisticado.</p>

<h3>5. i - VI - III - VII (A "Progressão Menor Épica")</h3>
<p>Em Lá menor: <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>Isso aparece constantemente em música cinematográfica, dramática e de som épico. Tecnicamente são os mesmos acordes da progressão pop triste, mas quando você dá ao Suno prompts de "epic orchestral" ou "cinematic trailer", ele tende a arranjá-los com dinâmicas muito maiores.</p>
<p><b>Dica de prompt Suno:</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>Por Que Conhecer a Tonalidade Importa</h2>
<p>Quando você diz ao Suno uma tonalidade — digamos, "in C major" — você está restringindo os acordes que ele provavelmente escolherá. Cada tonalidade tem um conjunto de acordes que naturalmente pertencem a ela. Para <a href="/scales/c-major">Dó maior</a>, esses acordes são:</p>
<ul>
    <li>I — <a href="/chords/c-major">Dó maior</a></li>
    <li>ii — <a href="/chords/d-minor">Ré menor</a></li>
    <li>iii — <a href="/chords/e-minor">Mi menor</a></li>
    <li>IV — <a href="/chords/f-major">Fá maior</a></li>
    <li>V — <a href="/chords/g-major">Sol maior</a></li>
    <li>vi — <a href="/chords/a-minor">Lá menor</a></li>
    <li>vii° — <a href="/chords/b-diminished">Si diminuto</a></li>
</ul>
<p>Se o Suno gera um acorde que não está nesta lista, ele está indo "fora da tonalidade" — o que pode soar intencional e legal, ou aleatório e ruim. Especificar a tonalidade no seu prompt reduz a aleatoriedade.</p>
<p>Para tonalidades menores, os acordes são diferentes. Em <a href="/scales/a-minor">Lá menor</a>:</p>
<ul>
    <li>i — <a href="/chords/a-minor">Lá menor</a></li>
    <li>ii° — <a href="/chords/b-diminished">Si diminuto</a></li>
    <li>III — <a href="/chords/c-major">Dó maior</a></li>
    <li>iv — <a href="/chords/d-minor">Ré menor</a></li>
    <li>v — <a href="/chords/e-minor">Mi menor</a></li>
    <li>VI — <a href="/chords/f-major">Fá maior</a></li>
    <li>VII — <a href="/chords/g-major">Sol maior</a></li>
</ul>

<h2>Usando Palavras de Humor para Direcionar Escalas</h2>
<p>O Suno não entende nomes de escalas diretamente, mas entende humores. Você pode usar isso para controlar indiretamente a escala:</p>
<ul>
    <li><b>"Bright" ou "happy"</b> → tende a produzir melodias em <a href="/scales/c-major">escala maior</a></li>
    <li><b>"Sad" ou "melancholic"</b> → tende a produzir melodias em <a href="/scales/a-minor">menor natural</a></li>
    <li><b>"Bluesy" ou "gritty"</b> → tende a produzir melodias em <a href="/scales/a-blues">escala blues</a></li>
    <li><b>"Mysterious" ou "dark"</b> → tende a produzir melodias em <a href="/scales/a-harmonic-minor">menor harmônica</a></li>
    <li><b>"Funky" ou "groovy"</b> → tende a produzir sabores <a href="/scales/a-mixolydian-pentatonic">mixolídios</a></li>
    <li><b>"Ethereal" ou "dreamy"</b> → tende a produzir melodias com influência <a href="/scales/a-lydian-pentatonic">lídia</a></li>
</ul>
<p>Estas não são garantias — o Suno é probabilístico, não determinístico. Mas combinar uma palavra de humor com uma tonalidade e tags de acordes entre colchetes dá a você a melhor chance de obter o que deseja.</p>

<h2>O Que o Suno Ainda Não Consegue Fazer</h2>
<p>Para ser honesto sobre as limitações:</p>
<ul>
    <li><b>Voicings exatos de acordes</b> — Você não pode dizer ao Suno para tocar um <a href="/chords/c-major">Dó maior</a> em segunda inversão. Ele escolhe os voicings por conta própria.</li>
    <li><b>Mudanças de tonalidade no meio da música</b> — Pedir uma modulação (mudança de tonalidade) raramente funciona de forma confiável.</li>
    <li><b>Harmonia jazz complexa</b> — Acordes alterados, substituições de trítono e harmonia estendida estão além do que o Suno lida bem.</li>
    <li><b>Cadências específicas</b> — Você não consegue pedir de forma confiável uma cadência deceptiva ou uma meia cadência em um ponto específico.</li>
</ul>
<p>Para qualquer coisa além de harmonia básica de pop/rock/folk, você obterá melhores resultados aprendendo a teoria você mesmo e usando uma DAW.</p>

<p><b><a href="/chords">Pesquise qualquer acorde no Solfej →</a></b></p>
<p><b><a href="/scales">Pesquise qualquer escala no Solfej →</a></b></p>

<h2>Mais Guias de Suno AI</h2>
<ul>
    <li><a href="/pt/blog/suno-ai-prompt-guide">Guia de Prompts Suno AI: O Cheat Sheet de Teoria Musical para Músicas Melhores</a></li>
    <li><a href="/pt/blog/suno-vs-udio">Suno vs Udio: Qual Gerador de Música AI É Melhor em 2026?</a></li>
    <li><a href="/pt/blog/suno-ai-tips">Como Fazer Músicas do Suno AI Soarem Profissionais (Dicas de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-ai-prompt-guide": {
    title: "Guia de Prompts Suno AI: O Cheat Sheet de Teoria Musical para Músicas Melhores",
    seoTitle: "Guia de Prompts Suno AI: Cheat Sheet de Teoria Musical para Prompts Melhores (2026) | Solfej",
    description: "Um guia prático para escrever prompts melhores no Suno AI usando teoria musical básica. Cobre tonalidades, escalas, modos, tempo e como traduzir o que você ouve na sua cabeça em prompts que funcionam.",
    timeToRead: "9 min",
    body: `
<p>A maioria dos guias de prompts do Suno AI diz para adicionar tags de gênero e palavras de humor. Tudo bem, mas é superficial. As pessoas que obtêm os melhores resultados do Suno são aquelas que conhecem um pouco de teoria musical — porque conseguem descrever o que querem em termos que a IA realmente responde.</p>
<p>Você não precisa de um diploma em música. Você precisa de cerca de 10 minutos e este cheat sheet.</p>

<h2>As 4 Coisas que o Suno Realmente Entende</h2>
<p>A caixa de prompt de estilo do Suno responde a quatro tipos de informação musical. Em ordem de quão confiavelmente funcionam:</p>
<ol>
    <li><b>Gênero</b> — "indie rock", "lo-fi hip hop", "jazz ballad"</li>
    <li><b>Humor/energia</b> — "melancholic", "aggressive", "dreamy"</li>
    <li><b>Instrumentação</b> — "acoustic guitar", "piano and strings", "808s"</li>
    <li><b>Parâmetros musicais</b> — tonalidade, tempo/BPM, fórmula de compasso</li>
</ol>
<p>A maioria das pessoas usa apenas 1 e 2. Adicionar 3 e especialmente 4 é onde a teoria musical dá a você uma vantagem.</p>

<h2>Tonalidades: Maior vs Menor (e Por Que Importa)</h2>
<p>A coisa mais impactante que você pode adicionar a um prompt do Suno é a tonalidade. Ela diz à IA quais notas e acordes usar.</p>
<p><b>Tonalidades maiores</b> soam brilhantes, alegres, resolvidas. Se você usar <code>C major</code>, o Suno tenderá a construir em torno da <a href="/scales/c-major">escala de Dó maior</a> e usar acordes como <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a> e <a href="/chords/g-major">G</a>.</p>
<p><b>Tonalidades menores</b> soam escuras, tristes, tensas. Se você usar <code>A minor</code>, o Suno extrairá da <a href="/scales/a-minor">escala de Lá menor</a> e usará acordes como <a href="/chords/a-minor">Am</a>, <a href="/chords/d-minor">Dm</a> e <a href="/chords/e-minor">Em</a>.</p>
<p>Aqui está uma referência rápida para tonalidades comuns e a sensação que tendem a produzir:</p>
<ul>
    <li><a href="/scales/c-major">Dó maior</a> / <a href="/scales/a-minor">Lá menor</a> — sem sustenidos ou bemóis, sensação "neutra", muito comum no pop</li>
    <li><a href="/scales/g-major">Sol maior</a> / <a href="/scales/e-minor">Mi menor</a> — brilhante e aberta, comum no folk e rock</li>
    <li><a href="/scales/d-major">Ré maior</a> / <a href="/scales/b-minor">Si menor</a> — quente e ressonante, ótima para músicas com violão</li>
    <li><a href="/scales/f-major">Fá maior</a> / <a href="/scales/d-minor">Ré menor</a> — maior ligeiramente mais escura, funciona bem para baladas</li>
    <li><a href="/scales/eb-major">Mib maior</a> / <a href="/scales/c-minor">Dó menor</a> — rica e cheia, comum no R&B e soul</li>
</ul>

<h2>Tempo: Cheat Sheet de BPM</h2>
<p>Adicionar um BPM (batidas por minuto) ao seu prompt dá controle sobre o nível de energia. O Suno responde tanto a números exatos de BPM quanto a termos italianos de tempo.</p>
<ul>
    <li><b>60-70 BPM (Adagio)</b> — Muito lento. Baladas, ambient, cinematográfico. <code>"Slow ballad, 65 BPM, piano"</code></li>
    <li><b>70-90 BPM (Andante)</b> — Passo de caminhada. Lo-fi hip hop, R&B. <code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
    <li><b>90-110 BPM (Moderato)</b> — Médio. Pop, indie, folk. <code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
    <li><b>110-130 BPM (Allegro)</b> — Animado. Pop, rock, dance. <code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
    <li><b>130-160 BPM (Vivace)</b> — Rápido. Punk, drum & bass, EDM. <code>"Punk rock, 150 BPM, aggressive"</code></li>
    <li><b>160+ BPM (Presto)</b> — Muito rápido. Drum & bass, speedmetal. <code>"Drum and bass, 170 BPM, dark"</code></li>
</ul>

<h2>Modos: Além de Maior e Menor</h2>
<p>Modos são escalas que possuem um humor distinto cada uma. O Suno nem sempre responde a nomes de modos diretamente, mas você pode direcioná-lo com palavras de humor:</p>
<ul>
    <li><b><a href="/scales/c-major">Jônio</a> (escala maior)</b> — alegre, brilhante → prompt: <code>"bright, uplifting, major key"</code></li>
    <li><b><a href="/scales/c-dorian">Dórico</a></b> — menor mas com uma qualidade esperançosa → prompt: <code>"minor key, slightly funky, Santana-esque"</code></li>
    <li><b><a href="/scales/c-phrygian">Frígio</a></b> — sabor espanhol/oriental → prompt: <code>"Spanish guitar, dark, flamenco-influenced"</code></li>
    <li><b><a href="/scales/c-lydian-pentatonic">Lídio</a></b> — sonhador, flutuante, etéreo → prompt: <code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
    <li><b><a href="/scales/c-mixolydian-pentatonic">Mixolídio</a></b> — blues, rock, ligeiramente não resolvido → prompt: <code>"classic rock, bluesy, Grateful Dead"</code></li>
    <li><b><a href="/scales/a-minor">Eólio</a> (menor natural)</b> — triste, escuro → prompt: <code>"sad, dark, melancholic, minor key"</code></li>
</ul>
<p>O insight chave: cada modo é apenas uma escala regular começando em uma nota diferente. <a href="/scales/c-dorian">Dó Dórico</a> usa as mesmas notas que <a href="/scales/bb-major">Sib maior</a>, mas soa completamente diferente porque a "nota base" é Dó em vez de Sib. Se você quiser aprofundar, pesquise qualquer uma dessas escalas no Solfej.</p>

<h2>Juntando Tudo: Modelos de Prompts</h2>
<p>Aqui estão modelos prontos para usar que combinam gênero, humor, tonalidade e tempo:</p>

<h3>Balada Acústica Triste</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>Isso funciona porque: <a href="/scales/a-minor">Lá menor</a> é uma tonalidade confortável para violão, 75 BPM é lento o suficiente para uma balada, e as palavras de humor reforçam a tonalidade menor.</p>

<h3>Pop Animado</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>Isso funciona porque: <a href="/scales/c-major">Dó maior</a> é a tonalidade mais brilhante e "básica" — sem sustenidos ou bemóis — e 118 BPM fica no ponto ideal do pop.</p>

<h3>Beat Trap Sombrio</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>Isso funciona porque: <a href="/scales/d-minor">Ré menor</a> é uma tonalidade comum para trap (combina bem com o baixo 808), e 140 BPM é o tempo padrão do trap.</p>

<h3>Standard de Jazz</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>Isso funciona porque: <a href="/scales/bb-major">Sib maior</a> é a tonalidade de jazz mais comum (instrumentos de sopro são construídos em Sib), e especificar "walking bass" e "swing" ajuda o Suno a acertar a sensação rítmica.</p>

<h3>Beat Lo-fi para Estudar</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>Isso funciona porque: <a href="/scales/f-major">Fá maior</a> tem uma qualidade quente e ligeiramente suave, 85 BPM é o ponto ideal do lo-fi, e "jazzy chords" empurra o Suno em direção a voicings de <a href="/chords/f-major-7th">sétima maior</a> e <a href="/chords/f-dominant-7th">sétima dominante</a>.</p>

<h2>Erros Comuns</h2>
<ul>
    <li><b>Sobrecarregar o prompt</b> — Não coloque 15 descritores na caixa de estilo. O Suno dá mais peso às primeiras palavras. Comece com gênero e tonalidade.</li>
    <li><b>Instruções conflitantes</b> — "Happy, bright, D minor" é contraditório. <a href="/scales/d-minor">Ré menor</a> é uma tonalidade triste. Combine suas palavras de humor com sua tonalidade.</li>
    <li><b>Ignorar BPM</b> — Se você pedir "energetic" mas não especificar tempo, o Suno pode dar uma faixa lenta. Sempre adicione BPM para gêneros dependentes de energia.</li>
    <li><b>Esperar reprodução exata</b> — O Suno é probabilístico. Ele vai chegar perto do que você pediu, não uma reprodução exata. Gere 3-4 versões e escolha a melhor.</li>
</ul>

<h2>A Verdadeira Vantagem: Saber o Que Você Está Ouvindo</h2>
<p>A maior razão para aprender teoria musical básica não é escrever prompts melhores para o Suno — é entender o que o Suno retorna. Quando você gera uma faixa e pensa "isso soa legal", poder dizer "é porque está usando uma escala <a href="/scales/c-dorian">dórica</a> sobre um <a href="/chords/c-minor-7th">acorde menor com sétima</a>" significa que você pode recriar esse som intencionalmente, não por sorte.</p>
<p>Se nada mais, aprenda estas três coisas:</p>
<ul>
    <li>A diferença entre acordes <a href="/chords/c-major">maiores</a> e <a href="/chords/c-minor">menores</a> (e por que soam diferentes)</li>
    <li>O que é uma <a href="/scales/c-major">escala</a> e como ela determina quais notas "encaixam" em uma tonalidade</li>
    <li>O que são cadências — elas são a razão pela qual alguns finais parecem definitivos e outros parecem não resolvidos</li>
</ul>

<p><b><a href="/chords">Pesquise qualquer acorde no Solfej →</a></b></p>
<p><b><a href="/scales">Pesquise qualquer escala no Solfej →</a></b></p>

<h2>Mais Guias de Suno AI</h2>
<ul>
    <li><a href="/pt/blog/suno-ai-chord-progressions">Progressões de Acordes no Suno AI: Como Controlar Quais Acordes o Suno Toca</a></li>
    <li><a href="/pt/blog/suno-vs-udio">Suno vs Udio: Qual Gerador de Música AI É Melhor em 2026?</a></li>
    <li><a href="/pt/blog/suno-ai-tips">Como Fazer Músicas do Suno AI Soarem Profissionais (Dicas de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-vs-udio": {
    title: "Suno vs Udio: Qual Gerador de Música AI É Melhor em 2026?",
    seoTitle: "Suno vs Udio 2026: Qual Gerador de Música AI É Realmente Melhor? | Solfej",
    description: "Uma comparação honesta de Suno e Udio em 2026. Testamos ambos em vocais, progressões de acordes, precisão de gênero e qualidade musical — com análise real de teoria musical.",
    timeToRead: "9 min",
    body: `
<p>Suno e Udio são os dois maiores geradores de música AI em 2026. Ambos permitem digitar um prompt de texto e receber uma música completa de volta. Mas eles produzem resultados notavelmente diferentes — e qual é "melhor" depende do que você está tentando fazer.</p>
<p>A maioria das comparações foca na qualidade do áudio e preços. Esta foca em algo mais útil: o que cada ferramenta realmente faz com teoria musical, e onde cada uma falha.</p>

<h2>Tabela de Comparação Rápida</h2>
<table>
    <thead>
        <tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
    </thead>
    <tbody>
        <tr><td><b>Velocidade</b></td><td>~30 segundos por música</td><td>~90 segundos por música</td></tr>
        <tr><td><b>Qualidade vocal</b></td><td>Mais natural, melhor emoção</td><td>Melhor dicção, mix mais limpo</td></tr>
        <tr><td><b>Qualidade instrumental</b></td><td>Boa mas pode soar comprimida</td><td>Melhor separação, mix mais limpo</td></tr>
        <tr><td><b>Precisão de acordes</b></td><td>Segue tags de colchetes ~60% do tempo</td><td>Ligeiramente melhor em seguir acordes</td></tr>
        <tr><td><b>Variedade de gêneros</b></td><td>Ampla, melhor em pop/rock/hip-hop</td><td>Ampla, melhor em jazz/clássico</td></tr>
        <tr><td><b>Tier gratuito</b></td><td>10 músicas/dia</td><td>Gerações limitadas/mês</td></tr>
        <tr><td><b>Duração máxima</b></td><td>4 minutos</td><td>Estender até 15+ minutos</td></tr>
    </tbody>
</table>

<h2>Vocais: Suno Vence</h2>
<p>O Suno produz vocais mais emocionalmente expressivos. A IA captura respiração, quebras de voz e mudanças dinâmicas que soam mais próximas de um cantor real. Os vocais do Udio são tecnicamente mais limpos mas frequentemente soam mais robóticos — como um vocal MIDI muito polido.</p>
<p>Para gêneros onde o caráter vocal importa — soul, indie, country — o Suno é o claro vencedor. Para gêneros onde vocais prístinos e processados são esperados — EDM, produção pop — a diferença é menor.</p>

<h2>Instrumentos: Udio Vence</h2>
<p>O Udio produz melhor separação instrumental. Em uma faixa do Suno, guitarra, baixo, bateria e vocais podem sangrar uns nos outros de forma "turva". A saída do Udio a 48kHz soa mais como um mix profissional onde você pode ouvir cada instrumento claramente.</p>
<p>Isso importa mais para arranjos complexos. Se você está gerando uma faixa simples de violão e voz, ambos soam bem. Se está tentando gerar um arranjo de banda completa com múltiplos instrumentos, o Udio lida melhor com a separação.</p>

<h2>Progressões de Acordes: Como Cada Um Lida com Harmonia</h2>
<p>É aqui que fica interessante do ponto de vista da teoria musical. Ambas as ferramentas são treinadas em conjuntos massivos de dados de música popular, então ambas gravitam em direção a <a href="/chords">progressões de acordes</a> comuns. Mas lidam com complexidade harmônica de formas diferentes.</p>

<h3>Progressões simples (I-IV-V-I, vi-IV-I-V)</h3>
<p>Ambas as ferramentas lidam bem com estas. Se você pedir uma música pop em <a href="/scales/c-major">Dó maior</a>, ambas darão progressões construídas com <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a>, <a href="/chords/g-major">G</a> e <a href="/chords/a-minor">Am</a>. Sem vencedor real aqui.</p>

<h3>Harmonia jazz (ii-V-I, acordes estendidos)</h3>
<p>O Udio lida melhor com jazz. Quando solicitado para jazz, o Udio é mais propenso a produzir voicings reais de <a href="/chords/d-minor-7th">menor com sétima</a> e <a href="/chords/c-major-7th">maior com sétima</a> em vez de tríades simplificadas. O Suno tende a "popificar" prompts de jazz — você recebe algo que soa vagamente jazzy mas usa harmonia mais simples.</p>
<p>Se você quer uma faixa que realmente soe como usando uma progressão <a href="/chords/d-minor-7th">Dm7</a> → <a href="/chords/g-dominant-7th">G7</a> → <a href="/chords/c-major-7th">Cmaj7</a>, o Udio é mais propenso a entregar.</p>

<h3>Precisão em tonalidade menor</h3>
<p>Ambas as ferramentas às vezes têm dificuldade em permanecer em uma tonalidade menor. Você pede "sad, A minor" e recebe uma seção que de repente pula para <a href="/scales/a-major">Lá maior</a>. Isso é mais comum no Suno do que no Udio, especialmente em gerações mais longas.</p>
<p>O problema é que ambas as ferramentas são treinadas em músicas que frequentemente misturam maior e menor (a maioria da música pop faz isso), então nem sempre mantêm uma <a href="/scales/a-minor">escala menor</a> estrita ao longo da música.</p>

<h3>Mudanças de tonalidade</h3>
<p>Nenhuma das ferramentas lida bem com mudanças de tonalidade solicitadas. Se você escrever <code>[Key change to Eb major]</code> nas suas letras, ambas vão ignorar na maioria das vezes. O Suno ocasionalmente produz mudanças de tonalidade acidentais (especialmente na seção de bridge), enquanto o Udio tende a ficar em uma tonalidade de forma mais teimosa.</p>

<h2>Precisão de Gênero</h2>
<h3>Onde o Suno é melhor:</h3>
<ul>
    <li><b>Pop / Top 40</b> — O Suno acerta o som pop moderno, completo com os <a href="/chords">voicings de acordes</a> e estilo de produção certos</li>
    <li><b>Hip-hop / Trap</b> — Melhor baixo 808, padrões de hi-hat mais convincentes, captura bem a estética de <a href="/scales/d-minor">tonalidade menor sombria</a></li>
    <li><b>Rock</b> — Guitarras distorcidas mais convincentes, melhor em capturar a energia de <a href="/chords/a-power-chord">power chords</a></li>
    <li><b>Country</b> — Melhor no twang vocal e na abertura de <a href="/scales/g-major">tonalidade maior</a> que define o country</li>
</ul>

<h3>Onde o Udio é melhor:</h3>
<ul>
    <li><b>Jazz</b> — Melhor em <a href="/chords/c-major-7th">acordes estendidos</a>, linhas de walking bass e sensação de swing</li>
    <li><b>Clássico / Orquestral</b> — Melhor separação instrumental significa que cordas, metais e madeiras soam mais realistas</li>
    <li><b>Eletrônico / Ambient</b> — Melhor em design de som sutil e texturas evolutivas</li>
    <li><b>Música do mundo</b> — Mais propenso a incorporar <a href="/scales">escalas</a> e instrumentos não-ocidentais com som autêntico</li>
</ul>

<h2>Prompting: Estratégias Diferentes</h2>
<p>Como as ferramentas dão peso a coisas diferentes, sua estratégia de prompting deve diferir:</p>
<p><b>Para o Suno:</b> Comece com gênero, depois humor, depois tonalidade. O Suno dá mais peso às primeiras palavras. Exemplo: <code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>Para o Udio:</b> Seja mais específico sobre instrumentação e estilo de produção. O Udio responde melhor a descrições detalhadas de som. Exemplo: <code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>Preços (2026)</h2>
<ul>
    <li><b>Suno Free:</b> 50 créditos/dia (10 músicas), uso não comercial</li>
    <li><b>Suno Pro:</b> $10/mês, 500 músicas/mês, licença comercial</li>
    <li><b>Udio Free:</b> Gerações limitadas por mês</li>
    <li><b>Udio Standard:</b> $10/mês, similar ao Suno Pro</li>
</ul>
<p>Os preços são similares. O tier gratuito importa mais para usuários casuais, e a renovação diária de créditos do Suno é mais generosa para experimentação.</p>

<h2>Conclusão</h2>
<ul>
    <li><b>Use o Suno se:</b> Você quer faixas rápidas e cativantes de pop/rock/hip-hop com bons vocais. É mais rápido, mais fácil de usar prompts, e o tier gratuito é melhor.</li>
    <li><b>Use o Udio se:</b> Você precisa de qualidade de áudio superior, melhor separação instrumental, ou está trabalhando com gêneros jazz/clássico/eletrônico onde nuance importa.</li>
    <li><b>Use ambos se:</b> Você leva a sério a música AI. Gere o mesmo prompt em ambos e compare. Você aprenderá muito sobre como cada ferramenta interpreta harmonia e arranjo de forma diferente.</li>
</ul>
<p>E independentemente de qual ferramenta você use — aprenda alguns <a href="/chords">acordes</a> e <a href="/scales">escalas</a> básicos. Saber o que você está pedindo (e o que está recebendo de volta) é a diferença entre resultado aleatório e música intencional.</p>

<p><b><a href="/chords">Pesquise qualquer acorde no Solfej →</a></b></p>
<p><b><a href="/scales">Pesquise qualquer escala no Solfej →</a></b></p>

<h2>Mais Guias de Suno AI</h2>
<ul>
    <li><a href="/pt/blog/suno-ai-chord-progressions">Progressões de Acordes no Suno AI: Como Controlar Quais Acordes o Suno Toca</a></li>
    <li><a href="/pt/blog/suno-ai-prompt-guide">Guia de Prompts Suno AI: O Cheat Sheet de Teoria Musical para Músicas Melhores</a></li>
    <li><a href="/pt/blog/suno-ai-tips">Como Fazer Músicas do Suno AI Soarem Profissionais (Dicas de Teoria Musical)</a></li>
</ul>
`,
  },
  "suno-ai-tips": {
    title: "Como Fazer Músicas do Suno AI Soarem Profissionais (Dicas de Teoria Musical)",
    seoTitle: "Como Fazer Músicas do Suno AI Soarem Profissionais: Dicas de Teoria Musical (2026) | Solfej",
    description: "Suas músicas do Suno AI soam amadoras porque está faltando teoria musical básica. Aqui estão os conceitos específicos que farão sua música gerada por AI soar dramaticamente melhor.",
    timeToRead: "8 min",
    body: `
<p>Você gerou 50 músicas no Suno. Algumas soam decentes. A maioria soa genérica. Algumas soam ativamente ruins. O problema não é o Suno — é que você está fazendo prompts às cegas.</p>
<p>A diferença entre uma saída genérica do Suno e algo que realmente soa como uma música real se resume a entender um punhado de conceitos de teoria musical. Aqui estão os que mais importam.</p>

<h2>Dica 1: Pare de Escolher Tonalidades Aleatórias</h2>
<p>A maioria dos usuários do Suno não especifica uma tonalidade ou escolhe uma aleatoriamente. Isso é como cozinhar sem saber quais sabores combinam.</p>
<p>Cada tonalidade tem uma personalidade. Isso não é misticismo — é porque diferentes tonalidades se posicionam diferentemente nos instrumentos e no alcance vocal humano:</p>
<ul>
    <li><a href="/scales/c-major">Dó maior</a> — A "tela em branco". Limpa e simples, sem sustenidos ou bemóis. Melhor para: pop direto.</li>
    <li><a href="/scales/g-major">Sol maior</a> — Aberta e brilhante. Amigável para violão (muitas cordas soltas). Melhor para: folk, country, rock.</li>
    <li><a href="/scales/e-minor">Mi menor</a> — Escura e poderosa. A tonalidade mais comum no rock. Melhor para: rock, metal, pop dramático.</li>
    <li><a href="/scales/a-minor">Lá menor</a> — Triste mas acessível. Melhor para: baladas, indie, cantor-compositor.</li>
    <li><a href="/scales/d-minor">Ré menor</a> — Profunda e sombria. Comum no hip-hop e trap. Melhor para: trap, R&B sombrio, trilhas sonoras.</li>
    <li><a href="/scales/bb-major">Sib maior</a> — Quente e rica. A tonalidade padrão do jazz. Melhor para: jazz, soul, R&B.</li>
</ul>
<p><b>A solução:</b> Combine sua tonalidade com seu gênero. Usar <code>G major</code> para uma música folk ou <code>D minor</code> para um beat trap instantaneamente faz a saída parecer mais autêntica.</p>

<h2>Dica 2: Entenda Por Que Suas Músicas Soam "Iguais"</h2>
<p>Se todas as suas músicas do Suno soam similares, é porque todas estão usando a mesma progressão de acordes. O Suno usa por padrão as progressões pop mais comuns quando você não dá direção:</p>
<ul>
    <li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> (a "música de quatro acordes")</li>
    <li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> (mesmos acordes, começo menor)</li>
</ul>
<p>Essas progressões dominam a música pop, então o Suno gravita em direção a elas por padrão. Para sair disso, você precisa solicitar progressões diferentes.</p>
<p><b>A solução:</b> Adicione tags de acordes entre colchetes nas suas letras para direcionar o Suno a progressões menos comuns. Tente:</p>
<ul>
    <li><code>[Dm] [G] [C] [Am]</code> — ii-V-I-vi, comum no soul e jazz-pop</li>
    <li><code>[Am] [Em] [F] [Dm]</code> — i-v-VI-iv, mais escura e dramática</li>
    <li><code>[C] [Em] [Am] [G]</code> — I-iii-vi-V, usada no rock dos anos 60/70 (estilo Beatles)</li>
</ul>
<p>Não sabe o que esses algarismos romanos significam? Cada número representa um acorde construído naquele grau da escala. Em <a href="/scales/c-major">Dó maior</a>, I = <a href="/chords/c-major">C</a>, ii = <a href="/chords/d-minor">Dm</a>, iii = <a href="/chords/e-minor">Em</a>, IV = <a href="/chords/f-major">F</a>, V = <a href="/chords/g-major">G</a>, vi = <a href="/chords/a-minor">Am</a>.</p>

<h2>Dica 3: Use Tensão e Resolução</h2>
<p>Músicas profissionais não ficam em um só nível de energia — elas constroem tensão e depois a liberam. É disso que as cadências tratam.</p>
<p>O padrão de tensão-resolução mais importante na música é <b>V → I</b>: o <a href="/chords/g-major">acorde de Sol maior</a> resolvendo para <a href="/chords/c-major">Dó maior</a> (na tonalidade de Dó). Isso é chamado de cadência autêntica, e é o som de "final satisfatório" que você já ouviu em milhares de músicas.</p>
<p>Você não pode solicitar cadências diretamente ao Suno, mas pode construí-las nas suas tags de acordes entre colchetes. Termine seu refrão com <code>[G] [C]</code> para uma resolução forte, ou <code>[G] [Am]</code> para uma surpresa que mantém o ouvinte em suspenso (isso é uma cadência deceptiva).</p>
<p>Outras ferramentas de tensão:</p>
<ul>
    <li><b><a href="/chords/c-dominant-7th">Acordes de sétima dominante</a></b> — Adicionar uma sétima ao acorde V (<a href="/chords/g-dominant-7th">G7</a> em vez de <a href="/chords/g-major">G</a>) aumenta a atração para a resolução. Ótimo para blues e jazz.</li>
    <li><b><a href="/chords/c-suspended-4th">Acordes suspensos</a></b> — Acordes sus4 criam uma sensação suspensa, não resolvida. Use <code>[Csus4] [C]</code> para um efeito sutil de "abertura".</li>
    <li><b><a href="/chords/c-minor">Acordes menores</a> em tonalidades maiores</b> — Inserir um <a href="/chords/a-minor">Am</a> inesperado em um contexto de <a href="/scales/c-major">Dó maior</a> cria peso emocional instantâneo.</li>
</ul>

<h2>Dica 4: Combine Seu Tempo com Seu Gênero</h2>
<p>Tempo errado é uma das maneiras mais fáceis de fazer uma música do Suno soar errada. Cada gênero tem uma faixa de tempo natural. Se seu "chill lo-fi beat" está a 140 BPM, não vai soar chill não importa que outras palavras você use.</p>
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
<p><b>A solução:</b> Sempre inclua BPM no seu prompt de estilo. <code>Lo-fi hip hop, 82 BPM, chill</code> produzirá resultados muito melhores do que apenas <code>Lo-fi hip hop, chill</code>.</p>

<h2>Dica 5: Aprenda a Escala Blues (Sério)</h2>
<p>Se você só aprender uma escala para prompts do Suno, aprenda a <a href="/scales/a-blues">escala blues</a>. É a fundação do rock, blues, R&B, hip-hop e uma grande parte da música pop.</p>
<p>A <a href="/scales/a-blues">escala blues de Lá</a> é: A - C - D - Eb - E - G. Seis notas. É isso.</p>
<p>Por que isso importa para o Suno: quando você solicita gêneros bluesy, soulful ou gritty e o Suno gera uma melodia, ele frequentemente está extraindo desta escala. Se você reconhece isso, pode dizer se o Suno deu o que você pediu. Se a melodia soa "alegre demais" para um prompt de blues, significa que o Suno usou por padrão uma <a href="/scales/a-major">escala maior</a> — regenere.</p>
<p>Outras escalas úteis para reconhecer:</p>
<ul>
    <li><a href="/scales/a-major-pentatonic">Pentatônica maior</a> — a versão "alegre" da escala blues. Usada em pop, country e solos de rock clássico.</li>
    <li><a href="/scales/a-harmonic-minor">Menor harmônica</a> — adiciona um sabor dramático, oriental ou clássico. Use "mysterious" ou "dark classical" no prompt.</li>
    <li><a href="/scales/a-dorian">Dórica</a> — uma escala menor que soa menos deprimente. Usada em funk, rock estilo Santana e música eletrônica estilo Daft Punk.</li>
</ul>

<h2>Dica 6: Estruture Sua Música Como uma Música Real</h2>
<p>O Suno responde a tags de estrutura entre colchetes. Em vez de deixá-lo decidir a estrutura, diga a ele:</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>O bridge é onde a maioria das músicas do Suno melhora. Músicas reais usam o bridge para introduzir contraste harmônico — frequentemente movendo para um acorde diferente ou até uma tonalidade diferente brevemente. Mesmo que você não possa forçar o Suno a mudar de tonalidade, apenas ter a tag <code>[Bridge]</code> tende a produzir algo musicalmente diferente dos versos e refrão.</p>
<p>Dica profissional: use tags de acordes diferentes no seu bridge. Se seu verso usa <code>[Am] [F] [C] [G]</code>, tente <code>[Dm] [Em] [F] [G]</code> para o bridge. Isso dá ao Suno um "limpador de palato" harmônico antes do refrão final.</p>

<h2>Dica 7: Use Seus Ouvidos, Não Apenas Seus Olhos</h2>
<p>Esta é a meta-dica que separa bons usuários do Suno de todos os outros: <b>ouça criticamente o que o Suno gera.</b></p>
<p>Quando você receber um resultado, pergunte a si mesmo:</p>
<ul>
    <li>A melodia permanece na tonalidade, ou vagueia para notas que soam "erradas"?</li>
    <li>A progressão de acordes realmente se move, ou apenas repete os mesmos dois acordes?</li>
    <li>Há variedade dinâmica — o refrão parece maior que o verso?</li>
    <li>A música termina bem, ou simplesmente... para?</li>
</ul>
<p>Desenvolver esse ouvido leva tempo. Mas cada vez que você pesquisa um <a href="/chords">acorde</a> que ouve e descobre o que é, ou identifica qual <a href="/scales">escala</a> uma melodia usa, você fica um pouco melhor nisso. E isso torna cada prompt futuro do Suno mais eficaz.</p>

<p><b><a href="/chords">Pesquise qualquer acorde no Solfej →</a></b></p>
<p><b><a href="/scales">Pesquise qualquer escala no Solfej →</a></b></p>

<h2>Mais Guias de Suno AI</h2>
<ul>
    <li><a href="/pt/blog/suno-ai-chord-progressions">Progressões de Acordes no Suno AI: Como Controlar Quais Acordes o Suno Toca</a></li>
    <li><a href="/pt/blog/suno-ai-prompt-guide">Guia de Prompts Suno AI: O Cheat Sheet de Teoria Musical para Músicas Melhores</a></li>
    <li><a href="/pt/blog/suno-vs-udio">Suno vs Udio: Qual Gerador de Música AI É Melhor em 2026?</a></li>
</ul>
`,
  },
}
