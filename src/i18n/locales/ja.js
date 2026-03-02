module.exports = {
  "suno-ai-chord-progressions": {
    title: "Suno AIのコード進行：Sunoで演奏するコードを実際にコントロールする方法",
    seoTitle: "Suno AIコード進行：Sunoでコードを指定する方法（2026年ガイド） | Solfej",
    description: "Suno AIのプロンプトでコード進行を指定する方法を学びましょう。一般的なコード進行の実例、マイナーキーとメジャーキーのコツ、基本的な音楽理論でSunoの曲を10倍良くする方法を紹介します。",
    timeToRead: "10分",
    body: `<p>Suno AIで最もよくある不満の一つは、演奏されるコードを正確にコントロールできないことです。「A minorの悲しいバラード」と入力すると、なんとなくマイナーに聞こえるものが生成されますが、実際のコード進行は運任せです。</p>
<p>良いニュース：Sunoを特定のコード進行に誘導する方法があります。さらに良いニュース：少しの音楽理論を理解するだけで、出力に対するコントロールが劇的に向上します。2026年時点で効果のある方法をすべてご紹介します。</p>

<h2>問題点：Sunoがコードを演奏せずに歌ってしまう</h2>
<p>Sunoのプロンプトに<code>Am - F - G - Em</code>と直接入力すると、AIが楽器でコードを演奏する代わりに「A minor、F、G、E minor」と歌詞として歌ってしまう可能性がかなりあります。</p>
<p>これは、Sunoが歌詞フィールドのすべてを歌うべきテキストとして扱うために起こります。リードシートを読むミュージシャンのようにコード記号をネイティブに理解するわけではありません。この問題を回避する必要があります。</p>

<h2>方法1：歌詞フィールドでのブラケットタグ</h2>
<p>最も確実な方法は、歌詞の中にコード名を角括弧で配置することです。このように：</p>
<p><code>[Am] Walking through the rain tonight<br/>[F] Shadows falling left and right<br/>[G] Can't escape this heavy feeling<br/>[Em] Underneath the neon light</code></p>
<p>これはSunoに「これらは構造タグであり、歌う歌詞ではない」と伝えます。常に完璧に従うわけではありませんが、正しい和声の動きが得られる可能性が大幅に高まります。</p>
<p>Am、F、G、Emが実際に何なのかわからない？音楽的に何が起きているか説明します：</p>
<ul>
    <li><a href="/chords/a-minor">Am（A minor）</a> — トニックコード、A minorの「ホームベース」を設定</li>
    <li><a href="/chords/f-major">F major</a> — 第6度、ほろ苦い高揚感を加える</li>
    <li><a href="/chords/g-major">G major</a> — 第7度、前進する推進力を生み出す</li>
    <li><a href="/chords/e-minor">Em（E minor）</a> — ナチュラルマイナーの第5度、<a href="/chords/e-major">メジャーVコード</a>よりも柔らかい解決感を生み出す</li>
</ul>
<p>これはポップスやロックで最も一般的なコード進行の一つで、何百もの曲で聴いたことがあるはずです。</p>

<h2>方法2：スタイルボックスで和声の方向性を指定</h2>
<p>Sunoのカスタムモードでは、Style of Musicボックスがジャンルやムードの記述を受け付けます。これを歌詞のコード情報と組み合わせることができます：</p>
<p><b>スタイルボックス：</b> <code>Melancholic indie folk, acoustic guitar, A minor key, slow tempo</code></p>
<p><b>歌詞ボックス：</b> ブラケットコードタグ付きの歌詞</p>
<p>スタイルボックスでキーを指定すると、Sunoが正しい和声の範囲内に留まりやすくなります。「A minor key」と指定すると、Sunoは<a href="/scales/a-minor">Aナチュラルマイナースケール</a>のコード（Am、Bdim、C、Dm、Em、F、G）を使用する可能性が高くなります。</p>

<h2>Sunoで最も効果的な5つのコード進行</h2>
<p>Sunoは何百万もの曲でトレーニングされているため、ポピュラー音楽で一般的なコード進行に自然と引き寄せられます。以下の5つは確実に機能します：</p>

<h3>1. I - V - vi - IV（「ポップ進行」）</h3>
<p>C majorの場合：<a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a></p>
<p>これは現代ポップスで最も一般的なコード進行です。「Let It Be」「No Woman No Cry」「Someone Like You」など、何百もの曲に使われています。アップビートなポップの雰囲気でSunoにプロンプトを出すと、自然とこの進行に落ち着くことが多いです。</p>
<p><b>Sunoプロンプトのコツ：</b> <code>Upbeat pop anthem, C major, bright and hopeful</code></p>

<h3>2. vi - IV - I - V（「サッドポップ進行」）</h3>
<p>C majorの場合：<a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>上記と同じコードですが、マイナーコードから始めることで雰囲気が完全に変わります。これはエモーショナルポップやバラードのいたるところに見られます。<a href="/chords/c-major">C major</a>ではなく<a href="/chords/a-minor">A minor</a>から始めることで、メランコリックな質感が生まれます。</p>
<p><b>Sunoプロンプトのコツ：</b> <code>Emotional pop ballad, A minor, female vocals, piano-driven</code></p>

<h3>3. I - IV - V - I（「ブルース／ロック進行」）</h3>
<p>A majorの場合：<a href="/chords/a-major">A</a> - <a href="/chords/d-major">D</a> - <a href="/chords/e-major">E</a> - <a href="/chords/a-major">A</a></p>
<p>ロック、カントリー、ブルースの骨格です。Sunoでクラシックロックのようなサウンドを生成したい場合、スタイルボックスにこの3つのコードを入力するとうまくいきます。よりブルージーな雰囲気を出すには、<a href="/chords/a-dominant-7th">A7</a>、<a href="/chords/d-dominant-7th">D7</a>、<a href="/chords/e-dominant-7th">E7</a>を使いましょう。ドミナント7thコードがブルース特有のサウンドを生み出します。</p>
<p><b>Sunoプロンプトのコツ：</b> <code>12-bar blues shuffle, A major, electric guitar, dominant 7th chords</code></p>

<h3>4. ii - V - I（「ジャズ進行」）</h3>
<p>C majorの場合：<a href="/chords/d-minor-7th">Dm7</a> - <a href="/chords/g-dominant-7th">G7</a> - <a href="/chords/c-major-7th">Cmaj7</a></p>
<p>ii-V-Iはジャズで最も重要なコード進行です。拡張コード（7th）を含むため、Sunoでこれを正確に再現するのは難しいです。<code>Jazz standard, ii-V-I in C major, walking bass, soft brushes</code>とプロンプトを試すことができますが、結果はまちまちです。Sunoはシンプルなジャズの方が複雑なビバップよりもうまく処理します。</p>
<p>この進行がなぜ重要なのかを理解したい場合は、<a href="/chords/d-minor-7th">Dm7</a>（iiコード）、<a href="/chords/g-dominant-7th">G7</a>（Vコード）、<a href="/chords/c-major-7th">Cmaj7</a>（Iコード）を調べてみてください。これら3つのコード間で音がどう動くか（ボイスリーディングと呼ばれます）が、ジャズの滑らかで洗練されたサウンドを生み出しています。</p>

<h3>5. i - VI - III - VII（「エピックマイナー進行」）</h3>
<p>A minorの場合：<a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a></p>
<p>これはシネマティック、ドラマティック、壮大なサウンドの音楽に頻繁に登場します。技術的にはサッドポップ進行と同じコードですが、Sunoに「epic orchestral」や「cinematic trailer」の雰囲気をプロンプトすると、はるかに大きなダイナミクスでアレンジする傾向があります。</p>
<p><b>Sunoプロンプトのコツ：</b> <code>Epic cinematic orchestral, A minor, building intensity, strings and brass</code></p>

<h2>キーを知ることが重要な理由</h2>
<p>Sunoにキーを伝えると（例えば「in C major」）、AIが選ぶ可能性のあるコードが制約されます。すべてのキーには、そのキーに自然に属するコードのセットがあります。<a href="/scales/c-major">C major</a>の場合、それらのコードは：</p>
<ul>
    <li>I — <a href="/chords/c-major">C major</a></li>
    <li>ii — <a href="/chords/d-minor">D minor</a></li>
    <li>iii — <a href="/chords/e-minor">E minor</a></li>
    <li>IV — <a href="/chords/f-major">F major</a></li>
    <li>V — <a href="/chords/g-major">G major</a></li>
    <li>vi — <a href="/chords/a-minor">A minor</a></li>
    <li>vii° — <a href="/chords/b-diminished">B diminished</a></li>
</ul>
<p>Sunoがこのリストにないコードを生成した場合、それは「キーの外」に出ていることを意味します。これは意図的でかっこよく聞こえることもあれば、ランダムで悪く聞こえることもあります。プロンプトでキーを指定することでランダム性が軽減されます。</p>
<p>マイナーキーの場合、コードは異なります。<a href="/scales/a-minor">A minor</a>では：</p>
<ul>
    <li>i — <a href="/chords/a-minor">A minor</a></li>
    <li>ii° — <a href="/chords/b-diminished">B diminished</a></li>
    <li>III — <a href="/chords/c-major">C major</a></li>
    <li>iv — <a href="/chords/d-minor">D minor</a></li>
    <li>v — <a href="/chords/e-minor">E minor</a></li>
    <li>VI — <a href="/chords/f-major">F major</a></li>
    <li>VII — <a href="/chords/g-major">G major</a></li>
</ul>

<h2>ムードワードでスケールを誘導する</h2>
<p>Sunoはスケール名を直接理解しませんが、ムード（雰囲気）は理解します。これを利用してスケールを間接的にコントロールできます：</p>
<ul>
    <li><b>「Bright」や「happy」</b> → <a href="/scales/c-major">メジャースケール</a>のメロディーを生成する傾向</li>
    <li><b>「Sad」や「melancholic」</b> → <a href="/scales/a-minor">ナチュラルマイナー</a>のメロディーを生成する傾向</li>
    <li><b>「Bluesy」や「gritty」</b> → <a href="/scales/a-blues">ブルーススケール</a>のメロディーを生成する傾向</li>
    <li><b>「Mysterious」や「dark」</b> → <a href="/scales/a-harmonic-minor">ハーモニックマイナー</a>のメロディーを生成する傾向</li>
    <li><b>「Funky」や「groovy」</b> → <a href="/scales/a-mixolydian-pentatonic">ミクソリディアン</a>のフレーバーを生成する傾向</li>
    <li><b>「Ethereal」や「dreamy」</b> → <a href="/scales/a-lydian-pentatonic">リディアン</a>の影響を受けたメロディーを生成する傾向</li>
</ul>
<p>これらは保証ではありません。Sunoは確率的であり、決定論的ではないからです。しかし、ムードワードとキー、そしてブラケットコードタグを組み合わせることで、望む結果を得る最善の方法になります。</p>

<h2>Sunoにまだできないこと</h2>
<p>限界について正直にお伝えします：</p>
<ul>
    <li><b>正確なコードボイシング</b> — <a href="/chords/c-major">C major</a>を第2転回形で演奏するよう指示することはできません。ボイシングはSunoが独自に選択します。</li>
    <li><b>曲中のキーチェンジ</b> — 転調（キーチェンジ）をプロンプトしても、確実に機能することは稀です。</li>
    <li><b>複雑なジャズハーモニー</b> — オルタードコード、トライトーンサブスティテューション、テンションコードはSunoがうまく処理できる範囲を超えています。</li>
    <li><b>特定のカデンツ</b> — 特定のポイントで<a href="/blog/cadences">偽終止</a>や半終止を確実にプロンプトすることはできません。</li>
</ul>
<p>基本的なポップ／ロック／フォークのハーモニーを超えるものについては、理論を自分で学んでDAWを使う方がより良い結果が得られるでしょう。</p>

<p><b><a href="/chords">Solfejでコードを調べる →</a></b></p>
<p><b><a href="/scales">Solfejでスケールを調べる →</a></b></p>

<h2>その他のSuno AIガイド</h2>
<ul>
    <li><a href="/ja/blog/suno-ai-prompt-guide">Suno AIプロンプトガイド：より良い曲のための音楽理論チートシート</a></li>
    <li><a href="/ja/blog/suno-vs-udio">Suno vs Udio：2026年、どちらのAI音楽ジェネレーターが優れているか？</a></li>
    <li><a href="/ja/blog/suno-ai-tips">Suno AIの曲をプロフェッショナルに仕上げる方法（音楽理論のコツ）</a></li>
</ul>`,
  },

  "suno-ai-prompt-guide": {
    title: "Suno AIプロンプトガイド：より良い曲のための音楽理論チートシート",
    seoTitle: "Suno AIプロンプトガイド：より良いプロンプトのための音楽理論チートシート（2026年） | Solfej",
    description: "基本的な音楽理論を使ってより良いSuno AIプロンプトを書くための実践ガイド。キー、スケール、モード、テンポ、そして頭の中で聞こえる音を機能するプロンプトに変換する方法を解説します。",
    timeToRead: "9分",
    body: `<p>ほとんどのSuno AIプロンプトガイドは、ジャンルタグやムードワードを追加するよう勧めています。それは悪くないですが、表面的なレベルに過ぎません。Sunoで最良の結果を得ている人は、少しの音楽理論を知っている人です。なぜなら、AIが実際に反応する言葉で欲しいものを説明できるからです。</p>
<p>音楽の学位は必要ありません。必要なのは約10分とこのチートシートだけです。</p>

<h2>Sunoが実際に理解する4つのこと</h2>
<p>Sunoのスタイルプロンプトボックスは、4種類の音楽情報に反応します。確実に機能する順に：</p>
<ol>
    <li><b>ジャンル</b> — 「indie rock」「lo-fi hip hop」「jazz ballad」</li>
    <li><b>ムード／エネルギー</b> — 「melancholic」「aggressive」「dreamy」</li>
    <li><b>楽器構成</b> — 「acoustic guitar」「piano and strings」「808s」</li>
    <li><b>音楽パラメータ</b> — キー、テンポ／BPM、拍子</li>
</ol>
<p>ほとんどの人は1と2しか使いません。3、特に4を加えることが、音楽理論による優位性です。</p>

<h2>キー：メジャー vs マイナー（なぜ重要なのか）</h2>
<p>Sunoのプロンプトに追加できる最もインパクトのある要素はキーです。AIにどの音とコードを使うかを伝えます。</p>
<p><b>メジャーキー</b>は明るく、幸せで、安定した響きです。<code>C major</code>とプロンプトすると、Sunoは<a href="/scales/c-major">C majorスケール</a>を基に構築し、<a href="/chords/c-major">C</a>、<a href="/chords/f-major">F</a>、<a href="/chords/g-major">G</a>などのコードを使用する傾向があります。</p>
<p><b>マイナーキー</b>は暗く、悲しく、緊張感のある響きです。<code>A minor</code>とプロンプトすると、Sunoは<a href="/scales/a-minor">A minorスケール</a>から音を引き出し、<a href="/chords/a-minor">Am</a>、<a href="/chords/d-minor">Dm</a>、<a href="/chords/e-minor">Em</a>などのコードを使用します。</p>
<p>一般的なキーとそれが生み出す傾向のある雰囲気のクイックリファレンスです：</p>
<ul>
    <li><a href="/scales/c-major">C major</a> / <a href="/scales/a-minor">A minor</a> — シャープもフラットもない「ニュートラル」な雰囲気、ポップスで非常に一般的</li>
    <li><a href="/scales/g-major">G major</a> / <a href="/scales/e-minor">E minor</a> — 明るく開放的、フォークやロックで一般的</li>
    <li><a href="/scales/d-major">D major</a> / <a href="/scales/b-minor">B minor</a> — 温かく共鳴する、アコースティックギターの曲に最適</li>
    <li><a href="/scales/f-major">F major</a> / <a href="/scales/d-minor">D minor</a> — やや暗めのメジャー、バラードに効果的</li>
    <li><a href="/scales/eb-major">Eb major</a> / <a href="/scales/c-minor">C minor</a> — 豊かでフル、R&Bやソウルで一般的</li>
</ul>

<h2>テンポ：BPMチートシート</h2>
<p>プロンプトにBPM（beats per minute＝1分あたりの拍数）を追加すると、エネルギーレベルをコントロールできます。Sunoは正確なBPM数値とイタリア語のテンポ用語の両方に反応します。</p>
<ul>
    <li><b>60-70 BPM（Adagio）</b> — 非常にゆっくり。バラード、アンビエント、シネマティック。<code>"Slow ballad, 65 BPM, piano"</code></li>
    <li><b>70-90 BPM（Andante）</b> — 歩くペース。Lo-fiヒップホップ、R&B。<code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
    <li><b>90-110 BPM（Moderato）</b> — 中程度。ポップ、インディー、フォーク。<code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
    <li><b>110-130 BPM（Allegro）</b> — アップビート。ポップ、ロック、ダンス。<code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
    <li><b>130-160 BPM（Vivace）</b> — 速い。パンク、ドラムンベース、EDM。<code>"Punk rock, 150 BPM, aggressive"</code></li>
    <li><b>160+ BPM（Presto）</b> — 非常に速い。ドラムンベース、スピードメタル。<code>"Drum and bass, 170 BPM, dark"</code></li>
</ul>

<h2>モード：メジャーとマイナーを超えて</h2>
<p>モードはそれぞれ独特のムードを持つスケールです。Sunoはモード名に直接反応するとは限りませんが、ムードワードで誘導できます：</p>
<ul>
    <li><b><a href="/scales/c-major">イオニアン</a>（メジャースケール）</b> — 幸せ、明るい → プロンプト：<code>"bright, uplifting, major key"</code></li>
    <li><b><a href="/scales/c-dorian">ドリアン</a></b> — マイナーだが希望的な質感 → プロンプト：<code>"minor key, slightly funky, Santana-esque"</code></li>
    <li><b><a href="/scales/c-phrygian">フリジアン</a></b> — スパニッシュ／中東的なフレーバー → プロンプト：<code>"Spanish guitar, dark, flamenco-influenced"</code></li>
    <li><b><a href="/scales/c-lydian-pentatonic">リディアン</a></b> — 夢見るような、浮遊感のある、幻想的 → プロンプト：<code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
    <li><b><a href="/scales/c-mixolydian-pentatonic">ミクソリディアン</a></b> — ブルージー、ロック、やや未解決感 → プロンプト：<code>"classic rock, bluesy, Grateful Dead"</code></li>
    <li><b><a href="/scales/a-minor">エオリアン</a>（ナチュラルマイナー）</b> — 悲しい、暗い → プロンプト：<code>"sad, dark, melancholic, minor key"</code></li>
</ul>
<p>重要なポイント：すべてのモードは異なる音から始まる通常のスケールに過ぎません。<a href="/scales/c-dorian">C Dorian</a>は<a href="/scales/bb-major">Bb major</a>と同じ音を使いますが、「ホームノート」がBbではなくCであるため、まったく異なるサウンドになります。より深く学びたい場合は、Solfejでこれらのスケールを調べてみてください。</p>

<h2>すべてをまとめる：プロンプトテンプレート</h2>
<p>ジャンル、ムード、キー、テンポを組み合わせたすぐに使えるテンプレートです：</p>

<h3>悲しいアコースティックバラード</h3>
<p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
<p>これが機能する理由：<a href="/scales/a-minor">A minor</a>はギターに適したキーで、75 BPMはバラードに十分な遅さであり、ムードワードがマイナーの調性を強化します。</p>

<h3>アップビートなポップソング</h3>
<p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
<p>これが機能する理由：<a href="/scales/c-major">C major</a>は最も明るく「基本的な」キーで、シャープもフラットもありません。118 BPMはポップスのスイートスポットにぴったりです。</p>

<h3>ダークトラップビート</h3>
<p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
<p>これが機能する理由：<a href="/scales/d-minor">D minor</a>はトラップで一般的なキー（808ベースとの相性が良い）で、140 BPMは標準的なトラップのテンポです。</p>

<h3>ジャズスタンダード</h3>
<p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
<p>これが機能する理由：<a href="/scales/bb-major">Bb major</a>は最も一般的なジャズのキー（金管楽器はBbで構成されている）で、「walking bass」と「swing」を指定することでSunoがリズミックなフィールを正しく捉えやすくなります。</p>

<h3>Lo-fiスタディビート</h3>
<p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
<p>これが機能する理由：<a href="/scales/f-major">F major</a>は温かくやや落ち着いた質感を持ち、85 BPMはLo-fiのスイートスポットです。「jazzy chords」はSunoを<a href="/chords/f-major-7th">メジャー7th</a>や<a href="/chords/f-dominant-7th">ドミナント7th</a>のボイシングに向かわせます。</p>

<h2>よくある間違い</h2>
<ul>
    <li><b>プロンプトの詰め込みすぎ</b> — スタイルボックスに15個の記述子を入れないでください。Sunoは最初の数語に最も大きな重みを置きます。ジャンルとキーを先頭に。</li>
    <li><b>矛盾する指示</b> — 「Happy, bright, D minor」は矛盾しています。<a href="/scales/d-minor">D minor</a>は悲しいキーです。ムードワードをキーに合わせましょう。</li>
    <li><b>BPMの無視</b> — 「energetic」とプロンプトしてもテンポを指定しないと、Sunoがゆっくりしたトラックを生成する可能性があります。エネルギーに依存するジャンルでは常にBPMを追加してください。</li>
    <li><b>正確な再現を期待すること</b> — Sunoは確率的です。要求したものの近辺には到達しますが、正確な再現ではありません。3〜4バージョン生成して最良のものを選びましょう。</li>
</ul>

<h2>本当の優位性：聞こえるものを理解すること</h2>
<p>基本的な音楽理論を学ぶ最大の理由は、より良いSunoプロンプトを書くためではありません。Sunoが返してくれるものを理解するためです。トラックを生成して「これはかっこいい」と思ったとき、「<a href="/scales/c-dorian">ドリアン</a>スケールが<a href="/chords/c-minor-7th">マイナー7thコード</a>の上で使われているからだ」と言えることで、そのサウンドを運ではなく意図的に再現できるようになります。</p>
<p>最低限、以下の3つを学びましょう：</p>
<ul>
    <li><a href="/chords/c-major">メジャー</a>コードと<a href="/chords/c-minor">マイナー</a>コードの違い（なぜ響きが違うのか）</li>
    <li><a href="/scales/c-major">スケール</a>とは何か、そしてキー内でどの音が「合う」かをどう決めるのか</li>
    <li><a href="/blog/cadences">カデンツ</a>とは何か — ある終わり方が最終的に感じられ、別の終わり方が未解決に感じられる理由</li>
</ul>

<p><b><a href="/chords">Solfejでコードを調べる →</a></b></p>
<p><b><a href="/scales">Solfejでスケールを調べる →</a></b></p>

<h2>その他のSuno AIガイド</h2>
<ul>
    <li><a href="/ja/blog/suno-ai-chord-progressions">Suno AIコード進行：Sunoで演奏するコードをコントロールする方法</a></li>
    <li><a href="/ja/blog/suno-vs-udio">Suno vs Udio：2026年、どちらのAI音楽ジェネレーターが優れているか？</a></li>
    <li><a href="/ja/blog/suno-ai-tips">Suno AIの曲をプロフェッショナルに仕上げる方法（音楽理論のコツ）</a></li>
</ul>`,
  },

  "suno-vs-udio": {
    title: "Suno vs Udio：2026年、どちらのAI音楽ジェネレーターが優れているか？",
    seoTitle: "Suno vs Udio 2026：どちらのAI音楽ジェネレーターが本当に優れているか？ | Solfej",
    description: "2026年のSunoとUdioの正直な比較。ボーカル、コード進行、ジャンル精度、音楽品質を実際の音楽理論分析で両方テストしました。",
    timeToRead: "9分",
    body: `<p>SunoとUdioは2026年における二大AI音楽ジェネレーターです。どちらもテキストプロンプトを入力するとフルの楽曲が返ってきます。しかし、生成される結果は明らかに異なり、どちらが「より良い」かはあなたが何をしようとしているかによります。</p>
<p>ほとんどの比較はオーディオ品質と価格に焦点を当てています。この記事ではもっと有用なことに焦点を当てます：各ツールが音楽理論をどう扱うか、そしてそれぞれがどこで破綻するかです。</p>

<h2>クイック比較表</h2>
<table>
    <thead>
        <tr><th></th><th><b>Suno</b></th><th><b>Udio</b></th></tr>
    </thead>
    <tbody>
        <tr><td><b>速度</b></td><td>1曲あたり約30秒</td><td>1曲あたり約90秒</td></tr>
        <tr><td><b>ボーカル品質</b></td><td>より自然、感情表現が豊か</td><td>発音がクリア、ミックスがきれい</td></tr>
        <tr><td><b>楽器品質</b></td><td>良いが圧縮感あり</td><td>分離が良く、ミックスがきれい</td></tr>
        <tr><td><b>コード精度</b></td><td>ブラケットタグに約60%従う</td><td>コードへの追従がやや良い</td></tr>
        <tr><td><b>ジャンル幅</b></td><td>広い、ポップ/ロック/ヒップホップが最強</td><td>広い、ジャズ/クラシックがより得意</td></tr>
        <tr><td><b>無料枠</b></td><td>1日10曲</td><td>月間限定生成数</td></tr>
        <tr><td><b>最大長</b></td><td>4分</td><td>15分以上まで延長可能</td></tr>
    </tbody>
</table>

<h2>ボーカル：Sunoの勝ち</h2>
<p>Sunoはより感情的に表現力のあるボーカルを生成します。AIがブレス、声のかすれ、ダイナミクスの変化を捉え、本物のシンガーに近いサウンドになります。Udioのボーカルは技術的にはよりクリーンですが、より機械的に聞こえることが多く、非常に磨かれたMIDIボーカルのようです。</p>
<p>ボーカルのキャラクターが重要なジャンル（ソウル、インディー、カントリー）では、Sunoが明確な勝者です。きれいに加工されたボーカルが期待されるジャンル（EDM、ポッププロダクション）では、差は小さくなります。</p>

<h2>楽器：Udioの勝ち</h2>
<p>Udioはより良い楽器分離を生成します。Sunoのトラックでは、ギター、ベース、ドラム、ボーカルが互いに混ざり合い「こもった」サウンドになることがあります。Udioの48kHz出力は、各楽器がクリアに聞こえるプロフェッショナルなミックスに近いサウンドです。</p>
<p>これは複雑なアレンジで最も重要になります。シンプルなアコースティックギターとボーカルのトラックを生成する場合、どちらも問題ありません。複数の楽器によるフルバンドアレンジを生成しようとする場合、Udioの方が分離をうまく処理します。</p>

<h2>コード進行：ハーモニーの処理の違い</h2>
<p>音楽理論の観点から興味深いのはここです。両ツールとも大量のポピュラー音楽データセットでトレーニングされているため、どちらも一般的な<a href="/chords">コード進行</a>に引き寄せられます。しかし、和声の複雑さの処理は異なります。</p>

<h3>シンプルな進行（I-IV-V-I、vi-IV-I-V）</h3>
<p>両ツールともうまく処理します。<a href="/scales/c-major">C major</a>のポップソングをプロンプトすると、どちらも<a href="/chords/c-major">C</a>、<a href="/chords/f-major">F</a>、<a href="/chords/g-major">G</a>、<a href="/chords/a-minor">Am</a>で構成された進行を確実に生成します。ここでは明確な勝者はいません。</p>

<h3>ジャズハーモニー（ii-V-I、テンションコード）</h3>
<p>Udioの方がジャズをうまく処理します。ジャズをプロンプトすると、Udioは簡略化されたトライアドではなく、実際の<a href="/chords/d-minor-7th">マイナー7th</a>や<a href="/chords/c-major-7th">メジャー7th</a>のボイシングを生成する可能性が高くなります。Sunoはジャズプロンプトを「ポップ化」する傾向があり、なんとなくジャズっぽいが、よりシンプルなハーモニーを使うものが生成されます。</p>
<p>実際に<a href="/chords/d-minor-7th">Dm7</a> → <a href="/chords/g-dominant-7th">G7</a> → <a href="/chords/c-major-7th">Cmaj7</a>の進行を使っているように聞こえるトラックが欲しい場合、Udioの方が期待に応える可能性が高いです。</p>

<h3>マイナーキーの精度</h3>
<p>両ツールとも、マイナーキーを維持するのに苦労することがあります。「sad, A minor」とプロンプトしても、突然<a href="/scales/a-major">A major</a>に跳ぶセクションが出ることがあります。これはSunoの方がUdioより多く、特に長い生成で顕著です。</p>
<p>問題は、両ツールともメジャーとマイナーを頻繁に混ぜる曲（ほとんどのポップ音楽がそう）でトレーニングされているため、全体を通して厳密な<a href="/scales/a-minor">マイナースケール</a>を常に維持するとは限らないことです。</p>

<h3>キーチェンジ</h3>
<p>どちらのツールも、プロンプトされたキーチェンジをうまく処理できません。歌詞に<code>[Key change to Eb major]</code>と書いても、どちらもほぼ無視します。Sunoは偶発的なキーチェンジを生成することがあり（特にブリッジセクションで）、Udioはより頑固に1つのキーに留まる傾向があります。</p>

<h2>ジャンル精度</h2>
<h3>Sunoが優れている分野：</h3>
<ul>
    <li><b>ポップ / Top 40</b> — Sunoは現代ポップのサウンドを正確に再現し、適切な<a href="/chords">コードボイシング</a>とプロダクションスタイルを備えています</li>
    <li><b>ヒップホップ / トラップ</b> — より良い808ベース、より説得力のあるハイハットパターン、<a href="/scales/d-minor">ダークマイナーキー</a>の美学をうまく捉えています</li>
    <li><b>ロック</b> — より説得力のあるディストーションギター、<a href="/chords/a-power-chord">パワーコード</a>のエネルギーをより良く捉えています</li>
    <li><b>カントリー</b> — ボーカルの癖や、カントリーを特徴づける<a href="/scales/g-major">メジャーキー</a>の開放感をより良く表現</li>
</ul>

<h3>Udioが優れている分野：</h3>
<ul>
    <li><b>ジャズ</b> — <a href="/chords/c-major-7th">テンションコード</a>、ウォーキングベースライン、スウィングフィールがより得意</li>
    <li><b>クラシック / オーケストラ</b> — 楽器分離が良いため、ストリングス、ブラス、ウッドウィンドがよりリアルに聞こえます</li>
    <li><b>エレクトロニック / アンビエント</b> — 繊細なサウンドデザインと進化するテクスチャーがより得意</li>
    <li><b>ワールドミュージック</b> — 本格的な非西洋の<a href="/scales">スケール</a>や楽器を取り入れる可能性が高い</li>
</ul>

<h2>プロンプティング：異なる戦略</h2>
<p>各ツールが異なる要素に重みを置くため、プロンプティング戦略も変えるべきです：</p>
<p><b>Sunoの場合：</b> ジャンルを先頭に、次にムード、次にキー。Sunoは最初の数語に最も大きな重みを置きます。例：<code>Indie folk, melancholic, A minor, acoustic guitar, 95 BPM</code></p>
<p><b>Udioの場合：</b> 楽器構成とプロダクションスタイルをより具体的に。Udioは詳細なサウンド記述により良く反応します。例：<code>Fingerpicked acoustic guitar, close-mic'd, warm room reverb, A minor, melancholic folk, female vocals, 95 BPM</code></p>

<h2>価格（2026年）</h2>
<ul>
    <li><b>Suno無料版：</b> 1日50クレジット（10曲）、非商用利用</li>
    <li><b>Suno Pro：</b> 月額$10、月500曲、商用ライセンス</li>
    <li><b>Udio無料版：</b> 月間限定生成数</li>
    <li><b>Udio Standard：</b> 月額$10、Suno Proと同等</li>
</ul>
<p>価格は同程度です。カジュアルユーザーにとっては無料枠が最も重要で、Sunoのデイリークレジット更新の方が実験に寛大です。</p>

<h2>結論</h2>
<ul>
    <li><b>Sunoを使うべき場合：</b> 良いボーカル付きの手軽でキャッチーなポップ/ロック/ヒップホップトラックが欲しい場合。より速く、プロンプトが簡単で、無料枠が充実しています。</li>
    <li><b>Udioを使うべき場合：</b> より高いオーディオ品質、より良い楽器分離が必要な場合、またはニュアンスが重要なジャズ/クラシック/エレクトロニックジャンルで作業する場合。</li>
    <li><b>両方使うべき場合：</b> AI音楽に真剣に取り組んでいる場合。同じプロンプトを両方で生成して比較してみてください。各ツールがハーモニーとアレンジをどう異なって解釈するか、多くのことを学べます。</li>
</ul>
<p>どちらのツールを使うにしても、基本的な<a href="/chords">コード</a>と<a href="/scales">スケール</a>を学びましょう。何を求めているか（そして何が返ってきているか）を知ることが、ランダムな出力と意図的な音楽の違いです。</p>

<p><b><a href="/chords">Solfejでコードを調べる →</a></b></p>
<p><b><a href="/scales">Solfejでスケールを調べる →</a></b></p>

<h2>その他のSuno AIガイド</h2>
<ul>
    <li><a href="/ja/blog/suno-ai-chord-progressions">Suno AIコード進行：Sunoで演奏するコードをコントロールする方法</a></li>
    <li><a href="/ja/blog/suno-ai-prompt-guide">Suno AIプロンプトガイド：より良い曲のための音楽理論チートシート</a></li>
    <li><a href="/ja/blog/suno-ai-tips">Suno AIの曲をプロフェッショナルに仕上げる方法（音楽理論のコツ）</a></li>
</ul>`,
  },

  "suno-ai-tips": {
    title: "Suno AIの曲をプロフェッショナルに仕上げる方法（音楽理論のコツ）",
    seoTitle: "Suno AIの曲をプロフェッショナルにする方法：音楽理論のコツ（2026年） | Solfej",
    description: "Suno AIの曲がアマチュアに聞こえるのは、基本的な音楽理論が欠けているからです。AI生成音楽を劇的に向上させる具体的なコンセプトを紹介します。",
    timeToRead: "8分",
    body: `<p>Sunoで50曲生成しました。いくつかはまあまあの出来です。ほとんどは無個性。いくつかは積極的に悪い出来です。問題はSunoではありません。あなたが手探りでプロンプトしていることです。</p>
<p>一般的なSunoの出力と実際の曲に聞こえるものの違いは、いくつかの音楽理論のコンセプトを理解しているかどうかにかかっています。最も重要なものを紹介します。</p>

<h2>コツ1：ランダムにキーを選ぶのをやめよう</h2>
<p>ほとんどのSunoユーザーはキーを指定しないか、ランダムに選んでいます。これは、どの味が合うか知らずに料理するようなものです。</p>
<p>すべてのキーには個性があります。これはオカルトではありません。異なるキーが楽器と人間の声域の中で異なる位置にあるからです：</p>
<ul>
    <li><a href="/scales/c-major">C major</a> — 「白紙のキャンバス」。クリーンでシンプル、シャープもフラットもなし。最適：ストレートなポップス。</li>
    <li><a href="/scales/g-major">G major</a> — 開放的で明るい。ギターフレンドリー（開放弦が多い）。最適：フォーク、カントリー、ロック。</li>
    <li><a href="/scales/e-minor">E minor</a> — 暗くパワフル。ロックで最も一般的なキー。最適：ロック、メタル、ドラマティックなポップス。</li>
    <li><a href="/scales/a-minor">A minor</a> — 悲しいがとっつきやすい。最適：バラード、インディー、シンガーソングライター。</li>
    <li><a href="/scales/d-minor">D minor</a> — 深く陰鬱。ヒップホップやトラップで一般的。最適：トラップ、ダークR&B、映画音楽。</li>
    <li><a href="/scales/bb-major">Bb major</a> — 温かく豊か。ジャズのデフォルトキー。最適：ジャズ、ソウル、R&B。</li>
</ul>
<p><b>解決策：</b> キーをジャンルに合わせましょう。フォークソングに<code>G major</code>、トラップビートに<code>D minor</code>とプロンプトするだけで、出力がより本格的に感じられます。</p>

<h2>コツ2：曲が「同じように」聞こえる理由を理解しよう</h2>
<p>すべてのSuno曲が似たように聞こえるなら、それはすべて同じコード進行を使っているからです。方向性を与えないと、Sunoは最も一般的なポップのコード進行にデフォルトします：</p>
<ul>
    <li><a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a> - <a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a>（「4コードの曲」）</li>
    <li><a href="/chords/a-minor">Am</a> - <a href="/chords/f-major">F</a> - <a href="/chords/c-major">C</a> - <a href="/chords/g-major">G</a>（同じコード、マイナーから開始）</li>
</ul>
<p>これらの進行はポップ音楽を支配しているため、Sunoはデフォルトでここに引き寄せられます。抜け出すには、異なる進行をプロンプトする必要があります。</p>
<p><b>解決策：</b> 歌詞にブラケットコードタグを追加して、Sunoをあまり一般的でない進行に誘導しましょう。試してみてください：</p>
<ul>
    <li><code>[Dm] [G] [C] [Am]</code> — ii-V-I-vi、ソウルやジャズポップで一般的</li>
    <li><code>[Am] [Em] [F] [Dm]</code> — i-v-VI-iv、より暗くドラマティック</li>
    <li><code>[C] [Em] [Am] [G]</code> — I-iii-vi-V、60〜70年代のロック（ビートルズ風）で使用</li>
</ul>
<p>これらのローマ数字が何を意味するかわからない？各数字はスケールのその度数上に構築されたコードを表します。<a href="/scales/c-major">C major</a>では、I = <a href="/chords/c-major">C</a>、ii = <a href="/chords/d-minor">Dm</a>、iii = <a href="/chords/e-minor">Em</a>、IV = <a href="/chords/f-major">F</a>、V = <a href="/chords/g-major">G</a>、vi = <a href="/chords/a-minor">Am</a>。</p>

<h2>コツ3：テンションとリゾリューションを使おう</h2>
<p>プロの曲は1つのエネルギーレベルにとどまりません。テンション（緊張）を構築し、それを解放します。これが<a href="/blog/cadences">カデンツ</a>のすべてです。</p>
<p>音楽で最も重要なテンション−リゾリューションのパターンは<b>V → I</b>です：<a href="/chords/g-major">G majorコード</a>が<a href="/chords/c-major">C major</a>に解決する（Cのキーで）。これは<a href="/blog/cadences">正格終止</a>と呼ばれ、何千もの曲で聴いてきた「満足のいく終わり方」のサウンドです。</p>
<p>Sunoにカデンツを直接プロンプトすることはできませんが、ブラケットコードタグに組み込むことができます。コーラスの終わりに<code>[G] [C]</code>で力強い解決を、または<code>[G] [Am]</code>でリスナーを宙ぶらりんにするサプライズを（これは<a href="/blog/cadences">偽終止</a>です）。</p>
<p>その他のテンションツール：</p>
<ul>
    <li><b><a href="/chords/c-dominant-7th">ドミナント7thコード</a></b> — Vコードに7thを加えると（<a href="/chords/g-major">G</a>の代わりに<a href="/chords/g-dominant-7th">G7</a>）、解決への引力が増します。ブルースやジャズに最適。</li>
    <li><b><a href="/chords/c-suspended-4th">サスペンデッドコード</a></b> — Sus4コードは宙ぶらりんの未解決感を生み出します。<code>[Csus4] [C]</code>で微妙な「開放」効果が得られます。</li>
    <li><b>メジャーキーにおける<a href="/chords/c-minor">マイナーコード</a></b> — <a href="/scales/c-major">C major</a>のコンテキストに予期しない<a href="/chords/a-minor">Am</a>を落とすと、即座に感情的な重みが生まれます。</li>
</ul>

<h2>コツ4：テンポをジャンルに合わせよう</h2>
<p>間違ったテンポは、Sunoの曲を不自然に聞こえさせる最も簡単な方法の一つです。すべてのジャンルには自然なテンポ範囲があります。「チルなLo-fiビート」が140 BPMでは、他にどんな言葉を使ってもチルには聞こえません。</p>
<ul>
    <li><b>バラード：</b> 60-80 BPM</li>
    <li><b>R&B / ネオソウル：</b> 70-90 BPM</li>
    <li><b>Lo-fiヒップホップ：</b> 75-90 BPM</li>
    <li><b>ポップ：</b> 100-125 BPM</li>
    <li><b>ロック：</b> 110-140 BPM</li>
    <li><b>EDM / ハウス：</b> 120-130 BPM</li>
    <li><b>ドラムンベース：</b> 160-180 BPM</li>
    <li><b>パンク：</b> 150-180 BPM</li>
</ul>
<p><b>解決策：</b> スタイルプロンプトには常にBPMを含めましょう。<code>Lo-fi hip hop, 82 BPM, chill</code>の方が、単に<code>Lo-fi hip hop, chill</code>とするよりはるかに良い結果を生みます。</p>

<h2>コツ5：ブルーススケールを学ぼう（本気で）</h2>
<p>Sunoプロンプティングのためにスケールを1つだけ学ぶなら、<a href="/scales/a-blues">ブルーススケール</a>を学びましょう。ロック、ブルース、R&B、ヒップホップ、そしてポップ音楽の大部分の基盤です。</p>
<p><a href="/scales/a-blues">Aブルーススケール</a>は：A - C - D - Eb - E - G。6音だけです。</p>
<p>なぜこれがSunoに重要か：ブルージー、ソウルフル、グリッティなジャンルをプロンプトしてSunoがメロディーを生成するとき、このスケールから引き出していることが多いです。これを認識できれば、Sunoが求めたものを返してくれたかどうかがわかります。メロディーがブルースプロンプトにしては「明るすぎる」なら、Sunoがブルーススケールの代わりに<a href="/scales/a-major">メジャースケール</a>にデフォルトしたということです。再生成しましょう。</p>
<p>認識しておくと便利な他のスケール：</p>
<ul>
    <li><a href="/scales/a-major-pentatonic">メジャーペンタトニック</a> — ブルーススケールの「明るい」バージョン。ポップス、カントリー、クラシックロックのソロで使用。</li>
    <li><a href="/scales/a-harmonic-minor">ハーモニックマイナー</a> — ドラマティックで、中東的またはクラシカルなフレーバーを加えます。「mysterious」や「dark classical」とプロンプト。</li>
    <li><a href="/scales/a-dorian">ドリアン</a> — それほど陰鬱でないマイナースケール。ファンク、サンタナ風ロック、Daft Punk風のエレクトロニックミュージックで使用。</li>
</ul>

<h2>コツ6：曲を本物の曲のように構成しよう</h2>
<p>Sunoはブラケット内の構成タグに反応します。構成をSunoに任せる代わりに、指定しましょう：</p>
<p><code>[Intro]<br/>[Verse 1]<br/>[Chorus]<br/>[Verse 2]<br/>[Chorus]<br/>[Bridge]<br/>[Chorus]<br/>[Outro]</code></p>
<p>ブリッジはほとんどのSuno曲がより良くなるポイントです。本物の曲はブリッジでハーモニックなコントラストを導入します。多くの場合、異なるコードや、一時的に異なるキーに移動します。Sunoにキーチェンジを強制することはできませんが、<code>[Bridge]</code>タグがあるだけで、ヴァースやコーラスとは音楽的に異なるものが生成される傾向があります。</p>
<p>上級テクニック：ブリッジで異なるコードタグを使いましょう。ヴァースで<code>[Am] [F] [C] [G]</code>を使っているなら、ブリッジでは<code>[Dm] [Em] [F] [G]</code>を試してみてください。これにより、最後のコーラスの前にSunoにハーモニックな「パレットクレンザー」が与えられます。</p>

<h2>コツ7：目だけでなく、耳を使おう</h2>
<p>これは良いSunoユーザーと他の全員を分けるメタコツです：<b>Sunoが生成したものを批判的に聴きましょう。</b></p>
<p>結果が返ってきたら、自分に問いかけてください：</p>
<ul>
    <li>メロディーはキー内に留まっているか、それとも「間違った」音に迷い込んでいるか？</li>
    <li>コード進行は実際に動いているか、それとも同じ2つのコードを繰り返しているだけか？</li>
    <li>ダイナミクスの変化はあるか？コーラスはヴァースより大きく感じられるか？</li>
    <li>曲はうまく終わるか、それとも単に…止まるか？</li>
</ul>
<p>この耳を養うには時間がかかります。しかし、聴いた<a href="/chords">コード</a>を調べてそれが何かを理解するたびに、メロディーがどの<a href="/scales">スケール</a>を使っているかを特定するたびに、少しずつ上達します。そしてそれが、今後のすべてのSunoプロンプトをより効果的にします。</p>

<p><b><a href="/chords">Solfejでコードを調べる →</a></b></p>
<p><b><a href="/scales">Solfejでスケールを調べる →</a></b></p>

<h2>その他のSuno AIガイド</h2>
<ul>
    <li><a href="/ja/blog/suno-ai-chord-progressions">Suno AIコード進行：Sunoで演奏するコードをコントロールする方法</a></li>
    <li><a href="/ja/blog/suno-ai-prompt-guide">Suno AIプロンプトガイド：より良い曲のための音楽理論チートシート</a></li>
    <li><a href="/ja/blog/suno-vs-udio">Suno vs Udio：2026年、どちらのAI音楽ジェネレーターが優れているか？</a></li>
</ul>`,
  },
}
