Bootstrap spoiler
============================
Спойлер плагин для CKEDITOR

Для корректного отображения и работы спойлера в самом редакторе необходимо:
- задать в contentCss: [CKEDITOR.basePath +"contents.css", "' . $bootstrapUrl . '"],
где $bootstrapUrl путь до bootstrap.css;
- добавить jquery.js, bootstrap.js в head редактора, например:
```js
CKEDITOR.on('instanceReady', function() {
                var sru = new CKEDITOR.dom.element('script'),
                jq = new CKEDITOR.dom.element('script');
                sru.setAttributes({
                    'src': '" . $bootstrapJs . "', // путь до bootstrap.js
                    'type': 'text/javascript'
                });
                jq.setAttributes({
                    'src': '" . $jqJs . "', // путь до jquery.js
                    'type': 'text/javascript'
                });
                var ruc = CKEDITOR.instances['dynamicpage-rucontent'];
                var ruh = ruc.document.getHead();
                ruh.append(jq);
                setTimeout(function() {ruh.append(sru);}, 500);
});
```