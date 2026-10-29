/* まもリスとカギまるのセキュリティ教室 — もくじ・前後リンク・キャラクター画像
   ページを追加したら、下の TOC に1行足すだけで、もくじと前後リンクに反映されます。
   href: null のページは「準備中」として表示されます。 lab: true は、計算機などの動くコーナーがあるページ(いまは表示には使っていません)。 */

/* LMS(CAREERSHIPなど)に載せるときなど、左のもくじを出したくない場合は false に */
var SHOW_SIDEBAR = true;

var SITE_NAME = "まもリスとカギまるのセキュリティ教室";

var TOC = [
  { ch: "第0章 はじめに", pages: [
    { title: "セキュリティってなに？", href: "ch0/what-is-security.html" },
    { title: "なぜ自分が狙われるの？", href: "ch0/why-me.html" }
  ]},
  { ch: "第1章 本人確認(認証)", pages: [
    { title: "認証と認可の違い", href: "ch1/authn-authz.html" },
    { title: "強いパスワードとは", href: "ch1/password.html", lab: true },
    { title: "パスワードの使い回しが危ない理由", href: "ch1/reuse.html", lab: true },
    { title: "多要素認証(MFA)", href: "ch1/mfa.html", lab: true },
    { title: "パスキー:パスワードのいらない未来", href: "ch1/passkey.html", lab: true },
    { title: "生体認証(指紋・顔・声)", href: "ch1/biometrics.html", lab: true },
    { title: "リスクベース認証", href: "ch1/risk-based.html", lab: true },
    { title: "シングルサインオン", href: "ch1/sso.html" },
    { title: "CAPTCHA:人間かどうかの確認", href: "ch1/captcha.html", lab: true }
  ]},
  { ch: "第2章 暗号", pages: [
    { title: "暗号化ってなに？", href: "ch2/encryption.html", lab: true },
    { title: "共通鍵と公開鍵", href: "ch2/public-key.html", lab: true },
    { title: "ハッシュ:データの指紋", href: "ch2/hash.html", lab: true },
    { title: "鍵マーク(HTTPS)の本当の意味", href: "ch2/https.html", lab: true },
    { title: "電子署名と証明書", href: "ch2/signature.html", lab: true }
  ]},
  { ch: "第3章 だましの手口", pages: [
    { title: "フィッシング", href: null, lab: true },
    { title: "ビジネスメール詐欺(BEC)", href: null },
    { title: "ソーシャルエンジニアリング", href: null },
    { title: "ディープフェイクと音声なりすまし", href: null },
    { title: "SMS・QRコード詐欺", href: null }
  ]},
  { ch: "第4章 マルウェア", pages: [
    { title: "ウイルス・ワーム・トロイの木馬", href: null },
    { title: "ランサムウェア", href: null },
    { title: "添付ファイルとマクロの危険", href: null },
    { title: "アップデートはなぜ大事？", href: null }
  ]},
  { ch: "第5章 ネットワーク", pages: [
    { title: "IPアドレスとDNS", href: null },
    { title: "ファイアウォール", href: null },
    { title: "VPNと公衆Wi-Fi", href: null },
    { title: "ゼロトラスト", href: null }
  ]},
  { ch: "第6章 Webへの攻撃", pages: [
    { title: "総当たりとパスワードリスト攻撃", href: null, lab: true },
    { title: "SQLインジェクション", href: null, lab: true },
    { title: "クロスサイトスクリプティング", href: null }
  ]},
  { ch: "第7章 情報の扱い方", pages: [
    { title: "SNSの写真から分かること", href: null, lab: true },
    { title: "クラウドの共有設定ミス", href: null },
    { title: "生成AIに入力してはいけないもの", href: null }
  ]},
  { ch: "第8章 もしものときと組織の守り", pages: [
    { title: "バックアップの3-2-1ルール", href: null },
    { title: "ログ:防犯カメラの役割", href: null },
    { title: "「やらかした」ときにすぐ報告", href: null },
    { title: "CSIRTってなに？", href: null }
  ]}
];

(function(){
  /* ---- where the site root is (works from any folder depth) ---- */
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/assets\/site\.js(\?.*)?$/, "") : "";
  function abs(href){ return ROOT + href; }
  function samePage(href){
    try {
      var a = new URL(abs(href), location.href), b = new URL(location.href);
      return a.pathname.replace(/\/index\.html$/, "/") === b.pathname.replace(/\/index\.html$/, "/");
    } catch(e){ return false; }
  }

  /* ---- character sprite (used by <use href="#av-…">) ---- */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'
   + '<symbol id="av-mamo" viewBox="0 0 100 100"><path d="M24 38 L18 8 Q32 14 40 30 Z" fill="#E8A465"/><path d="M76 38 L84 8 Q70 14 62 30 Z" fill="#E8A465"/><circle cx="50" cy="56" r="38" fill="#E8A465"/><ellipse cx="50" cy="70" rx="24" ry="18" fill="#F8DEC0"/><ellipse cx="36" cy="52" rx="5.5" ry="6.5" fill="#3A2A20"/><ellipse cx="64" cy="52" rx="5.5" ry="6.5" fill="#3A2A20"/><circle cx="37.5" cy="49.5" r="2" fill="#fff"/><circle cx="65.5" cy="49.5" r="2" fill="#fff"/><ellipse cx="24" cy="66" rx="7" ry="4" fill="#F29A8E" opacity=".7"/><ellipse cx="76" cy="66" rx="7" ry="4" fill="#F29A8E" opacity=".7"/><ellipse cx="50" cy="63" rx="4" ry="3" fill="#5A3A28"/><path d="M44 70 Q47 74 50 70 Q53 74 56 70" fill="none" stroke="#5A3A28" stroke-width="2" stroke-linecap="round"/></symbol>'
   + '<symbol id="av-kagi" viewBox="0 0 100 100"><path d="M30 46 V30 A20 20 0 0 1 70 30 V46" fill="none" stroke="#8E9AA8" stroke-width="10" stroke-linecap="round"/><rect x="14" y="40" width="72" height="54" rx="20" fill="#F2C14E"/><path d="M28 56 L40 59" stroke="#3A2E14" stroke-width="3" stroke-linecap="round"/><path d="M72 56 L60 59" stroke="#3A2E14" stroke-width="3" stroke-linecap="round"/><ellipse cx="35" cy="66" rx="4.5" ry="5.5" fill="#2A2416"/><ellipse cx="65" cy="66" rx="4.5" ry="5.5" fill="#2A2416"/><circle cx="36.5" cy="64" r="1.6" fill="#fff"/><circle cx="66.5" cy="64" r="1.6" fill="#fff"/><ellipse cx="24" cy="76" rx="6" ry="3.5" fill="#F08A7E" opacity=".6"/><ellipse cx="76" cy="76" rx="6" ry="3.5" fill="#F08A7E" opacity=".6"/><path d="M44 76 Q50 80 56 76" fill="none" stroke="#3A2E14" stroke-width="2.5" stroke-linecap="round"/><circle cx="50" cy="86" r="4" fill="#7A5A14"/></symbol>'
   + '<symbol id="av-fishy" viewBox="0 0 100 100"><path d="M78 52 L98 34 Q100 52 98 72 Z" fill="#5E50B8"/><ellipse cx="50" cy="54" rx="38" ry="30" fill="#7E70D8"/><ellipse cx="44" cy="66" rx="24" ry="13" fill="#B9B0F0"/><ellipse cx="34" cy="46" rx="9" ry="9" fill="#fff"/><circle cx="31" cy="47" r="4.5" fill="#241E3A"/><path d="M24 36 L44 40" stroke="#241E3A" stroke-width="3" stroke-linecap="round"/><path d="M18 62 Q28 72 42 64" fill="none" stroke="#241E3A" stroke-width="2.5" stroke-linecap="round"/></symbol>'
   + '</defs></svg>';
  document.body.insertAdjacentHTML("afterbegin", SPRITE);

  /* ---- 読了チェック(このブラウザにだけ保存) ---- */
  var KEY = "mamorisu-done-v1";
  function readDone(){ try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch(e){ return []; } }
  function writeDone(list){ try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e){} }

  var flat = [];
  TOC.forEach(function(c){ c.pages.forEach(function(p){ flat.push(p); }); });
  var current = null;
  flat.forEach(function(p){ if (p.href && samePage(p.href)) current = p; });

  function el(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  /* ---- もくじ ---- */
  function renderToc(){
    var nav = document.getElementById("toc");
    if (!nav) return;
    if (!SHOW_SIDEBAR){ document.documentElement.classList.add("no-toc"); return; }
    var wasOpen = nav.classList.contains("open");
    nav.textContent = "";
    var done = readDone();
    var available = flat.filter(function(p){ return p.href; });
    var nDone = available.filter(function(p){ return done.indexOf(p.href) !== -1; }).length;

    var toggle = el("button", "toc-toggle"); toggle.type = "button"; toggle.id = "toc-toggle";
    toggle.setAttribute("aria-expanded", wasOpen ? "true" : "false"); toggle.setAttribute("aria-controls", "toc-body");
    toggle.appendChild(el("span", null, "もくじ(" + nDone + "/" + available.length + " 読了)"));
    toggle.appendChild(el("span", "chev", "▾"));
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.appendChild(toggle);

    var body = el("div", "toc-body"); body.id = "toc-body";
    var home = el("a", "toc-home"); home.href = abs("index.html");
    home.innerHTML = '<svg aria-hidden="true" viewBox="0 0 100 100"><use href="#av-kagi"/></svg>';
    home.appendChild(el("span", null, SITE_NAME));
    body.appendChild(home);
    var prog = el("p", "toc-progress"); prog.appendChild(document.createTextNode("読了 "));
    prog.appendChild(el("b", null, nDone + " / " + available.length)); prog.appendChild(document.createTextNode(" ページ"));
    body.appendChild(prog);

    TOC.forEach(function(c){
      var sec = el("div", "toc-ch");
      sec.appendChild(el("span", "toc-ch-title", c.ch));
      var ul = el("ul");
      c.pages.forEach(function(p){
        var li = el("li");
        var item;
        if (p.href){
          item = el("a", "toc-item"); item.href = abs(p.href);
          if (p === current){ item.classList.add("current"); item.setAttribute("aria-current", "page"); }
        } else {
          item = el("span", "toc-item soon");
        }
        item.appendChild(el("span", "t", p.title));
        if (!p.href) item.appendChild(el("span", "soon-mark", "準備中"));
        else if (done.indexOf(p.href) !== -1){ var d = el("span", "done", "✓"); d.setAttribute("aria-label", "読了"); item.appendChild(d); }
        li.appendChild(item); ul.appendChild(li);
      });
      sec.appendChild(ul); body.appendChild(sec);
    });
    nav.appendChild(body);
  }

  /* ---- 前のページ/次のページ ---- */
  function renderPager(){
    var box = document.getElementById("pager");
    if (!box || !current) return;
    var i = flat.indexOf(current);
    var prev = null;
    for (var j = i - 1; j >= 0; j--) if (flat[j].href){ prev = flat[j]; break; }
    var next = flat[i + 1] || null;
    box.textContent = "";
    function card(p, label, fwd){
      var c = p.href ? el("a", "next" + (fwd ? " fwd" : "")) : el("div", "next soon" + (fwd ? " fwd" : ""));
      if (p.href) c.href = abs(p.href);
      c.appendChild(el("span", null, label + (p.href ? "" : "(準備中)")));
      c.appendChild(el("b", null, p.title));
      return c;
    }
    if (prev) box.appendChild(card(prev, "前のページ", false));
    else { var h = el("a", "next"); h.href = abs("index.html"); h.appendChild(el("span", null, "もどる")); h.appendChild(el("b", null, "トップページ")); box.appendChild(h); }
    if (next) box.appendChild(card(next, "次のページ", true));
  }

  /* ---- トップページの章一覧 ---- */
  function renderChapters(){
    var box = document.getElementById("chapters");
    if (!box) return;
    var done = readDone();
    box.textContent = "";
    TOC.forEach(function(c){
      var d = el("div", "chapter");
      d.appendChild(el("h3", null, c.ch));
      var ul = el("ul");
      c.pages.forEach(function(p){
        var li = el("li");
        var item = p.href ? el("a", "toc-item") : el("span", "toc-item soon");
        if (p.href) item.href = abs(p.href);
        item.appendChild(el("span", "t", p.title));
        if (!p.href) item.appendChild(el("span", "soon-mark", "準備中"));
        else if (done.indexOf(p.href) !== -1){ var k = el("span", "done", "✓"); k.setAttribute("aria-label", "読了"); item.appendChild(k); }
        li.appendChild(item); ul.appendChild(li);
      });
      d.appendChild(ul); box.appendChild(d);
    });
    var first = document.getElementById("start");
    if (first){ var f = flat.filter(function(p){ return p.href; })[0]; if (f) first.href = abs(f.href); }
  }

  window.Site = {
    markDone: function(){
      if (!current) return;
      var list = readDone();
      if (list.indexOf(current.href) === -1){ list.push(current.href); writeDone(list); }
      renderToc();
    }
  };

  renderToc(); renderPager(); renderChapters();
})();
