<template>
  <div>
    <input
      v-model="queryString"
      @keyup.enter="search"
      type="search"
      placeholder="Search for gif"
      class="search-field"
    >
    <div class="search-results">
      <img
        v-for="result in searchResults"
        :key="result.id"
        :src="result.images.fixed_width.url"
        class="search-results__item"
      >
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'GSearch',
  data() {
    return {
      queryString: '',
      searchResults: []
    };
  },
  methods: {
    search() {
      api.search(this.queryString).then(response => {
        this.searchResults = response.data;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.search-field {
  -webkit-appearance: none;
  width: 100%;
  max-width: 500px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #383a3c;
  margin-bottom: 30px;
  padding: 5px;

  &:focus {
    outline: 0;
  }
}
.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &__item {
    padding: 5px;
  }
}
</style>