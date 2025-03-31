<template>
  <main>
    <h1>Blog</h1>
    <!-- Фильтр по тегам -->
    <label for="tagFilter">Filter by tag:</label>
    <select id="tagFilter" v-model="selectedTag">
      <option value="">All Tags</option>
      <option v-for="tag in uniqueTags" :key="tag" :value="tag">{{ tag }}</option>
    </select>

    <!-- Список статей -->
    <ul>
      <li v-for="article in filteredArticles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>Tags: {{ article.tags.join(", ") }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      articles: [
        { id: 1, title: "Top 10 Smartphones of 2023", tags: ["Electronics", "Smartphones"] },
        { id: 2, title: "How to Choose the Best Laptop", tags: ["Electronics", "Laptops"] },
        { id: 3, title: "5 Must-Have Kitchen Gadgets", tags: ["Home", "Kitchen"] },
        { id: 4, title: "The Ultimate Guide to Gaming Consoles", tags: ["Gaming", "Electronics"] },
        { id: 5, title: "Trendy Fashion Accessories for 2023", tags: ["Fashion", "Accessories"] },
        { id: 6, title: "Best Furniture for Small Apartments", tags: ["Home", "Furniture"] },
        { id: 7, title: "Top 5 Fitness Trackers", tags: ["Fitness", "Wearables"] },
        { id: 8, title: "Affordable Home Decor Ideas", tags: ["Home", "Decor"] },
      ],
      selectedTag: "", // Хранит выбранный тег
    };
  },
  computed: {
    uniqueTags() {
      // Собираем уникальные теги из всех статей
      const allTags = this.articles.flatMap((article) => article.tags);
      return [...new Set(allTags)];
    },
    filteredArticles() {
      // Фильтруем статьи по выбранному тегу
      if (!this.selectedTag) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.tags.includes(this.selectedTag)
      );
    },
  },
};
</script>

<style scoped>
select {
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
h3 {
  margin: 0;
}
</style>
