<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="ml-2">Network System Lab</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>

      <v-toolbar-items class="mx-auto">
        <v-btn text>Home</v-btn>
        <v-btn text>Member</v-btn>
        <v-btn text>Research</v-btn>
        <v-btn text>Publication</v-btn>
        <v-btn text>Photo</v-btn>
        <v-btn text>Lecture</v-btn>
      </v-toolbar-items>

      <template>
        <v-btn small rounded text>Sign In</v-btn>
        <v-btn small rounded color="primary" dark>Sign Up</v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
};
</script>

<style></style>
