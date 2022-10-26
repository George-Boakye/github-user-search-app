<template>
<Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
   Home
  }
}
</script>

<style lang="scss">
#app {
 font-family: 'Space Mono', monospace;
 
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1{
  font-size: var(--h1-text-size);
  line-height: var(--h1-line-height);
  color: var(--bold-text-color);
}
h3{
  font-size: var(--h3-text-size);
  line-height: var(--h3-line-height);
  color:#0079ff
}
h2{
  font-size: var(--h2-text-size);
  line-height: var(--h2-line-height);

    color: var(--bold-text-color);
}
h4{
  font-size: var(--h4-text-size);
  line-height: var(--h4-line-height);
    color: var(--thin-text-color);

}


html{
  background: var(--primary-color);
}


:root{
--primary-color: hsl(227, 100%, 98%);
--button-color:#0079ff;
--secondary-color:#fefefe;
--bold-text-color:#2b3442;
--thin-text-color:#697c9a;
--icon-color:#4b6a9b;

--h1-text-size:26px;
--h1-line-height:39px;

--h2-text-size:22px;
--h2-line-height:33px;

--h3-text-size:16px;
--h3-line-height:24px;

--h4-text-size:16px;
--h4-line-height:24px;


--body-text-size:15px;
--body-line-height:25px;


}

:root.dark-theme{
  --primary-color:#141d2f;
  --button-color:#0079ff;
  --secondary-color:#1e2a47;
  --bold-text-color:#fff;
  --thin-text-color:#fff;
  --icon-color:#fff;
}
</style>
