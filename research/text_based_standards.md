---
layout: default
---

# Text-based math standards

**Note:** this effort is currently on due to lack of community interest. If you are interested in helping, let us know on GitHub, the mailing list or directly to the CG Chairs.

## Context

There is a split in the world of maths. On the one side you have math applications which do calculations. These applications typically use a text based standard which is easy for humans to type and easy for machines to parse and evaluate. On the other side you have applications which are about rendering maths for representation on the web or in printed form. This requires a much more rich and flexible standard to allow for all sorts of specific layouts of formulas, think of LaTeX or MathML.

It would be awesome if we had a single standard that could bridge these two sides: mathematical representation and calculation. This could give interoperability a boost since it would make it easy to have all sorts of cross-referencing between applications doing either calculation or representation of maths. It could make printed maths interactive, and add visual representations to math applications.

Requirements for such a standard would include:

- Easily readable and editable by humans (a text based standard)
- Easy to parse by machines (e.g. a concise and text based standard)
- Supports elements to do layout for rendering of maths

Let’s shortly see how some standards do against these criteria:

- LaTeX works great: it’s easy to write for humans and easy to parse by machines, and it is very flexible. However,  the language is so large and comprehensive that it’s hard to implement support for it in other applications. Defining a subset of it as a new standard could be interesting.
- MathML is an XML based format which is great for presenting maths. It’s very flexible but also very verbose. The standard is too large to easily implement support for it in applications, and the standard isn’t very human friendly too.
- Math applications like Mathematica, Matlab, etc use a text based standard to enter and evaluate maths. This standard is easy to read and edit by humans, is easy to parse, but is not flexible enough to allow for visual representation of formulas.
- An interesting case is the formula editor of LibreOffice, which is aiming at representation of maths, but has a simple, text based format underneath it which would be easy to parse for calculation purposes.
- Also Maple is interesting in this regard: it is a math application where you enter text, but it has built-in support to visually render entered formulas.

## Overview

This section shows the text based syntax of a number of well known math applications. They all show how the quadratic formula looks like in a text format:

![Quadratic formula](https://w3c.github.io/mathonwebpages/img/quadratic_formula.png)

Image source: [Wikipedia](https://www.wikiwand.com/en/Quadratic_equation)


### LaTeX

[LaTeX website](https://www.wikiwand.com/en/LaTeX)

LaTeX, a document preparation system, is used a lot in the academic world to write scientific documents. LaTeX is very strong in describing math for displaying/publication purposes.

The quadratic formula is represented as:

<pre>
    x = \frac{ { - b \pm \sqrt {b^2 - 4ac} } } { {2a} }
</pre>

### LibreOffice formula editor

[Book on the formula editor (2013)](https://wiki.documentfoundation.org/images/3/37/MG40-MathGuide.pdf)

A formula editor which allows to enter formulas both in text and visually.

The quadratic formula would be represented like:

<pre>
    x = {-b +- sqrt(b^2 – 4ac)} over {2a}
</pre>

### AsciiMath

[AsciiMath](https://www.wikiwand.com/en/AsciiMath)

A math standard

The quadratic formula is represented as:

<pre>
    x=(-b +- sqrt(b^2 – 4ac))/(2a)
</pre>

### MathSON

[MathSON draft](https://gist.github.com/laughinghan/4350e4438e6cfc951826)

A draft for a JSON based math standard

The quadratic formula is represented as:

<pre>
    ["x=", { "numer": ["-b±", { "sqrt": ["b", { "sup": ["2"] }, "-4ac"] }], "denom": ["2a"] }]
</pre>

### Mathematica, Matlab, Octave, mathjs

[Mathematica website](https://www.wolfram.com/mathematica/)<br>
[Matlab website](http://www.mathworks.com/index.html?s_tid=gn_loc_drop)<br>
[Octave website](https://www.gnu.org/software/octave/)<br>
[mathjs website](http://mathjs.org/)

Matlab, Mathematica, and Octave are well known math applications. Mathjs is a math library for browsers and node.js.

The quadratic formula would be represented like:

<pre>
    x1 = (-b + sqrt(b^2 - 4*a*c) / (2 * a)
    x2 = (-b - sqrt(b^2 - 4*a*c) / (2 * a)
</pre>

### Maple

[Maple](http://www.maplesoft.com/)

Maple is a math application too, but is capable of visually rendering the entered input or results.

![Maple code example](https://w3c.github.io/mathonwebpages/img/maple_code_example.jpg)

Image source: [StackExchange](http://tex.stackexchange.com/questions/66143/maple-package-for-latex)


### Microsoft Excel

Spreadsheet application

Quadratic formula:

<pre>
    = (-b + SQRT(b^2 - 4*a*c) / (2 * a)
    = (-b - SQRT(b^2 - 4*a*c) / (2 * a)
</pre>
