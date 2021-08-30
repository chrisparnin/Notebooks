<!-- 
targets:
    - type: docker
      name: t1
      image: node:12-buster
    - type: docker
      name: t2
      image: node:12-buster
-->

# Notebooks
Docable Notebook playground

```|{type:'slides'}
https://docs.google.com/presentation/d/e/2PACX-1vRKjbwjlpceTDajOsA7Wey1EUBLu6RK2vQMv4T9lc9PFnEwqGkOdfyeA_bcV0Qtz_NmVOg_vBF__tSr/embed?start=false&loop=false&delayms=3000
```

### Quiz ❓

Based on the slides you just reviewed... Does *condition coverage* imply *branch coverage*?

```js|{type:'quiz', quiz_type:'singlechoice', quiz_answers:'1'}
- [ ] YES
- [ ] NO
```

We'll describe why (or why not) in next set of slides ⏭️.

But before doing that, we're going to get hands-on practice with measuring statement and branch coverage.

### Practice: Statement and Branch Coverage

Given the follow code, will we provide test inputs for achieving 100% statement and branch coverage...

```js
function inc(p, q) {
    if(q == undefined) q=1;
    if( p < 0 )
    {
        p = -p;
    }
    return p + q/q;
}
```

Use the following for providing test inputs.

```js | {type: 'file', path: 'test/test.js'}
var main = require("../index.js");

describe("unit tests for index.js", function() {

    it("testing inputs for inc()", function() {
       main.inc(1,1);
       // Add more test inputs...
       
    });

});
```

Calculate the current code coverage. Use the coverage report below to see what has not been covered. Try extending the tests to covere more branches and statements.

```bash | {type: 'command'}
npm run coverage
```

##### Coverage report

You can also view the coverage report by clicking the <kbd>Reload</kbd> button, or in a new tab or window, open the [coverage report](coverage/lcov-report/index.html):

<button onclick="window.frames['serviceFrameSend'].src+='';">Reload</button>
<iframe id="serviceFrameSend" src="README.md/env/t1/files/coverage/lcov-report/index.html" width="800" height="600"  frameborder="1"></iframe>


#### Storing the private key in the configuration server ⚒️

Now private key content needs to be placed inside the 🎛️  `config-server`, in a file called `~/.ssh/web-srv`. Use a terminal to create the file.

``` | {type: 'terminal', target: 't1'}
```

#### Authorizing the public key on the web server 🌐

Now, we need to authorize the private key for use on the 🌍  `web-srv`!

Edit the file `~/.ssh/authorized_keys`, and add the public key to the list of authorized keys. 💥  Warning! Do not delete other entries, otherwise you might make your VM in accessible from ssh.

``` | {type: 'terminal', target: 't2', 'background-color': '#003670'}
```
