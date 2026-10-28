/**
 * app.js — Java Lab Experiments Repository
 * Supports:
 * - Dropdown menu per experiment to select each file
 * - Tab switcher per experiment (synchronized with dropdown)
 * - Individual copy button per file (copies exact, unmodified code/commands)
 * - Safe, non-destructive syntax highlighter (zero code corruption)
 * - Line numbers in code display (unselectable for clean manual copy)
 * - Deep search across Title, Topic, Tags, Filenames, and Code content
 * - Expand / Collapse all (with search filter awareness)
 * - Accessible ARIA attributes and keyboard navigation
 */

/* ── Escape HTML safely ── */
function esc(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Safe Single-Pass Syntax Highlighter ──
   Uses a single regex so tokens are matched linearly from start to end.
   No placeholders or secondary replaces — impossible to corrupt numbers or code. */
function highlight(code, lang) {
  if (!code) return '';

  const langUpper = (lang || '').toUpperCase();
  if (langUpper === 'TEXT' || langUpper === 'CMD' || langUpper === 'BAT') {
    // Basic terminal / batch highlighting: lines starting with '::' or '#' are comments
    return code.split('\n').map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('::') || trimmed.startsWith('#')) {
        return `<span class="cm">${esc(line)}</span>`;
      }
      return esc(line);
    }).join('\n');
  }

  const javaKw = /\b(public|private|protected|static|final|void|class|interface|enum|extends|implements|new|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|import|package|this|super|abstract|default|native|synchronized|volatile|transient|instanceof)\b/;
  const jsKw   = /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|new|this|typeof|instanceof|async|await|true|false|null|undefined|setInterval|clearInterval|setTimeout|clearTimeout)\b/;
  const types  = /\b(int|double|float|long|short|byte|char|boolean|String|Integer|Double|Float|Long|Short|Byte|Character|Boolean|Object|Scanner|System|Math|PrintWriter|RequestDispatcher|HttpServlet|HttpServletRequest|HttpServletResponse|ServletRequest|ServletResponse|GenericServlet|ServletException|IOException|Connection|DriverManager|PreparedStatement|ResultSet|SQLException|Class|document|window|Date|Array|List|ArrayList|Map|HashMap|Set|HashSet)\b/;
  const sqlKw  = /\b(SELECT|FROM|WHERE|INSERT|INTO|VALUES|CREATE|DATABASE|TABLE|USE|INT|PRIMARY|KEY|AUTO_INCREMENT|VARCHAR|NOT|NULL|SET|AND|OR)\b/i;

  // Single regex with priority order
  const tokenRegex = /(<%[\s\S]*?%>)|(<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/)|(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(`(?:\\.|[^`\\])*`)|(<\/?[a-zA-Z][a-zA-Z0-9:-]*\b[\s\S]*?\/?>)|(\b\d+(?:\.\d+)?\b)|([a-zA-Z_$][a-zA-Z0-9_$]*)|([\s\S])/g;

  let result = '';
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    const [full, jsp, blkComment, lineComment, dblStr, sglStr, btkStr, tag, num, word] = match;

    if (jsp) {
      result += `<span class="jsp-tag">${esc(jsp)}</span>`;
    } else if (blkComment || lineComment) {
      result += `<span class="cm">${esc(full)}</span>`;
    } else if (dblStr || sglStr || btkStr) {
      result += `<span class="str">${esc(full)}</span>`;
    } else if (tag && (langUpper === 'HTML' || langUpper === 'XML' || langUpper === 'JSP')) {
      result += `<span class="tag-hl">${esc(full)}</span>`;
    } else if (num) {
      result += `<span class="num">${num}</span>`;
    } else if (word) {
      if (javaKw.test(word) || jsKw.test(word) || (langUpper === 'SQL' && sqlKw.test(word))) {
        result += `<span class="kw">${esc(word)}</span>`;
      } else if (types.test(word)) {
        result += `<span class="kw2">${esc(word)}</span>`;
      } else if (/^[A-Z][A-Za-z0-9_]*$/.test(word) && (langUpper === 'JAVA' || langUpper === 'JSP')) {
        result += `<span class="cls">${esc(word)}</span>`;
      } else {
        result += esc(word);
      }
    } else {
      result += esc(full);
    }
  }

  return result;
}

/* ── Render Code with Line Numbers ── */
function renderCodeBlock(code, lang) {
  const highlighted = highlight(code, lang);
  const lines = highlighted.split('\n');
  return lines.map((line, idx) => {
    return `<div class="code-row"><span class="ln">${idx + 1}</span><span class="lc">${line || ' '}</span></div>`;
  }).join('');
}

/* ── Language class helper ── */
function langClass(lang) {
  const map = {
    JAVA: 'lang-java',
    HTML: 'lang-html',
    CSS:  'lang-css',
    JS:   'lang-js',
    XML:  'lang-xml',
    JSP:  'lang-jsp',
    SQL:  'lang-sql',
    TEXT: 'lang-default'
  };
  return map[(lang || '').toUpperCase()] || 'lang-default';
}

/* ── Icons SVG ── */
const COPY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`;

const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;

/* ── Build Top Navigation ── */
function buildNav() {
  const nav = document.getElementById('navPills');
  if (!nav) return;
  nav.innerHTML = '';

  experiments.forEach(exp => {
    const pill = document.createElement('button');
    pill.className = 'nav-pill';
    pill.textContent = `Exp ${exp.num}`;
    pill.id = `navPill-${exp.num}`;
    pill.title = `Jump to Exp ${exp.num}: ${exp.title}`;
    pill.setAttribute('type', 'button');

    pill.addEventListener('click', () => {
      const card = document.getElementById(`card-${exp.num}`);
      if (!card) return;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!card.classList.contains('open')) {
        toggleCard(card, exp.num, true);
      }
    });

    nav.appendChild(pill);
  });
}

/* ── Build Experiment Cards ── */
function buildCards() {
  const container = document.getElementById('experimentsContainer');
  if (!container) return;
  container.innerHTML = '';

  experiments.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.id = `card-${exp.num}`;
    card.dataset.num = exp.num;
    card.dataset.title = exp.title.toLowerCase();
    card.dataset.desc = exp.desc.toLowerCase();
    card.dataset.tags = exp.tags.map(t => t.label.toLowerCase()).join(' ');
    card.dataset.files = exp.files.map(f => f.name.toLowerCase()).join(' ');
    // Destination paths for search
    card.dataset.paths = exp.files.map(f => (f.path || '').toLowerCase()).join(' ');
    // Full code corpus for deep search
    card.dataset.code = exp.files.map(f => f.code.toLowerCase()).join(' ');

    const tagsHtml = exp.tags.map(t => `<span class="tag ${t.cls}">${esc(t.label)}</span>`).join('');
    const fileCount = exp.files.length;
    const fileWord = fileCount === 1 ? 'file' : 'files';

    /* Dropdown Options */
    const dropdownOptions = exp.files.map((f, fi) => `
      <option value="${fi}">${esc(f.name)} (${esc(f.lang)})</option>
    `).join('');

    /* Tabs */
    const tabsHtml = exp.files.map((f, fi) => `
      <button class="file-tab ${fi === 0 ? 'active' : ''}"
              data-exp="${exp.num}" data-file="${fi}"
              type="button"
              aria-selected="${fi === 0 ? 'true' : 'false'}"
              role="tab">
        <span class="lang-badge ${langClass(f.lang)}">${esc(f.lang)}</span>
        <span>${esc(f.name)}</span>
      </button>
    `).join('');

    /* Panels */
    const panelsHtml = exp.files.map((f, fi) => {
      const lineCount = f.code.split('\n').length;
      return `
        <div class="file-panel ${fi === 0 ? 'active' : ''}"
             id="panel-${exp.num}-${fi}"
             role="tabpanel"
             aria-labelledby="tab-${exp.num}-${fi}">
          <div class="code-toolbar">
            <div class="dots" aria-hidden="true">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div class="toolbar-right">
              <div class="file-info">
                <span class="lang-badge ${langClass(f.lang)}">${esc(f.lang)}</span>
                <span class="file-label">${esc(f.name)}</span>
                ${f.path ? `<span class="file-dest-path" title="Destination path: ${esc(f.path)}">📍 ${esc(f.path)}</span>` : ''}
                <span class="line-count">(${lineCount} lines)</span>
              </div>
              <button class="btn-copy"
                      id="copybtn-${exp.num}-${fi}"
                      type="button"
                      aria-label="Copy code of ${esc(f.name)}"
                      title="Copy ${esc(f.name)}">
                ${COPY_ICON}
                <span class="copy-label">Copy Code</span>
              </button>
            </div>
          </div>
          <div class="code-block">${renderCodeBlock(f.code, f.lang)}</div>
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="exp-header" id="hdr-${exp.num}" tabindex="0" role="button" aria-expanded="false" aria-controls="body-${exp.num}">
        <div class="exp-number">${exp.num}</div>
        <div class="exp-meta">
          <div class="exp-title">${esc(exp.title)}</div>
          <div class="exp-desc">${esc(exp.desc)}</div>
          <div class="exp-tags">${tagsHtml}</div>
        </div>
        <span class="file-count">${fileCount} ${fileWord}</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="exp-body" id="body-${exp.num}">
        <div class="file-switcher-bar">
          <div class="dropdown-control-wrap">
            <label class="dropdown-label" for="select-${exp.num}">Select File / Code:</label>
            <select class="file-dropdown-select" id="select-${exp.num}" data-exp="${exp.num}">
              ${dropdownOptions}
            </select>
          </div>
          <div class="file-tabs" id="tabs-${exp.num}" role="tablist">
            ${tabsHtml}
          </div>
        </div>
        <div class="panels-wrap" id="panels-${exp.num}">
          ${panelsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);

    /* ── Header Click & Keyboard Toggle ── */
    const header = card.querySelector(`#hdr-${exp.num}`);
    header.addEventListener('click', () => {
      toggleCard(card, exp.num);
    });
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card, exp.num);
      }
    });

    /* ── Dropdown change listener ── */
    const selectElem = card.querySelector(`#select-${exp.num}`);
    selectElem.addEventListener('change', e => {
      const fileIndex = parseInt(e.target.value, 10);
      switchFile(card, exp.num, fileIndex);
    });

    /* ── Tabs click listener ── */
    const tabsContainer = card.querySelector(`#tabs-${exp.num}`);
    tabsContainer.addEventListener('click', e => {
      const tab = e.target.closest('.file-tab');
      if (!tab) return;
      const fileIndex = parseInt(tab.dataset.file, 10);
      switchFile(card, exp.num, fileIndex);
    });

    /* ── Copy Button Listeners ── */
    exp.files.forEach((f, fi) => {
      const btn = card.querySelector(`#copybtn-${exp.num}-${fi}`);
      if (btn) {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          copyCode(f.code, btn, f.name);
        });
      }
    });
  });
}

/* ── Switch active file in an experiment ── */
function switchFile(card, expNum, fileIndex) {
  // Update select dropdown
  const selectElem = card.querySelector(`#select-${expNum}`);
  if (selectElem && selectElem.value !== String(fileIndex)) {
    selectElem.value = String(fileIndex);
  }

  // Update tabs
  card.querySelectorAll('.file-tab').forEach(tab => {
    const isActive = parseInt(tab.dataset.file, 10) === fileIndex;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update panels
  card.querySelectorAll('.file-panel').forEach((panel, idx) => {
    panel.classList.toggle('active', idx === fileIndex);
  });
}

/* ── Toggle Card Expansion ── */
function toggleCard(card, expNum, forceOpen) {
  const isOpen = forceOpen !== undefined ? forceOpen : !card.classList.contains('open');
  card.classList.toggle('open', isOpen);

  const header = card.querySelector('.exp-header');
  if (header) {
    header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  // Update nav pill highlight
  document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
  if (isOpen) {
    const pill = document.getElementById(`navPill-${expNum}`);
    if (pill) pill.classList.add('active');
  }
}

/* ── Copy Code to Clipboard ── */
function copyCode(rawCode, btn, fileName) {
  const doSuccess = () => {
    btn.classList.add('copied');
    btn.innerHTML = `${CHECK_ICON} <span class="copy-label">Copied!</span>`;
    showToast(`"${fileName}" copied to clipboard!`);

    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `${COPY_ICON} <span class="copy-label">Copy Code</span>`;
    }, 2200);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(rawCode)
      .then(doSuccess)
      .catch(() => fallbackCopy(rawCode, doSuccess));
  } else {
    fallbackCopy(rawCode, doSuccess);
  }
}

/* ── Fallback Copy using textarea ── */
function fallbackCopy(text, callback) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.top = '0';
  ta.style.left = '0';
  ta.style.opacity = '0';
  ta.style.pointerEvents = 'none';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      callback();
    } else {
      showToast('Copy failed. Please manually select the code.');
    }
  } catch (err) {
    console.error('Fallback copy failed:', err);
    showToast('Failed to copy. Please manually select the code.');
  }
  document.body.removeChild(ta);
}

/* ── Toast Notification ── */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ── Search and Deep Filter ── */
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  if (!searchInput) return;

  searchInput.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    clearBtn.style.display = q ? 'block' : 'none';

    let matchCount = 0;
    const cards = document.querySelectorAll('.exp-card');

    cards.forEach(card => {
      const num   = card.dataset.num || '';
      const title = card.dataset.title || '';
      const desc  = card.dataset.desc || '';
      const tags  = card.dataset.tags || '';
      const files = card.dataset.files || '';
      const paths = card.dataset.paths || '';
      const code  = card.dataset.code || '';

      const matches = !q ||
        num.includes(q) ||
        title.includes(q) ||
        desc.includes(q) ||
        tags.includes(q) ||
        files.includes(q) ||
        paths.includes(q) ||
        code.includes(q);

      card.style.display = matches ? 'block' : 'none';
      if (matches) {
        matchCount++;
        // If user searched a specific keyword, auto-open matching card
        if (q && q.length > 2) {
          card.classList.add('open');
          const header = card.querySelector('.exp-header');
          if (header) header.setAttribute('aria-expanded', 'true');
        }
      }
    });

    let noRes = document.getElementById('noResultsMsg');
    if (matchCount === 0) {
      if (!noRes) {
        noRes = document.createElement('div');
        noRes.id = 'noResultsMsg';
        noRes.className = 'no-results';
        noRes.innerHTML = '🔍 No experiments matched your search. Try searching for "servlet", "mysql", "inheritance", or "overloading".';
        document.getElementById('experimentsContainer').appendChild(noRes);
      }
    } else if (noRes) {
      noRes.remove();
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
}

/* ── Expand All / Collapse All ── */
function setupExpandCollapse() {
  const btnExpand = document.getElementById('btnExpandAll');
  const btnCollapse = document.getElementById('btnCollapseAll');

  if (btnExpand) {
    btnExpand.addEventListener('click', () => {
      // Expand only visible/matching cards
      document.querySelectorAll('.exp-card').forEach(card => {
        if (card.style.display !== 'none') {
          card.classList.add('open');
          const header = card.querySelector('.exp-header');
          if (header) header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  if (btnCollapse) {
    btnCollapse.addEventListener('click', () => {
      document.querySelectorAll('.exp-card').forEach(card => {
        card.classList.remove('open');
        const header = card.querySelector('.exp-header');
        if (header) header.setAttribute('aria-expanded', 'false');
      });
      document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
    });
  }
}

/* ── Initialization ── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildCards();
  setupSearch();
  setupExpandCollapse();

  // Open first experiment by default
  const firstCard = document.querySelector('.exp-card');
  if (firstCard) {
    firstCard.classList.add('open');
    const header = firstCard.querySelector('.exp-header');
    if (header) header.setAttribute('aria-expanded', 'true');
    const firstPill = document.querySelector('.nav-pill');
    if (firstPill) firstPill.classList.add('active');
  }
});
