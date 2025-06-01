export const SITE = {
  website: "https://ainfraboost.com", // senin domainin
  author: "Haluk Yılmaz",
  profile: "https://www.linkedin.com/in/halukyilmaz", // veya kişisel sayfan varsa
  desc: "Cloud, DevOps ve AI odaklı içerikler, sohbetler ve araç tanıtımları.",
  title: "AInfraBoost",
  ogImage: "ainfraboost.png", // /public altında yer alıyor
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 dakika
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Geliştirme Öner",
    url: "https://github.com/halukyilmaz55/ainfraboost/edit/main/",
  },
  dynamicOgImage: false,
  lang: "tr",
  timezone: "Europe/Istanbul",
} as const;
