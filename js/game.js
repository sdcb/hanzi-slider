// 确保数据已加载
if (!window.HZ_GAME_DATA) {
    alert("数据加载失败，请检查 js/data.js 文件路径。");
}

const { SETS_LR, SETS_UD } = window.HZ_GAME_DATA;
const structureSelect = document.getElementById('structure-select');
const setSelect = document.getElementById('set-select');
const randomBtn = document.getElementById('random-btn');
const gameContainer = document.getElementById('game-container');
const viewportFrame = document.getElementById('viewport-frame');
const resultContent = document.getElementById('result-content');
const welcomeMsg = document.getElementById('welcome-msg');

// 当前状态
let currentSet = null;
let currentType = ''; // 'LR' or 'UD'
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
let sliderEl = null;
let itemSize = 0; // 单个滑动项的大小（高度或宽度）

// 更新偏旁下拉菜单
function updateSetOptions(type) {
    setSelect.innerHTML = '<option value="">-- 请选择一个偏旁 --</option>';
    
    if (!type) {
        setSelect.disabled = true;
        return;
    }
    
    setSelect.disabled = false;
    const sets = type === 'LR' ? SETS_LR : SETS_UD;
    
    sets.forEach((set, index) => {
        const option = document.createElement('option');
        option.value = `${type}-${index}`;
        option.textContent = set.name;
        setSelect.appendChild(option);
    });
}

// 监听结构选择变化
structureSelect.addEventListener('change', (e) => {
    const type = e.target.value;
    updateSetOptions(type);
    // 重置游戏区域
    gameContainer.style.display = 'none';
    welcomeMsg.style.display = 'block';
});

// 监听偏旁选择变化
setSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    if (!value) {
        gameContainer.style.display = 'none';
        welcomeMsg.style.display = 'block';
        return;
    }

    const [type, index] = value.split('-');
    currentType = type;
    currentSet = type === 'LR' ? SETS_LR[index] : SETS_UD[index];
    
    initGame();
});

// 随机选择功能
randomBtn.addEventListener('click', () => {
    // 1. 随机结构
    const types = ['LR', 'UD'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    // 2. 随机偏旁
    const sets = randomType === 'LR' ? SETS_LR : SETS_UD;
    const randomIndex = Math.floor(Math.random() * sets.length);
    
    // 3. 更新UI
    structureSelect.value = randomType;
    updateSetOptions(randomType);
    setSelect.value = `${randomType}-${randomIndex}`;
    
    // 4. 触发游戏开始
    // 手动触发 change 事件逻辑
    currentType = randomType;
    currentSet = sets[randomIndex];
    initGame();
});

function createCharHtml(char, pinyin, type, isRadical) {
    // type: 'LR' (拼音在上) or 'UD' (拼音在左)
    // isRadical: boolean
    
    const group = document.createElement('div');
    group.className = 'py-char-group';
    
    const pyDiv = document.createElement('div');
    pyDiv.className = 'pinyin';
    pyDiv.textContent = pinyin;
    
    const charDiv = document.createElement('div');
    charDiv.className = 'character';
    charDiv.textContent = char;

    // 结构顺序由 CSS flex-direction 控制
    group.appendChild(pyDiv);
    group.appendChild(charDiv);
    
    return group;
}

function initGame() {
    gameContainer.style.display = 'flex';
    welcomeMsg.style.display = 'none';
    viewportFrame.innerHTML = '<div class="mask-overlay"></div>'; // 清空并保留蒙版

    const layout = document.createElement('div');
    layout.className = currentType === 'LR' ? 'layout-lr' : 'layout-ud';
    
    // 1. 创建偏旁部分
    const radicalBox = document.createElement('div');
    radicalBox.className = 'radical-box';
    radicalBox.appendChild(createCharHtml(currentSet.radical, currentSet.pyRadical, currentType, true));
    
    // 2. 创建视窗和滑块
    const sliderViewport = document.createElement('div');
    sliderViewport.className = 'slider-viewport';
    
    const slider = document.createElement('div');
    slider.className = 'slider';
    sliderEl = slider;

    // 填充滑块内容
    currentSet.items.forEach(item => {
        const unit = document.createElement('div');
        unit.className = 'char-unit';
        unit.appendChild(createCharHtml(item.part, item.pyPart, currentType, false));
        slider.appendChild(unit);
    });

    sliderViewport.appendChild(slider);
    layout.appendChild(radicalBox);
    layout.appendChild(sliderViewport);
    viewportFrame.appendChild(layout);

    // 3. 计算尺寸和布局
    // 使用 requestAnimationFrame 确保 DOM 已渲染
    requestAnimationFrame(() => {
        calculateDimensions(radicalBox, sliderViewport, slider);
        updateResult(0); // 默认显示第一个
    });

    // 4. 绑定事件
    bindEvents(sliderViewport);
}

function calculateDimensions(radicalBox, sliderViewport, slider) {
    // 获取偏旁盒子的大小作为基准
    const rRect = radicalBox.getBoundingClientRect();
    const width = rRect.width;
    const height = rRect.height;

    // 强制统一所有单元格的大小
    const units = slider.querySelectorAll('.char-unit');
    
    if (currentType === 'LR') {
        // 左右结构：部件竖排，上下滑动
        // 视窗宽度 = 偏旁宽度，高度 = 3倍偏旁高度 (上下各露出一部分)
        
        itemSize = height;
        units.forEach(u => {
            u.style.height = `${height}px`;
            u.style.width = `${width}px`; // 宽度也统一
        });
        
        sliderViewport.style.width = `${width}px`;
        sliderViewport.style.height = `${height * 3}px`; // 扩大视窗
        
    } else {
        // 上下结构：部件横排，左右滑动
        // 视窗高度 = 偏旁高度，宽度 = 3倍偏旁宽度
        
        itemSize = width;
        units.forEach(u => {
            u.style.width = `${width}px`;
            u.style.height = `${height}px`;
        });
        
        sliderViewport.style.width = `${width * 3}px`; // 扩大视窗
        sliderViewport.style.height = `${height}px`;
    }
    
    // 重置位置
    // 初始偏移量为一个 itemSize，使第一个元素(index 0)位于中间
    // 视窗显示3个单位：[空/遮挡] [当前] [下一个/遮挡]
    // 实际上 index 0 在中间时，上面应该是空的。
    // 我们的 slider 是从 0 开始排列的。
    // 如果 translate = itemSize，那么 slider 的 top = itemSize。
    // 视窗 top = 0。
    // 视窗的中间位置是 itemSize ~ 2*itemSize。
    // slider 的第一个元素位置是 itemSize ~ 2*itemSize。正好居中。
    
    currentTranslate = itemSize;
    prevTranslate = itemSize;
    currentIndex = 0;
    setSliderPosition();
}

function bindEvents(viewport) {
    // 鼠标事件
    viewport.addEventListener('mousedown', touchStart);
    window.addEventListener('mousemove', touchMove);
    window.addEventListener('mouseup', touchEnd);
    
    // 触摸事件
    viewport.addEventListener('touchstart', touchStart, {passive: false});
    window.addEventListener('touchmove', touchMove, {passive: false});
    window.addEventListener('touchend', touchEnd);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function getPositionY(event) {
    return event.type.includes('mouse') ? event.pageY : event.touches[0].clientY;
}

function touchStart(event) {
    // 只有在视窗内点击才触发
    // 但为了更好的体验，我们绑定在 viewport 上，这里不需要额外检查
    event.preventDefault(); // 防止默认滚动
    isDragging = true;
    startPos = currentType === 'LR' ? getPositionY(event) : getPositionX(event);
    sliderEl.style.cursor = 'grabbing';
    sliderEl.style.transition = 'none';
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = currentType === 'LR' ? getPositionY(event) : getPositionX(event);
        const currentMove = currentPosition - startPos;
        currentTranslate = prevTranslate + currentMove;
        setSliderPosition();
    }
}

function touchEnd() {
    if (!isDragging) return;
    isDragging = false;
    sliderEl.style.cursor = 'grab';
    sliderEl.style.transition = 'transform 0.3s ease-out'; // 恢复过渡效果
    
    // 吸附逻辑
    // 视窗显示3个单位，中间是可视区
    // 偏移量 offset = itemSize
    // currentTranslate = offset - index * itemSize
    // => index * itemSize = offset - currentTranslate
    // => index = (offset - currentTranslate) / itemSize
    
    let index = Math.round((itemSize - currentTranslate) / itemSize);
    
    // 边界检查
    if (index < 0) index = 0;
    if (index >= currentSet.items.length) index = currentSet.items.length - 1;
    
    currentIndex = index;
    // 重新计算吸附位置
    currentTranslate = (1 - currentIndex) * itemSize;
    prevTranslate = currentTranslate;
    
    setSliderPosition();
    updateResult(currentIndex);
}

function setSliderPosition() {
    if (currentType === 'LR') {
        sliderEl.style.transform = `translateY(${currentTranslate}px)`;
    } else {
        sliderEl.style.transform = `translateX(${currentTranslate}px)`;
    }
}

function updateResult(index) {
    const item = currentSet.items[index];
    if (!item) return;

    // 显示组合结果
    resultContent.innerHTML = `
        <div class="result-combined">
            <div class="big-pinyin">${item.pyChar}</div>
            <div class="big-char">${item.char}</div>
        </div>
        <div class="result-equals">=</div>
        <div class="result-part">
            <div class="part-pinyin">${currentSet.pyRadical}</div>
            <div class="part-char">${currentSet.radical}</div>
        </div>
        <div class="result-plus">+</div>
        <div class="result-part">
            <div class="part-pinyin">${item.pyPart}</div>
            <div class="part-char">${item.part}</div>
        </div>
    `;
}
