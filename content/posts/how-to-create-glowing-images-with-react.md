---
title: How to Create Glowing Images with React
date: 2022-04-18 22:00
description: Creating glowing images with React
featuredImage: /assets/jack-b-qnBMlkav-j8-unsplash.jpg
featuredImageCaption: Photo by <a href="https://unsplash.com/@nervum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jack B</a> on <a href="https://unsplash.com/s/photos/glow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

First of all, even though this tutorial is based on React and styled-components, you can apply the same technique with any library/framework or just HTML and CSS.

## Preparing the Template

Let's run the following command to create a new React app:

```
npx create-react-app@latest glowing-images
```

After the installation is done and our project is created, we can open it and install our dependencies.

```
npm install styled-components
```

Now, we can delete all the files under `src` except `index.js` and `App.js` and set them like these:

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

```js
// src/App.js
function App() {
  return <div></div>;
}

export default App;
```

Now, our template is ready and we can start creating our glowing images.

## Glowing Images

Let's apply the global styles first to override default browser stylings and also apply a dark background to make the glow effect more visible.

```js
// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0.8rem;
    background-color: #19222D
  }
`;

export default GlobalStyle;
```

We import and use these styles in our app like:

```js{2, 7}
// src/App.js
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
```

Let's start creating `GlowingImage` component to render our images.

```js
// src/GlowingImage.js
import styled from 'styled-components';

const GlowingImageRoot = styled.div`
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

We will use [Picsum](https://picsum.photos/) to get random images.  
Let's display the image by centering it horizontally in our app:

```js{3-4,6-10,16-21}
// src/App.js
import GlobalStyle from "./GlobalStyle";
import GlowingImage from "./GlowingImage";
import styled from "styled-components";

const MainContent = styled.div`
  max-width: 24rem;
  margin: auto;
  padding: 1rem;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainContent>
        <GlowingImage
          src="https://picsum.photos/230/345?random=0"
          alt="Glowing Image"
        />
      </MainContent>
    </div>
  );
}

export default App;
```

It should look like this now:

![](/assets/glowing-images-01.jpg)

Now we need to add the glow effect. As you can guess, we will use `GlowingImageRoot` to add the stylings.

We will create a pseudo element by using `:before` and set its background image as same as our image. By doing this, we will have two layers of the same image on top of each other.

We also set `border-radius` and make `img` to inherit it to have a little rounded image.

```js{5-18}
// src/GlowingImage.js
import styled from 'styled-components';

const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
  }

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

Now, we can apply stylings to the background image, without affecting the original one.

To imitate a glow effect, we will add some blur to the background image and give it a little saturation to make its colors sharper.

```js{18,19}
// src/GlowingImage.js
import styled from 'styled-components';

const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(0.6rem) saturate(2);
  }

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

We have a subtle glow now!

![](/assets/glowing-images-02.jpg)

To make it more visible, we can apply some scaling too. We can make the background image bigger by scaling it up, but I prefer making the original image slightly smaller like:

```js{26}
// src/GlowingImage.js
import styled from 'styled-components';

const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(0.6rem) saturate(2);
  }

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(0.98);
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

And it's done!

![](/assets/glowing-images-03.jpg)

To better understand this technique, we can make the original image non-visible temporarily and reveal our glowing image trick like:

```js{27}
// src/GlowingImage.js
import styled from 'styled-components';

const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(0.6rem) saturate(2);
  }

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(0.98);
    opacity: 0;
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

If you want, you can also add some hover animation to the glow effect like:

```js{2,4-12,32-36}
// src/GlowingImage.js
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.98);
  }
`;

const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(0.6rem) saturate(2);
  }

  &:hover {
    &:before {
      animation: ${glow} 500ms ease-in-out alternate infinite;
    }
  }

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(0.98);
  }
`;

function GlowingImage({ src, alt }) {
  return (
    <GlowingImageRoot src={src}>
      <img src={src} alt={alt} />
    </GlowingImageRoot>
  );
}

export default GlowingImage;
```

## Demo

You can check the live demo on [CodeSandbox](https://codesandbox.io/s/xnui7d):

https://codesandbox.io/s/xnui7d

Thanks for reading!
