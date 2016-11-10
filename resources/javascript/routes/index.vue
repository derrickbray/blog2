<template lang="html">
  <div class="">
  <h1>Is this working?</h1>

  <ul>
    <li v-for="post in posts">{{ post.title }}</li>
  </ul>
  </div>
</template>

<script>
export default {
    props: ['posts'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
