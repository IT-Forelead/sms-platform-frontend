<template>
  <div class="bg-white rounded-lg mt-3">
    <div class="bg-white px-7 py-5 flex items-center">
      <div class="flex items-center justify-center bg-red-700 h-16 w-16 border-1 border-gray-200 rounded-full">
        <div class="text-center text-white">
          <div class="text-xl font-bold">29</div>
          <div class="text-sm font-bold">DEK</div>
        </div>
      </div>
      <div class="ml-4">
        <p class="text-2xl font-semibold m-0 p-0">Jumaniyozov Surojiddin</p>
        <p class="text-lg text-gray-500 -mt-0.5 font-semibold">+998 (93) 747-59-95</p>
      </div>
    </div>
    <div class="messages-wrappper w-full h-full bg-layers py-8 px-5 relative">
      
      <div class="flex justify-center mb-4">
        <div class="py-1 px-3 rounded-3xl" style="background-color: #4a8e3a8c">
          <span class="text-white">12-dekabr, 2022-yil</span>
        </div>
      </div>

      <div class="flex justify-end mb-4">
        <div class="py-3 px-4 bg-blue-400 rounded-bl-3xl ml-24 rounded-tl-3xl rounded-tr-xl text-white bubble">Welcome to group everyone !</div>
      </div>

      <div class="flex justify-end mb-4">
        <div class="py-3 px-4 bg-blue-400 rounded-bl-3xl ml-24 rounded-tl-3xl rounded-tr-xl text-white bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium, aut ullam delectus odio error sit rem. Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?</div>
      </div>

      <div class="flex justify-center mb-4">
        <div class="py-1 px-3 rounded-3xl" style="background-color: #4a8e3a8c">
          <span class="text-white">12-dekabr, 2022-yil</span>
        </div>
      </div>

      <div class="flex justify-end mb-4">
        <div class="py-3 px-4 bg-blue-400 rounded-bl-3xl ml-24 rounded-tl-3xl rounded-tr-xl text-white bubble">Welcome to group everyone !</div>
      </div>

      <div class="flex justify-center mb-4">
        <div class="flex items-center py-3 px-3 bg-white rounded-bl-xl rounded-tl-xl rounded-tr-xl text-gray-400 bubble-white w-full">
          <button class="flex items-center text-4xl">
            <ion-icon name="happy-outline"></ion-icon>
          </button>
          <input class="mx-1 border-transparent focus:border-transparent focus:ring-0 w-full" type="text" placeholder="Message...">
          <button class="flex items-center text-4xl">
            <ion-icon name="attach-outline"></ion-icon>
          </button>
        </div>
        <div class="flex items-center bg-white text-blue-700 p-1 px-4 text-4xl rounded-full shadow ml-3">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.messages-wrappper {
  height: 60vh;
}
.bg-layers div.flex {
  position: relative;
  z-index: 10;
}
.bg-layers::before {
  background-image: url(../../../assets/images/chat-bg.png);
  box-sizing: border-box;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-layers::after {
  background-image: url(../../../assets/images/chat-bg-pattern-light.png);
  box-sizing: border-box;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-position: top left;
  background-size: 510px auto;
  background-repeat: repeat;
  mix-blend-mode: overlay;
}
.bubble:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  right: -13px;
  left: auto;
  top: auto;
  bottom: 0;
  transform: rotateZ(180deg);
  border: 15px solid;
  border-color: rgb(118, 169, 250) transparent transparent transparent;
}
.bubble-white:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  right: -13px;
  left: auto;
  top: auto;
  bottom: 0;
  transform: rotateZ(180deg);
  border: 15px solid;
  border-color: rgb(255, 255, 255) transparent transparent transparent;
}
</style>