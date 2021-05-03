Vue.component('portfolio-item', {
    data: function () {
        return {
            title:"test", desc:null, tech:["tailwind css","vanilla js", "vue", "MetaMask API"], image:null, source:null, link:null
        }
      },
    props: ['path'],
    template: `
    <div class="bg-white rounded-lg shadow w-1/3 h-96 font-sans text-gray-600 px-5">
        <h1 class="text-grey-800 text-center text-5xl mt-5">{{this.title}}</h1>
        <p class="text-gray-400 text-sm italic text-center">{{techList}}</p>
    </div>
    `,
    computed: {
        techList:function(){
          return "made with " + this.tech.join(", ")
        }
      }
})

var app = new Vue({el: '#app', data: {}})