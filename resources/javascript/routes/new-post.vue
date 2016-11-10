<template lang="html">
  <div class="">
  <h2>hello new post</h2>

  <div class="col-xs-6">
    <textarea name="name" rows="8" cols="40" v-model="content"></textarea>
  </div>
  <div class="col-xs-6">
    {{ content }}
  </div>
  </div>
</template>

<script>
  import showdown from 'showdown';
  const converter = new showdown.Converter();


export default {
  data() {
    return {
      content: '',
    };
  },

  methods: {

  },
};
</script>
