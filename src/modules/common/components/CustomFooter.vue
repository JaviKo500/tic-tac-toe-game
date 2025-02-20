<template>
  <!-- component -->
  <div
    class="py-4 rounded-lg mx-auto flex-row items-center justify-between overflow-hidden rounded-lg bg-base-300 px-6 flex w-screen">
    <div class="flex flex-row items-center space-x-3 text-sm ">
      <span class="flex items-center">
        <DateIcon />
        {{ new Date().toLocaleDateString() }}
      </span>

      <span class="flex items-center">
        <a target="_blank" class="hover:text-gray-400" href="https://github.com/JaviKo500" title="Go to github">
          @javiko500
        </a>
      </span>
    </div>

    <div class="">
      <ul class="flex items-center space-x-3">
        <li class="inline-block">
          <a target="_blank" class="hover:text-[#3b5998]" href="https://www.facebook.com/javier.gutierres.712"
            title="Go to Facebook">
            <FacebookIcon />
          </a>
        </li>
        <li class="inline-block">
          <a target="_blank" class="hover:text-[#00acee]" href="https://twitter.com/javiko500" title="Go to Twitter">
            <TwitterIcon />
          </a>
        </li>
        <li class="inline-block">
          <a target="_blank" class="hover:text-red-700" href="https://www.instagram.com/javiko500/"
            title="Go to Instagram">
            <InstagramIcon />
          </a>
        </li>
        <li class="inline-block">
          <a target="_blank" class="hover:text-gray-500" href="https://github.com/JaviKo500" title="Go to github">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import DateIcon from '../icons/DateIcon.vue';
import FacebookIcon from '../icons/FacebookIcon.vue';
import GitHubIcon from '../icons/GitHubIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
import TwitterIcon from '../icons/TwitterIcon.vue';

</script>
