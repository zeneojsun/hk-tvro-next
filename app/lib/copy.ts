// app/content/copy.ts
export type Lang = "en" | "zh";

export const copy = {
  nav: {
    solutions: { en: "Solutions", zh: "方案" },
    industries: { en: "Industries", zh: "行業" },
    whyus: { en: "Why Us", zh: "優勢" },
    process: { en: "Process", zh: "流程" },
    projects: { en: "Projects", zh: "案例" },
    contact: { en: "Contact", zh: "聯絡" },
    hiring: { en: "Hiring", zh: "招聘" },
    cta: { en: "Get in Touch", zh: "立即聯絡" },
  },

  hero: {
    eyebrow: { en: "Integrated Security & Technical Solutions", zh: "整合保安與技術方案" },
    title: { en: "HKTVRO", zh: "HKTVRO" },
    subtitle: {
      en: "Reliable system integration for surveillance, access control and communication infrastructure across Hong Kong.",
      zh: "為香港提供閉路電視、門禁與通訊基建的一站式系統整合服務，從設計到安裝與後續支援。",
    },
    primary: { en: "View Solutions", zh: "查看方案" },
    secondary: { en: "Contact Us", zh: "聯絡我們" },
    trust: { en: "Trusted by organisations across Hong Kong", zh: "深受香港各類機構信賴" },
  },

  solutions: {
    title: { en: "Our Solutions", zh: "我們的方案" },
    items: [
      {
        title: { en: "Surveillance Systems", zh: "監控系統" },
        desc: { en: "CCTV, network monitoring and integrated surveillance infrastructure.", zh: "閉路電視（CCTV）、網絡監控與整合式監控基建。" },
      },
      {
        title: { en: "Access Control", zh: "門禁系統" },
        desc: { en: "Smart access management including card systems and biometric readers.", zh: "門禁管理、卡片系統與生物識別讀卡器整合。" },
      },
      {
        title: { en: "Biometric Solutions", zh: "生物識別方案" },
        desc: { en: "Fingerprint and facial recognition systems for secure environments.", zh: "指紋與人臉識別，提升出入安全與管理效率。" },
      },
      {
        title: { en: "Satellite & Communication", zh: "衛星與通訊系統" },
        desc: { en: "Satellite TV and communication system integration services.", zh: "衛星電視與通訊系統整合、訊號分配與基建部署。" },
      },
    ],
  },

  industries: {
    title: { en: "Industries We Serve", zh: "服務行業" },
    items: [
      { title: { en: "Commercial Buildings", zh: "商業大廈" }, desc: { en: "Integrated security for commercial environments.", zh: "公共區域與出入口監控、門禁與訪客管理整合。" } },
      { title: { en: "Residential Estates", zh: "住宅屋苑" }, desc: { en: "Access and monitoring for modern housing communities.", zh: "住戶出入管理、停車場與公共空間監控方案。" } },
      { title: { en: "Offices & Retail", zh: "辦公室與零售" }, desc: { en: "Security for offices and retail spaces.", zh: "門店/辦公室安防、後勤區域管理與事件追蹤。" } },
      { title: { en: "Government & Institutions", zh: "政府與機構" }, desc: { en: "Solutions aligned with institutional requirements.", zh: "依循要求提供規劃、施工與維護支援。" } },
    ],
  },

  whyus: {
    title: { en: "Why Choose HKTVRO", zh: "為何選擇 HKTVRO" },
    items: [
      { title: { en: "20+ Years of Experience", zh: "20+ 年經驗" }, desc: { en: "Reliable delivery across Hong Kong.", zh: "深耕本地項目，熟悉不同場地與規格要求。" } },
      { title: { en: "Tailored System Design", zh: "度身訂造設計" }, desc: { en: "Designed around your needs and constraints.", zh: "先理解現場限制與目標，再提供最合適的方案配置。" } },
      { title: { en: "Reliable Installation", zh: "可靠安裝與交付" }, desc: { en: "Professional implementation and testing.", zh: "專業施工、清晰驗收，確保系統穩定運行。" } },
      { title: { en: "Ongoing Technical Support", zh: "持續技術支援" }, desc: { en: "Maintenance and upgrade support.", zh: "提供保養、維修與升級建議，減少停機風險。" } },
    ],
  },

  process: {
    title: { en: "Our Working Process", zh: "我們的工作流程" },
    steps: [
      { k: "01", title: { en: "Site Assessment", zh: "現場評估" }, desc: { en: "Understand requirements and constraints.", zh: "了解環境、出入口與佈線限制，釐清需求與風險。" } },
      { k: "02", title: { en: "Design & Proposal", zh: "方案設計與報價" }, desc: { en: "Provide design and transparent quotation.", zh: "提供系統架構建議、設備清單與透明報價。" } },
      { k: "03", title: { en: "Installation & Testing", zh: "安裝與測試" }, desc: { en: "Install, configure and test performance.", zh: "專業安裝、配置與功能測試，確保性能與穩定性。" } },
      { k: "04", title: { en: "Handover & Support", zh: "交付與支援" }, desc: { en: "Handover docs and ongoing support.", zh: "提供文件與操作說明，並提供後續維護支援。" } },
    ],
  },

  projects: {
    title: { en: "Selected Projects", zh: "精選項目" },
    items: [
      { title: { en: "Commercial Office Tower", zh: "商業辦公大樓" }, scope: { en: "CCTV, access control & network integration", zh: "CCTV、門禁及網絡整合" }, outcome: { en: "Improved security operations and monitoring.", zh: "提升出入管理效率與公共區域安全。" } },
      { title: { en: "Residential Estate", zh: "住宅屋苑" }, scope: { en: "Biometric access & visitor management", zh: "生物識別門禁及訪客管理" }, outcome: { en: "Better access experience and lower admin overhead.", zh: "改善住戶出入體驗並降低管理成本。" } },
      { title: { en: "Retail & Commercial Complex", zh: "零售與商業綜合體" }, scope: { en: "Surveillance + signal distribution", zh: "監控佈點、訊號整合" }, outcome: { en: "Stronger loss prevention and incident tracking.", zh: "加強防損與事件追蹤能力。" } },
    ],
  },

  contact: {
    title: { en: "Contact", zh: "聯絡我們" },
    desc: { en: "Tell us your site and requirements — we’ll get back to you shortly.", zh: "告訴我們你的場地類型與需求，我們會盡快回覆並提供建議。" },
    name: { en: "Name", zh: "姓名" },
    email: { en: "Email", zh: "電郵" },
    message: { en: "Message", zh: "訊息" },
    messagePh: { en: "Tell us what you need…", zh: "例如：安裝地點、系統類型、預計時間…" },
    send: { en: "Send", zh: "提交" },
  },

  hiring: {
    title: { en: "Hiring", zh: "招聘" },
    desc: { en: "We welcome technicians and partners. Please email us to apply.", zh: "我們歡迎技術員與合作夥伴加入。請電郵聯絡我們提交簡介。" },
  },

  footer: {
    line: { en: "Integrated security and technical solutions for Hong Kong.", zh: "為香港提供整合保安與通訊基建的專業系統整合服務。" },
    phoneLabel: { en: "Phone", zh: "電話" },
    emailLabel: { en: "Email", zh: "電郵" },
    coverageLabel: { en: "Coverage", zh: "服務範圍" },
    coverage: { en: "Hong Kong", zh: "全港" },
  },
} as const;

export function getLang(sp: URLSearchParams | null): Lang {
  const v = sp?.get("lang");
  return v === "zh" ? "zh" : "en";
}