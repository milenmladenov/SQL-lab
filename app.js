const TASKS = [
  // УПРАЖНЕНИЕ 1 — SELECT и WHERE: по няколко самостоятелни задачи за всяка тема
  { id: 1, section: "basics", topic: "SELECT", title: "SELECT 1 — избор на една колона", subtitle: "Основи на SELECT", level: "НАЧАЛНО НИВО", short: "SELECT · 1",
    description: "Изведете само наименованията на всички стоки от таблицата Stoka. Резултатът трябва да съдържа една колона — name.",
    goal: "Всички стойности от колоната name.", tables: ["Stoka"], expectedColumns: ["name"],
    expectedRows: [["Клавиатура"], ["Мишка"], ["Монитор"], ["USB кабел"]] },
  { id: 2, section: "basics", topic: "SELECT", title: "SELECT 2 — избор на няколко колони", subtitle: "Извличане на конкретни полета", level: "НАЧАЛНО НИВО", short: "SELECT · 2",
    description: "Изведете наименованието и цената на всички стоки. Колоните трябва да бъдат в ред: name, price.",
    goal: "Колоните name и price за всички стоки.", tables: ["Stoka"], expectedColumns: ["name", "price"],
    expectedRows: [["Клавиатура",45],["Мишка",25],["Монитор",320],["USB кабел",12]] },
  { id: 3, section: "basics", topic: "SELECT", title: "SELECT 3 — псевдоним на колона", subtitle: "Използване на AS", level: "НАЧАЛНО НИВО", short: "SELECT · 3",
    description: "Изведете името и цената на всички стоки. Наименувайте колоната с цената като cena.",
    goal: "Колони name и cena.", tables: ["Stoka"], expectedColumns: ["name", "cena"],
    expectedRows: [["Клавиатура",45],["Мишка",25],["Монитор",320],["USB кабел",12]] },
  { id: 4, section: "basics", topic: "WHERE", title: "WHERE 1 — сравнение", subtitle: "Филтриране с оператор >", level: "НАЧАЛНО НИВО", short: "WHERE · 1",
    description: "Изведете имената на стоките, чиято цена е по-висока от 40.", goal: "Имена на стоките с цена над 40.", tables: ["Stoka"],
    expectedColumns: ["name"], expectedRows: [["Клавиатура"],["Монитор"]] },
  { id: 5, section: "basics", topic: "WHERE", title: "WHERE 2 — диапазон", subtitle: "Комбиниране на условия", level: "НАЧАЛНО НИВО", short: "WHERE · 2",
    description: "Изведете имената на стоките с цена между 20 и 100 включително.", goal: "Стоки с цена от 20 до 100.", tables: ["Stoka"],
    expectedColumns: ["name"], expectedRows: [["Клавиатура"],["Мишка"]] },
  { id: 6, section: "basics", topic: "WHERE", title: "WHERE 3 — логическо условие", subtitle: "AND и OR", level: "НАЧАЛНО НИВО", short: "WHERE · 3",
    description: "Изведете името и цената на стоките, които струват под 30 или над 300.", goal: "Колони name и price за двете групи стоки.", tables: ["Stoka"],
    expectedColumns: ["name","price"], expectedRows: [["Мишка",25],["Монитор",320]] },

  // УПРАЖНЕНИЕ 2 — ORDER BY, DISTINCT и JOIN
  { id: 7, section: "filters", topic: "ORDER BY", title: "ORDER BY 1 — възходящ ред", subtitle: "Сортиране по цена", level: "НАЧАЛНО НИВО", short: "ORDER BY · 1",
    description: "Изведете name и price за всички стоки, подредени по цена от най-ниската към най-високата.", goal: "Сортиране по price във възходящ ред.", tables: ["Stoka"],
    expectedColumns: ["name","price"], expectedRows: [["USB кабел",12],["Мишка",25],["Клавиатура",45],["Монитор",320]], ordered: true },
  { id: 8, section: "filters", topic: "ORDER BY", title: "ORDER BY 2 — низходящ ред", subtitle: "DESC", level: "НАЧАЛНО НИВО", short: "ORDER BY · 2",
    description: "Изведете name и price, като най-скъпата стока бъде първа.", goal: "Сортиране по price в низходящ ред.", tables: ["Stoka"],
    expectedColumns: ["name","price"], expectedRows: [["Монитор",320],["Клавиатура",45],["Мишка",25],["USB кабел",12]], ordered: true },
  { id: 9, section: "filters", topic: "ORDER BY", title: "ORDER BY 3 — два критерия", subtitle: "Сортиране по повече от една колона", level: "СРЕДНО НИВО", short: "ORDER BY · 3",
    description: "Изведете name, vid_id и price. Подредете първо по vid_id във възходящ ред, а в рамките на всеки вид — по цена в низходящ ред.", goal: "Двустепенно сортиране.", tables: ["Stoka"],
    expectedColumns: ["name","vid_id","price"], expectedRows: [["Монитор",1,320],["Клавиатура",1,45],["Мишка",1,25],["USB кабел",2,12]], ordered: true },
  { id: 10, section: "filters", topic: "DISTINCT", title: "DISTINCT 1 — уникални видове", subtitle: "Премахване на повторения", level: "НАЧАЛНО НИВО", short: "DISTINCT · 1",
    description: "Изведете всички различни стойности на vid_id от таблицата Stoka.", goal: "Уникални стойности на vid_id.", tables: ["Stoka"],
    expectedColumns: ["vid_id"], expectedRows: [[1],[2]] },
  { id: 11, section: "filters", topic: "DISTINCT", title: "DISTINCT 2 — уникални комбинации", subtitle: "Уникални стойности в две колони", level: "СРЕДНО НИВО", short: "DISTINCT · 2",
    description: "Изведете уникалните комбинации от vid_id и price от таблицата Stoka.", goal: "Колони vid_id и price без повтарящи се комбинации.", tables: ["Stoka"],
    expectedColumns: ["vid_id","price"], expectedRows: [[1,45],[1,25],[1,320],[2,12]] },
  { id: 12, section: "filters", topic: "JOIN", title: "JOIN 1 — две таблици", subtitle: "Свързване по външен ключ", level: "СРЕДНО НИВО", short: "JOIN · 1",
    description: "Изведете името на всяка стока и името на нейния вид. Свържете Stoka с VidStoka чрез vid_id.", goal: "Колони name и vid.", tables: ["Stoka","VidStoka"],
    expectedColumns: ["name","vid"], expectedRows: [["Клавиатура","Периферия"],["Мишка","Периферия"],["Монитор","Периферия"],["USB кабел","Аксесоари"]] },
  { id: 13, section: "filters", topic: "JOIN", title: "JOIN 2 — филтриране след JOIN", subtitle: "JOIN и WHERE", level: "СРЕДНО НИВО", short: "JOIN · 2",
    description: "Изведете имената на стоките от вид „Периферия“. Използвайте JOIN между Stoka и VidStoka и филтрирайте по името на вида.", goal: "Имената на трите стоки от Периферия.", tables: ["Stoka","VidStoka"],
    expectedColumns: ["name"], expectedRows: [["Клавиатура"],["Мишка"],["Монитор"]] },
  { id: 14, section: "filters", topic: "JOIN", title: "JOIN 3 — LEFT JOIN", subtitle: "Запазване на записи без съответствие", level: "СРЕДНО НИВО", short: "JOIN · 3",
    description: "Изведете всички клиенти и идентификатора на тяхната поръчка, ако имат такава. Клиентите без поръчка също трябва да присъстват.", goal: "Колони name и porachka_id, включително NULL.", tables: ["Klient","Porachka"],
    expectedColumns: ["name","porachka_id"], expectedRows: [["Иван Петров",1],["Мария Иванова",2],["Георги Георгиев",null]] },

  // УПРАЖНЕНИЕ 3 — GROUP BY, агрегатни функции и комплексни заявки
  { id: 15, section: "advanced", topic: "GROUP BY", title: "GROUP BY 1 — брой по вид", subtitle: "Групиране и COUNT", level: "СРЕДНО НИВО", short: "GROUP BY · 1",
    description: "Изведете vid_id и броя стоки във всеки вид. Използвайте COUNT и GROUP BY.", goal: "Колони vid_id и broi.", tables: ["Stoka"],
    expectedColumns: ["vid_id","broi"], expectedRows: [[1,3],[2,1]] },
  { id: 16, section: "advanced", topic: "GROUP BY", title: "GROUP BY 2 — средна цена", subtitle: "Групиране и AVG", level: "СРЕДНО НИВО", short: "GROUP BY · 2",
    description: "За всеки вид стока изведете vid_id и средната цена с псевдоним avg_price.", goal: "Колони vid_id и avg_price.", tables: ["Stoka"],
    expectedColumns: ["vid_id","avg_price"], expectedRows: [[1,130],[2,12]] },
  { id: 17, section: "advanced", topic: "GROUP BY", title: "GROUP BY 3 — HAVING", subtitle: "Филтриране на групи", level: "НАПРЕДНАЛО НИВО", short: "GROUP BY · 3",
    description: "Изведете vid_id и броя стоки само за видовете, които имат повече от една стока.", goal: "Групи с повече от една стока.", tables: ["Stoka"],
    expectedColumns: ["vid_id","broi"], expectedRows: [[1,3]] },
  { id: 18, section: "advanced", topic: "AGGREGATES", title: "Агрегатни функции 1 — AVG", subtitle: "Средна стойност", level: "СРЕДНО НИВО", short: "AVG",
    description: "Изведете средната цена на всички стоки с псевдоним avg_price.", goal: "Една колона avg_price.", tables: ["Stoka"],
    expectedColumns: ["avg_price"], expectedRows: [[100.5]] },
  { id: 19, section: "advanced", topic: "AGGREGATES", title: "Агрегатни функции 2 — SUM", subtitle: "Сума на стойности", level: "СРЕДНО НИВО", short: "SUM",
    description: "Изведете общата сума на цените на всички стоки с псевдоним total_price.", goal: "Една колона total_price.", tables: ["Stoka"],
    expectedColumns: ["total_price"], expectedRows: [[402]] },
  { id: 20, section: "advanced", topic: "COMPLEX", title: "Комплексна заявка 1 — JOIN и агрегиране", subtitle: "Свързване и групиране", level: "НАПРЕДНАЛО НИВО", short: "COMPLEX · 1",
    description: "Изведете името на вида и средната цена на стоките в него. Покажете само видовете със средна цена над 30 и сортирайте по средна цена низходящо.", goal: "Колони vid и avg_price.", tables: ["Stoka","VidStoka"],
    expectedColumns: ["vid","avg_price"], expectedRows: [["Периферия",130]] },
  { id: 21, section: "advanced", topic: "COMPLEX", title: "Комплексна заявка 2 — подзаявка", subtitle: "Сравнение със средна стойност", level: "НАПРЕДНАЛО НИВО", short: "COMPLEX · 2",
    description: "Изведете имената на стоките, чиято цена е по-висока от средната цена на всички стоки. Използвайте подзаявка.", goal: "Една колона name.", tables: ["Stoka"],
    expectedColumns: ["name"], expectedRows: [["Монитор"]] },
  { id: 22, section: "advanced", topic: "COMPLEX", title: "Комплексна заявка 3 — CASE", subtitle: "Условни изрази", level: "НАПРЕДНАЛО НИВО", short: "COMPLEX · 3",
    description: "Изведете името на всяка стока и колона category_price. Ако цената е над 100, стойността да е „Скъпа“, иначе — „Достъпна“. Използвайте CASE.", goal: "Колони name и category_price.", tables: ["Stoka"],
    expectedColumns: ["name","category_price"], expectedRows: [["Клавиатура","Достъпна"],["Мишка","Достъпна"],["Монитор","Скъпа"],["USB кабел","Достъпна"]] }
];

const $ = (id) => document.getElementById(id);
let SQL_ENGINE = null;
let db = null;
let currentTaskId = 1;
let lastRun = null;
const completed = new Set((() => {
  try { return JSON.parse(localStorage.getItem("ict-sql-lab-completed-v1") || "[]").map(Number); }
  catch { return []; }
})());
const SECTIONS = [
  { id: "basics", title: "Упражнение 1", subtitle: "SELECT и WHERE · 6 задачи" },
  { id: "filters", title: "Упражнение 2", subtitle: "ORDER BY, DISTINCT и JOIN · 8 задачи" },
  { id: "advanced", title: "Упражнение 3", subtitle: "GROUP BY и комплексни заявки · 8 задачи" }
];
let currentSectionId = "basics";
const DRAFTS_KEY = "ict-sql-lab-drafts-v2";
const COMPLETED_KEY = "ict-sql-lab-completed-v2";
function loadDrafts() {
  try { return JSON.parse(localStorage.getItem(DRAFTS_KEY) || "{}"); }
  catch { return {}; }
}
let drafts = loadDrafts();
function saveDraft(taskId, value) {
  drafts[String(taskId)] = value;
  try { localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts)); } catch (error) { console.warn("Draft not saved", error); }
}

function createDatabase(SQL) {
  const database = new SQL.Database();
  database.run(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE VidStoka (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );
    INSERT INTO VidStoka (id, name) VALUES
      (1, 'Периферия'), (2, 'Аксесоари');

    CREATE TABLE Stoka (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      vid_id INTEGER NOT NULL REFERENCES VidStoka(id)
    );
    INSERT INTO Stoka (id, name, price, vid_id) VALUES
      (1, 'Клавиатура', 45, 1),
      (2, 'Мишка', 25, 1),
      (3, 'Монитор', 320, 1),
      (4, 'USB кабел', 12, 2);

    CREATE TABLE Klient (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );
    INSERT INTO Klient (id, name) VALUES
      (1, 'Иван Петров'), (2, 'Мария Иванова'), (3, 'Георги Георгиев');

    CREATE TABLE Porachka (
      id INTEGER PRIMARY KEY,
      klient_id INTEGER NOT NULL REFERENCES Klient(id),
      data TEXT NOT NULL
    );
    INSERT INTO Porachka (id, klient_id, data) VALUES
      (1, 1, '2026-10-01'), (2, 2, '2026-10-02');

    CREATE TABLE PorachkaStoka (
      porachka_id INTEGER NOT NULL REFERENCES Porachka(id),
      stoka_id INTEGER NOT NULL REFERENCES Stoka(id),
      kolichestvo INTEGER NOT NULL,
      PRIMARY KEY (porachka_id, stoka_id)
    );
    INSERT INTO PorachkaStoka VALUES
      (1, 1, 1), (1, 2, 2), (2, 3, 1);
  `);
  return database;
}

function setFeedback(message, type = "") {
  const box = $("feedback");
  box.className = "feedback" + (type ? " " + type : "");
  box.textContent = message;
}

function renderSectionTabs() {
  const tabs = $("sectionTabs");
  tabs.replaceChildren();
  SECTIONS.forEach(section => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-tab" + (section.id === currentSectionId ? " active" : "");
    button.setAttribute("aria-pressed", section.id === currentSectionId ? "true" : "false");
    const title = document.createElement("strong");
    title.textContent = section.title;
    const subtitle = document.createElement("small");
    subtitle.textContent = section.subtitle;
    button.append(title, subtitle);
    button.addEventListener("click", () => {
      currentSectionId = section.id;
      const firstTask = TASKS.find(task => task.section === section.id);
      renderSectionTabs();
      selectTask(firstTask.id, false);
    });
    tabs.appendChild(button);
  });
}

function renderTaskList() {
  const nav = $("taskList");
  nav.replaceChildren();
  TASKS.filter(task => task.section === currentSectionId).forEach(task => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "task-button" + (task.id === currentTaskId ? " active" : "");
    button.setAttribute("aria-current", task.id === currentTaskId ? "page" : "false");
    const num = document.createElement("span");
    num.className = "task-num";
    num.textContent = String(task.id).padStart(2, "0");
    const label = document.createElement("span");
    label.className = "task-label";
    label.textContent = task.short;
    button.append(num, label);
    if (completed.has(task.id)) {
      const check = document.createElement("span");
      check.className = "task-check";
      check.textContent = "✓";
      check.setAttribute("aria-label", "Решено");
      button.appendChild(check);
    }
    button.addEventListener("click", () => selectTask(task.id));
    nav.appendChild(button);
  });
}
function renderSchema(task) {
  const schema = $("schemaContent");
  schema.replaceChildren();
  const definitions = {
    Stoka: [
      ["id", "INTEGER", "PK"], ["name", "TEXT", ""],
      ["price", "REAL", ""], ["vid_id", "INTEGER", "FK"]
    ],
    VidStoka: [["id", "INTEGER", "PK"], ["name", "TEXT", ""]],
    Klient: [["id", "INTEGER", "PK"], ["name", "TEXT", ""]],
    Porachka: [["id", "INTEGER", "PK"], ["klient_id", "INTEGER", "FK"], ["data", "TEXT", ""]],
    PorachkaStoka: [["porachka_id", "INTEGER", "FK"], ["stoka_id", "INTEGER", "FK"], ["kolichestvo", "INTEGER", ""]]
  };
  task.tables.forEach(tableName => {
    const wrap = document.createElement("div");
    wrap.className = "schema-table";
    wrap.style.marginBottom = "10px";
    const heading = document.createElement("div");
    heading.className = "schema-table-head";
    const glyph = document.createElement("span");
    glyph.className = "table-glyph";
    glyph.textContent = "▦";
    const title = document.createElement("span");
    title.textContent = tableName;
    heading.append(glyph, title);
    wrap.appendChild(heading);
    (definitions[tableName] || []).forEach(([name, type, key]) => {
      const row = document.createElement("div");
      row.className = "schema-column";
      const label = document.createElement("span");
      label.textContent = name;
      row.appendChild(label);
      if (key) {
        const badge = document.createElement("span");
        badge.className = "key-badge";
        badge.textContent = key;
        row.appendChild(badge);
      }
      const typeSpan = document.createElement("span");
      typeSpan.className = "column-type";
      typeSpan.textContent = type;
      row.appendChild(typeSpan);
      wrap.appendChild(row);
    });
    schema.appendChild(wrap);
  });
}

function selectTask(id, updateSection = true) {
  currentTaskId = id;
  const selectedTask = TASKS.find(item => item.id === id);
  if (updateSection) currentSectionId = selectedTask.section;
  const task = TASKS.find(item => item.id === id);
  $("taskNumber").textContent = "ЗАДАНИЕ " + String(id).padStart(2, "0");
  $("taskTitle").textContent = task.title;
  $("taskSubtitle").textContent = task.subtitle;
  $("taskLevel").textContent = task.level;
  $("taskDescription").textContent = task.description;
  $("taskGoal").textContent = task.goal;
  $("sqlInput").value = drafts[String(id)] || "";
  $("results").innerHTML = '<div class="empty-state"><span class="empty-icon">▤</span><strong>Тук ще се появят резултатите</strong><span>Напиши SQL заявка и натисни „Изпълни заявката“.</span></div>';
  $("resultMeta").textContent = "Няма резултат";
  $("checkButton").disabled = true;
  lastRun = null;
  renderSectionTabs();
  renderTaskList();
  renderSchema(task);
  setFeedback("Напиши заявката си и натисни „Изпълни заявката“.");
  updateLineNumbers();
}

function updateLineNumbers() {
  const count = Math.max(1, $("sqlInput").value.split("\n").length);
  $("lineNumbers").textContent = Array.from({length: count}, (_, i) => i + 1).join("\n");
}

function renderResults(columns, rows) {
  const root = $("results");
  root.replaceChildren();
  if (!columns.length) {
    root.innerHTML = '<div class="empty-state"><strong>Командата не върна таблица с резултати.</strong></div>';
    return;
  }
  const table = document.createElement("table");
  table.className = "result-table";
  const thead = table.createTHead();
  const headRow = thead.insertRow();
  columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    headRow.appendChild(th);
  });
  const tbody = table.createTBody();
  rows.forEach(row => {
    const tr = tbody.insertRow();
    row.forEach(value => {
      const td = tr.insertCell();
      td.textContent = value === null ? "NULL" : String(value);
    });
  });
  root.appendChild(table);
}

function normalizeValue(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.round(value * 1000000) / 1000000;
  }
  return value;
}
function sameRows(actual, expected) {
  const normalize = rows => rows.map(row => JSON.stringify(row.map(normalizeValue))).sort();
  return JSON.stringify(normalize(actual)) === JSON.stringify(normalize(expected));
}
function checkOutput(task, output) {
  if (!output || output.length !== 1) return false;
  const result = output[0];
  const expectedCols = task.expectedColumns;
  const columns = result.columns.map(c => c.toLowerCase());
  if (columns.length !== expectedCols.length) return false;
  if (!expectedCols.every((col, i) => columns[i] === col.toLowerCase())) return false;
  if (task.ordered) {
    return JSON.stringify(result.values.map(row => row.map(normalizeValue))) ===
      JSON.stringify(task.expectedRows.map(row => row.map(normalizeValue)));
  }
  return sameRows(result.values, task.expectedRows);
}

function runQuery() {
  if (!db) return;
  const sql = $("sqlInput").value.trim();
  $("results").replaceChildren();
  $("checkButton").disabled = true;
  lastRun = null;

  if (!sql) {
    setFeedback("Първо напиши SQL заявка.", "error");
    return;
  }
  // Browser-side teaching restriction: one statement, SELECT/WITH only.
  // This is not a security boundary; use a separate grading database in production.
  const withoutTrailingSemicolon = sql.replace(/;\s*$/, "");
  if (withoutTrailingSemicolon.includes(";")) {
    setFeedback("Въведи една SQL заявка наведнъж.", "error");
    return;
  }
  if (!/^(SELECT|WITH)\b/i.test(sql)) {
    setFeedback("В тази лаборатория засега са разрешени само SELECT заявки.", "error");
    return;
  }

  try {
    const output = db.exec(sql);
    if (output.length === 0) {
      setFeedback("Заявката се изпълни, но не върна табличен резултат.", "error");
      return;
    }
    const result = output[0];
    renderResults(result.columns, result.values);
    $("resultMeta").textContent = `${result.values.length} реда · ${result.columns.length} колони`;
    lastRun = output;
    $("checkButton").disabled = false;
    setFeedback("Заявката се изпълни успешно. Сега можеш да провериш решението.", "success");
  } catch (error) {
    setFeedback("SQL грешка: " + error.message, "error");
  }
}

function checkSolution() {
  if (!lastRun) {
    setFeedback("Първо изпълни заявката.", "error");
    return;
  }
  const task = TASKS.find(item => item.id === currentTaskId);
  if (checkOutput(task, lastRun)) {
    completed.add(task.id);
    try { localStorage.setItem(COMPLETED_KEY, JSON.stringify([...completed])); } catch {}
    renderTaskList();
    setFeedback("Правилно решение! Колоните и данните отговарят на условието.", "success");
  } else {
    setFeedback("Заявката се изпълни, но резултатът не съвпада с очаквания. Провери имената и броя на колоните, филтрирането и върнатите редове.", "error");
  }
}

async function initialize() {
  try {
    if (typeof initSqlJs !== "function") {
      throw new Error("SQL библиотеката не се зареди. Провери интернет връзката.");
    }
    SQL_ENGINE = await initSqlJs({
      locateFile: file => "https://sql.js.org/dist/" + file
    });
    db = createDatabase(SQL_ENGINE);
    $("engineStatus").classList.add("ready");
    $("engineStatusText").textContent = "SQL двигателят е готов";
    $("runButton").disabled = false;
    $("checkButton").disabled = false;
    selectTask(1);
    setFeedback("Базата е заредена. Напиши първата си SQL заявка.");
  } catch (error) {
    $("engineStatus").classList.add("error");
    $("engineStatusText").textContent = "Грешка при зареждане";
    setFeedback(error.message || "Неуспешно зареждане на SQL двигателя.", "error");
  }
}

$("runButton").addEventListener("click", runQuery);
$("checkButton").addEventListener("click", checkSolution);
$("clearButton").addEventListener("click", () => {
  $("sqlInput").value = "";
  saveDraft(currentTaskId, "");
  updateLineNumbers();
  $("results").innerHTML = '<div class="empty-state"><span class="empty-icon">▤</span><strong>Тук ще се появят резултатите</strong><span>Напиши SQL заявка и натисни „Изпълни заявката“.</span></div>';
  $("resultMeta").textContent = "Няма резултат";
  $("checkButton").disabled = true;
  lastRun = null;
  setFeedback("Редакторът е изчистен.");
  $("sqlInput").focus();
});
$("resetDbButton").addEventListener("click", () => {
  if (!SQL_ENGINE) return;
  if (db) db.close();
  db = createDatabase(SQL_ENGINE);
  completed.clear();
  try { localStorage.removeItem(COMPLETED_KEY); } catch {}
  selectTask(currentTaskId);
  setFeedback("Началната база е възстановена.", "success");
});
$("sqlInput").addEventListener("input", () => {
  updateLineNumbers();
  saveDraft(currentTaskId, $("sqlInput").value);
});
$("sqlInput").addEventListener("keydown", event => {
  if (event.key === "Tab") {
    event.preventDefault();
    const el = event.currentTarget;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    el.setRangeText("  ", start, end, "end");
    updateLineNumbers();
  }
});
initialize();
