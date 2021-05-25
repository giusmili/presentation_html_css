![](favicon/apple-touch-icon.png "html 5")
# Présentation html &amp; css

Dans ce dépôt le sujet est comment mettre en forme un document
<code>html et css.</code>

```html
<main>
        <figure>
            <img src="./asset/flash.jpg" alt="flash">
            <figcaption>
                <h2>Legende dc</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi laudantium voluptatibus.
                </p>
            </figcaption>
        </figure>
    </main>

```
<code>Côté css</code>

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
html{
  font-size: 62.5%;
  background-color: #f2f3e7;
}
body{
  font: 1.6rem 'Open Sans',sans-serif;
  margin: 0;
}
h1,h2,h3,h4,p,ul,figure{
  margin: 0;
  list-style: none;
  padding: 0;
}

/* theme */
:root{
    --color-primary: #120a1b;
    --color-secondary: #d0d394;
    --color-other: #ac6a35;
    --color-last: #d6a121;
}

```
## Type de fichiers
* html
* css
* js