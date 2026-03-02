module.exports = {
  "suno-ai-chord-progressions": {
    title: "Suno AI 和弦进行：如何真正控制 Suno 演奏的和弦",
    seoTitle: "Suno AI 和弦进行：如何在 Suno 中指定和弦（2026 指南）| Solfej",
    description: "了解如何在 Suno AI 提示词中指定和弦进行。包含常见进行的实用示例、大调和小调的技巧，以及为什么基础乐理知识能让你的 Suno 歌曲效果提升十倍。",
    timeToRead: "10 分钟",
    body: `<p>使用 Suno AI 时最常见的困扰之一是你无法精确控制它演奏哪些和弦。你输入"A minor 的悲伤民谣"，得到的东西听起来大概是小调——但实际的和弦进行完全靠运气。</p>
<p>好消息是：有一些方法可以引导 Suno 走向特定的和弦进行。更好的消息是：了解一点乐理知识可以让你对输出结果有更大的控制力。以下是 2026 年所有有效的方法。</p>

<h2>问题所在：Suno 会把你的和弦唱出来而不是演奏出来</h2>
<p>如果你在 Suno 提示词中直接输入 <code>Am - F - G - Em</code>，AI 很可能会把"A minor, F, G, E minor"当作歌词唱出来，而不是用乐器演奏这些和弦。</p>
<p>这是因为 Suno 会将歌词栏中的所有内容视为要演唱的文本。它并不像音乐家阅读主旋律谱那样原生理解和弦符号。你需要想办法绕过这个限制。</p>

<h2>方法一：在歌词栏中使用方括号标签</h2>
<p>最可靠的方法是在歌词中用方括号包裹和弦名称，像这样：</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>这告诉 Suno"这些是结构标签，不是要唱的歌词"。它并不总是完美地遵循这些标签，但能大幅增加获得正确和声走向的概率。</p>
<p>不确定 Am、F、G 和 Em 具体是什么？以下是音乐层面上发生的事情：</p>
<ul>
    <li><a href="/chords/a-minor">Am（A 小调）</a>——主和弦，在 A 小调中设定"基调"</li>
    <li><a href="/chords/f-major">F 大调</a>——六级和弦，增添一丝苦甜的提升感</li>
    <li><a href="/chords/g-major">G 大调</a>——七级和弦，创造向前的推动力</li>
    <li><a href="/chords/e-minor">Em（E 小调）</a>——自然小调中的五级和弦，比<a href="/chords/e-major">大调 V 和弦</a>产生更柔和的解决</li>
</ul>
<p>这是流行和摇滚音乐中最常见的进行之一——你在数百首歌曲中都听过它。</p>

<h2>方法二：使用风格栏进行和声引导</h2>
<p>在 Suno 的自定义模式中，音乐风格栏接受流派和情绪描述词。你可以将此与歌词中的和弦信息结合使用：</p>
<p><b>风格栏：</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>歌词栏：</b> 你的歌词加上方括号和弦标签</p>
<p>在风格栏中指定调性有助于 Suno 保持在正确的和声范围内。如果你输入"A minor key"，Suno 更可能使用 <a href="/scales/a-minor">A 自然小调音阶</a>中的和弦（Am、Bdim、C、Dm、Em、F、G）。</p>

<h2>在 Suno 中效果最好的 5 个和弦进行</h2>
<p>Suno 是在数百万首歌曲上训练的，因此它自然倾向于流行音乐中常见的进行。以下五个效果最为可靠：</p>

<h3>1. I - V - vi - IV（"流行进行"）</h3>
<p>在 C 大调中：<a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>这是现代流行音乐中最常见的和弦进行。它出现在《Let It Be》、《No Woman No Cry》、《Someone Like You》以及数百首歌曲中。如果你用欢快的流行氛围提示 Suno，它往往会自然地落在这个进行上。</p>
<p><b>Suno 提示词技巧：</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V（"悲伤流行进行"）</h3>
<p>在 C 大调中：<a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>和上面相同的和弦，但从小调和弦开始会完全改变感觉。这在情感流行和抒情歌曲中随处可见。从 <a href="/chords/a-minor">A 小调</a>而非 <a href="/chords/c-major">C 大调</a>开始赋予了它忧郁的特质。</p>
<p><b>Suno 提示词技巧：</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I（"蓝调/摇滚进行"）</h3>
<p>在 A 大调中：<a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>摇滚、乡村和蓝调的骨架。如果你想让 Suno 生成听起来像经典摇滚的东西，在风格栏中输入这三个和弦效果很好。想要更具蓝调感，使用 <a href="/chords/a-dominant-7th">A7</a>、<a href="/chords/d-dominant-7th">D7</a> 和 <a href="/chords/e-dominant-7th">E7</a>——属七和弦正是赋予蓝调特征声音的关键。</p>
<p><b>Suno 提示词技巧：</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I（"爵士进行"）</h3>
<p>在 C 大调中：<a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>ii-V-I 是爵士乐中最重要的进行。让 Suno 准确演奏这个进行更困难，因为它涉及扩展和弦（七和弦）。你可以尝试用 <code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code> 来提示，但结果各异。Suno 处理简单爵士比复杂的比波普要好。</p>
<p>如果你想了解为什么这个进行如此重要，可以查阅 <a href="/chords/d-minor-7th">Dm7</a>（ii 和弦）、<a href="/chords/g-dominant-7th">G7</a>（V 和弦）和 <a href="/chords/c-major-7th">Cmaj7</a>（I 和弦）。这三个和弦之间音符的移动方式——称为声部进行——正是赋予爵士乐流畅、精致声音的原因。</p>

<h3>5. i - VI - III - VII（"史诗小调进行"）</h3>
<p>在 A 小调中：<a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>这在电影配乐、戏剧性和史诗感的音乐中频繁出现。技术上它和悲伤流行进行的和弦相同，但当你用"epic orchestral"或"cinematic trailer"的氛围提示 Suno 时，它往往会以更宏大的动态来编排这些和弦。</p>
<p><b>Suno 提示词技巧：</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>为什么了解调性很重要</h2>
<p>当你告诉 Suno 一个调性——比如"in C major"——你就在约束它可能选择的和弦。每个调性都有一组自然属于它的和弦。对于 <a href="/scales/c-major">C 大调</a>，这些和弦是：</p>
<ul>
    <li>I —— <a href="/chords/c-major">C 大调</a></li>
    <li>ii —— <a href="/chords/d-minor">D 小调</a></li>
    <li>iii —— <a href="/chords/e-minor">E 小调</a></li>
    <li>IV —— <a href="/chords/f-major">F 大调</a></li>
    <li>V —— <a href="/chords/g-major">G 大调</a></li>
    <li>vi —— <a href="/chords/a-minor">A 小调</a></li>
    <li>vii° —— <a href="/chords/b-diminished">B 减和弦</a></li>
</ul>
<p>如果 Suno 生成了不在这个列表中的和弦，它就是在"跳出调性"——这可能听起来有意为之且很酷，也可能显得随机和糟糕。在提示词中指定调性可以减少这种随机性。</p>
<p>对于小调，和弦是不同的。在 <a href="/scales/a-minor">A 小调</a>中：</p>
<ul>
    <li>i —— <a href="/chords/a-minor">A 小调</a></li>
    <li>ii° —— <a href="/chords/b-diminished">B 减和弦</a></li>
    <li>III —— <a href="/chords/c-major">C 大调</a></li>
    <li>iv —— <a href="/chords/d-minor">D 小调</a></li>
    <li>v —— <a href="/chords/e-minor">E 小调</a></li>
    <li>VI —— <a href="/chords/f-major">F 大调</a></li>
    <li>VII —— <a href="/chords/g-major">G 大调</a></li>
</ul>

<h2>使用情绪词汇来引导音阶选择</h2>
<p>Suno 不能直接理解音阶名称，但它能理解情绪。你可以利用这一点间接控制音阶：</p>
<ul>
    <li><b>"Bright"或"happy"</b> —— 倾向于产生<a href="/scales/c-major">大调音阶</a>旋律</li>
    <li><b>"Sad"或"melancholic"</b> —— 倾向于产生<a href="/scales/a-minor">自然小调</a>旋律</li>
    <li><b>"Bluesy"或"gritty"</b> —— 倾向于产生<a href="/scales/a-blues">蓝调音阶</a>旋律</li>
    <li><b>"Mysterious"或"dark"</b> —— 倾向于产生<a href="/scales/a-harmonic-minor">和声小调</a>旋律</li>
    <li><b>"Funky"或"groovy"</b> —— 倾向于产生<a href="/scales/a-mixolydian-pentatonic">混合利底亚</a>风味</li>
    <li><b>"Ethereal"或"dreamy"</b> —— 倾向于产生<a href="/scales/a-lydian-pentatonic">利底亚</a>风格的旋律</li>
</ul>
<p>这些并不是保证——Suno 是概率性的，不是确定性的。但将情绪词汇与调性和方括号和弦标签结合使用，能给你最大的机会获得你想要的效果。</p>

<h2>Suno 目前仍做不到的事情</h2>
<p>坦诚地说一下局限性：</p>
<ul>
    <li><b>精确的和弦排列</b>——你不能让 Suno 演奏 <a href="/chords/c-major">C 大调</a>的第二转位。它会自行选择排列方式。</li>
    <li><b>歌曲中途转调</b>——提示转调（调性变化）很少能可靠地实现。</li>
    <li><b>复杂的爵士和声</b>——变化和弦、三全音替代和扩展和声超出了 Suno 的处理能力。</li>
    <li><b>特定的终止式</b>——你无法可靠地提示在特定位置使用欺骗终止式或半终止式。</li>
</ul>
<p>对于超出基本流行/摇滚/民谣和声的需求，自己学习乐理并使用 DAW 会得到更好的结果。</p>

<p><b><a href="/chords">在 Solfej 上查找任何和弦 &rarr;</a></b></p>
<p><b><a href="/scales">在 Solfej 上查找任何音阶 &rarr;</a></b></p>

<h2>更多 Suno AI 指南</h2>
<ul>
    <li><a href="/zh/blog/suno-ai-prompt-guide">Suno AI 提示词指南：让歌曲更出色的乐理速查表</a></li>
    <li><a href="/zh/blog/suno-vs-udio">Suno vs Udio：2026 年哪个 AI 音乐生成器更好？</a></li>
    <li><a href="/zh/blog/suno-ai-tips">如何让 Suno AI 歌曲听起来更专业（乐理技巧）</a></li>
</ul>`,
  },
  "suno-ai-prompt-guide": {
    title: "Suno AI 提示词指南：让歌曲更出色的乐理速查表",
    seoTitle: "Suno AI 提示词指南：让提示词更有效的乐理速查表（2026）| Solfej",
    description: "一份使用基础乐理编写更好的 Suno AI 提示词的实用指南。涵盖调性、音阶、调式、速度，以及如何将你脑海中的音乐转化为有效的提示词。",
    timeToRead: "9 分钟",
    body: `<p>大多数 Suno AI 提示词指南告诉你添加流派标签和情绪词汇。这没问题，但只是皮毛。从 Suno 获得最佳效果的人是那些懂一点乐理的人——因为他们能用 AI 真正能响应的术语来描述自己想要的东西。</p>
<p>你不需要音乐学位。你只需要大约 10 分钟和这份速查表。</p>

<h2>Suno 真正理解的 4 件事</h2>
<p>Suno 的风格提示栏对四种类型的音乐信息有响应。按可靠性从高到低排列：</p>
<ol>
    <li><b>流派</b>——"indie rock"、"lo-fi hip hop"、"jazz ballad"</li>
    <li><b>情绪/能量</b>——"melancholic"、"aggressive"、"dreamy"</li>
    <li><b>配器</b>——"acoustic guitar"、"piano and strings"、"808s"</li>
    <li><b>音乐参数</b>——调性、速度/BPM、拍号</li>
</ol>
<p>大多数人只使用第 1 和第 2 项。加入第 3 项尤其是第 4 项，正是乐理知识给你带来优势的地方。</p>

<h2>调性：大调 vs 小调（以及为什么重要）</h2>
<p>你能添加到 Suno 提示词中最具影响力的一件事就是调性。它告诉 AI 使用哪些音符和和弦。</p>
<p><b>大调</b>听起来明亮、欢快、有归属感。如果你提示 <code>C major</code>，Suno 会倾向于围绕 <a href="/scales/c-major">C 大调音阶</a>构建，使用 <a href="/chords/c-major">C</a>、<a href="/chords/f-major">F</a> 和 <a href="/chords/g-major">G</a> 等和弦。</p>
<p><b>小调</b>听起来暗沉、悲伤、紧张。如果你提示 <code>A minor</code>，Suno 会从 <a href="/scales/a-minor">A 小调音阶</a>中取材，使用 <a href="/chords/a-minor">Am</a>、<a href="/chords/d-minor">Dm</a> 和 <a href="/chords/e-minor">Em</a> 等和弦。</p>
<p>以下是常见调性及其倾向产生的感觉的快速参考：</p>
<ul>
    <li><a href="/scales/c-major">C 大调</a> / <a href="/scales/a-minor">A 小调</a>——无升降号，"中性"感觉，在流行音乐中非常常见</li>
    <li><a href="/scales/g-major">G 大调</a> / <a href="/scales/e-minor">E 小调</a>——明亮开阔，在民谣和摇滚中常见</li>
    <li><a href="/scales/d-major">D 大调</a> / <a href="/scales/b-minor">B 小调</a>——温暖而有共鸣，非常适合原声吉他歌曲</li>
    <li><a href="/scales/f-major">F 大调</a> / <a href="/scales/d-minor">D 小调</a>——略暗的大调，适合抒情歌曲</li>
    <li><a href="/scales/eb-major">Eb 大调</a> / <a href="/scales/c-minor">C 小调</a>——丰富饱满，在 R&B 和灵魂乐中常见</li>
</ul>

<h2>速度：BPM 速查表</h2>
<p>在提示词中添加 BPM（每分钟节拍数）可以让你控制能量水平。Suno 对精确的 BPM 数字和意大利语速度术语都有响应。</p>
<ul>
    <li><b>60-70 BPM（Adagio/柔板）</b>——非常慢。抒情曲、氛围音乐、电影配乐。<code>"Slow ballad, 65 BPM, piano"</code></li>
    <li><b>70-90 BPM（Andante/行板）</b>——步行节奏。Lo-fi hip hop、R&B。<code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
    <li><b>90-110 BPM（Moderato/中板）</b>——中速。流行、独立、民谣。<code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
    <li><b>110-130 BPM（Allegro/快板）</b>——欢快。流行、摇滚、舞曲。<code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
    <li><b>130-160 BPM（Vivace/活泼）</b>——快速。朋克、Drum & bass、EDM。<code>"Punk rock, 150 BPM, aggressive"</code></li>
    <li><b>160+ BPM（Presto/急板）</b>——非常快。Drum & bass、速度金属。<code>"Drum and bass, 170 BPM, dark"</code></li>
</ul>

<h2>调式：超越大调和小调</h2>
<p>调式是各具独特情绪的音阶。Suno 并不总是直接响应调式名称，但你可以用情绪词汇来引导它：</p>
<ul>
    <li><b><a href="/scales/c-major">伊奥尼亚（Ionian）</a>（大调音阶）</b>——欢快、明亮 &rarr; 提示词：<code>"bright, uplifting, major key"</code></li>
    <li><b><a href="/scales/c-dorian">多利亚（Dorian）</a></b>——小调但带有希望感 &rarr; 提示词：<code>"minor key, slightly funky, Santana-esque"</code></li>
    <li><b><a href="/scales/c-phrygian">弗里吉亚（Phrygian）</a></b>——西班牙/中东风味 &rarr; 提示词：<code>"Spanish guitar, dark, flamenco-influenced"</code></li>
    <li><b><a href="/scales/c-lydian-pentatonic">利底亚（Lydian）</a></b>——梦幻、飘浮、空灵 &rarr; 提示词：<code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
    <li><b><a href="/scales/c-mixolydian-pentatonic">混合利底亚（Mixolydian）</a></b>——蓝调感、摇滚、略带不解决感 &rarr; 提示词：<code>"classic rock, bluesy, Grateful Dead"</code></li>
    <li><b><a href="/scales/a-minor">爱奥利亚（Aeolian）</a>（自然小调）</b>——悲伤、黑暗 &rarr; 提示词：<code>"sad, dark, melancholic, minor key"</code></li>
</ul>
<p>关键洞察：每个调式只是从不同音符开始的普通音阶。<a href="/scales/c-dorian">C 多利亚</a>使用与 <a href="/scales/bb-major">Bb 大调</a>相同的音符，但听起来完全不同，因为"根音"是 C 而不是 Bb。如果你想深入了解，可以在 Solfej 上查找这些音阶中的任何一个。</p>

<h2>综合运用：提示词模板</h2>
<p>以下是结合了流派、情绪、调性和速度的即用模板：</p>

<h3>悲伤的原声民谣</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>这个模板有效是因为：<a href="/scales/a-minor">A 小调</a>是吉他舒适的调性，75 BPM 足够慢适合抒情曲，情绪词汇强化了小调的调性感。</p>

<h3>欢快的流行歌曲</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>这个模板有效是因为：<a href="/scales/c-major">C 大调</a>是最明亮、最"基础"的调性——没有升降号——而 118 BPM 恰好处于流行音乐的最佳范围内。</p>

<h3>暗黑 Trap 节拍</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>这个模板有效是因为：<a href="/scales/d-minor">D 小调</a>是 Trap 的常见调性（与 808 低音搭配良好），140 BPM 是标准的 Trap 速度。</p>

<h3>爵士标准曲</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>这个模板有效是因为：<a href="/scales/bb-major">Bb 大调</a>是最常见的爵士调性（铜管乐器是按 Bb 制造的），指定"walking bass"和"swing"有助于 Suno 把握正确的节奏感。</p>

<h3>Lo-fi 学习节拍</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>这个模板有效是因为：<a href="/scales/f-major">F 大调</a>具有温暖、略带柔和的特质，85 BPM 是 Lo-fi 的最佳速度，"jazzy chords"会推动 Suno 使用<a href="/chords/f-major-7th">大七和弦</a>和<a href="/chords/f-dominant-7th">属七和弦</a>的排列。</p>

<h2>常见错误</h2>
<ul>
    <li><b>提示词过载</b>——不要在风格栏中放入 15 个描述词。Suno 对前几个词赋予的权重最大。以流派和调性开头。</li>
    <li><b>指令矛盾</b>——"Happy, bright, D minor"是自相矛盾的。<a href="/scales/d-minor">D 小调</a>是一个悲伤的调性。让你的情绪词汇与调性匹配。</li>
    <li><b>忽略 BPM</b>——如果你提示"energetic"但不指定速度，Suno 可能会给你一首慢歌。对于依赖能量感的流派，务必添加 BPM。</li>
    <li><b>期望精确复现</b>——Suno 是概率性的。它会让你接近你要求的效果，但不会精确复现。生成 3-4 个版本然后选最好的。</li>
</ul>

<h2>真正的优势：了解你听到的是什么</h2>
<p>学习基础乐理的最大意义不在于写更好的 Suno 提示词——而在于理解 Suno 给你回来的东西。当你生成一首曲子觉得"这听起来很酷"时，能够说出"这是因为它在 <a href="/chords/c-minor-7th">小七和弦</a>上使用了<a href="/scales/c-dorian">多利亚</a>音阶"意味着你可以有意识地重现那种声音，而不是靠运气。</p>
<p>如果什么都不学，至少学这三件事：</p>
<ul>
    <li><a href="/chords/c-major">大调</a>和<a href="/chords/c-minor">小调</a>和弦的区别（以及为什么它们听起来不同）</li>
    <li>什么是<a href="/scales/c-major">音阶</a>以及它如何决定哪些音符在一个调性中"合适"</li>
    <li>什么是终止式——它们是某些结尾听起来完整而另一些感觉悬而未决的原因</li>
</ul>

<p><b><a href="/chords">在 Solfej 上查找任何和弦 &rarr;</a></b></p>
<p><b><a href="/scales">在 Solfej 上查找任何音阶 &rarr;</a></b></p>

<h2>更多 Suno AI 指南</h2>
<ul>
    <li><a href="/zh/blog/suno-ai-chord-progressions">Suno AI 和弦进行：如何控制 Suno 演奏的和弦</a></li>
    <li><a href="/zh/blog/suno-vs-udio">Suno vs Udio：2026 年哪个 AI 音乐生成器更好？</a></li>
    <li><a href="/zh/blog/suno-ai-tips">如何让 Suno AI 歌曲听起来更专业（乐理技巧）</a></li>
</ul>`,
  },
  "suno-vs-udio": {
    title: "Suno vs Udio：2026 年哪个 AI 音乐生成器更好？",
    seoTitle: "Suno vs Udio 2026：哪个 AI 音乐生成器真正更好？| Solfej",
    description: "2026 年 Suno 和 Udio 的真实对比。我们从人声、和弦进行、流派准确性和音乐质量方面测试两者——附带实际的乐理分析。",
    timeToRead: "9 分钟",
    body: `<p>Suno 和 Udio 是 2026 年两大 AI 音乐生成器。两者都让你输入文本提示词就能获得完整的歌曲。但它们产生的结果明显不同——哪个"更好"取决于你想做什么。</p>
<p>大多数对比文章侧重于音频质量和定价。这篇文章侧重于更实用的内容：每个工具在乐理方面实际做了什么，以及各自在哪些地方表现不足。</p>

<h2>快速对比表</h2>
<table>
    <thead>
        <tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
    </thead>
    <tbody>
        <tr><td><b>速度</b></td><td>每首歌约 30 秒</td><td>每首歌约 90 秒</td></tr>
        <tr><td><b>人声质量</b></td><td>更自然，情感更丰富</td><td>咬字更清晰，混音更干净</td></tr>
        <tr><td><b>器乐质量</b></td><td>不错但可能听起来有压缩感</td><td>分离度更好，混音更干净</td></tr>
        <tr><td><b>和弦准确度</b></td><td>约 60% 的时间遵循方括号标签</td><td>遵循和弦的准确度略高</td></tr>
        <tr><td><b>流派范围</b></td><td>广泛，最擅长流行/摇滚/嘻哈</td><td>广泛，更擅长爵士/古典</td></tr>
        <tr><td><b>免费层级</b></td><td>每天 10 首歌</td><td>每月有限生成次数</td></tr>
        <tr><td><b>最大时长</b></td><td>4 分钟</td><td>可扩展至 15 分钟以上</td></tr>
    </tbody>
</table>

<h2>人声：Suno 胜出</h2>
<p>Suno 产生的人声情感表达更丰富。AI 能捕捉到气声、声音颤抖和动态变化，听起来更接近真实歌手。Udio 的人声技术上更干净，但听起来往往更机械——像是非常精致的 MIDI 人声。</p>
<p>对于人声个性很重要的流派——灵魂乐、独立音乐、乡村音乐——Suno 是明显的赢家。对于期望精致处理人声的流派——EDM、流行制作——差异较小。</p>

<h2>器乐：Udio 胜出</h2>
<p>Udio 产生更好的乐器分离度。在 Suno 的音轨中，吉他、贝斯、鼓和人声可能会相互渗透，听起来"浑浊"。Udio 以 48kHz 输出的声音更像专业混音，你可以清晰地听到每件乐器。</p>
<p>这对复杂编排最为重要。如果你生成简单的原声吉他加人声音轨，两者听起来都不错。如果你想生成包含多种乐器的完整乐队编排，Udio 在分离度方面表现更好。</p>

<h2>和弦进行：各自如何处理和声</h2>
<p>从乐理角度来看这部分最有趣。两个工具都是在海量流行音乐数据集上训练的，因此都倾向于常见的<a href="/chords">和弦进行</a>。但它们处理和声复杂性的方式不同。</p>

<h3>简单进行（I-IV-V-I、vi-IV-I-V）</h3>
<p>两个工具都能很好地处理这些。如果你提示一首 <a href="/scales/c-major">C 大调</a>的流行歌曲，两者都能可靠地给出由 <a href="/chords/c-major">C</a>、<a href="/chords/f-major">F</a>、<a href="/chords/g-major">G</a> 和 <a href="/chords/a-minor">Am</a> 构成的进行。这里没有明显的赢家。</p>

<h3>爵士和声（ii-V-I、扩展和弦）</h3>
<p>Udio 处理爵士更好。当提示爵士风格时，Udio 更可能产生实际的<a href="/chords/d-minor-7th">小七和弦</a>和<a href="/chords/c-major-7th">大七和弦</a>排列，而非简化的三和弦。Suno 倾向于将爵士提示"流行化"——你得到的东西听起来隐约有爵士味但使用更简单的和声。</p>
<p>如果你想要一首听起来确实使用了 <a href="/chords/d-minor-7th">Dm7</a> &rarr; <a href="/chords/g-dominant-7th">G7</a> &rarr; <a href="/chords/c-major-7th">Cmaj7</a> 进行的曲子，Udio 更可能实现。</p>

<h3>小调准确性</h3>
<p>两个工具有时都难以保持在小调中。你提示"sad, A minor"却得到突然跳到 <a href="/scales/a-major">A 大调</a>的段落。这在 Suno 中比 Udio 更常见，尤其是在较长的生成中。</p>
<p>问题在于两个工具都是在经常混合大调和小调的歌曲上训练的（大多数流行音乐都这样），所以它们不总是在整首歌中保持严格的<a href="/scales/a-minor">小调音阶</a>。</p>

<h3>转调</h3>
<p>两个工具都不能很好地处理提示中的转调。如果你在歌词中写 <code>[Key change to Eb major]</code>，两者基本都会忽略它。Suno 偶尔会产生意外的转调（尤其在桥段部分），而 Udio 则更固执地保持在一个调性中。</p>

<h2>流派准确性</h2>
<h3>Suno 更好的方面：</h3>
<ul>
    <li><b>流行 / Top 40</b>——Suno 精准把握现代流行音色，包括正确的<a href="/chords">和弦排列</a>和制作风格</li>
    <li><b>嘻哈 / Trap</b>——更好的 808 低音、更有说服力的踩镲模式，很好地捕捉了<a href="/scales/d-minor">暗黑小调</a>美学</li>
    <li><b>摇滚</b>——更有说服力的失真吉他，更好地捕捉<a href="/chords/a-power-chord">强力和弦</a>的能量</li>
    <li><b>乡村</b>——更好地呈现人声的乡村味道和定义乡村音乐的<a href="/scales/g-major">大调</a>开阔感</li>
</ul>

<h3>Udio 更好的方面：</h3>
<ul>
    <li><b>爵士</b>——更好地处理<a href="/chords/c-major-7th">扩展和弦</a>、行走低音线和摇摆感</li>
    <li><b>古典 / 管弦乐</b>——更好的乐器分离度意味着弦乐、铜管和木管听起来更真实</li>
    <li><b>电子 / 氛围</b>——更擅长细腻的音色设计和渐变纹理</li>
    <li><b>世界音乐</b>——更可能融入听起来真实的非西方<a href="/scales">音阶</a>和乐器</li>
</ul>

<h2>提示策略：不同的方法</h2>
<p>因为两个工具对不同元素的权重不同，你的提示策略也应有所不同：</p>
<p><b>对于 Suno：</b>以流派开头，然后是情绪，再是调性。Suno 对前几个词赋予的权重最大。示例：<code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>对于 Udio：</b>对配器和制作风格要更加具体。Udio 对详细的声音描述响应更好。示例：<code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>定价（2026 年）</h2>
<ul>
    <li><b>Suno 免费版：</b>每天 50 积分（10 首歌），非商业用途</li>
    <li><b>Suno 专业版：</b>每月 10 美元，每月 500 首歌，商业许可</li>
    <li><b>Udio 免费版：</b>每月有限生成次数</li>
    <li><b>Udio 标准版：</b>每月 10 美元，与 Suno 专业版类似</li>
</ul>
<p>定价相似。免费层级对休闲用户最重要，而 Suno 的每日积分刷新对于实验探索更为慷慨。</p>

<h2>总结</h2>
<ul>
    <li><b>使用 Suno 如果：</b>你想要快速、朗朗上口的流行/摇滚/嘻哈曲目，并且人声质量好。它更快、更容易提示，免费层级更好。</li>
    <li><b>使用 Udio 如果：</b>你需要更高的音频质量、更好的乐器分离度，或者在爵士/古典/电子等细微差别重要的流派中工作。</li>
    <li><b>两个都用如果：</b>你认真对待 AI 音乐。在两个平台上生成相同的提示词并对比。你会学到很多关于每个工具如何不同地解读和声和编排的知识。</li>
</ul>
<p>无论你使用哪个工具——学一些基础的<a href="/chords">和弦</a>和<a href="/scales">音阶</a>知识。知道你在要求什么（以及你得到了什么）是随机输出和有意识创作音乐之间的区别。</p>

<p><b><a href="/chords">在 Solfej 上查找任何和弦 &rarr;</a></b></p>
<p><b><a href="/scales">在 Solfej 上查找任何音阶 &rarr;</a></b></p>

<h2>更多 Suno AI 指南</h2>
<ul>
    <li><a href="/zh/blog/suno-ai-chord-progressions">Suno AI 和弦进行：如何控制 Suno 演奏的和弦</a></li>
    <li><a href="/zh/blog/suno-ai-prompt-guide">Suno AI 提示词指南：让歌曲更出色的乐理速查表</a></li>
    <li><a href="/zh/blog/suno-ai-tips">如何让 Suno AI 歌曲听起来更专业（乐理技巧）</a></li>
</ul>`,
  },
  "suno-ai-tips": {
    title: "如何让 Suno AI 歌曲听起来更专业（乐理技巧）",
    seoTitle: "如何让 Suno AI 歌曲听起来更专业：乐理技巧（2026）| Solfej",
    description: "你的 Suno AI 歌曲听起来业余，是因为你缺少基础乐理知识。以下是能让你的 AI 生成音乐效果显著提升的具体概念。",
    timeToRead: "8 分钟",
    body: `<p>你已经在 Suno 中生成了 50 首歌。有些听起来还行。大多数听起来千篇一律。有几首甚至很难听。问题不在 Suno——而在于你在盲目提示。</p>
<p>普通的 Suno 输出和听起来像真正歌曲之间的区别，归结为对少数几个乐理概念的理解。以下是最重要的那些。</p>

<h2>技巧 1：别再随便选调性了</h2>
<p>大多数 Suno 用户要么不指定调性，要么随便选一个。这就像不知道什么味道搭配就去做饭一样。</p>
<p>每个调性都有自己的个性。这不是玄学——而是因为不同调性在乐器上和人声音域中的表现不同：</p>
<ul>
    <li><a href="/scales/c-major">C 大调</a>——"空白画布"。干净简洁，无升降号。最适合：直接明了的流行乐。</li>
    <li><a href="/scales/g-major">G 大调</a>——开阔明亮。对吉他友好（很多开放弦）。最适合：民谣、乡村、摇滚。</li>
    <li><a href="/scales/e-minor">E 小调</a>——暗沉而有力。摇滚中最常见的调性。最适合：摇滚、金属、戏剧性流行。</li>
    <li><a href="/scales/a-minor">A 小调</a>——悲伤但易于接受。最适合：抒情曲、独立音乐、创作型歌手。</li>
    <li><a href="/scales/d-minor">D 小调</a>——深沉而忧郁。在嘻哈和 Trap 中常见。最适合：Trap、暗黑 R&B、电影配乐。</li>
    <li><a href="/scales/bb-major">Bb 大调</a>——温暖而丰富。爵士乐的默认调性。最适合：爵士、灵魂乐、R&B。</li>
</ul>
<p><b>解决方法：</b>将调性与流派匹配。为民谣歌曲提示 <code>G major</code> 或为 Trap 节拍提示 <code>D minor</code> 会立即让输出感觉更加地道。</p>

<h2>技巧 2：理解为什么你的歌曲听起来"千篇一律"</h2>
<p>如果你所有的 Suno 歌曲听起来都差不多，那是因为它们都在使用相同的和弦进行。当你不给 Suno 方向时，它会默认使用最常见的流行进行：</p>
<ul>
    <li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a>（"四和弦歌曲"）</li>
    <li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a>（相同的和弦，小调开头）</li>
</ul>
<p>这些进行主导着流行音乐，所以 Suno 默认倾向于它们。要突破这个模式，你需要提示不同的进行。</p>
<p><b>解决方法：</b>在歌词中添加方括号和弦标签，引导 Suno 走向不太常见的进行。试试：</p>
<ul>
    <li><code>[Dm] [G] [C] [Am]</code>——ii-V-I-vi，常见于灵魂乐和爵士流行</li>
    <li><code>[Am] [Em] [F] [Dm]</code>——i-v-VI-iv，更暗沉、更戏剧化</li>
    <li><code>[C] [Em] [Am] [G]</code>——I-iii-vi-V，用于 60/70 年代摇滚（Beatles 风格）</li>
</ul>
<p>不确定这些罗马数字是什么意思？每个数字代表建立在音阶该音级上的和弦。在 <a href="/scales/c-major">C 大调</a>中，I = <a href="/chords/c-major">C</a>，ii = <a href="/chords/d-minor">Dm</a>，iii = <a href="/chords/e-minor">Em</a>，IV = <a href="/chords/f-major">F</a>，V = <a href="/chords/g-major">G</a>，vi = <a href="/chords/a-minor">Am</a>。</p>

<h2>技巧 3：运用张力与解决</h2>
<p>专业的歌曲不会停留在一个能量水平上——它们会制造张力然后释放。这就是终止式的精髓。</p>
<p>音乐中最重要的张力-解决模式是 <b>V &rarr; I</b>：<a href="/chords/g-major">G 大调和弦</a>解决到 <a href="/chords/c-major">C 大调</a>（在 C 大调中）。这被称为正格终止，是你在数千首歌曲中听过的"令人满足的结尾"音效。</p>
<p>你不能直接提示 Suno 使用终止式，但你可以将它们构建到方括号和弦标签中。用 <code>[G] [C]</code> 结束副歌获得强有力的解决，或者用 <code>[G] [Am]</code> 制造一个让听众悬着心的惊喜（这是欺骗终止式）。</p>
<p>其他张力工具：</p>
<ul>
    <li><b><a href="/chords/c-dominant-7th">属七和弦</a></b>——在 V 和弦上添加七度音（用 <a href="/chords/g-dominant-7th">G7</a> 代替 <a href="/chords/g-major">G</a>）增加了解决的拉力。非常适合蓝调和爵士。</li>
    <li><b><a href="/chords/c-suspended-4th">挂留和弦</a></b>——Sus4 和弦创造一种悬而未决的感觉。使用 <code>[Csus4] [C]</code> 获得微妙的"打开"效果。</li>
    <li><b>大调中的<a href="/chords/c-minor">小调和弦</a></b>——在 <a href="/scales/c-major">C 大调</a>语境中出其不意地加入 <a href="/chords/a-minor">Am</a> 会立即产生情感重量。</li>
</ul>

<h2>技巧 4：将速度与流派匹配</h2>
<p>速度不对是让 Suno 歌曲听起来不对劲的最简单方式之一。每个流派都有自然的速度范围。如果你的"chill lo-fi beat"是 140 BPM，无论你用什么其他词汇它都不会听起来 chill。</p>
<ul>
    <li><b>抒情曲：</b>60-80 BPM</li>
    <li><b>R&B / Neo-soul：</b>70-90 BPM</li>
    <li><b>Lo-fi hip hop：</b>75-90 BPM</li>
    <li><b>流行：</b>100-125 BPM</li>
    <li><b>摇滚：</b>110-140 BPM</li>
    <li><b>EDM / House：</b>120-130 BPM</li>
    <li><b>Drum & bass：</b>160-180 BPM</li>
    <li><b>朋克：</b>150-180 BPM</li>
</ul>
<p><b>解决方法：</b>务必在风格提示词中包含 BPM。<code>Lo-fi hip hop, 82 BPM, chill</code> 会比仅仅 <code>Lo-fi hip hop, chill</code> 产生好得多的结果。</p>

<h2>技巧 5：学习蓝调音阶（认真的）</h2>
<p>如果你只为 Suno 提示词学习一个音阶，那就学<a href="/scales/a-blues">蓝调音阶</a>。它是摇滚、蓝调、R&B、嘻哈和大量流行音乐的基础。</p>
<p><a href="/scales/a-blues">A 蓝调音阶</a>是：A - C - D - Eb - E - G。六个音。就这些。</p>
<p>这对 Suno 的意义：当你提示蓝调、灵魂乐或粗犷的流派时，Suno 生成的旋律通常从这个音阶中取材。如果你能识别它，就能判断 Suno 是否给了你想要的东西。如果旋律对于蓝调提示来说听起来"太欢快"了，这意味着 Suno 默认使用了<a href="/scales/a-major">大调音阶</a>——重新生成吧。</p>
<p>其他值得认识的音阶：</p>
<ul>
    <li><a href="/scales/a-major-pentatonic">大调五声音阶</a>——蓝调音阶的"欢快版"。用于流行、乡村和经典摇滚独奏。</li>
    <li><a href="/scales/a-harmonic-minor">和声小调</a>——增添戏剧性的中东或古典风味。提示词中用"mysterious"或"dark classical"。</li>
    <li><a href="/scales/a-dorian">多利亚</a>——一种听起来没那么压抑的小调音阶。用于放克、Santana 风格的摇滚和 Daft Punk 风格的电子音乐。</li>
</ul>

<h2>技巧 6：像真正的歌曲一样构建你的歌曲</h2>
<p>Suno 会响应方括号中的结构标签。不要让它决定结构，直接告诉它：</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>桥段是大多数 Suno 歌曲变得更好的地方。真正的歌曲使用桥段来引入和声对比——通常会转到不同的和弦甚至短暂转到不同的调性。虽然你不能强迫 Suno 转调，但仅仅使用 <code>[Bridge]</code> 标签就往往能产生与主歌和副歌在音乐上有所不同的内容。</p>
<p>进阶技巧：在桥段中使用不同的和弦标签。如果你的主歌使用 <code>[Am] [F] [C] [G]</code>，试试在桥段中用 <code>[Dm] [Em] [F] [G]</code>。这给了 Suno 一个和声上的"味觉清洁剂"，为最后的副歌做准备。</p>

<h2>技巧 7：用耳朵听，不只是用眼睛看</h2>
<p>这是将优秀 Suno 用户与其他所有人区分开来的终极技巧：<b>批判性地聆听 Suno 生成的内容。</b></p>
<p>当你得到结果时，问自己：</p>
<ul>
    <li>旋律是否保持在调内，还是游离到听起来"不对"的音符？</li>
    <li>和弦进行是否真正在推进，还是只是重复同样的两个和弦？</li>
    <li>是否有动态变化——副歌是否感觉比主歌更有力？</li>
    <li>歌曲结尾是否自然，还是只是......突然停了？</li>
</ul>
<p>培养这种听力需要时间。但每次你查找一个你听到的<a href="/chords">和弦</a>并弄清它是什么，或者识别出一段旋律使用的<a href="/scales">音阶</a>时，你都在进步。这会让你未来的每一个 Suno 提示词都更有效。</p>

<p><b><a href="/chords">在 Solfej 上查找任何和弦 &rarr;</a></b></p>
<p><b><a href="/scales">在 Solfej 上查找任何音阶 &rarr;</a></b></p>

<h2>更多 Suno AI 指南</h2>
<ul>
    <li><a href="/zh/blog/suno-ai-chord-progressions">Suno AI 和弦进行：如何控制 Suno 演奏的和弦</a></li>
    <li><a href="/zh/blog/suno-ai-prompt-guide">Suno AI 提示词指南：让歌曲更出色的乐理速查表</a></li>
    <li><a href="/zh/blog/suno-vs-udio">Suno vs Udio：2026 年哪个 AI 音乐生成器更好？</a></li>
</ul>`,
  },
}
