const state = {
  role: 'student',
  activePage: 'dashboard',
  aiOpen: false,
  selectedDate: '2026-08-17',
  month: 7,
  year: 2026,
  darkMode: localStorage.getItem('schoolos-dark') === 'true',
};

const icons = {
  dashboard: 'layout-dashboard',
  homework: 'book-open-check',
  attendance: 'clipboard-check',
  calendar: 'calendar-days',
  exams: 'graduation-cap',
  notes: 'notebook-tabs',
  announcements: 'megaphone',
  users: 'users',
  search: 'search',
  bell: 'bell',
  menu: 'menu',
  bot: 'sparkles',
  arrow: 'arrow-right',
  check: 'check',
  clock: 'clock-3',
  warning: 'triangle-alert',
  plus: 'plus',
  send: 'send',
  file: 'file-text',
  chart: 'chart-no-axes-combined',
  close: 'x',
  fees: 'wallet-cards',
  food: 'utensils-crossed',
  lost: 'search-x',
  personal: 'sticky-note',
  moon: 'moon',
  sun: 'sun',
  external: 'external-link',
  bus: 'bus-front',
};

const roleNames = {
  student: 'Student / Parent',
  teacher: 'Teacher',
  admin: 'Administrator'
};

const roleMeta = {
  student: { name: 'Harshitha Ganti', subtitle: 'Student / Parent • Class 8A • Roll No. 18', initials: 'HG' },
  teacher: { name: 'Asha Rao', subtitle: 'English • Class 8A', initials: 'AR' },
  admin: { name: 'Meera Kapoor', subtitle: 'School Administrator', initials: 'MK' }
};

const pageMeta = {
  dashboard: { title: 'Dashboard', subtitle: 'A quick view of everything that needs your attention.' },
  homework: { title: 'Homework', subtitle: 'Assignments, deadlines and daily academic work.' },
  attendance: { title: 'Attendance', subtitle: 'Track attendance clearly, before small gaps become big ones.' },
  calendar: { title: 'Academic Calendar', subtitle: 'Classes, exams, events and holidays in one place.' },
  exams: { title: 'Exams', subtitle: 'Marks, question papers, answer keys and performance.' },
  notes: { title: 'Notes', subtitle: 'Your academic notes, organised by subject and chapter.' },
  announcements: { title: 'Announcements', subtitle: 'Important school updates, approvals and notices.' },
  fees: { title: 'Fees', subtitle: 'View fee schedules, dues and payment status.' },
  food: { title: 'Food', subtitle: "This week's school menu and meal information." },
  lostfound: { title: 'Lost & Found', subtitle: 'Browse recently reported items and return them to their owners.' },
  personal: { title: 'Personal Notes', subtitle: 'Save quick reminders, ideas and school-related notes.' },
  bus: { title: 'Bus Tracking', subtitle: 'See the live location and expected arrival of your school bus.' },
};

const homework = [
  { date: '2026-08-17', subject: 'Mathematics', title: 'Complete Exercise 4.2, Questions 1–8', teacher: 'Mr. Vivek', status: 'Due tomorrow' },
  { date: '2026-08-17', subject: 'English', title: 'Read Chapter 7 and prepare five questions', teacher: 'Ms. Asha', status: 'Due Wednesday' },
  { date: '2026-08-17', subject: 'Physics', title: 'Solve Numerical Problems 1–5', teacher: 'Dr. Rahul', status: 'Due Friday' },
  { date: '2026-08-18', subject: 'Computer Science', title: 'Finish Python loops worksheet', teacher: 'Ms. Neha', status: 'Due Thursday' },
  { date: '2026-08-20', subject: 'English', title: 'Write a 200-word character sketch', teacher: 'Ms. Asha', status: 'Due Monday' },
];

const studentAttendance = [
  { name: 'Harshitha Ganti', pct: 94.2, status: 'present' },
  { name: 'Aarav Sharma', pct: 96, status: 'present' },
  { name: 'Ananya Rao', pct: 89, status: 'present' },
  { name: 'Arjun Patel', pct: 61, status: 'low' },
  { name: 'Diya Singh', pct: 68, status: 'warning' },
  { name: 'Isha Mehta', pct: 94, status: 'present' },
];

const teacherStudents = [
  'Aarav Sharma','Ananya Rao','Arjun Patel','Diya Singh','Isha Mehta','Kabir Menon','Kiara Shah','Lakshya Reddy','Meera Nair','Neil Kapoor','Nisha Verma','Om Prakash','Parth Iyer','Prisha Jain','Rahul Das','Rhea Malhotra','Rohan Gupta','Saanvi Rao','Samarth Kulkarni','Sara Khan','Shaurya Bose','Siya Reddy','Tanmay Joshi','Tara Mehta','Uday Kumar','Vanya Shah','Vedant Rao','Vihaan Patel','Yash Mehta','Zoya Ali','Aditya Nair','Anika Kapoor','Devansh Singh','Ira Menon','Kunal Verma'
].map((name, i) => ({name, pct: [96,89,61,68,94,92,88,73,97,91,84,62,95,79,93,87,72,90,98,76,94,69,81,92,64,86,91,74,97,88,83,95,71,93,89][i]}));


const marks = [
  { subject: 'Mathematics', pt1: 74, pt2: 82, half: 86 },
  { subject: 'Physics', pt1: 85, pt2: 91, half: 89 },
  { subject: 'English', pt1: 79, pt2: 87, half: 92 },
  { subject: 'Computer Science', pt1: 90, pt2: 95, half: 96 },
];

const notes = [
  { subject: 'Physics', chapter: 'Chapter 1 • Motion', type: 'PDF', enabled: true },
  { subject: 'Physics', chapter: 'Chapter 2 • Force and Laws', type: 'PDF', enabled: true },
  { subject: 'Physics', chapter: 'Chapter 3 • Gravitation', type: 'PDF', enabled: false },
  { subject: 'English', chapter: 'Chapter 7 • The Last Leaf', type: 'PDF', enabled: true },
  { subject: 'Mathematics', chapter: 'Chapter 4 • Algebra', type: 'PDF', enabled: true },
];


const notesBySubject = {
  Mathematics: [
    {id:101, chapter:'Chapter 1 • Real Numbers', type:'PDF', enabled:true, file:'mathematics-chapter-1.pdf'},
    {id:102, chapter:'Chapter 2 • Polynomials', type:'PDF', enabled:true, file:'mathematics-chapter-2.pdf'},
    {id:103, chapter:'Chapter 3 • Pair of Linear Equations', type:'PDF', enabled:false, file:'mathematics-chapter-3.pdf'},
  ],
  Physics: [
    {id:201, chapter:'Chapter 1 • Motion', type:'PDF', enabled:true, file:'physics-chapter-1.pdf'},
    {id:202, chapter:'Chapter 2 • Force and Laws', type:'PDF', enabled:true, file:'physics-chapter-2.pdf'},
    {id:203, chapter:'Chapter 3 • Gravitation', type:'PDF', enabled:false, file:'physics-chapter-3.pdf'},
  ],
  English: [
    {id:301, chapter:'Chapter 1 • The Fun They Had', type:'PDF', enabled:true, file:'english-chapter-1.pdf'},
    {id:302, chapter:'Chapter 7 • The Last Leaf', type:'PDF', enabled:true, file:'english-chapter-7.pdf'},
  ],
  'Computer Science': [
    {id:401, chapter:'Chapter 1 • Python Basics', type:'PDF', enabled:true, file:'computer-science-chapter-1.pdf'},
    {id:402, chapter:'Chapter 2 • Loops & Control Flow', type:'PDF', enabled:false, file:'computer-science-chapter-2.pdf'},
  ]
};
const announcements = [
  { title: 'Inter-School Science Exhibition', date: '16 Aug', audience: 'Classes 8–10', status: 'Published' },
  { title: 'Independence Day Holiday', date: '14 Aug', audience: 'All students', status: 'Published' },
  { title: 'PT2 Report Cards', date: '12 Aug', audience: 'Classes 8–10', status: 'Published' },
];

function icon(name, size = 18, stroke = 2) {
  return `<i data-lucide="${name}" width="${size}" height="${size}" stroke-width="${stroke}"></i>`;
}

function initIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function navItems() {
  const groups = [
    { heading: 'Workspace', items: [
      ['dashboard', 'Dashboard', icons.dashboard],
      ['homework', 'Homework', icons.homework],
      ['attendance', 'Attendance', icons.attendance],
      ['calendar', 'Academic Calendar', icons.calendar],
      ['exams', 'Exams', icons.exams],
    ]},
    { heading: 'Academics', items: [
      ['notes', 'Notes', icons.notes],
      ['announcements', 'Announcements', icons.announcements],
    ]},
    { heading: 'School', items: [
      ...(state.role !== 'teacher' ? [['fees', 'Fees', icons.fees]] : []),
      ['food', 'Food', icons.food],
      ['lostfound', 'Lost & Found', icons.lost],
      ...(state.role === 'student' ? [['bus', 'Bus Tracking', icons.bus]] : []),
    ]},
    { heading: 'Personal', items: [
      ['personal', 'Personal Notes', icons.personal],
    ]},
  ];
  return groups;
}

function shell() {
  const meta = roleMeta[state.role];
  return `
    <div class="app-shell dark-mode-shell">
      <aside id="sidebar" class="sidebar flex flex-col p-4">
        <div class="logo-panel">
          <div class="flex items-center gap-3">
            <div class="logo-mark">V</div>
            <div class="min-w-0">
              <div class="logo-name">Vednix</div>
              <div class="logo-sub">SMART SCHOOL PLATFORM</div>
            </div>
          </div>
        </div>

        <nav class="space-y-5">
          ${navItems().map(group => `
            <div>
              <div class="px-2 mb-2 text-[11px] font-bold uppercase tracking-[.14em] opacity-55">${group.heading}</div>
              <div class="space-y-1">
                ${group.items.map(([id,label,ico]) => `
                  <button onclick="navigate('${id}')" class="nav-item ${state.activePage === id ? 'active' : ''} w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left font-bold text-[14px]">
                    ${icon(ico, 18, 2)}
                    <span>${label}</span>
                  </button>`).join('')}
              </div>
            </div>`).join('')}
        </nav>

        <div class="mt-auto pt-5 border-t border-black/10">
          <div class="px-2 mb-2 text-[11px] font-bold uppercase tracking-[.14em] opacity-55">Demo Role</div>
          <select onchange="changeRole(this.value)" class="w-full bg-white/70 border border-black/10 rounded-xl px-3 py-2 text-[13px] font-bold outline-none">
            ${Object.entries(roleNames).map(([value,label]) => `<option value="${value}" ${state.role===value?'selected':''}>${label}</option>`).join('')}
          </select>
          <div class="flex items-center gap-3 mt-4 px-2">
            <div class="w-9 h-9 rounded-full bg-black text-white grid place-items-center text-xs font-bold">${meta.initials}</div>
            <div class="min-w-0">
              <div class="font-bold text-sm truncate">${meta.name}</div>
              <div class="text-[11px] opacity-60 truncate">${meta.subtitle}</div>
            </div>
          </div>
        </div>
      </aside>

      <header class="topbar ref-topbar flex items-center justify-between px-4 md:px-5">
        <div class="flex items-center gap-3 min-w-0">
          <button onclick="toggleSidebar()" class="mobile-menu btn bg-white/15 text-white px-2.5 py-2 rounded-xl">${icon(icons.menu,18)}</button>
          <div class="hidden md:block text-xs font-bold text-slate-600">My School / ${roleNames[state.role]}</div>
          <div class="md:hidden font-bold text-sm text-slate-800">Vednix</div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="toggleDarkMode()" class="ref-top-icon btn px-2.5 py-2 rounded-xl" title="Toggle dark mode">${icon(state.darkMode ? icons.sun : icons.moon,18)}</button>
          <button class="ref-top-icon btn px-2.5 py-2 rounded-xl" title="Search">${icon(icons.search,18)}</button>
          <button class="ref-top-icon btn px-2.5 py-2 rounded-xl relative" title="Notifications">
            ${icon(icons.bell,18)}<span class="absolute -top-1 -right-1 w-4 h-4 bg-black text-white rounded-full text-[9px] grid place-items-center">3</span>
          </button>
          <div class="hidden md:flex items-center gap-2 pl-1 ref-profile-pill">
            <div class="text-right leading-tight">
              <div class="font-bold text-sm">${meta.name}</div>
              <div class="text-[11px] opacity-80">${roleNames[state.role]}</div>
            </div>
            <div class="ref-avatar">${meta.initials}</div>
          </div>
        </div>
      </header>

      <main class="main">
        <div id="page-root" class="p-5 md:p-7"></div>
      </main>

      <button onclick="toggleAI()" class="ai-fab" title="Open School Intelligence">${icon(icons.bot, 23, 2)}</button>
      <div id="ai-panel" class="ai-panel"></div>
    </div>`;
}

function render() {
  document.getElementById('app').innerHTML = shell();
  renderPage();
  renderAI();
  initIcons();
}

function pageHeader(actions = '') {
  const meta = pageMeta[state.activePage];
  return `
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-7">
      <div>
        <h1 class="heading text-3xl md:text-4xl font-extrabold">${meta.title}</h1>
        <p class="text-sm text-slate-500 mt-2 max-w-2xl">${meta.subtitle}</p>
      </div>
      <div class="flex gap-2">${actions}</div>
    </div>`;
}

function renderPage() {
  const root = document.getElementById('page-root');
  const page = state.activePage;
  const view = ({ dashboard: dashboardPage, homework: homeworkPage, attendance: attendancePage, calendar: calendarPage, exams: examsPage, notes: notesPage, announcements: announcementsPage, fees: feesPage, food: foodPage, lostfound: lostFoundPage, personal: personalNotesPage, bus: busTrackingPage })[page];
  root.innerHTML = view();
  if (page === 'fees' && state.role === 'admin') renderFeeTable();
  initIcons();
}

function dashboardPage() {
  if (state.role === 'admin') return adminDashboard();
  if (state.role === 'teacher') return teacherDashboard();
  return studentParentDashboard();
}

function studentParentDashboard() {
  return `
    <div class="dashboard-ref-header">
      <div>
        <h1 class="heading text-3xl md:text-[34px] font-extrabold">Dashboard</h1>
        <p class="text-sm text-slate-500 mt-1">A quick view of everything that needs your attention.</p>
      </div>
      <button onclick="navigate('homework')" class="ref-dark-btn">View today's work ${icon(icons.arrow,16)}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
      ${refMetricCard('Attendance', '94.2%', 'Current attendance', icons.attendance, 'Good standing', 'attendance')}
      ${refMetricCard('Homework', '3', 'Due this week', icons.homework, '2 due soon', 'homework')}
      ${refMetricCard('Next Exam', 'Math', 'Half-Yearly • 22 Aug', icons.exams, '5 days left', 'exam')}
      ${refMetricCard('Announcements', '3', 'New since Friday', icons.announcements, 'Read all', 'announcement', true)}
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-[1.35fr_.75fr] gap-4">
      <div class="space-y-4">
        <section class="ref-card p-4 md:p-5">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="heading text-xl font-extrabold">Today's Homework</h2>
              <div class="text-[11px] text-slate-500 mt-1">Monday, 17 August 2026 <span class="inline-flex items-center gap-1 ml-2"><span class="w-5 h-5 rounded-full bg-slate-300/80 grid place-items-center">${icon('user',11)}</span> <span>My Week</span></span></div>
            </div>
            <button onclick="navigate('homework')" class="ref-light-btn">Due calendar</button>
          </div>
          <div class="space-y-2.5">
            ${homework.filter(x => x.date==='2026-08-17').slice(0,2).map(x => refHomeworkRow(x)).join('')}
          </div>
        </section>

        <section class="ref-card p-4 md:p-5">
          <div class="flex items-center justify-between mb-4">
            <h2 class="heading text-xl font-extrabold">Quick Actions</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            ${refQuickAction('Quick Poll', 'chart-no-axes-combined', "showToast('Quick poll opened')")}
            ${refQuickAction('Message Teacher', 'mail', "showToast('Teacher messaging opened')")}
            ${refQuickAction('Library Access', 'library-big', "showToast('Library access opened')")}
          </div>
        </section>
      </div>

      <section class="ref-card p-4 md:p-5">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="heading text-xl font-extrabold">Upcoming</h2>
            <p class="text-[11px] text-slate-500 mt-1">What is coming next</p>
          </div>
          <button class="ref-light-btn">${icon('list-filter',14)} Filter Calendar</button>
        </div>
        <div class="space-y-3">
          ${refUpcoming('18', 'AUG', 'Normal classes', 'Tuesday', 'bell')}
          ${refUpcoming('20', 'AUG', 'Math practice test', 'Thursday', 'flask-conical')}
          ${refUpcoming('22', 'AUG', 'Half-Yearly + Mathematics', 'Saturday', 'triangle')}
          ${refUpcoming('31', 'AUG', 'Science Exhibition', 'Monday', 'pencil')}
        </div>
      </section>
    </div>`;
}

function refMetricCard(title, value, sub, ico, foot, type, isNew=false) {
  const accent = type==='attendance' ? 'ref-ring ring-blue' : type==='homework' ? 'ref-mini-visual books' : type==='exam' ? 'ref-mini-visual clock' : 'ref-mini-visual bubble';
  const target = type==='attendance' ? "navigate('attendance')" : type==='homework' ? "navigate('homework')" : type==='exam' ? "navigate('exams')" : "navigate('announcements')";
  return `<button onclick="${target}" class="ref-card ref-metric text-left w-full">
    <div><div class="ref-kicker">${title}</div><div class="ref-value">${value}</div><div class="ref-sub">${sub}</div><div class="ref-foot">${foot}</div></div>
    <div class="${accent}">${isNew ? '<span class="ref-new">new</span>' : icon(ico, 30, 1.7)}</div>
  </button>`;
}

function refHomeworkRow(x) {
  const iconName = x.subject === 'English' ? 'feather' : x.subject === 'Physics' ? 'atom' : 'calculator';
  return `<div class="ref-homework-row">
    <div class="ref-subject-icon">${icon(iconName,23,1.7)}</div>
    <div class="min-w-0 flex-1"><div class="text-[10px] font-bold text-slate-500">${x.subject} <span class="font-normal">• ${x.teacher}</span></div><div class="font-bold text-sm md:text-[13px] mt-1 truncate">${x.title}</div></div>
    <span class="ref-due">${x.status}</span>
  </div>`;
}

function refQuickAction(label, ico, fn) {
  return `<button onclick="${fn}" class="ref-quick"><span>${icon(ico,18,2)}</span><span>${label}</span></button>`;
}

function refUpcoming(day, mon, title, sub, ico) {
  return `<div class="flex items-center gap-3">
    <div class="ref-datebox"><strong>${day}</strong><span>${mon}</span></div>
    <div class="min-w-0 flex-1"><div class="font-bold text-[13px] md:text-sm truncate">${title} ${icon(ico,13,2)}</div><div class="text-[11px] text-slate-500 mt-0.5">${sub}</div></div>
  </div>`;
}

function teacherDashboard() {
  return `
    ${pageHeader(`<button onclick="navigate('attendance')" class="btn btn-dark">Take attendance ${icon(icons.check,16)}</button>`)}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      ${metricCard('Homework', '1', 'Draft pending', icons.homework, 'Complete today')}
      ${metricCard('Attendance', '8A', 'Not submitted', icons.attendance, '40 students')}
      ${metricCard('Marks', '12', 'Entries pending', icons.exams, 'PT2')}
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-[1.2fr_.8fr] gap-5">
      <section class="card p-5">
        <div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Today's actions</h2><p class="text-xs text-slate-500 mt-1">English • Class 8A</p></div><span class="badge badge-blue">3 tasks</span></div>
        ${actionRow('Submit English homework', 'Due by 4:00 PM', 'Open homework', 'homework')}
        ${actionRow('Submit attendance', 'Morning attendance', 'Take attendance', 'attendance')}
        ${actionRow('Enter PT2 marks', '12 students remaining', 'Open marks', 'exams')}
      </section>
      <section class="card p-5"><h2 class="heading text-xl font-extrabold mb-4">Class snapshot</h2>
        ${studentAttendance.slice(1).map(s => `<div class="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"><div><div class="font-bold text-sm">${s.name}</div><div class="text-[11px] text-slate-500">8A</div></div>${attendanceBadge(s.pct)}</div>`).join('')}
      </section>
    </div>`;
}

function adminDashboard() {
  return `
    ${pageHeader(`<button onclick="navigate('announcements')" class="btn btn-primary">Review approvals ${icon(icons.arrow,16)}</button>`)}
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      ${metricCard('Pending approvals', '7', 'Across school', icons.clock, 'Needs review')}
      ${metricCard('Attendance', '14', 'Classes submitted', icons.attendance, '2 pending')}
      ${metricCard('Homework', '18', 'Published today', icons.homework, '100% complete')}
      ${metricCard('Alerts sent', '6', 'This week', icons.announcements, '2 low attendance')}
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-[1.25fr_.75fr] gap-5">
      <section class="card p-5">
        <div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Approval queue</h2><p class="text-xs text-slate-500 mt-1">Latest submissions from teachers</p></div><span class="badge badge-yellow">7 pending</span></div>
        ${approvalRow('Homework', 'Physics • 8A', 'Dr. Rahul', 'homework')}
        ${approvalRow('Attendance', 'English • 8A', 'Ms. Asha', 'attendance')}
        ${approvalRow('Marks', 'PT2 • Mathematics', 'Mr. Vivek', 'exams')}
        ${approvalRow('Announcement', 'Science Exhibition', '3 teachers', 'announcements')}
      </section>
      <section class="card p-5"><h2 class="heading text-xl font-extrabold mb-4">School alerts</h2>
        <div class="soft-card p-4 mb-3"><div class="flex items-start gap-3">${icon(icons.warning,18)}<div><div class="font-bold text-sm">2 low-attendance students</div><p class="text-xs text-slate-500 mt-1">Parent notifications are ready to be sent.</p></div></div></div>
        <div class="soft-card p-4"><div class="flex items-start gap-3">${icon(icons.check,18)}<div><div class="font-bold text-sm">All classes accounted for</div><p class="text-xs text-slate-500 mt-1">Attendance submissions are nearly complete.</p></div></div></div>
      </section>
    </div>`;
}

function homeworkPage() {
  const isTeacher = state.role === 'teacher';
  const isAdmin = state.role === 'admin';
  return `
    ${pageHeader(isTeacher ? `<button onclick="showHomeworkEditor()" class="btn btn-primary">${icon(icons.plus,16)} Add homework</button>` : '')}
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_.95fr] gap-5">
      <section class="card p-5">
        <div class="flex items-center justify-between mb-4"><div><h2 class="heading text-xl font-extrabold">August 2026</h2><p class="text-xs text-slate-500 mt-1">Select a day to view homework</p></div><div class="flex gap-2"><button class="btn btn-soft px-3">‹</button><button class="btn btn-soft px-3">›</button></div></div>
        ${calendarMarkup('homework')}
      </section>
      <section class="card p-5">
        <div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">${formatSelectedDate()}</h2><p class="text-xs text-slate-500 mt-1">${isTeacher ? 'Only English homework is editable for your login.' : isAdmin ? 'Review and publish teacher submissions.' : 'Homework for your selected day.'}</p></div></div>
        ${homeworkForSelectedDate(isTeacher, isAdmin)}
      </section>
    </div>`;
}

function homeworkForSelectedDate(isTeacher, isAdmin) {
  const dayItems = homework.filter(x => x.date === state.selectedDate);
  if (isTeacher) {
    return `<div class="space-y-4"><label class="text-xs font-bold text-slate-500">ENGLISH HOMEWORK • CLASS 8A</label><textarea class="input min-h-[180px]">Read Chapter 7 and prepare five questions. Write answers in your notebook.</textarea><div class="flex justify-end gap-2"><button class="btn btn-soft">Save draft</button><button class="btn btn-primary">Send for approval ${icon(icons.send,15)}</button></div></div>`;
  }
  if (isAdmin) {
    return dayItems.map(x => `<div class="soft-card p-4 mb-3"><div class="flex items-start justify-between gap-3"><div><span class="badge badge-blue">${x.subject}</span><h3 class="font-bold mt-2">${x.title}</h3><p class="text-xs text-slate-500 mt-1">Submitted by ${x.teacher}</p></div><span class="badge badge-yellow">Pending</span></div><div class="flex justify-end gap-2 mt-4"><button class="btn btn-outline text-xs">Reject</button><button onclick="approveToast('${x.subject}')" class="btn btn-success text-xs">Approve</button></div></div>`).join('') || `<div class="text-sm text-slate-500 py-8 text-center">No submissions for this day.</div>`;
  }
  return dayItems.map(x => `<div class="soft-card p-4 mb-3"><div class="flex items-start justify-between gap-3"><div><span class="badge badge-blue">${x.subject}</span><h3 class="font-bold mt-2">${x.title}</h3><p class="text-xs text-slate-500 mt-1">${x.teacher}</p></div><span class="badge badge-green">${x.status}</span></div></div>`).join('') || `<div class="text-sm text-slate-500 py-8 text-center">No homework for this day.</div>`;
}

function attendancePage() {
  const isTeacher = state.role === 'teacher';
  const isAdmin = state.role === 'admin';
  if (isTeacher) return `
    ${pageHeader(`<button onclick="submitToast('Attendance submitted to admin')" class="btn btn-primary">Submit attendance ${icon(icons.send,16)}</button>`)}
    <section class="card p-5">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div><h2 class="heading text-xl font-extrabold">8A Attendance</h2><p class="text-xs text-slate-500 mt-1">17 August 2026 • Morning attendance • 35 students</p></div>
        <div class="flex items-center gap-2"><span class="badge badge-green">31 present</span><span class="badge badge-red">4 absent</span></div>
      </div>
      <div class="soft-card p-3 mb-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"><input class="input sm:max-w-sm" placeholder="Search student..." /><div class="text-xs text-slate-500">Tick students who are <strong class="text-slate-700">present</strong>.</div></div>
      <div class="space-y-2">
        ${teacherStudents.map((s, idx) => `<label class="attendance-student ${s.pct<65?'att-low':s.pct<75?'att-warning':''} flex items-center gap-3 p-3 rounded-xl cursor-pointer"><input type="checkbox" ${[2,11,19,27].includes(idx)?'':'checked'} class="w-4 h-4 accent-[#004C99]"><div class="flex-1 min-w-0"><div class="font-bold text-sm">${s.name}</div><div class="text-[11px] text-slate-500">Roll No. ${idx+1}</div></div><div class="font-noto font-extrabold text-sm">${s.pct}%</div></label>`).join('')}
      </div>
    </section>`;
  if (isAdmin) return `
    ${pageHeader(`<button onclick="approveToast('All attendance approved')" class="btn btn-success">Approve selected ${icon(icons.check,16)}</button>`)}
    <section class="card p-5"><div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Attendance review</h2><p class="text-xs text-slate-500 mt-1">Check teacher submissions before publishing.</p></div><span class="badge badge-yellow">2 classes pending</span></div>
      <div class="table-wrap"><table class="app-table"><thead><tr><th>Class</th><th>Teacher</th><th>Present</th><th>Absent</th><th>Flagged</th><th>Status</th></tr></thead><tbody>
        <tr><td class="font-bold">8A</td><td>Ms. Asha</td><td>37</td><td>3</td><td><span class="badge badge-red">2</span></td><td><span class="badge badge-yellow">Pending</span></td></tr>
        <tr><td class="font-bold">8B</td><td>Mr. Vivek</td><td>39</td><td>1</td><td><span class="badge badge-gray">0</span></td><td><span class="badge badge-green">Approved</span></td></tr>
        <tr><td class="font-bold">9A</td><td>Dr. Rahul</td><td>40</td><td>0</td><td><span class="badge badge-gray">0</span></td><td><span class="badge badge-yellow">Pending</span></td></tr>
      </tbody></table></div></section>`;
  return `
    ${pageHeader()}<div class="grid grid-cols-1 xl:grid-cols-[.85fr_1.15fr] gap-5">
      <section class="card p-5"><div class="flex items-center justify-between"><div><h2 class="heading text-xl font-extrabold">Current attendance</h2><p class="text-xs text-slate-500 mt-1">2026 academic year</p></div><div class="metric-number font-extrabold text-4xl">94.2%</div></div><div class="progress-track mt-6"><div class="progress-fill" style="width:94.2%"></div></div><div class="grid grid-cols-3 gap-3 mt-6"><div class="soft-card p-3"><div class="text-xs text-slate-500">Present</div><div class="font-noto font-extrabold text-xl mt-1">154</div></div><div class="soft-card p-3"><div class="text-xs text-slate-500">Absent</div><div class="font-noto font-extrabold text-xl mt-1">10</div></div><div class="soft-card p-3"><div class="text-xs text-slate-500">Holidays</div><div class="font-noto font-extrabold text-xl mt-1">18</div></div></div></section>
      <section class="card p-5"><h2 class="heading text-xl font-extrabold mb-5">Attendance calendar</h2>${attendanceCalendar()}</section>
    </div>`;
}

function attendanceCalendar() {
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cells = Array.from({length: 31}, (_,i)=>i+1);
  return `<div class="grid grid-cols-7 gap-2 mb-2">${labels.map(x => `<div class="text-[10px] font-bold text-slate-400 text-center">${x}</div>`).join('')}</div><div class="grid grid-cols-7 gap-2">${Array.from({length:5},()=>'<div></div>').join('')}${cells.map(d => { const absent=[6,13,21]; const holiday=[1,8,15,16,22,23,29,30]; return `<div class="h-11 rounded-lg border border-slate-100 flex items-center justify-center text-xs font-bold ${absent.includes(d)?'bg-red-50 text-red-600 border-red-100':holiday.includes(d)?'bg-slate-50 text-slate-400':'bg-green-50 text-green-700'}">${d}</div>`; }).join('')}</div>`;
}

function calendarPage() {
  const canEdit = state.role === 'admin' || state.role === 'teacher';
  return `${pageHeader(canEdit ? `<button onclick="showToast('Academic calendar editor opened')" class="btn btn-primary">${icon(icons.plus,16)} Add event</button>` : '')}<section class="card p-5">${calendarMarkup('academic')}</section>`;
}

function calendarMarkup(mode) {
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const days = Array.from({length:31},(_,i)=>i+1);
  const holidays = [1,8,15,16,22,23,29,30];
  const events = {20:'School Event',22:'Half-Yearly Exam',31:'Science Exhibition'};
  return `<div class="grid grid-cols-7 gap-2 mb-2">${labels.map(x=>`<div class="text-[11px] font-bold text-slate-400 px-2">${x}</div>`).join('')}</div>
    <div class="calendar-grid">${Array.from({length:5},()=>'<div></div>').join('')}${days.map(d => {
      const iso=`2026-08-${String(d).padStart(2,'0')}`;
      const selected=state.selectedDate===iso;
      const today=d===17;
      const holiday=holidays.includes(d);
      const event=events[d];
      return `<button onclick="selectDate('${iso}')" class="calendar-day ${selected?'selected':''} ${today?'today':''} ${holiday?'holiday':''} text-left">
        <div class="flex items-center justify-between gap-2"><span class="font-bold text-sm">${d}</span>${today?'<span class="badge badge-blue text-[9px]">TODAY</span>':''}</div>
        ${holiday?`<div class="mt-2 flex items-center gap-1"><span class="calendar-dot" style="background:#004C99"></span><span class="event-text text-[10px] font-bold">Holiday</span></div>`:''}
        ${event?`<div class="mt-2 flex items-center gap-1"><span class="calendar-dot"></span><span class="event-text text-[10px] text-slate-500">${event}</span></div>`:''}
      </button>`;
    }).join('')}</div>
    <div class="calendar-legend"><span><i style="background:#004C99"></i> Holiday</span><span><i style="background:#16A34A"></i> Class day</span><span><i style="background:#FF548D"></i> Event / exam</span></div>`;
}

function examsPage() {
  const isTeacher = state.role === 'teacher';
  const isAdmin = state.role === 'admin';
  if (isTeacher) return `${pageHeader(`<button onclick="submitToast('Marks saved as draft')" class="btn btn-primary">Save marks ${icon(icons.check,16)}</button>`)}<section class="card p-5"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5"><div><h2 class="heading text-xl font-extrabold">PT2 • Mathematics</h2><p class="text-xs text-slate-500 mt-1">Enter marks for Class 8A</p></div><select class="input md:w-52"><option>PT2</option><option>Half-Yearly</option></select></div><div class="table-wrap"><table class="app-table"><thead><tr><th>Student</th><th>PT1</th><th>PT2</th><th>Current</th><th>Status</th></tr></thead><tbody>${studentAttendance.map((s,i)=>`<tr><td class="font-bold">${s.name}</td><td>${70+i}</td><td><input class="input !py-2 !rounded-lg w-24" value="${78+i*2}" /></td><td>${78+i*2}%</td><td><span class="badge badge-blue">Draft</span></td></tr>`).join('')}</tbody></table></div></section>`;
  if (isAdmin) return `${pageHeader(`<button onclick="approveToast('Marks approved and report card data locked')" class="btn btn-success">Approve results ${icon(icons.check,16)}</button>`)}<section class="card p-5"><div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Exam approval queue</h2><p class="text-xs text-slate-500 mt-1">Results waiting for final approval.</p></div><span class="badge badge-yellow">3 pending</span></div><div class="space-y-3">${approvalRow('PT2 Marks','Mathematics • 8A','Mr. Vivek','exams')}${approvalRow('PT2 Marks','English • 8A','Ms. Asha','exams')}${approvalRow('PT2 Marks','Physics • 8A','Dr. Rahul','exams')}</div></section>`;
  return `${pageHeader()}<div class="card p-5 mb-5"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"><div><div class="text-xs text-slate-500 font-bold">EXAM</div><h2 class="heading text-2xl font-extrabold mt-1">Half-Yearly Examination</h2><p class="text-xs text-slate-500 mt-1">Contribution to final grade: 40%</p></div><select class="input md:w-52"><option>Half-Yearly</option><option>PT2</option><option>PT1</option></select></div></div><section class="card p-5"><div class="table-wrap"><table class="app-table"><thead><tr><th>Subject</th><th>Marks</th><th>Max</th><th>%</th><th>Question Paper</th><th>Answer Key</th></tr></thead><tbody>${marks.map(m=>`<tr><td class="font-bold">${m.subject}</td><td>${m.half}</td><td>100</td><td><span class="badge badge-green">${m.half}%</span></td><td><button class="btn btn-soft text-xs">View ${icon(icons.file,14)}</button></td><td><button class="btn btn-soft text-xs">View ${icon(icons.file,14)}</button></td></tr>`).join('')}</tbody></table></div></section><section class="card p-5 mt-5"><h2 class="heading text-xl font-extrabold mb-4">Performance trend</h2><div class="grid grid-cols-1 md:grid-cols-4 gap-4">${marks.map(m=>`<div class="soft-card p-4"><div class="text-xs text-slate-500">${m.subject}</div><div class="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-[#004C99] rounded-full" style="width:${m.half}%"></div></div><div class="mt-2 font-noto font-extrabold text-xl">${m.half}%</div><div class="text-[11px] text-green-600 font-bold">+${m.half-m.pt1} from PT1</div></div>`).join('')}</div></section>`;
}

function notesPage() {
  const isTeacher = state.role === 'teacher';
  const isAdmin = state.role === 'admin';
  const subjects = ['Mathematics','Physics','English','Computer Science'];
  return `${pageHeader(isTeacher ? `<button class="btn btn-primary" onclick="openUploadModal()">${icon(icons.plus,16)} Add chapter PDF</button>` : '')}
  <section class="card p-5"><div class="mb-5"><h2 class="heading text-xl font-extrabold">Notes library</h2><p class="text-xs text-slate-500 mt-1">Each subject has its own chapter library. Students see approved PDFs directly.</p></div>
  <div class="space-y-3">${subjects.map(subject=>{
    const items = notesBySubject[subject] || [];
    return `<details class="subject-accordion"><summary class="flex items-center justify-between gap-3 p-4 cursor-pointer list-none"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-[#004C99]/10 grid place-items-center text-[#004C99]">${icon(icons.notes,18)}</div><div><div class="font-bold text-sm">${subject}</div><div class="text-xs text-slate-500">${items.length} chapters</div></div></div><span class="text-slate-400">${icon(icons.arrow,16)}</span></summary><div class="px-4 pb-4 pt-1 space-y-2">${items.map(n=>`<div class="soft-card p-3 flex items-center justify-between gap-3"><div class="min-w-0"><div class="font-bold text-sm truncate">${n.chapter}</div><div class="text-[11px] text-slate-500">${n.type} • ${n.enabled ? 'Available' : 'Not published'}</div></div>${isTeacher ? `<div class="flex items-center gap-3"><button onclick="openUploadModal('${subject}','${n.chapter.replaceAll("'","\'")}')" class="btn btn-soft text-xs">${icon(icons.file,14)} Replace PDF</button><button onclick="toggleNote(${n.id})" class="note-toggle ${n.enabled?'on':''}" title="${n.enabled?'Disable chapter':'Publish chapter'}"><span></span></button></div>` : isAdmin ? `<div class="flex items-center gap-2"><span class="badge ${n.enabled?'badge-green':'badge-yellow'}">${n.enabled?'Approved':'Pending'}</span><button onclick="approveToast('Note approved')" class="btn btn-success text-xs">Approve</button></div>` : n.enabled ? `<a href="./pdfs/${n.file}" target="_blank" rel="noopener" class="btn btn-soft text-xs">Open PDF ${icon(icons.external,14)}</a>` : `<span class="badge badge-gray">Not published</span>`}</div>`).join('')}</div></details>`;
  }).join('')}</div></section>${isTeacher ? uploadModalMarkup() : ''}`;
}

function announcementsPage() {
  const isTeacher = state.role === 'teacher';
  const isAdmin = state.role === 'admin';
  return `${pageHeader(isTeacher ? `<button class="btn btn-primary" onclick="showAnnouncementEditor()">${icon(icons.plus,16)} Create announcement</button>` : '')}
  ${isAdmin ? `<div class="card p-5 mb-5"><div class="flex items-center justify-between mb-4"><div><h2 class="heading text-xl font-extrabold">Pending approvals</h2><p class="text-xs text-slate-500 mt-1">Review teacher-created announcements before publishing.</p></div><span class="badge badge-yellow">1 pending</span></div><div class="soft-card p-4"><div class="flex items-start justify-between gap-4"><div><div class="badge badge-blue">Cross-school</div><h3 class="font-bold mt-2">Inter-School Science Exhibition</h3><p class="text-xs text-slate-500 mt-1">Created by Ms. Asha, Mr. Vivek and Dr. Rahul</p></div><div class="flex gap-2"><button class="btn btn-outline text-xs">Reject</button><button onclick="approveToast('Announcement published to app + parent channels')" class="btn btn-success text-xs">Approve & publish</button></div></div></div></div>` : ''}
  <section class="card p-5"><div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Announcements</h2><p class="text-xs text-slate-500 mt-1">The school's verified communication stream.</p></div><span class="badge badge-blue">${announcements.length} published</span></div>${announcements.map(a=>`<div class="soft-card p-4 mb-3"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"><div><div class="flex items-center gap-2"><span class="badge badge-green">${a.status}</span><span class="text-xs text-slate-500">${a.date}</span></div><h3 class="font-bold mt-2">${a.title}</h3><p class="text-xs text-slate-500 mt-1">Audience: ${a.audience}</p></div><button class="btn btn-soft text-xs">Open ${icon(icons.arrow,14)}</button></div></div>`).join('')}</section>`;
}

function feesPage() {
  const rows = [['Term 1 Tuition','₹18,500','Paid'],['Term 2 Tuition','₹18,500','Due 10 Sep'],['Transport','₹6,000','Paid'],['Activity Fee','₹2,000','Paid']];
  if (state.role === 'teacher') {
    return `${pageHeader()}<section class="card p-8 text-center"><div class="w-14 h-14 rounded-2xl bg-[#004C99]/10 text-[#004C99] mx-auto grid place-items-center">${icon(icons.fees,24)}</div><h2 class="heading text-xl font-extrabold mt-4">Fees are not part of the teacher workspace</h2><p class="text-sm text-slate-500 mt-2 max-w-md mx-auto">Teacher accounts do not have access to student fee records.</p><button onclick="navigate('dashboard')" class="btn btn-primary mt-5">Back to dashboard</button></section>`;
  }
  if (state.role === 'admin') {
    const students = teacherStudents.map((s,i)=>({name:s,class:`${7 + (i%3)+1}`,section:['A','B','C'][i%3],due:[1,4,0,2,0,3,5,0,2,0][i%10],amount:[18500,32000,0,6000,18500][i%5]}));
    return `${pageHeader(`<button onclick="showToast('Fee export prepared for demo')" class="btn btn-primary">${icon(icons.file,16)} Export report</button>`)}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">${metricCard('Students','35','Demo fee records','users','All classes')}${metricCard('With dues','16','Require follow-up','warning','Highlighted below')}${metricCard('Collected','₹8.42L','This academic year','check','Mock demo total')}</div>
      <section class="card p-5">
        <div class="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 mb-5">
          <div><h2 class="heading text-xl font-extrabold">Student fee status</h2><p class="text-xs text-slate-500 mt-1">Green = clear. Red = outstanding dues.</p></div>
          <div class="grid grid-cols-2 gap-3 md:w-[420px]">
            <label class="text-xs font-bold text-slate-500">CLASS<select id="fee-class-filter" onchange="renderFeeTable()" class="input mt-1"><option value="all">All classes</option>${[8,9,10].map(c=>`<option value="${c}">Class ${c}</option>`).join('')}</select></label>
            <label class="text-xs font-bold text-slate-500">SECTION<select id="fee-section-filter" onchange="renderFeeTable()" class="input mt-1"><option value="all">All sections</option>${['A','B','C'].map(c=>`<option value="${c}">Section ${c}</option>`).join('')}</select></label>
          </div>
        </div>
        <div id="fee-table-root"></div>
      </section>`;
  }
  return `${pageHeader()}<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">${metricCard('Total due','₹18,500','Next payment','fees','Due 10 September')}${metricCard('Paid this year','₹26,500','Across 3 invoices','check','Up to date')}${metricCard('Receipt status','100%','Records available','file','Download anytime')}</div><section class="card p-5"><h2 class="heading text-xl font-extrabold mb-4">Fee summary</h2><div class="table-wrap"><table class="app-table"><thead><tr><th>Fee</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows.map(r=>`<tr><td class="font-bold">${r[0]}</td><td>${r[1]}</td><td><span class="badge ${r[2]==='Paid'?'badge-green':'badge-yellow'}">${r[2]}</span></td><td><button class="btn btn-soft text-xs" onclick="showToast('Fee receipt preview opened')">${r[2]==='Paid'?'View receipt':'View details'}</button></td></tr>`).join('')}</tbody></table></div></section>`;
}

function foodPage() {
  const menu = [
    {day:'Monday', breakfast:'Idli • Sambar • Banana', lunch:'Veg pulao • Raita • Cucumber salad'},
    {day:'Tuesday', breakfast:'Poha • Boiled egg / banana', lunch:'Rajma • Jeera rice • Chapati • Curd'},
    {day:'Wednesday', breakfast:'Upma • Coconut chutney • Fruit', lunch:'Paneer curry • Chapati • Dal • Salad'},
    {day:'Thursday', breakfast:'Masala dosa • Sambar • Fruit', lunch:'Lemon rice • Dal • Curd • Beans poriyal'},
    {day:'Friday', breakfast:'Veg sandwich • Milk • Fruit', lunch:'Veg noodles • Manchurian • Sweet corn'},
  ];
  return `${pageHeader()}<section class="card p-5"><div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">This week's food menu</h2><p class="text-xs text-slate-500 mt-1">August 17–21, 2026</p></div><span class="badge badge-green">Updated this week</span></div>
    <div class="table-wrap"><table class="app-table"><thead><tr><th>Day</th><th>Breakfast</th><th>Lunch</th></tr></thead><tbody>${menu.map((m,i)=>`<tr class="${i===0?'bg-[#004C99]/5':''}"><td class="font-bold">${m.day}${i===0?'<div class="text-[10px] text-[#004C99] mt-1">Today</div>':''}</td><td><div class="flex items-start gap-2"><span class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 grid place-items-center shrink-0">${icon(icons.food,15)}</span><span>${m.breakfast}</span></div></td><td><div class="flex items-start gap-2"><span class="w-8 h-8 rounded-lg bg-[#004C99]/10 text-[#004C99] grid place-items-center shrink-0">${icon(icons.food,15)}</span><span>${m.lunch}</span></div></td></tr>`).join('')}</tbody></table></div>
  </section>`;
}

function lostFoundPage() {
  const items = [['Black water bottle','Found near library • 15 Aug','Blue cap'],['Geometry box','Found in 8A • 14 Aug','Name label: S. Rao'],['Grey hoodie','Found near auditorium • 12 Aug','Size M']];
  return `${pageHeader(`<button class="btn btn-primary" onclick="showToast('Lost & found report form opened')">${icon(icons.plus,16)} Report item</button>`)}<section class="card p-5"><div class="grid grid-cols-1 md:grid-cols-3 gap-3">${items.map(x=>`<div class="soft-card p-4"><div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 grid place-items-center">${icon(icons.lost,18)}</div><h3 class="font-bold mt-3">${x[0]}</h3><p class="text-xs text-slate-500 mt-1">${x[1]}</p><div class="text-[11px] font-bold text-slate-600 mt-3">${x[2]}</div><button class="btn btn-soft text-xs mt-4 w-full" onclick="showToast('Claim request sent to the school office')">Claim item</button></div>`).join('')}</div></section>`;
}

function personalNotesPage() {
  return `${pageHeader(`<button class="btn btn-primary" onclick="showToast('New personal note created')">${icon(icons.plus,16)} New note</button>`)}<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"><div class="card p-5"><div class="flex items-center justify-between"><span class="badge badge-blue">Study</span><span class="text-xs text-slate-400">Today</span></div><h3 class="font-bold mt-4">Ask about math doubt</h3><p class="text-sm text-slate-500 mt-2">Remember to ask Mr. Vivek about question 7 before Friday.</p></div><div class="card p-5"><div class="flex items-center justify-between"><span class="badge badge-green">Reminder</span><span class="text-xs text-slate-400">Yesterday</span></div><h3 class="font-bold mt-4">Science exhibition</h3><p class="text-sm text-slate-500 mt-2">Bring the prototype model on 30 August.</p></div><div class="card p-5 border-dashed"><button onclick="showToast('New personal note created')" class="w-full h-full min-h-36 grid place-items-center text-slate-400 hover:text-[#004C99]"><div class="text-center">${icon(icons.plus,24)}<div class="font-bold text-sm mt-2">Create another note</div></div></button></div></div>`;
}

function busTrackingPage() {
  if (state.role !== 'student') { return `${pageHeader()}<section class="card p-8 text-center"><div class="w-14 h-14 rounded-2xl bg-[#004C99]/10 text-[#004C99] mx-auto grid place-items-center">${icon(icons.bus,24)}</div><h2 class="heading text-xl font-extrabold mt-4">Bus tracking is available to Student / Parent accounts</h2><p class="text-sm text-slate-500 mt-2 max-w-md mx-auto">Teacher and administrator accounts do not have access to student transport location data.</p></section>`; }
  return `${pageHeader(`<span class="badge badge-green">${icon(icons.bus,13)} Live • Updated 12 sec ago</span>`)}
    <div class="grid grid-cols-1 xl:grid-cols-[1.35fr_.65fr] gap-5">
      <section class="card p-5">
        <div class="flex items-center justify-between mb-4"><div><h2 class="heading text-xl font-extrabold">Bus 18A</h2><p class="text-xs text-slate-500 mt-1">Route: Gachibowli → Vednix Campus</p></div><span class="badge badge-blue">On route</span></div>
        <div class="bus-map">
          <div class="route-line"></div><div class="route-stop stop-1"><span></span><label>Gachibowli</label></div><div class="route-stop stop-2 current"><span>${icon(icons.bus,13)}</span><label>Bus 18A<br><small>2.4 km away</small></label></div><div class="route-stop stop-3"><span></span><label>Botanical Garden</label></div><div class="route-stop stop-4"><span></span><label>Campus Gate</label></div>
          <div class="map-road road-a"></div><div class="map-road road-b"></div><div class="map-road road-c"></div>
        </div>
      </section>
      <section class="card p-5">
        <h2 class="heading text-xl font-extrabold mb-4">Trip details</h2>
        <div class="soft-card p-4 mb-3"><div class="text-xs text-slate-500">Expected arrival</div><div class="metric-number text-3xl font-extrabold mt-1">8 min</div><div class="text-xs text-green-600 font-bold mt-1">On schedule</div></div>
        <div class="space-y-3 text-sm">${[['Driver','Ramesh Kumar'],['Bus','18A • TS09 XX 4218'],['Current speed','28 km/h'],['Next stop','Botanical Garden']].map(x=>`<div class="flex items-center justify-between gap-3 py-2 border-b border-slate-100 last:border-0"><span class="text-slate-500">${x[0]}</span><span class="font-bold">${x[1]}</span></div>`).join('')}</div>
      </section>
    </div>`;
}

function uploadModalMarkup() {
  return `<div id="upload-modal" class="modal-backdrop" onclick="closeUploadModal(event)"><div class="modal-card" onclick="event.stopPropagation()"><div class="flex items-center justify-between mb-5"><div><h2 class="heading text-xl font-extrabold">Add chapter PDF</h2><p class="text-xs text-slate-500 mt-1">Upload one reusable chapter note for the selected subject.</p></div><button onclick="closeUploadModal()" class="btn btn-soft px-2.5">${icon(icons.close,18)}</button></div><form onsubmit="submitPdfUpload(event)" class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-3"><label class="text-xs font-bold text-slate-500">SUBJECT<select id="upload-subject" class="input mt-1"><option>Mathematics</option><option>Physics</option><option>English</option><option>Computer Science</option></select></label><label class="text-xs font-bold text-slate-500">CLASS<select id="upload-class" class="input mt-1"><option>8</option><option>9</option><option>10</option></select></label></div><label class="text-xs font-bold text-slate-500 block">CHAPTER TITLE<input id="upload-title" class="input mt-1" placeholder="e.g. Chapter 4 • Algebra" required></label><label class="text-xs font-bold text-slate-500 block">PDF FILE<input id="upload-file" type="file" accept="application/pdf,.pdf" class="input mt-1 p-2" required></label><div id="upload-file-name" class="text-xs text-slate-500">PDF only • recommended under 10 MB for the demo</div><div class="flex justify-end gap-2 pt-2"><button type="button" onclick="closeUploadModal()" class="btn btn-outline">Cancel</button><button type="submit" class="btn btn-primary">Submit chapter ${icon(icons.send,15)}</button></div></form></div></div>`;
}

function openUploadModal(subject='', chapter='') {
  const modal=document.getElementById('upload-modal');
  if(!modal){ document.body.insertAdjacentHTML('beforeend', uploadModalMarkup()); }
  const m=document.getElementById('upload-modal'); m.classList.add('open');
  if(subject) document.getElementById('upload-subject').value=subject;
  if(chapter) document.getElementById('upload-title').value=chapter;
}
function closeUploadModal(e) { if(e && e.target && e.target.id!=='upload-modal') return; document.getElementById('upload-modal')?.classList.remove('open'); }
function submitPdfUpload(e) {
  e.preventDefault();
  const file=document.getElementById('upload-file')?.files?.[0];
  if(!file || file.type!=='application/pdf'){ showToast('Please select a PDF file.'); return; }
  showToast(`${document.getElementById('upload-title').value} submitted for admin approval.`);
  closeUploadModal();
}

function renderFeeTable() {
  const root=document.getElementById('fee-table-root');
  if(!root) return;
  const classValue=document.getElementById('fee-class-filter')?.value || 'all';
  const sectionValue=document.getElementById('fee-section-filter')?.value || 'all';
  const students=teacherStudents.map((name,i)=>({name,class:`${8+(i%3)}`,section:['A','B','C'][i%3],due:[false,true,false,true,false,false,true,false,true,false][i%10],amount:[0,18500,0,6000,0,32000,2500,0,18500,0][i%10]})).filter(s=>(classValue==='all'||s.class===classValue)&&(sectionValue==='all'||s.section===sectionValue));
  root.innerHTML=`<div class="table-wrap"><table class="app-table"><thead><tr><th>Student</th><th>Class</th><th>Section</th><th>Outstanding</th><th>Status</th><th>Action</th></tr></thead><tbody>${students.map(s=>`<tr><td class="font-bold ${s.due?'text-red-600':'text-green-700'}">${s.name}</td><td>${s.class}</td><td>${s.section}</td><td>${s.due?`₹${s.amount.toLocaleString('en-IN')}`:'₹0'}</td><td><span class="badge ${s.due?'badge-red':'badge-green'}">${s.due?'Due':'Clear'}</span></td><td><button class="btn btn-soft text-xs" onclick="showToast('${s.due?'Reminder queued for':'Fee record opened for'} ${s.name}')">${s.due?'Remind':'View'}</button></td></tr>`).join('')}</tbody></table></div><div class="mt-4 text-xs text-slate-500">Showing ${students.length} of 35 students.</div>`;
}

function metricCard(title, value, subtitle, ico, footer) {
  return `<div class="card p-5"><div class="flex items-start justify-between"><div><div class="text-xs text-slate-500 font-bold uppercase tracking-[.12em]">${title}</div><div class="metric-number text-3xl font-extrabold mt-2">${value}</div><div class="text-xs text-slate-500 mt-1">${subtitle}</div></div><div class="w-10 h-10 rounded-xl bg-[#004C99]/10 text-[#004C99] grid place-items-center">${icon(ico,18)}</div></div><div class="mt-4 text-[11px] font-bold text-slate-500">${footer}</div></div>`;
}
function homeworkRow(x) {
  return `<div class="soft-card p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><div class="flex items-center gap-2"><span class="badge badge-blue">${x.subject}</span><span class="text-[11px] text-slate-400">${x.teacher}</span></div><div class="font-bold text-sm mt-2">${x.title}</div></div><span class="badge badge-yellow">${x.status}</span></div>`;
}
function upcomingItem(date, title, day) { return `<div class="flex items-center gap-3"><div class="w-14 h-14 rounded-xl bg-skybrand/15 grid place-items-center text-center"><div class="font-noto font-extrabold text-lg leading-none">${date.split(' ')[0]}</div><div class="text-[9px] font-bold uppercase text-slate-500">${date.split(' ')[1]}</div></div><div><div class="font-bold text-sm">${title}</div><div class="text-xs text-slate-500 mt-1">${day}</div></div></div>`; }
function actionRow(title, sub, button, page) { return `<div class="soft-card p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><div class="font-bold text-sm">${title}</div><div class="text-xs text-slate-500 mt-1">${sub}</div></div><button onclick="navigate('${page}')" class="btn btn-soft text-xs">${button} ${icon(icons.arrow,14)}</button></div>`; }
function approvalRow(type, item, by, page) { return `<div class="soft-card p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><div class="text-[11px] font-bold uppercase tracking-[.1em] text-slate-400">${type}</div><div class="font-bold text-sm mt-1">${item}</div><div class="text-xs text-slate-500 mt-1">Submitted by ${by}</div></div><button onclick="navigate('${page}')" class="btn btn-soft text-xs">Review ${icon(icons.arrow,14)}</button></div>`; }
function attendanceBadge(pct) { return pct < 65 ? `<span class="badge badge-red">${pct}%</span>` : pct < 75 ? `<span class="badge badge-yellow">${pct}%</span>` : `<span class="badge badge-green">${pct}%</span>`; }
function formatSelectedDate() { return new Date(state.selectedDate + 'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'}); }

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  localStorage.setItem('schoolos-dark', String(state.darkMode));
  document.documentElement.classList.toggle('dark', state.darkMode);
  render();
}
function toggleNote(id) {
  for (const list of Object.values(notesBySubject)) {
    const item=list.find(n=>n.id===id);
    if(item){ item.enabled=!item.enabled; break; }
  }
  renderPage();
}
function openMockPdf(e, title) {
  e.preventDefault();
  showToast(`${title} PDF preview opened. Add the real PDF in /pdfs/ when ready.`);
}

function renderAI() {
  const panel = document.getElementById('ai-panel');
  if (!panel) return;
  panel.innerHTML = `<div class="bg-black text-white px-4 py-4 flex items-center justify-between"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-[#004C99] grid place-items-center">${icon(icons.bot,16)}</div><div><div class="font-noto font-extrabold">SAGE</div><div class="text-[10px] opacity-70">School Intelligence</div></div></div><button onclick="toggleAI()" class="text-white/80">${icon(icons.close,18)}</button></div><div id="ai-messages" class="flex-1 p-4 overflow-auto space-y-3 bg-slate-50 text-ink"><div class="soft-card p-3 text-sm"><div class="font-bold mb-1">SAGE</div><div>Ask me about your attendance, homework, exams, notes or school calendar.</div></div><div class="flex flex-wrap gap-2">${['What is my attendance?','What is due today?','Is tomorrow a holiday?','Did my math marks improve?'].map(q=>`<button onclick="askAI('${q.replaceAll("'","\\'")}')" class="btn btn-outline text-xs">${q}</button>`).join('')}</div></div><form onsubmit="submitAI(event)" class="p-3 border-t border-slate-100 bg-white flex gap-2"><input id="ai-input" class="input !rounded-xl" placeholder="Ask SAGE..." /><button class="btn btn-dark px-3">${icon(icons.send,16)}</button></form>`;
  panel.classList.toggle('open', state.aiOpen);
  initIcons();
}

function addAIMessage(text, user=false) {
  const box = document.getElementById('ai-messages');
  if (!box) return;
  box.insertAdjacentHTML('beforeend', `<div class="${user?'bg-black text-white':'soft-card'} p-3 text-sm ${user?'rounded-2xl rounded-br-md ml-10':'mr-10'}">${user?text:`<div class="font-bold mb-1">SAGE</div>${text}`}</div>`);
  box.scrollTop = box.scrollHeight;
}
function answerAI(q) {
  const s = q.toLowerCase();
  if (s.includes('attendance')) return 'Your current attendance is <strong>94.2%</strong>, with 154 present days out of 164 recorded school days.';
  if (s.includes('due') || s.includes('homework')) return 'You have <strong>3 homework items</strong> for today: Mathematics, English and Physics.';
  if (s.includes('tomorrow') || s.includes('holiday')) return 'Tomorrow, <strong>18 August</strong>, is a normal school day. No holiday is scheduled.';
  if (s.includes('math') || s.includes('improve')) return 'Yes. Your Mathematics score increased from <strong>74% in PT1</strong> to <strong>82% in PT2</strong>, an improvement of 8 percentage points.';
  return 'I can answer questions about your school data. Try asking about attendance, homework, exams or the academic calendar.';
}
function askAI(q) { addAIMessage(q,true); setTimeout(()=>{ addAIMessage(answerAI(q)); initIcons(); },250); }
function submitAI(e) { e.preventDefault(); const input=document.getElementById('ai-input'); const q=input.value.trim(); if(!q) return; input.value=''; askAI(q); }
function toggleAI() { state.aiOpen=!state.aiOpen; renderAI(); }
function navigate(page) { state.activePage=page; if (window.innerWidth < 1050) document.getElementById('sidebar')?.classList.remove('open'); render(); }
function changeRole(role) { state.role=role; state.activePage='dashboard'; render(); }
function toggleSidebar() { document.getElementById('sidebar')?.classList.toggle('open'); }
function selectDate(date) { state.selectedDate=date; renderPage(); initIcons(); }
function showToast(message) { alert(message); }
function approveToast(subject) { alert(`${subject} approved and published to the app. Parent notifications are queued.`); }
function submitToast(message) { alert(message); }
function showHomeworkEditor() { alert('Homework editor modal coming next. The teacher role is already scoped to English • Class 8A.'); }
function showAnnouncementEditor() { alert('Announcement composer coming next.'); }

window.navigate=navigate; window.changeRole=changeRole; window.toggleSidebar=toggleSidebar; window.toggleAI=toggleAI; window.selectDate=selectDate; window.askAI=askAI; window.submitAI=submitAI; window.approveToast=approveToast; window.submitToast=submitToast; window.showToast=showToast; window.showHomeworkEditor=showHomeworkEditor; window.showAnnouncementEditor=showAnnouncementEditor; window.toggleDarkMode=toggleDarkMode; window.toggleNote=toggleNote; window.openMockPdf=openMockPdf;

document.documentElement.classList.toggle('dark', state.darkMode);
render();
