
"use strict";

// 1. Footer year.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 2. Language settings.
let currentLanguage = "en";

const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");

const translations = {
    // Navigation
    "Home": "الرئيسية",
    "About": "من أنا",
    "Skills": "المهارات",
    "Projects": "المشاريع",
    "Hobbies": "الهوايات",
    "Contact": "تواصل معي",
    "Main navigation": "القائمة الرئيسية",
    "Open navigation": "فتح القائمة",
    "Close navigation": "إغلاق القائمة",
    "Previous photo": "الصورة السابقة",
    "Next photo": "الصورة التالية",
    "Switch language": "تغيير اللغة",
    "Switch to Arabic": "التبديل إلى العربية",
    "Switch to English": "التبديل إلى الإنجليزية",

    // Hero
    "WELCOME TO MY PORTFOLIO": "أهلًا بك في معرض أعمالي",
    "HELLO, I'M MARWA": "مرحبًا، أنا مروة",
    "A curious mind.": "عقل فضولي.",
    "I'm learning, exploring, and turning ideas into digital experiences. This is my space to share what I'm learning, what I'm building, and the things that inspire me.":
        "أنا أتعلم وأستكشف وأحوّل الأفكار إلى تجارب رقمية. هذه مساحتي لمشاركة ما أتعلمه، وما أعمل على تطويره، والأشياء التي تلهمني.",
    "Explore my projects": "استكشف مشاريعي",
    "Get to know me": "تعرّف عليّ",
    "SCROLL TO DISCOVER": "مرّر للأسفل لاكتشاف المزيد",
    "Always curious": "فضولية دائمًا",
    "Always learning.": "أتعلم باستمرار.",
    "Growing every day": "أتطور كل يوم",
    "One step at a time.": "خطوة بخطوة.",
    "A LITTLE BIT OF ME, A LOT TO DISCOVER": "القليل عني، والكثير لاكتشافه",
    "CURIOUS BY NATURE": "فضولية بطبيعتي",
    "CREATIVE BY CHOICE": "مبدعة باختياري",
    "GROWING EVERY DAY": "أتطور كل يوم",

    // About
    "01 — ABOUT ME": "01 — نبذة عني",
    "So, who is": "إذًا، من هي",
    "Marwa?": "مروة؟",
    "A little introduction to the person behind the projects.":
        "تعريف بسيط بالشخص الذي يقف خلف هذه المشاريع.",
    "Every new skill begins with curiosity, a little courage, and the willingness to try.":
        "تبدأ كل مهارة جديدة بالفضول، وقليل من الشجاعة، والاستعداد لخوض التجربة.",
    "A NOTE TO MY FUTURE SELF": "رسالة إلى نفسي في المستقبل",
    "THE PERSON BEHIND THE SCREEN": "الشخص خلف الشاشة",
    "Learning today.": "أتعلم اليوم.",
    "Building tomorrow.": "وأبني للمستقبل.",
    "I'm a student exploring the world of web development and technology. I enjoy learning how websites work, solving problems, and finding creative ways to present information.":
        "أنا طالبة أستكشف عالم تطوير الويب والتكنولوجيا. أستمتع بتعلّم كيفية عمل المواقع الإلكترونية، وحل المشكلات، وإيجاد طرق إبداعية لعرض المعلومات.",
    "My journey is still in progress, and that's what makes it exciting. Each exercise gives me an opportunity to practice, learn from mistakes, and improve my skills.":
        "ما زلت في بداية رحلتي، وهذا ما يجعلها ممتعة. يمنحني كل تمرين فرصة للتطبيق والتعلّم من الأخطاء وتطوير مهاراتي.",
    "Let's connect": "لنتواصل",

    // Skills
    "02 — MY TOOLKIT": "02 — أدواتي",
    "Skills I'm": "المهارات التي أعمل على",
    "building.": "تطويرها.",
    "The tools and concepts I'm practicing as I develop my knowledge of the web.":
        "الأدوات والمفاهيم التي أتدرب عليها لتطوير معرفتي بالويب.",
    "01 / STRUCTURE": "01 / البنية",
    "02 / PRESENTATION": "02 / العرض",
    "03 / INTERACTION": "03 / التفاعل",
    "04 / WORKFLOW": "04 / سير العمل",
    "Creating meaningful page structure with semantic elements.":
        "إنشاء بنية واضحة لصفحات الويب باستخدام العناصر الدلالية.",
    "WEB STRUCTURE": "بنية الويب",
    "Styling pages with layouts, colors, typography, and responsive rules.":
        "تنسيق الصفحات باستخدام التخطيطات والألوان والخطوط وقواعد التصميم المتجاوب.",
    "VISUAL DESIGN": "التصميم المرئي",
    "Adding behavior, responding to events, and updating page content.":
        "إضافة التفاعلات والاستجابة للأحداث وتحديث محتوى الصفحة.",
    "INTERACTIVE WEB": "ويب تفاعلي",
    "Practicing version control and keeping track of project changes.":
        "التدرب على التحكم بالإصدارات وتتبع التغييرات في المشاريع.",
    "VERSION CONTROL": "التحكم بالإصدارات",
    "These are learning areas, not a claim of professional proficiency.":
        "هذه مجالات أعمل على تعلمها، وليست ادعاءً بالاحتراف.",

    // Projects
    "03 — MY WORK": "03 — أعمالي",
    "Small projects.": "مشاريع صغيرة.",
    "Real progress.": "وتقدم حقيقي.",
    "Each exercise is a new chance to turn theory into practice. Explore the four projects from my learning journey.":
        "كل تمرين فرصة جديدة لتحويل النظريات إلى تطبيق عملي. استكشف المشاريع الأربعة من رحلتي التعليمية.",
    "EXERCISE 00": "التمرين 00",
    "EXERCISE 01": "التمرين 01",
    "EXERCISE 02": "التمرين 02",
    "EXERCISE 03": "التمرين 03",
    "FOUNDATION": "الأساسيات",
    "LAYOUT": "التخطيط",
    "STYLING": "التنسيق",
    "HTML · CSS": "HTML · CSS",
    "CSS · DESIGN": "CSS · التصميم",
    "JAVASCRIPT": "جافاسكريبت",
    "Project 00": "المشروع 00",
    "Project 01": "المشروع 01",
    "Project 02": "المشروع 02",
    "Project 03": "المشروع 03",
    "A starting point for practicing the fundamentals of building a web page.":
        "نقطة البداية للتدرب على أساسيات إنشاء صفحات الويب.",
    "Practicing visual structure, spacing, and arranging page elements.":
        "التدرب على البنية المرئية والمسافات وترتيب عناصر الصفحة.",
    "Exploring CSS styling, visual details, and how design choices affect a page.":
        "استكشاف تنسيقات CSS والتفاصيل المرئية وتأثير خيارات التصميم في الصفحة.",
    "Learning how JavaScript adds logic and interactions to web pages.":
        "تعلّم كيفية إضافة المنطق والتفاعلات إلى صفحات الويب باستخدام جافاسكريبت.",
    "FIRST STEPS": "الخطوات الأولى",
    "LAYOUT PRACTICE": "التدرب على التخطيط",
    "STYLE EXPLORATION": "استكشاف التنسيق",
    "INTERACTION": "التفاعل",
    "COLOR / FORM / BALANCE": "اللون / الشكل / التوازن",
    "Make it": "اجعله",
    "interactive.": "تفاعليًا.",
    "click → change": "انقر ← تغيير",
    "Update each project description to match your actual Exercise 00–03 submissions.":
        "حدّث وصف كل مشروع ليتوافق مع التمارين الفعلية من 00 إلى 03.",

    // Hobbies
    "04 — LIFE OUTSIDE THE CODE": "04 — حياتي خارج البرمجة",
    "Things that make me": "أشياء تجعلني",
    "Interests that give me fresh ideas, help me recharge, and make everyday life more interesting.":
        "اهتمامات تمنحني أفكارًا جديدة، وتساعدني على استعادة طاقتي، وتجعل الحياة اليومية أكثر متعة.",
    "01 / CREATE": "01 / الإبداع",
    "02 / DISCOVER": "02 / الاكتشاف",
    "03 / RECHARGE": "03 / استعادة الطاقة",
    "Creative projects": "مشاريع إبداعية",
    "Exploring colors, layouts, and small ideas that can become something beautiful.":
        "استكشاف الألوان والتخطيطات والأفكار الصغيرة التي يمكن أن تتحول إلى شيء جميل.",
    "Learning new things": "تعلّم أشياء جديدة",
    "Finding new topics to explore and building knowledge a little at a time.":
        "اكتشاف مواضيع جديدة وبناء المعرفة خطوة بخطوة.",
    "Quiet moments": "لحظات هادئة",
    "Making room to pause, reflect, and return to my goals with fresh energy.":
        "تخصيص وقت للتوقف والتأمل والعودة إلى أهدافي بطاقة متجددة.",
    "Personalize these hobbies so they reflect your real interests.":
        "عدّل هذه الهوايات لتعبّر عن اهتماماتك الحقيقية.",

    // Contact
    "05 — GET IN TOUCH": "05 — تواصل معي",
    "Have something in mind?": "هل لديك فكرة؟",
    "Have a question, an idea, or just want to say hello? Fill in the form and leave me a message.":
        "هل لديك سؤال أو فكرة، أم ترغب فقط في إلقاء التحية؟ املأ النموذج واترك لي رسالة.",
    "A little message goes a long way.": "رسالة صغيرة قد تصنع فرقًا كبيرًا.",
    "Use the form to write your message.": "استخدم النموذج لكتابة رسالتك.",
    "YOUR MESSAGE": "رسالتك",
    "Your name": "اسمك",
    "Email address": "البريد الإلكتروني",
    "Subject": "الموضوع",
    "Your message": "رسالتك",
    "Prepare message": "تجهيز الرسالة",
    "e.g. Alex": "مثال: أحمد",
    "you@example.com": "you@example.com",
    "What would you like to talk about?": "عمّ تريد التحدث؟",
    "Write your message here...": "اكتب رسالتك هنا...",
    "Opening your email application. Review the message and send it there.":
        "جارٍ فتح تطبيق البريد الإلكتروني. راجع الرسالة وأرسلها من هناك.",
    "Demo form: it opens your default email application. It does not send or store messages on a server.":
        "هذا نموذج تجريبي يفتح تطبيق البريد الإلكتروني الافتراضي. لا يرسل الرسائل أو يخزّنها على خادم.",

    // Footer and theme
    "Built with curiosity, patience, and a little bit of pink. ♡":
        "صُنع بالفضول والصبر وقليل من اللون الزهري. ♡",
    "BACK TO TOP ↑": "العودة إلى الأعلى ↑",
    "Dark Mode": "الوضع الداكن",
    "Light Mode": "الوضع الفاتح",
    "Switch to dark mode": "التبديل إلى الوضع الداكن",
    "Switch to light mode": "التبديل إلى الوضع الفاتح",
    "Marwa home": "العودة إلى الصفحة الرئيسية لمروة",
    "Marwa's profile photo": "الصورة الشخصية لمروة",
    "Marwa's second profile photo": "الصورة الشخصية الثانية لمروة",
    "Marwa's third profile photo": "الصورة الشخصية الثالثة لمروة"
};

// 3. Save original text and attributes before translating.
const originalTexts = new Map();
const originalAttributes = new Map();

function normalizeText(text) {
    return text.replace(/\s+/g, " ").trim();
}

function collectOriginalContent() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
        const parent = node.parentElement;

        if (
            !parent ||
            ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)
        ) {
            continue;
        }

        if (normalizeText(node.nodeValue)) {
            originalTexts.set(node, node.nodeValue);
        }
    }

    document.querySelectorAll("*").forEach(function (element) {
        ["placeholder", "aria-label", "title", "alt"].forEach(function (attribute) {
            if (element.hasAttribute(attribute)) {
                originalAttributes.set(
                    element,
                    originalAttributes.get(element) || {}
                );

                originalAttributes.get(element)[attribute] =
                    element.getAttribute(attribute);
            }
        });
    });
}

collectOriginalContent();

// 4. Theme switcher.
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    if (themeIcon) {
        themeIcon.textContent = isDark ? "☀" : "☾";
    }

    if (themeLabel) {
        const label = isDark ? "Light Mode" : "Dark Mode";
        themeLabel.textContent =
            currentLanguage === "ar" ? translations[label] : label;
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isDark));

        const label = isDark
            ? "Switch to light mode"
            : "Switch to dark mode";

        themeToggle.setAttribute(
            "aria-label",
            currentLanguage === "ar" ? translations[label] : label
        );
    }
}

let savedTheme = null;

try {
    savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
    // Storage may be unavailable.
}

applyTheme(savedTheme === "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDark = !document.body.classList.contains("dark-mode");

        applyTheme(isDark);

        try {
            localStorage.setItem(
                "portfolio-theme",
                isDark ? "dark" : "light"
            );
        } catch (error) {
            // Theme switching still works without storage.
        }
    });
}

// 5. Language switcher.
function changeLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    originalTexts.forEach(function (originalText, node) {
        const key = normalizeText(originalText);
        const leadingSpace = originalText.match(/^\s*/)[0];
        const trailingSpace = originalText.match(/\s*$/)[0];

        let result = originalText;

        if (
            language === "ar" &&
            Object.prototype.hasOwnProperty.call(translations, key)
        ) {
            result = leadingSpace + translations[key] + trailingSpace;
        }

        node.nodeValue = result;
    });

    originalAttributes.forEach(function (attributes, element) {
        Object.keys(attributes).forEach(function (attribute) {
            const originalValue = attributes[attribute];

            element.setAttribute(
                attribute,
                language === "ar" && translations[originalValue] !== undefined
                    ? translations[originalValue]
                    : originalValue
            );
        });
    });

    if (languageLabel) {
        languageLabel.textContent = language === "en" ? "العربية" : "English";
    }

    if (languageToggle) {
        languageToggle.setAttribute(
            "aria-label",
            language === "en" ? "Switch to Arabic" : "Switch to English"
        );
    }

    applyTheme(document.body.classList.contains("dark-mode"));

    // Update the current photo's alternative text.
    const profilePhoto = document.getElementById("profilePhoto");

    if (profilePhoto) {
        const currentSrc = profilePhoto.getAttribute("src");
        const matchingPhoto = photos.find(function (photo) {
            return photo.src === currentSrc;
        });

        if (matchingPhoto) {
            profilePhoto.alt =
                language === "ar" ? matchingPhoto.altAr : matchingPhoto.alt;
        }
    }
}

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        changeLanguage(currentLanguage === "en" ? "ar" : "en");
    });
}

// 6. Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";

        const label = isOpen ? "Close navigation" : "Open navigation";

        menuToggle.setAttribute(
            "aria-label",
            currentLanguage === "ar" ? translations[label] : label
        );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                currentLanguage === "ar" ? "فتح القائمة" : "Open navigation"
            );
        });
    });
}

// 7. Highlight the current navigation section.
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navigationLinks.forEach(function (link) {
                        const isCurrent =
                            link.getAttribute("href") === "#" + entry.target.id;

                        link.classList.toggle("active", isCurrent);
                    });
                }
            });
        },
        { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });
}

// 8. Contact form.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const formData = new FormData(contactForm);
        const name = String(formData.get("name")).trim();
        const email = String(formData.get("email")).trim();
        const subject = String(formData.get("subject")).trim();
        const message = String(formData.get("message")).trim();

        const recipient = "hello@example.com"; // Replace with your real email.

        const emailSubject = encodeURIComponent(subject);
        const emailBody = encodeURIComponent(
            "From: " + name + "\n" +
            "Reply email: " + email + "\n\n" +
            message
        );

        const statusText =
            "Opening your email application. Review the message and send it there.";

        formStatus.textContent =
            currentLanguage === "ar"
                ? translations[statusText]
                : statusText;

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + emailSubject +
            "&body=" + emailBody;
    });
}

// 9. Profile photo switcher.
const profilePhoto = document.getElementById("profilePhoto");
const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

const photos = [
    {
        src: "./assets/profile.jpg",
        alt: "Marwa's profile photo",
        altAr: "الصورة الشخصية لمروة"
    },
    {
        src: "./assets/profile2.jpg",
        alt: "Marwa's second profile photo",
        altAr: "الصورة الشخصية الثانية لمروة"
    },
    {
        src: "./assets/profile3.jpg",
        alt: "Marwa's third profile photo",
        altAr: "الصورة الشخصية الثالثة لمروة"
    }
];

let currentPhoto = 0;

function showPhoto(index) {
    if (!profilePhoto) return;

    currentPhoto = (index + photos.length) % photos.length;

    profilePhoto.classList.add("changing");

    window.setTimeout(function () {
        profilePhoto.src = photos[currentPhoto].src;

        profilePhoto.alt = currentLanguage === "ar"
            ? photos[currentPhoto].altAr
            : photos[currentPhoto].alt;

        if (photoCounter) {
            photoCounter.textContent =
                (currentPhoto + 1) + " / " + photos.length;
        }

        profilePhoto.classList.remove("changing");
    }, 150);
}

if (previousPhoto) {
    previousPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto - 1);
    });
}

if (nextPhoto) {
    nextPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto + 1);
    });
}
