/* 確認クイズの共通処理
   ページ側で、このファイルより前に window.QUIZ を書いておきます。
   window.QUIZ = {
     opts: ["A","B","C"],              // 全問共通の選択肢(問題ごとに opts を書けば上書き)
     questions: [ { q:"問題文", opts:[...], a:0, why:"解説", mono:false } ],
     perfect: "全問正解のときの一言",
     again: "まちがえたときの一言"
   };
   全問答えると、そのページを「読了」にします。 */
(function(){
  var Q = window.QUIZ;
  var box = document.getElementById("quiz");
  if (!Q || !box) return;
  var scoreEl = document.getElementById("score");
  var retry = document.getElementById("retry");
  var answered = 0, correct = 0;

  function build(){
    box.textContent = ""; answered = 0; correct = 0;
    if (scoreEl) scoreEl.hidden = true;
    if (retry) retry.hidden = true;
    Q.questions.forEach(function(item, i){
      var opts = item.opts || Q.opts;
      var q = document.createElement("div"); q.className = "q";
      var t = document.createElement("p"); t.className = "q-text";
      var n = document.createElement("span"); n.className = "q-no"; n.textContent = "Q" + (i+1);
      t.appendChild(n); t.appendChild(document.createTextNode(item.q));
      var row = document.createElement("div"); row.className = "opts";
      row.setAttribute("role","group"); row.setAttribute("aria-label","Q"+(i+1)+"の答え");
      var fb = document.createElement("p"); fb.className = "fb"; fb.hidden = true; fb.setAttribute("aria-live","polite");
      opts.forEach(function(label, j){
        var b = document.createElement("button"); b.type = "button"; b.className = "opt" + (item.mono ? " mono" : "");
        b.id = "q"+i+"o"+j; b.textContent = label;
        b.addEventListener("click", function(){
          var btns = row.querySelectorAll("button");
          btns.forEach(function(x){ x.disabled = true; });
          btns[item.a].classList.add("is-ok");
          var ok = j === item.a;
          if (!ok) b.classList.add("is-ng");
          fb.className = "fb " + (ok ? "ok" : "ng");
          fb.textContent = "";
          var head = document.createElement("b"); head.textContent = ok ? "正解！ " : "おしい！ ";
          fb.appendChild(head); fb.appendChild(document.createTextNode(item.why));
          fb.hidden = false;
          answered++; if (ok) correct++;
          if (answered === Q.questions.length){
            var all = correct === Q.questions.length;
            if (scoreEl){
              scoreEl.textContent = Q.questions.length + "問中 " + correct + "問 正解。" + (all ? (Q.perfect || "よくできました！") : (Q.again || "まとめを見なおしてみよう"));
              scoreEl.hidden = false;
            }
            if (retry) retry.hidden = false;
            if (window.Site) window.Site.markDone();
          }
        });
        row.appendChild(b);
      });
      q.appendChild(t); q.appendChild(row); q.appendChild(fb);
      box.appendChild(q);
    });
  }
  if (retry) retry.addEventListener("click", build);
  build();
})();
