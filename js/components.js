const LATEST_POST = "what-now"

Vue.component('navbar', {
    template: `<div>
    <div class="flex content-center mx-auto">
        <a href="../" class="mx-auto flex text-4xl md:text-6xl font-comfort font-bold text-black mt-16">jet simon 👦</a>
    </div>

    <div class="flex content-center mx-auto pb-2">
        <div class="text-center mx-auto mt-5 flex text-sm md:text-2xl font-comfort font-semibold text-gray-800">Web & Game Developer / General Maker of Things</div>
    </div>

    <div class="w-3/4 md:w-2/3 xl:w-1/2 flex md:text-xl flex-wrap gap-5 content-center mx-auto">
        <a href="../" class="hover:text-blue-800 mx-auto mt-5 flex font-comfort font-semibold text-gray-800">About Me</a>
        <a href="../portfolio" class="hover:text-blue-800 mx-auto mt-5 flex font-comfort font-semibold text-gray-800">Portfolio</a>
        <a href="../blog" class="hover:text-blue-800 mx-auto mt-5 flex font-comfort font-semibold text-gray-800">Blog</a>
        <a href="../public/resume.pdf" class="hover:text-blue-800 mx-auto mt-5 flex font-comfort font-semibold text-gray-800">Resume</a>
    </div></div>
    `
})


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

Vue.component('blog-post', {
    data: function () {
        return {
            title:"", body:"", date:""
        }
      },
    template: `
    <div class="bg-white text-center w-full font-sans px-5">
        <div>
            <a :href="link" class="hover:text-gray-900 text-black font-comfort text-center text-3xl md:text-5xl">{{this.title}}</a>
            <p class="text-gray-600 text-center mb-5">{{date}}</p>
            <hr>
            <div id="post-body" class="mx-auto prose my-5 mt-7 text-xl tracking-wide leading-loose text-gray-900 text-left">{{this.body}}</div>
            <hr>
            <p class="my-5 text-center">Like what you've read? <a href="https://twitter.com/SimonJet" class="hover:text-blue-800 font-semibold text-gray-800">Follow me on Twitter</a> to see more!</p>
        </div>
    </div>
    `,
    computed: {
        techList:function(){
          return "made with " + this.tech.join(", ")
        },
        link:function(){
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const path = urlParams.get('post') || LATEST_POST
            if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            return "../blog.html?post=" + path;
            return "../blog?post=" + path
          }
    },
    mounted() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const path = urlParams.get('post') || LATEST_POST
        fetch('/posts/' + path + ".json").then(response => response.json())
        .then(data => {
            this.title = data.title
            this.date = data.date
            document.title = data.title + " by Jet Simon"
        });

        fetch('/posts/' + path + ".md") 
        .then(response => response.text())
        .then(result => {
            if(marked)
                document.getElementById('post-body').innerHTML = marked.parse(result);
            else 
            document.getElementById('post-body').innerHTML = result;
        })
    }
})

Vue.component('recent-posts', {
    data: function () {
        return {
            posts:[]
        }
      },
    template: `<div class="mx-auto text-center">
    <h1 class="font-semibold mb-3 text-xl font-comfort">Recent Posts</h1>
    <ul>
        <post-link v-for="post in posts.slice().reverse()" post-link :path=post></post-link>
    </ul>
    </div>
    `,
    mounted() {
        fetch('/posts/post-database.json').then(response => response.json())
        .then(data => {
            this.posts = data.posts
        });
    }
})

Vue.component('post-link', {
    data: function () {
        return {
            title:""
        }
      },
    props: ['path'],
    template: `<li><a :href=link class="text-xl text-center md:text-right hover:text-blue-800">{{title}}</a><hr class="my-2"></li>
    `,
    computed: {
        link:function(){
          if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            return "../blog.html?post=" + this.path;
          return "../blog?post=" + this.path
        }
    },
    mounted() {
        fetch('/posts/' + this.path + ".json").then(response => response.json())
        .then(data => {
            this.title = data.title
        })
    }
})




var app = new Vue({el: '#app', data: {}})




