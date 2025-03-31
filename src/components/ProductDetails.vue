<template>
  <div>
    <h1>Product List</h1>
    <button @click="toggleSortOrder">
      Sort by Price: {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
    </button>
    <ul>
      <li v-for="product in sortedProducts" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ formatPrice(product.price) }}</p>
        <p>Status: <span :class="{ available: product.available }">{{ product.available ? "Available" : "Out of stock" }}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", price: 99.99, available: true },
        { id: 2, name: "Product 2", price: 149.99, available: false },
        { id: 3, name: "Product 3", price: 89.99, available: true },
        { id: 4, name: "Product 4", price: 199.99, available: true },
        { id: 5, name: "Product 5", price: 49.99, available: false },
      ],
      sortOrder: "asc", // Начальный порядок сортировки
    };
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((a, b) => {
        return this.sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.available {
  color: green;
}
button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
