// ===== DATA =====
const lessons = [
  {
    id: 1, icon: '👋', level: 'beginner', levelText: 'مبتدئ',
    title: 'التحيات والمقدمات',
    desc: 'تعلم كيف تقول مرحباً وتعرّف بنفسك باللغة الإنجليزية',
    duration: '15 دقيقة', words: 12,
    vocab: [
      { en: 'Hello', ar: 'مرحباً', ph: '/həˈloʊ/' },
      { en: 'Goodbye', ar: 'وداعاً', ph: '/ɡʊdˈbaɪ/' },
      { en: 'Please', ar: 'من فضلك', ph: '/pliːz/' },
      { en: 'Thank you', ar: 'شكراً', ph: '/θæŋk juː/' },
      { en: 'Sorry', ar: 'آسف', ph: '/ˈsɒri/' },
      { en: 'Yes', ar: 'نعم', ph: '/jɛs/' },
      { en: 'No', ar: 'لا', ph: '/noʊ/' },
      { en: 'Excuse me', ar: 'عذراً', ph: '/ɪkˈskjuːz miː/' },
      { en: 'Good morning', ar: 'صباح الخير', ph: '/ɡʊd ˈmɔːrnɪŋ/' },
      { en: 'Good night', ar: 'تصبح على خير', ph: '/ɡʊd naɪt/' },
      { en: 'How are you?', ar: 'كيف حالك؟', ph: '/haʊ ɑːr juː/' },
      { en: 'My name is...', ar: 'اسمي...', ph: '/maɪ neɪm ɪz/' }
    ]
  },
  {
    id: 2, icon: '🏠', level: 'beginner', levelText: 'مبتدئ',
    title: 'المنزل والغرف',
    desc: 'تعلم أسماء غرف المنزل والأثاث بالإنجليزية',
    duration: '20 دقيقة', words: 15,
    vocab: [
      { en: 'House', ar: 'منزل', ph: '/haʊs/' },
      { en: 'Room', ar: 'غرفة', ph: '/ruːm/' },
      { en: 'Kitchen', ar: 'مطبخ', ph: '/ˈkɪtʃɪn/' },
      { en: 'Bedroom', ar: 'غرفة النوم', ph: '/ˈbɛdruːm/' },
      { en: 'Bathroom', ar: 'الحمام', ph: '/ˈbæθruːm/' },
      { en: 'Living room', ar: 'غرفة المعيشة', ph: '/ˈlɪvɪŋ ruːm/' },
      { en: 'Door', ar: 'باب', ph: '/dɔːr/' },
      { en: 'Window', ar: 'نافذة', ph: '/ˈwɪndoʊ/' },
      { en: 'Chair', ar: 'كرسي', ph: '/tʃɛr/' },
      { en: 'Table', ar: 'طاولة', ph: '/ˈteɪbəl/' },
      { en: 'Bed', ar: 'سرير', ph: '/bɛd/' },
      { en: 'Sofa', ar: 'أريكة', ph: '/ˈsoʊfə/' }
    ]
  },
  {
    id: 3, icon: '🍎', level: 'beginner', levelText: 'مبتدئ',
    title: 'الطعام والشراب',
    desc: 'أسماء الأطعمة والمشروبات الشائعة بالإنجليزية',
    duration: '25 دقيقة', words: 18,
    vocab: [
      { en: 'Bread', ar: 'خبز', ph: '/brɛd/' },
      { en: 'Water', ar: 'ماء', ph: '/ˈwɔːtər/' },
      { en: 'Milk', ar: 'حليب', ph: '/mɪlk/' },
      { en: 'Coffee', ar: 'قهوة', ph: '/ˈkɒfi/' },
      { en: 'Tea', ar: 'شاي', ph: '/tiː/' },
      { en: 'Rice', ar: 'أرز', ph: '/raɪs/' },
      { en: 'Chicken', ar: 'دجاج', ph: '/ˈtʃɪkɪn/' },
      { en: 'Fish', ar: 'سمك', ph: '/fɪʃ/' },
      { en: 'Apple', ar: 'تفاحة', ph: '/ˈæpəl/' },
      { en: 'Egg', ar: 'بيضة', ph: '/ɛɡ/' },
      { en: 'Cheese', ar: 'جبنة', ph: '/tʃiːz/' },
      { en: 'Sugar', ar: 'سكر', ph: '/ˈʃʊɡər/' }
    ]
  },
  {
    id: 4, icon: '💼', level: 'intermediate', levelText: 'متوسط',
    title: 'العمل والمهن',
    desc: 'مفردات بيئة العمل والمهن المختلفة',
    duration: '30 دقيقة', words: 20,
    vocab: [
      { en: 'Doctor', ar: 'طبيب', ph: '/ˈdɒktər/' },
      { en: 'Teacher', ar: 'معلم', ph: '/ˈtiːtʃər/' },
      { en: 'Engineer', ar: 'مهندس', ph: '/ˌɛndʒɪˈnɪər/' },
      { en: 'Manager', ar: 'مدير', ph: '/ˈmænɪdʒər/' },
      { en: 'Meeting', ar: 'اجتماع', ph: '/ˈmiːtɪŋ/' },
      { en: 'Project', ar: 'مشروع', ph: '/ˈprɒdʒɛkt/' },
      { en: 'Report', ar: 'تقرير', ph: '/rɪˈpɔːrt/' },
      { en: 'Deadline', ar: 'الموعد النهائي', ph: '/ˈdɛdlaɪn/' },
      { en: 'Salary', ar: 'راتب', ph: '/ˈsæləri/' },
      { en: 'Office', ar: 'مكتب', ph: '/ˈɒfɪs/' },
      { en: 'Interview', ar: 'مقابلة عمل', ph: '/ˈɪntərvjuː/' },
      { en: 'Colleague', ar: 'زميل', ph: '/ˈkɒliːɡ/' }
    ]
  },
  {
    id: 5, icon: '✈️', level: 'intermediate', levelText: 'متوسط',
    title: 'السفر والسياحة',
    desc: 'الكلمات الأساسية في المطار والفندق والسياحة',
    duration: '35 دقيقة', words: 16,
    vocab: [
      { en: 'Airport', ar: 'مطار', ph: '/ˈɛrpɔːrt/' },
      { en: 'Flight', ar: 'رحلة طيران', ph: '/flaɪt/' },
      { en: 'Passport', ar: 'جواز سفر', ph: '/ˈpæspɔːrt/' },
      { en: 'Hotel', ar: 'فندق', ph: '/hoʊˈtɛl/' },
      { en: 'Check-in', ar: 'تسجيل الوصول', ph: '/ˈtʃɛkɪn/' },
      { en: 'Ticket', ar: 'تذكرة', ph: '/ˈtɪkɪt/' },
      { en: 'Luggage', ar: 'أمتعة', ph: '/ˈlʌɡɪdʒ/' },
      { en: 'Reservation', ar: 'حجز', ph: '/ˌrɛzərˈveɪʃən/' },
      { en: 'Tourist', ar: 'سائح', ph: '/ˈtʊərɪst/' },
      { en: 'Map', ar: 'خريطة', ph: '/mæp/' },
      { en: 'Currency', ar: 'عملة', ph: '/ˈkɜːrənsi/' },
      { en: 'Customs', ar: 'الجمارك', ph: '/ˈkʌstəmz/' }
    ]
  },
  {
    id: 6, icon: '🧠', level: 'advanced', levelText: 'متقدم',
    title: 'الأعمال والتجارة',
    desc: 'مصطلحات متقدمة في عالم الأعمال والاقتصاد',
    duration: '40 دقيقة', words: 14,
    vocab: [
      { en: 'Investment', ar: 'استثمار', ph: '/ɪnˈvɛstmənt/' },
      { en: 'Revenue', ar: 'إيرادات', ph: '/ˈrɛvənjuː/' },
      { en: 'Negotiation', ar: 'تفاوض', ph: '/nɪˌɡoʊʃiˈeɪʃən/' },
      { en: 'Strategy', ar: 'استراتيجية', ph: '/ˈstrætɪdʒi/' },
      { en: 'Entrepreneur', ar: 'رائد أعمال', ph: '/ˌɒntrəprəˈnɜːr/' },
      { en: 'Acquisition', ar: 'اندماج/استحواذ', ph: '/ˌækwɪˈzɪʃən/' },
      { en: 'Stakeholder', ar: 'أصحاب المصلحة', ph: '/ˈsteɪkhoʊldər/' },
      { en: 'Leverage', ar: 'رافعة مالية', ph: '/ˈlɛvərɪdʒ/' },
      { en: 'Benchmark', ar: 'معيار مرجعي', ph: '/ˈbɛntʃmɑːrk/' },
      { en: 'Collaborate', ar: 'يتعاون', ph: '/kəˈlæbəreɪt/' },
      { en: 'Innovation', ar: 'ابتكار', ph: '/ˌɪnəˈveɪʃən/' },
      { en: 'Sustainable', ar: 'مستدام', ph: '/səˈsteɪnəbəl/' }
    ]
  }
];

const flashcardData = [
  { en: 'Ambitious', ar: 'طموح', ph: '/æmˈbɪʃəs/', ex: 'She is very ambitious.' },
  { en: 'Brilliant', ar: 'رائع / ذكي جداً', ph: '/ˈbrɪljənt/', ex: 'He is a brilliant student.' },
  { en: 'Challenge', ar: 'تحدي', ph: '/ˈtʃælɪndʒ/', ex: 'Learning English is a challenge.' },
  { en: 'Dedicate', ar: 'يُكرّس / يُخصص', ph: '/ˈdɛdɪkeɪt/', ex: 'I dedicate time to study.' },
  { en: 'Explore', ar: 'يستكشف', ph: '/ɪkˈsplɔːr/', ex: 'Let\'s explore new places.' },
  { en: 'Fluent', ar: 'طليق اللسان', ph: '/ˈfluːənt/', ex: 'She speaks fluent English.' },
  { en: 'Grateful', ar: 'ممتنن', ph: '/ˈɡreɪtfəl/', ex: 'I am grateful for your help.' },
  { en: 'Harmony', ar: 'انسجام', ph: '/ˈhɑːrməni/', ex: 'They live in harmony.' },
  { en: 'Inspire', ar: 'يلهم / يُوحي', ph: '/ɪnˈspaɪər/', ex: 'Teachers inspire students.' },
  { en: 'Journey', ar: 'رحلة', ph: '/ˈdʒɜːrni/', ex: 'Life is a beautiful journey.' }
];

const quizQuestions = [
  { word: 'Apple', options: ['برتقالة', 'تفاحة', 'موزة', 'عنبة'], correct: 1 },
  { word: 'Beautiful', options: ['قبيح', 'صغير', 'جميل', 'كبير'], correct: 2 },
  { word: 'Run', options: ['يجلس', 'ينام', 'يأكل', 'يجري'], correct: 3 },
  { word: 'Happy', options: ['سعيد', 'حزين', 'غاضب', 'خائف'], correct: 0 },
  { word: 'Book', options: ['قلم', 'كراس', 'كتاب', 'مسطرة'], correct: 2 },
  { word: 'House', options: ['سيارة', 'منزل', 'شارع', 'حديقة'], correct: 1 },
  { word: 'Water', options: ['نار', 'هواء', 'تراب', 'ماء'], correct: 3 },
  { word: 'Doctor', options: ['معلم', 'مهندس', 'طبيب', 'محامي'], correct: 2 },
  { word: 'Sun', options: ['قمر', 'نجمة', 'شمس', 'سحابة'], correct: 2 },
  { word: 'Friend', options: ['عدو', 'صديق', 'غريب', 'جار'], correct: 1 }
];

const grammarData = [
  {
    id: 'present', label: 'المضارع البسيط',
    title: 'Present Simple - المضارع البسيط',
    desc: 'يُستخدم للتعبير عن الحقائق الثابتة، العادات اليومية، والأشياء التي تحدث بشكل منتظم.',
    formula: 'Subject + Verb (base form) / Verb+s/es',
    examples: [
      { en: 'I drink coffee every morning.', ar: 'أشرب القهوة كل صباح.' },
      { en: 'She works at a hospital.', ar: 'هي تعمل في مستشفى.' },
      { en: 'The sun rises in the east.', ar: 'تشرق الشمس من الشرق.' },
      { en: 'They play football on Fridays.', ar: 'يلعبون كرة القدم أيام الجمعة.' }
    ]
  },
  {
    id: 'past', label: 'الماضي البسيط',
    title: 'Past Simple - الماضي البسيط',
    desc: 'يُستخدم للحديث عن أحداث وقعت وانتهت في الماضي في وقت محدد.',
    formula: 'Subject + Verb (past form / Verb+ed)',
    examples: [
      { en: 'I visited Jordan last year.', ar: 'زرتُ الأردن العام الماضي.' },
      { en: 'She studied English for two years.', ar: 'درست الإنجليزية لمدة سنتين.' },
      { en: 'They went to the market yesterday.', ar: 'ذهبوا إلى السوق أمس.' },
      { en: 'He worked hard and succeeded.', ar: 'عمل بجد ونجح.' }
    ]
  },
  {
    id: 'future', label: 'المستقبل',
    title: 'Future Simple - المستقبل البسيط',
    desc: 'يُستخدم للتعبير عن أحداث ستقع في المستقبل أو لإعطاء وعود وتوقعات.',
    formula: 'Subject + will + Verb (base form)',
    examples: [
      { en: 'I will learn English fluently.', ar: 'سأتعلم الإنجليزية بطلاقة.' },
      { en: 'She will travel to London next month.', ar: 'ستسافر إلى لندن الشهر القادم.' },
      { en: 'They will help us tomorrow.', ar: 'سيساعدوننا غداً.' },
      { en: 'It will rain this evening.', ar: 'ستمطر هذا المساء.' }
    ]
  },
  {
    id: 'present-cont', label: 'المضارع المستمر',
    title: 'Present Continuous - المضارع المستمر',
    desc: 'يُستخدم للحديث عن أحداث تحدث الآن في هذه اللحظة أو في فترة زمنية حالية.',
    formula: 'Subject + am/is/are + Verb+ing',
    examples: [
      { en: 'I am studying English now.', ar: 'أنا أدرس الإنجليزية الآن.' },
      { en: 'She is cooking dinner.', ar: 'هي تطبخ العشاء.' },
      { en: 'They are playing in the garden.', ar: 'هم يلعبون في الحديقة.' },
      { en: 'It is raining outside.', ar: 'إنها تمطر في الخارج.' }
    ]
  },
  {
    id: 'questions', label: 'صياغة الأسئلة',
    title: 'Question Formation - كيف تصيغ الأسئلة',
    desc: 'لصياغة السؤال في الإنجليزية نضع الفعل المساعد (Do/Does/Did/Will/Is/Are) في أول الجملة.',
    formula: 'Aux. verb + Subject + Main verb + ?',
    examples: [
      { en: 'Do you speak English?', ar: 'هل تتكلم الإنجليزية؟' },
      { en: 'Where does she live?', ar: 'أين تسكن هي؟' },
      { en: 'What did you eat yesterday?', ar: 'ماذا أكلتَ أمس؟' },
      { en: 'Will they come tomorrow?', ar: 'هل سيأتون غداً؟' }
    ]
  }
];

const speakingData = [
  { en: 'How are you doing today?', ar: 'كيف حالك اليوم؟' },
  { en: 'Nice to meet you!', ar: 'يسعدني لقاؤك!' },
  { en: 'Could you repeat that, please?', ar: 'هل يمكنك تكرار ذلك، من فضلك؟' },
  { en: 'I don\'t understand. Can you explain?', ar: 'لا أفهم. هل يمكنك الشرح؟' },
  { en: 'What time is it?', ar: 'كم الساعة؟' },
  { en: 'Where is the nearest pharmacy?', ar: 'أين أقرب صيدلية؟' },
  { en: 'How much does this cost?', ar: 'بكم هذا؟' },
  { en: 'I\'m looking for the train station.', ar: 'أبحث عن محطة القطار.' },
  { en: 'Can I have the menu, please?', ar: 'هل يمكنني رؤية القائمة، من فضلك؟' },
  { en: 'I would like to order...', ar: 'أود أن أطلب...' },
  { en: 'Excuse me, could you help me?', ar: 'عذراً، هل يمكنك مساعدتي؟' },
  { en: 'That\'s a great idea!', ar: 'هذه فكرة رائعة!' },
  { en: 'I agree with you completely.', ar: 'أوافقك الرأي تماماً.' },
  { en: 'Let me think about it.', ar: 'دعني أفكر في ذلك.' },
  { en: 'Have a nice day!', ar: 'أتمنى لك يوماً سعيداً!' },
  { en: 'I\'ll get back to you soon.', ar: 'سأعود إليك قريباً.' }
];

// ===== STATE =====
let currentPage = 'home';
let currentQuestion = 0;
let quizScore = 0;
let fcIndex = 0;
let fcKnown = 0;
let fcFlipped = false;
let shuffledQuiz = [];
let shuffledFC = [];

// ===== UTILS =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.getElementById('lesson-detail').style.display = 'none';

  const el = document.getElementById(page);
  if (el) { el.classList.add('active'); currentPage = page; }

  document.querySelectorAll('.nav-links button').forEach(b => {
    if (b.getAttribute('onclick')?.includes(`'${page}'`)) b.classList.add('active');
  });

  if (page === 'flashcards') startFlashcards();
  if (page === 'quiz') startQuiz();
  if (page === 'grammar') renderGrammar();
  if (page === 'speaking') renderSpeaking();
  if (page === 'lessons') renderLessons();
}

// ===== LESSONS =====
function renderLessons() {
  const grid = document.getElementById('lessons-grid');
  grid.innerHTML = lessons.map(l => `
    <div class="lesson-card" onclick="openLesson(${l.id})">
      <div class="lesson-icon">${l.icon}</div>
      <span class="lesson-level level-${l.level}">${l.levelText}</span>
      <div class="lesson-title">${l.title}</div>
      <div class="lesson-desc">${l.desc}</div>
      <div class="lesson-meta">
        <span>⏱ ${l.duration}</span>
        <span>📝 ${l.words} كلمة</span>
      </div>
    </div>
  `).join('');
}

function openLesson(id) {
  const lesson = lessons.find(l => l.id === id);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const detail = document.getElementById('lesson-detail');
  detail.style.display = 'block';
  detail.classList.add('active');
  document.getElementById('detail-title').textContent = lesson.icon + ' ' + lesson.title;

  document.getElementById('lesson-content-wrap').innerHTML = `
    <p style="color:var(--text2);margin-bottom:1.5rem;line-height:1.8;">${lesson.desc}</p>
    <h3 style="font-family:'Playfair Display',serif;color:var(--gold);margin-bottom:1rem;font-size:1.3rem;">المفردات الأساسية</h3>
    <div class="vocab-grid">
      ${lesson.vocab.map(v => `
        <div class="vocab-card" onclick="speakWord('${v.en}')">
          <div class="vocab-en">${v.en}</div>
          <div class="vocab-ar">${v.ar}</div>
          <div class="vocab-pronunciation">${v.ph}</div>
        </div>
      `).join('')}
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;margin-top:2rem;">
      <h3 style="font-family:'Playfair Display',serif;color:var(--gold);margin-bottom:1rem;">💡 نصيحة</h3>
      <p style="color:var(--text2);line-height:1.8;">اضغط على أي بطاقة لسماع نطق الكلمة. حاول تكرار كل كلمة بصوت عالٍ 3 مرات لتثبيتها في ذاكرتك.</p>
    </div>
    <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap;">
      <button class="btn-primary" onclick="showPage('flashcards')">تدرّب على البطاقات 🃏</button>
      <button class="btn-outline" onclick="showPage('quiz')">اختبر نفسك 🎯</button>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLessons() {
  document.getElementById('lesson-detail').style.display = 'none';
  showPage('lessons');
}

function speakWord(word) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = 0.9;
    speechSynthesis.speak(u);
    showToast('🔊 ' + word);
  } else {
    showToast('🔊 ' + word);
  }
}

// ===== FLASHCARDS =====
function startFlashcards() {
  shuffledFC = [...flashcardData].sort(() => Math.random() - 0.5);
  fcIndex = 0; fcKnown = 0; fcFlipped = false;
  document.getElementById('fc-done').style.display = 'none';
  document.getElementById('fc-controls').style.display = 'none';
  document.getElementById('flashcard').classList.remove('flipped');
  updateFC();
}

function updateFC() {
  if (fcIndex >= shuffledFC.length) {
    document.getElementById('fc-done').style.display = 'block';
    document.getElementById('flashcard-wrap') && (document.querySelector('.flashcard-wrap').style.display = 'none');
    document.querySelector('.fc-counter').style.display = 'none';
    return;
  }
  const card = shuffledFC[fcIndex];
  document.getElementById('fc-word').textContent = card.en;
  document.getElementById('fc-phonetic').textContent = card.ph;
  document.getElementById('fc-translation').textContent = card.ar;
  document.getElementById('fc-example').textContent = card.ex;
  document.getElementById('fc-counter').textContent = `بطاقة ${fcIndex + 1} من ${shuffledFC.length} • عرفتُ: ${fcKnown}`;
  document.querySelector('.flashcard-wrap').style.display = 'block';
  document.querySelector('.fc-counter').style.display = 'block';
  fcFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('fc-controls').style.display = 'none';
}

function flipCard() {
  if (!fcFlipped) {
    fcFlipped = true;
    document.getElementById('flashcard').classList.add('flipped');
    setTimeout(() => { document.getElementById('fc-controls').style.display = 'flex'; }, 400);
    speakWord(shuffledFC[fcIndex].en);
  }
}

function nextCard(known) {
  if (known) { fcKnown++; showToast('✓ ممتاز!'); }
  else showToast('🔁 سنراجعها لاحقاً');
  fcIndex++;
  updateFC();
}

// ===== QUIZ =====
function startQuiz() {
  shuffledQuiz = [...quizQuestions].sort(() => Math.random() - 0.5);
  currentQuestion = 0; quizScore = 0;
  renderQuestion();
}

function renderQuestion() {
  const progress = (currentQuestion / shuffledQuiz.length) * 100;
  document.getElementById('quiz-progress').style.width = progress + '%';

  if (currentQuestion >= shuffledQuiz.length) {
    const pct = Math.round((quizScore / shuffledQuiz.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '💪';
    const msg = pct >= 80 ? 'ممتاز! أنت متميز!' : pct >= 60 ? 'جيد! استمر في التعلم' : 'لا بأس! التكرار هو المفتاح';
    document.getElementById('quiz-card').innerHTML = `
      <div class="quiz-result">
        <div class="quiz-emoji">${emoji}</div>
        <div class="quiz-score">${pct}%</div>
        <div class="quiz-score-label">${quizScore} من ${shuffledQuiz.length} إجابة صحيحة</div>
        <p style="color:var(--text2);margin-bottom:2rem;">${msg}</p>
        <button class="btn-primary" onclick="startQuiz()">إعادة الاختبار</button>
      </div>
    `;
    return;
  }

  const q = shuffledQuiz[currentQuestion];
  document.getElementById('quiz-card').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-q-num">سؤال ${currentQuestion + 1} من ${shuffledQuiz.length}</div>
      <div class="quiz-question">ما معنى كلمة <span class="en-word">"${q.word}"</span>؟</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" onclick="answerQuiz(${i}, ${q.correct}, this)">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
}

function answerQuiz(chosen, correct, btn) {
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(b => b.disabled = true);
  opts[correct].classList.add('correct');
  if (chosen !== correct) { btn.classList.add('wrong'); }
  else { quizScore++; showToast('✓ إجابة صحيحة!'); }

  setTimeout(() => { currentQuestion++; renderQuestion(); }, 1200);
}

// ===== GRAMMAR =====
function renderGrammar() {
  const tabsEl = document.getElementById('grammar-tabs');
  const contentsEl = document.getElementById('grammar-contents');
  if (tabsEl.innerHTML) return;

  tabsEl.innerHTML = grammarData.map((g, i) => `
    <button class="grammar-tab ${i === 0 ? 'active' : ''}" onclick="showGrammar('${g.id}', this)">${g.label}</button>
  `).join('');

  contentsEl.innerHTML = grammarData.map((g, i) => `
    <div class="grammar-content ${i === 0 ? 'active' : ''}" id="grammar-${g.id}">
      <div class="grammar-box">
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
        <div class="formula">${g.formula}</div>
        <ul class="examples-list">
          ${g.examples.map(ex => `<li>${ex.en} <span>← ${ex.ar}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function showGrammar(id, btn) {
  document.querySelectorAll('.grammar-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.grammar-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('grammar-' + id).classList.add('active');
  btn.classList.add('active');
}

// ===== SPEAKING =====
function renderSpeaking() {
  const list = document.getElementById('speaking-list');
  if (list.innerHTML) return;
  list.innerHTML = speakingData.map(s => `
    <div class="sentence-card">
      <div class="sentence-en">${s.en}</div>
      <div class="sentence-ar">${s.ar}</div>
      <button class="play-btn" onclick="speakWord('${s.en.replace(/'/g, "\\'")}')">🔊 استمع للنطق</button>
    </div>
  `).join('');
}

// ===== INIT =====
renderLessons();
