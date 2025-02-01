<template>
  <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10 flex-none">
    <aside>
    <AzuIcon/>
    <p>
      AzuCompany
      <br />
      Providing reliable tech since 2021
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Custom software</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
  </nav>
  </footer>
</template>
<script setup lang="ts">
  import AzuIcon from '../icons/AzuIcon.vue';
</script>
