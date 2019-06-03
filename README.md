# ui-base

pequeño stack de utilidades armadas como web-components.

## ui-lazy-media

Permite la representación de background o imágenes responsiva mediante una expresión [srcset](#srcset). este WC solo imprime el contenido una vez que se produzca la intercesión con el scroll

| Property    | Type    | Default | Description                                           | Example                                                 |
| ----------- | ------- | ------- | ----------------------------------------------------- | ------------------------------------------------------- |
| srcset      | String  | ""      | Permite generar el recurso resposivo                  | `srcset="default.jpg, phone.jpg 520w, tablet.jpg 720w"` |
| type        | String  | image   | Permite definir el tipo de recurso a imprimir         | `type="video"` or `type="image"`                        |
| shadow-dom  | Boolean | false   | Permite habilitar el uso del shadowDom                | `shadow-dom`                                            |
| style-media | String  | ""      | Permite añadir la propiedad style al recurso de media | `style-media="width:50px;height:50px"`                  |

### srcset

A diferencia del `img[srcset]`, este agrupa `img[src]` y `img[srcset]` en una sola expresión, `ui-lazy-media` gracias a este string, creara un tag `picture` o un tag `style` ordenado por prioridad de escala.

#### Exprecion media

| Value         | Equal                                     |
| ------------- | ----------------------------------------- |
| `520w`        | `(min-width:520px)`                       |
| `520w!`       | `(max-width:520px)`                       |
| `520h`        | `(min-height:520px)`                      |
| `520h!`       | `(max-height:520px)`                      |
| `520w&&720w!` | `(min-width:520px) and (max-width:720px)` |
| `300w`        | `(min-width:520dpi)`                      |

> la url que no se acompañe de expresión se define como default.

### intercepted

esta propiedad será definida si ocurre intercepción del web-components.

## ui-scroll-header
