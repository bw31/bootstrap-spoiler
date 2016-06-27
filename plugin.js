CKEDITOR.plugins.add('spoiler', {
    lang: 'en,ru',
    icons: 'spoiler',
    init: function (editor) {
        if (editor.blockless)
            return;

        function createSpoiler() {
            var randomString = Math.random().toString(36).substring(2, 10);
            var spoilerContainer = editor.document.createElement('div', {'attributes': {'class': 'panel panel-primary'}});
            var spoilerHeading = editor.document.createElement('div', {
                'attributes': {
                    'class': 'panel-heading',
                    'role': 'tab',
                    'id': 'heading-' + randomString
                }
            });
            var spoilerTitle = editor.document.createElement('h4', {'attributes': {'class': 'panel-title'}});
            var spoilerLink = editor.document.createElement('a', {
                'attributes': {
                    'aria-expanded': false,
                    'data-toggle': 'collapse',
                    'href': '#collapse-' + randomString,
                    'role': 'button',
                    'class': 'collapsed'
                }
            });
            var spoilerCollapse = editor.document.createElement('div', {
                'attributes': {
                    'class': 'panel-collapse collapse',
                    'aria-expanded': false,
                    'aria-labelledby': 'heading-' + randomString,
                    'id': 'collapse-' + randomString,
                    'role': 'tabpanel'
                }
            });
            var spoilerContent = editor.document.createElement('div', {'attributes': {'class': 'panel-body'}});

            var header;
            header = prompt('Введите заголовок');

            spoilerLink.appendHtml(header);
            spoilerTitle.append(spoilerLink);
            spoilerHeading.append(spoilerTitle);
            spoilerContent.appendHtml('<p>Содержание</p>');
            spoilerCollapse.append(spoilerContent);

            spoilerContainer.append(spoilerHeading);
            spoilerContainer.append(spoilerCollapse);
            return spoilerContainer;
        }

        editor.addCommand('spoiler', {
            exec: function (editor) {
                var spoiler = createSpoiler();
                editor.insertElement(spoiler);
            }
        });

        editor.ui.addButton('Spoiler', {
            label: editor.lang.spoiler.toolbar,
            command: 'spoiler',
            toolbar: 'insert'
        });
    }
});