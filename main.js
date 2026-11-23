// Paleta de cores distinta para cada um dos 10 itens da lista
const ITEM_COLORS = [
    "#8257e5", // 1 - Roxo vibrante
    "#2563eb", // 2 - Azul royal
    "#0891b2", // 3 - Ciano escuro
    "#059669", // 4 - Esmeralda
    "#65a30d", // 5 - Verde lima
    "#ca8a04", // 6 - Dourado/Mostarda
    "#d97706", // 7 - Âmbar
    "#ea580c", // 8 - Laranja
    "#dc2626", // 9 - Vermelho
    "#db2777"  // 10 - Magenta/Rosa
];

const GLOBAL_STOP_WORDS = new Set([
    "a", "o", "as", "os", "um", "uma", "uns", "umas",
    "de", "da", "do", "das", "dos", "e", "em", "no", "na", "nos", "nas",
    "por", "para", "com", "sem", "ao", "aos", "a", "as", "&"
]);

// Estado do Jogo
let currentThemeObj = null;
let selectedConfigThemeIndex = 0;
let gameMode = 10; // 10 ou 5
let revealedStatus = [];
let suggestedThemeIndices = new Set();
let confettiAnimationId = null;
let confettiTimeoutId = null;
let wrongModalOpenedAt = 0;

// Elementos do DOM
const currentThemeTitle = document.getElementById("current-theme-title");
const btnHome = document.getElementById("btn-home");
const btnRevealAll = document.getElementById("btn-reveal-all");
const guessInput = document.getElementById("guess-input");
const btnGuess = document.getElementById("btn-guess");
const topListEl = document.getElementById("top-list");

// Modais e Botões dos Modais
const modalConfig = document.getElementById("modal-config");
const btnCloseConfig = document.getElementById("btn-close-config");
const themeComboboxInput = document.getElementById("theme-combobox-input");
const comboboxArrow = document.getElementById("combobox-arrow");
const comboboxDropdown = document.getElementById("combobox-dropdown");
const btnRandomTheme = document.getElementById("btn-random-theme");
const btnStartGame = document.getElementById("btn-start-game");

const modalConfirmReveal = document.getElementById("modal-confirm-reveal");
const btnConfirmYes = document.getElementById("btn-confirm-yes");
const btnConfirmNo = document.getElementById("btn-confirm-no");

const modalWrongGuess = document.getElementById("modal-wrong-guess");
const wrongGuessText = document.getElementById("wrong-guess-text");
const btnCloseWrong = document.getElementById("btn-close-wrong");

const modalVictory = document.getElementById("modal-victory");
const btnVictoryHome = document.getElementById("btn-victory-home");
const btnVictoryNext = document.getElementById("btn-victory-next");

const btnHelpConfig = document.getElementById("btn-help-config");
const modalHelp = document.getElementById("modal-help");
const btnCloseHelp = document.getElementById("btn-close-help");

// ==========================================
// SINTETIZADOR DE ÁUDIO (Web Audio API)
// ==========================================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

function playSingleClick() {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(680, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.09);
}

function playDoubleClick() {
    initAudio();
    const now = audioCtx.currentTime;
    [0, 0.11].forEach((offset) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(240, now + offset);
        osc.frequency.exponentialRampToValueAtTime(140, now + offset + 0.07);

        gain.gain.setValueAtTime(0.28, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.08);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.08);
    });
}

// ==========================================
// ANIMAÇÃO DE CONFETES (3 SEGUNDOS)
// ==========================================
function triggerConfetti(durationMs = 3000) {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    if (confettiTimeoutId) clearTimeout(confettiTimeoutId);

    const particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 6,
        h: Math.random() * 6 + 4,
        color: ITEM_COLORS[Math.floor(Math.random() * ITEM_COLORS.length)],
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 3 - 1.5,
        angle: Math.random() * 360,
        spin: Math.random() * 8 - 4
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.angle += p.spin;
            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.angle * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        confettiAnimationId = requestAnimationFrame(draw);
    }

    draw();

    confettiTimeoutId = setTimeout(() => {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, durationMs);
}

// ==========================================
// SORTEIO DE TEMAS SEM REPETIÇÃO IMEDIATA
// ==========================================
function getNextRandomThemeIndex() {
    if (suggestedThemeIndices.size >= GAME_THEMES.length) {
        suggestedThemeIndices.clear();
    }

    const availableIndices = [];
    for (let i = 0; i < GAME_THEMES.length; i++) {
        if (!suggestedThemeIndices.has(i)) {
            availableIndices.push(i);
        }
    }

    const randomPick = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    suggestedThemeIndices.add(randomPick);
    return randomPick;
}

// ==========================================
// NORMALIZAÇÃO E COMPARAÇÃO FUZZY (LEVENSHTEIN)
// ==========================================
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9\s]/g, " ")    // Remove pontuação
        .replace(/\s+/g, " ")
        .trim();
}

function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // deleção
                matrix[i][j - 1] + 1,      // inserção
                matrix[i - 1][j - 1] + cost // substituição
            );
        }
    }
    return matrix[a.length][b.length];
}

function getItemName(item) {
    return typeof item === "string" ? item : item.name;
}

function getItemAliases(item) {
    if (typeof item === "object" && item !== null && Array.isArray(item.aliases)) {
        return item.aliases.filter((a) => typeof a === "string" && a.trim().length > 0);
    }
    return [];
}

function getItemStopWords(item) {
    if (typeof item === "object" && item !== null && Array.isArray(item.stopWords)) {
        return item.stopWords.map((w) => normalizeString(w)).filter(Boolean);
    }
    return [];
}

function stripStopWords(normalizedText, itemStopWordsSet) {
    const words = normalizedText
        .split(" ")
        .filter((w) => w && !GLOBAL_STOP_WORDS.has(w) && !itemStopWordsSet.has(w));
    return {
        words,
        joined: words.join(" ").trim()
    };
}

function buildCandidatesFromText(text, itemStopWordsSet) {
    const candidates = new Set();
    const normText = normalizeString(text);
    if (!normText) return candidates;

    candidates.add(normText);

    const withoutParens = normalizeString(text.replace(/\([^)]*\)/g, ""));
    if (withoutParens) candidates.add(withoutParens);

    const parenMatches = text.match(/\(([^)]+)\)/g);
    if (parenMatches) {
        parenMatches.forEach((m) => {
            const inside = normalizeString(m);
            if (inside.length >= 2) candidates.add(inside);
        });
    }

    if (text.includes(" - ")) {
        const beforeDash = normalizeString(text.split(" - ")[0]);
        if (beforeDash) candidates.add(beforeDash);
    }

    if (text.includes(" / ")) {
        text.split(" / ").forEach((part) => {
            const normPart = normalizeString(part);
            if (normPart) candidates.add(normPart);
        });
    }

    const baseForWords = withoutParens || normText;
    const filtered = stripStopWords(baseForWords, itemStopWordsSet);

    if (filtered.joined) {
        candidates.add(filtered.joined);
    }

    filtered.words.forEach((word) => {
        if (word.length >= 3) {
            candidates.add(word);
        }
    });

    return candidates;
}

function isSimilarMatch(userInput, targetItem) {
    const targetName = getItemName(targetItem);
    const normInput = normalizeString(userInput);
    if (!normInput || !targetName) return false;

    const itemStopWordsSet = new Set(getItemStopWords(targetItem));
    const aliases = getItemAliases(targetItem);

    const inputFiltered = stripStopWords(normInput, itemStopWordsSet);
    const inputVariants = new Set([normInput]);
    if (inputFiltered.joined) {
        inputVariants.add(inputFiltered.joined);
    }

    // Reúne candidatos do nome principal e de todos os aliases
    const allTexts = [targetName, ...aliases];
    const candidates = new Set();

    allTexts.forEach((txt) => {
        buildCandidatesFromText(txt, itemStopWordsSet).forEach((c) => candidates.add(c));
    });

    for (const inputVal of inputVariants) {
        for (const candidate of candidates) {
            if (inputVal === candidate) return true;

            const maxLen = Math.max(inputVal.length, candidate.length);
            if (candidate.length <= 3) {
                continue;
            }

            const distance = levenshteinDistance(inputVal, candidate);
            const similarity = 1 - distance / maxLen;

            if (similarity >= 0.78 || (candidate.length >= 5 && distance <= 2 && similarity >= 0.72)) {
                return true;
            }
        }
    }

    return false;
}   

// ==========================================
// CONTROLE DO MODAL DE ERRO ("NÃO É TOP")
// ==========================================
function closeWrongGuessModal() {
    if (!modalWrongGuess.classList.contains("active")) return;
    modalWrongGuess.classList.remove("active");
    guessInput.focus();
}

function openWrongGuessModal(rawText) {
    wrongGuessText.textContent = `'${rawText}' não está na lista.`;
    wrongModalOpenedAt = Date.now();
    modalWrongGuess.classList.add("active");

    requestAnimationFrame(() => {
        btnCloseWrong.focus();
    });
}

// ==========================================
// RENDERIZAÇÃO E CONTROLE DO JOGO
// ==========================================
function loadGame(themeIndex, mode) {
    currentThemeObj = GAME_THEMES[themeIndex];
    selectedConfigThemeIndex = themeIndex;
    gameMode = mode;
    revealedStatus = new Array(gameMode).fill(false);

    currentThemeTitle.textContent = currentThemeObj.theme;
    themeComboboxInput.value = currentThemeObj.theme;
    guessInput.value = "";

    renderList();
}

function renderList(newlyRevealedIndices = []) {
    topListEl.innerHTML = "";

    for (let i = 0; i < gameMode; i++) {
        const li = document.createElement("li");
        const isRevealed = revealedStatus[i];

        li.className = `top-item ${isRevealed ? "revealed" : "hidden-item"}`;
        li.style.backgroundColor = ITEM_COLORS[i % ITEM_COLORS.length];

        if (newlyRevealedIndices.includes(i)) {
            li.style.animation = "none";
            void li.offsetWidth; // força reflow para reiniciar animação
            li.style.animation = "";
        }

        const rankSpan = document.createElement("span");
        rankSpan.className = "item-rank";
        rankSpan.textContent = `${i + 1}`;

        const textSpan = document.createElement("span");
        textSpan.className = "item-text";
        //textSpan.textContent = isRevealed ? currentThemeObj.items[i] : "••••••••••••";
        textSpan.textContent = isRevealed ? getItemName(currentThemeObj.items[i]) : "••••••••••••";

        li.appendChild(rankSpan);
        li.appendChild(textSpan);
        topListEl.appendChild(li);
    }
}

function handleGuess() {
    const rawText = guessInput.value.trim();
    if (!rawText) return;

    const matchedIndices = [];

    for (let i = 0; i < gameMode; i++) {
        if (isSimilarMatch(rawText, currentThemeObj.items[i])) {
            matchedIndices.push(i);
        }
    }

    if (matchedIndices.length > 0) {
        playSingleClick();
        const newlyRevealed = [];

        matchedIndices.forEach((idx) => {
            if (!revealedStatus[idx]) {
                revealedStatus[idx] = true;
                newlyRevealed.push(idx);
            }
        });

        guessInput.value = "";
        renderList(newlyRevealed);

        // Verifica se todos os itens foram revelados
        if (revealedStatus.every(Boolean)) {
            setTimeout(() => {
                triggerConfetti(3000);
                modalVictory.classList.add("active");
            }, 350);
        }
    } else {
        playDoubleClick();
        openWrongGuessModal(rawText);
    }
}

function revealAllItems() {
    const newlyRevealed = [];
    for (let i = 0; i < gameMode; i++) {
        if (!revealedStatus[i]) {
            revealedStatus[i] = true;
            newlyRevealed.push(i);
        }
    }
    playSingleClick();
    renderList(newlyRevealed);
}

// ==========================================
// LÓGICA DA COMBOBOX DE TEMAS
// ==========================================
function populateCombobox(filterText = "") {
    comboboxDropdown.innerHTML = "";
    const normFilter = normalizeString(filterText);

    const filtered = GAME_THEMES.map((t, index) => ({ ...t, index })).filter((t) =>
        normalizeString(t.theme).includes(normFilter)
    );

    if (filtered.length === 0) {
        const emptyLi = document.createElement("li");
        emptyLi.className = "combobox-empty";
        emptyLi.textContent = "Nenhum tema encontrado";
        comboboxDropdown.appendChild(emptyLi);
        return;
    }

    filtered.forEach((item) => {
        const li = document.createElement("li");
        li.className = "combobox-option";
        if (item.index === selectedConfigThemeIndex) {
            li.classList.add("selected");
        }
        li.textContent = item.theme;
        li.addEventListener("click", () => {
            selectedConfigThemeIndex = item.index;
            themeComboboxInput.value = item.theme;
            comboboxDropdown.classList.remove("open");
        });
        comboboxDropdown.appendChild(li);
    });
}

themeComboboxInput.addEventListener("focus", () => {
    populateCombobox("");
    comboboxDropdown.classList.add("open");
});

themeComboboxInput.addEventListener("input", (e) => {
    populateCombobox(e.target.value);
    comboboxDropdown.classList.add("open");
});

comboboxArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = comboboxDropdown.classList.contains("open");
    if (isOpen) {
        comboboxDropdown.classList.remove("open");
    } else {
        populateCombobox("");
        comboboxDropdown.classList.add("open");
        themeComboboxInput.focus();
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest("#theme-combobox")) {
        comboboxDropdown.classList.remove("open");
        if (GAME_THEMES[selectedConfigThemeIndex]) {
            themeComboboxInput.value = GAME_THEMES[selectedConfigThemeIndex].theme;
        }
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalHelp.classList.contains("active")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        closeHelpModal();
        return;
    }

    if (e.key === "Enter" && modalWrongGuess.classList.contains("active")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.repeat) return;
        if (Date.now() - wrongModalOpenedAt < 200) return;
        closeWrongGuessModal();
    }
}, true);

// ==========================================
// EVENTOS DOS BOTÕES E MODAIS
// ==========================================
btnHome.addEventListener("click", () => {
    themeComboboxInput.value = currentThemeObj.theme;
    selectedConfigThemeIndex = GAME_THEMES.indexOf(currentThemeObj);
    document.querySelector(`input[name="game-mode"][value="${gameMode}"]`).checked = true;
    modalConfig.classList.add("active");
});

btnCloseConfig.addEventListener("click", () => {
    modalConfig.classList.remove("active");
});

btnRandomTheme.addEventListener("click", () => {
    const nextIdx = getNextRandomThemeIndex();
    selectedConfigThemeIndex = nextIdx;
    themeComboboxInput.value = GAME_THEMES[nextIdx].theme;
    comboboxDropdown.classList.remove("open");
});

btnStartGame.addEventListener("click", () => {
    const selectedMode = parseInt(
        document.querySelector('input[name="game-mode"]:checked').value,
        10
    );

    const typedExactIdx = GAME_THEMES.findIndex(
        (t) => normalizeString(t.theme) === normalizeString(themeComboboxInput.value)
    );
    if (typedExactIdx !== -1) {
        selectedConfigThemeIndex = typedExactIdx;
    }

    loadGame(selectedConfigThemeIndex, selectedMode);
    modalConfig.classList.remove("active");
});

btnRevealAll.addEventListener("click", () => {
    modalConfirmReveal.classList.add("active");
});

btnConfirmNo.addEventListener("click", () => {
    modalConfirmReveal.classList.remove("active");
});

btnConfirmYes.addEventListener("click", () => {
    modalConfirmReveal.classList.remove("active");
    revealAllItems();
});

btnGuess.addEventListener("click", handleGuess);

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (e.repeat || modalWrongGuess.classList.contains("active")) {
            e.preventDefault();
            return;
        }
        handleGuess();
    }
});

btnCloseWrong.addEventListener("click", () => {
    closeWrongGuessModal();
});

btnVictoryHome.addEventListener("click", () => {
    modalVictory.classList.remove("active");
    themeComboboxInput.value = currentThemeObj.theme;
    selectedConfigThemeIndex = GAME_THEMES.indexOf(currentThemeObj);
    modalConfig.classList.add("active");
});

btnVictoryNext.addEventListener("click", () => {
    modalVictory.classList.remove("active");
    const nextIdx = getNextRandomThemeIndex();
    loadGame(nextIdx, gameMode);
});

function closeHelpModal() {
    if (!modalHelp.classList.contains("active")) return;
    modalHelp.classList.remove("active");
}

btnHelpConfig.addEventListener("click", () => {
    modalHelp.classList.add("active");
    requestAnimationFrame(() => {
        btnCloseHelp.focus();
    });
});

btnCloseHelp.addEventListener("click", () => {
    closeHelpModal();
});

// ==========================================
// INICIALIZAÇÃO AO CARREGAR A PÁGINA
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    const initialThemeIndex = getNextRandomThemeIndex();
    loadGame(initialThemeIndex, 10);
    modalConfig.classList.add("active");
});
