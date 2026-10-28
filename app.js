'use strict';

(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const english = {};
  $$('[data-i18n]').forEach(el => { english[el.dataset.i18n] = el.textContent; });
  $$('[data-i18n-html]').forEach(el => { english[el.dataset.i18nHtml] = el.innerHTML; });
  $$('[data-i18n-aria]').forEach(el => { english[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  $$('[data-i18n-alt]').forEach(el => { english[el.dataset.i18nAlt] = el.alt; });
  Object.assign(english, {
    footerDescription: 'Your Online Arabian Marketplace.\nRooted in culture. Connected by community.',
    androidTitle: 'alhudahuda for Android', iosTitle: 'alhudahuda for iPhone',
    androidPending: 'The official Google Play download link is not available on this website yet. It will be added here when it is ready.',
    iosPending: 'The official App Store download link is not available on this website yet. It will be added here when it is ready.',
    marketCurrent: 'Prepare for onboarding in {market}. Confirm local service coverage with the team.',
    marketUpcoming: '{market} is coming soon. Use this checklist to prepare; onboarding and launch dates are not yet confirmed.',
    progress: '{done} of {total} ready', openMenu: 'Open menu', closeMenu: 'Close menu',
    readyLinks: 'Follow the official store link for your device. Availability may vary by market.',
    partialLinks: 'Some download links are still being prepared. Select your device to check availability.',
    readyFaq: 'Choose Google Play for Android or the App Store for iPhone in the app section. Store availability can vary by market. Follow the installation instructions shared by our team during onboarding.',
    brandHome: 'alhudahuda home',
    pageTitle: 'alhudahuda | Your Online Arabian Marketplace',
    metaDescription: 'Discover alhudahuda, your online Arabian marketplace. Explore the app, our markets in Malaysia and Nigeria, and onboarding for customers, merchants and delivery partners. Oman and Indonesia are coming soon.'
  });
  const arabic = {
    skip:'انتقل إلى المحتوى', mainNav:'التنقل الرئيسي', mobileNav:'قائمة الهاتف',
    navDiscover:'اكتشف', navHow:'كيف يعمل', navMarkets:'أسواقنا', navJoin:'انضم إلينا', navFaq:'الأسئلة الشائعة',
    getApp:'احصل على التطبيق', openMenu:'افتح القائمة', closeMenu:'أغلق القائمة',
    heroEyebrow:'عالم مألوف. صلة جديدة.',
    heroTitle:'سوقك العربي<br><em>عبر الإنترنت.</em>',
    heroDescription:'نكهات وعطور ومنتجات تحبّها. اكتشف المتاجر والمنتجات العربية، وتواصل مع التجّار المحليين، كل ذلك عبر تطبيق alhudahuda.',
    joinCommunity:'انضم إلى مجتمعنا', heroAvailable:'في ماليزيا ونيجيريا. وقريباً في أسواق جديدة.',
    heroAlt:'قهوة عربية وتمر وعطر عود وقماش كتاني تحت ضوء الشمس الدافئ',
    photoTag:'متجذّر في الثقافة.', photoTitle:'أقرب إلى ما تألفه.', photoText:'اختيارات عربية ترافقك أينما أخذتك الحياة.',
    heroSide:'ثقافة · مجتمع · تواصل',
    benefitLocal:'اكتشف التجّار المحليين', benefitMobile:'لأجهزة أندرويد وآيفون', benefitDelivery:'من الاكتشاف إلى التوصيل', benefitCommunity:'مجتمع يتجاوز الحدود',
    discoverEyebrow:'عالم alhudahuda', discoverTitle:'اختيارات مألوفة.<br><em>واكتشافات جديدة.</em>',
    discoverDescription:'أكثر من مجرد مكان للبحث عن المنتجات. مساحة تجمعك بالنكهات والتقاليد والمتاجر المستقلة التي تمنح مجتمعك شعور الألفة والانتماء.',
    foodTitle:'الطعام والمطاعم', foodText:'من الأطباق المألوفة إلى وجبتك العربية المفضلة القادمة.', foodTag:'مذاق الألفة',
    perfumeTitle:'العود والعطور', perfumeText:'اكتشف روائح مميزة وعالم صناعة العطور العربية.', perfumeTag:'أثر يدوم',
    fashionTitle:'الأزياء والبوتيكات', fashionText:'اكتشف أسلوبك وتفاصيل تعكس الذوق والتقاليد الأصيلة.', fashionTag:'أناقة كل يوم',
    pantryTitle:'البقالة والمزيد', pantryText:'مكونات مألوفة واحتياجات يومية أصبحت أقرب إليك.', pantryTag:'تفاصيل الحياة اليومية',
    categoryNote:'اكتشف المتاجر والمنتجات المتاحة في التطبيق. تختلف الخيارات بحسب الموقع.',
    phoneAria:'تصوّر توضيحي لتجربة تطبيق alhudahuda', phoneGreeting:'أقرب إلى ما تألفه.', phoneLocal:'اكتشف اختياراتك المحلية المفضلة',
    phoneFeatureSmall:'شيء مألوف.', phoneFeatureBig:'وشيء مميّز.', phoneFood:'طعام', phoneOud:'عود', phoneStyle:'أزياء',
    phoneCommunityTitle:'مجتمعك المحلي', phoneCommunityText:'اكتشف المتاجر وابنِ علاقات جديدة.', previewCaption:'تصوّر توضيحي لتجربة التطبيق',
    howEyebrow:'تطبيق واحد. عالم من الخيارات.', howTitle:'من هاتفك،<br><em>إلى باب منزلك.</em>',
    howDescription:'يبدأ اكتشافك القادم مع alhudahuda. تصفّح وتواصل واطلب عبر تطبيقنا على الهاتف.',
    step1Title:'ابدأ رحلتك معنا', step1Text:'احصل على التطبيق وسجّل باستخدام رقم هاتفك. تصبح دولة التسجيل سوقك الافتراضي.',
    step2Title:'اكتشف ما تحب', step2Text:'تصفّح المتاجر والمنتجات المتاحة في منطقتك، من الطعام العربي إلى العطور والأزياء.',
    step3Title:'اطلب عبر التطبيق', step3Text:'اطّلع على خيارات الدفع والتوصيل المتاحة في سوقك، ثم تابع طلبك عبر التطبيق.',
    findApp:'اكتشف التطبيق', howNote:'يعتمد توفر الطلب والدفع والتوصيل على موقعك ومرحلة إطلاق الخدمة.',
    marketsEyebrow:'جذور محلية. آفاق أوسع.', marketsTitle:'مجتمع ينمو.<br><em>وصلة تجمعنا.</em>',
    marketsDescription:'بدأت رحلتنا في ماليزيا ونيجيريا، وتأتي عُمان وإندونيسيا في المرحلة القادمة. يضيف كل سوق متاجره المحلية ومجتمعه إلى alhudahuda.',
    currentMarket:'سوق حالي', comingSoon:'قريباً', onTheHorizon:'خطوتنا القادمة',
    malaysia:'ماليزيا', nigeria:'نيجيريا', oman:'عُمان', indonesia:'إندونيسيا', omanSoon:'عُمان — قريباً', indonesiaSoon:'إندونيسيا — قريباً',
    malaysiaText:'اختيارات عربية تتصل بالحياة المحلية.', nigeriaText:'اكتشافات جديدة ومجتمع أقرب إليك.',
    omanText:'الفصل القادم من حكايتنا العربية.', indonesiaText:'روابط جديدة عبر آفاق أوسع.',
    exploreOnboarding:'دليل الانضمام', marketNote:'تختلف تغطية الخدمة وإمكانية الانضمام بحسب المدينة. لم تُعلن بعد مواعيد إطلاق الأسواق القادمة.',
    joinEyebrow:'لك مكان بيننا', joinTitle:'لننمو <em>معاً.</em>',
    joinDescription:'اكتشف دورك في مجتمع alhudahuda واستعد لخطوات الانضمام.', chooseRole:'اختر دورك',
    shopper:'عميل', merchant:'تاجر', delivery:'شريك توصيل', checklistButton:'قائمة الاستعداد للانضمام',
    joinNote:'تُحدَّد خطوات الانضمام وفقاً لسوقك. سيؤكد فريقنا المتطلبات والخطوات التالية.',
    faqEyebrow:'مزيد من الوضوح', faqTitle:'أسئلة مهمة.<br><em>وإجابات بسيطة.</em>',
    faqDescription:'معلومات تساعدك قبل الانضمام إلى مجتمع alhudahuda.', onboardingGuide:'اطّلع على دليل الانضمام',
    faq1Q:'ما هو alhudahuda؟',
    faq1A:'alhudahuda سوق عربي عبر الإنترنت يجمع العملاء والتجّار وشركاء التوصيل من خلال تطبيق على الهاتف. يساعدك على اكتشاف المتاجر والمنتجات العربية واختياراتك اليومية في سوقك المحلي.',
    faq2Q:'هل يمكنني التسوّق عبر هذا الموقع؟',
    faq2A:'يتم التسوّق من خلال تطبيق alhudahuda على أندرويد وآيفون. يعرّفك هذا الموقع بمجتمعنا، ويوضح لك كيفية البدء، ويساعدك على الاستعداد للانضمام.',
    faq3Q:'أين يتوفر alhudahuda؟',
    faq3A:'أسواقنا الحالية هي ماليزيا ونيجيريا. تعتمد تغطية الخدمة وإمكانية الطلب والانضمام على مدينتك ومرحلة الإطلاق. عُمان وإندونيسيا قريباً، ولم تُعلن مواعيد الإطلاق بعد.',
    faq4Q:'كيف أحصل على التطبيق؟',
    faq4A:'استخدم خيارات أندرويد وآيفون في قسم التطبيق. ستُضاف روابط المتاجر الرسمية عند توفرها. إذا كنت تشارك في جلسة انضمام، فاتبع تعليمات التثبيت التي يقدمها فريق alhudahuda.',
    faq5Q:'كيف ينضم التجّار وشركاء التوصيل؟',
    faq5A:'اختر دورك من قسم «انضم إلينا» وافتح قائمة الاستعداد. جهّز معلومات متجرك أو بيانات التوصيل، ثم اتبع خطوات التسجيل والتحقق التي يقدمها فريق alhudahuda لسوقك.',
    faq6Q:'ما خيارات الدفع والتوصيل المتاحة؟',
    faq6A:'تختلف طرق الدفع وإمكانية إتمام الطلب وتغطية التوصيل والرسوم بحسب السوق. راجع الخيارات المعروضة في التطبيق وأكّد التفاصيل خلال الانضمام. قد تكون بعض الخدمات في مرحلة تجريبية.',
    faq7Q:'أين أحصل على المساعدة أثناء الانضمام؟',
    faq7A:'اطلب من ممثل فريق alhudahuda أثناء الانضمام قناة الدعم الرسمية لسوقك. يمكن للفريق مساعدتك في الوصول إلى التطبيق والتسجيل وإجراءات التحقق.',
    downloadEyebrow:'اكتشافك القادم أقرب مما تتصور', downloadTitle:'سوق متكامل.<br><em>في متناول يدك.</em>',
    downloadDescription:'خذ معك شيئاً من الألفة. ابدأ رحلتك مع alhudahuda على أندرويد أو آيفون.',
    androidApp:'تطبيق أندرويد', iosApp:'تطبيق آيفون', storePending:'ستُضاف روابط التنزيل الرسمية هنا عند توفرها.',
    sealText:'أقرب إلى ما تحب.', footerDescription:'سوقك العربي عبر الإنترنت.\nمتجذّر في الثقافة. يجمعه المجتمع.',
    footerExplore:'اكتشف', footerCommunity:'انضم إلى المجتمع', forCustomers:'للعملاء', forMerchants:'للتجّار', forDelivery:'لشركاء التوصيل',
    footerHelp:'معلومات مفيدة', privacy:'خصوصية الموقع', copyright:'© 2026 alhudahuda. جميع الحقوق محفوظة.', backTop:'إلى الأعلى',
    closeDialog:'أغلق النافذة', checklistEyebrow:'تبدأ رحلتك القادمة من هنا', checklistTitle:'استعد للانضمام.',
    checklistDescription:'دليل بسيط للاستعداد للانضمام إلى alhudahuda.', yourRole:'دورك', yourMarket:'سوقك',
    checklistLocal:'للاستعداد فقط؛ هذه ليست استمارة تسجيل.',
    checklistDisclaimer:'سيؤكد فريقنا الأهلية والمستندات المطلوبة وتوفر الخدمة في سوقك. اختيار عناصر القائمة لا يرسل أي معلومات ولا يُكمل التسجيل.',
    printChecklist:'اطبع القائمة', done:'تم', appAccess:'الوصول إلى التطبيق',
    downloadOnboarding:'تشارك في جلسة انضمام؟ اتبع تعليمات التثبيت التي يشاركها فريق alhudahuda.', prepareOnboarding:'استعد للانضمام',
    privacyEyebrow:'حول هذا الموقع',
    privacy1:'يعرّف هذا الموقع بمنصة alhudahuda ويوفر معلومات حول الانضمام. لا يجمع بيانات التسجيل، ولا يستقبل الطلبات، ولا يعالج المدفوعات.',
    privacy2:'يُحفظ اختيار اللغة في متصفحك ليتذكر الموقع العربية أو الإنجليزية عند زيارتك التالية. اختيارات قائمة الاستعداد مؤقتة ولا تُرسل إلى فريقنا.',
    privacy3:'لا يستخدم هذا الموقع أدوات تتبع للإعلانات أو التحليلات. قد تعالج خدمة الاستضافة معلومات الاتصال الأساسية لتشغيل الموقع وحمايته.',
    privacy4:'تطبيق الهاتف خدمة مستقلة. راجع السياسات والشروط المعروضة في التطبيق قبل التسجيل أو استخدام خدماته.',
    close:'إغلاق', androidTitle:'alhudahuda لأندرويد', iosTitle:'alhudahuda لآيفون',
    androidPending:'رابط التنزيل الرسمي من Google Play غير متاح على هذا الموقع بعد. سيُضاف هنا فور جاهزيته.',
    iosPending:'رابط التنزيل الرسمي من App Store غير متاح على هذا الموقع بعد. سيُضاف هنا فور جاهزيته.',
    marketCurrent:'استعد للانضمام في {market}. أكّد تغطية الخدمة المحلية مع الفريق.',
    marketUpcoming:'{market} قريباً. استخدم هذه القائمة للاستعداد؛ لم تُؤكد بعد مواعيد الانضمام والإطلاق.',
    progress:'تم تجهيز {done} من {total}', readyLinks:'اتبع رابط المتجر الرسمي لجهازك. قد يختلف التوفر بحسب السوق.',
    partialLinks:'بعض روابط التنزيل لا تزال قيد الإعداد. اختر جهازك للتحقق من التوفر.',
    readyFaq:'اختر Google Play لأندرويد أو App Store لآيفون من قسم التطبيق. قد يختلف توفر التطبيق بحسب السوق. اتبع تعليمات التثبيت التي يشاركها فريقنا خلال الانضمام.',
    brandHome:'الصفحة الرئيسية لمنصة alhudahuda', pageTitle:'alhudahuda | سوقك العربي عبر الإنترنت',
    metaDescription:'اكتشف alhudahuda، سوقك العربي عبر الإنترنت. تعرّف على التطبيق وأسواقنا في ماليزيا ونيجيريا وخطوات الانضمام للعملاء والتجّار وشركاء التوصيل. عُمان وإندونيسيا قريباً.'
  };
  const dictionaries = { en: english, ar: arabic };
  const roles = {
    en: {
      shopper: {
        kicker:'For the curious. And the familiar.', title:'Find a little more of what you love.',
        description:'Discover Arabian favourites and local shops in one place. Get ready to explore your community through the alhudahuda app.',
        steps:[['Set up your account','Have your phone number ready and register in your home market.'],['Discover your local shops','Explore the merchants and products available in your area.'],['Check your options','Review payment and delivery availability before placing an order.']],
        checklist:['Have an Android phone or iPhone and an accessible mobile number ready.','Confirm the country phone code for your registration market.','Follow the official app installation instructions from the onboarding team.','Prepare your profile and delivery address details for registration in the app.','Review local availability, payment options and delivery details with the team.']
      },
      merchant: {
        kicker:'For the businesses that bring us together.', title:'Give your shop a new way to connect.',
        description:'From restaurants and perfume shops to boutiques and everyday essentials, prepare to introduce your business to the alhudahuda community.',
        steps:[['Introduce your business','Prepare your business name, contact details and operating location.'],['Prepare your catalogue','Gather clear product photos, descriptions, prices and availability.'],['Complete onboarding','Our team will explain verification, order handling and the next steps for your market.']],
        checklist:['Prepare your business name, operating address and primary contact details.','Gather product or menu photos, descriptions, prices and availability.','Have your business documents ready for review if requested by the team.','Prepare to discuss order handling, fulfilment and delivery arrangements.','Confirm verification, fees and settlement arrangements with the onboarding team before joining.']
      },
      delivery: {
        kicker:'For the people who keep communities moving.', title:'Be the connection that brings it home.',
        description:'Help connect local merchants and customers. Get ready to explore delivery opportunities as alhudahuda grows in your market.',
        steps:[['Tell us about your area','Prepare your contact details, location and the areas you can serve.'],['Prepare for verification','Our team will explain the identity and vehicle information needed for your market.'],['Learn the delivery process','Understand collection, delivery, customer communication and support before starting.']],
        checklist:['Have your contact details and a smartphone ready.','Identify your preferred service area and availability.','Prepare identity and vehicle information, if applicable, for the team to review.','Confirm local eligibility, documentation and delivery requirements with the team.','Review the delivery process, payment arrangements and support procedures before starting.']
      }
    },
    ar: {
      shopper: {
        kicker:'لمن يحب الاكتشاف وما يألفه.', title:'اكتشف المزيد مما تحب.',
        description:'اختيارات عربية ومتاجر محلية في مكان واحد. استعد لاستكشاف مجتمعك عبر تطبيق alhudahuda.',
        steps:[['أنشئ حسابك','جهّز رقم هاتفك وسجّل في سوقك المحلي.'],['اكتشف المتاجر القريبة','تصفّح التجّار والمنتجات المتاحة في منطقتك.'],['راجع خياراتك','تحقق من توفر الدفع والتوصيل قبل تقديم الطلب.']],
        checklist:['جهّز هاتف أندرويد أو آيفون ورقم هاتف يمكنك الوصول إليه.','تأكد من رمز الاتصال الخاص بدولة التسجيل.','اتبع تعليمات تثبيت التطبيق الرسمية التي يقدمها فريق الانضمام.','جهّز بيانات ملفك الشخصي وعنوان التوصيل للتسجيل في التطبيق.','راجع توفر الخدمة وخيارات الدفع وتفاصيل التوصيل المحلية مع الفريق.']
      },
      merchant: {
        kicker:'للمتاجر التي تجمعنا.', title:'امنح متجرك طريقة جديدة للتواصل.',
        description:'من المطاعم ومتاجر العطور إلى البوتيكات والاحتياجات اليومية، استعد لتقديم نشاطك التجاري إلى مجتمع alhudahuda.',
        steps:[['عرّف بنشاطك التجاري','جهّز اسم النشاط وبيانات التواصل وموقع العمل.'],['جهّز قائمة منتجاتك','اجمع صوراً واضحة للمنتجات وأوصافها وأسعارها ومدى توفرها.'],['أكمل خطوات الانضمام','سيوضح فريقنا إجراءات التحقق وإدارة الطلبات والخطوات التالية في سوقك.']],
        checklist:['جهّز اسم النشاط التجاري وعنوانه وبيانات التواصل الأساسية.','اجمع صور المنتجات أو قائمة الطعام مع الأوصاف والأسعار ومدى التوفر.','جهّز مستندات نشاطك التجاري للمراجعة إذا طلبها الفريق.','استعد لمناقشة إدارة الطلبات وتجهيزها وترتيبات التوصيل.','أكّد إجراءات التحقق والرسوم وترتيبات التسوية مع فريق الانضمام قبل البدء.']
      },
      delivery: {
        kicker:'لمن يصلون المجتمعات ببعضها.', title:'كن حلقة الوصل حتى باب المنزل.',
        description:'ساهم في ربط التجّار المحليين بالعملاء. استعد لاكتشاف فرص التوصيل مع نمو alhudahuda في سوقك.',
        steps:[['عرّف بمنطقة عملك','جهّز بيانات التواصل وموقعك والمناطق التي تستطيع خدمتها.'],['استعد للتحقق','سيوضح فريقنا بيانات الهوية والمركبة المطلوبة في سوقك.'],['تعرّف على خطوات التوصيل','افهم إجراءات الاستلام والتسليم والتواصل مع العميل والدعم قبل البدء.']],
        checklist:['جهّز بيانات التواصل وهاتفاً ذكياً.','حدّد منطقة الخدمة المفضلة وأوقات تفرّغك.','جهّز بيانات الهوية والمركبة، إن وجدت، لمراجعتها من الفريق.','أكّد الأهلية المحلية والمستندات ومتطلبات التوصيل مع الفريق.','راجع إجراءات التوصيل وترتيبات الدفع والدعم قبل البدء.']
      }
    }
  };

  let language = 'en';
  let activeRole = 'shopper';
  let selectedMarket = 'MY';
  let selectedStore = 'android';
  let lastFocus = null;
  const completed = new Set();
  const countries = { MY:'malaysia', NG:'nigeria', OM:'oman', ID:'indonesia' };
  const t = key => dictionaries[language][key] ?? english[key] ?? key;
  const interpolate = (key, values) => Object.entries(values).reduce((value,[name,replacement]) => value.replaceAll(`{${name}}`,replacement),t(key));

  function setLanguage(next, persist = true) {
    language = next === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    $$('.brand').forEach(el => el.setAttribute('aria-label',t('brandHome')));
    const toggle = $('#language-toggle');
    toggle.querySelector('span').textContent = language === 'en' ? 'العربية' : 'English';
    toggle.querySelector('span').lang = language === 'en' ? 'ar' : 'en';
    toggle.setAttribute('aria-label',language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
    $$('[data-lang]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.lang === language)));
    document.title = t('pageTitle');
    $('meta[name="description"]').content = t('metaDescription');
    $('meta[property="og:title"]').content = t('pageTitle');
    $('meta[property="og:description"]').content = t('metaDescription');
    $('#menu-toggle').setAttribute('aria-label',t($('#mobile-nav').hidden ? 'openMenu' : 'closeMenu'));
    renderRole();
    renderChecklist();
    renderDownloadDialog();
    updateStoreStatus();
    if (persist) {
      try { localStorage.setItem('alhudahuda-language',language); } catch {}
      try { const url = new URL(location.href); url.searchParams.set('lang',language); history.replaceState(null,'',url); } catch {}
    }
  }

  function renderRole() {
    const content = roles[language][activeRole];
    $('#role-kicker').textContent = content.kicker;
    $('#role-title').textContent = content.title;
    $('#role-description').textContent = content.description;
    $('#role-steps').replaceChildren(...content.steps.map(([title,text], index) => {
      const li = document.createElement('li');
      const num = document.createElement('span'); num.className = 'role-step-number'; num.textContent = String(index+1).padStart(2,'0');
      const body = document.createElement('div'); const heading = document.createElement('h4'); heading.textContent = title;
      const paragraph = document.createElement('p'); paragraph.textContent = text;
      body.append(heading,paragraph); li.append(num,body); return li;
    }));
    $$('.role-tabs button').forEach(button => {
      const selected = button.dataset.role === activeRole;
      button.setAttribute('aria-selected',String(selected)); button.tabIndex = selected ? 0 : -1;
    });
    $('#role-panel').setAttribute('aria-labelledby',`tab-${activeRole}`);
  }

  function setRole(role) {
    if (!roles.en[role]) return;
    activeRole = role;
    $('#checklist-role').value = role;
    renderRole(); renderChecklist();
  }

  function checklistKey(index) { return `${activeRole}:${selectedMarket}:${index}`; }
  function renderChecklist() {
    $('#checklist-role').value = activeRole;
    $('#checklist-market').value = selectedMarket;
    const isCurrent = selectedMarket === 'MY' || selectedMarket === 'NG';
    $('#checklist-market-note').textContent = interpolate(isCurrent ? 'marketCurrent' : 'marketUpcoming',{market:t(countries[selectedMarket])});
    $('#checklist-items').replaceChildren(...roles[language][activeRole].checklist.map((text,index) => {
      const label = document.createElement('label');
      const input = document.createElement('input'); input.type = 'checkbox'; input.checked = completed.has(checklistKey(index));
      input.addEventListener('change',() => { input.checked ? completed.add(checklistKey(index)) : completed.delete(checklistKey(index)); updateProgress(); });
      const span = document.createElement('span'); span.textContent = text; label.append(input,span); return label;
    }));
    updateProgress();
  }

  function updateProgress() {
    const total = roles[language][activeRole].checklist.length;
    const count = Array.from({length:total},(_,i) => completed.has(checklistKey(i))).filter(Boolean).length;
    const formatter = new Intl.NumberFormat(language === 'ar' ? 'ar' : 'en');
    $('#checklist-progress').textContent = interpolate('progress',{done:formatter.format(count),total:formatter.format(total)});
  }

  function openDialog(id) {
    const target = $(id);
    lastFocus = document.activeElement;
    target.showModal();
    document.body.classList.add('modal-open');
  }
  function closeDialog(dialog) { dialog.close(); }
  $$('.dialog').forEach(dialog => {
    dialog.addEventListener('close',() => { if (!$('.dialog[open]')) document.body.classList.remove('modal-open'); if (lastFocus && lastFocus.isConnected) lastFocus.focus({preventScroll:true}); });
    dialog.addEventListener('click',event => {
      if(event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
    });
  });
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click',() => closeDialog(button.closest('dialog'))));

  function storeUrl(platform) {
    const value = window.ALHUDAHUDA_CONFIG?.[platform === 'android' ? 'androidUrl' : 'iosUrl'];
    if (!value) return null;
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
  }
  function updateStoreStatus() {
    const count = Number(Boolean(storeUrl('android'))) + Number(Boolean(storeUrl('ios')));
    $('#store-status span:last-child').textContent = t(count === 2 ? 'readyLinks' : count === 1 ? 'partialLinks' : 'storePending');
    if(count) $('[data-i18n="faq4A"]').textContent = t('readyFaq');
    $$('[data-store]').forEach(button => button.setAttribute('aria-label',`${button.dataset.store === 'android' ? 'Google Play' : 'App Store'} — ${t(storeUrl(button.dataset.store) ? 'getApp' : 'appAccess')}`));
  }
  function renderDownloadDialog() {
    $('#download-dialog-title').textContent = t(selectedStore === 'android' ? 'androidTitle' : 'iosTitle');
    $('#download-dialog-description').textContent = t(selectedStore === 'android' ? 'androidPending' : 'iosPending');
  }

  $('#language-toggle').addEventListener('click',() => setLanguage(language === 'en' ? 'ar' : 'en'));
  $$('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
  $('#menu-toggle').addEventListener('click',() => {
    const nav = $('#mobile-nav'); nav.hidden = !nav.hidden;
    $('#menu-toggle').setAttribute('aria-expanded',String(!nav.hidden));
    $('#menu-toggle').setAttribute('aria-label',t(nav.hidden ? 'openMenu' : 'closeMenu'));
    $('#menu-toggle use').setAttribute('href',nav.hidden ? '#i-menu' : '#i-close');
  });
  function closeMenu() {
    $('#mobile-nav').hidden = true; $('#menu-toggle').setAttribute('aria-expanded','false');
    $('#menu-toggle').setAttribute('aria-label',t('openMenu')); $('#menu-toggle use').setAttribute('href','#i-menu');
  }
  $$('#mobile-nav a').forEach(link => link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => {
    if(event.key === 'Escape' && !$('#mobile-nav').hidden) { closeMenu(); $('#menu-toggle').focus(); }
  });
  const desktopMedia = matchMedia('(min-width: 1061px)');
  desktopMedia.addEventListener('change',event => { if (event.matches) closeMenu(); });
  $$('.role-tabs button').forEach(button => {
    button.addEventListener('click',() => setRole(button.dataset.role));
    button.addEventListener('keydown',event => {
      const keys = ['ArrowRight','ArrowLeft','Home','End']; if (!keys.includes(event.key)) return;
      event.preventDefault();
      const tabs = $$('.role-tabs button'); const current = tabs.indexOf(button);
      const direction = language === 'ar' ? -1 : 1;
      let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (current + (event.key === 'ArrowRight' ? direction : -direction) + tabs.length) % tabs.length;
      setRole(tabs[next].dataset.role); tabs[next].focus();
    });
  });
  $$('[data-select-role]').forEach(link => link.addEventListener('click',() => setRole(link.dataset.selectRole)));
  $$('[data-market]').forEach(link => link.addEventListener('click',() => { selectedMarket = link.dataset.market; renderChecklist(); }));
  $('#open-checklist').addEventListener('click',() => { renderChecklist(); openDialog('#checklist-dialog'); });
  $('#checklist-role').addEventListener('change',event => setRole(event.target.value));
  $('#checklist-market').addEventListener('change',event => { selectedMarket = event.target.value; renderChecklist(); });
  $('#checklist-print').addEventListener('click',() => window.print());
  $('#privacy-button').addEventListener('click',() => openDialog('#privacy-dialog'));
  $$('[data-store]').forEach(button => button.addEventListener('click',() => {
    selectedStore = button.dataset.store;
    const url = storeUrl(selectedStore);
    if (url) { window.open(url,'_blank','noopener,noreferrer'); return; }
    renderDownloadDialog(); openDialog('#download-dialog');
  }));
  $('#download-to-guide').addEventListener('click',() => {
    lastFocus = $('#open-checklist');
    closeDialog($('#download-dialog'));
    $('#join').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    $('#open-checklist').focus({preventScroll:true});
  });
  let initialLanguage = 'en';
  try { initialLanguage = new URLSearchParams(location.search).get('lang') || localStorage.getItem('alhudahuda-language') || 'en'; } catch {}
  setLanguage(initialLanguage,false);
})();
