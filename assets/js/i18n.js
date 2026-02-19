/**
 * Traducciones para el portafolio
 * Español (es) e Inglés (en)
 */

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mi",
    "nav.resume": "Resumen",
    "nav.portfolio": "Portafolio",
    "nav.services": "Servicio",
    "nav.documents": "Documentos",
    
    // Hero Section
    "hero.iam": "Soy",
    "hero.typed1": "Ingeniero de Sistemas y Computación",
    "hero.typed2": "DevSecOps Engineer",
    "hero.typed3": "Cloud Architect",
    
    // About Section
    "about.title": "Sobre mi",
    "about.description": "Ingeniero en Sistemas y Computación con experiencia sólida en backend, DevSecOps y entornos cloud. Especialista en AWS, Azure, Docker, Terraform y automatización con Bash y Git. En Sofka diseño arquitecturas en Azure para Sura con foco en seguridad y monitoreo mediante Sentinel, gestionando automatización e infraestructura como código. He trabajado en gestión de accesos (IAM) y en CI/CD con GitLab y Azure DevOps, integrando SIEM/SOAR como Sentinel y Splunk. En Ditech lideré migraciones y estrategias de seguridad en AWS para Inmotion, HDI y Liberty Mutual, y en Avenfor promoví la cultura DevOps con enfoque en calidad y eficiencia. Me caracterizo por la disciplina, adaptabilidad y capacidad de colaboración efectiva.",
    "about.subtitle": "Ingeniero de Sistemas y Computación | DevSecOps Engineer | Cloud Architect",
    "about.birthdate": "Fecha de nacimiento:",
    "about.phone": "Celular:",
    "about.city": "Ciudad:",
    "about.age": "Edad:",
    "about.degree": "Titulo:",
    "about.degree.value": "Ingeniero de sistemas y computación",
    "about.email": "Email:",
    "about.characteristics": "Caracteristicas & Hobbies .",
    "about.char1": "Amigable",
    "about.char2": "Adaptable",
    "about.char3": "Diciplinado",
    "about.char4": "Honesto",
    "about.char5": "Leal",
    "about.char6": "Puntual",
    "about.char7": "Responsable",
    "about.hobby1": "Hacer ejercicio",
    "about.hobby2": "Leer",
    "about.hobby3": "Jugar videojuegos",
    "about.hobby4": "Montar bicicleta",
    "about.hobby5": "Aprender",
    
    // Facts Section
    "facts.title": "Logros",
    "facts.description": "Métricas profesionales actuales",
    "facts.experience": "Años de experiencia profesional",
    "facts.clients": "Clientes/Proyectos Grandes",
    "facts.certifications": "Certificaciones AWS",
    "facts.migrations": "Infraestructuras Cloud",
    
    // Skills Section
    "skills.title": "Habilidades",
    "skills.spanish": "Español",
    "skills.spanish.level": "Nativo",
    "skills.english": "Ingles",
    
    // Resume Section
    "resume.title": "Resumen",
    "resume.description": "Ingeniero en Sistemas y Computación con experiencia sólida en backend, DevSecOps y entornos cloud. Especialista en AWS, Azure, Docker, Terraform y automatización con Bash y Git. En Sofka diseño arquitecturas en Azure para Sura con foco en seguridad y monitoreo mediante Sentinel, gestionando automatización e infraestructura como código. He trabajado en gestión de accesos (IAM) y en CI/CD con GitLab y Azure DevOps, integrando SIEM/SOAR como Sentinel y Splunk. En Ditech lideré migraciones y estrategias de seguridad en AWS para Inmotion, HDI y Liberty Mutual, y en Avenfor promoví la cultura DevOps con enfoque en calidad y eficiencia. Me caracterizo por la disciplina, adaptabilidad y capacidad de colaboración efectiva.",
    "resume.summary": "Resumen",
    "resume.developer": "DevSecOps Engineer & Cloud Architect",
    "resume.education": "Educacion",
    "resume.edu1.title": "Bachiller academico",
    "resume.edu1.description": "Estudios basicos secundaria que certifica como bachiller academico y con educacion basica",
    "resume.edu2.title": "Ingles & C1",
    "resume.edu2.description": "Certificacion nivel C1 en ingles en totalidad 24 cursos",
    "resume.edu3.title": "Ingeniero de sistemas & computación",
    "resume.edu3.description": "Titulo universitario que certifica ser ingeniero de sistemas y computacion, con preparacion en ciencias de la computacion",
    "resume.experience": "Experiencia Profesional",
    "resume.exp1.title": "Sofka Technologies",
    "resume.exp1.role": "Ingeniero DevSecOps",
    "resume.exp1.description": "Diseño arquitectura en Azure para el cliente Sura, con enfoque en seguridad y monitoreo mediante Azure Sentinel. Implemento automatización de infraestructura y controles de seguridad con Terraform, gestionando IAM, políticas de acceso y compliance. Integración de SIEM/SOAR para detección y respuesta automatizada de amenazas.",
    "resume.exp2.title": "Ditech Group",
    "resume.exp2.role": "Ingeniero DevSecOps",
    "resume.exp2.description": "Lideré proyectos de migración y estrategias de seguridad en AWS para clientes como Inmotion Group, HDI y Liberty Mutual. Implementé automatización de procesos con Terraform y Bash, integré herramientas SIEM y SOAR como Azure Sentinel y Splunk, y gestioné infraestructura con EKS, ECS, Docker y Jenkins para CI/CD robusto.",
    "resume.exp3.title": "Avenfor",
    "resume.exp3.role": "DevSecOps Developer",
    "resume.exp3.description": "Diseñé arquitectura cloud en AWS y pipelines CI/CD con GitLab para clientes como EPM. Implementé prácticas de seguridad en la nube, gestión de IAM, AWS WAF y monitoreo continuo. Promoví la cultura DevOps enfocada en calidad, automatización y eficiencia operacional.",
    "resume.exp4.title": "Pragma",
    "resume.exp4.role": "Practicante & Auxiliar de Desarrollo",
    "resume.exp4.description": "Prácticas empresariales como desarrollador Java Backend usando SpringBoot, JUnit, AWS, Azure, Mockito y JWT. Habilitación en ruta DevSecOps con Azure DevOps, implementación de herramientas CI/CD como JMeter, Dynatrace, SonarQube y JFrog Artifactory, y scripting con TypeScript, Python y Bash.",
    "resume.exp5.title": "Freelance",
    "resume.exp5.role": "Líder Técnico",
    "resume.exp5.description": "Desarrollé una calculadora de procesos con Unity usando C# bajo el rol de líder de equipo, gestionando requisitos, arquitectura del proyecto y repositorios con Git.",
    
    // Portfolio Section
    "portfolio.title": "Portafolio",
    "portfolio.description": "Aqui se encuentra por linea temporal cada proyecto que he elaborado",
    "portfolio.proj1.title": "Desarrollo videojuego serpiente en lenguaje C",
    "portfolio.proj1.description": "Juego de serpiente basado en C, donde se obtenia el juego de la serpiente",
    "portfolio.proj2.title": "Desarrollo mano robotica basada en lenguaje C",
    "portfolio.proj2.description": "Mano robotica capaz de agarrar objetos no pesados, hecha a base de mangueras de plastico, servomotores y una placa Arduino para fin academico",
    "portfolio.proj3.title": "Desarrollo videojuego en Java",
    "portfolio.proj3.description": "Se uso la Plataforma Greenfoot, el juego consistía en una hoja de papel como mundo infinito y evitar obstáculos, además que buscaba desarrollar habilidades motoras con los controles invertidos.",
    "portfolio.proj4.title": "Desarrollo videojuego triki en java",
    "portfolio.proj4.description": "Desarrollo de videojuego de triki con implementacion de algoritmo que predice posible nodo y uso de estrutura de datos",
    "portfolio.proj5.title": "Puerta inteligente basada en C y Python",
    "portfolio.proj5.description": "Domótica aplicada en una Puerta que al detectar los datos biométricos ingresados permitía o no el acceso.",
    "portfolio.proj6.title": "Compliador de lenguaje en JavaScript",
    "portfolio.proj6.description": "Desarrollo de analizador lexico y compilador de lenguaje de programacion que permitia analizar un codigo entrado por un cuadro de texto, retornaba la tabla y detectaba posibles errores en la estructura del mismo, indicando donde se encontraba este error, todo basado en lenguaje JavaScript",
    "portfolio.proj7.title": "Desarrollo videojuego Java y MySQL",
    "portfolio.proj7.description": "Se uso la Plataforma Android studio se desarrolló un aplicativo móvil que enseñara diversos temas mientras se jugaba.",
    "portfolio.proj8.title": "Desarrollo videojuego 3D C#",
    "portfolio.proj8.description": "Usando el motor de fisicas unity, se desarrollo un videojuego de evitar obstaculos e ir acumulando puntos mientras la velocidad y la cantidad de obstaculos aumentan, llevando asi un conteo de puntos.",
    "portfolio.proj9.title": "Desarrollo aplicativo web Django y React",
    "portfolio.proj9.description": "Aplicativo web que buscaba brindar ayuda psicológica a los usuarios y mediante al uso de una inteligencia artificial detectar y predecir depresión, ansiedad o bipolaridad.",
    "portfolio.proj10.title": "Desarrollo aplicativo web con Flask",
    "portfolio.proj10.description": "Aplicativo web que le permitía al usuario acceder a la operación matemática a solucionar y retomando la respuesta de manera eficiente, además de aplicar pruebas unitarias y automatización de mismo",
    "portfolio.proj11.title": "Desarrollo portafolio web HTML/CSS y JS",
    "portfolio.proj11.description": "Pagina web que inluye informacion personal dirigiada a un desarrollo aplicando conocimientos adquiridos en ingenieria web",
    
    // Services Section
    "services.title": "Servicios",
    "services.service1.title": "Desarrollador Backend",
    "services.service1.description": "Desarrollo web usando el framework Springboot",
    "services.service2.title": "Desarrollo de aplicaciones",
    "services.service2.description": "Desarrollo para aplicaciones de escritorios y diversos lenguajes",
    "services.service3.title": "DevSecOps",
    "services.service3.description": "DImplementacion de la cultura Devops para brindar buenas practicas y un CI/CD",
    "services.service4.title": "Desarrollo de videojuegos",
    "services.service4.description": "Usando motores graficos se desarrolla videojuegos en diferentes lenguajes",
    
    // Footer
    "footer.description": "Ingeniero de Sistemas y Computación | DevSecOps Engineer",
    
    // Documents Section
    "documents.title": "Documentos Profesionales",
    "documents.description": "Descarga mis certificaciones y documentos profesionales",
    "documents.cv.title": "Curriculum Vitae",
    "documents.cv.description": "Descarga mi hoja de vida actualizada en español o inglés",
    "documents.cv.spanish": "Español",
    "documents.cv.english": "Inglés",
    "documents.cert.title": "Certificaciones",
    "documents.cert.description": "Certificados de inglés C1 y otras certificaciones profesionales",
    "documents.cert.diploma": "Diploma C1",
    "documents.cert.certificate": "Certificado"
  },
  
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.documents": "Documents",
    
    // Hero Section
    "hero.iam": "I'm",
    "hero.typed1": "Systems and Computer Engineer",
    "hero.typed2": "DevSecOps Engineer",
    "hero.typed3": "Cloud Architect",
    
    // About Section
    "about.title": "About Me",
    "about.description": "Systems and Computer Engineer with solid experience in backend, DevSecOps and cloud environments. Specialist in AWS, Azure, Docker, Terraform and automation with Bash and Git. At Sofka I design architectures in Azure for Sura focused on security and monitoring through Sentinel, managing automation and infrastructure as code. I have worked on access management (IAM) and CI/CD with GitLab and Azure DevOps, integrating SIEM/SOAR such as Sentinel and Splunk. At Ditech I led migrations and security strategies in AWS for Inmotion, HDI and Liberty Mutual, and at Avenfor I promoted DevOps culture with a focus on quality and efficiency. I am characterized by discipline, adaptability and effective collaboration skills.",
    "about.subtitle": "Systems and Computer Engineer | DevSecOps Engineer | Cloud Architect",
    "about.birthdate": "Birthday:",
    "about.phone": "Phone:",
    "about.city": "City:",
    "about.age": "Age:",
    "about.degree": "Degree:",
    "about.degree.value": "Systems and Computer Engineer",
    "about.email": "Email:",
    "about.characteristics": "Characteristics & Hobbies .",
    "about.char1": "Friendly",
    "about.char2": "Adaptable",
    "about.char3": "Disciplined",
    "about.char4": "Honest",
    "about.char5": "Loyal",
    "about.char6": "Punctual",
    "about.char7": "Responsible",
    "about.hobby1": "Exercise",
    "about.hobby2": "Reading",
    "about.hobby3": "Playing video games",
    "about.hobby4": "Cycling",
    "about.hobby5": "Learning",
    
    // Facts Section
    "facts.title": "Achievements",
    "facts.description": "Current professional metrics",
    "facts.experience": "Years of professional experience",
    "facts.clients": "Major Clients/Projects",
    "facts.certifications": "AWS Certifications",
    "facts.migrations": "Cloud Infrastructures",
    
    // Skills Section
    "skills.title": "Skills",
    "skills.spanish": "Spanish",
    "skills.spanish.level": "Native",
    "skills.english": "English",
    
    // Resume Section
    "resume.title": "Resume",
    "resume.description": "Systems and Computer Engineer with solid experience in backend, DevSecOps and cloud environments. Specialist in AWS, Azure, Docker, Terraform and automation with Bash and Git. At Sofka I design architectures in Azure for Sura focused on security and monitoring through Sentinel, managing automation and infrastructure as code. I have worked on access management (IAM) and CI/CD with GitLab and Azure DevOps, integrating SIEM/SOAR such as Sentinel and Splunk. At Ditech I led migrations and security strategies in AWS for Inmotion, HDI and Liberty Mutual, and at Avenfor I promoted DevOps culture with a focus on quality and efficiency. I am characterized by discipline, adaptability and effective collaboration skills.",
    "resume.summary": "Summary",
    "resume.developer": "DevSecOps Engineer & Cloud Architect",
    "resume.education": "Education",
    "resume.edu1.title": "Academic Bachelor",
    "resume.edu1.description": "Basic secondary studies certifying as an academic bachelor with basic education",
    "resume.edu2.title": "English & C1",
    "resume.edu2.description": "English C1 level certification totaling 24 courses",
    "resume.edu3.title": "Systems & Computer Engineer",
    "resume.edu3.description": "University degree certifying as a systems and computer engineer, with preparation in computer science",
    "resume.experience": "Professional Experience",
    "resume.exp1.title": "Sofka Technologies",
    "resume.exp1.role": "DevSecOps Engineer",
    "resume.exp1.description": "I design Azure architecture for Sura client, focusing on security and monitoring through Azure Sentinel. I implement infrastructure automation and security controls with Terraform, managing IAM, access policies and compliance. Integration of SIEM/SOAR for automated threat detection and response.",
    "resume.exp2.title": "Ditech Group",
    "resume.exp2.role": "DevSecOps Engineer",
    "resume.exp2.description": "I led migration projects and security strategies in AWS for clients such as Inmotion Group, HDI and Liberty Mutual. I implemented process automation with Terraform and Bash, integrated SIEM and SOAR tools such as Azure Sentinel and Splunk, and managed infrastructure with EKS, ECS, Docker and Jenkins for robust CI/CD.",
    "resume.exp3.title": "Avenfor",
    "resume.exp3.role": "DevSecOps Developer",
    "resume.exp3.description": "I designed cloud architecture on AWS and CI/CD pipelines with GitLab for clients like EPM. I implemented cloud security practices, IAM management, AWS WAF and continuous monitoring. I promoted DevOps culture focused on quality, automation and operational efficiency.",
    "resume.exp4.title": "Pragma",
    "resume.exp4.role": "Intern & Development Assistant",
    "resume.exp4.description": "Business internship as a Java Backend developer using SpringBoot, JUnit, AWS, Azure, Mockito and JWT. DevSecOps path enablement with Azure DevOps, implementation of CI/CD tools such as JMeter, Dynatrace, SonarQube and JFrog Artifactory, and scripting with TypeScript, Python and Bash.",
    "resume.exp5.title": "Freelance",
    "resume.exp5.role": "Technical Lead",
    "resume.exp5.description": "I developed a process calculator with Unity using C# under the role of team leader, managing requirements, project architecture and repositories with Git.",
    
    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.description": "Here you can find in chronological order each project I have developed",
    "portfolio.proj1.title": "Snake video game development in C language",
    "portfolio.proj1.description": "Snake game based on C, where the snake game was obtained",
    "portfolio.proj2.title": "Robotic hand development based on C language",
    "portfolio.proj2.description": "Robotic hand capable of grabbing non-heavy objects, made from plastic hoses, servo motors and an Arduino board for academic purposes",
    "portfolio.proj3.title": "Video game development in Java",
    "portfolio.proj3.description": "The Greenfoot Platform was used, the game consisted of a sheet of paper as an infinite world and avoiding obstacles, in addition to seeking to develop motor skills with inverted controls.",
    "portfolio.proj4.title": "Tic-tac-toe video game development in Java",
    "portfolio.proj4.description": "Development of tic-tac-toe video game with implementation of algorithm that predicts possible node and use of data structure",
    "portfolio.proj5.title": "Smart door based on C and Python",
    "portfolio.proj5.description": "Home automation applied to a Door that when detecting the entered biometric data allowed or not access.",
    "portfolio.proj6.title": "Language compiler in JavaScript",
    "portfolio.proj6.description": "Development of lexical analyzer and programming language compiler that allowed analyzing code entered by a text box, returned the table and detected possible errors in its structure, indicating where this error was found, all based on JavaScript language",
    "portfolio.proj7.title": "Java and MySQL video game development",
    "portfolio.proj7.description": "The Android Studio Platform was used to develop a mobile application that taught various topics while playing.",
    "portfolio.proj8.title": "3D video game development in C#",
    "portfolio.proj8.description": "Using the Unity physics engine, a video game was developed to avoid obstacles and accumulate points while speed and number of obstacles increase, thus keeping a point count.",
    "portfolio.proj9.title": "Web application development with Django and React",
    "portfolio.proj9.description": "Web application that sought to provide psychological help to users and through the use of artificial intelligence detect and predict depression, anxiety or bipolarity.",
    "portfolio.proj10.title": "Web application development with Flask",
    "portfolio.proj10.description": "Web application that allowed the user to access the mathematical operation to be solved and resuming the response efficiently, in addition to applying unit tests and automation of the same",
    "portfolio.proj11.title": "Web portfolio development HTML/CSS and JS",
    "portfolio.proj11.description": "Web page that includes personal information directed to a development applying knowledge acquired in web engineering",
    
    // Services Section
    "services.title": "Services",
    "services.service1.title": "Backend Developer",
    "services.service1.description": "Web development using the Springboot framework",
    "services.service2.title": "Application Development",
    "services.service2.description": "Development for desktop applications and various languages",
    "services.service3.title": "DevSecOps",
    "services.service3.description": "Implementation of DevOps culture to provide best practices and CI/CD",
    "services.service4.title": "Video Game Development",
    "services.service4.description": "Using graphics engines, video games are developed in different languages",
    
    // Footer
    "footer.description": "Systems and Computer Engineer | DevSecOps Engineer",
    
    // Documents Section
    "documents.title": "Professional Documents",
    "documents.description": "Download my certifications and professional documents",
    "documents.cv.title": "Curriculum Vitae",
    "documents.cv.description": "Download my updated resume in Spanish or English",
    "documents.cv.spanish": "Spanish",
    "documents.cv.english": "English",
    "documents.cert.title": "Certifications",
    "documents.cert.description": "C1 English certificates and other professional certifications",
    "documents.cert.diploma": "C1 Diploma",
    "documents.cert.certificate": "Certificate"
  }
};

// Función para obtener el idioma actual
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'es';
}

// Función para establecer el idioma
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
}

// Función para traducir la página
function translatePage(lang, reinitTyped = false) {
  setLanguage(lang);
  
  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Actualizar elementos con data-i18n-html (para contenido HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Actualizar el typed.js solo si se solicita (al cambiar idioma manualmente)
  if (reinitTyped) {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      // Actualizar el atributo data-typed-items
      typedElement.setAttribute('data-typed-items', 
        `${translations[lang]['hero.typed1']}, ${translations[lang]['hero.typed2']}, ${translations[lang]['hero.typed3']}`
      );
      
      // Destruir la instancia anterior si existe
      if (typeof window.typed !== 'undefined' && window.typed) {
        window.typed.destroy();
      }
      
      // Reinicializar typed.js solo si Typed está disponible
      if (typeof Typed !== 'undefined') {
        const typed_strings = typedElement.getAttribute('data-typed-items');
        if (typed_strings) {
          window.typed = new Typed('.typed', {
            strings: typed_strings.split(','),
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        }
      }
    }
  }
  
  // Actualizar botón de idioma
  updateLanguageButton(lang);
}

// Función para actualizar el botón de idioma
function updateLanguageButton(lang) {
  const langBtn = document.getElementById('language-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    langBtn.setAttribute('data-lang', lang === 'es' ? 'en' : 'es');
  }
}

// Inicializar traducción al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  
  // Actualizar el atributo data-typed-items según el idioma actual
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    typedElement.setAttribute('data-typed-items', 
      `${translations[currentLang]['hero.typed1']}, ${translations[currentLang]['hero.typed2']}, ${translations[currentLang]['hero.typed3']}`
    );
  }
  
  // Traducir elementos sin reinicializar Typed.js (main.js se encargará de inicializarlo)
  translatePage(currentLang, false);
  
  // Event listener para el botón de cambio de idioma
  const langBtn = document.getElementById('language-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = langBtn.getAttribute('data-lang');
      // Al cambiar idioma manualmente, sí reinicializar Typed.js
      translatePage(newLang, true);
    });
  }
});
