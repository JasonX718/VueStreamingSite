<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <div class="bg-black p-10 rounded-lg w-full max-w-md">
      <h1 class="text-4xl text-white mb-6">Sign In</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-white mb-2">Email</label>
          <input
            type="email"
            class="w-full px-3 py-2 border border-gray-600 rounded"
            v-model="email"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-white mb-2">Password</label>
          <input
            type="password"
            class="w-full px-3 py-2 border border-gray-600 rounded"
            v-model="password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Sign In
        </button>
      </form>
      <div class="text-center mt-4">
        <a href="#" class="text-gray-400">Forgot your password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Email:', this.email, 'Password:', this.password);
      // Implement your authentication logic here.
    },
  },
};
</script>
