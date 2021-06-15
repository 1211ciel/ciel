<template>
  <div>
    <div class="page-header">
      <h1>国家索引 <small>部分国家</small></h1>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h2>亚洲</h2>
        <dl>
          <dt>东亚</dt>
          <dd>中国,
            <router-link to="/japan">日本</router-link>
            ,韩国,朝鲜
          </dd>
          <dt>东南亚</dt>
          <dd>菲律宾,马来西亚,柬埔寨,新加坡,泰国,越南,缅甸,印度尼西亚</dd>
          <dt>南亚</dt>
          <dd>巴基斯坦,马尔代夫,印度,尼泊尔,斯里兰卡</dd>
          <dt>中亚</dt>
          <dt>西亚</dt>
          <dd>土耳其,叙利亚,阿富汗,伊朗,伊拉克</dd>
          <dt>北亚</dt>
          <dd>俄罗斯</dd>
        </dl>
      </div>
      <div class="col-md-3">
        <h2>欧洲</h2>
        <dl>
          <dt>西欧</dt>
          <dd>英国,爱尔兰,法国,荷兰,比利时,卢森堡</dd>
          <dt>南欧</dt>
          <dd>意大利,葡萄牙,西班牙,希腊</dd>
          <dt>中欧</dt>
          <dd>德国,奥地利,瑞士,匈牙利,波兰,捷克</dd>
          <dt>北欧</dt>
          <dd>丹麦,挪威,瑞典,芬兰,冰岛</dd>
          <dt>东欧</dt>
          <dd>俄罗斯,白俄罗斯,乌克兰,塞尔维亚,罗马尼亚</dd>
        </dl>
        <h2>北美洲</h2>
        <dl>
          <dt>北美洲</dt>
          <dd>
            <router-link to="/usa">美国</router-link>
            ,加拿大
          </dd>
          <dt>中美洲</dt>
          <dd>墨西哥,海地</dd>
          <dt>南美洲</dt>
          <dd>阿根廷,巴西,智利,秘鲁</dd>
        </dl>
      </div>
      <div class="col-md-3">
        <h2>非洲</h2>
        <dl>
          <dt>非洲</dt>
          <dd>安哥拉,埃及,冈比亚,尼日尔,南非,西班牙</dd>
        </dl>
      </div>
      <div class="col-md-3">
        <h2>大洋洲</h2>
        <dt>大洋洲</dt>
        <dd>澳大利亚,新西兰,夏威夷,中途岛,复活岛</dd>
        <h2>南美洲</h2>
        <h2>南极洲</h2>
      </div>
    </div>

    <!--    -->
    <div class="page-header">
      <h1>世界历史 <small></small></h1>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h2>
          <router-link to="/stoneAge">石器时代</router-link>
        </h2>
        <dl>
          <dt> 旧石器时代 (二十万年前)</dt>
          <dt> 中石器时代</dt>
          <dt> 新石器时代 (约公元前一万年开始)</dt>
        </dl>
        <h2>
          <router-link to="/riseOfCivilization">文明的兴起</router-link>
        </h2>
        <dl>
          <dt>城邦 (公约前三千五百年开始)</dt>
          <dt>城市与贸易 (公元前三千五百年)</dt>
          <dt>宗教与哲学</dt>
        </dl>
      </div>
      <div class="col-md-4">
        <h2><router-link to="/middleAges">中世纪</router-link></h2>
        <dl>
          <dt>中世纪封建时代 (公元前一世纪)</dt>
          <dt>文明传播与交流</dt>
        </dl>
        <h2><router-link to="/modernTimes">近代</router-link></h2>
        <dl>
          <dt>欧洲的兴起</dt>
          <dd>欧洲称雄世界的背景</dd>
          <dd>工业文明的崛起</dd>
        </dl>
      </div>
      <div class="col-md-4">
        <h2><router-link to="/twentiethCentury">二十世纪</router-link></h2>
        <dl>
          <dt>科技主导</dt>
          <dt>全球化与西方化</dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category"
}
</script>

<style scoped>

</style>