**b-link** block is used inside the other blocks.

For a simple like set the following bemjson:

```js
{
   block: 'b-link',
   url: 'http://company.yandex.ru',
   title: 'Click here to learn more',
   target: '_blank',
   content: 'The best company all over the world'
}
```

An `url` property transforms info a `href` attribute. The `title` and `target` properties turn into the relevant attributes.

This is an abstract container for an icon.

By default the block produces a tag `img` which has an one-pixel transparent image (.gif) and an empty attribute `alt`.

The block has optional attributes: `alt`, `url`, `width`, `height`.

Set property `url#` to make **b-icon** with another image. The same for attributes `alt`, `width` and `height`.

It is possible to use css sprites and single images for the block by using css-property `background: url(...);`
