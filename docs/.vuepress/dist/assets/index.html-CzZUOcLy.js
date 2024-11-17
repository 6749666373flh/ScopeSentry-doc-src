import{_ as e}from"./image-1-CdUUpRTA.js";import{_ as s,o as n,c as a,e as i}from"./app-Bl0CpIkI.js";const p={},t=i(`<p>系统分为四个服务：</p><ul><li>web/server端-用于资产管理、任务管理等</li><li>scan端-用于扫描，可以在多台机器部署</li><li>Mongodb-数据库，只要web和scan能连接上这个数据库就行。</li><li>redis-redis，只要web和scan能连接上这个redis就行。</li></ul><h2 id="数据库-需要自建数据库或者使用docker搭建数据库" tabindex="-1"><a class="header-anchor" href="#数据库-需要自建数据库或者使用docker搭建数据库"><span>数据库（需要自建数据库或者使用docker搭建数据库）</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请确保安装了 docker 和 docker-compose</p><p>redis 和 MongoDb 可以不使用 docker 安装，自行按照设置账号密码就行。</p><p>mongodb和redis可以不使用用本教程提供的docker镜像，可以自行搭建。</p><p>版本： mongodb：7.0.4</p><p>redis:7.0.11</p></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Scan.git</span></span>
<span class="line"><span>cd ScopeSentry-Scan/build</span></span>
<span class="line"><span># 修改 .env文件中的REDIS_PASSWORD</span></span>
<span class="line"><span>docker-compose -f redis-docker-compose.yml up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>MongoDb</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Scan.git</span></span>
<span class="line"><span>cd ScopeSentry-Scan/build</span></span>
<span class="line"><span># 修改 .env文件中的MONGO_INITDB_ROOT_USERNAME、MONGO_INITDB_ROOT_PASSWORD</span></span>
<span class="line"><span>docker-compose -f mongodb-docker-compose.yml up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2><h3 id="web-server-端" tabindex="-1"><a class="header-anchor" href="#web-server-端"><span>Web/Server 端</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于内置数据较多，数据库初始化需要等待一段时间。</p><p>忘记密码进入 Mongodb 数据库修改 user 表中的 password 为 b0ce71fcbed8a6ca579d52800145119cc7d999dc8651b62dfc1ced9a984e6e64 重置为 ScopeSentry</p></div><h4 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>docker安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Scan.git</span></span>
<span class="line"><span>cd ScopeSentry-Scan/build</span></span>
<span class="line"><span># 修改 .env文件中的mongodb、redis账号密码以及地址端口</span></span>
<span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后可以使用<code>docker logs -f 容器id</code>查看容器日志，确保运行成功。</p><p>访问 http://IP:8082</p><p>安装过程docker日志会输出初始用户密码已经插件的二次验证密码。</p><h4 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装"><span>源码安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry.git</span></span>
<span class="line"><span>cd ScopeSentry</span></span>
<span class="line"><span>pip install -r requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录创建 config.yaml</p><p>内容如下,修改 Mongodb、Redis 的相关连接信息。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>logs:</span></span>
<span class="line"><span>  total_logs: 1000</span></span>
<span class="line"><span>mongodb:</span></span>
<span class="line"><span>  database_name: ScopeSentry</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  password: QckSdkg5CKvtxfec</span></span>
<span class="line"><span>  port: 27017</span></span>
<span class="line"><span>  username: root</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  password: ScopeSentry</span></span>
<span class="line"><span>  port: &#39;6379&#39;</span></span>
<span class="line"><span>system:</span></span>
<span class="line"><span>  timezone: Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后运行程序</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>python3 main.py</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="scan端" tabindex="-1"><a class="header-anchor" href="#scan端"><span>scan端</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Scan 端需要连接数据库并查询内置信息，所以需要等 Server 端运行成功(初始化数据库)之后再进行创建 Scan。推荐 docker 安装~</p></div><h4 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装"><span>Docker 安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Scan.git</span></span>
<span class="line"><span>cd ScopeSentry-Scan/build</span></span>
<span class="line"><span># 编辑 .env文件中Mongdb、Redis的连接信息，NodeName为节点名称，每个节点名称请保持唯一性（如果为空会随机生成，可在web界面更改名称）。</span></span>
<span class="line"><span>docker-compose -f scan-docker-compose.yml up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后可以使用<code>docker logs -f 容器id</code>查看容器日志，确保运行成功。</p><p>成功后如下图: <img src="`+e+`" alt="alt text"></p><h4 id="直接运行" tabindex="-1"><a class="header-anchor" href="#直接运行"><span>直接运行</span></a></h4><p>Linux 已经静态编译打包 libpcap，无需其他操作</p><p>爬虫依赖chrome浏览器参考https://github.com/chaitin/rad</p><p>下载 https://github.com/Autumn-27/ScopeSentry-Scan/releases</p><p>首次运行会生成配置文件，修改配置文件中的数据库地址，，NodeName 为节点名称，每个节点名称请保持唯一性</p><h4 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装"><span>编译安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Scan.git</span></span>
<span class="line"><span>cd ScopeSentry-Scan</span></span>
<span class="line"><span>go build -o dist/ScopeSentry ./cmd/ScopeSentry/main.go</span></span>
<span class="line"><span>cd dist</span></span>
<span class="line"><span>chmod +x ScopeSentry</span></span>
<span class="line"><span>./ScopeSentry</span></span>
<span class="line"><span>#首次运行会生成配置文件，修改配置文件中的数据库地址，重新运行</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要安装 libpcap 环境</p><p>Windows 下载 npcap 驱动</p><p>Linux 安装 libpcap</p><p>运行成功截图：</p><p><img src="`+e+`" alt="alt text"></p><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><h3 id="web-server端" tabindex="-1"><a class="header-anchor" href="#web-server端"><span>Web/Server端</span></a></h3><h4 id="源码安装-1" tabindex="-1"><a class="header-anchor" href="#源码安装-1"><span>源码安装</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry.git</span></span>
<span class="line"><span>cd ScopeSentry</span></span>
<span class="line"><span>pip install -r requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录创建 config.yaml</p><p>内容如下,修改 Mongodb、Redis 的相关连接信息。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>logs:</span></span>
<span class="line"><span>  total_logs: 1000</span></span>
<span class="line"><span>mongodb:</span></span>
<span class="line"><span>  database_name: ScopeSentry</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  password: QckSdkg5CKvtxfec</span></span>
<span class="line"><span>  port: 27017</span></span>
<span class="line"><span>  username: root</span></span>
<span class="line"><span>redis:</span></span>
<span class="line"><span>  ip: 127.0.0.1</span></span>
<span class="line"><span>  password: ScopeSentry</span></span>
<span class="line"><span>  port: &#39;6379&#39;</span></span>
<span class="line"><span>system:</span></span>
<span class="line"><span>  timezone: Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后运行程序</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>python3 main.py</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="scan端-1" tabindex="-1"><a class="header-anchor" href="#scan端-1"><span>Scan端</span></a></h3><p>需要安装 libpcap 环境</p><p>Windows 下载 npcap 驱动</p><p>下载 https://github.com/Autumn-27/ScopeSentry-Scan/releases</p><p>首次运行会生成配置文件，修改配置文件中的数据库地址，，NodeName 为节点名称，每个节点名称请保持唯一性</p><h2 id="数据迁移" tabindex="-1"><a class="header-anchor" href="#数据迁移"><span>数据迁移</span></a></h2><p>在数据库的docker配置文件中，有挂载目录设置，默认为当前运行目录的data目录，迁移数据时将文件迁移即可。</p>`,57),l=[t];function d(c,r){return n(),a("div",null,l)}const m=s(p,[["render",d],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/guide/Distributed/","title":"分布式","lang":"zh-CN","frontmatter":{"title":"分布式","author":"Autumn","icon":"fluent:text-align-distributed-20-regular","createTime":"2024/11/17 22:29:16","permalink":"/guide/Distributed/","description":"系统分为四个服务： web/server端-用于资产管理、任务管理等 scan端-用于扫描，可以在多台机器部署 Mongodb-数据库，只要web和scan能连接上这个数据库就行。 redis-redis，只要web和scan能连接上这个redis就行。 数据库（需要自建数据库或者使用docker搭建数据库） 提示 请确保安装了 docker 和 do...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.scope-sentry.top/en/guide/Distributed/"}],["meta",{"property":"og:url","content":"https://www.scope-sentry.top/guide/Distributed/"}],["meta",{"property":"og:site_name","content":"ScopeSentry"}],["meta",{"property":"og:title","content":"分布式"}],["meta",{"property":"og:description","content":"系统分为四个服务： web/server端-用于资产管理、任务管理等 scan端-用于扫描，可以在多台机器部署 Mongodb-数据库，只要web和scan能连接上这个数据库就行。 redis-redis，只要web和scan能连接上这个redis就行。 数据库（需要自建数据库或者使用docker搭建数据库） 提示 请确保安装了 docker 和 do..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.scope-sentry.top/images/image-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"Autumn"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式\\",\\"image\\":[\\"https://www.scope-sentry.top/images/image-1.png\\",\\"https://www.scope-sentry.top/images/image-1.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Autumn\\"}]}"]]},"headers":[{"level":2,"title":"数据库（需要自建数据库或者使用docker搭建数据库）","slug":"数据库-需要自建数据库或者使用docker搭建数据库","link":"#数据库-需要自建数据库或者使用docker搭建数据库","children":[{"level":3,"title":"redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"MongoDb","slug":"mongodb","link":"#mongodb","children":[]}]},{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[{"level":3,"title":"Web/Server 端","slug":"web-server-端","link":"#web-server-端","children":[]},{"level":3,"title":"scan端","slug":"scan端","link":"#scan端","children":[]}]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[{"level":3,"title":"Web/Server端","slug":"web-server端","link":"#web-server端","children":[]},{"level":3,"title":"Scan端","slug":"scan端-1","link":"#scan端-1","children":[]}]},{"level":2,"title":"数据迁移","slug":"数据迁移","link":"#数据迁移","children":[]}],"readingTime":{"minutes":3.12,"words":937},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"notes/guide/安装/分布式.md"}`);export{m as comp,h as data};
