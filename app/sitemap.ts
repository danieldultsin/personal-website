// IMPORTANT: Do not run sitemap with lastModified value of previous url endpoints

export default async function sitemap() {
  return [
    {
      url: "https://dultsin.com",
      lastModified: new Date("2025-03-01"),
      priority: 1,
    },
    {
      url: "https://dultsin.com/contact",
      lastModified: new Date("2025-03-01"),
      priority: 0.5,
    },
    {
      url: "https://dultsin.com/consulting",
      lastModified: new Date("2025-03-01"),
      priority: 0.5,
    },
  ];
}
