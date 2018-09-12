<template>
  <div class="loading"></div>
</template>

<style>
  .loading {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 180px auto 0;
      animation: loading .5s infinite alternate;
  }

  @keyframes loading {
      0% {
          transform: scale(1);
          background: #ccc;
      }
      100% {
          transform: scale(4);
          background: #5a5555;
      }
  }
</style>
