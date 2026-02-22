// app/lib/i18n.ts
export type Lang = "en" | "zh";

export function getLangFromSearchParams(sp: URLSearchParams | null): Lang {
  const v = sp?.get("lang");
  return v === "zh" ? "zh" : "en";
}

export const copy = {
  nav: {
    solutions: { en: "Solutions",  zh: "方案" },
    industries: { en: "Industries", zh: "行业" },
    whyus:      { en: "Why Us",     zh: "优势" },
    process:    { en: "Process",    zh: "流程" },
    projects:   { en: "Projects",  zh: "案例" },
    contact:    { en: "Contact",   zh: "联系" },
    hiring:     { en: "Hiring",    zh: "招聘" },
  },

  cta: {
    getInTouch: { en: "Get in Touch", zh: "立即联系" },
  },

  hero: {
    eyebrow:    { en: "Integrated Security & Technical Solutions", zh: "综合安防与技术解决方案" },
    subtitle:   {
      en: "Reliable system integration for surveillance, access control and communication infrastructure across Hong Kong.",
      zh: "为香港企业及屋苑提供可靠的监控、门禁及通讯基础设施系统集成服务。",
    },
    cta1:       { en: "View Solutions", zh: "查看方案" },
    cta2:       { en: "Contact Us",     zh: "联系我们" },
    trustLabel: { en: "Trusted by organisations across Hong Kong", zh: "受香港各界机构信赖" },
    trustItems: [
      { en: "Property Management",  zh: "物业管理" },
      { en: "Commercial Offices",   zh: "商业办公" },
      { en: "Residential Estates",  zh: "住宅屋苑" },
      { en: "Retail Complexes",     zh: "零售商场" },
    ],
  },

  solutions: {
    title: { en: "Our Solutions", zh: "我们的方案" },
    items: [
      {
        title: { en: "Surveillance Systems",    zh: "监控系统" },
        body:  { en: "CCTV, network monitoring and integrated surveillance infrastructure.", zh: "闭路电视、网络监控及综合监控基础设施。" },
      },
      {
        title: { en: "Access Control",          zh: "门禁控制" },
        body:  { en: "Smart access management including card systems and biometric readers.", zh: "智能门禁管理，包括刷卡系统及生物识别读卡器。" },
      },
      {
        title: { en: "Biometric Solutions",     zh: "生物识别方案" },
        body:  { en: "Fingerprint and facial recognition systems for secure environments.", zh: "指纹及人脸识别系统，适用于高安全级别环境。" },
      },
      {
        title: { en: "Satellite & Communication", zh: "卫星及通讯" },
        body:  { en: "Satellite TV and communication system integration services.", zh: "卫星电视及通讯系统集成服务。" },
      },
    ],
  },

  industries: {
    title: { en: "Industries We Serve", zh: "服务行业" },
    items: [
      {
        title: { en: "Property Management",  zh: "物业管理" },
        body:  { en: "Integrated security and monitoring systems for estates and managed buildings.", zh: "为屋苑及受管物业提供综合安防及监控系统。" },
      },
      {
        title: { en: "Office Buildings",     zh: "商业办公楼" },
        body:  { en: "Access control, CCTV and network surveillance for corporate environments.", zh: "为企业环境提供门禁控制、闭路电视及网络监控。" },
      },
      {
        title: { en: "Residential Estates",  zh: "住宅屋苑" },
        body:  { en: "Biometric access and integrated monitoring systems for modern housing communities.", zh: "为现代住宅社区提供生物识别门禁及综合监控系统。" },
      },
    ],
  },

  whyus: {
    title: { en: "Why Choose HKTVRO", zh: "为什么选择HKTVRO" },
    items: [
      {
        title: { en: "20+ Years of Experience",        zh: "20年以上行业经验" },
        body:  {
          en: "With over two decades of industry experience, we deliver reliable, scalable and future-ready integrated security systems across Hong Kong.",
          zh: "凭借逾二十年的行业经验，我们为香港各地提供可靠、可扩展及面向未来的综合安防系统。",
        },
      },
      {
        title: { en: "Territory-Wide Service Coverage", zh: "全港服务覆盖" },
        body:  {
          en: "We provide professional installation, maintenance and support services throughout Hong Kong, ensuring rapid response and dependable technical assistance.",
          zh: "我们在全港提供专业安装、维护及支援服务，确保快速响应及可靠的技术协助。",
        },
      },
      {
        title: { en: "End-to-End Integration",          zh: "端到端系统整合" },
        body:  {
          en: "From system design to implementation and ongoing support, we handle the entire lifecycle of your security infrastructure.",
          zh: "从系统设计到实施及持续支援，我们全程负责您的安防基础设施生命周期管理。",
        },
      },
      {
        title: { en: "Professional Technical Team",     zh: "专业技术团队" },
        body:  {
          en: "Our technicians are experienced, certified and committed to delivering high-quality workmanship with attention to detail.",
          zh: "我们的技术人员经验丰富、持有专业认证，以严谨态度交付高质量工程。",
        },
      },
    ],
  },

  process: {
    title: { en: "Our Working Process", zh: "工作流程" },
    steps: [
      {
        n:     "01",
        title: { en: "Site Assessment",       zh: "现场评估" },
        body:  { en: "On-site evaluation to understand infrastructure, access points and requirements.", zh: "现场勘察，了解基础设施、出入口及项目需求。" },
      },
      {
        n:     "02",
        title: { en: "Design & Proposal",     zh: "设计与报价" },
        body:  { en: "Tailored system design with transparent quotation and technical specifications.", zh: "按需定制系统方案，提供透明报价及技术规格。" },
      },
      {
        n:     "03",
        title: { en: "Installation & Testing", zh: "安装与测试" },
        body:  { en: "Professional installation, system configuration and performance testing.", zh: "专业安装、系统配置及性能测试。" },
      },
      {
        n:     "04",
        title: { en: "Handover & Support",    zh: "验收与支援" },
        body:  { en: "Complete system handover with documentation and ongoing maintenance support.", zh: "完整系统验收交付，附文件记录及持续维护支援。" },
      },
    ],
  },

  projects: {
    title: { en: "Selected Projects", zh: "精选案例" },
    items: [
      {
        title:   { en: "Commercial Office Tower",      zh: "商业办公大楼" },
        scope:   { en: "Scope: CCTV, Access Control & Network Integration", zh: "范围：闭路电视、门禁控制及网络集成" },
        outcome: { en: "Outcome: Stable 24/7 monitoring and improved building security management.", zh: "成果：稳定全天候监控，提升大楼安全管理效能。" },
      },
      {
        title:   { en: "Residential Estate",           zh: "住宅屋苑" },
        scope:   { en: "Scope: Biometric Access & Visitor Management", zh: "范围：生物识别门禁及访客管理" },
        outcome: { en: "Outcome: Faster resident access and enhanced perimeter control.", zh: "成果：提升住户进出效率，加强周界管控。" },
      },
      {
        title:   { en: "Retail & Commercial Complex",  zh: "零售商业综合体" },
        scope:   { en: "Scope: Surveillance & Central Monitoring System", zh: "范围：监控及中央监察系统" },
        outcome: { en: "Outcome: Centralised monitoring and reduced operational risk.", zh: "成果：集中监控管理，降低运营风险。" },
      },
    ],
  },

  contact: {
    title:            { en: "Contact",              zh: "联系我们" },
    subtitle:         { en: "Get in touch and we'll respond as soon as possible.", zh: "欢迎与我们联系，我们将尽快回复。" },
    name:             { en: "Name",                 zh: "姓名" },
    namePlaceholder:  { en: "Your name",            zh: "您的姓名" },
    email:            { en: "Email",                zh: "电邮" },
    emailPlaceholder: { en: "you@email.com",        zh: "您的电邮" },
    message:          { en: "Message",              zh: "留言" },
    messagePlaceholder: { en: "Tell us what you need…", zh: "请告诉我们您的需求…" },
    send:             { en: "Send Message",         zh: "发送留言" },
    sending:          { en: "Sending…",             zh: "发送中…" },
    ok:               { en: "Sent. We'll reply soon.", zh: "已发送，我们将尽快回复。" },
    error:            { en: "Failed to send. Please email us directly.", zh: "发送失败，请直接发送电邮联系我们。" },
  },

  hiring: {
    title: { en: "Hiring", zh: "招聘" },
    desc:  { en: "We welcome technicians and installation partners. Please email us to apply.", zh: "我们欢迎技术人员及安装合作伙伴加入，请发送电邮申请。" },
  },

  footer: {
    tagline:       { en: "Integrated security and technical solutions for Hong Kong businesses and estates.", zh: "为香港企业及屋苑提供综合安防与技术解决方案。" },
    solutionsLabel: { en: "Solutions", zh: "方案" },
    solutionLinks: [
      { en: "Surveillance Systems",     zh: "监控系统" },
      { en: "Access Control",           zh: "门禁控制" },
      { en: "Biometric Solutions",      zh: "生物识别方案" },
      { en: "Satellite & Communication", zh: "卫星及通讯" },
    ],
    contactLabel:  { en: "Contact",            zh: "联系" },
    address:       { en: "Hong Kong SAR, China", zh: "香港特别行政区，中国" },
    copyright:     { en: "All rights reserved.", zh: "版权所有。" },
  },
} as const;
