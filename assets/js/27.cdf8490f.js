(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{406:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"icalendar-options-calendaroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icalendar-options-calendaroptions"}},[t._v("#")]),t._v(" "),s("code",[t._v("ICalendar(options: CalendarOptions)")])]),t._v(" "),s("p",[t._v("Generates an iCalendar instance.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("options: CalendarOptions")])]),t._v(" - Basic calendar "),s("RouterLink",{attrs:{to:"/config/basic.html"}},[t._v("configuration options")]),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CalendarOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Happy Hour'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  location"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Bar, New York, NY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Let\\'s blow off some steam with a tall cold one!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-07-08T19:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-07-08T23:30:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  recurrence"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    frequency"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WEEKLY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    interval"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" icalendar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ICalendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"addevent-icalendar-icalendar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addevent-icalendar-icalendar"}},[t._v("#")]),t._v(" "),s("code",[t._v("addEvent(icalendar: ICalendar)")]),t._v(" "),s("Badge",{attrs:{text:"6.0.0",vertical:"middle"}})],1),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("icalendar: ICalendar")])]),t._v(" - "),s("code",[t._v("ICalendar")]),t._v(" instance of the event to add")])]),t._v(" "),s("p",[t._v("This method allows you to add multiple events to a single "),s("code",[t._v(".ics")]),t._v(" file. Returns the "),s("code",[t._v("ICalendar")]),t._v(" instance.")]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" secondEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ICalendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Monthly Meeting with Boss Man'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  location"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Conference Room 2A, Big Company, Brooklyn, NY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Meeting to discuss weekly things'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2022-07-08T19:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  recurrence"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    frequency"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MONTHLY'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nicalendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"addalarm-alarm-alarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addalarm-alarm-alarm"}},[t._v("#")]),t._v(" "),s("code",[t._v("addAlarm(alarm: Alarm)")]),t._v(" "),s("Badge",{attrs:{text:"6.0.0",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("Adds an alarm. Multiple different alarms may be added to a single instance. Returns the "),s("code",[t._v("ICalendar")]),t._v(" instance.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("alarm: Alarm")])]),t._v(" - "),s("RouterLink",{attrs:{to:"/config/alarms.html"}},[t._v("Alarm options")]),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" alarm1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Alarm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DISPLAY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  trigger"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1998-01-01T05:00:00Z'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'the event description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  summary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a quick summary'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    after"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    minutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" alarm2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Alarm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DISPLAY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  trigger"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    minutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncalendar\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAlarm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alarm1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAlarm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alarm2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nCLASS:PUBLIC\nDESCRIPTION:Let's blow off some steam with a tall cold one!\nDTSTART:20220708T190000\nDTEND:20220708T230000\nLOCATION:The Bar, New York, NY\nSUMMARY:Happy Hour\nBEGIN:VALARM\nACTION:DISPLAY\nDESCRIPTION:the event description\nSUMMARY:a quick summary\nDURATION:PT3M\nTRIGGER;VALUE=DATE-TIME:19980101T050000Z\nEND:VALARM\nBEGIN:VALARM\nACTION:DISPLAY\nDURATION:\nTRIGGER:-PT5M\nEND:VALARM\nTRANSP:TRANSPARENT\nEND:VEVENT\nEND:VCALENDAR\nUID:19hq3v1lm15\nDTSTAMP:20200916\nPRODID:datebook.dev\n")])])]),s("h2",{attrs:{id:"setmeta-key-string-value-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setmeta-key-string-value-string"}},[t._v("#")]),t._v(" "),s("code",[t._v("setMeta(key: string, value: string)")]),t._v(" "),s("Badge",{attrs:{text:"6.0.0",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("Sets iCalendar meta properties, such as "),s("code",[t._v("UID")]),t._v(", "),s("code",[t._v("DTSTAMP")]),t._v(", etc. Returns the "),s("code",[t._v("ICalendar")]),t._v(" instance.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("key: string")])]),t._v(" - iCalendar meta property key.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("value: string")])]),t._v(" - Value of the meta property.")])]),t._v(" "),s("h3",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("calendar\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMeta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e9de89b0a5e9ad6efd5e5ab543ec617c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"addproperty-key-string-value-icspropertyvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addproperty-key-string-value-icspropertyvalue"}},[t._v("#")]),t._v(" "),s("code",[t._v("addProperty(key: string, value: ICSPropertyValue)")]),t._v(" "),s("Badge",{attrs:{text:"6.0.0",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("Adds any additional desired iCalendar event property having the given key-value pair to the instance. Returns the "),s("code",[t._v("ICalendar")]),t._v(" instance.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("key: string")])]),t._v(" - iCalendar event property name.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("value: Record<string, any> | string | number")])]),t._v(" - A key-value subset of properties, or a valid value.")])]),t._v(" "),s("h3",{attrs:{id:"example-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("calendar\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CATEGORIES'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RECREATION,TEAM-BUILDING'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"result-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result-2"}},[t._v("#")]),t._v(" Result:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nCLASS:PUBLIC\nDESCRIPTION:Let's blow off some steam with a tall cold one!\nDTSTART:20220708T190000\nDTEND:20220708T230000\nLOCATION:The Bar, New York, NY\nSUMMARY:Happy Hour\nTRANSP:TRANSPARENT\nCATEGORIES:RECREATION,TEAM-BUILDING\nEND:VEVENT\nEND:VCALENDAR\nUID:19hq3v1lm15\nDTSTAMP:20200916\nPRODID:datebook.dev\n")])])]),s("h2",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" "),s("code",[t._v("render()")])]),t._v(" "),s("p",[t._v("Returns a generated "),s("a",{attrs:{href:"https://icalendar.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iCalendar"),s("OutboundLink")],1),t._v(" file content string containing the event details.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("calendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"result-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result-3"}},[t._v("#")]),t._v(" Result:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nCLASS:PUBLIC\nDESCRIPTION:Let's blow off some steam with a tall cold one!\nDTSTART:20220708T190000\nDTEND:20220708T230000\nLOCATION:The Bar, New York, NY\nSUMMARY:Happy Hour\nTRANSP:TRANSPARENT\nRRULE:FREQ=DAILY;INTERVAL=1\nEND:VEVENT\nEND:VCALENDAR\nUID:19hq3v1lm15\nDTSTAMP:20200916\nPRODID:datebook.dev\n")])])]),s("h2",{attrs:{id:"download-filename-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-filename-string"}},[t._v("#")]),t._v(" "),s("code",[t._v("download(fileName?: string)")])]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("fileName: string")])]),t._v(" - optional file name")])]),t._v(" "),s("p",[t._v("Downloads a "),s("code",[t._v(".ics")]),t._v(" file on the user's browser for use in local calendars and email clients.")])])}),[],!1,null,null,null);a.default=e.exports}}]);