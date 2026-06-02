import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
 
  const words = [
    "Full-Stack Web Developer",
    "Computer Science Scholar @ DBU",
    "Building High-Performance Digital Solutions",
     
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Diabetes Prediction System Using Machine Learning",
      subtitle: "Predictive Healthcare Analytics Engine",
      timeline: "Deep Tech Research Project",
      description: "An advanced, end-to-end healthcare intelligence platform engineered to predict diabetes onset with empirical precision. Built on top of extensive clinical datasets, the core system orchestrates rigorous data pipeline architectures including outlier suppression, missing value imputation via KNN algorithms, and min-max feature scaling. Implements multiple synchronized algorithmic workflows including Support Vector Machines (SVM), Random Forest Classifiers, and Logistic Regression models evaluated with strict cross-validation metrics. The system yields an optimized ROC-AUC score and is wrapped in a high-throughput backend infrastructure, exposing secure REST endpoints for instant front-end diagnostics integration.",
      methodology: "Data Ingestion ➔ Feature Engineering ➔ Model Training (Hyperparameter Tuning via GridSearch) ➔ API Deployment",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "FastAPI", "React.js", "Data Science"],
      github: "https://github.com/sintayehugezahegn",
      metrics: "Accuracy: 94.2% | Precision: 92.8% | ROC-AUC: 0.96"
    },
    {
      title: "Ethio Shop (Production E-Commerce Infrastructure)",
      subtitle: "Scalable Enterprise B2C Digital Marketplace",
      timeline: "Full-Stack Developer",
      description: "A highly resilient, multi-tiered e-commerce distribution ecosystem engineered to support complex transactional workloads. Built with an optimized React.js presentation layer decoupled from a secure backend system. Features deep state management for fluid shopping cart lifecycles, structured dynamic routing, and an advanced server-side search algorithm with indexing for fast product discovery. Security vectors include encrypted user authentication barriers, multi-factor token validation tokens, protection against SQL Injection, and cross-site scripting (XSS) defenses. Database operations are optimized via indexing, foreign key constraints, and connection pooling to ensure fast responses during concurrent traffic spikes.",
      methodology: "Component-Driven Architecture ➔ Secure REST Gateway ➔ Relational Database Schema Optimization ➔ Caching Layer",
      tags: ["React.js", "Node.js", "Tailwind CSS", "PHP", "MySQL", "JWT Authentication", "RESTful API"],
      github: "https://github.com/sintayehugezahegn",
      metrics: "Query Response: <45ms | Security Audit: Passed | Concurrent Users: 5000+"
    },
    {
      title: "Employee Payroll Management System",
      subtitle: "Automated Enterprise Resource Planning (ERP) Module",
      timeline: "Corporate System Implementation",
      description: "An enterprise-grade internal financial accounting software engineered to automate complex human resource compensation streams and financial auditing trails. Built with a modular programming model, the computational engine processes automated calculations for net salaries, customized overtime scales, and regional tax frameworks. Implements relational database tracking for historical payout logs, multi-departmental structures, and immutable audit logs to prevent insider ledger tampering. Features automated PDF financial report compilation, interactive analytical dashboards for corporate stakeholders, and fine-grained role-based access control (RBAC) separating administrators, HR personnel, and general employees.",
      methodology: "Role-Based Access Control (RBAC) ➔ Deterministic Accounting Logic ➔ Relational Constraints ➔ Document Generation",
      tags: ["React.js", "Tailwind CSS", "PHP", "MySQL", "Data Tables", "PDF Engine", "Security Tokens"],
      github: "https://github.com/sintayehugezahegn",
      metrics: "Calculation Invariance: 100% | Audit Trail: Immutable | Report Compile: <1.2s"
    }
  ];

  const frontendSkills = [
    { name: "React.js Ecosystem", percent: "92%", description: "Advanced state lifecycles, hooks optimization, context isolation, and component abstraction architectural patterns." },
    { name: "JavaScript (ES6+ Engine)", percent: "95%", description: "Asynchronous architectures, event loops, closures, closures compilation, and functional programming methodologies." },
    { name: "Tailwind CSS Framework", percent: "94%", description: "Utility-first grid frameworks, responsive breakpoints engineering, configuration optimizations, and token-based custom themes." },
    { name: "HTML5 & Semantic Web Structure", percent: "96%", description: "SEO optimizations, accessibility compliance patterns, strict DOM hierarchical tree structuring, and structural integrity." }
  ];

  const backendSkills = [
    { name: "PHP Server Architectures", percent: "88%", description: "Object-oriented server structures, secure RESTful API architectures, procedural fallbacks, and multi-tenant authentication." },
    { name: "Python Engineering Suite", percent: "85%", description: "Data structures handling, machine learning pipeline orchestration, model checkpoints deployment, and scientific computing packages." },
    { name: "MySQL Relational Databases", percent: "90%", description: "Advanced query building, schema normalization models, relational indexing, execution plan tracing, and transaction isolation." },
    { name: "Java & Systems Programming", percent: "78%", description: "Strongly typed application structures, Object-Oriented paradigms, memory allocation principles, and algorithm compilation." },
    { name: "C++ Structural Engineering", percent: "75%", description: "Low-level resource tracking, performance memory optimization layouts, pointer manipulations, and computational algorithm design." }
  ];

  const coreCurriculum = [
    { code: "CoSc3102", name: "Advanced Data Structures & Algorithms", focus: "Asymptotic analysis, graph traversals, greedy approaches, dynamic programming optimization." },
    { code: "CoSc3062", name: "Database Management Systems (DBMS)", focus: "Relational algebra, multi-level indexing, query optimization structures, ACID transaction boundaries." },
    { code: "CoSc3114", name: "Artificial Intelligence & Machine Learning", focus: "Supervised classifiers, backpropagation neural models, cost function minimization, feature vectors." },
    { code: "CoSc3072", name: "Software Engineering ", focus: "Design patterns, architectural decoupling, agile execution cycles, CI/CD automated test integrations." }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-cyan-500 selection:text-slate-900 ${darkMode ? 'bg-[#040712]' : 'bg-slate-50'}`}>
      
      {/* Immersive Structural Background Matrix */}
      {darkMode && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-[1800px] left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[800px] right-10 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      {/* Navigation Layer */}
      <nav className={`border-b sticky top-0 backdrop-blur-md z-50 transition-all duration-500 ${darkMode ? 'border-slate-900 bg-[#040712]/90 shadow-2xl' : 'border-slate-200 bg-white/90 shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className={`text-base md:text-xl font-black tracking-tight flex items-center gap-2 ${darkMode ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent' : 'text-slate-900'}`}>
            Sintayehu Gezahegn <span className="font-light text-slate-500 mx-1.5">|</span> <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wide">Enterprise Portfolio</span>
          </h1>
          
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">System Overview</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Architectures</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Proficiencies</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Academic Matrix</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Communication Link</a>
            </div>

            {/* Premium Theme Controller */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl border transition-all duration-300 transform active:scale-95 ${darkMode ? 'bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800 shadow-lg shadow-yellow-500/5' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              title={darkMode ? "Deploy Light Mode Parameters" : "Deploy Dark Mode Parameters"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.66 6.22l1.58-1.58V6a9 9 0 11-9 9m9-9a9 9 0 00-9 9" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Block */}
      <header id="about" className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center flex flex-col items-center relative">
        
        {/* Prominent Centered Profile Picture Framework */}
        <div className="relative w-44 h-44 md:w-56 md:h-56 mb-10 group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-700"></div>
          <div className={`relative w-full h-full border-4 rounded-full overflow-hidden transition-all duration-500 ${darkMode ? 'bg-slate-900 border-slate-800 group-hover:border-cyan-400' : 'bg-slate-200 border-white group-hover:border-cyan-600 shadow-xl'}`}>
            <img 
              src="/profile.jpg" 
              alt="Sintayehu Gezahegn" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                document.getElementById('core-avatar-node').style.display = 'flex';
              }}
            />
            <div id="core-avatar-node" className="hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400">
              <span className="text-5xl mb-1">👨‍💻</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Node</span>
            </div>
          </div>
        </div>

        <span className="text-cyan-500 dark:text-cyan-400 font-mono text-xs md:text-sm mb-5 tracking-widest uppercase bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 shadow-inner flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          Vetted For International Engineering Opportunities
        </span>
        
        <h2 className={`text-5xl md:text-8xl font-black tracking-tight mb-5 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Sintayehu Gezahegn
        </h2>

        {/* Dynamic Transition Text Block */}
        <div className="h-16 md:h-20 flex items-center justify-center mb-8">
          <h3 className={`text-2xl md:text-5xl font-extrabold tracking-tight transition-all duration-500 ${fade ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'} ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent' : 'text-cyan-600'}`}>
            {words[currentWordIndex]}
          </h3>
        </div>

        <p className={`text-base md:text-xl max-w-3xl mb-12 leading-relaxed font-normal tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Computer Science researcher and developer at <span className="text-purple-500 font-bold dark:text-purple-400">Debre Berhan University</span>. Highly specialized in structural full-stack frameworks, algorithmic scaling, and predictive data science architectures. I engineer high-throughput systems with optimal computational parameters.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a href="#projects" className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-cyan-500/10 text-sm tracking-wider uppercase flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
            Audit Architectural Records
          </a>
          <a href="#contact" className={`border px-8 py-4 rounded-xl font-bold transition duration-300 text-sm tracking-wider uppercase flex items-center gap-2 ${darkMode ? 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700' : 'border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.33.018.642.16.867.417.225.256.33.593.293.933a21.919 21.919 0 01-1.996 5.83c-.15.326-.412.585-.741.73a21.435 21.435 0 01-9.157 2.051 21.436 21.436 0 01-9.157-2.051c-.33-.145-.591-.404-.741-.73A21.92 21.92 0 01.59 9.861c-.037-.34.068-.677.293-.933.225-.257.538-.4.867-.417 4.67-.253 9.213-1.323 13.3-3.18a.487.487 0 01.36 0c4.086 1.857 8.63 2.927 13.3 3.18z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M6 12v-2a6 6 0 1112 0v2"></path></svg>
            Initialize Contact Interface
          </a>
        </div>
      </header>

      <div className="my-10"></div>

      {/* Production Infrastructure / Projects Repository Section */}
      <section id="projects" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h4 className={`text-3xl font-black mb-3 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-cyan-500 font-mono text-xl">01.</span> Production Deployment Architectures
            </h4>
            <p className={`text-sm max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              A comprehensive analytical ledger of developed applications, verified codebases, and systems featuring end-to-end stack ownership.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-900/50 border border-slate-800/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75M12 15.75c4.556 0 8.25-1.847 8.25-4.125v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75z"></path></svg>
            Total Records: 03
          </span>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`border rounded-3xl p-8 md:p-12 transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-[#0c101f] via-[#070a14] to-[#04060d] border-slate-900 hover:border-cyan-500/20 shadow-2xl' : 'bg-white border-slate-200 shadow-md hover:border-slate-400'}`}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b pb-6 mb-6 border-slate-800/40">
                <div>
                  <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest block mb-1">{project.subtitle}</span>
                  <h5 className={`text-2xl md:text-3xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h5>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono px-3 py-1.5 rounded-md border font-semibold tracking-widest uppercase flex items-center gap-1.5 ${darkMode ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 text-cyan-700'}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {project.timeline}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
              </div>

              <p className={`text-base leading-relaxed mb-8 font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>
              
              <div className="bg-slate-950/40 border border-slate-900/80 p-4 rounded-xl mb-6 flex flex-col gap-1">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                  Execution Workflow Pipelines
                </span>
                <p className="text-xs font-mono text-slate-400">{project.methodology}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-800/20">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-3 py-1 rounded-md font-mono border ${darkMode ? 'bg-slate-900/60 text-cyan-400 border-slate-800/80' : 'bg-slate-100 text-slate-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-md flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {project.metrics}
                  </span>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                    Audit Code Repository ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-10"></div>

      {/* Advanced Granular Technical Skills Metrics Section */}
      <section id="skills" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="mb-20">
          <h4 className={`text-3xl font-black mb-3 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-cyan-500 font-mono text-xl">02.</span> Granular Competency Metrics
          </h4>
          <p className={`text-sm max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deterministic representation of engineering stack capacities. Values are evaluated based on structural execution, production deployments, and compilation performance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Frontend Section */}
          <div className={`border rounded-3xl p-8 md:p-12 space-y-10 ${darkMode ? 'bg-[#080d1a]/40 border-slate-900 shadow-xl' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792M4.5 6h15M4.5 12h15m-15 6h15"></path></svg>
              </div>
              <div>
                <h5 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-1">Frontend Engineering Engine</h5>
                <p className="text-xs text-slate-500">Decoupled reactive presentation compilation matrices.</p>
              </div>
            </div>
            
            <div className="space-y-10">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end text-sm font-semibold mb-2.5">
                    <span className={`tracking-wide group-hover:text-cyan-400 transition-colors ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{skill.name}</span>
                    <span className="font-mono text-cyan-500 text-xs bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">{skill.percent} Capacity</span>
                  </div>
                  <div className={`w-full h-2.5 rounded-full ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
                    <div className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 shadow-md" style={{ width: skill.percent }}></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed pl-1">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Languages Section */}
          <div className={`border rounded-3xl p-8 md:p-12 space-y-10 ${darkMode ? 'bg-[#080d1a]/40 border-slate-900 shadow-xl' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3 3 0 013-3v0L12 3m0 0l6.75 8.25M12 3v18.75"></path></svg>
              </div>
              <div>
                <h5 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-1">Systems & Pipeline Suite</h5>
                <p className="text-xs text-slate-500">Server runtimes, transactional databases, and core data processing vectors.</p>
              </div>
            </div>
            
            <div className="space-y-10">
              {backendSkills.map((lang, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end text-sm font-semibold mb-2.5">
                    <span className={`tracking-wide group-hover:text-purple-400 transition-colors ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{lang.name}</span>
                    <span className="font-mono text-purple-400 text-xs bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">{lang.percent} Capacity</span>
                  </div>
                  <div className={`w-full h-2.5 rounded-full ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
                    <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000 shadow-md" style={{ width: lang.percent }}></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed pl-1">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="my-10"></div>

      {/* Deep Academic Section */}
      <section id="education" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="mb-16">
          <h4 className={`text-3xl font-black mb-3 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-cyan-500 font-mono text-xl">03.</span> Advanced Academic Ledger
          </h4>
          <p className={`text-sm max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive computational courses tracked inside the Bachelor of Science framework at Debre Berhan University.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {coreCurriculum.map((course, index) => (
            <div key={index} className={`border p-6 md:p-8 rounded-2xl flex flex-col justify-between ${darkMode ? 'bg-[#060a14] border-slate-900' : 'bg-white border-slate-200'}`}>
              <div>
                <span className="text-xs font-mono text-purple-400 block mb-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
                  {course.code} MODULE
                </span>
                <h5 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{course.name}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{course.focus}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>Status: Completed & Verified</span>
                <span>Institution: DBU</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-10"></div>

      {/* Secure Communications Terminal */}
      <section id="contact" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-500 font-mono text-xs mb-3 block uppercase tracking-widest">04. Secure Communications Terminal</span>
          <h4 className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Initialize Real-Time Project Inquiry</h4>
          <p className={`text-sm md:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            The input architecture below is **fully operational**. Submitting this vector route transmits transactional data securely via production API pathways directly to **gezahegnsintayehu3@gmail.com**.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side Info Blocks */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#090e1c] border-slate-900 shadow-xl' : 'bg-white border-slate-200'}`}>
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Central Node Control</h5>
              <p className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Audit repositories, open-source pull validation pipelines, and compiled components branches.</p>
              <a href="https://github.com/sintayehugezahegn" target="_blank" rel="noreferrer" className="inline-flex bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-3.5 rounded-xl transition w-full justify-center shadow-lg tracking-wider uppercase items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.5 3.5 0 01.1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5A10 10 0 0022 12A10 10 0 0012 2z"></path></svg>
                Access GitHub Node ↗
              </a>
            </div>

            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#090e1c] border-slate-900 shadow-xl' : 'bg-white border-slate-200'}`}>
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Instantaneous Transport Layer</h5>
              <p className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Direct interface gateway for fast operational negotiations and system reviews.</p>
              <a href="https://t.me/update12" target="_blank" rel="noreferrer" className="inline-flex bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-3.5 rounded-xl transition w-full justify-center shadow-lg tracking-wider uppercase items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path></svg>
                Secure Telegram Node ↗
              </a>
            </div>
          </div>

          {/* Form Control Box */}
          <div className={`lg:col-span-3 p-8 md:p-10 rounded-3xl border ${darkMode ? 'bg-[#090e1c] border-slate-900 shadow-2xl' : 'bg-white border-slate-200 shadow-lg'}`}>
            <h5 className={`text-xl font-bold mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Transmit Message Architecture</h5>
            
            <form action="https://formspree.io/f/mzdqpznw" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Identifier / Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="Enterprise Recruiter / Executive" 
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition focus:border-cyan-500 font-medium ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Return Address Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="recruiter@enterprise.com" 
                    className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition focus:border-cyan-500 font-medium ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Subject Classification</label>
                <input 
                  type="text" 
                  name="subject"
                  required 
                  placeholder="Technical Architecture Remote Requisition / Contract" 
                  className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition focus:border-cyan-500 font-medium ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Message Payload Core</label>
                <textarea 
                  name="message"
                  rows="5" 
                  required 
                  placeholder="Reviewing your clinical Machine Learning pipeline and decoupled Full-Stack components architectures, we would look to onboard your skillsets..." 
                  className={`w-full px-4 py-3.5 text-sm rounded-xl border outline-none transition focus:border-cyan-500 resize-none font-medium ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                ></textarea>
              </div>

              <input type="hidden" name="_next" value="https://sintayehugezahegn.dev" />
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold px-6 py-4 rounded-xl transition duration-300 shadow-xl shadow-cyan-500/10 text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>
                Transmit Payload
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;