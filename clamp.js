/**
 * @file 文本溢出解决方案 Released under the WTFPL license (http://www.wtfpl.net/about/)
 * @author jingchaofang <jing@turingca.com> Joseph Schmitt <http://joe.sh>  
 * Clamps an HTML element by adding ellipsis to it if the content inside is too long. http://joe.sh/clamp-js
 */

(function(){
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    /**
     * 溢出文本节点
     * @param  {Object} element 指定元素
     * @param  {Object} options 参数对象
     * @return {[type]}         [description]
     */
    function clamp(element, options) {
        options = options || {};

        var self = this;
        var win = window;
        var opt = {
                // 溢出文本行数，默认2
                clamp:              options.clamp || 2,
                // 使用支持的css属性实现
                useNativeClamp:     typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                // Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                // 在句号、连字符、短破折号、长破折号和字符空之间分割
                animate:            options.animate || false,
                // 分割字符数组
                splitOnChars:       options.splitOnChars || ['.', '-', '–', '—', ' '], 
                // 省略字符，默认省略号
                truncationChar:     options.truncationChar || '…',
                // 省略html片段
                truncationHTML:     options.truncationHTML
            };

        var sty = element.style;
        // 原始文本
        var originalText = element.innerHTML;
        // 是否支持CSS溢出属性
        var supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined';
        // 溢出文本行数
        var clampValue = opt.clamp;
        // 是否css值，溢出文本给定高度
        var isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1);
        var truncationHTMLContainer;
            
        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        /**
         * 返回指定元素的指定样式属性的值
         * @param  {Object} elem 指定元素
         * @param  {string} prop 指定属性
         * @return {string}      属性值
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function () {
                                return arguments[2].toUpperCase();
                            });
                        }
                        // IE:currentStyle 
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        /**
         * 获取最大行数
         * @param  {int} height 溢出文本包裹给定高度
         * @return {int}        最大行数
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight;
            var lineHeight = getLineHeight(element);

            // Math.floor()方法对一个数进行向下取整
            return Math.max(Math.floor(availHeight/lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        /**
         * 根据溢出行数获取最大高度
         * @param  {number} clmp 溢出行数
         * @return {number}      溢出最大高度
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        /**
         * 返回指定元素文本行的高度的整数型
         * @param  {Object} elem 指定元素
         * @return {number}      文本行的高度
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
            }
            return parseInt(lh);
        }


        // MEAT AND POTATOES
        // 最基本的部分
        var splitOnChars = opt.splitOnChars.slice(0);
        // 指定分割字符
        var splitChar = splitOnChars[0];
        // 字符块
        var chunks;
        var lastChunk;
        
        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        /**
         * 获取最后一个子元素，可能是另一个节点或者是节点的内容
         * @param  {Object} elem 指定元素
         * @return {Object}      最后一个子元素
         */
        function getLastChild(elem) {
            // Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                // pop()方法用于删除并返回数组的最后一个元素。
                return getLastChild(Array.prototype.slice.call(elem.children).pop());
            }
            // This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            // 这个是绝对的最后一个子元素，文本节点，但是有一些错误，删除它然后继续尝试
            else if (
                    !elem.lastChild
                    || !elem.lastChild.nodeValue
                    || elem.lastChild.nodeValue == ''
                    || elem.lastChild.nodeValue == opt.truncationChar
                ) {
                    // removeChild()方法可从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回null。
                    elem.lastChild.parentNode.removeChild(elem.lastChild);
                    return getLastChild(element);
                }
            // This is the last child we want, return it
            // 我们想要的最后一个子元素，返回它
            else {
                return elem.lastChild;
            }
        }
        
        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        /**
         * 截断，每次从文本中移除一个字符直到它的宽度或高度到达约定的最大传入参数
         * @param  {Object} target    最后一个子元素
         * @param  {number} maxHeight 溢出文本限定最大高度
         * @return {string}           溢出省略处理后文本
         */
        function truncate(target, maxHeight) {
            if (!maxHeight) {return;}
            
            /**
             * Resets global variables.
             */
            //重置全局变量
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }

            // replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
            // nodeValue属性设置或返回指定节点的节点值。
            // 删除字符中的省略字符
            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');
            
            // Grab the next chunks 捕获下一块
            // 如果chunks为空
            if (!chunks) {
                // If there are more characters to try, grab the next one
                // 如果还有更多的字符去尝试，捕获下一个
                if (splitOnChars.length > 0) {
                    // shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
                    splitChar = splitOnChars.shift();
                }
                // No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }
                // split()方法用于把一个字符串分割成字符串数组。
                chunks = nodeValue.split(splitChar);
            }
            
            // If there are chunks left to remove, remove the last one and see if the nodeValue fits.
            if (chunks.length > 1) {
                // console.log('chunks', chunks);
                // pop()方法用于删除并返回数组的最后一个元素。
                lastChunk = chunks.pop();
                // console.log('lastChunk', lastChunk);
                // join()方法用于把数组中的所有元素放入一个字符串。
                applyEllipsis(target, chunks.join(splitChar));
            }
            // No more chunks can be removed using this character
            else {
                chunks = null;
            }
            
            // Insert the custom HTML before the truncation character
            // 插入自定义的HTML片段在被截断的字符
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML;
            }

            // Search produced valid chunks 搜索产生的有效块
            if (chunks) {
                // It fits
                // 子元素高度小于溢出文本限定最大宽度
                if (element.clientHeight <= maxHeight) {
                    // There's still more characters to try splitting on, not quite done yet
                    // 仍旧有更多的字符要分割，还没有完全完成
                    if (splitOnChars.length >= 0 && splitChar != '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                    // Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
            // No valid chunks produced
            // 没有有效字符块产生
            else {
                // No valid chunks even when splitting by letter, time to move on to the next node
                // 没有有效的块，甚至当分割字母时，该移动到下一个节点
                if (splitChar == '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);
                    
                    reset();
                }
            }
            
            // If you get here it means still too big, let's keep truncating
            // 如果到这一步意味着字符串太大了，让我们继续截断字符
            if (opt.animate) {
                // 延迟继续阶段性字符
                setTimeout(function() {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            }
            else {
                // 继续截断字符
                return truncate(target, maxHeight);
            }
        }

        /**
         * 获取拼接后省略文本
         * @param  {Object} elem 指定元素
         * @param  {string} str  截断后字符文本
         * @return {string}      拼接后省略文本
         */
        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }

        // 开始构造
        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        }
        else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }
        // 溢出文本
        var clampedText;
        if (supportsNativeClamp && opt.useNativeClamp) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        }
        else {
            var height = getMaxHeight(clampValue);
            if (height < element.clientHeight) {
                // 获取溢出省略文本
                clampedText = truncate(getLastChild(element), height);
            }else if (height = element.clientHeight) {
                clampedText = originalText;
            }
        }
        
        return {
            'original': originalText,
            'clamped': clampedText
        }
    }

    window.$clamp = clamp;
})();
