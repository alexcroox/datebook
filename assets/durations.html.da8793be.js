import{_ as i,r,o as t,c as d,b as e,d as n,e as o,a as s}from"./app.863808ec.js";const l={},u={id:"durations",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#durations","aria-hidden":"true"},"#",-1),c=s('<p><code>ICSDuration</code>s are objects that represent timespans before or after an iCalendar event date. They can be used to trigger <a href="#alarms">alarms</a>.</p><h2 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h2><ul><li>Type: <code>boolean</code></li><li>Required: no</li></ul><p>If <code>true</code>, sets the duration to be <em>after</em> the event date. Otherwise, it defaults to <em>before</em> the date (a negative duration).</p><h2 id="weeks" tabindex="-1"><a class="header-anchor" href="#weeks" aria-hidden="true">#</a> weeks</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of weeks the duration spans.</p><h2 id="days" tabindex="-1"><a class="header-anchor" href="#days" aria-hidden="true">#</a> days</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of days the duration spans.</p><h2 id="hours" tabindex="-1"><a class="header-anchor" href="#hours" aria-hidden="true">#</a> hours</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of hours the duration spans.</p><h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> minutes</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of minutes the duration spans.</p><h2 id="seconds" tabindex="-1"><a class="header-anchor" href="#seconds" aria-hidden="true">#</a> seconds</h2><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Valid value: a positive integer</li></ul><p>The number of seconds the duration spans.</p>',19);function p(m,f){const a=r("Badge");return t(),d("div",null,[e("h1",u,[h,n(" Durations "),o(a,{text:"6.0.0",vertical:"middle"})]),c])}const _=i(l,[["render",p],["__file","durations.html.vue"]]);export{_ as default};