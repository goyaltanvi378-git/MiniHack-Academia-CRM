/**
 * Academia Sales CRM - Advanced Application Engine
 * Implements state, advanced SVGs, 7-stage Kanban, Lead Details sidebar,
 * AI Copilot, AI Content Generator, Calendar, and AI Executive Insights Center.
 */

// --- 1. In-Memory Database (Demo Sandbox Data) ---
const CRM_STATE = {
  theme: localStorage.getItem('academia_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  activeModule: 'dashboard',
  activeLeadId: null, // For lead detail panel
  activeDetailTab: 'notes', // notes, docs, meetings
  leads: [
    {
      id: 'lead-1',
      name: 'Massachusetts Institute of Technology (MIT)',
      city: 'Cambridge',
      state: 'Massachusetts',
      institutionType: 'Private Research University',
      tier: 'Tier-1 Ivy/Global',
      stage: 'Negotiation',
      estValue: 180000,
      studentIntake: 4600,
      aiScore: 94,
      engagementScore: 18,
      priority: 'High',
      winProbability: 85,
      programInterest: 'Quantum Computing, AI Research',
      leadSource: 'Direct Inbound',
      assignedSalesPerson: 'Rahul Sharma',
      nextFollowUp: '2026-06-28',
      nextAction: 'Finalize MOU proposal for Quantum Computing Co-Lab',
      contact: 'Dr. Evelyn Vance',
      role: 'Dean of Engineering',
      email: 'e.vance@mit.edu',
      phone: '+1 (617) 555-0143',
      source: 'Direct Inbound',
      lastActivityDate: '2026-06-23',
      notes: [
        { date: '2026-06-15', text: 'Initial call with Dean Vance. Highly interested in Quantum Lab certification.' },
        { date: '2026-06-20', text: 'Sent MOU draft agreement for review by MIT legal cell.' }
      ],
      docs: ['Quantum_Lab_Syllabus.pdf', 'MIT_MOU_Draft_v2.docx'],
      history: [
        { stage: 'New Lead', date: '2026-06-01' },
        { stage: 'Contacted', date: '2026-06-05' },
        { stage: 'Meeting Scheduled', date: '2026-06-10' },
        { stage: 'Proposal Sent', date: '2026-06-15' },
        { stage: 'Negotiation', date: '2026-06-20' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Tier-1 Ivy League status increases partner value.' },
        { type: 'pos', text: 'Previous engagement history is highly positive.' },
        { type: 'pos', text: 'High Dean response rate within 24 hours.' },
        { type: 'neg', text: 'Legal team review taking longer than expected.' }
      ]
    },
    {
      id: 'lead-2',
      name: 'Stanford University',
      city: 'Stanford',
      state: 'California',
      institutionType: 'Private Research University',
      tier: 'Tier-1 Ivy/Global',
      stage: 'Discovery',
      estValue: 220000,
      studentIntake: 7200,
      aiScore: 89,
      engagementScore: 14,
      priority: 'High',
      winProbability: 40,
      programInterest: 'Cloud Computing, DevOps',
      leadSource: 'Partner Referral',
      assignedSalesPerson: 'Priya Kapoor',
      nextFollowUp: '2026-07-02',
      nextAction: 'Schedule introductory presentation on Cloud computing initiatives',
      contact: 'Prof. Marcus Chen',
      role: 'Director of Partnerships',
      email: 'm.chen@stanford.edu',
      phone: '+1 (650) 555-0298',
      source: 'Partner Referral',
      lastActivityDate: '2026-06-24',
      notes: [
        { date: '2026-06-10', text: 'Referred by alumni network. Reached out to Prof. Chen.' },
        { date: '2026-06-24', text: 'Prof. Chen replied; looking for curriculum structures.' }
      ],
      docs: ['Cloud_Prospectus_2026.pdf'],
      history: [
        { stage: 'New Lead', date: '2026-06-10' },
        { stage: 'Contacted', date: '2026-06-24' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Tier-1 Global brand value is maximum.' },
        { type: 'pos', text: 'Large student body interested in Cloud certifications.' },
        { type: 'neg', text: 'Stalled in Discovery stage for 14 days.' }
      ]
    },
    {
      id: 'lead-3',
      name: 'Indian Institute of Technology (IIT) Delhi',
      city: 'New Delhi',
      state: 'Delhi',
      institutionType: 'Public Research University',
      tier: 'Tier-1 National',
      stage: 'Proposal Sent',
      estValue: 95000,
      studentIntake: 9800,
      aiScore: 78,
      engagementScore: 12,
      priority: 'Medium',
      winProbability: 65,
      programInterest: 'PG Diploma, Data Science',
      leadSource: 'Cold Outreach',
      assignedSalesPerson: 'Rahul Sharma',
      nextFollowUp: '2026-06-27',
      nextAction: 'Revise curriculum pricing table for PG Diploma workshops',
      contact: 'Prof. Alok Gupta',
      role: 'HOD, Computer Science',
      email: 'alokg@iitd.ac.in',
      phone: '+91 11 2659-1000',
      source: 'Cold Outreach',
      lastActivityDate: '2026-06-18',
      notes: [
        { date: '2026-06-05', text: 'Connected on LinkedIn. Sent PG Diploma proposal.' },
        { date: '2026-06-18', text: 'Received request for customized fee structure.' }
      ],
      docs: ['IITD_PG_Proposal.pdf'],
      history: [
        { stage: 'New Lead', date: '2026-06-05' },
        { stage: 'Contacted', date: '2026-06-08' },
        { stage: 'Meeting Scheduled', date: '2026-06-12' },
        { stage: 'Proposal Sent', date: '2026-06-18' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Top-tier National university with high credibility.' },
        { type: 'neg', text: 'Fee model feedback is price-sensitive.' },
        { type: 'neg', text: 'No follow-up action logged in past 7 days.' }
      ]
    },
    {
      id: 'lead-4',
      name: 'University of Toronto',
      city: 'Toronto',
      state: 'Ontario',
      institutionType: 'Public Research University',
      tier: 'Tier-1 Ivy/Global',
      stage: 'Closed Won',
      estValue: 240000,
      studentIntake: 12000,
      aiScore: 98,
      engagementScore: 20,
      priority: 'High',
      winProbability: 100,
      programInterest: 'Cybersecurity, Blockchain',
      leadSource: 'Inbound Web',
      assignedSalesPerson: 'Priya Kapoor',
      nextFollowUp: '2026-07-05',
      nextAction: 'Initiate batch onboarding for Cybersecurity certification',
      contact: 'Dr. Sarah Jenkins',
      role: 'VP, Academic Relations',
      email: 's.jenkins@utoronto.ca',
      phone: '+1 (416) 555-8941',
      source: 'Inbound Web',
      lastActivityDate: '2026-06-25',
      notes: [
        { date: '2026-05-20', text: 'Agreement signed. Launch scheduled for July.' }
      ],
      docs: ['UofT_SaaS_Agreement_Executed.pdf'],
      history: [
        { stage: 'New Lead', date: '2026-05-01' },
        { stage: 'Contacted', date: '2026-05-05' },
        { stage: 'Meeting Scheduled', date: '2026-05-10' },
        { stage: 'Proposal Sent', date: '2026-05-15' },
        { stage: 'Negotiation', date: '2026-05-20' },
        { stage: 'Closed Won', date: '2026-05-25' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Deal closed successfully. Integration active.' }
      ]
    },
    {
      id: 'lead-5',
      name: 'Indian Institute of Technology (IIT) Bombay',
      city: 'Mumbai',
      state: 'Maharashtra',
      institutionType: 'Public Research University',
      tier: 'Tier-1 National',
      stage: 'Meeting Scheduled',
      estValue: 110000,
      studentIntake: 11200,
      aiScore: 84,
      engagementScore: 15,
      priority: 'High',
      winProbability: 60,
      programInterest: 'Embedded Systems, IoT',
      leadSource: 'Direct Inbound',
      assignedSalesPerson: 'Amit Desai',
      nextFollowUp: '2026-06-29',
      nextAction: 'Prepare pitch deck for Embedded Systems research co-lab',
      contact: 'Dr. Ramesh Kelkar',
      role: 'Dean, R&D',
      email: 'kelkar@iitb.ac.in',
      phone: '+91 22 2572-2545',
      source: 'Direct Inbound',
      lastActivityDate: '2026-06-24',
      notes: [
        { date: '2026-06-12', text: 'Inquiry received for Industry-academia research alliance.' },
        { date: '2026-06-24', text: 'Scheduled upcoming web presentation for June 29th.' }
      ],
      docs: ['Research_CoLab_Outline.pdf'],
      history: [
        { stage: 'New Lead', date: '2026-06-12' },
        { stage: 'Contacted', date: '2026-06-15' },
        { stage: 'Meeting Scheduled', date: '2026-06-24' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'High student strength (11k+).' },
        { type: 'pos', text: 'Strong research budget allocations.' },
        { type: 'neg', text: 'Action required: Prepare slides for upcoming deck.' }
      ]
    },
    {
      id: 'lead-6',
      name: 'Indian Institute of Technology (IIT) Madras',
      city: 'Chennai',
      state: 'Tamil Nadu',
      institutionType: 'Public Research University',
      tier: 'Tier-1 National',
      stage: 'Negotiation',
      estValue: 130000,
      studentIntake: 10500,
      aiScore: 92,
      engagementScore: 17,
      priority: 'High',
      winProbability: 80,
      programInterest: 'Machine Learning, Placement Training',
      leadSource: 'Partner Referral',
      assignedSalesPerson: 'Rahul Sharma',
      nextFollowUp: '2026-06-30',
      nextAction: 'Incorporate placement guarantee clauses into final draft agreement',
      contact: 'Prof. Sandeep Kumar',
      role: 'Director of Placement Cell',
      email: 'skumar@iitm.ac.in',
      phone: '+91 44 2257-8000',
      source: 'Partner Referral',
      lastActivityDate: '2026-06-22',
      notes: [
        { date: '2026-05-18', text: 'Met at national education summit. Discussed workshops.' },
        { date: '2026-06-22', text: 'Negotiating placement terms.' }
      ],
      docs: ['Placement_Addendum.pdf'],
      history: [
        { stage: 'New Lead', date: '2026-05-18' },
        { stage: 'Contacted', date: '2026-05-22' },
        { stage: 'Meeting Scheduled', date: '2026-06-01' },
        { stage: 'Proposal Sent', date: '2026-06-10' },
        { stage: 'Negotiation', date: '2026-06-22' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Top NIRF ranking institution.' },
        { type: 'pos', text: 'High alignment on training syllabus requirements.' },
        { type: 'neg', text: 'Requires manual alignment on placement terms.' }
      ]
    },
    {
      id: 'lead-7',
      name: 'National University of Singapore (NUS)',
      city: 'Singapore',
      state: 'Singapore',
      institutionType: 'Public Research University',
      tier: 'Tier-1 Ivy/Global',
      stage: 'Contacted',
      estValue: 250000,
      studentIntake: 14000,
      aiScore: 91,
      engagementScore: 16,
      priority: 'High',
      winProbability: 45,
      programInterest: 'Full-Stack Development, Cloud',
      leadSource: 'Cold Outreach',
      assignedSalesPerson: 'Priya Kapoor',
      nextFollowUp: '2026-07-01',
      nextAction: 'Follow up on introductory email and share course list',
      contact: 'Dr. Lim Wei',
      role: 'Director of Global Initiatives',
      email: 'lim.wei@nus.edu.sg',
      phone: '+65 6516 6666',
      source: 'Cold Outreach',
      lastActivityDate: '2026-06-10',
      notes: [
        { date: '2026-06-10', text: 'Cold outreach email sent. Awaiting feedback.' }
      ],
      docs: [],
      history: [
        { stage: 'New Lead', date: '2026-06-08' },
        { stage: 'Contacted', date: '2026-06-10' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'Premium Global ranking increases target value.' },
        { type: 'neg', text: 'Response pending for more than 14 days.' }
      ]
    },
    {
      id: 'lead-8',
      name: 'NIT Trichy',
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu',
      institutionType: 'Public Engineering Institute',
      tier: 'Tier-2 Regional',
      stage: 'New Lead',
      estValue: 50000,
      studentIntake: 5500,
      aiScore: 68,
      engagementScore: 8,
      priority: 'Medium',
      winProbability: 25,
      programInterest: 'Student Workshops, Coding',
      leadSource: 'Inbound Web',
      assignedSalesPerson: 'Amit Desai',
      nextFollowUp: '2026-07-04',
      nextAction: 'Identify key placement coordinators and establish contact',
      contact: 'Office of Registrar',
      role: 'Administrative Coordinator',
      email: 'registrar@nitt.edu',
      phone: '+91 431 2503000',
      source: 'Inbound Web',
      lastActivityDate: '2026-06-25',
      notes: [
        { date: '2026-06-25', text: 'Inbound query logged regarding student workshops.' }
      ],
      docs: [],
      history: [
        { stage: 'New Lead', date: '2026-06-25' }
      ],
      aiExplanation: [
        { type: 'pos', text: 'High local engineering tier reputation.' },
        { type: 'neg', text: 'Requires identification of academic champion.' }
      ]
    }
  ],
  meetings: [
    { id: 'm-1', institution: 'Massachusetts Institute of Technology (MIT)', agenda: 'MOU Final Review - Quantum Computing', date: '2026-06-28', time: '10:00', platform: 'Zoom Meeting' },
    { id: 'm-2', institution: 'Stanford University', agenda: 'Cloud Certification Intro', date: '2026-07-02', time: '14:30', platform: 'Google Meet' },
    { id: 'm-3', institution: 'Indian Institute of Technology (IIT) Delhi', agenda: 'PG Diploma Workshop Alignments', date: '2026-06-26', time: '16:00', platform: 'Google Meet' },
    { id: 'm-4', institution: 'Indian Institute of Technology (IIT) Bombay', agenda: 'Embedded Systems Co-Lab presentation', date: '2026-06-29', time: '11:00', platform: 'In-Person (Campus)' }
  ],
  followUps: [
    { id: 'f-1', institution: 'Massachusetts Institute of Technology (MIT)', task: 'Send finalized draft of the lab allocation agreement', deadline: '2026-06-26', priority: 'High', completed: false },
    { id: 'f-2', institution: 'National University of Singapore (NUS)', task: 'Resend partnership prospectus follow-up email', deadline: '2026-06-29', priority: 'High', completed: false },
    { id: 'f-3', institution: 'NIT Trichy', task: 'Reach out to Placement Coordinator', deadline: '2026-07-04', priority: 'Medium', completed: false },
    { id: 'f-4', institution: 'Indian Institute of Technology (IIT) Delhi', task: 'Revise curriculum pricing prospectus', deadline: '2026-06-27', priority: 'Medium', completed: false }
  ],
  notifications: [
    { id: 'n-1', title: 'Stanford Response Logged', message: 'Director Marcus Chen requested prospectus slide deck.', time: '12 mins ago', type: 'info' },
    { id: 'n-2', title: 'Action Overdue Warning', message: 'No follow-up logged for IIT Delhi in past 7 days.', time: '3 hours ago', type: 'warning' }
  ],
  aiChatHistory: [
    { role: 'assistant', text: "Hello Rahul! I'm your Sales Copilot. Ask me anything about your university pipeline or to generate outreach resources." }
  ]
};

// --- 2. Application Init Lifecycle ---
document.addEventListener('DOMContentLoaded', () => {
  // Hide splash loading screen after 1.8 seconds (Demo WOW effect)
  setTimeout(() => {
    const splash = document.getElementById('app-loading-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.style.display = 'none', 600);
    }
  }, 1800);

  initApp();
});

function initApp() {
  document.documentElement.setAttribute('data-theme', CRM_STATE.theme);
  updateThemeIcon();
  
  loadLeadsFromStorage();
  
  renderModule(CRM_STATE.activeModule);
  
  setupNavigation();
  setupUIInteractions();
  setupQuickActions();
  setupForms();
  setupSearch();
  setupAIChat();
  
  populateModalDropdowns();
  updateNotificationBadge();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (CRM_STATE.theme === 'light') {
    btn.innerHTML = `<svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    btn.innerHTML = `<svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

function populateModalDropdowns() {
  const meetSelect = document.getElementById('meet-institution');
  const followSelect = document.getElementById('follow-institution');
  
  const optionsHTML = CRM_STATE.leads
    .map(l => `<option value="${l.name}">${l.name}</option>`)
    .join('');
    
  if (meetSelect) meetSelect.innerHTML = optionsHTML;
  if (followSelect) followSelect.innerHTML = optionsHTML;
}

function updateNotificationBadge() {
  const badge = document.getElementById('notification-count');
  if (badge) {
    const unread = CRM_STATE.notifications.length;
    badge.textContent = unread;
    badge.style.display = unread > 0 ? 'flex' : 'none';
  }
}

// --- 3. Sidebar Module Routing ---
function setupNavigation() {
  const sidebarItems = document.querySelectorAll('.sidebar-menu .menu-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const module = item.getAttribute('data-module');
      if (module === 'logout') {
        logoutUser();
        return;
      }
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      CRM_STATE.activeModule = module;
      renderModule(module);
      document.getElementById('sidebar').classList.remove('active');
    });
  });
}

function renderModule(module) {
  const displayContainer = document.getElementById('main-content-display');
  displayContainer.innerHTML = ''; 

  let moduleHTML = '';
  switch (module) {
    case 'dashboard':
      moduleHTML = getDashboardHTML();
      break;
    case 'executive_insights':
      moduleHTML = getExecutiveInsightsHTML();
      break;
    case 'leads':
      moduleHTML = getLeadsHTML();
      break;
    case 'contacts':
      moduleHTML = getContactsHTML();
      break;
    case 'meetings':
      moduleHTML = getMeetingsHTML();
      break;
    case 'followups':
      moduleHTML = getFollowupsHTML();
      break;
    case 'ai_intelligence':
      moduleHTML = getAIIntelligenceHTML();
      break;
    case 'reports':
      moduleHTML = getReportsHTML();
      break;
    case 'settings':
      moduleHTML = getSettingsHTML();
      break;
    default:
      moduleHTML = '<h3>Module Not Found</h3>';
  }
  
  displayContainer.innerHTML = `<div class="module-container">${moduleHTML}</div>`;
  
  // Charts activation callbacks
  if (module === 'dashboard') {
    renderDashboardCharts();
  } else if (module === 'executive_insights') {
    renderExecutiveInsightsWidgets();
  } else if (module === 'leads') {
    initKanbanDragAndDrop();
    bindLeadTableClicks();
  } else if (module === 'meetings') {
    renderCalendarGrid();
  } else if (module === 'ai_intelligence') {
    bindLeadTableClicks();
  } else if (module === 'reports') {
    renderAnalyticsCharts();
  }
}

// --- 4. Main Module Templating ---

// A. EXECUTIVE DASHBOARD MODULE
function getDashboardHTML() {
  const totalLeads = CRM_STATE.leads.length;
  const activeLeads = CRM_STATE.leads.filter(l => l.stage !== 'Closed Won' && l.stage !== 'Closed Lost').length;
  const meetingsScheduled = CRM_STATE.meetings.length;
  const totalValue = CRM_STATE.leads.reduce((sum, l) => sum + l.estValue, 0);
  const weightedValue = CRM_STATE.leads.reduce((sum, l) => sum + (l.estValue * (l.winProbability / 100)), 0);
  const conversionRate = Math.round((CRM_STATE.leads.filter(l => l.stage === 'Closed Won').length / totalLeads) * 100);
  const revenueWon = CRM_STATE.leads.filter(l => l.stage === 'Closed Won').reduce((sum, l) => sum + l.estValue, 0);
  const avgWinProb = Math.round(CRM_STATE.leads.reduce((sum, l) => sum + l.winProbability, 0) / totalLeads);

  const hotLeads = CRM_STATE.leads
    .filter(l => l.aiScore >= 80 && l.stage !== 'Closed Won' && l.stage !== 'Closed Lost')
    .sort((a, b) => b.aiScore - a.aiScore)
    .slice(0, 3);

  const actions = CRM_STATE.leads
    .filter(l => l.stage !== 'Closed Won' && l.stage !== 'Closed Lost')
    .slice(0, 3);

  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">Executive Dashboard</h2>
        <p class="page-subtitle">Academic outreach overview & intelligence updates</p>
      </div>
      <div style="display:flex; gap:12px;">
        <button class="btn btn-secondary" onclick="CRM_STATE.activeModule='executive_insights'; renderModule('executive_insights');">
          AI Executive Insights
        </button>
        <button class="btn btn-primary" onclick="openModal('modal-add-lead')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Lead
        </button>
      </div>
    </div>

    <!-- 8 Dashboard metrics cards -->
    <div class="dashboard-grid-8">
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">TOTAL INSTITUTIONS</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${totalLeads}</span>
            <svg class="sparkline-svg"><path d="M 0 25 Q 20 15, 40 28 T 80 5" /></svg>
          </div>
        </div>
        <div class="stats-change positive">+2 new this week</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">ACTIVE PIPELINE LEADS</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${activeLeads}</span>
            <svg class="sparkline-svg" style="stroke:var(--accent-blue)"><path d="M 0 20 Q 20 28, 40 10 T 80 22" /></svg>
          </div>
        </div>
        <div class="stats-change positive">6 active deals</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">MEETINGS SCHEDULED</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${meetingsScheduled}</span>
            <svg class="sparkline-svg" style="stroke:var(--accent-cyan)"><path d="M 0 28 Q 20 10, 40 18 T 80 8" /></svg>
          </div>
        </div>
        <div class="stats-change positive">2 upcoming today</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">TOTAL PIPELINE VALUE</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>$${(totalValue/1000).toFixed(0)}K</span>
            <svg class="sparkline-svg"><path d="M 0 22 Q 20 12, 40 25 T 80 2" /></svg>
          </div>
        </div>
        <div class="stats-change positive">+15% vs forecast</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">WEIGHTED PIPELINE</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>$${(weightedValue/1000).toFixed(0)}K</span>
            <svg class="sparkline-svg" style="stroke:var(--accent-blue)"><path d="M 0 18 Q 20 22, 40 12 T 80 15" /></svg>
          </div>
        </div>
        <div class="stats-change positive">Expected probability</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">CONVERSION RATE</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${conversionRate}%</span>
            <svg class="sparkline-svg" style="stroke:var(--accent-cyan)"><path d="M 0 28 Q 20 25, 40 15 T 80 5" /></svg>
          </div>
        </div>
        <div class="stats-change positive">Above baseline (18%)</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">REVENUE WON</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>$${(revenueWon/1000).toFixed(0)}K</span>
            <svg class="sparkline-svg"><path d="M 0 25 Q 20 18, 40 8 T 80 2" /></svg>
          </div>
        </div>
        <div class="stats-change positive">Closed Won deals</div>
      </div>
      <div class="glass-card gradient-border-card stats-card-main">
        <div>
          <span class="stats-label">WIN PROBABILITY AVG</span>
          <div class="stats-value" style="display:flex; align-items:center; justify-content:space-between;">
            <span>${avgWinProb}%</span>
            <svg class="sparkline-svg" style="stroke:var(--accent-blue)"><path d="M 0 28 Q 20 22, 40 18 T 80 12" /></svg>
          </div>
        </div>
        <div class="stats-change positive">Highly active pipeline</div>
      </div>
    </div>

    <!-- Charts area -->
    <div class="dashboard-lower-grid">
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom: 12px;">7-Stage Sales Funnel</h3>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:18px;">Drop-off and stage volume distribution across active pipeline leads</p>
        <div class="chart-svg-container" id="dashboard-funnel-chart"></div>
      </div>
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:12px;">Monthly Growth & Forecasts</h3>
        <div class="chart-svg-container" id="dashboard-conversion-chart"></div>
      </div>
    </div>

    <!-- AI insights and actions -->
    <div class="dashboard-full-width-grid">
      <div class="glass-card">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          <h3 class="modal-title">AI Hot Leads</h3>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${hotLeads.map(l => `
            <div class="hot-lead-item">
              <div class="hot-lead-details">
                <span class="hot-lead-name">${l.name}</span>
                <span class="hot-lead-meta">Tier: ${l.tier} • Win Prob: ${l.winProbability}%</span>
              </div>
              <div style="display:flex; align-items:center; gap:12px;">
                <span class="kanban-card-score">${l.aiScore} Pts</span>
                <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="openAIActionPrompt('${l.id}')">Action</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">AI Recommended Actions</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${actions.map(l => `
            <div style="padding:12px; border-radius:var(--radius-md); border:1px solid var(--border); display:flex; gap:12px; align-items:flex-start; background-color:var(--bg-app)">
              <span class="pill-priority ${l.priority.toLowerCase()}" style="margin-top:2px;">${l.priority}</span>
              <div>
                <strong style="font-size:0.9rem;">${l.name}</strong>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Next Action: ${l.nextAction}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// B. AI EXECUTIVE INSIGHTS MODULE (NEW)
function getExecutiveInsightsHTML() {
  const healthExplanation = "Pipeline is in healthy standing. 8 active opportunities, 1 closed won. Focus outreach efforts on Discovery leads with high student volume to minimize pipeline friction.";
  
  // Stalled/Risk leads
  const risks = CRM_STATE.leads.filter(l => l.stage !== 'Closed Won' && l.stage !== 'Closed Lost' && l.aiScore < 80);
  // High potential leads
  const opportunities = CRM_STATE.leads.filter(l => l.winProbability >= 60 && l.stage !== 'Closed Won');

  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">AI Executive Insights Center</h2>
        <p class="page-subtitle">AI-powered predictive command center for partnership directors</p>
      </div>
      <button class="btn btn-primary" onclick="generateOneClickSummary()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        Generate Executive Summary
      </button>
    </div>

    <!-- Health score and Alerts -->
    <div class="dashboard-lower-grid" style="margin-top: 10px;">
      <!-- Pipeline Health Radial Gauge -->
      <div class="glass-card" style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
        <h3 class="modal-title" style="margin-bottom:12px; align-self:flex-start;">Pipeline Health Score</h3>
        <div class="chart-svg-container" id="health-gauge-chart" style="width:160px; height:160px; margin: 10px 0;"></div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:10px;">${healthExplanation}</p>
      </div>

      <!-- Smart Warnings Alerts Feed -->
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">System Smart Warnings</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="padding:12px; border-left:4px solid var(--danger); border-radius:var(--radius-md); background-color:var(--bg-app); border-top:1px solid var(--border); border-right:1px solid var(--border); border-bottom:1px solid var(--border);">
            <strong style="color:var(--danger); font-size:0.8rem; text-transform:uppercase;">Outreach Overdue</strong>
            <p style="font-size:0.85rem; margin-top:4px;">No follow-up has been logged for NUS (Contacted) in the past 14 days.</p>
          </div>
          <div style="padding:12px; border-left:4px solid var(--warning); border-radius:var(--radius-md); background-color:var(--bg-app); border-top:1px solid var(--border); border-right:1px solid var(--border); border-bottom:1px solid var(--border);">
            <strong style="color:var(--warning); font-size:0.8rem; text-transform:uppercase;">Proposal Pending</strong>
            <p style="font-size:0.85rem; margin-top:4px;">IIT Delhi PG Diploma proposal has remained unreviewed for 7 days.</p>
          </div>
          <div style="padding:12px; border-left:4px solid var(--success); border-radius:var(--radius-md); background-color:var(--bg-app); border-top:1px solid var(--border); border-right:1px solid var(--border); border-bottom:1px solid var(--border);">
            <strong style="color:var(--success); font-size:0.8rem; text-transform:uppercase;">High Probability Signal</strong>
            <p style="font-size:0.85rem; margin-top:4px;">MIT has transitioned to Negotiation with an 85% win probability score.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Risks and Opportunities lists -->
    <div class="dashboard-full-width-grid">
      <!-- Stalled Risk Detection -->
      <div class="glass-card">
        <h3 class="modal-title" style="color:var(--danger); margin-bottom:16px; display:flex; align-items:center; gap:8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          Risk Detection Center
        </h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${risks.map(l => `
            <div style="padding:12px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:0.95rem;">${l.name}</strong>
                <span class="pill-priority low" style="background-color:rgba(239,68,68,0.1); color:var(--danger);">Score: ${l.aiScore}</span>
              </div>
              <p style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">Risk Factor: Low activity frequency & stalled stage progression (${l.stage}).</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Opportunity Acceleration -->
      <div class="glass-card">
        <h3 class="modal-title" style="color:var(--success); margin-bottom:16px; display:flex; align-items:center; gap:8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Opportunity Accelerator
        </h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${opportunities.map(l => `
            <div style="padding:12px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app);">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:0.95rem;">${l.name}</strong>
                <span class="pill-priority high" style="background-color:rgba(16,185,129,0.1); color:var(--success);">Win Prob: ${l.winProbability}%</span>
              </div>
              <p style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">Recommended Priority Action: ${l.nextAction}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// C. LEADS PIPELINE MODULE (Table / Kanban / CSV)
let isKanbanView = false;
let currentFilterStage = 'All';
let currentFilterTier = 'All';
let currentFilterState = 'All';
let currentFilterType = 'All';
let currentFilterPriority = 'All';
let currentFilterSource = 'All';
let currentFilterOwner = 'All';
let currentLeadsSearchQuery = '';
let currentSortField = 'name'; // name, value, score, date

// Stably calculate lead score based on student strength, program interest level and stable engagementScore
function calculateLeadScore(lead) {
  const strength = parseInt(lead.studentStrength || lead.studentIntake) || 0;
  const strengthScore = Math.min(strength / 12000, 1) * 40; // Max 40 pts
  
  if (lead.programInterestLevel === undefined) {
    lead.programInterestLevel = lead.tier.includes('Tier-1') ? 5 : 3;
  }
  const interestScore = lead.programInterestLevel * 8; // Max 40 pts
  
  const engagementScore = lead.engagementScore !== undefined ? lead.engagementScore : 10; // Max 20 pts
  
  const total = strengthScore + interestScore + engagementScore;
  const finalScore = Math.min(Math.round(total), 100);
  
  lead.aiScore = finalScore;
  lead.priority = finalScore > 80 ? 'High' : finalScore > 50 ? 'Medium' : 'Low';
  lead.winProbability = lead.stage === 'Closed Won' ? 100 : lead.stage === 'Closed Lost' ? 0 : Math.min(Math.round(finalScore * 1.1), 95);
  
  return finalScore;
}

function saveLeadsToStorage() {
  localStorage.setItem('crm_leads_data', JSON.stringify(CRM_STATE.leads));
}

function loadLeadsFromStorage() {
  const stored = localStorage.getItem('crm_leads_data');
  if (stored) {
    CRM_STATE.leads = JSON.parse(stored);
  } else {
    // Seed initial leads with scores computed stably
    CRM_STATE.leads.forEach(calculateLeadScore);
    saveLeadsToStorage();
  }
}

function getLeadsHTML() {
  const toggleBtnText = isKanbanView ? 'Table View' : 'Kanban View';
  
  // Calculate/Sync all scores before rendering
  CRM_STATE.leads.forEach(calculateLeadScore);

  // Filter leads
  let filteredLeads = CRM_STATE.leads.filter(l => {
    const stageMatch = currentFilterStage === 'All' || l.stage === currentFilterStage;
    const tierMatch = currentFilterTier === 'All' || l.tier === currentFilterTier;
    const stateMatch = currentFilterState === 'All' || l.state === currentFilterState;
    const typeMatch = currentFilterType === 'All' || l.institutionType === currentFilterType;
    const priorityMatch = currentFilterPriority === 'All' || l.priority === currentFilterPriority;
    const sourceMatch = currentFilterSource === 'All' || l.leadSource === currentFilterSource;
    const ownerMatch = currentFilterOwner === 'All' || l.assignedSalesPerson === currentFilterOwner;
    
    const query = currentLeadsSearchQuery.toLowerCase();
    const searchMatch = !query || 
      l.name.toLowerCase().includes(query) ||
      (l.city && l.city.toLowerCase().includes(query)) ||
      (l.state && l.state.toLowerCase().includes(query)) ||
      (l.contact && l.contact.toLowerCase().includes(query)) ||
      (l.email && l.email.toLowerCase().includes(query)) ||
      (l.assignedSalesPerson && l.assignedSalesPerson.toLowerCase().includes(query));
      
    return stageMatch && tierMatch && stateMatch && typeMatch && priorityMatch && sourceMatch && ownerMatch && searchMatch;
  });

  // Sort leads
  filteredLeads.sort((a, b) => {
    if (currentSortField === 'name') return a.name.localeCompare(b.name);
    if (currentSortField === 'value') return b.estValue - a.estValue;
    if (currentSortField === 'score') return b.aiScore - a.aiScore;
    if (currentSortField === 'date') return (b.lastActivityDate || '').localeCompare(a.lastActivityDate || '');
    return 0;
  });

  // Gather unique filter values for dropdowns
  const statesList = [...new Set(CRM_STATE.leads.map(l => l.state).filter(Boolean))].sort();
  const typesList = [...new Set(CRM_STATE.leads.map(l => l.institutionType).filter(Boolean))].sort();
  const sourcesList = [...new Set(CRM_STATE.leads.map(l => l.leadSource).filter(Boolean))].sort();
  const ownersList = [...new Set(CRM_STATE.leads.map(l => l.assignedSalesPerson).filter(Boolean))].sort();
  
  const stages = ['New Lead', 'Contacted', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost'];
  
  let leadsBodyHTML = '';
  
  if (isKanbanView) {
    const colsHTML = stages.map(stage => {
      const stageLeads = filteredLeads.filter(l => l.stage === stage);
      const cardsHTML = stageLeads.map(l => {
        return `
          <div class="kanban-card" draggable="true" data-lead-id="${l.id}" style="border-left: 4px solid ${l.priority === 'High' ? 'var(--danger)' : l.priority === 'Medium' ? 'var(--warning)' : 'var(--success)'};">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <span style="font-size:0.7rem; color:var(--text-secondary); text-transform:uppercase; font-weight:600;">${l.institutionType}</span>
              <span class="kanban-card-score" style="font-size:0.75rem;">${l.aiScore} Pts</span>
            </div>
            <div class="kanban-card-title" style="font-size:0.95rem; font-weight:700; font-family:var(--font-display);">${l.name}</div>
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">${l.city}, ${l.state}</div>
            
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">
              <span class="kanban-card-tier" style="font-size:0.65rem;">${l.tier.split(' ')[0]}</span>
              <span class="pill-priority ${l.priority.toLowerCase()}" style="font-size:0.65rem; padding:1px 6px;">${l.priority}</span>
              <span style="font-size:0.65rem; background:rgba(6, 182, 212, 0.1); color:var(--accent-cyan); padding:1px 6px; border-radius:var(--radius-sm); font-weight:600;">Prob: ${l.winProbability}%</span>
            </div>
            
            <div style="margin-top:12px; padding-top:8px; border-top:1px solid var(--border); font-size:0.8rem; color:var(--text-secondary); display:flex; justify-content:space-between; align-items:center;">
              <span>Val: <strong>$${l.estValue.toLocaleString()}</strong></span>
              <span style="font-size:0.75rem; max-width:55%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Owner: <strong>${l.assignedSalesPerson.split(' ')[0]}</strong></span>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="kanban-column" data-stage="${stage}">
          <div class="kanban-col-header">
            <span class="kanban-col-title" style="font-size:0.75rem;">${stage}</span>
            <span class="kanban-col-count">${stageLeads.length}</span>
          </div>
          <div class="kanban-cards-wrapper">
            ${cardsHTML || '<div style="text-align:center; padding:20px; font-size:0.75rem; color:var(--text-secondary); border:1px dashed var(--border); border-radius:var(--radius-md);">Drop leads here</div>'}
          </div>
        </div>
      `;
    }).join('');
    
    leadsBodyHTML = `
      <div class="kanban-view-container">
        <div class="kanban-board">
          ${colsHTML}
        </div>
      </div>
    `;
  } else {
    // List Table View (20 columns)
    const tableRowsHTML = filteredLeads.map(l => {
      const logoChar = l.name.charAt(0);
      const intake = l.studentStrength || l.studentIntake || 0;
      return `
        <tr data-lead-id="${l.id}">
          <td style="width:40px; text-align:center; padding-right:0;">
            <div style="width:30px; height:30px; border-radius:50%; background:var(--gradient-primary); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:0.85rem;">
              ${logoChar}
            </div>
          </td>
          <td style="min-width:200px;">
            <div style="font-weight:700; color:var(--text-primary); font-family:var(--font-display);">${l.name}</div>
            <span style="font-size:0.72rem; color:var(--text-secondary);">${l.tier}</span>
          </td>
          <td>${l.city || '-'}</td>
          <td>${l.state || '-'}</td>
          <td style="font-size:0.8rem; color:var(--text-secondary);">${l.institutionType || '-'}</td>
          <td>${intake.toLocaleString()}</td>
          <td><strong>${l.contact}</strong></td>
          <td style="font-size:0.8rem; color:var(--text-secondary);">${l.role}</td>
          <td><a href="mailto:${l.email}" onclick="event.stopPropagation();" style="color:var(--accent-purple); text-decoration:none; font-size:0.8rem;">${l.email}</a></td>
          <td style="font-size:0.8rem; white-space:nowrap;">${l.phone}</td>
          <td style="min-width:150px; font-size:0.8rem; color:var(--text-secondary);">${l.programInterest}</td>
          <td style="font-size:0.8rem;">${l.leadSource}</td>
          <td style="text-align:center;">
            <span class="kanban-card-score" style="display:inline-block; padding:2px 8px; font-size:0.8rem;">${l.aiScore}</span>
          </td>
          <td>
            <span class="pill-priority ${l.priority.toLowerCase()}">${l.priority}</span>
          </td>
          <td><strong>${l.winProbability}%</strong></td>
          <td>
            <span style="font-size:0.78rem; padding:4px 8px; border-radius:var(--radius-sm); border:1px solid var(--border); font-weight:600; background-color:var(--bg-app); white-space:nowrap;">
              ${l.stage}
            </span>
          </td>
          <td>${l.assignedSalesPerson}</td>
          <td style="font-size:0.78rem; color:var(--text-secondary); white-space:nowrap;">${l.lastActivityDate}</td>
          <td style="font-size:0.78rem; color:var(--text-secondary); white-space:nowrap;">${l.nextFollowUp}</td>
          <td onclick="event.stopPropagation();" style="white-space:nowrap;">
            <div style="display:flex; gap:6px;">
              <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="openLeadDetail('${l.id}')">View</button>
              <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="triggerEditLead('${l.id}')">Edit</button>
              <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem; color:var(--danger); border-color:rgba(239,68,68,0.2);" onclick="triggerDeleteLead('${l.id}')">Delete</button>
              <button class="btn btn-primary" style="padding:4px 8px; font-size:0.75rem; background:var(--accent-purple);" onclick="triggerScheduleMeeting('${l.id}')">Meet</button>
              <button class="btn btn-primary" style="padding:4px 8px; font-size:0.75rem; background:var(--accent-cyan);" onclick="triggerGenerateOutreach('${l.id}')">AI Write</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
    
    leadsBodyHTML = `
      <div class="glass-card">
        <div class="table-responsive" style="max-height: calc(100vh - 280px); overflow-y: auto;">
          <table class="crm-table compact-table">
            <thead style="position: sticky; top:0; background:var(--surface); z-index:10;">
              <tr>
                <th style="padding-right:0;"></th>
                <th>Institution</th>
                <th>City</th>
                <th>State</th>
                <th>Type</th>
                <th>Intake</th>
                <th>Contact</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Program Interest</th>
                <th>Source</th>
                <th>AI Score</th>
                <th>Priority</th>
                <th>Win Prob</th>
                <th>Stage</th>
                <th>Owner</th>
                <th>Last Act</th>
                <th>Next Follow</th>
                <th style="text-align:center;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHTML || '<tr><td colspan="20" style="text-align:center; color:var(--text-secondary); padding:40px;">No matching leads found. Adjust your search or filters.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Filter dropdown HTML options
  const filterRowHTML = `
    <div class="glass-card" style="padding:14px 20px; display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:space-between; margin-bottom:12px;">
      <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center; width:100%;">
        <div class="search-container" style="max-width:240px; margin-right:8px; flex-grow:1;">
          <svg class="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="search-input" style="padding: 6px 10px 6px 30px; font-size:0.8rem;" id="local-leads-search" placeholder="Search leads..." value="${currentLeadsSearchQuery}" oninput="setLeadsSearchQuery(this.value)">
        </div>

        <select class="form-control" style="width:130px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsStageFilter(this.value)">
          <option value="All" ${currentFilterStage === 'All' ? 'selected' : ''}>All Stages</option>
          ${stages.map(s => `<option value="${s}" ${currentFilterStage === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        
        <select class="form-control" style="width:110px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsTierFilter(this.value)">
          <option value="All" ${currentFilterTier === 'All' ? 'selected' : ''}>All Tiers</option>
          <option value="Tier-1 Ivy/Global" ${currentFilterTier === 'Tier-1 Ivy/Global' ? 'selected' : ''}>Tier-1 Ivy</option>
          <option value="Tier-1 National" ${currentFilterTier === 'Tier-1 National' ? 'selected' : ''}>Tier-1 Natl</option>
          <option value="Tier-2 Regional" ${currentFilterTier === 'Tier-2 Regional' ? 'selected' : ''}>Tier-2 Reg</option>
          <option value="Tier-3 Local" ${currentFilterTier === 'Tier-3 Local' ? 'selected' : ''}>Tier-3 Loc</option>
        </select>

        <select class="form-control" style="width:110px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsStateFilter(this.value)">
          <option value="All" ${currentFilterState === 'All' ? 'selected' : ''}>All States</option>
          ${statesList.map(st => `<option value="${st}" ${currentFilterState === st ? 'selected' : ''}>${st}</option>`).join('')}
        </select>

        <select class="form-control" style="width:110px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsTypeFilter(this.value)">
          <option value="All" ${currentFilterType === 'All' ? 'selected' : ''}>All Types</option>
          ${typesList.map(tp => `<option value="${tp}" ${currentFilterType === tp ? 'selected' : ''}>${tp}</option>`).join('')}
        </select>

        <select class="form-control" style="width:100px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsPriorityFilter(this.value)">
          <option value="All" ${currentFilterPriority === 'All' ? 'selected' : ''}>All Priorities</option>
          <option value="High" ${currentFilterPriority === 'High' ? 'selected' : ''}>High</option>
          <option value="Medium" ${currentFilterPriority === 'Medium' ? 'selected' : ''}>Medium</option>
          <option value="Low" ${currentFilterPriority === 'Low' ? 'selected' : ''}>Low</option>
        </select>

        <select class="form-control" style="width:110px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsSourceFilter(this.value)">
          <option value="All" ${currentFilterSource === 'All' ? 'selected' : ''}>All Sources</option>
          ${sourcesList.map(src => `<option value="${src}" ${currentFilterSource === src ? 'selected' : ''}>${src}</option>`).join('')}
        </select>

        <select class="form-control" style="width:110px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsOwnerFilter(this.value)">
          <option value="All" ${currentFilterOwner === 'All' ? 'selected' : ''}>All Owners</option>
          ${ownersList.map(own => `<option value="${own}" ${currentFilterOwner === own ? 'selected' : ''}>${own}</option>`).join('')}
        </select>

        <div style="margin-left:auto; display:flex; gap:8px; align-items:center;">
          <span style="font-size:0.75rem; font-weight:600; color:var(--text-secondary);">Sort:</span>
          <select class="form-control" style="width:100px; padding:4px 8px; font-size:0.75rem;" onchange="setLeadsSortField(this.value)">
            <option value="name" ${currentSortField === 'name' ? 'selected' : ''}>Name</option>
            <option value="value" ${currentSortField === 'value' ? 'selected' : ''}>Est Value</option>
            <option value="score" ${currentSortField === 'score' ? 'selected' : ''}>AI Score</option>
            <option value="date" ${currentSortField === 'date' ? 'selected' : ''}>Last Activity</option>
          </select>
        </div>
      </div>
    </div>
  `;

  return `
    <div class="header-row">
      <div>
        <div style="display: flex; align-items:center; gap:16px;">
          <h2 class="page-title" style="margin-bottom:0;">Institution Leads</h2>
          <div style="display:flex; border:1px solid var(--border); border-radius:var(--radius-md); overflow:hidden; background:var(--bg-secondary);">
            <button class="btn" style="padding:6px 12px; font-size:0.75rem; background:${!isKanbanView ? 'var(--gradient-primary)' : 'transparent'}; color:${!isKanbanView ? 'white' : 'var(--text-secondary)'}; border:none; border-radius:0; font-weight:600;" onclick="setKanbanView(false)">Table</button>
            <button class="btn" style="padding:6px 12px; font-size:0.75rem; background:${isKanbanView ? 'var(--gradient-primary)' : 'transparent'}; color:${isKanbanView ? 'white' : 'var(--text-secondary)'}; border:none; border-radius:0; font-weight:600;" onclick="setKanbanView(true)">Kanban</button>
          </div>
        </div>
        <p class="page-subtitle" style="margin-top:4px;">Manage regional college relationships, student sizes, and contract cycles</p>
      </div>
      <div style="display:flex; gap:8px;">
        <input type="file" id="import-csv-file" accept=".csv" style="display:none;" onchange="handleCSVImport(event)">
        <button class="btn btn-secondary" onclick="triggerCSVImport()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          Import CSV
        </button>
        <button class="btn btn-secondary" onclick="exportLeadsToCSV()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Export CSV
        </button>
        <button class="btn btn-primary" onclick="openModal('modal-add-lead'); clearLeadForm();">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Lead
        </button>
      </div>
    </div>

    ${filterRowHTML}
    ${leadsBodyHTML}
  `;
}

function setKanbanView(val) {
  isKanbanView = val;
  renderModule('leads');
}

function setLeadsSearchQuery(val) {
  currentLeadsSearchQuery = val;
  renderModule('leads');
}

function setLeadsStageFilter(val) {
  currentFilterStage = val;
  renderModule('leads');
}

// Keep the standard functions for the settings dashboard/other parts if called
function setPipelineStageFilter(val) {
  currentFilterStage = val;
  renderModule('leads');
}

function setPipelineTierFilter(val) {
  currentFilterTier = val;
  renderModule('leads');
}

function setPipelineSort(val) {
  currentSortField = val;
  renderModule('leads');
}

function setLeadsTierFilter(val) {
  currentFilterTier = val;
  renderModule('leads');
}

function setLeadsStateFilter(val) {
  currentFilterState = val;
  renderModule('leads');
}

function setLeadsTypeFilter(val) {
  currentFilterType = val;
  renderModule('leads');
}

function setLeadsPriorityFilter(val) {
  currentFilterPriority = val;
  renderModule('leads');
}

function setLeadsSourceFilter(val) {
  currentFilterSource = val;
  renderModule('leads');
}

function setLeadsOwnerFilter(val) {
  currentFilterOwner = val;
  renderModule('leads');
}

function setLeadsSortField(val) {
  currentSortField = val;
  renderModule('leads');
}

// Action triggers
function triggerEditLead(id) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (!lead) return;
  
  document.getElementById('modal-add-lead-title').textContent = 'Edit Institution Lead';
  document.getElementById('btn-save-lead').textContent = 'Update Lead';
  document.getElementById('lead-edit-id').value = lead.id;
  
  document.getElementById('lead-name').value = lead.name || '';
  document.getElementById('lead-city').value = lead.city || '';
  document.getElementById('lead-state').value = lead.state || '';
  document.getElementById('lead-type').value = lead.institutionType || '';
  document.getElementById('lead-tier').value = lead.tier || 'Tier-1 Ivy/Global';
  document.getElementById('lead-student-strength').value = lead.studentStrength || lead.studentIntake || 0;
  document.getElementById('lead-contact').value = lead.contact || '';
  document.getElementById('lead-role').value = lead.role || '';
  document.getElementById('lead-email').value = lead.email || '';
  document.getElementById('lead-phone').value = lead.phone || '';
  document.getElementById('lead-program-interest').value = lead.programInterest || '';
  document.getElementById('lead-source').value = lead.leadSource || 'Direct Inbound';
  document.getElementById('lead-owner').value = lead.assignedSalesPerson || 'Rahul Sharma';
  document.getElementById('lead-est-value').value = lead.estValue || 0;
  document.getElementById('lead-stage').value = lead.stage || 'New Lead';
  document.getElementById('lead-next-followup').value = lead.nextFollowUp || '';
  document.getElementById('lead-last-activity').value = lead.lastActivityDate || '';
  
  openModal('modal-add-lead');
}

function triggerDeleteLead(id) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (!lead) return;
  
  if (confirm(`Are you sure you want to delete ${lead.name}?`)) {
    CRM_STATE.leads = CRM_STATE.leads.filter(l => l.id !== id);
    saveLeadsToStorage();
    showToast(`Lead for ${lead.name} has been deleted.`);
    populateModalDropdowns();
    renderModule('leads');
  }
}

function triggerScheduleMeeting(id) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (!lead) return;
  
  populateModalDropdowns();
  document.getElementById('meet-institution').value = lead.name;
  openModal('modal-add-meeting');
}

function triggerGenerateOutreach(id) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (!lead) return;
  
  openAIChatPanel();
  
  const textInput = document.getElementById('ai-chat-input');
  if (textInput) {
    textInput.value = `Draft an outreach email to ${lead.contact} (${lead.role}) at ${lead.name} pitching our ${lead.programInterest} programs.`;
    textInput.focus();
  }
  showToast("Prompt copied to AI Copilot!");
}

function clearLeadForm() {
  document.getElementById('modal-add-lead-title').textContent = 'Create Institution Lead';
  document.getElementById('btn-save-lead').textContent = 'Save Lead';
  document.getElementById('lead-edit-id').value = '';
  document.getElementById('form-add-lead').reset();
}

function exportLeadsToCSV() {
  const headers = [
    'Institution Name', 'City', 'State', 'Institution Type', 'Tier', 
    'Student Strength', 'Contact Person', 'Designation', 'Email', 'Phone', 
    'Program Interest', 'Lead Source', 'AI Lead Score', 'Priority', 
    'Win Probability', 'Lead Status', 'Assigned Sales Person', 'Last Activity', 
    'Next Follow-up', 'Est Value'
  ];
  const rows = CRM_STATE.leads.map(l => [
    l.name, l.city || '', l.state || '', l.institutionType || '', l.tier || '',
    l.studentStrength || l.studentIntake || '', l.contact || '', l.role || '', l.email || '', l.phone || '',
    l.programInterest || '', l.leadSource || '', l.aiScore || '', l.priority || '',
    l.winProbability || '', l.stage || '', l.assignedSalesPerson || '', l.lastActivityDate || '',
    l.nextFollowUp || '', l.estValue || ''
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("CSV Exported Successfully");
}

function triggerCSVImport() {
  document.getElementById('import-csv-file').click();
}

function handleCSVImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split('\n');
    if (lines.length <= 1) return;
    
    let importedCount = 0;
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      let values = [];
      let currentVal = '';
      let insideQuote = false;
      for (let charIndex = 0; charIndex < line.length; charIndex++) {
        const char = line[charIndex];
        if (char === '"') {
          insideQuote = !insideQuote;
        } else if (char === ',' && !insideQuote) {
          values.push(currentVal.trim());
          currentVal = '';
        } else {
          currentVal += char;
        }
      }
      values.push(currentVal.trim());
      
      if (values.length >= 2) {
        const name = values[0] || 'Unknown Institution';
        const city = values[1] || '';
        const state = values[2] || '';
        const institutionType = values[3] || 'University';
        const tier = values[4] || 'Tier-2 Regional';
        const studentStrength = parseInt(values[5]) || 3000;
        const contact = values[6] || 'Academic Office';
        const role = values[7] || 'Director';
        const email = values[8] || `info@${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.edu`;
        const phone = values[9] || '';
        const programInterest = values[10] || '';
        const leadSource = values[11] || 'Direct Inbound';
        const stage = values[15] || 'New Lead';
        const assignedSalesPerson = values[16] || 'Rahul Sharma';
        const lastActivityDate = values[17] || new Date().toISOString().split('T')[0];
        const nextFollowUp = values[18] || '';
        const estValue = parseInt(values[19]) || 50000;
        
        const randomEngagementScore = Math.floor(Math.random() * 11) + 8;
        
        CRM_STATE.leads.push({
          id: `lead-imported-${Date.now()}-${i}`,
          name, city, state, institutionType, tier,
          studentStrength, studentIntake: studentStrength,
          contact, role, email, phone,
          programInterest, leadSource,
          engagementScore: randomEngagementScore,
          stage, assignedSalesPerson, lastActivityDate, nextFollowUp,
          estValue,
          notes: [], docs: [],
          history: [{ stage: 'New Lead', date: new Date().toISOString().split('T')[0] }],
          aiExplanation: [{ type: 'pos', text: 'Imported via CSV file.' }]
        });
        importedCount++;
      }
    }
    if (importedCount > 0) {
      saveLeadsToStorage();
      populateModalDropdowns();
      renderModule(CRM_STATE.activeModule);
      showToast(`Imported ${importedCount} leads successfully.`);
    } else {
      showToast("No valid leads found in CSV.");
    }
  };
  reader.readAsText(file);
}

// D. CONTACTS DIRECTORY VIEW
function getContactsHTML() {
  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">Key Directory Contacts</h2>
        <p class="page-subtitle">Academic decision-makers, deans, and placement officers</p>
      </div>
    </div>
    
    <div class="glass-card">
      <div class="table-responsive">
        <table class="crm-table">
          <thead>
            <tr>
              <th>Contact Name</th>
              <th>Designation Role</th>
              <th>Affiliated University</th>
              <th>Email Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            ${CRM_STATE.leads.map(l => `
              <tr>
                <td>
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div class="profile-avatar" style="width:32px; height:32px; font-size:0.75rem;">
                      ${l.contact.split(' ').map(n => n[0]).join('').replace(/Dr|Prof|Dean/g, '')}
                    </div>
                    <strong>${l.contact}</strong>
                  </div>
                </td>
                <td><span style="font-size:0.875rem; font-weight:600;">${l.role}</span></td>
                <td><span style="font-size:0.875rem; color:var(--text-muted);">${l.name}</span></td>
                <td><a href="mailto:${l.email}" style="color:var(--accent-purple); text-decoration:none; font-size:0.85rem;">${l.email}</a></td>
                <td><span style="font-size:0.85rem; color:var(--text-muted);">${l.phone}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// E. MEETINGS & CALENDAR
let currentCalYear = 2026;
let currentCalMonth = 5; // June (0-indexed)

function getMeetingsHTML() {
  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">Meetings & Schedule</h2>
        <p class="page-subtitle">Interactive alliance meetings calendar and planner</p>
      </div>
      <button class="btn btn-primary" onclick="openModal('modal-add-meeting')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Schedule Meeting
      </button>
    </div>

    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px;">
      <!-- Calendar panel -->
      <div class="glass-card calendar-wrapper">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 class="modal-title" style="font-family:'Outfit';">June 2026</h3>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary" style="padding:6px 12px;" onclick="prevCalendarMonth()">&larr;</button>
            <button class="btn btn-secondary" style="padding:6px 12px;" onclick="nextCalendarMonth()">&rarr;</button>
          </div>
        </div>
        <div class="calendar-header-days">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>
        <div class="calendar-grid" id="calendar-cells-container"></div>
      </div>

      <!-- Priority panel -->
      <div class="glass-card" style="height:fit-content;">
        <h3 class="modal-title" style="margin-bottom:12px; color:var(--accent-purple);">AI Recommendations</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">AI identified scheduled discussions that require preparation decks.</p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="padding:10px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app)">
            <strong style="font-size:0.85rem; color:var(--danger)">High Priority (MIT)</strong>
            <p style="font-size:0.8rem; margin-top:4px;">Final MOU draft review. Recommendation: Ensure Legal clauses match previous standard agreements.</p>
          </div>
          <div style="padding:10px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app)">
            <strong style="font-size:0.85rem; color:var(--warning)">Medium Priority (IIT Bombay)</strong>
            <p style="font-size:0.8rem; margin-top:4px;">Embedded Systems Lab presentation. Recommendation: Highlight placement growth records.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function prevCalendarMonth() {
  currentCalMonth--;
  if (currentCalMonth < 0) {
    currentCalMonth = 11;
    currentCalYear--;
  }
  renderCalendarGrid();
}

function nextCalendarMonth() {
  currentCalMonth++;
  if (currentCalMonth > 11) {
    currentCalMonth = 0;
    currentCalYear++;
  }
  renderCalendarGrid();
}

function renderCalendarGrid() {
  const container = document.getElementById('calendar-cells-container');
  if (!container) return;

  // Set header date title
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const title = document.querySelector('.calendar-wrapper h3');
  if (title) title.textContent = `${monthNames[currentCalMonth]} ${currentCalYear}`;

  container.innerHTML = '';
  
  // Calculate first day and days count
  const firstDayIndex = new Date(currentCalYear, currentCalMonth, 1).getDay();
  const numDays = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();
  const prevMonthNumDays = new Date(currentCalYear, currentCalMonth, 0).getDate();

  let cellsHTML = '';

  // Render preceding month days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    cellsHTML += `
      <div class="calendar-cell muted">
        <span class="calendar-date-num">${prevMonthNumDays - i}</span>
      </div>
    `;
  }

  // Render current month days
  for (let day = 1; day <= numDays; day++) {
    const dateStr = `${currentCalYear}-${String(currentCalMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayMeetings = CRM_STATE.meetings.filter(m => m.date === dateStr);
    
    let meetBadge = '';
    if (dayMeetings.length > 0) {
      meetBadge = dayMeetings.map(m => `
        <div class="calendar-event-dot" title="${m.agenda}" onclick="openAIChatPanelWithMeeting('${m.id}')">
          ${m.institution.split(' ')[0]}
        </div>
      `).join('');
    }

    cellsHTML += `
      <div class="calendar-cell">
        <span class="calendar-date-num">${day}</span>
        <div style="display:flex; flex-direction:column; gap:2px;">
          ${meetBadge}
        </div>
      </div>
    `;
  }

  container.innerHTML = cellsHTML;
}

// F. FOLLOW-UPS CHECKLIST
function getFollowupsHTML() {
  const activeFollowups = CRM_STATE.followUps.filter(f => !f.completed);
  const completedFollowups = CRM_STATE.followUps.filter(f => f.completed);
  
  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">Follow-Ups & Tasks</h2>
        <p class="page-subtitle">Track priority deliverables and checklist tasks</p>
      </div>
      <button class="btn btn-primary" onclick="openModal('modal-add-followup')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Create Task
      </button>
    </div>
    
    <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px;">
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">Active Action Items</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${activeFollowups.length === 0 ? '<p style="color:var(--text-muted);">All deliverables complete.</p>' : 
            activeFollowups.map(f => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app)">
              <div style="display:flex; gap:12px; align-items:center;">
                <input type="checkbox" style="width:18px; height:18px; cursor:pointer;" onclick="toggleFollowupCompleted('${f.id}')">
                <div>
                  <div style="font-size:0.9rem; font-weight:600;">${f.task}</div>
                  <div style="font-size:0.775rem; color:var(--text-muted); margin-top:2px;">${f.institution} • Deadline: ${f.deadline}</div>
                </div>
              </div>
              <span class="pill-priority ${f.priority.toLowerCase()}">${f.priority}</span>
            </div>
          `).join('')}
        </div>
        
        <h3 class="modal-title" style="margin-top:32px; margin-bottom:16px; color:var(--text-muted);">Completed Tasks</h3>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${completedFollowups.map(f => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app); opacity:0.6;">
              <div style="display:flex; gap:12px; align-items:center;">
                <input type="checkbox" checked style="width:18px; height:18px; cursor:pointer;" onclick="toggleFollowupCompleted('${f.id}')">
                <span style="text-decoration:line-through; font-size:0.875rem;">${f.task}</span>
              </div>
              <span style="font-size:0.75rem; color:var(--text-muted);">${f.institution}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="glass-card" style="height:fit-content;">
        <h3 class="modal-title" style="margin-bottom:12px;">AI Assistant Outreach Templates</h3>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:10px; text-align:left; font-size:0.8rem;" onclick="openAIActionPrompt('lead-1')">
          Draft Agreement Email (MIT)
        </button>
        <button class="btn btn-secondary" style="width:100%; text-align:left; font-size:0.8rem;" onclick="openAIActionPrompt('lead-3')">
          Draft Curriculum Revise (IIT Delhi)
        </button>
      </div>
    </div>
  `;
}

// G. AI INTELLIGENCE & EXPLAINABLE AI
function getAIIntelligenceHTML() {
  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">AI Intelligence Core</h2>
        <p class="page-subtitle">Explainable Lead Scoring and Predictive Win Probabilities</p>
      </div>
    </div>

    <div class="glass-card">
      <h3 class="modal-title" style="margin-bottom:20px;">Lead Score Explanations</h3>
      <div style="display:flex; flex-direction:column; gap:20px;">
        ${CRM_STATE.leads.map(l => {
          const positiveReasons = l.aiExplanation ? l.aiExplanation.filter(e => e.type === 'pos') : [];
          const negativeReasons = l.aiExplanation ? l.aiExplanation.filter(e => e.type === 'neg') : [];
          
          return `
            <div style="padding:16px; border:1px solid var(--border); border-radius:var(--radius-lg); background-color:var(--bg-app)">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <strong style="font-family:'Outfit'; font-size:1.05rem;">${l.name}</strong>
                <span class="kanban-card-score" style="font-size:0.85rem; padding:4px 8px;">AI Score: ${l.aiScore} Pts</span>
              </div>
              <div class="progress-bar-container" style="margin-bottom:12px;">
                <div class="progress-bar-fill" style="width: ${l.aiScore}%;"></div>
              </div>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                <div>
                  <span style="font-size:0.8rem; font-weight:700; color:var(--success); text-transform:uppercase;">Positive Factors</span>
                  <ul style="list-style:none; font-size:0.8rem; color:var(--text-muted); margin-top:6px; display:flex; flex-direction:column; gap:4px;">
                    ${positiveReasons.map(r => `<li>&bull; ${r.text}</li>`).join('')}
                  </ul>
                </div>
                <div>
                  <span style="font-size:0.8rem; font-weight:700; color:var(--danger); text-transform:uppercase;">Risk Factors</span>
                  <ul style="list-style:none; font-size:0.8rem; color:var(--text-muted); margin-top:6px; display:flex; flex-direction:column; gap:4px;">
                    ${negativeReasons.map(r => `<li>&bull; ${r.text}</li>`).join('') || '<li>None identified</li>'}
                  </ul>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// H. REPORTS & ANALYTICS VIEW
function getReportsHTML() {
  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">Advanced Pipeline Analytics</h2>
        <p class="page-subtitle">Interactive regional distribution and target conversion forecast graphs</p>
      </div>
    </div>

    <div class="dashboard-lower-grid">
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">Lead Tier Analysis</h3>
        <div class="chart-svg-container" id="reports-pie-chart"></div>
      </div>
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">Target Partnerships Signed</h3>
        <div class="chart-svg-container" id="reports-conversion-bar"></div>
      </div>
    </div>
  `;
}

// I. CONFIG/SETTINGS
function getSettingsHTML() {
  const isDarkSelected = CRM_STATE.theme === 'dark' ? 'selected' : '';
  const isLightSelected = CRM_STATE.theme === 'light' ? 'selected' : '';

  return `
    <div class="header-row">
      <div>
        <h2 class="page-title">System Settings</h2>
        <p class="page-subtitle">Configure workspace variables and dark/light interface toggles</p>
      </div>
    </div>

    <div class="glass-card" style="max-width:600px;">
      <h3 class="modal-title" style="margin-bottom:20px;">Visual Configuration</h3>
      <div class="form-group">
        <label>Interface Theme Mode</label>
        <select class="form-control" onchange="changeThemeFromSettings(this.value)">
          <option value="dark" ${isDarkSelected}>Dark Mode Interface</option>
          <option value="light" ${isLightSelected}>Light Mode Interface</option>
        </select>
      </div>
    </div>
  `;
}

// --- 5. Interactive Chart Renders ---

function renderDashboardCharts() {
  const funnel = document.getElementById('dashboard-funnel-chart');
  if (funnel) {
    // Stage statistics calculations
    const counts = [
      CRM_STATE.leads.filter(l => l.stage === 'New Lead').length,
      CRM_STATE.leads.filter(l => l.stage === 'Contacted').length,
      CRM_STATE.leads.filter(l => l.stage === 'Meeting Scheduled').length,
      CRM_STATE.leads.filter(l => l.stage === 'Proposal Sent').length,
      CRM_STATE.leads.filter(l => l.stage === 'Negotiation').length,
      CRM_STATE.leads.filter(l => l.stage === 'Closed Won').length,
      CRM_STATE.leads.filter(l => l.stage === 'Closed Lost').length
    ];
    const labels = ['New', 'Cont.', 'Meet.', 'Prop.', 'Neg.', 'Won', 'Lost'];
    const maxVal = Math.max(...counts, 1);
    
    const barsHTML = counts.map((c, i) => {
      const width = (c / maxVal) * 80 + 20;
      return `
        <rect x="${200 - width*1.8}" y="${10 + i*24}" width="${width*3.6}" height="18" rx="4" fill="url(#grad-funnel-${i})" opacity="0.9"></rect>
        <text x="200" y="${22 + i*24}" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">${labels[i]}: ${c} leads</text>
      `;
    }).join('');

    funnel.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
        ${barsHTML}
        <defs>
          ${counts.map((_, i) => `
            <linearGradient id="grad-funnel-${i}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#7C3AED" />
              <stop offset="100%" stop-color="#06B6D4" />
            </linearGradient>
          `).join('')}
        </defs>
      </svg>
    `;
  }

  const conversions = document.getElementById('dashboard-conversion-chart');
  if (conversions) {
    conversions.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 500 180" preserveAspectRatio="none">
        <path d="M 50,140 L 150,110 L 250,80 L 350,60 L 450,30 L 450,150 L 50,150 Z" fill="url(#area-grad-main)" opacity="0.2" />
        <path d="M 50,140 L 150,110 L 250,80 L 350,60 L 450,30" fill="none" stroke="url(#line-grad-main)" stroke-width="3" />
        
        <circle cx="50" cy="140" r="5" fill="#7C3AED" />
        <circle cx="150" cy="110" r="5" fill="#7C3AED" />
        <circle cx="250" cy="80" r="5" fill="#2563EB" />
        <circle cx="350" cy="60" r="5" fill="#2563EB" />
        <circle cx="450" cy="30" r="5" fill="#06B6D4" />
        
        <text x="50" y="170" text-anchor="middle" fill="var(--text-muted)" font-size="9">Mar</text>
        <text x="150" y="170" text-anchor="middle" fill="var(--text-muted)" font-size="9">Apr</text>
        <text x="250" y="170" text-anchor="middle" fill="var(--text-muted)" font-size="9">May</text>
        <text x="350" y="170" text-anchor="middle" fill="var(--text-muted)" font-size="9">Jun</text>
        <text x="450" y="170" text-anchor="middle" fill="var(--text-muted)" font-size="9">Jul (Forecast)</text>
        
        <defs>
          <linearGradient id="area-grad-main" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#7C3AED" />
            <stop offset="100%" stop-color="transparent" />
          </linearGradient>
          <linearGradient id="line-grad-main" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7C3AED" />
            <stop offset="50%" stop-color="#2563EB" />
            <stop offset="100%" stop-color="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    `;
  }
}

function renderExecutiveInsightsWidgets() {
  const healthGauge = document.getElementById('health-gauge-chart');
  if (healthGauge) {
    const radius = 50;
    const circ = 2 * Math.PI * radius;
    // Calculate health score (weighted score of all active leads)
    const activeLeads = CRM_STATE.leads.filter(l => l.stage !== 'Closed Lost');
    const healthVal = Math.round(activeLeads.reduce((sum, l) => sum + l.aiScore, 0) / activeLeads.length);
    const strokeOffset = circ - (healthVal / 100) * circ;

    healthGauge.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="${radius}" fill="none" stroke="var(--border)" stroke-width="10" />
        <circle cx="60" cy="60" r="${radius}" fill="none" stroke="url(#health-grad)" stroke-width="10" 
                stroke-dasharray="${circ}" stroke-dashoffset="${strokeOffset}" stroke-linecap="round" transform="rotate(-90 60 60)" />
        <text x="60" y="66" text-anchor="middle" font-family="'Outfit'" font-size="20" font-weight="bold" fill="var(--text-main)">${healthVal}%</text>
        <defs>
          <linearGradient id="health-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7C3AED" />
            <stop offset="100%" stop-color="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    `;
  }
}

function renderAnalyticsCharts() {
  const pie = document.getElementById('reports-pie-chart');
  if (pie) {
    pie.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 400 180">
        <circle cx="100" cy="90" r="60" fill="none" stroke="#E2E8F0" stroke-width="4" />
        <circle cx="100" cy="90" r="50" fill="none" stroke="#7C3AED" stroke-width="20" stroke-dasharray="120 200" stroke-dashoffset="0" />
        <circle cx="100" cy="90" r="50" fill="none" stroke="#2563EB" stroke-width="20" stroke-dasharray="100 220" stroke-dashoffset="-120" />
        <circle cx="100" cy="90" r="50" fill="none" stroke="#06B6D4" stroke-width="20" stroke-dasharray="60 260" stroke-dashoffset="-220" />
        
        <rect x="220" y="45" width="12" height="12" fill="#7C3AED" rx="2"></rect>
        <text x="240" y="55" fill="var(--text-main)" font-size="11" font-weight="600">Tier-1 Ivy/Global (42%)</text>
        
        <rect x="220" y="75" width="12" height="12" fill="#2563EB" rx="2"></rect>
        <text x="240" y="85" fill="var(--text-main)" font-size="11" font-weight="600">Tier-1 National (36%)</text>
        
        <rect x="220" y="105" width="12" height="12" fill="#06B6D4" rx="2"></rect>
        <text x="240" y="115" fill="var(--text-main)" font-size="11" font-weight="600">Tier-2 Regional (22%)</text>
      </svg>
    `;
  }

  const bars = document.getElementById('reports-conversion-bar');
  if (bars) {
    bars.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
        <rect x="40" y="30" width="30" height="120" fill="var(--border)" rx="4"></rect>
        <rect x="40" y="70" width="30" height="80" fill="#7C3AED" rx="4"></rect>
        <text x="55" y="165" text-anchor="middle" fill="var(--text-muted)" font-size="10">MIT</text>
        
        <rect x="130" y="30" width="30" height="120" fill="var(--border)" rx="4"></rect>
        <rect x="130" y="110" width="30" height="40" fill="#2563EB" rx="4"></rect>
        <text x="145" y="165" text-anchor="middle" fill="var(--text-muted)" font-size="10">Stanford</text>
        
        <rect x="220" y="30" width="30" height="120" fill="var(--border)" rx="4"></rect>
        <rect x="220" y="50" width="30" height="100" fill="#7C3AED" rx="4"></rect>
        <text x="235" y="165" text-anchor="middle" fill="var(--text-muted)" font-size="10">IIT Delhi</text>
        
        <rect x="310" y="30" width="30" height="120" fill="var(--border)" rx="4"></rect>
        <rect x="310" y="30" width="30" height="120" fill="#06B6D4" rx="4"></rect>
        <text x="325" y="165" text-anchor="middle" fill="var(--text-muted)" font-size="10">U of T</text>
      </svg>
    `;
  }
}

// --- 6. Kanban Board Drag-and-Drop ---
function initKanbanDragAndDrop() {
  const cards = document.querySelectorAll('.kanban-card');
  const columns = document.querySelectorAll('.kanban-column');
  
  cards.forEach(card => {
    card.addEventListener('dragstart', () => card.classList.add('dragging'));
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-lead-id');
      openLeadDetail(id);
    });
  });
  
  columns.forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingCard = document.querySelector('.dragging');
      if (draggingCard) {
        col.querySelector('.kanban-cards-wrapper').appendChild(draggingCard);
      }
    });
    
    col.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggingCard = document.querySelector('.dragging');
      if (draggingCard) {
        const leadId = draggingCard.getAttribute('data-lead-id');
        const newStage = col.getAttribute('data-stage');
        
        const lead = CRM_STATE.leads.find(l => l.id === leadId);
        if (lead && lead.stage !== newStage) {
          lead.stage = newStage;
          
          // Win probabilities scaling
          const stages = ['New Lead', 'Contacted', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost'];
          const stageIndex = stages.indexOf(newStage);
          lead.winProbability = Math.round((stageIndex / (stages.length - 2)) * 100);
          if (newStage === 'Closed Won') lead.winProbability = 100;
          if (newStage === 'Closed Lost') lead.winProbability = 0;
          
          // Log into history
          const historyEntry = { stage: newStage, date: new Date().toISOString().split('T')[0] };
          lead.history.push(historyEntry);
          
          // Trigger notifications
          CRM_STATE.notifications.unshift({
            id: `n-${Date.now()}`,
            title: 'Lead Transition',
            message: `${lead.name} shifted to ${newStage}.`,
            time: 'Just now',
            type: 'info'
          });
          updateNotificationBadge();
          
          // Refresh counts
          const count = col.querySelector('.kanban-col-count');
          if (count) count.textContent = col.querySelectorAll('.kanban-card').length;
          
          saveLeadsToStorage();
        }
      }
    });
  });
}

function bindLeadTableClicks() {
  const rows = document.querySelectorAll('.crm-table tbody tr');
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-lead-id');
      if (id) openLeadDetail(id);
    });
  });
}

// --- 7. Lead Detail slide out panel ---
function openLeadDetail(id) {
  const lead = CRM_STATE.leads.find(l => l.id === id);
  if (!lead) return;
  
  CRM_STATE.activeLeadId = id;
  
  const panel = document.getElementById('lead-detail-panel');
  const title = document.getElementById('detail-institution-name');
  title.textContent = lead.name;
  
  renderLeadDetailContent(lead);
  panel.classList.add('open');
}

function closeLeadDetail() {
  document.getElementById('lead-detail-panel').classList.remove('open');
}

function changeDetailTab(tabName) {
  CRM_STATE.activeDetailTab = tabName;
  const lead = CRM_STATE.leads.find(l => l.id === CRM_STATE.activeLeadId);
  if (lead) renderLeadDetailContent(lead);
}

function renderLeadDetailContent(lead) {
  const container = document.getElementById('lead-detail-body');
  if (!container) return;

  const notesTabClass = CRM_STATE.activeDetailTab === 'notes' ? 'active' : '';
  const docsTabClass = CRM_STATE.activeDetailTab === 'docs' ? 'active' : '';
  const aiTabClass = CRM_STATE.activeDetailTab === 'ai' ? 'active' : '';

  let tabBodyHTML = '';
  if (CRM_STATE.activeDetailTab === 'notes') {
    tabBodyHTML = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${lead.notes.map(n => `
          <div style="padding:10px; border:1px solid var(--border); border-radius:var(--radius-md); background-color:var(--bg-app);">
            <div style="font-size:0.75rem; color:var(--text-light);">${n.date}</div>
            <p style="font-size:0.85rem; margin-top:4px;">${n.text}</p>
          </div>
        `).join('') || '<p style="color:var(--text-light);">No notes logged.</p>'}
        <div style="display:flex; gap:8px; margin-top:10px;">
          <input type="text" id="new-note-input" class="form-control" placeholder="Add note...">
          <button class="btn btn-primary" style="padding: 10px 14px;" onclick="addLeadNote()">Add</button>
        </div>
      </div>
    `;
  } else if (CRM_STATE.activeDetailTab === 'docs') {
    tabBodyHTML = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${lead.docs.map(d => `
          <div style="padding:10px; border:1px solid var(--border); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.85rem; font-weight:600;">${d}</span>
            <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;">Download</button>
          </div>
        `).join('') || '<p style="color:var(--text-light);">No documents uploaded.</p>'}
      </div>
    `;
  } else if (CRM_STATE.activeDetailTab === 'ai') {
    tabBodyHTML = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <h4 style="font-family:'Outfit';">Outreach Strategy Suggestions</h4>
        <div style="padding:10px; border-left:3px solid var(--accent-cyan); background-color:var(--bg-app); border-radius:var(--radius-md);">
          <strong style="font-size:0.8rem; color:var(--accent-cyan);">AI NEXT BEST ACTION</strong>
          <p style="font-size:0.85rem; margin-top:4px;">${lead.nextAction}</p>
        </div>
        <button class="btn btn-primary" onclick="openAIActionPrompt('${lead.id}')">Generate Outreach Email</button>
      </div>
    `;
  }

  // Determine stage indexes for timeline
  const stages = ['New Lead', 'Contacted', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Closed Won'];
  const currentStageIndex = stages.indexOf(lead.stage);

  container.innerHTML = `
    <!-- Top Details -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Student Intake</span>
        <div style="font-size:1.1rem; font-weight:700;">${lead.studentIntake.toLocaleString()}</div>
      </div>
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Lead Score</span>
        <div style="font-size:1.1rem; font-weight:700; color:var(--accent-purple);">${lead.aiScore} Pts</div>
      </div>
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Contact Person</span>
        <div style="font-size:0.9rem; font-weight:600;">${lead.contact}</div>
        <span style="font-size:0.75rem; color:var(--text-light);">${lead.role}</span>
      </div>
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Estimated Value</span>
        <div style="font-size:1.1rem; font-weight:700;">$${lead.estValue.toLocaleString()}</div>
      </div>
    </div>

    <!-- Timeline progress -->
    <div>
      <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; display:block; margin-bottom:12px;">Activity Timeline</span>
      <div class="timeline-container">
        ${stages.map((st, idx) => {
          const isActive = idx <= currentStageIndex;
          const matchHistory = lead.history.find(h => h.stage === st);
          const dateStr = matchHistory ? matchHistory.date : 'Pending';
          return `
            <div class="timeline-item">
              <div class="timeline-dot ${isActive ? 'active' : ''}"></div>
              <div class="timeline-title">${st}</div>
              <div class="timeline-date">${dateStr}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Tabs section -->
    <div>
      <div class="tab-container">
        <button class="tab-btn ${notesTabClass}" onclick="changeDetailTab('notes')">Notes</button>
        <button class="tab-btn ${docsTabClass}" onclick="changeDetailTab('docs')">Documents</button>
        <button class="tab-btn ${aiTabClass}" onclick="changeDetailTab('ai')">AI Insights</button>
      </div>
      <div style="margin-top:12px;">
        ${tabBodyHTML}
      </div>
    </div>
  `;
}

function addLeadNote() {
  const input = document.getElementById('new-note-input');
  if (input && input.value.trim() !== '') {
    const lead = CRM_STATE.leads.find(l => l.id === CRM_STATE.activeLeadId);
    if (lead) {
      lead.notes.push({
        date: new Date().toISOString().split('T')[0],
        text: input.value.trim()
      });
      saveLeadsToStorage();
      renderLeadDetailContent(lead);
    }
  }
}

// Toast notification utility
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// --- 8. System Interactions & Theme switching ---
function setupUIInteractions() {
  const burger = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (burger && sidebar) {
    burger.addEventListener('click', () => sidebar.classList.toggle('active'));
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      CRM_STATE.theme = CRM_STATE.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', CRM_STATE.theme);
      localStorage.setItem('academia_theme', CRM_STATE.theme);
      updateThemeIcon();
      showToast(`Switched to ${CRM_STATE.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
      if (CRM_STATE.activeModule === 'settings') renderModule('settings');
    });
  }

  // Board switch toggling
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'toggle-pipeline-view-btn') {
      isKanbanView = !isKanbanView;
      renderModule('leads');
    }
  });

  // Modal close triggers
  const dismissModalBtns = document.querySelectorAll('[data-modal]');
  dismissModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      closeModal(modalId);
    });
  });
}

function changeThemeFromSettings(themeVal) {
  CRM_STATE.theme = themeVal;
  document.documentElement.setAttribute('data-theme', themeVal);
  localStorage.setItem('academia_theme', themeVal);
  updateThemeIcon();
  showToast(`Switched to ${themeVal === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// --- 9. Floating action menu ---
function setupQuickActions() {
  const fabMain = document.getElementById('fab-main');
  const fabContainer = document.getElementById('fab-container');
  
  if (fabMain && fabContainer) {
    fabMain.addEventListener('click', () => {
      fabMain.classList.toggle('active');
      fabContainer.classList.toggle('open');
    });
  }
  
  const actLead = document.getElementById('fab-action-lead');
  const actMeet = document.getElementById('fab-action-meeting');
  const actFollow = document.getElementById('fab-action-followup');
  const actOutreach = document.getElementById('fab-action-outreach');
  const actCopilot = document.getElementById('fab-action-copilot');

  if (actLead) {
    actLead.addEventListener('click', () => {
      openModal('modal-add-lead');
      fabContainer.classList.remove('open');
      fabMain.classList.remove('active');
    });
  }
  if (actMeet) {
    actMeet.addEventListener('click', () => {
      openModal('modal-add-meeting');
      fabContainer.classList.remove('open');
      fabMain.classList.remove('active');
    });
  }
  if (actFollow) {
    actFollow.addEventListener('click', () => {
      openModal('modal-add-followup');
      fabContainer.classList.remove('open');
      fabMain.classList.remove('active');
    });
  }
  if (actOutreach) {
    actOutreach.addEventListener('click', () => {
      openAIChatPanel();
      appendChatBubble('assistant', "I can generate personalized outreach. Click one of the suggestion chips or ask me to draft an email.");
      fabContainer.classList.remove('open');
      fabMain.classList.remove('active');
    });
  }
  if (actCopilot) {
    actCopilot.addEventListener('click', () => {
      openAIChatPanel();
      fabContainer.classList.remove('open');
      fabMain.classList.remove('active');
    });
  }
}

// --- 10. Scheduling & follow-ups forms ---
function setupForms() {
  // Add / Edit Lead
  const leadForm = document.getElementById('form-add-lead');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const editId = document.getElementById('lead-edit-id').value;
      
      const name = document.getElementById('lead-name').value;
      const city = document.getElementById('lead-city').value;
      const state = document.getElementById('lead-state').value;
      const type = document.getElementById('lead-type').value;
      const tier = document.getElementById('lead-tier').value;
      const strength = parseInt(document.getElementById('lead-student-strength').value) || 0;
      const contact = document.getElementById('lead-contact').value;
      const role = document.getElementById('lead-role').value;
      const email = document.getElementById('lead-email').value;
      const phone = document.getElementById('lead-phone').value;
      const programInterest = document.getElementById('lead-program-interest').value;
      const source = document.getElementById('lead-source').value;
      const owner = document.getElementById('lead-owner').value;
      const estValue = parseInt(document.getElementById('lead-est-value').value) || 0;
      const stage = document.getElementById('lead-stage').value;
      const nextFollowUp = document.getElementById('lead-next-followup').value;
      const lastActivity = document.getElementById('lead-last-activity').value || new Date().toISOString().split('T')[0];
      
      if (editId) {
        // Edit Mode
        const lead = CRM_STATE.leads.find(l => l.id === editId);
        if (lead) {
          lead.name = name;
          lead.city = city;
          lead.state = state;
          lead.institutionType = type;
          lead.tier = tier;
          lead.studentStrength = strength;
          lead.studentIntake = strength;
          lead.contact = contact;
          lead.role = role;
          lead.email = email;
          lead.phone = phone;
          lead.programInterest = programInterest;
          lead.leadSource = source;
          lead.assignedSalesPerson = owner;
          lead.estValue = estValue;
          lead.stage = stage;
          lead.nextFollowUp = nextFollowUp;
          lead.lastActivityDate = lastActivity;
          
          calculateLeadScore(lead);
          
          showToast(`Updated lead for ${name}`);
        }
      } else {
        // Add Mode
        const randomEngagement = Math.floor(Math.random() * 11) + 8; // Stable 8-18 engagement score
        const newLead = {
          id: `lead-${Date.now()}`,
          name,
          city,
          state,
          institutionType: type,
          tier,
          studentStrength: strength,
          studentIntake: strength,
          contact,
          role,
          email,
          phone,
          programInterest,
          leadSource: source,
          assignedSalesPerson: owner,
          estValue,
          stage,
          nextFollowUp,
          lastActivityDate: lastActivity,
          engagementScore: randomEngagement,
          notes: [],
          docs: [],
          history: [{ stage: 'New Lead', date: new Date().toISOString().split('T')[0] }],
          aiExplanation: [{ type: 'pos', text: 'Lead created in CRM.' }]
        };
        
        calculateLeadScore(newLead);
        CRM_STATE.leads.push(newLead);
        
        showToast(`Created lead for ${name}`);
      }
      
      closeModal('modal-add-lead');
      leadForm.reset();
      clearLeadForm();
      saveLeadsToStorage();
      populateModalDropdowns();
      renderModule(CRM_STATE.activeModule);
    });
  }

  // Schedule Meeting
  const meetForm = document.getElementById('form-add-meeting');
  if (meetForm) {
    meetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const institution = document.getElementById('meet-institution').value;
      const agenda = document.getElementById('meet-agenda').value;
      const date = document.getElementById('meet-date').value;
      const time = document.getElementById('meet-time').value;
      const platform = document.getElementById('meet-platform').value;

      CRM_STATE.meetings.push({ id: `meet-${Date.now()}`, institution, agenda, date, time, platform });
      
      closeModal('modal-add-meeting');
      meetForm.reset();
      renderModule(CRM_STATE.activeModule);
    });
  }

  // Create Follow-up Task
  const followForm = document.getElementById('form-add-followup');
  if (followForm) {
    followForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const institution = document.getElementById('follow-institution').value;
      const task = document.getElementById('follow-task').value;
      const deadline = document.getElementById('follow-deadline').value;
      const priority = document.getElementById('follow-priority').value;

      CRM_STATE.followUps.unshift({ id: `follow-${Date.now()}`, institution, task, deadline, priority, completed: false });
      
      closeModal('modal-add-followup');
      followForm.reset();
      renderModule(CRM_STATE.activeModule);
    });
  }
}

function toggleFollowupCompleted(id) {
  const task = CRM_STATE.followUps.find(f => f.id === id);
  if (task) {
    task.completed = !task.completed;
    renderModule(CRM_STATE.activeModule);
  }
}

// --- 11. AI Assistant Copilot & outreach copy writers ---
function setupAIChat() {
  const panel = document.getElementById('ai-chat-sidebar');
  const trigger = document.getElementById('chat-panel-trigger');
  const close = document.getElementById('ai-chat-close');
  const send = document.getElementById('ai-chat-send');
  const input = document.getElementById('ai-chat-input');
  
  if (trigger && panel) trigger.addEventListener('click', () => panel.classList.add('open'));
  if (close && panel) close.addEventListener('click', () => panel.classList.remove('open'));
  
  const processInput = () => {
    const text = input.value.trim();
    if (!text) return;
    
    appendChatBubble('user', text);
    input.value = '';
    
    setTimeout(() => {
      const reply = generateAIResponse(text);
      appendChatBubble('assistant', reply);
    }, 600);
  };

  if (send) send.addEventListener('click', processInput);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') processInput();
    });
  }

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-prompt');
      appendChatBubble('user', text);
      setTimeout(() => {
        const reply = generateAIResponse(text);
        appendChatBubble('assistant', reply);
      }, 500);
    });
  });
}

function openAIChatPanel() {
  const panel = document.getElementById('ai-chat-sidebar');
  if (panel) panel.classList.add('open');
}

function openAIChatPanelWithMeeting(meetingId) {
  const meeting = CRM_STATE.meetings.find(m => m.id === meetingId);
  if (meeting) {
    openAIChatPanel();
    appendChatBubble('user', `Generate outreach follow-up for meeting with ${meeting.institution}`);
    setTimeout(() => {
      const reply = generateAIResponse(`outreach for meeting with ${meeting.institution}`);
      appendChatBubble('assistant', reply);
    }, 600);
  }
}

function appendChatBubble(role, text) {
  const container = document.getElementById('ai-chat-messages');
  if (container) {
    const div = document.createElement('div');
    div.className = `chat-bubble ${role}`;
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }
}

function generateAIResponse(query) {
  const q = query.toLowerCase();
  
  if (q.includes('contact') || q.includes('today')) {
    return `<strong>Recommended Lead for Today:</strong><br>
    I suggest contacting <strong>Stanford University</strong>. The Dean replied to our initial proposal. Sending a Cloud Computing prospectus deck immediately will raise win probability by 20%.`;
  }
  
  if (q.includes('outreach') || q.includes('email') || q.includes('generate')) {
    return `
      <strong>AI Generated Outreach Draft:</strong>
      <div style="background-color:var(--bg-app); border:1px solid var(--border); padding:10px; border-radius:var(--radius-md); font-size:0.8rem; margin:10px 0; position:relative;">
        <strong>Subject: Proposal / Certification Partnerships</strong><br><br>
        Dear Dean,<br><br>
        We would love to discuss establishing advanced certification laboratories and internship programs for students.<br><br>
        Let us know if you are open to reviewing a customized PG curriculum outline next week.<br><br>
        Best regards,<br>Rahul Sharma
        <button class="btn btn-secondary" style="position:absolute; bottom:8px; right:8px; padding:2px 8px; font-size:0.7rem;" onclick="copyToClipboard(this)">Copy Message</button>
      </div>
    `;
  }
  
  if (q.includes('priority')) {
    const list = CRM_STATE.leads.filter(l => l.priority === 'High').map(l => `&bull; <strong>${l.name}</strong> (Score: ${l.aiScore})`).join('<br>');
    return `Here are the active high-priority universities:<br><br>${list}`;
  }

  if (q.includes('bottleneck')) {
    return `<strong>Pipeline Bottleneck Analysis:</strong><br>
    &bull; <strong>Discovery Stage Delay</strong>: Stanford has been in the Discovery stage for 14 days.<br>
    &bull; <strong>Proposal Sent Review</strong>: IIT Delhi workshop proposal is awaiting HOD feedback.`;
  }

  return "I've analyzed your pipeline records. How can I assist you with outreach resources today?";
}

function copyToClipboard(btn) {
  const parent = btn.parentElement;
  // Get text content except the button text
  const text = parent.innerText.replace('Copy Message', '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.borderColor = 'var(--success)';
    btn.style.color = 'var(--success)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1500);
  });
}

function openAIActionPrompt(leadId) {
  const lead = CRM_STATE.leads.find(l => l.id === leadId);
  if (lead) {
    openAIChatPanel();
    appendChatBubble('user', `Draft outreach email for ${lead.name}`);
    setTimeout(() => {
      const response = generateAIResponse(`outreach for ${lead.name}`);
      appendChatBubble('assistant', response);
    }, 600);
  }
}

// AI Executive insights generator (one-click summary)
function generateOneClickSummary() {
  const totalLeads = CRM_STATE.leads.length;
  const highPriorityCount = CRM_STATE.leads.filter(l => l.priority === 'High').length;
  const avgConversion = Math.round((CRM_STATE.leads.filter(l => l.stage === 'Closed Won').length / totalLeads) * 100);
  const totalForecastValue = CRM_STATE.leads.reduce((sum, l) => sum + (l.estValue * (l.winProbability / 100)), 0);

  // Dynamically create and show a gorgeous glassmorphic summary modal
  const modalId = 'dynamic-summary-modal';
  let modalEl = document.getElementById(modalId);
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = modalId;
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-content" style="max-width: 550px; background: var(--bg-surface-glass); border: 1px solid var(--border-glass); backdrop-filter: blur(24px); box-shadow: var(--shadow-lg);">
      <div class="modal-header">
        <h3 class="modal-title" style="font-family: 'Outfit'; display: flex; align-items: center; gap: 8px;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          AI Executive Summary Report
        </h3>
        <button class="modal-close" onclick="document.getElementById('${modalId}').classList.remove('active')">&times;</button>
      </div>
      <div style="font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background-color: rgba(124, 58, 237, 0.08); border-left: 4px solid var(--accent-purple); border-radius: var(--radius-md);">
          "Current pipeline contains <strong>${totalLeads} active institutions</strong>. 
          There are <strong>${highPriorityCount} high-priority opportunities</strong> requiring immediate partner outreach. 
          The expected model conversion rate is <strong>${avgConversion}%</strong> with an estimated forecast valuation of <strong>$${totalForecastValue.toLocaleString()}</strong>."
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 8px;">
          <div style="padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--bg-app);">
            <span style="font-size: 0.75rem; color: var(--text-light); text-transform: uppercase;">Confidence Interval</span>
            <div style="font-weight: 700; color: var(--success); margin-top: 4px;">94.2% (High)</div>
          </div>
          <div style="padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--bg-app);">
            <span style="font-size: 0.75rem; color: var(--text-light); text-transform: uppercase;">Primary Risk Area</span>
            <div style="font-weight: 700; color: var(--warning); margin-top: 4px;">Outreach Inactivity</div>
          </div>
        </div>
      </div>
      <div class="modal-footer" style="margin-top: 24px;">
        <button class="btn btn-secondary" onclick="document.getElementById('${modalId}').classList.remove('active')">Dismiss</button>
        <button class="btn btn-primary" onclick="navigator.clipboard.writeText('Current pipeline contains ${totalLeads} active institutions. There are ${highPriorityCount} high-priority opportunities requiring immediate partner outreach.'); document.getElementById('${modalId}').classList.remove('active');">Copy Summary</button>
      </div>
    </div>
  `;
  modalEl.classList.add('active');
}

// --- 12. Global Search ---
function setupSearch() {
  const input = document.getElementById('global-search');
  if (input) {
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });

    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      if (val.length > 0) {
        renderSearchResults(val);
      } else {
        renderModule(CRM_STATE.activeModule);
      }
    });
  }
}

function renderSearchResults(filter) {
  const displayContainer = document.getElementById('main-content-display');
  const filteredLeads = CRM_STATE.leads.filter(l => l.name.toLowerCase().includes(filter));
  
  displayContainer.innerHTML = `
    <div class="module-container">
      <div>
        <h2 class="page-title">Search Results</h2>
        <p class="page-subtitle">Matching items for: "${filter}"</p>
      </div>
      <div class="glass-card">
        <h3 class="modal-title" style="margin-bottom:16px;">Matching Institutions (${filteredLeads.length})</h3>
        <div>
          ${filteredLeads.map(l => `
            <div style="padding:12px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong>${l.name}</strong><br>
                <span style="font-size:0.75rem; color:var(--text-muted);">${l.tier} • Stage: ${l.stage}</span>
              </div>
              <button class="btn btn-secondary" style="padding: 4px 8px; font-size:0.75rem;" onclick="openLeadDetail('${l.id}')">View Details</button>
            </div>
          `).join('') || '<p style="color:var(--text-muted);">No matches found.</p>'}
        </div>
      </div>
    </div>
  `;
}
let currentAuthMode = "login";

function switchAuthMode(mode) {
  currentAuthMode = mode;
  document.getElementById("login-tab").classList.toggle("active", mode === "login");
  document.getElementById("signup-tab").classList.toggle("active", mode === "signup");
  document.getElementById("auth-name").style.display = mode === "signup" ? "block" : "none";
  document.getElementById("auth-submit").textContent = mode === "signup" ? "Create Account" : "Login";
  document.getElementById("auth-message").textContent = "";
}

async function handleFirebaseAuth(event) {
  event.preventDefault();

  const name = document.getElementById("auth-name").value.trim();
  const email = document.getElementById("auth-email").value.trim();
  const password = document.getElementById("auth-password").value.trim();
  const msg = document.getElementById("auth-message");
  const btn = document.getElementById("auth-submit");

  msg.textContent = "";
  btn.disabled = true;
  btn.textContent = currentAuthMode === "signup" ? "Creating..." : "Logging in...";

  try {
    let userCredential;

    if (currentAuthMode === "signup") {
      userCredential = await window.firebaseSignUp(window.firebaseAuth, email, password);
      if (name) {
        await window.firebaseUpdateProfile(userCredential.user, { displayName: name });
      }
      showToast("Account created successfully!");
    } else {
      userCredential = await window.firebaseLogin(window.firebaseAuth, email, password);
      showToast("Logged in successfully!");
    }

    document.getElementById("auth-screen").style.display = "none";
    updateLoggedInUserUI(userCredential.user);

  } catch (error) {
    msg.textContent = getAuthErrorMessage(error.code);
  } finally {
    btn.disabled = false;
    btn.textContent = currentAuthMode === "signup" ? "Create Account" : "Login";
  }
}

function getAuthErrorMessage(code) {
  const messages = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Invalid email format.",
    "auth/weak-password": "Password must be at least 6 characters long.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/network-request-failed": "Please check your internet connection."
  };
  return messages[code] || "Authentication failed. Please try again.";
}

function updateLoggedInUserUI(user) {
  const name = user.displayName || user.email.split("@")[0];
  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const footerName = document.querySelector(".user-name-footer");
  const footerAvatar = document.getElementById("user-avatar-initials");
  const profileAvatar = document.querySelector(".profile-avatar");

  if (footerName) footerName.textContent = name;
  if (footerAvatar) footerAvatar.textContent = initials;
  if (profileAvatar) profileAvatar.textContent = initials;
}

function logoutUser() {
  window.firebaseLogout(window.firebaseAuth).then(() => {
    location.reload();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (!window.firebaseAuth || !window.firebaseOnAuthStateChanged) return;

    window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
      const authScreen = document.getElementById("auth-screen");

      if (user) {
        if (authScreen) authScreen.style.display = "none";
        updateLoggedInUserUI(user);
      } else {
        if (authScreen) authScreen.style.display = "flex";
      }
    });
  }, 500);
});