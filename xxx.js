// ==UserScript==
// @name         Random number substitution
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.random.org/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    delFrame();
    createFakeFrame();
})();


function delFrame() {
    let frameParent = document.getElementById('homepage-generator');
    frameParent.innerHTML = "";
}


function createFakeFrame() {
    let divParent = document.createElement("div");
    divParent.style.fontFamily = "veranda, sans";
    divParent.style.background = "#FFFFFF";
    divParent.style.padding = "5px";
    divParent.style.margin = "0px";
    divParent.style.width = "148px";
    divParent.style.color = "#777777";
    divParent.style.border = "1px solid #CCCCFF";

    divParent.id = "true-random-integer-generator";
    {
        let span1 = document.createElement("span");
        span1.style.textAlign = "center";
        span1.style.padding = "1px";
        span1.style.display = "block";
        span1.style.background = "#CCCCFF";
        span1.style.color = "#000000";
        span1.style.margin = "-6px";
        span1.style.marginBottom = "10px";

        span1.id = "true-random-integer-generator";
        span1.innerText = "True Random Number Generator";
        divParent.appendChild(span1);

        let span2 = document.createElement("span");
        span2.style.display = "block";
        span2.style.marginBottom = "5px";

        span2.id = "true-random-integer-generator-min-span";
        {
            let label = document.createElement("label");
            label.style.color = "#777777";
            label.innerText = "Min:";

            let input = document.createElement("input");
            input.style.width = "77px";
            input.style.marginLeft = "10px";
            input.style.padding = "1px 2px";

            input.type = "number";
            input.name = "true-random-integer-generator-min";
            input.id = "true-random-integer-generator-min";
            input.maxLength = "9";
            input.value = "1";
            input.onkeypress = "return integerJsInputControl(event)";

            span2.appendChild(label);
            span2.appendChild(input);
        }
        divParent.appendChild(span2);

        let span3 = document.createElement("span");
        span3.style.display = "block";
        span3.style.marginBottom = "5px";

        span3.id = "true-random-integer-generator-max-span";
        {
            let label = document.createElement("label");
            label.style.color = "#777777";
            label.innerText = "Max:";

            let input = document.createElement("input");
            input.style.width = "77px";
            input.style.marginLeft = "6px";
            input.style.padding = "1px 2px";
            input.type = "number";
            input.name = "true-random-integer-generator-max";
            input.id = "true-random-integer-generator-max";
            input.maxLength = "9";
            input.value = "100";
            input.onkeypress = "return integerJsInputControl(event);";

            span3.appendChild(label);
            span3.appendChild(input);
        }
        divParent.appendChild(span3);

        let span4 = document.createElement("span");

        span4.id = "true-random-integer-generator-max-button-span";
        {
            let input = document.createElement("input");
            input.style.display = "block";
            input.type = "number";
            input.name = "true-random-integer-generator-button";
            input.id = "true-random-integer-generator-button";
            input.onclick = "getTrueRandomInteger(document.getElementById('true-random-integer-generator-min').value, document.getElementById('true-random-integer-generator-max').value);";
            input.maxLength = "9";
            input.value = "Generate";
            span4.appendChild(input);
        }
        divParent.appendChild(span4);

        let label = document.createElement("label");
        label.innerText = "Result:";
        divParent.appendChild(label);

        let span5 = document.createElement("span");
        span5.style.display = "block";
        span5.style.padding = "2px";
        span5.style.marginBottom = "10px";
        span5.style.color = "#000000";
        span5.style.background = "#CCCCFF";
        span5.style.fontSize = "11pt";

        span5.id = "true-random-integer-generator-result";
        {
            let center = document.createElement("center");
            {
                let span6 = document.createElement("span");
                span6.style.fontSize = "100%";
                span6.style.fontWeight = "bold";
                {
                    let br = document.createElement("br");
                    span6.appendChild(br);
                }
                center.appendChild(span6);

                let span7 = document.createElement("span");
                span7.style.fontSize = "70%";
                //текст о мин, макс
                {
                    let br = document.createElement("br");
                    span7.appendChild(br);
                    //дата время
                }
                center.appendChild(span7);

            }
            span5.appendChild(center);
        }

        let span8 = document.createElement("span");
        span8.id = "true-random-integer-generator-credits";
        span8.innerText = "Powered by ";

        {
            let a = document.createElement("a");
            a.href = "https://www.random.org/";
            a.target = "_blank";
            a.innerText = "RANDOM.ORG";
            span8.appendChild(a);
        }
        divParent.appendChild(span8);
    }

    document.getElementById('homepage-generator').appendChild(divParent);
}