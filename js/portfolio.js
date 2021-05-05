Vue.component('portfolio-item', {
    data: function () {
        return {
            title:"ERROR", desc:null, tech:[], image:null, source:null, link:null, learned:[]
        }
      },
    props: ['path'],
    template: `
    <div class="bg-white text-center rounded-lg shadow w-5/6 font-sans text-gray-600 px-5 py-3">
        <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <a :href=this.link>
            <h1 class="text-grey-800 text-center text-5xl mt-5">{{this.title}}</h1>
            <p class="text-gray-400 text-xs px-10 italic text-center">{{techList}}</p>
            <img class="mx-auto px-10 w-full py-5 object-cover" :src=this.image>
            </a>
        </div>
        <div class="my-auto ">
            <div class="text-gray-900 bg-gray-100 shadow px-8 py-3 rounded-lg mx-auto w-5/6 text-base text-center"><p class="text-xl font-bold italic">what is it?</p>{{this.desc}}</div>
            <div class="text-gray-900 bg-gray-100 shadow px-8 py-3 mt-2 rounded-lg mx-auto w-5/6 text-base text-center"><p class="text-xl font-bold italic">lessons learned</p><ul class="text-left list-disc"><li class="text-sm" v-for="lesson in this.learned">{{lesson}}</li></ul></div>
            <a class="text-blue-500 text-xs hover:text-blue-700" :href=this.source>source code</a>
            <a class="text-blue-500 text-xs hover:text-blue-700" :href=this.link>link to project</a>
        
            </div>
        </div>
    </div>
    `,
    computed: {
        techList:function(){
          return "made with " + this.tech.join(", ")
        }
    },
    mounted() {
        fetch('/json/' + this.path).then(response => response.json())
        .then(data => {
            this.title = data.title
            this.desc = data.desc
            this.tech = data.tech
            this.link = data.link
            this.image = data.image
            this.source = data.source
            this.learned = data.learned
        });
    }
})

var app = new Vue({el: '#app', data: {}})