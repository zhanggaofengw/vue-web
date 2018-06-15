<template>
  <div class="left-menu">
    <div class="menu">
      <ul>
        <router-link to="/about" tag="li" @mouseenter.native="showMessage('要去首页看看吗')"
                     @mouseleave.native="showMessage()">
          <a>
            <i class="icon home"></i>
            <span>首页</span>
          </a>
        </router-link>
        <router-link to="/about" tag="li" @mouseenter.native="showMessage('要去关于看看吗')"
                     @mouseleave.native="showMessage()">
          <a>
            <i class="icon about"></i>
            <span>关于</span>
          </a>
        </router-link>
        <router-link to="/about" tag="li" @mouseenter.native="showMessage('要去归档看看吗')"
                     @mouseleave.native="showMessage()">
          <a>
            <i class="icon file"></i>
            <span>归档</span>
          </a>
        </router-link>
        <router-link to="/about" tag="li" @mouseenter.native="showMessage('要去分类看看吗')"
                     @mouseleave.native="showMessage()">
          <a>
            <i class="icon sort"></i>
            <span>分类</span>
          </a>
        </router-link>
        <router-link to="/about" tag="li" @mouseenter.native="showMessage('要去标签看看吗')"
                     @mouseleave.native="showMessage()">
          <a>
            <i class="icon tag"></i>
            <span>标签</span>
          </a>
        </router-link>
      </ul>
    </div>
    <div id="about">
      <div class="avatar">
        <img src="./avatar.png" alt="" width="100">
        <div class="name mt10 mb10">ZGF</div>
        <div class="description pb10">平淡是真</div>
      </div>
      <div class="sorts mt10">
        <dl class="pr10 pb5 pt5">
          <dt class="pb5">1</dt>
          <dd>日志</dd>
        </dl>
        <dl class="pr10 pb5 pt5 pl10">
          <dt class="pb5">2</dt>
          <dd>分类</dd>
        </dl>
        <dl class="pb5 pt5 pl10">
          <dt class="pb5">3</dt>
          <dd>标签</dd>
        </dl>
      </div>
      <div class="links">
        <a href="https://github.com/zhanggaofengw" target="_blank">
          <i class="icon gitHub"></i>
          <span>GitHub</span>
        </a>
      </div>
    </div>
    <div class="message mt5 pt10 pb10">
      <span>{{message}}</span>
    </div>
    <canvas id="live2d" width="200" height="200"></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        message: '欢迎来到首页'
      }
    },
    methods: {
      showMessage(message) {
        if (message) {
          this.message = message
        } else {
        //  this.message = '欢迎来到首页'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        loadlive2d("live2d", "../../../static/live2d/model/tia/model.json")
      })
    }
  }
</script>

<style>
  .left-menu .menu, .left-menu #about, .left-menu .message {
    width: 200px;
  }

  .left-menu #about {
    text-align: center;
    margin-top: 20px;
  }

  .left-menu .message {
    text-align: center;
    background: rgba(77, 57, 76, .8);
    border-radius: 10px;
    box-shadow: 0 3px 15px 2px rgba(77, 57, 76, 0.4);
    animation: shake 50s ease-in-out 5s infinite;
  }

  .menu ul, .left-menu #about {
    padding: 20px 0;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-shadow: 5px 5px 10px #888888;
  }

  #about .name {
    font-size: 16px;
    font-weight: bold;
  }

  #about dl {
    display: inline-block;
  }

  #about dl:not(:last-child) {
    border-right: 1px solid #ccc;
  }

  #about .links {
    text-align: left;
    margin: 15px 10px 0;
    padding: 15px 5px;
    border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
  }

  #about .links a {
    display: flex;
    align-items: center;
    color: #000;
  }

  .menu li {
    height: 30px;
    line-height: 30px;
  }

  .menu li:hover {
    background: #ccc;
  }

  .menu a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
  }

  .menu .icon, .links .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../../common/image/icon.png') no-repeat;
    margin-right: 15px;
  }

  .links .icon.gitHub {
    margin: 0;
    padding-right: 8px;
    background-position: 0px -50px;
  }

  .menu .icon.home {
    background-position: -20px 0px;
  }

  .menu li:hover a {
    color: #409eff;
  }

  .menu li:hover .icon.home {
    background-position: -20px -20px;
  }

  .menu .icon.about {
    background-position: -40px 0px;
  }

  .menu li:hover .icon.about {
    background-position: -40px -20px;
  }

  .menu .icon.file {
    background-position: -100px 0px;
  }

  .menu li:hover .icon.file {
    background-position: -100px -20px;
  }

  .menu .icon.sort {
    background-position: -80px 0px;
  }

  .menu li:hover .icon.sort {
    background-position: -80px -20px;
  }

  .menu .icon.tag {
    background-position: -60px 0px;
  }

  .menu li:hover .icon.tag {
    background-position: -60px -20px;
  }

  .left-menu .avatar img {
    border-radius: 50%;
  }

  @keyframes shake {
    2% {
      transform: translate(0.5px, -1.5px) rotate(-0.5deg);
    }

    4% {
      transform: translate(0.5px, 1.5px) rotate(1.5deg);
    }

    6% {
      transform: translate(1.5px, 1.5px) rotate(1.5deg);
    }

    8% {
      transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }

    10% {
      transform: translate(0.5px, 2.5px) rotate(0.5deg);
    }

    12% {
      transform: translate(1.5px, 1.5px) rotate(0.5deg);
    }

    14% {
      transform: translate(0.5px, 0.5px) rotate(0.5deg);
    }

    16% {
      transform: translate(-1.5px, -0.5px) rotate(1.5deg);
    }

    18% {
      transform: translate(0.5px, 0.5px) rotate(1.5deg);
    }

    20% {
      transform: translate(2.5px, 2.5px) rotate(1.5deg);
    }

    22% {
      transform: translate(0.5px, -1.5px) rotate(1.5deg);
    }

    24% {
      transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
    }

    26% {
      transform: translate(1.5px, 0.5px) rotate(1.5deg);
    }

    28% {
      transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
    }

    30% {
      transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }

    32% {
      transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    34% {
      transform: translate(2.5px, 2.5px) rotate(-0.5deg);
    }

    36% {
      transform: translate(0.5px, -1.5px) rotate(0.5deg);
    }

    38% {
      transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }

    40% {
      transform: translate(-0.5px, 2.5px) rotate(0.5deg);
    }

    42% {
      transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }

    44% {
      transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    46% {
      transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }

    48% {
      transform: translate(2.5px, -0.5px) rotate(0.5deg);
    }

    50% {
      transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    52% {
      transform: translate(-0.5px, 1.5px) rotate(0.5deg);
    }

    54% {
      transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    56% {
      transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }

    58% {
      transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }

    60% {
      transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    62% {
      transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }

    64% {
      transform: translate(-1.5px, 1.5px) rotate(1.5deg);
    }

    66% {
      transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }

    68% {
      transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    70% {
      transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }

    72% {
      transform: translate(-0.5px, -1.5px) rotate(1.5deg);
    }

    74% {
      transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }

    76% {
      transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }

    78% {
      transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }

    80% {
      transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }

    82% {
      transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }

    84% {
      transform: translate(-0.5px, 0.5px) rotate(1.5deg);
    }

    86% {
      transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }

    88% {
      transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }

    90% {
      transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
    }

    92% {
      transform: translate(-1.5px, -1.5px) rotate(1.5deg);
    }

    94% {
      transform: translate(0.5px, 0.5px) rotate(-0.5deg);
    }

    96% {
      transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }

    98% {
      transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
    }

    0%, 100% {
      transform: translate(0, 0) rotate(0);
    }
  }
</style>
