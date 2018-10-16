<template>
   <div class="container main-wrap">
    <div class="flex article-wrap">
      <!-- 文章列表  -->
      <div class="flex-item article-lf">
        <!-- 循环数据 -->
        <div class="box" v-for="item of 6" :key='item'>
          <p>
            <a href="htts://www.baidu.com" class="title">极客Sen-PHP开发工程师</a>
          </p>
          <p class="time-text">
            Published on <a href="/" class="time">2018-01-01</a>
          </p>
          <p class="comments">
            上一章说过引用(REFERENCE)在PHP5的时候是一个标志位, 而在PHP7以后我们把它变成了一种新的类型:IS_REFERNCE. 然而引用是一种很常见的应用, 所以这个变化带来了很多的变化, 也给我们在做PHP7开发的时候, 因为有的时候疏忽忘了处理这个类型, 而带来不少的bug.
          </p>
          <p class="source">Filed in  <a href="">PHP7</a>, PHP源码分析with 32 Comments</p>

        </div>
      </div>
        <!-- 标签部分 -->
      <div class="flex-auto article-rt">
          <div class="hot-arts">
              <p class="authoer-img">
                  <img src="../assets/sen.png" alt="" style="width:90px;padding:12px 5px 15px 20px;">
              </p>

            <div class="author-info">
                <ul>
                  <li><h3>极客Sen </h3></li>
                  <li>专注于程序研究30年，精通PHP，Java</li>
              </ul>
            </div>    
          </div>
          <div class="hot-tabs">
              
          </div>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
    name:"Index",
}
</script>
<style lang="scss">
  .main-wrap{
    margin-top: -4rem;
    .flex{
      display: flex;
      .box{
        background-color: #fff;
        box-shadow: 0 0 2px 0 rgba(58, 58, 58, 0.2);
      }
      .flex-item{
        flex: 1;
      }
      .flex-auto{
        flex: 0;
      }
    }
    .article-lf{
      .box{
        padding: 30px 52px;
        margin-bottom: 24px;
        .title{
          transition: all .2s;
          font-size: 24px;
          line-height: 38px;
          color: #333;
          font-weight: 700;
          &:hover{
            color: #7d7d7d;
          }
        }
        .time-text{
          font-size: 12px;
          color: #333;
          .time{
            font-weight: 700;
            color: #333;
            text-decoration: underline;
          }
        }
        .comments{
          margin: 24px 0;
          color: rgba(51,51,51,.8);
          font-size: 16px;
          line-height: 22px;
        }
        .source{
          $color:  #333;
          color: $color;
          font-size: 12px;
          a{
            color: $color;
            font-weight: 700;
          }
        }
      }
    }
    .article-rt{
      $color: #fff;
      margin-top: 1.5rem;
      $wid: 34%;
      margin-left: 3%;
      width: $wid;
      flex-basis: $wid;
      min-width: 34%;
      .hot-arts{
          background-color: $color;
          width: 100%;
          height: 90px;
          .authoer-img{
              float: left;
              position: relative;
          }
          .author-info{
            float: left;
            position: relative;
            line-height:150%;
            margin: 12px 5px 15px 20px;
          }
      }
      .hot-tabs{
          background-color: $color;
          margin-top: 2rem;
          width: 100%;
          height: 400px;

      }
    }
  }
</style>


