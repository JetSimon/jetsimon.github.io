Vue.component('portfolio-item', {
    data: function () {
        return {
            title:"ERROR", desc:null, tech:[], image:null, source:null, link:null, learned:[]
        }
      },
    props: ['path'],
    template: `
    <div class="bg-white text-center w-full font-sans text-gray-600 px-5 py-5">
        <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <a :href=this.link>
            <h1 class="text-black font-comfort text-center text-5xl mt-5">{{this.title}}</h1>
            <p class="text-gray-400 text-xs px-10 italic text-center">{{techList}}</p>
            <img class="mx-auto px-10 w-full py-5 object-cover" :src=this.image>
            </a>
        </div>
        <div class="my-auto ">
            <div class="text-gray-900 bg-gray-100 shadow px-8 py-3 rounded-lg mx-auto w-5/6 text-base text-center"><p class="text-xl font-semibold font-comfort italic">what is it?</p>{{this.desc}}</div>
            <div class="text-gray-900 bg-gray-100 shadow px-8 py-3 mt-2 rounded-lg mx-auto w-5/6 text-base text-center"><p class="text-xl font-semibold font-comfort italic">lessons learned</p><ul class="text-left list-disc"><li class="text-sm" v-for="lesson in this.learned">{{lesson}}</li></ul></div>
            <a class="text-blue-500 text-xs hover:text-blue-700" :href=this.source>source code</a>
            <a class="text-blue-500 text-xs hover:text-blue-700" :href=this.link>link to project</a>
        
            </div>
        </div>
        <hr class="mt-16 text-gray-300">
    </div>
    `,
    computed: {
        techList:function(){
          return "made with " + this.tech.join(", ")
        }
    },
    mounted() {
        fetch('/projects/' + this.path).then(response => response.json())
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

Vue.component('navbar', {
    template: `<div>
    <div class="flex content-center mx-auto">
        <a href="../" class="mx-auto flex text-6xl font-comfort font-bold text-black mt-16">jet simon 👦</a>
    </div>

    <div class="flex content-center mx-auto pb-2">
        <div class="text-center mx-auto mt-5 flex text-2xl font-comfort font-semibold text-gray-800">Web & Game Developer / General Maker of Things</div>
    </div>

    <div class="w-1/2 md:w-2/3 xl:w-1/2 flex flex-wrap gap-5 content-center mx-auto">
        <a href="../" class="hover:text-blue-800 mx-auto mt-5 flex text-xl font-comfort font-semibold text-gray-800">About Me</a>
        <a href="../portfolio" class="hover:text-blue-800 mx-auto mt-5 flex text-xl font-comfort font-semibold text-gray-800">Portfolio</a>
        <a href="../blog" class="hover:text-blue-800 mx-auto mt-5 flex text-xl font-comfort font-semibold text-gray-800">Blog</a>
        <a href="../public/resume.pdf" class="hover:text-blue-800 mx-auto mt-5 flex text-xl font-comfort font-semibold text-gray-800">Resume</a>
    </div></div>
    `
})


var app = new Vue({el: '#app', data: {}})




