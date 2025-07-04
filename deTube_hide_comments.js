// ==UserScript==
// @name            deTube - Hide All Comments
// @name:de         deTube - Alle Kommentare ausblenden
// @name:es         deTube - Ocultar todos los comentarios
// @name:fr         deTube - Masquer tous les commentaires
// @name:it         deTube - Nascondi tutti i commenti
// @name:pt         deTube - Ocultar todos os comentários
// @name:ru         deTube - Скрыть все комментарии
// @name:ja         deTube - すべてのコメントを非表示
// @name:ko         deTube - 모든 댓글 숨기기
// @name:zh-CN      deTube - 隐藏所有评论
// @name:zh-TW      deTube - 隱藏所有留言
// @name:nl         deTube - Alle reacties verbergen
// @name:pl         deTube - Ukryj wszystkie komentarze
// @name:sv         deTube - Dölj alla kommentarer
// @name:da         deTube - Skjul alle kommentarer
// @name:no         deTube - Skjul alle kommentarer
// @name:fi         deTube - Piilota kaikki kommentit
// @name:tr         deTube - Tüm yorumları gizle
// @name:ar         deTube - إخفاء جميع التعليقات
// @name:he         deTube - הסתר את כל התגובות
// @name:hi         deTube - सभी टिप्पणियाँ छिपाएँ
// @name:th         deTube - ซ่อนความคิดเห็นทั้งหมด
// @name:vi         deTube - Ẩn tất cả bình luận
// @version         0.0.1
// @description     Hides the entire YT comment section by blocking the comment container element.
// @description:de  Blendet den gesamten Kommentarbereich von YT aus, indem das Kommentar-Element blockiert wird.
// @description:es  Oculta la sección completa de comentarios de YT bloqueando el contenedor de comentarios.
// @description:fr  Masque toute la section des commentaires sur YT en bloquant l'élément des commentaires.
// @description:it  Nasconde l'intera sezione dei commenti su YT bloccando l'elemento dei commenti.
// @description:pt  Oculta toda a seção de comentários do YT bloqueando o elemento de comentários.
// @description:ru  Скрывает весь раздел комментариев на YT, блокируя элемент комментариев.
// @description:ja  コメントのコンテナ要素をブロックして、YTのコメント欄全体を非表示にします。
// @description:ko  댓글 컨테이너 요소를 차단하여 YT의 전체 댓글 섹션을 숨깁니다.
// @description:zh-CN 隐藏整个 YT 评论区，通过屏蔽评论容器元素实现。
// @description:zh-TW 隱藏整個 YT 留言區，透過封鎖留言容器元素實現。
// @description:nl  Verbergt de volledige commentaarsectie van YT door het commentaarelement te blokkeren.
// @description:pl  Ukrywa całą sekcję komentarzy na YT, blokując element komentarzy.
// @description:sv  Döljer hela kommentarsektionen på YT genom att blockera kommentarselementet.
// @description:da  Skjuler hele kommentarsektionen på YT ved at blokere kommentarelementet.
// @description:no  Skjuler hele kommentarseksjonen på YT ved å blokkere kommentarelementet.
// @description:fi  Piilottaa koko YTn kommenttiosion estämällä kommenttielementin.
// @description:tr  Yorum kutusu öğesini engelleyerek YT'daki tüm yorum bölümünü gizler.
// @description:ar  يخفي قسم التعليقات بالكامل على YT عن طريق حظر عنصر التعليقات.
// @description:he  מסתיר את כל אזור התגובות ביוטיוב על ידי חסימת אלמנט התגובות.
// @description:hi  YT की संपूर्ण टिप्पणी अनुभाग को टिप्पणियों के कंटेनर को ब्लॉक करके छिपाता है।
// @description:th  ซ่อนส่วนความคิดเห็นทั้งหมดของ YT โดยบล็อกองค์ประกอบของความคิดเห็น
// @description:vi  Ẩn toàn bộ phần bình luận trên YT bằng cách chặn phần tử bình luận.
// @author          unfumble
// @namespace       https://github.com/unfumble/deTube_hide_comments
// @supportURL      https://github.com/unfumble/deTube_hide_comments/issues
// @license         MIT
// @match           *://www.youtube.com/watch*
// @grant           none
// @run-at          document-idle
// @compatible      firefox
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
    'use strict';

    const hideComments = () => {
        const comments = document.querySelector('ytd-comments#comments');
        if (comments) {
            comments.style.display = 'none';
            return true;
        }
        return false;
    };

    const observePage = () => {
        let attempts = 0;
        const maxAttempts = 300; // ~5 seconds at 60fps

        const loop = () => {
            if (hideComments() || attempts >= maxAttempts) return;
            attempts++;
            requestAnimationFrame(loop);
        };

        loop();
    };

    // Watch for YouTube page navigation changes (SPAs)
    const observer = new MutationObserver(() => {
        if (location.href.includes("watch")) {
            observePage();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial load
    observePage();
})();
