import{_ as i,r as l,o as p,c as d,a as e,b as s,d as a,e as t}from"./app-Bl0CpIkI.js";const r={},o=e("h2",{id:"plugin-market",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-market"},[e("span",null,"Plugin Market:")])],-1),c={href:"https://plugin.scope-sentry.top/",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="plugin-template" tabindex="-1"><a class="header-anchor" href="#plugin-template"><span>Plugin Template</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git clone https://github.com/Autumn-27/ScopeSentry-Plugin-Template.git</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The plugin template provides demos of the AssetHandle module and the SubdomainScan module</p><p>https://github.com/Autumn-27/ScopeSentry-Plugin-Template/tree/main/plugin/AssetHandle</p><p>https://github.com/Autumn-27/ScopeSentry-Plugin-Template/tree/main/plugin/SubdomainScan</p><h2 id="system-module" tabindex="-1"><a class="header-anchor" href="#system-module"><span>System module</span></a></h2><p>The plugin system divides the entire process into 13 modules</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&quot;TargetHandler&quot;,</span></span>
<span class="line"><span>&quot;SubdomainScan&quot;,</span></span>
<span class="line"><span>&quot;SubdomainSecurity&quot;,</span></span>
<span class="line"><span>&quot;AssetMapping&quot;,</span></span>
<span class="line"><span>&quot;PortScanPreparation&quot;,</span></span>
<span class="line"><span>&quot;PortScan&quot;,</span></span>
<span class="line"><span>&quot;PortFingerprint&quot;,</span></span>
<span class="line"><span>&quot;AssetHandle&quot;,</span></span>
<span class="line"><span>&quot;URLScan&quot;,</span></span>
<span class="line"><span>&quot;URLSecurity&quot;,</span></span>
<span class="line"><span>&quot;WebCrawler&quot;,</span></span>
<span class="line"><span>&quot;DirScan&quot;,</span></span>
<span class="line"><span>&quot;VulnerabilityScan&quot;,</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugin-file" tabindex="-1"><a class="header-anchor" href="#plugin-file"><span>Plugin file</span></a></h2><p>Two files are required to import plugins</p><h3 id="info-json" tabindex="-1"><a class="header-anchor" href="#info-json"><span>info.json</span></a></h3><blockquote><p>info.json</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;help&quot;:&quot;No parameters&quot;,</span></span>
<span class="line"><span>&quot;parameter&quot;:&quot;&quot;,</span></span>
<span class="line"><span>&quot;name&quot;:&quot;SubdomainScanDemo&quot;,</span></span>
<span class="line"><span>&quot;module&quot;: &quot;SubdomainScan&quot;,</span></span>
<span class="line"><span>&quot;version&quot;:&quot;v1.0&quot;,</span></span>
<span class="line"><span>&quot;introduction&quot;:&quot;Subdomain Scan Module demo/Demo of SubdomainScan module&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>help: parameter prompt information</li><li>parameter: parameter</li><li>name: plugin name</li><li>module: module (module needs to be accurate)</li><li>version: version</li><li>introduction: plugin introduction</li></ul><h3 id="plugin-go" tabindex="-1"><a class="header-anchor" href="#plugin-go"><span>plugin.go</span></a></h3><blockquote><p>plugin.go (plugin source code)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>package plugin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func GetName() string {</span></span>
<span class="line"><span>return &quot;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Install() error {</span></span>
<span class="line"><span>return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Check() error {</span></span>
<span class="line"><span>return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Uninstall() error {</span></span>
<span class="line"><span>return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Execute(input interface{}, op options.PluginOption) (interface{}, error) {</span></span>
<span class="line"><span>return nil, nil</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="plugin-coding-requirements" tabindex="-1"><a class="header-anchor" href="#plugin-coding-requirements"><span>Plugin coding requirements</span></a></h4><ol><li>The package name needs to be plugin</li><li>Five methods need to be provided, and the return value of GetName needs to be consistent with info.json</li></ol><ul><li>GetName</li><li>Install</li><li>Check</li><li>Uninstall</li><li>Execute</li></ul><ol start="3"><li>When the system loads a plug-in, it executes the Install() and Check() methods, and when it uninstalls, it executes the Uninstall() method.</li><li>The Execute method is the actual function executed.</li></ol><h4 id="execute-method" tabindex="-1"><a class="header-anchor" href="#execute-method"><span>Execute method</span></a></h4><p>The parameters of the Execute method are input interface{} and op options.PluginOption</p><p>PluginOption is defined in</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>https://github.com/Autumn-27/ScopeSentry-Plugin-Template/blob/a76ac430153faff262e3d9a7cc25d0d23bee5f9d/internal/options/plugin.go#L10</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>input is input</p><p>op.ResultFunc is output</p><p>Special modules include AssetHandle, PortScanPreparation, and PortFingerprint. Input is a reference. Modifying input directly is to modify the result.</p><p>Other modules call op.ResultFunc callback function to return the result after obtaining the result</p><h2 id="built-in-methods-that-plugins-can-call" tabindex="-1"><a class="header-anchor" href="#built-in-methods-that-plugins-can-call"><span>Built-in methods that plugins can call</span></a></h2><p>Currently, due to the limitations of the plugin system, third-party libraries cannot be called, so some methods are built into the system for calling, as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/pkg/logger</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/pkg/utils</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/options</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/bigcache</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/config</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/contextmanager</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/i nternal/global</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/interfaces</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/mongodb</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/notification</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/pool</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/redis</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/results</span></span>
<span class="line"><span>github.com/Autumn-27/ScopeSentry-Scan/internal/types</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All the methods below the packages mentioned above can be called,</p><blockquote><p>The main ones used are as follows logger: log package, log provides local printing and printing methods sent to redis, please refer to the source code for details</p></blockquote><p>utils: the toolkit provides a variety of methods, get the current time, multiple command execution methods, send http requests, send dns requests</p><p>bigcache: memory-based cache management, cache can be used for deduplication</p><p>contextmanager: context manager, each task will create a context, the task suspension and deletion depends on this context management, when writing plug-ins, if you need to stop the function, you need to use this context.</p><p>global: store some global variables, including node name and other information</p><p>mongodb: mongodb connector</p><p>redis: redis connector</p><p>notification: used to send notifications</p><p>pool: coroutine pool management</p><p>results: result processing</p><p>types: structure</p><h2 id="input-and-output-of-each-module" tabindex="-1"><a class="header-anchor" href="#input-and-output-of-each-module"><span>Input and output of each module</span></a></h2><h3 id="targethandler" tabindex="-1"><a class="header-anchor" href="#targethandler"><span>TargetHandler</span></a></h3>`,46),h={href:"https://github.com/Autumn-27/ScopeSentry-Scan/blob/1.5-restructure/modules/targethandler/targetparser/targetparser.go",target:"_blank",rel:"noopener noreferrer"},m=t('<p>This plug-in will process the original target, see the code comments for details.</p><p>This module can expand the functions, such as the original input data is &quot;Baidu&quot;, write a new plug-in to process the original target of the company name and call some APIs or other methods to obtain some domain names and other information of the target.</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>string</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>string</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="subdomainscan" tabindex="-1"><a class="header-anchor" href="#subdomainscan"><span>SubdomainScan</span></a></h3><p>This module is a subdomain scanning module, which can integrate any subdomain tool</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>string</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.SubdomainResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="subdomainsecurity" tabindex="-1"><a class="header-anchor" href="#subdomainsecurity"><span>SubdomainSecurity</span></a></h3><p>This module is a subdomain security detection module, which detects the scanned domain name and stores the result in SubdoaminTakerResult</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.SubdomainResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.SubTakeResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="portscanpreparation" tabindex="-1"><a class="header-anchor" href="#portscanpreparation"><span>PortScanPreparation</span></a></h3><p>This module mainly performs some processing before port scanning, and handles whether to skip port scanning. A simple CDN judgment is built in. If it is CDN, port scanning is skipped.</p><p>The input of this module is a reference, and DomainSkip will be modified directly</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>*types.DomainSkip</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Modify the input directly</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="portscan" tabindex="-1"><a class="header-anchor" href="#portscan"><span>PortScan</span></a></h3><p>This module mainly performs port survival scanning</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.DomainSkip</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.PortAlive</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="portfingerprint" tabindex="-1"><a class="header-anchor" href="#portfingerprint"><span>PortFingerprint</span></a></h3><p>This module performs port fingerprinting on live ports. It also directly modifies the input. The Type attribute is divided into &quot;http&quot; and &quot;other&quot;. The remaining attributes can refer to the information in the database.</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>*types.AssetOther</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Modify the input directly</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="assetmapping" tabindex="-1"><a class="header-anchor" href="#assetmapping"><span>AssetMapping</span></a></h3><p>This module processes http assets</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetOther</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="assethandle" tabindex="-1"><a class="header-anchor" href="#assethandle"><span>AssetHandle</span></a></h3><p>This module processes scanned assets. The built-in plug-in calls the web fingerprint recognition to perform fingerprint recognition on http assets. It can be expanded to perform weak password scanning on non-http ports (currently there is no built-in plug-in). Assets can also be tagged in this module.</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetOther or types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetOther or types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="urlscan" tabindex="-1"><a class="header-anchor" href="#urlscan"><span>URLScan</span></a></h3><p>This module discovers urls for http assets. At the same time, if the first parameter returned by the Execute method is a []string url list, it will be sent to the crawler module together</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.UrlResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="webcrawler" tabindex="-1"><a class="header-anchor" href="#webcrawler"><span>WebCrawler</span></a></h3><p>This module is a crawler module. The built-in plug-in is the rad crawler. The input of this module is the url found by the previous url scan</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[]string</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.CrawlerResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="urlsecurity" tabindex="-1"><a class="header-anchor" href="#urlsecurity"><span>URLSecurity</span></a></h3><p>This module processes the results of url scanning and crawler scanning, such as the built-in plug-in scanning for sensitive information leakage and using url as the target of page monitoring.</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.CrawlerResult or types.UrlResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>This module has no fixed output. If you want to store it in the database, you need to do it yourself in the Execute method</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dirscan" tabindex="-1"><a class="header-anchor" href="#dirscan"><span>DirScan</span></a></h3><p>Directory scanning module</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.DirResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vulnerabilityscan" tabindex="-1"><a class="header-anchor" href="#vulnerabilityscan"><span>VulnerabilityScan</span></a></h3><p>Vulnerability scanning module</p><blockquote><p>input</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.AssetOther or types.AssetHttp</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>output</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>types.VulnResult</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',79);function v(g,b){const n=l("ExternalLinkIcon");return p(),d("div",null,[o,e("p",null,[e("a",c,[s("Plugin Market"),a(n)])]),u,e("p",null,[s("This module mainly processes the original input target, such as: "),e("a",h,[s("targetparser"),a(n)])]),m])}const x=i(r,[["render",v],["__file","index.html.vue"]]),f=JSON.parse(`{"path":"/en/guide/2ixl876k/","title":"Writing Tutorials","lang":"en-US","frontmatter":{"title":"Writing Tutorials","author":"Autumn","createTime":"2024/11/17 20:17:33","permalink":"/en/guide/2ixl876k/","icon":"mdi:cast-tutorial","description":"Plugin Market: Plugin Market Plugin Template The plugin template provides demos of the AssetHandle module and the SubdomainScan module https://github.com/Autumn-27/ScopeSentry-P...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.scope-sentry.top/guide/2ixl876k/"}],["meta",{"property":"og:url","content":"https://www.scope-sentry.top/en/guide/2ixl876k/"}],["meta",{"property":"og:site_name","content":"ScopeSentry"}],["meta",{"property":"og:title","content":"Writing Tutorials"}],["meta",{"property":"og:description","content":"Plugin Market: Plugin Market Plugin Template The plugin template provides demos of the AssetHandle module and the SubdomainScan module https://github.com/Autumn-27/ScopeSentry-P..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"Autumn"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Writing Tutorials\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Autumn\\"}]}"]]},"headers":[{"level":2,"title":"Plugin Market:","slug":"plugin-market","link":"#plugin-market","children":[]},{"level":2,"title":"Plugin Template","slug":"plugin-template","link":"#plugin-template","children":[]},{"level":2,"title":"System module","slug":"system-module","link":"#system-module","children":[]},{"level":2,"title":"Plugin file","slug":"plugin-file","link":"#plugin-file","children":[{"level":3,"title":"info.json","slug":"info-json","link":"#info-json","children":[]},{"level":3,"title":"plugin.go","slug":"plugin-go","link":"#plugin-go","children":[]}]},{"level":2,"title":"Built-in methods that plugins can call","slug":"built-in-methods-that-plugins-can-call","link":"#built-in-methods-that-plugins-can-call","children":[]},{"level":2,"title":"Input and output of each module","slug":"input-and-output-of-each-module","link":"#input-and-output-of-each-module","children":[{"level":3,"title":"TargetHandler","slug":"targethandler","link":"#targethandler","children":[]},{"level":3,"title":"SubdomainScan","slug":"subdomainscan","link":"#subdomainscan","children":[]},{"level":3,"title":"SubdomainSecurity","slug":"subdomainsecurity","link":"#subdomainsecurity","children":[]},{"level":3,"title":"PortScanPreparation","slug":"portscanpreparation","link":"#portscanpreparation","children":[]},{"level":3,"title":"PortScan","slug":"portscan","link":"#portscan","children":[]},{"level":3,"title":"PortFingerprint","slug":"portfingerprint","link":"#portfingerprint","children":[]},{"level":3,"title":"AssetMapping","slug":"assetmapping","link":"#assetmapping","children":[]},{"level":3,"title":"AssetHandle","slug":"assethandle","link":"#assethandle","children":[]},{"level":3,"title":"URLScan","slug":"urlscan","link":"#urlscan","children":[]},{"level":3,"title":"WebCrawler","slug":"webcrawler","link":"#webcrawler","children":[]},{"level":3,"title":"URLSecurity","slug":"urlsecurity","link":"#urlsecurity","children":[]},{"level":3,"title":"DirScan","slug":"dirscan","link":"#dirscan","children":[]},{"level":3,"title":"VulnerabilityScan","slug":"vulnerabilityscan","link":"#vulnerabilityscan","children":[]}]}],"readingTime":{"minutes":3.26,"words":977},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"en/notes/guide/PluginGuide/Tutorials.md","categoryList":[{"type":10000,"name":"notes"},{"type":10001,"name":"guide"},{"type":10004,"name":"PluginGuide"}]}`);export{x as comp,f as data};
