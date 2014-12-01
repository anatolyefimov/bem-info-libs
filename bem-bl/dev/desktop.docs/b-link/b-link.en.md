**b-link** block is used inside the other blocks.

For a simple like set the following bemjson:

```bemjson
{
   block: 'b-link',
   url: 'http://company.yandex.ru',
   title: 'Click here to learn more',
   target: '_blank',
   content: 'The best company all over the world'
}
```

An `url` property transforms info a `href` attribute. The `title` and `target` properties turn into the relevant attributes.

﻿Makes a link or a pseudolink disabled.

For a convinient usage of an icon inside a link. 
Allows you to add a link to an `{ elem: inner }`. Contains css rules, that shift underlining from the link to its `inner` element.
﻿A **pseudo** modifier is to mark a link that does not open on another page.
It has a dashed underline.

This element is optional to contain a text of a link.
It is needed if a link includes grafic content, e.g. an icon.
