<template>
   <section>
      <!--<video :controls="controls" :onplay="onplay" poster="/qtservice/images/vposter.jpg" @click="onPlay">-->
      <!--<video controls poster="/qtservice/images/vposter.jpg" ref="video" @progress="progress" @timeupdate="timeupdate" style="object-fit:fill" webkit-playsinline="true" playsinline="true" x5-video-player-type="h5">-->
      <div class="video">
         <img src="/qtservice/images/poster.png" alt="poster" ref="poster" @click.prevent="playVideo">
         <video ref="video"  preload="load" controls @timeupdate="timeupdate" @click.prevent="playPause" @canplay="loadstart" @pause="pause" style="object-fit:fill" x5-video-player-type="h5" webkit-playsinline playsinline x5-playsinline x5-video-player-fullscreen="true">
            <source src="/qtservice/video.mp4" type="video/mp4">
            您的浏览器不支持 video 标签。
         </video>
      </div>
      <!------------------------------------------------------------------------------------------------------------------------>
      <div class="title">澳洲留学知识百科</div>
      <div class="sub_title">澳洲入境攻略</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590999&idx=1&sn=02f116fabbde8d242acf2ad998ca5924&chksm=8b07bf98bc70368ea4561b155f8cb3cf79a8becbe34404a1b3f5876058d483fa967ff982d736&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/640.png" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>电子护照通关指南</span>
            </div>
         </a>
         <router-link to="/pdfviewer">
            <div>
               <img src="/qtservice/images/videoImage/registration-card.png" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>入境乘客登记卡练习样本</span>
            </div>
         </router-link>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">中澳差异解读</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591470&idx=1&sn=610a7ab7a165720281264a1dd0a60212&chksm=8b07b1e1bc7038f75fb3528b8cc6faa6446cbffc6b689330207b8bf1b713236184525d444fbc&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link.jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>中澳生活差异</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590417&idx=1&sn=5764ff260c62e344e3d22d7998eb8050&chksm=8b07bddebc7034c83593e835aff5517cdcad8c3fdc5e3e606fa8dd959dc8189125cbb20f8fa0&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (1).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>中澳文化差异</span>
            </div>
         </a>
      </div>
      <!-------------------------------------------------->
      <div class="sub_title">澳洲生活小百科</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591424&idx=1&sn=f1cac646b2a21d946c6ebabba32dc6fa&chksm=8b07b1cfbc7038d969b35c27d93fe5729eeeb557341cc9075c54eca6a3d59a3c68fb38e3d9af&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (2).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲生活小常识</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591388&idx=1&sn=6e2b4876a020e19af237b19312189ac4&chksm=8b07b113bc7038051c9eff62abb78876ea9630abac0e762ad5408f6f6d95d7df46d3022ee1ef&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link.gif" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何在澳洲求助报警</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661589884&idx=1&sn=7edbc5b27e97b87ad6b3ae3e3bbf8a23&chksm=8b07bb33bc7032259d01aded24b1e07d0412281a89a4a76f6d4e37414a57fde0d90a52afff4e#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (3).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>悉尼地区交通卡使用方法</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590357&idx=1&sn=0b995620b99108ec0550731c10883c77&chksm=8b07bd1abc70340c8c27f4e7a30ecfb1b7d091f4bddd7f8c1d64a9cfe38e59a073f21f8289b7&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (4).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲奇特蔬果知多少</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590368&idx=1&sn=e1294a11a87dcf52d5282f1a208033eb&chksm=8b07bd2fbc703439209d3cc019b4195f5d5e97517f38f3bbc792a25c313ab3d379760d9fc98a&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link.png" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲生活必备手机APP</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590855&idx=1&sn=c03012a5c0b48f964c46a9cc4ec30533&chksm=8b07bf08bc70361e46419d7e2cdae11a4da2f356f26f6f2c6bdd1cfa473bb3fdffbd78dedcb0&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (5).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何申请澳洲税号</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591053&idx=1&sn=5ac3631776dbbd7ec42e253b213ef1ad&chksm=8b07b042bc70395472083f9d7f54152281289269b52a8e94921415858adb2ad8e86d044da920&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (6).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>海外学生健康保险OSHC小科普</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591327&idx=1&sn=2781eb767cc0e596dfd54293ae3ede21&chksm=8b07b150bc7038461bf3e155f53b678afb2b0396e2a8c3e2c5922d975c108b45f783c545607f&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (7).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲驾照小常识</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591234&idx=1&sn=711e0acf9f36308890b070a76be97a90&chksm=8b07b08dbc70399b4e1f8d1f30189a636933412be781fd22bdc69236d678d315c259f42f3e8d&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (8).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>在澳洲期间护照遗失或过期怎么办</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590708&idx=1&sn=98ccda9287a51fa2c695abd67d463be0&chksm=8b07befbbc7037ed4ae40d4ce950c81bbc4b6fba0ac241da240e15ee43fe3638f88e5f2f2e65&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (9).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>女生必看，男生止步</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲住宿常识</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590013&idx=1&sn=5e189df0b8fc519b3dd27e41d10ee756&chksm=8b07bbb2bc7032a4c4216e70d2a4879c8980117bdcb78f756a12fd3f17e7a6049f37d8c3a83f&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (10).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何与寄宿家庭相处</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591011&idx=1&sn=ecbb0ea5e8278af850bf16e1bc136404&chksm=8b07bfacbc7036ba7e6204ca22387706631b5c12c892739dd88cbd719f362d682ddaf1d3b9d6&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (11).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲租房小贴士</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591286&idx=1&sn=12872cc7376de6ce43eeeb39e45d364c&chksm=8b07b0b9bc7039af707b6e8f108ba2fc8c1e18c9e6c87c93a4920f80492b16565c91dcf289e8&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (12).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何看懂澳洲水电煤账单</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲节日</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590833&idx=1&sn=a1efa958c725bff8eedb301e4966a4e3&chksm=8b07bf7ebc7036680ff85697cb2b904d9b5323ffe3c039d3f610a0d1b895d87d539c4c32b2dc&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (13).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳大利亚国庆节</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590252&idx=1&sn=a58be1699043582ac3508d0a6af327e4&chksm=8b07bca3bc7035b5f7876786bcab8b7cdeb66f9242b7d9e93308df35dc73edcc5821d60694b8&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (14).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>英女皇寿辰</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590066&idx=1&sn=6cfd6ed5347850f4036a70baf7c335b2&chksm=8b07bc7dbc70356bce5cc1fcc9c0ca018d190170f8876b8dcac4215fe77ad158c3450fae8d22&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (15).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>劳动节</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590044&idx=1&sn=e8f7e2ecf2c855abf49c7049ca14d63e&chksm=8b07bc53bc703545f9e983107c9f84f1e5948eca5d5d194b392cec37bfb41b688a94173cc453&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (16).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳新军团日</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661589978&idx=1&sn=9e60db42dd2e4c0f094f84eb033631a0&chksm=8b07bb95bc703283c427e1d8e2f24f2da34c1496ff8e81b9e4ffd744970b5048bc7dbf346005&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (17).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>复活节</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591037&idx=1&sn=baab883e85eba0e9c8edd59e0adc5468&chksm=8b07bfb2bc7036a46bd4182fa344d794b6055d39a4de9a1cc2b03f67c75316d55460bbf6ee2e#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (18).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>复活节打卡圣地-Royal Easter Show</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲校园生活与学习</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590157&idx=1&sn=4113d0f1743be196ff7622ad311890ae&chksm=8b07bcc2bc7035d4475985f9b3bdf511eb70c2b3de4f9a0a8949cdcb72fc426154c0c5069550&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (19).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲大学商科课程介绍</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590661&idx=1&sn=fb1928aca0684821911bfe58005b3ecd&chksm=8b07becabc7037dc495037ca55f7592e7525cf12fa8d9a97b4e56e39a4d2dc4f6f18b64128ee&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (20).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>校内活动项目介绍</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590230&idx=1&sn=a1c9a7c448e0a359b7a85650951dd33e&chksm=8b07bc99bc70358f057159e550abdcef2f09d2cbdae4cf47e2e3bf1b14e88520a6670652ce51&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (1).gif" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>校内美食分享</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590297&idx=1&sn=40f703bb7e74693578df9701262a2210&chksm=8b07bd56bc703440ea24077198d9c1712a8141fa17edc2ec01858208ebf52a4f91f9c11c36f6&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (21).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何申请志愿者</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲高考制度解读</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591374&idx=1&sn=c9e0219b90ce4f6b0f4b2328c6d28b0c&chksm=8b07b101bc7038179ea14872732a628ec7ca6e8443fdb7a76517a86ee4cc49d8a97fb70f26a3&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (22).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲高考科目及时间表</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591260&idx=1&sn=decde489a85b7c606193adf779dd2114&chksm=8b07b093bc703985e6a36461fae5e98234ed58856993376c906e3efa34f80ade4254c71d7656&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (1).png" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>如何填报澳洲高考志愿</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲移民专业解析</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s/bH1-_Nf1Wje3qH21kzw1og">
            <div>
               <img src="/qtservice/images/videoImage/link (23).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>教师专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591530&idx=1&sn=c59fb975113d3486f70f0eb85c25784c&chksm=8b07b1a5bc7038b31366313ccaa086736dd8a036ab2aa486e89e008bd2413bd51f463b16b573#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (24).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>实验医学专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591451&idx=1&sn=204f9b43ffdb5419bc7b07001ad572f6&chksm=8b07b1d4bc7038c254fced95fde832d45cf1b45c72410e18c4d0d46dd44afd8a0ce83e08fb12#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (25).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>社会工作专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590668&idx=1&sn=27550d35fe3733f5017eca16e1ff978d&chksm=8b07bec3bc7037d550b159e4eed7d5e197df771eefd82c3439d99b7616ef92533ee2e7ef8781#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (26).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>护理专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590621&idx=1&sn=765737ce10f4f6a2e72a0640f45684c3&chksm=8b07be12bc7037047d158ae5e8a15dc5cb732bc2827ddc5d3969fff68f32a7060d656987a652#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (27).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>工程造价专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590566&idx=1&sn=1117419b7fe6efd3a7476a26f67f6d47&chksm=8b07be69bc70377fba7671ab274699f170f9bf4e962fcbf5fc914957db03b444c72b1a2e3ede&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (28).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>计算机专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590593&idx=1&sn=11a46b549166969f2bd7f28156320873&chksm=8b07be0ebc703718d395f40baa7cadf124fb1143ac347761e95ef9da658ab973eb15f3f98b42&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (29).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>房地产评估专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590543&idx=1&sn=ffecf51b2b00e8613acdce82e7110748&chksm=8b07be40bc703756e4ef41e30e43fa2d67f72b981f30df14b78347cc7a8361420297b0415ca4&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (30).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>会计专业</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590553&idx=1&sn=89410353677bbbf3aad173c80111ca48&chksm=8b07be56bc703740a441bfce462224d193e60d40ce4e8fd032e8e30f2525771ac024d70a3a4e&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (31).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>工程专业</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">留学生毕业实习小常识</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591307&idx=1&sn=55bb91d369ccd2ce367762e14fd5446d&chksm=8b07b144bc70385258657c9dd5304787b7d465b1ba52abf16d719ed59bc3a35bdd85a0eb6b14&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (32).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>毕业生工作签证VS打工度假签证</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591061&idx=1&sn=5f3049399dea940b4da3d11ebd93a737&chksm=8b07b05abc70394c42bfb2fcb7a0662509ed2f21748139c9fd597c5d678b3d07e9a5d91edec7#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (33).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>毕业生工作签证申请须知</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590489&idx=1&sn=3e4852e6ddfbe3b078cd2fcc8efddcd4&chksm=8b07bd96bc7034805dd2eab5dd2597a7bbd1b4a99abe0c9bc20046a08f62ff221f803beac0cc&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (34).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲本地实习项目</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">澳洲离境退税指南</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590889&idx=1&sn=ead696c827c2c224e63fc6de84e58460&chksm=8b07bf26bc7036305d555c8cc765501c1545d4261cf6ea8c2e0d0405e37a9b6b4c1012f9ddd5&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (35).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲游客退税计划TRS</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------->
      <div class="sub_title">前途出国澳洲分公司服务内容介绍</div>
      <div class="link_list">
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661589785&idx=1&sn=9a0a37c57d91e32d8491c5dd7d7cfead&chksm=8b07bb56bc7032409160464e33fd7320d25f700fda630ab88ba1b03afe27111263001eadae68&token=210950455&lang=zh_CN#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (36).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>前途出国澳洲分公司【留学服务】介绍</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661591254&idx=1&sn=6bb940ad112b341ee8da9e0e7cb2c545&chksm=8b07b099bc70398f55068f490219237f898e9e6aa8cdfe901a5527edeb4d0e871dd1f8b9e923#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (37).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>选择澳洲留学【关爱计划】的100个理由</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590257&idx=1&sn=49771392c8348bfd74133f56fdaed65c&chksm=8b07bcbebc7035a86ec8e00b574a02b2167cb870126a47de6406dfd07bf52821c7528b9ddf58#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (2).png" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲留学【关爱计划】服务内容介绍</span>
            </div>
         </a>
         <a href="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590274&idx=1&sn=604764cecdf3901c10477523fc44f2a8&chksm=8b07bd4dbc70345b1c98a1055a1262e5f0aeafbe21e5c3b2e0550a905faef9c31c374ebb4f16#rd">
            <div>
               <img src="/qtservice/images/videoImage/link (38).jpg" onerror="onerror=null;src='/qtservice/images/onerror.png'">
               <span>澳洲留学【关爱计划】青年导师介绍</span>
            </div>
         </a>
      </div>
      <!------------------------------------------------------------------------------------------------------------------------>
      <!--<div class="title">入境旅客登机卡</div>-->
      <!--<div class="link_list">-->
      <!--<router-link to="/pdfviewer">-->
      <!--<div>-->
      <!--<img src="/qtservice/images/registration-card.png" onerror="onerror=null;src='/qtservice/images/onerror.png'">-->
      <!--<span>入境乘客登记卡(空白版)</span>-->
      <!--</div>-->
      <!--</router-link>-->
      <!--</div>-->
   </section>
</template>


<script>
   export default {
      name: "Video",
      data() {
         return {
            controls: false,
            onplay: false,
         }
      },
      methods: {
         onPlay() {
            this.onplay = true;
            this.controls = true;
         },
         loadstart() {
            this.$refs.video.currentTime = this.playTime
         },
         timeupdate() {
            localStorage.setItem("playTime", parseInt(this.$refs.video.currentTime))
         },
         pause() {
            this.$refs.poster.classList.remove('active');
            this.$refs.video.classList.remove('active');
         },
         playVideo() {
            this.$refs.poster.classList.add('active');
            this.$refs.video.classList.add('active');
            this.$refs.video.play()
         },
         playPause() {
            if (this.$refs.video.paused)
               this.$refs.video.play();
            else
               this.$refs.video.pause();
         },

         // goBack() {
         //    this.$router.replace({path: '/'});
         //    //replace替换原路由，作用是避免回退死循环
         // }
         // toBrowser() {
         //    window.location.href = window.location.protocol + '//' + window.location.host + '/qtservice/registration-card.pdf';
         // }
      },
      created() {
         this.playTime = localStorage.getItem("playTime")


         // function pushHistory() {
         //    var state = {
         //       title: "title",
         //       url: "#"
         //    }
         //    window.history.pushState(state, "title", "#");
         // }
         //
         // pushHistory()
         //
         // window.addEventListener("popstate", function (e) {
         //    alert(1)
         //    wx.closeWindow();
         // }, false);


      },
      mounted() {
         this.$refs.video.currentTime = this.playTime;
         // console.log(' this.$refs.video.currentTime ', this.$refs.video.currentTime)

         // if (window.history && window.history.pushState) {
         //    history.pushState(null, null, document.URL);
         //    window.addEventListener('popstate', this.goBack, false);
         // }
      },
      destroyed() {
         // window.removeEventListener('popstate', this.goBack, false)
      }
   }
</script>

<style lang="scss" scoped>
   .video {
      width: 100%;
      /*height: 100vh;*/

      img {
         width: 100%;
         /*height: 30vh;*/
         /*display: block;*/
         vertical-align: bottom;
         &.active {
            width: 0;
            height: 0;
            opacity: 0;
         }
      }
      video {
         width: 0;
         height: 0;
         opacity: 0;
         &.active {
            width: 100%;
            height: 100vh;
            opacity: 1;
         }
      }
   }

   .title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 14px;
      background-color: #F0F0F6;
   }

   .sub_title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 14px;
      font-weight: bold;
      border-top: 1px solid #DEDEDE;
   }

   .link_list {
      width: 100%;
      /*height: 30px;*/
      div {
         width: calc(100% - 40px);
         height: 30px;
         margin: 5px 20px;
         padding: 10px 0 5px;
         background-color: #fff;
         /*border-top: 1px solid #000;*/
         & + div {
            border-top: 1px solid #F3F3F3;
         }

         &::after {
            content: "";
            width: 0;
            height: 0;
            display: inline-block;
            opacity: 0;
            clear: both;
         }

         img {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            display: block;
            float: left;
            vertical-align: middle;
         }
         span {
            width: calc(100% - 40px);
            height: 30px;
            line-height: 30px;
            /*display: inline-block;*/
            overflow: hidden;
            /*text-overflow: ellipsis;*/
            /*white-space: nowrap;*/
            float: left;
            position: relative;
            margin-left: 10px;
            color: #2B2B2B;
            /* &::after {
                content: "...";
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-indent: 10px;
                font-weight: bold;
                display: inline-block;
                position: absolute;
                top: 0;
                right: 0;
                background-color: #fff;
                color: #333333;
             }*/
            &.active {
               height: auto;
               overflow: auto;
               white-space: normal;
               &::after {
                  display: none;
               }
            }
         }
      }
   }
</style>