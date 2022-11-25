import{_ as c,r as o,o as d,c as p,b as a,d as e,e as n,w as s,a as i}from"./app.c40d39d3.js";const u={},h={id:"alarms",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#alarms","aria-hidden":"true"},"#",-1),_=a("code",null,"ICSAlarm",-1),f=i(`<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> alarm<span class="token operator">:</span> ICSAlarm <span class="token operator">=</span> <span class="token punctuation">{</span>
  action<span class="token operator">:</span> <span class="token string">&#39;AUDIO&#39;</span><span class="token punctuation">,</span>
  trigger<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;1998-01-01T05:00:00Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  duration<span class="token operator">:</span> <span class="token punctuation">{</span>
    after<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    hours<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  attach<span class="token operator">:</span> <span class="token punctuation">{</span>
    params<span class="token operator">:</span> <span class="token string">&#39;FMTTYPE=audio/mp3&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;ftp://host.com/novo-procs/felizano.mp3&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h2><ul><li>Type: <code>string</code></li><li>Required: <strong>yes</strong></li><li>Valid value: any of <code>AUDIO</code>, <code>DISPLAY</code>, <code>EMAIL</code>, or <code>PROCEDURE</code></li></ul><p>Determines how the alarm will behave.</p><div class="custom-container warning"><p class="custom-container-title">Important</p><p>If the action is set to <code>AUDIO</code>, a valid audio file <a href="#attach">ICSAttachment</a> must be specified.</p></div><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2><ul><li>Type: <code>string</code></li><li>Required: <strong>yes</strong></li></ul><p>The description for the alarm.</p><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2><ul><li>Type: <code>string</code></li><li>Required: <strong>yes</strong></li></ul><p>The summary for the alarm.</p><h2 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h2>`,13),v=a("code",null,"ICSDuration",-1),g=a("code",null,"Date",-1),k=a("li",null,[e("Required: "),a("strong",null,"yes")],-1),b=a("code",null,"ICSDuration",-1),y=a("code",null,"Date",-1),x=a("code",null,"ICSDuration",-1),I=a("code",null,"Date",-1),T=a("h2",{id:"duration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#"),e(" duration")],-1),C=a("code",null,"ICSDuration",-1),S=a("li",null,"Required: no",-1),D=a("code",null,"ICSDuration",-1),R=i('<p>How long the alarm should be present for.</p><h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of times to repeat the alarm.</p><h2 id="attach" tabindex="-1"><a class="header-anchor" href="#attach" aria-hidden="true">#</a> attach</h2><ul><li>Type: <code>ICSAttachment</code></li><li>Required: no</li><li>Valid value: an <code>ICSAttachment</code> object</li></ul><h3 id="attach-params" tabindex="-1"><a class="header-anchor" href="#attach-params" aria-hidden="true">#</a> attach.params</h3>',7),A=a("li",null,[e("Type: "),a("code",null,"string")],-1),w=a("li",null,"Required: no",-1),V={href:"https://www.kanzaki.com/docs/ical/attach.html",target:"_blank",rel:"noopener noreferrer"},q=i('<p>Sets the parameter for the <code>ICSAttachment</code>. This could be a MIME type if referencing a file.</p><h3 id="attach-url" tabindex="-1"><a class="header-anchor" href="#attach-url" aria-hidden="true">#</a> attach.url</h3><ul><li>Type: <code>string</code></li><li>Required: <strong>yes</strong></li><li>Valid value: a valid URL</li></ul><p>Sets the URL for the resource of this <code>ICSAttachment</code>.</p>',4);function E(L,U){const l=o("Badge"),t=o("RouterLink"),r=o("ExternalLinkIcon");return d(),p("div",null,[a("h1",h,[m,e(" Alarms "),n(l,{text:"6.0.0",vertical:"middle"})]),a("p",null,[_,e("s are used for "),n(t,{to:"/api/icalendar.html#addalarm-alarm-alarm"},{default:s(()=>[e("iCalendar event alarms")]),_:1}),e(" and are often used for reminders before an event occurs.")]),f,a("ul",null,[a("li",null,[e("Type: "),n(t,{to:"/config/durations.html"},{default:s(()=>[v]),_:1}),e(" or "),g]),k,a("li",null,[e("Valid value: a "),n(t,{to:"/config/durations.html"},{default:s(()=>[b]),_:1}),e(" object, or a valid "),y,e(" reference")])]),a("p",null,[e("When to trigger the alarm. This can be a "),n(t,{to:"/config/durations.html"},{default:s(()=>[x]),_:1}),e(" object representing the time to display before or after an event, or a valid "),I,e(" reference.")]),T,a("ul",null,[a("li",null,[e("Type: "),n(t,{to:"/config/durations.html"},{default:s(()=>[C]),_:1})]),S,a("li",null,[e("Valid value: a "),n(t,{to:"/config/durations.html"},{default:s(()=>[D]),_:1}),e(" object")])]),R,a("ul",null,[A,w,a("li",null,[e("Valid value: any "),a("a",V,[e("ICS Attachment parameter"),n(r)])])]),q])}const j=c(u,[["render",E],["__file","alarms.html.vue"]]);export{j as default};
