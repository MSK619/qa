export const cssqa = [
    {
      "question": "What is the CSS box model?",
      "answer": "<p>The CSS box model describes how elements are displayed and how their dimensions are calculated. It consists of margins, borders, padding, and the content area.</p><pre><code>div {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n  margin: 20px;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative, absolute, fixed, and sticky positioning?",
      "answer": "<p>Positioning determines how an element is placed in the layout. Relative is positioned relative to itself, absolute relative to the nearest positioned ancestor, fixed relative to the viewport, and sticky toggles between relative and fixed based on scroll.</p><pre><code>.relative { position: relative; }\n.absolute { position: absolute; }\n.fixed { position: fixed; }\n.sticky { position: sticky; top: 0; }</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS pseudo-classes?",
      "answer": "<p>Pseudo-classes define a special state of an element, such as hover, active, focus, or first-child.</p><pre><code>a:hover {\n  color: red;\n}\nli:first-child {\n  font-weight: bold;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS pseudo-elements?",
      "answer": "<p>Pseudo-elements allow styling of a part of an element, like ::before and ::after, which can insert content before or after an element.</p><pre><code>p::before {\n  content: 'Note: ';\n  font-weight: bold;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, block, and inline-block elements?",
      "answer": "<p>Block elements take full width and start on a new line. Inline elements flow within text. Inline-block allows block-like styling without breaking flow.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    },
    {
      "question": "What is Flexbox in CSS?",
      "answer": "<p>Flexbox is a layout module that allows flexible alignment, direction, and spacing of items inside a container. It simplifies responsive designs.</p><pre><code>.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is CSS Grid?",
      "answer": "<p>CSS Grid is a layout system that divides a container into rows and columns, enabling complex designs with less code.</p><pre><code>.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-gap: 10px;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative units (em, rem) and absolute units (px)?",
      "answer": "<p>Absolute units like px are fixed sizes. Relative units like em depend on parent font size, and rem is relative to root font size, which helps with responsive design.</p><pre><code>p { font-size: 2em; } /* 2 times parent font size */\nbody { font-size: 16px; }\nh1 { font-size: 2rem; } /* 32px */</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, inline-block, and block elements in CSS?",
      "answer": "<p>Inline elements flow within text, block elements start on a new line and take full width, and inline-block behaves like inline but allows block styling.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    },
    {
      "question": "What are media queries in CSS?",
      "answer": "<p>Media queries allow applying styles depending on device characteristics like screen width, height, orientation, or resolution for responsive design.</p><pre><code>@media (max-width: 768px) {\n  body {\n    background-color: lightblue;\n  }\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative, absolute, and fixed positioning?",
      "answer": "<p>Relative moves an element relative to its normal position, absolute moves it relative to the nearest positioned ancestor, and fixed positions it relative to the viewport.</p><pre><code>.relative { position: relative; top: 10px; }\n.absolute { position: absolute; top: 10px; }\n.fixed { position: fixed; top: 10px; }</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, block, and inline-block display?",
      "answer": "<p>Inline elements do not start on a new line, block elements take full width, and inline-block allows block-like features without line breaks.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    },
    {
      "question": "What is CSS specificity?",
      "answer": "<p>CSS specificity determines which rules apply when multiple selectors target the same element. Inline styles > IDs > Classes/attributes > Elements.</p><pre><code>#id { color: red; }\n.class { color: blue; }\ndiv { color: green; }</code></pre>",
      "open": false
    },
    {
      "question": "What are pseudo-classes in CSS?",
      "answer": "<p>Pseudo-classes define special states of elements, like :hover, :focus, or :first-child.</p><pre><code>a:hover {\n  color: red;\n}\nli:first-child {\n  font-weight: bold;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What are pseudo-elements in CSS?",
      "answer": "<p>Pseudo-elements allow styling parts of elements, like ::before and ::after, to insert content or decorate elements.</p><pre><code>p::before {\n  content: 'Note: ';\n  font-weight: bold;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is z-index in CSS?",
      "answer": "<p>z-index sets the stack order of elements. Higher values appear on top of lower ones. Works only on positioned elements.</p><pre><code>.top { position: relative; z-index: 10; }\n.bottom { position: relative; z-index: 1; }</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative, absolute, and fixed position?",
      "answer": "<p>Relative positions relative to itself, absolute relative to nearest positioned ancestor, fixed relative to viewport. Sticky combines relative and fixed depending on scroll.</p><pre><code>.sticky { position: sticky; top: 0; }</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS transitions?",
      "answer": "<p>Transitions allow smooth changes between property values over time when a property changes.</p><pre><code>div {\n  width: 100px;\n  transition: width 2s;\n}\ndiv:hover {\n  width: 200px;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS animations?",
      "answer": "<p>Animations define keyframes and allow elements to change styles over time in a controlled sequence.</p><pre><code>@keyframes slide {\n  from { left: 0; }\n  to { left: 100px; }\n}\ndiv {\n  position: relative;\n  animation: slide 2s infinite;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between absolute and relative units in CSS?",
      "answer": "<p>Absolute units like px are fixed; relative units like em, rem, vw, vh scale based on parent or viewport for responsiveness.</p><pre><code>p { font-size: 2em; } /* 2 times parent font size */</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, block, and inline-block elements?",
      "answer": "<p>Inline flows with text, block takes full width, inline-block allows block features without breaking line.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between absolute, relative, fixed, and sticky positions?",
      "answer": "<p>Relative moves relative to itself, absolute to the nearest positioned ancestor, fixed to viewport, sticky switches between relative and fixed depending on scroll.</p><pre><code>.sticky { position: sticky; top: 0; }</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS gradients?",
      "answer": "<p>Gradients allow smooth transitions between colors. Linear and radial gradients can be applied as backgrounds.</p><pre><code>div {\n  background: linear-gradient(to right, red, blue);\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between linear and radial gradients in CSS?",
      "answer": "<p>Linear gradients transition along a straight line; radial gradients transition outward from a center point.</p><pre><code>linear-gradient(red, blue);\nradial-gradient(circle, red, blue);</code></pre>",
      "open": false
    },
    {
      "question": "What is overflow in CSS?",
      "answer": "<p>Overflow controls content spilling out of a box. Values: visible, hidden, scroll, auto.</p><pre><code>div {\n  overflow: scroll;\n  height: 100px;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative and absolute units in CSS?",
      "answer": "<p>Relative units (em, rem, %, vw, vh) scale depending on parent or viewport; absolute units (px, cm, in) are fixed.</p><pre><code>div { width: 50%; height: 10vh; }</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS variables?",
      "answer": "<p>CSS variables (custom properties) allow reuse of values throughout a stylesheet using --name syntax and var() function.</p><pre><code>:root { --main-color: red; }\ndiv { color: var(--main-color); }</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between relative, absolute, fixed, and sticky positioning?",
      "answer": "<p>Relative moves relative to self, absolute relative to nearest positioned ancestor, fixed relative to viewport, sticky behaves like relative until scroll reaches a threshold.</p><pre><code>.sticky { position: sticky; top: 0; }</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS pseudo-elements and pseudo-classes?",
      "answer": "<p>Pseudo-elements (::before, ::after) style parts of elements; pseudo-classes (:hover, :first-child) style elements in a certain state.</p><pre><code>p::before { content: 'Note'; }\na:hover { color: red; }</code></pre>",
      "open": false
    },
    {
      "question": "What is z-index used for?",
      "answer": "<p>z-index controls stacking order of elements. Higher values appear above lower ones. Only works on positioned elements.</p><pre><code>.top { position: relative; z-index: 10; }\n.bottom { position: relative; z-index: 1; }</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, block, and inline-block?",
      "answer": "<p>Inline flows within text, block starts on new line and occupies full width, inline-block allows block styling without line break.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    },
    {
      "question": "What are media queries in CSS?",
      "answer": "<p>Media queries apply styles depending on device characteristics like width, height, or orientation for responsive design.</p><pre><code>@media (max-width: 768px) {\n  body { background-color: lightblue; }\n}</code></pre>",
      "open": false
    },
    {
      "question": "What are CSS transitions and animations?",
      "answer": "<p>Transitions smoothly change property values over time; animations use keyframes for more complex motion effects.</p><pre><code>div {\n  transition: width 2s;\n  animation: slide 2s infinite;\n}</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between em and rem units?",
      "answer": "<p>em is relative to the parent font-size; rem is relative to the root font-size.</p><pre><code>p { font-size: 2em; } /* 2 times parent */\nh1 { font-size: 2rem; } /* 2 times root */</code></pre>",
      "open": false
    },
    {
      "question": "What is the difference between inline, block, and inline-block display in CSS?",
      "answer": "<p>Inline flows with text, block takes full width and starts on a new line, inline-block allows block styling without breaking line flow.</p><pre><code>span { display: inline; }\ndiv { display: block; }\nbutton { display: inline-block; }</code></pre>",
      "open": false
    }
  ]
  